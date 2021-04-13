const path = require("path");
const fs = require("fs");

const sourceFile = 'source/_data/colors.json';
const directory = path.dirname(sourceFile);

const themeJsonContent = JSON.parse(
    fs.readFileSync('source/_data/colors.json', null, "UTF-8")
);

console.log(themeJsonContent);

const keys = Object.keys(themeJsonContent);
console.log(keys);

let newItems = []

for (let key in keys) {
    console.log(keys[key], themeJsonContent[keys[key]]);
    newItems.push({
       "name": keys[key],
       "value": themeJsonContent[keys[key]],
       "comment": ""
    })
}

fs.writeFileSync(
    path.join(directory, "color-converted.json"),
    JSON.stringify(newItems)
);
