const gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    plumber = require('gulp-plumber');

// Run SASS Unit test
gulp.task('test', () => {

    gulp.src('test.js', {
            read: false
        })
        .pipe(plumber())
        // `gulp-mocha` needs filepaths so you can't have any plugins before it
        .pipe(mocha({
            reporter: 'nyan'
        }).on('err', () => {
            console.log('test failed...');
        }));
})

// Default task
gulp.task('default', () => {
    gulp.watch('**/*scss', ['test']);
});