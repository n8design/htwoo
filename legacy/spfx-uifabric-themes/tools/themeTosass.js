const path = require('path'),
    fs = require('fs'),
    coreFile = path.join(__dirname, '../src/theme-object.json'),
    outputFile = path.join(__dirname, '../_uif.theme.var.scss'),
    sassPrefix = "$ouif-";

if (fs.existsSync(coreFile)) {

    console.log('Exists .... OK');

    let sassFileContent = "";

    const coreThemeFile = JSON.parse(
        fs.readFileSync(coreFile), 'UTF-8');

    coreThemeKeys = Object.keys(coreThemeFile);

    coreThemeKeys.forEach(key => {

        let uifKey = key.replace('ms-', '');
        let currentKey = "";
        if (coreThemeFile[key].toString().indexOf('[') !== -1) {
            currentKey = sassPrefix + uifKey + ": " + coreThemeFile[key] + ";\r\n";
        } else {
            currentKey = sassPrefix + uifKey + ": \"[theme:" + uifKey + ", default:" + coreThemeFile[key] + "]\";\r\n";
        }

        sassFileContent += currentKey;

    });

    console.log(sassFileContent);

    fs.writeFileSync(outputFile, sassFileContent, 'utf-8');



}