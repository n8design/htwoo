# Frozen component docs

The `/components/` pages as the Hugo site published them, with the files those pages load from outside
`/components/`. They are deployed as they are, so no URL is lost; no new work goes into them. The htwoo-core
step replaces them with Pattern Dump's kiosk mode, with redirects from these URLs.

Built with the steps of the Hugo deploy workflow (`.github/workflows/hugo.yml`, Node 20, Hugo 0.108.0
extended) from htwoo `main` at `2297b8114` and the `docs` branch at `bc889ced5`:

| Folder | Published at | What it is |
|---|---|---|
| `components/` | `/components/` | the component docs pages (250) and their feeds (42), from htwoo-core's `docs:components` |
| `htwoo-components/` | `/htwoo-components/` | the pages' scripts and search index |
| `assets/css/` | `/assets/css/` | the Hugo theme's stylesheet the pages link |
| `js/` | `/js/` | the Hugo theme's script the pages load |
| `images/` | `/images/` | the link-preview image the pages name |

`pattern-dump.config.ts` publishes each folder with `site.mounts`. The pages are minified and use
`<base href="https://htwoo.io/…">`, so every link and file in them resolves against htwoo.io.
