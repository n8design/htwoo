const path = require('path');
const ConfigGenerator = require('./tasks/stylez.genconfig');
const HbsCompiler = require('./tasks/stylez.hbscompiler');

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

class StylezTasks{

    constructor(){

        this.configGenerator = ConfigGenerator;
        this.hbsCompiler = HbsCompiler;
        this.webbase = path.join(__dirname, '/web');
        this.$ = $;
        
    }

}

const instance = new StylezTasks();

module.exports = instance;
