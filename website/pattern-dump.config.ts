import { defineConfig } from "pattern-dump";

// The htwoo.io website: content and config only. Its look is the htwoo theme (theme/, a git submodule used
// as a pattern package); the website has no patterns or styles of its own.
export default defineConfig({
  sourceDir: "./src",
  patternsDir: "./src/patterns",
  outDir: "./dist",
  styles: { strategy: "parallel", dir: "./src/styles" },
  packages: ["@n8d/htwoo-theme"],
  themes: { default: "htwoo" },
  assets: { strategy: "central", dir: ["./images"] },
  site: {
    pagesDir: "./pages",
    outDir: "./site",
    // The site's address. The deploy workflow sets SITE_URL from the Pages setup (a fork serves under a path).
    url: process.env.SITE_URL ?? "https://htwoo.io/",
    // htwoo-core's style guide, where its workbench will be once htwoo-core is on Pattern Dump.
    workbenchUrl: "/htwoo-core/",
    globals: { title: "hTWOo" },
  },
  build: { workbench: false },
});
