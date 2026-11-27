# Contributing

Issues and pull requests are welcome. Commits follow [Conventional Commits](https://www.conventionalcommits.org/)
with a sentence-case subject (`feat(website): Add …`); commitlint checks them on commit.

## Website

htwoo.io's pages live in `website/pages/` on `main` (markdown with front matter); the site config is
`website/pattern-dump.config.ts`. The `docs` branch and Hugo are retired: don't edit or push `docs`.

### Run it locally

```bash
git submodule update --init website/theme   # the theme, at the commit the website pins
cd website
npm ci
npm run dev                                 # pd dev: the site, with live reload
```

`pd dev` prints the address. `/htwoo-core/` and `/htwoo-react/` are other tools' builds, published as they are;
they work locally once built: `npm run pl:publish-docs -w htwoo-core` and `npm run build-storybook -w htwoo-react`
from the repository root. `npm run build` in `website/` is the production build (`pd build`), as the deploy runs it.

### How a change reaches htwoo.io

- **Content or config** (`website/`): a pull request to `main`. Merging it deploys the site ("Deploy the website").
- **Theme** (layouts, styles, scripts): a pull request to
  [n8design/htwoo-theme](https://github.com/n8design/htwoo-theme), merged with a merge commit. The site doesn't
  change yet: bump the pin here, in its own commit, as a pull request merged with a merge commit:

  ```bash
  cd website/theme && git fetch origin && git checkout <theme commit on main> && cd ../..
  git add website/theme
  git commit -m "chore(deps): Bump htwoo-theme to <short sha>"
  ```

  The pinned commit must be on the theme's `main`. Merging the bump deploys the site.
- **Redeploy** without a change: Actions → "Deploy the website" → Run workflow.
