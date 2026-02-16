#!/usr/bin/env bash
set -euo pipefail

before="${1:-}"
after="${2:-HEAD}"
zero="0000000000000000000000000000000000000000"

if [ -n "$before" ] && [ "$before" != "$zero" ]; then
  range="$before..$after"
else
  range="$after~20..$after"
fi

echo "# Post-Merge Recap"
echo
echo "- Repository: $(basename "$(git rev-parse --show-toplevel)")"
echo "- Generated: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo "- Range: $range"
echo
echo "## Commits"
commits="$(git log --no-merges --pretty='- %h %s (%an)' "$range" 2>/dev/null || true)"
if [ -n "$commits" ]; then
  echo "$commits"
else
  echo "- No non-merge commits in range."
fi

echo
echo "## Merge Commits"
merges="$(git log --merges --pretty='- %h %s (%an)' "$range" 2>/dev/null || true)"
if [ -n "$merges" ]; then
  echo "$merges"
else
  echo "- No merge commits in range."
fi

echo
echo "## Referenced PRs"
prs="$(git log --pretty='%s' "$range" 2>/dev/null | grep -Eo '#[0-9]+' | sort -u || true)"
if [ -n "$prs" ]; then
  printf '%s\n' "$prs" | sed 's/^/- /'
else
  echo "- None found in commit subjects."
fi
