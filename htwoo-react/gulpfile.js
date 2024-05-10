/** dependency constants */
const reactVer = ">=16 <=18.2";

/** general nodejs imports */
const fs = require("fs");
const { exec } = require("child_process");

/** gulp init import */
const { src, dest, watch, series } = require("gulp");

/** gulp plugin */
const ts = require("gulp-typescript"),
  plumber = require("gulp-plumber"),
  sourcemaps = require("gulp-sourcemaps"),
  rimraf = require("rimraf")

/** Browser Sync Configuration */
const browserSync = require("browser-sync");
const server = browserSync.create();

/** base path definitions */
const tsSrc = "./src/**/*.ts*",
  outDir = "./lib/";

/** typescript project definition used for building */
const tsProject = ts.createProject("tsconfig.json");

const copyIcons = (cb) => {
  fs.mkdirSync("./lib/images");
  fs.copyFileSync("./src/images/hoo-icons.svg", "./lib/images/hoo-icons.svg");
  cb();
};

/** TASK: TypeScript compile */
const tsCompile = () => {
  return src(tsSrc)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(
      sourcemaps.write(".", {
        includeContent: false,
        sourceRoot: "./",
      })
    )
    .pipe(dest(outDir));
};

const prePublish = (cb) => {
  const fs = require("fs-extra");
  //Make package directory
  fs.mkdirSync("../packages/htwoo-react");

  const package = "./package.json";
  if (fs.existsSync(package)) {
    const packageFileContent = fs.readFileSync(package, "UTF-8");
    const pkgContents = JSON.parse(packageFileContent);
    delete pkgContents.scripts;
    delete pkgContents.devDependencies;
    delete pkgContents.dependencies.react;
    delete pkgContents.dependencies["react-dom"];
    pkgContents["peerDependencies"] = {
      react: reactVer,
      "react-dom": reactVer,
    };
    pkgContents.main = "./index.js";
    pkgContents.types = "./index.d.ts";
    pkgContents.files = ["/*"];
    fs.writeFileSync(
      "../packages/htwoo-react/package.json",
      JSON.stringify(pkgContents),
      "UTF-8"
    );
  }

  //Copy library to package folder
  fs.copySync("./lib", "../packages/htwoo-react");
  //Copy svg typing
  fs.copySync("./src/symbols.d.ts", "../packages/htwoo-react/symbols.d.ts");
  //Copy README
  fs.copySync("README.md", "../packages/htwoo-react/README.md");

  cb();
};

const storybook = (cb) => {
  exec(
    "npm run build-storybook -- -o ../docs/htwoo-react",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      cb();
    }
  );
};

/** WATCH: watch for ts{x} and sass */
const watchSource = (cb) => {
  // watching typescript
  watch("./src/**/*.{ts,tsx,mdx}", tsCompile.on(
    "change",
    () => {
      server.reload();
    }
  ));
};

/** TASK: remove lib folder and start from scratch */
const clean = (cb) => {
  rimraf.sync("./lib");
  cb();
};

/** TASK: remove package folder and start from scratch */
const publishClean = (cb) => {
  rimraf.sync("../packages/htwoo-react");
  cb();
};

const build = series(
  clean,
  tsCompile,
  copyIcons
);

exports.build = build;
exports.watch = watchSource;
exports.clean = clean;
exports.storybook = storybook;

exports.prepublish = series(publishClean, build, storybook, prePublish);
