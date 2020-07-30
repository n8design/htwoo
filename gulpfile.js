// Import `src` and `dest` from gulp for use in the task.
const {
    src,
    dest,
    watch,
    series
} = require('gulp');

const path = require('path');

const config = require('./.longlast.json');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const autoprefixer = require('autoprefixer');
const server = browserSync.create();

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const isDev = !isProd && !isTest;

const webpackStream = require('webpack-stream');

const {
    configGenerator,
    hbsCompiler,
    webbase
} = require('./server');

// // Import Gulp plugins.
// const babel = require('gulp-babel');
// const plumber = require('gulp-plumber');

const baseWatch = async (cb) => {
    watch(['src/**/*.scss'], styles);
    watch(['src/**/*.js'], series(scripts));

    watch(['config/**.json']).on('change', ()=>{
        server.reload()
    })

    watch([`${config.patternDir}**/*.hbs`])
        .on('add', (path) => {
            configGenerator.added(path);
            compileTemplates().then(() => {
                server.reload();
            })

        })
        .on('change', (path) => {
            configGenerator.changed(path);
            compileTemplates().then(() => {
                server.reload();
            })
        })
        .on('unlink', (path) => {
            configGenerator.deleted(path);
            compileTemplates().then(() => {
                server.reload();
            })
        });

    cb();
}

const serve = (cb) => {

    server.init({
        notify: false,
        server: {
            baseDir: webbase,
            directory: true,
            routes: {
                '/node_modules': path.resolve('node_modules'),
                '/config': path.resolve('./config'),
                '/': './.tmp/',
                '/images/': './src/images/'
            },
            https: true
        },
        open: false // remove if browser should open
    });

    cb();

};

const compileTemplates = async () => {
    return await hbsCompiler.compile(
        `${config.patternDir}**/*.hbs`,
        `${config.tmpDir}/scripts/`
    );
}

const webpack = () => {

    return src('lib/**/*.js')
        .pipe($.plumber())
        .pipe(
            webpackStream(require('./webpack.config.js.js')))
        .pipe(dest('.tmp/web/scripts'));

}

const styles = () => {
    return src('src/**/*.scss')
        .pipe($.plumber())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.postcss([
            autoprefixer()
        ]))
        .pipe($.if(!isProd, $.sourcemaps.write()))
        .pipe(dest('.tmp/'))
        .pipe(server.reload({
            stream: true
        }));
};

const scripts = (cb) => {

    return src('src/**/*.js')
        .pipe($.plumber())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.babel())
        .pipe($.if(!isProd, $.sourcemaps.write('.')))
        .pipe(dest(config.tmpDir))
        .pipe(server.reload({
            stream: true
        }));

}

series(configGenerator.startupCheck, compileTemplates);

exports.serve = series(styles, scripts, baseWatch, compileTemplates, serve);
exports.default = serve;