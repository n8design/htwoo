const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const autoprefixer = require('autoprefixer');

const baseWatch = async (cb) => {

    watch(['source/styles/**/*.scss'], styles);

    cb();

}

const styles = () => {
    return src('source/styles/**/*.scss')
        .pipe($.plumber())
        // .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.sourcemaps.init())
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.postcss([
            autoprefixer()
        ]))
        // .pipe($.if(!isProd, $.sourcemaps.write()))
        .pipe($.sourcemaps.write())
        .pipe(dest('source/css'))
};

const serve = parallel(styles, baseWatch);

exports.default = serve;
exports.styles = styles;

