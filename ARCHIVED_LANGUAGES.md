# Archived Translations

As of **February 12, 2026**, the wiki is intentionally maintained as **English-only** in the live content tree.

## Why

Localized pages were not being actively maintained and had drifted from canonical English content. To reduce doc rot and keep AI/search signals clean, English is now the single source of truth.

## Archive Snapshot

- Tag: `archive-i18n-2026-02-12`
- Branch: `codex/archive-i18n-pre-en-only`

Both references point to the full multilingual snapshot that existed before EN-only cutover.

## What Was Removed From Live Tree

The following directories were removed from `posts/` on the active branch:

- `cn`
- `de`
- `es`
- `fil`
- `fr`
- `id`
- `it`
- `ja`
- `ko`
- `nl`
- `ru`
- `vi`
- `zh`

Only `posts/en` remains live.

## Restore Procedure

To restore one language:

```bash
git checkout codex/archive-i18n-pre-en-only -- posts/<lang>
```

Example:

```bash
git checkout codex/archive-i18n-pre-en-only -- posts/fr
```

To inspect the exact archived state:

```bash
git checkout archive-i18n-2026-02-12
```
