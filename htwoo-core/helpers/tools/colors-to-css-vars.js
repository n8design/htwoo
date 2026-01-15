const { basename } = require("path");
const path = require("path"),
 fs = require("fs"),
 yargs = require("yargs").argv;

const sourceFile = path.join(process.cwd(), yargs._[0])
 directory = path.dirname(sourceFile),
 fileName = path.basename(sourceFile),
 extension = path.extname(sourceFile),
 baseName = fileName.replace(extension, '');

console.log(baseName);

const themeJsonContent = JSON.parse(
    fs.readFileSync(sourceFile, null, "UTF-8")
);

console.log(themeJsonContent);

const keys = Object.keys(themeJsonContent);
console.log(keys);

let newItems = []

for (let key in keys) {
    console.log(keys[key], themeJsonContent[keys[key]]);
    newItems.push(`--${keys[key]}:${themeJsonContent[keys[key]]};`)
}

fs.writeFileSync(
    path.join('src/styles/00-base/colors', baseName+".scss"),
    `:root{ 
        ${newItems.join('\n')} 
    }`
);
