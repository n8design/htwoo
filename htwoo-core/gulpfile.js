const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');

var isProd = true;

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const autoprefixer = require('autoprefixer');
const rollup = require('rollup');

const sass = require('gulp-sass')(require('sass'));


const baseWatch = async (cb) => {

    watch(['src/styles/**/*.scss'], styles);
    watch(['src/_plugins/**/*.scss'], pluginCSSOverride);
    watch(['src/_plugins/**/*.js'], pluginJSOverride);

    cb();

}

const docs = (cb) => {

    isProd = true;
    styles();
    cb()

}

const styles = () => {

    return src('src/styles/*.scss')
        .pipe($.plumber())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        // .pipe($.sourcemaps.init())
        .pipe(
            $.if(!isProd, sass.sync({
                outputStyle: 'expanded',
                precision: 6,
                includePaths: ['.']
            }))
                .on('error', sass.logError))
        .pipe(
            $.if(isProd, sass.sync({
                outputStyle: 'compressed',
                precision: 6,
                includePaths: ['.']
            }))
                .on('error', sass.logError))
        .pipe($.postcss([
            autoprefixer()
        ]))
        .pipe($.if(!isProd, $.sourcemaps.write()))
        // .pipe($.sourcemaps.write())
        .pipe(dest('src/css'));

};

const pluginJSOverride = () => {

    return src('src/plugins/**/*.js')
        .pipe(dest('public/plugins'));

}

const pluginCSSOverride = () => {

    return src('src/plugins/*.scss')
        .pipe($.plumber())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        // .pipe($.sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'expanded',
            precision: 6,
            includePaths: ['.']
        }).on('error', sass.logError))
        .pipe($.postcss([
            autoprefixer()
        ]))
        .pipe($.if(!isProd, $.sourcemaps.write()))
        // .pipe($.sourcemaps.write())
        .pipe(dest('public/_plugins'));

};

const createLibSass = () => {

    return src('src/styles/**/*.scss')
        .pipe(dest('../packages/htwoo-core/lib/sass'));

}
const createLibThemes = () => {

    return src('./themes/**/*')
        .pipe(dest('../packages/htwoo-core/lib/sass/themes'));

}

const createLibJS = () => {

    return src('src/js/**/*.js')
        .pipe(dest('../packages/htwoo-core/lib/js'));

}
const createLibComponents = () => {

    return src('src/components/**/*.scss')
        .pipe(dest('../packages/htwoo-core/lib/components'));

}

const movePatterns = (cb) => {

    src(['src/_data/*+/*'])
        .pipe(
            dest('../packages/htwoo-patterns/_data/')
        )
    src(['src/_patterns/**/*'])
        .pipe(
            dest('../packages/htwoo-patterns/_patterns/')
        )

    src(['src/images/**/*'])
        .pipe(
            dest('../packages/htwoo-patterns/images/')
        )

    cb();

}

const serve = parallel(styles, pluginCSSOverride, baseWatch);
const buildLib = series(createLibJS, createLibSass, createLibComponents, createLibThemes);
const buildPLRepo = series(movePatterns);

exports["build:lib"] = buildLib;
exports["build:pllib"] = buildPLRepo;
exports.default = serve;
exports.styles = styles;
exports.docs = docs;
exports.pluginCSSOverride = pluginCSSOverride;