# Aavegotchi Wiki Agent Notes

## Tables

This wiki does **not** render GitHub-flavored markdown pipe tables (they will display as plain text).

Use one of these instead:

1. Preferred: `table_<name>` placeholders + `data/tables/<pageID>.tsx`
   - In the markdown page (`posts/en/<pageID>.md`), put `table_<name>` on its own line.
   - Create `data/tables/<pageID>.tsx` exporting `tables`, where each entry has `tableName` matching `<name>`.
2. Alternative: raw HTML `<table>...</table>` blocks (only when the table is truly one-off).

