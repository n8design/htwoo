/** general nodejs imports */
const fs = require('fs');
const {
  exec
} = require('child_process');


/** gulp init import */
const {
  src,
  dest,
  watch,
  series,
  parallel
} = require('gulp');

/** gulp plugin */
const ts = require('gulp-typescript'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  webpackStream = require('webpack-stream'),
  args = require('yargs'),
  rimraf = require('rimraf'),
  wp = require('webpack'),
  path = require('path'),
  bundleAnalyzer = require('webpack-bundle-analyzer');

/** Browser Sync Configuration */
const browserSync = require('browser-sync');
const gulpPlumber = require('gulp-plumber');
const server = browserSync.create();

/** check for productive switch */
args.argv['ship'] !== undefined ? isProduction = true : isProduction = false;

/** check for analyze switch */
args.argv['analyze'] !== undefined ? analyze = true : analyze = false;

/** base path definitions */
const tsSrc = './src/**/*.ts*',
  mdxSrc = './src/**/*.mdx',
  sassFiles = './src/**/*.scss',
  outDir = './lib/';

/** typescript project definition used for building */
const tsProject = ts.createProject('tsconfig.json');


/** injects the version  */
const version = (cb) => {

  if (fs.existsSync('./package.json')) {

    const pkgInfo = require('./package.json', 'UTF-8');

    const versionInfo = {
      name: pkgInfo.name,
      version: pkgInfo.version
    }

    fs.writeFileSync('./src/version.json',
      JSON.stringify(versionInfo, null, 2)
    );

  }

  cb();

}

const copyIcons = (cb) => {
  fs.mkdirSync("./lib/images");
  fs.copyFileSync('./src/images/hoo-icons.svg', './lib/images/hoo-icons.svg');
  cb();
}

/** TASK: TypeScript compile */
const tsCompile = () => {

  return src(tsSrc)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: './'
    }))
    .pipe(
      dest(outDir)
    );
};

/** TASK: compile SASS / SCSS */
const sassCompile = () => {

  return src(sassFiles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'compressed',
      precision: 10,
      includePaths: ['.']
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(dest(outDir))
    .pipe(server.reload({
      stream: true
    }));

};

/** TASK: webpack bundling of styles and TypeScript */
const webpack = () => {
  const webpackConfig = require('./webpack.config.js');

  let bannerText = "";
  const fs = require('fs');
  const package = './package.json';
  if (fs.existsSync(package)) {
    const packageFileContent = fs.readFileSync(package, 'UTF-8');
    const pagesContents = JSON.parse(packageFileContent);
    bannerText = `*****${pagesContents.name} - Version: ${pagesContents.version} - ${pagesContents.description}*****`;
  }
  webpackConfig.plugins = [new wp.BannerPlugin({
    banner: bannerText
  })];

  if (!isProduction) {
    console.log('\x1b[43m\x1b[30m%s\x1b[0m', " ⚠ Not A Production Build ⚠ ");
    webpackConfig.mode = 'development';
    webpackConfig.devtool = 'source-map';
    webpackConfig.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: "pre",
      use: ['source-map-loader']
    })
  }

  if (analyze) {
    const dropPath = path.join(__dirname, 'temp', 'stats');
    const lastDirName = path.basename(__dirname);
    const analyzerPlugIn = new bundleAnalyzer.BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.join(dropPath, `${lastDirName}.stats.html`),
      generateStatsFile: true,
      statsFilename: path.join(dropPath, `${lastDirName}.stats.json`),
      logLevel: 'error'
    })
    webpackConfig.plugins.push(analyzerPlugIn);
  }

  return src('lib/**/*.js')
    .pipe(plumber())
    .pipe(
      webpackStream(webpackConfig))
    .pipe(dest('dist'));
}

const prepublish = (cb) => {
  const fs = require('fs-extra');
  //Make package directory
  fs.mkdirSync("../packages/htwoo-react");

  const package = './package.json';
  if (fs.existsSync(package)) {
    const packageFileContent = fs.readFileSync(package, 'UTF-8');
    const pkgContents = JSON.parse(packageFileContent);
    delete pkgContents.scripts;
    delete pkgContents.devDependencies;
    delete pkgContents.dependencies.react;
    delete pkgContents.dependencies["react-dom"];
    pkgContents["peerDependencies"] = {
      "react": "16.x",
      "react-dom": "16.x"
    }
    pkgContents.main = "./index.js";
    pkgContents.types = "./index.d.ts";
    pkgContents.files = ["/*", "/dist"];
    fs.writeFileSync("../packages/htwoo-react/package.json", JSON.stringify(pkgContents), 'UTF-8');
  }

  //Copy library to package folder
  fs.copySync("./lib", "../packages/htwoo-react");
  fs.mkdirSync("../packages/htwoo-react/dist");
  fs.copySync("./dist", "../packages/htwoo-react/dist");
  //Copy README
  fs.copySync("README.md", "../packages/htwoo-react/README.md");

  if (!isProduction) {
    console.log('\x1b[43m\x1b[30m%s\x1b[0m', " ⚠ Not A Production Build ⚠ ");
  }

  cb();
}

const storybook = (cb) => {
  exec('npm run build-storybook -- -o ../docs/htwoo-react', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    cb();
  });
};

/** TASK: remove dist folder and start from scratch */
const clean = (cb) => {
  rimraf.sync('./dist')
  rimraf.sync('./lib');
  cb();
}

const publishclean = (cb) => {
  rimraf.sync('../packages/htwoo-react');
  cb();
}

const build = series(clean, version,
  parallel(tsCompile, sassCompile), copyIcons, webpack);

exports.build = build;
exports.clean = clean;
exports.storybook = storybook;

exports.prepublish = series(publishclean, build, storybook, prepublish);