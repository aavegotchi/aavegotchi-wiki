#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: deploy-and-monitor.sh [options]

Options:
  -m, --message "<msg>"   Commit message if local changes need committing
  -s, --source "<branch>" Source branch to merge into main (default: current branch)
  -t, --tag "<tag>"       Optional tag to create/push after merge
      --vercel-project     Vercel project to monitor (default: aavegotchi-wiki)
      --vercel-scope       Vercel scope/team slug (default: bullionix)
      --no-build          Skip npm build preflight
      --skip-merge        Skip merge/push to main (monitor only current HEAD)
      --no-watch          Skip GitHub/Vercel monitoring
  -h, --help              Show help

Workflow:
1) Optional commit on source branch (if working tree is dirty)
2) npm run build (unless --no-build)
3) Fast-forward merge source branch into main (unless --skip-merge)
4) Optional tag push
5) Monitor GitHub runs and Vercel deploy status (unless --no-watch)
EOF
}

require_cmd() {
  local cmd="$1"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "Error: required command '$cmd' not found in PATH." >&2
    exit 1
  fi
}

message=""
source_branch=""
tag=""
do_build="1"
do_merge="1"
do_watch="1"
vercel_project="${VERCEL_PROJECT:-aavegotchi-wiki}"
vercel_scope="${VERCEL_SCOPE:-bullionix}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    -m|--message)
      message="${2:-}"
      shift 2
      ;;
    -s|--source)
      source_branch="${2:-}"
      shift 2
      ;;
    -t|--tag)
      tag="${2:-}"
      shift 2
      ;;
    --vercel-project)
      vercel_project="${2:-}"
      shift 2
      ;;
    --vercel-scope)
      vercel_scope="${2:-}"
      shift 2
      ;;
    --no-build)
      do_build="0"
      shift
      ;;
    --skip-merge)
      do_merge="0"
      shift
      ;;
    --no-watch)
      do_watch="0"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage
      exit 1
      ;;
  esac
done

require_cmd git
require_cmd npm

if [[ "$do_watch" == "1" ]]; then
  if ! command -v gh >/dev/null 2>&1; then
    echo "Warning: gh not found; disabling GitHub monitoring."
  fi
  if ! command -v vercel >/dev/null 2>&1; then
    echo "Warning: vercel not found; disabling Vercel monitoring."
  fi
fi

current_branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ -z "$source_branch" ]]; then
  source_branch="$current_branch"
fi

if [[ "$current_branch" != "$source_branch" ]]; then
  echo "Switching from $current_branch to source branch $source_branch..."
  git checkout "$source_branch"
fi

echo "=== Source Branch Summary ($source_branch) ==="
git status --short
git log -1 --oneline

echo ""
echo "=== Optional Commit ==="
if ! git diff --quiet || ! git diff --cached --quiet; then
  git add -A
  if ! git diff --cached --quiet; then
    if [[ -z "$message" ]]; then
      message="docs: update wiki content"
    fi
    git commit -m "$message"
    git push origin "$source_branch"
  fi
else
  echo "Working tree clean; no commit needed."
fi

if [[ "$do_build" == "1" ]]; then
  echo ""
  echo "=== Build Preflight ==="
  npm run build
fi

merged_sha="$(git rev-parse HEAD)"

if [[ "$do_merge" == "1" ]]; then
  echo ""
  echo "=== Merge To Main (FF Only) ==="
  git fetch origin
  git checkout main
  git pull --ff-only origin main
  git merge --ff-only "$source_branch"
  git push origin main
  merged_sha="$(git rev-parse HEAD)"
  echo "Merged main SHA: $merged_sha"
fi

if [[ -n "$tag" ]]; then
  echo ""
  echo "=== Tag ==="
  git tag "$tag"
  git push origin "$tag"
fi

if [[ "$do_watch" != "1" ]]; then
  echo ""
  echo "Monitoring disabled (--no-watch)."
  exit 0
fi

echo ""
echo "=== Monitor GitHub ==="
if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
  gh run list --repo aavegotchi/aavegotchi-wiki --branch main --limit 5 || true
else
  echo "Skipping GitHub monitoring (gh missing or not authenticated)."
fi

echo ""
echo "=== Monitor Vercel ==="
if command -v vercel >/dev/null 2>&1; then
  vercel_cmd=(vercel list)
  if [[ -n "$vercel_project" ]]; then
    vercel_cmd+=("$vercel_project")
  fi
  vercel_cmd+=(--status READY)
  if [[ -n "$vercel_scope" ]]; then
    vercel_cmd+=(--scope "$vercel_scope")
  fi

  echo "Running: ${vercel_cmd[*]}"
  set +e
  "${vercel_cmd[@]}"
  vercel_status=$?
  set -e
  if [[ "$vercel_status" -ne 0 ]]; then
    echo "Skipping Vercel summary (check login/token, project, and scope)."
  fi
else
  echo "Skipping Vercel monitoring (vercel not installed)."
fi

echo ""
echo "=== Summary ==="
echo "source_branch: $source_branch"
echo "main_sha: $merged_sha"
echo "tag: ${tag:-none}"
