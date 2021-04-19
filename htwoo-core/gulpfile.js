const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');

var isProd = false;

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const autoprefixer = require('autoprefixer');

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
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.postcss([
            autoprefixer()
        ]))
        .pipe($.if(!isProd, $.sourcemaps.write()))
        // .pipe($.sourcemaps.write())
        .pipe(dest('src/css'));

};

const pluginJSOverride = () => {

    return src('src/_plugins/**/*.js')
        .pipe(dest('public/_plugins'));

}

const pluginCSSOverride = () => {

    return src('src/_plugins/*.scss')
        .pipe($.plumber())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        // .pipe($.sourcemaps.init())
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.postcss([
            autoprefixer()
        ]))
        .pipe($.if(!isProd, $.sourcemaps.write()))
        // .pipe($.sourcemaps.write())
        .pipe(dest('public/_plugins'));

};

const serve = parallel(styles, pluginCSSOverride, baseWatch);

exports.default = serve;
exports.styles = styles;
exports.docs = docs;
exports.pluginCSSOverride = pluginCSSOverride;