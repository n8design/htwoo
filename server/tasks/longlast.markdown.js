'use strict';

const gulp = require('gulp');
const fs = require('fs');
const marked = require('marked');


class MarkDown {

    covertMarkdown(src, dest) {

        const mardownContent = fs.readFileSync(src, 'UTF-8');
        const htmlContent = marked(mardownContent);
        console.log(htmlContent);

        return gulp.src(src)
            .pipe(gulp.dest(dest));

    }

}

module.exports = new MarkDown();

// 'use strict';

// var through = require('through2');
// var frontMatter = require('front-matter');
// var marked = require('marked');
// var PluginError = require('plugin-error');

// var NAME = 'gulp-marked-json';
// var streamingErr = new PluginError(NAME, 'Streaming not supported');

// function parse(file, flatten, options) {
//   if (file.isNull()) {
//     return;
//   }

//   if (file.isStream()) {
//     return this.emit('error', streamingErr);
//   }

//   if (file.isBuffer()) {
//     var path = file.relative.split('.').shift().replace(/\//g, '.');
//     var parsed = frontMatter(file.contents.toString());
//     // custom markdown syntax like `````html
//     parsed.body = parsed.body.replace(/^`````([\w\:]+)$/gm, '`````$1-');

//     var body = parsed.body.split(/\n/);
//     var bodyMarked = marked(parsed.body, options);
//     var markup = bodyMarked.split(/\n/);

//     var title = markup[0].substr(0, 3) === '<h1' ? body[0] : false;

//     var data = {};
//     data[path] = parsed.attributes;

//     if (title && !data[path].title) {
//       // set the first h1 to title if title not set
//       data[path].title = (title.substr(0, 1) === '#') ? title.substr(2) : title;
//       // data[path].body = markup.slice(1).join(' ');
//     }

//     data[path].body = bodyMarked;

//     if (flatten) {
//       data = data[path];
//     }

//     file.extname = '.json';
//     file.contents = new Buffer(JSON.stringify(data));

//     return file;
//   }
// }

// module.exports = function(options) {
//   options = options || {};
//   marked.setOptions(options);
//   return through.obj(function(input, enc, callback) {
//     var file = parse(input, true, options);
//     this.push(file);
//     callback();
//   });
// };