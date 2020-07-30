const gulp = require('gulp');
// const gs = require('glob-stream');
// const chalk = require('chalk');
const plumber = require('gulp-plumber');
const path = require('path');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const concat = require('gulp-concat');
const merge = require('merge-stream');


const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

// const fs = require('fs');

// const processDir = process.cwd();

const hbsOptions = {
    handlebars: require('handlebars')
};

const templateNamespace = 'stylez.templates';

class HbsCompiler {

    static compile(src, dest) {

        let partials = gulp.src(src)
            .pipe($.plumber())
            .pipe(handlebars(hbsOptions))
            .pipe(wrap('Handlebars.registerPartial(<%= imports.processPartialName(file.relative) %>,' +
                'Handlebars.template(<%= contents %>));', {}, {
                    imports: {
                        processPartialName: function (fileName) {
                            let patternName = path.basename(fileName, '.js');
                            if (patternName.indexOf('_') === 0) {
                                patternName = patternName.substr(1);
                            }
                            return JSON.stringify(patternName);
                        }
                    }
                }));

        // template stream
        let templates = gulp.src(src)
            .pipe(plumber())
            // handlebars
            .pipe(handlebars(hbsOptions))
            // wrap
            .pipe(wrap('Handlebars.template(<%= contents %>)'))
            // namespace
            .pipe(declare({
                namespace: templateNamespace,
                noRedeclare: true
            }));
        // return merge
        return merge(partials, templates)
            // concat
            .pipe(concat(templateNamespace + '.js'))
            // build
            .pipe(gulp.dest(dest));

    }

}

module.exports = HbsCompiler;