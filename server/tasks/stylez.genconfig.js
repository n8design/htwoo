// const fs = require('fs');
const fs = require('fs');
const path = require('path');
const log = require('fancy-log');
const chalk = require('chalk');
const configPath = path.resolve(path.join(process.cwd(), '/config/stylez.json'));
const cwd = process.cwd();

const patternItem = {
    title: '',
    name: '',
    file: '',
    category: ''
};

const defaultConfig = {
    patterns: []
};
// Load current configuration file
const loadConfig = () => {

    const config = configPath;

    if (fs.existsSync(config)) {

        let fileContent = fs.readFileSync(config, 'utf-8');

        try {

            let fileJson = JSON.parse(fileContent);

            return fileJson;

        } catch (error) {

            log(error.ERROR);

        }

    } else {

        return defaultConfig;

    }

};
// Load save changed configuraiton file
const saveConfig = (newConfig) => {

    const config = configPath;

    let sortedPatterns = newConfig.patterns.sort((a, b) => {

        if (a.file > b.file) {

            return 1;

        } else if (a.file < b.file) {

            return -1;

        }

        return 0;

    });

    sortedPatterns.forEach(element => {
        log(element.file);
    });

    newConfig.patterns = sortedPatterns;

    newConfig.patterns.forEach(element => {
        log(element.file);
    });

    try {

        const newConfigContent = JSON.stringify(newConfig, null, 4);

        fs.writeFileSync(config, newConfigContent, 'UTF-8');

    } catch (error) {

        log.error(error);

    }

};

const addItem = (config, file) => {

    // get base extension 'hbs'
    let extension = path.extname(file);

    // get filename
    let filename = path.basename(file);

    // get path trail to file
    let dirTrail = path.dirname(file).split(path.sep);

    // create new Pattern Item
    let curPatternItem = patternItem;

    // define new values for pattern
    curPatternItem.file = file;
    curPatternItem.category = dirTrail.pop().split('-').pop();
    curPatternItem.title = filename.split(extension).shift();
    curPatternItem.name = filename;

    // Push in a new item
    config.patterns.push(curPatternItem);

    return config;

};

// calculate current statistics
const showStats = (configuration) => {

    const stats = {
        atoms: 0,
        molecules: 0,
        organism: 0,
        templates: 0,
        pages: 0,
        sum: 0
    };


    if (configuration !== null && configuration !== undefined &&
        configuration.patterns !== null && configuration.patterns !== undefined) {

        configuration
            .patterns
            .forEach(item => {

                switch (item.category) {
                    case 'atoms':
                        stats.atoms += 1;
                        break;
                    case 'molecules':
                        stats.molecules += 1;
                        break;
                    case 'organism':
                        stats.organism += 1;
                        break;
                    case 'templates':
                        stats.templates += 1;
                        break;
                    case 'pages':
                        stats.pages += 1;
                        break;

                    default:
                        break;
                }

                stats.sum += 1;

            });

        printStats(stats);

    }

};

const printStats = (stats) => {

    log.info(
        chalk.bold('Statistics:')
    );

    log.info(
        'Overall: ',
        chalk.green(stats.sum),
        'Patterns'
    );

    log.info(
        chalk.bold('Details: '),
        chalk.green(stats.atoms), 'Atoms,',
        chalk.green(stats.molecules), 'Molecules,',
        chalk.green(stats.organism), 'Organism,',
        chalk.green(stats.templates), 'Templates,',
        chalk.green(stats.pages), 'Pages'
    );

};

class Genconfig {

    static changed(affectedFile) {

        // get file extension for removal
        let extension = path.extname(affectedFile);

        // just in case the current file is not an hbs
        if (extension.toLocaleLowerCase() !== '.hbs') {
            return;
        }

        let curConfig = loadConfig();

        let exists = curConfig.patterns.filter(item => {

            return item.file === affectedFile;

        });

        if (exists.length === 0) {

            curConfig = addItem(curConfig, affectedFile);

            log(curConfig);

            saveConfig(curConfig);

            showStats(curConfig);

        } else {

            log.info(
                chalk.bold('Changed File:'),
                chalk.green(path.basename(affectedFile))
            );

            showStats(curConfig);

        }

    }

    static added(affectedFile) {

        let curConfig = loadConfig();
        log('File added:', affectedFile);

        curConfig = addItem(curConfig, affectedFile);


        saveConfig(curConfig);

        showStats(curConfig);

    }

    static deleted(affectedFile) {

        let curConfig = loadConfig();

        log(curConfig);

        let newConfig = defaultConfig;

        newConfig.patterns = curConfig.patterns.filter(item => item.file !== affectedFile);

        log(newConfig);

        saveConfig(newConfig);

        showStats(curConfig);

    }

    static startupCheck() {

        log.info(chalk.bold('Startup Check:---'));

        let curConfig = loadConfig();

        if (curConfig === undefined || curConfig.patterns === undefined) {

            log.error(
                chalk.red('There is an issue in '),
                'stylez.json'
            );

            log.error(
                chalk.bold('Startup Check:'),
                chalk.red('... Failed')
            );

            // Exit all
            process.exit();

        }

        let checkedConfig = curConfig.patterns.filter(item => {

            let curFile = path.resolve(path.join(cwd, item.file));

            if (fs.existsSync(curFile)) {

                return true;

            } else {

                return false;

            }

        });

        curConfig.patterns = checkedConfig;

        saveConfig(curConfig);

        showStats(curConfig);

        log.info(chalk.bold('Startup Check:'), chalk.green(' ... OK'));

    }

}

module.exports = Genconfig;