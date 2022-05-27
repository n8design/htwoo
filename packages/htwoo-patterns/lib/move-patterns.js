console.log('current dir', __dirname);
console.log('CWD', process.cwd());

const path = require('path'),
    fs = require('node:fs');

const pkgdir = path.join(__dirname, '..');
const cwd = path.join(process.cwd(), '../../..');
console.log(cwd);
let plSourcePath, target;

if (!fs.existsSync(path.join(cwd, 'patternlab-config.json'))) {

    console.log('------- ', path.join(cwd, 'patternlab-config.json'));
    console.log(`Pattern lab is not installed in the current ${cwd}
        Package was installed but patterns could not get compied.
    `);

    process.exit(0);

} else {

    const plConfig = require(path.join(cwd, 'patternlab-config.json'));

    plSourcePath = plConfig.paths.source.root;

}

if (plSourcePath) {

    target = path.join(cwd, plSourcePath);

} else {

    process.exit(1);

}

if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
}

copyFolderRecursiveSync(path.join(pkgdir, '_data'), target);
copyFolderRecursiveSync(path.join(pkgdir, '_patterns'), target);

function copyFileSync(source, target) {

    var targetFile = target;

    // If target is a directory, a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
    var files = [];

    // Check if folder needs to be created or integrated
    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    // Copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

console.log('Please make sure you also have @n8d/htwoo-core installed.')