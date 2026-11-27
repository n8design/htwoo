# Legacy redirects

Old URLs that Pattern Dump's `redirectFrom` can't take, because it accepts only routes that end in `/`
(finding F-49). Each file is a redirect page written like Pattern Dump's own: a meta refresh to the page, relative
so it works under a fork's base path, `noindex`, and a canonical on htwoo.io. `pattern-dump.config.ts` publishes
the folder with `site.mounts`, outside the sitemap.

| Old URL | Goes to |
|---|---|
| `/how-to/how-to-spfx-react.html` | `/how-to/how-to-spfx-react/` |
| `/how-to/how-to-spfx-angular-elements.html` | `/how-to/how-to-spfx-angular-elements/` |

Both are linked from old pages elsewhere (lab.n8d.studio/htwoo/… forwards to the same path on htwoo.io) and were
404 on the Hugo site too. When Pattern Dump takes such routes, they become `redirectFrom` lines and this folder goes.
