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
            // Links until the changelog pages are built from the packages' own files (finding F-02).
            children: [
              { href: "/changelog/htwoo-core-cl/", label: "hTWOo Core - Change Log" },
              { href: "/changelog/htwoo-react-cl/", label: "hTWOo React - Change Log" },
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
