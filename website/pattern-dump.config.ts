import { defineConfig } from "pattern-dump";

// The htwoo.io website: content and config only. Its look is the htwoo theme (theme/, a git submodule used
// as a pattern package); the website has no patterns or styles of its own.

// Analytics only in what is published, as on the Hugo site (production builds only): on for `pd build`,
// off for `pd dev`. HTWOO_ANALYTICS=1 or 0 overrides it.
const analytics = process.env.HTWOO_ANALYTICS
  ? process.env.HTWOO_ANALYTICS === "1"
  : process.argv.includes("build");

export default defineConfig({
  sourceDir: "./src",
  patternsDir: "./src/patterns",
  outDir: "./dist",
  styles: { strategy: "parallel", dir: "./src/styles" },
  packages: ["@n8d/htwoo-theme"],
  themes: { default: "htwoo" },
  // Served at /assets/images/; references written /images/… are rewritten there.
  assets: { strategy: "central", dir: ["./images"] },
  site: {
    pagesDir: "./pages",
    outDir: "./site",
    // The site's address. The deploy workflow sets SITE_URL from the Pages setup (a fork serves under a path).
    url: process.env.SITE_URL ?? "https://htwoo.io/",
    image: "/assets/images/launch-img.jpg",
    head: analytics ? "./head.hbs" : undefined,
    tagPages: false,
    categoryPages: false,
    // The other tools' finished files, published as they are. The two builds run before `pd build`
    // (htwoo-core's `pl:publish-docs`, htwoo-react's `build-storybook`); `pd build` stops if either is missing.
    mounts: [
      { from: "../docs/htwoo-core", to: "/htwoo-core/" },
      { from: "../docs/htwoo-react", to: "/htwoo-react/" },
      // The component docs as the Hugo site built them, with the files their pages load (frozen/README.md).
      // One mount per folder: two mounts can't share a route, and the theme's files have `/`.
      // In the sitemap, as on the Hugo site; Pattern Lab's and Storybook's pages weren't.
      { from: "./frozen/components", to: "/components/", sitemap: true },
      { from: "./frozen/htwoo-components", to: "/htwoo-components/" },
      { from: "./frozen/assets/css", to: "/assets/css/" },
      { from: "./frozen/js", to: "/js/" },
      { from: "./frozen/images", to: "/images/" },
      // The favicons, the web manifest and the font provider's stylesheet, at the root.
      { from: "./theme/site-root", to: "/" },
    ],
    globals: {
      title: "hTWOo by N8D",
      // The main navigation, as the Hugo menu (config/_default/menus.yaml on the docs branch) had it. Written
      // by hand: a Pattern Dump entry can't be a page with children, nor list a folder's pages (finding F-26),
      // so a new how-to page needs an entry here.
      navigations: {
        main: [
          { page: "index.md", label: "Introduction" },
          { page: "getting-started.md", label: "Getting Started" },
          { page: "concepts.md", label: "Concepts" },
          {
            label: "Flavors",
            children: [
              { href: "/htwoo-core/", label: "hTWOo Core" },
              { href: "/htwoo-react/", label: "hTWOo React" },
              { href: "/htwoo-core/patterns/design-tokens-icon-overview/design-tokens-icon-overview.rendered.html", label: "hTWOo Icons" },
            ],
          },
          {
            label: "How To's",
            children: [
              { page: "how-to/svg-instead-of-icon-fonts.md" },
              { page: "how-to/how-to-spfx-angular-elements.md" },
              { page: "how-to/how-to-spfx-html.md" },
              { page: "how-to/how-to-spfx-react.md" },
            ],
          },
          { href: "https://github.com/n8design/htwoo-samples/", label: "Samples" },
          { href: "https://github.com/n8design/htwoo/", label: "Engage on GitHub" },
          {
            label: "Changelogs",
            // The packages' own changelogs on GitHub, until the site builds pages from them (finding F-02).
            children: [
              { href: "https://github.com/n8design/htwoo/blob/main/htwoo-core/CHANGELOG.md", label: "hTWOo Core - Change Log" },
              { href: "https://github.com/n8design/htwoo/blob/main/REACT-CHANGELOG.md", label: "hTWOo React - Change Log" },
            ],
          },
          { page: "case-studies/index.md", label: "Case Studies" },
          { page: "supporters/index.md", label: "Supporters" },
          { page: "code-of-conduct.md", label: "Code of Conduct" },
          { page: "license.md", label: "License" },
        ],
      },
      // The supporters, in the order the Hugo site listed them (finding F-07: kept here, not on their pages).
      supporters: [
        { name: "Solvion", logo: "/images/sponsors/solvion.svg", link: "https://www.solvion.net/" },
        { name: "Sympraxis", logo: "/images/sponsors/sympraxis.svg", link: "https://sympraxisconsulting.com" },
        { name: "Voitanos", logo: "/images/sponsors/voitanos.svg", link: "https://www.voitanos.io/" },
      ],
    },
  },
  build: { workbench: false },
});
