# Aavegotchi Wiki Agent Notes

## Pull Requests (Quality Bar)

- Any **bug fix** or **feature** must ship as a **PR that includes tests** covering the change (and preventing regressions).
- PRs must clearly show a **successful Vercel deploy** (green Vercel status checks). Include the **Vercel Preview URL** in the PR description when applicable.

## Tables

This wiki does **not** render GitHub-flavored markdown pipe tables (they will display as plain text).

Use one of these instead:

1. Preferred: `table_<name>` placeholders + `data/tables/<pageID>.tsx`
   - In the markdown page (`posts/en/<pageID>.md`), put `table_<name>` on its own line.
   - Create `data/tables/<pageID>.tsx` exporting `tables`, where each entry has `tableName` matching `<name>`.
2. Alternative: raw HTML `<table>...</table>` blocks (only when the table is truly one-off).

## Workflow Velocity Upgrades (2026-02-16)

### Start-Task Preflight

Use the global preflight command before major work:

```bash
cstart <task-slug>
```

### Fast Check Gate

```bash
./scripts/fast-check.sh
```

Default checks:

- `yarn test`
- `yarn build`

### PR Automation

```bash
./scripts/open-pr.sh
```

### Post-Merge Recap

`post-merge-recap` runs on pushes to `main`/`master` and uploads a markdown recap artifact.
