var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, 'tests/fonttest.scss');
try {
sassTrue.runSass({file: sassFile}, describe, it);

} catch (exception) {
    console.log(exception);
}