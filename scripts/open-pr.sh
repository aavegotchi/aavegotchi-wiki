#!/usr/bin/env bash
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required." >&2
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Run this command inside a git repository." >&2
  exit 1
fi

branch="$(git rev-parse --abbrev-ref HEAD)"
case "$branch" in
  main|master)
    echo "Refusing to open PR from protected branch '$branch'. Create/use a feature branch." >&2
    exit 1
    ;;
esac

if git rev-parse --verify --quiet "refs/remotes/origin/$branch" >/dev/null; then
  git push
else
  git push -u origin HEAD
fi

base="${BASE_BRANCH:-$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@')}"
if [ -z "$base" ]; then
  base="main"
fi

title="${PR_TITLE:-$(git log -1 --pretty=%s)}"

body_file="$(mktemp)"
cat > "$body_file" <<'BODY'
## Summary

## Test Plan

- [ ] `./scripts/fast-check.sh`

## Vercel Preview

- URL:

## Checklist

- [ ] Feature/bug changes include tests
- [ ] Fast-check gate passed locally
- [ ] Vercel preview URL is attached
BODY

existing_pr="$(gh pr list --head "$branch" --base "$base" --state open --json number --jq '.[0].number')"

if [ -n "$existing_pr" ] && [ "$existing_pr" != "null" ]; then
  gh pr edit "$existing_pr" --title "$title" --body-file "$body_file"
  gh pr view "$existing_pr" --json url --jq '.url'
else
  gh pr create --base "$base" --head "$branch" --title "$title" --body-file "$body_file"
fi
