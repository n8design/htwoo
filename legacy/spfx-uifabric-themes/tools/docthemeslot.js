const path = require('path'),
    fs = require('fs'),
    coreFile = path.join(__dirname, '../src/theme-object.json'),
    outputFile = path.join(__dirname, '../docs/uif.theme.md'),
    sassPrefix = "$ouif-";

const heading1 = "# SASS Variables\r\n",
    heading2 = "\r\n## Based on existing themes slots\r\n";

if (fs.existsSync(coreFile)) {

    console.log('Exists .... OK');

    let sassFileContent = "";

    const coreThemeFileUO = JSON.parse(
        fs.readFileSync(coreFile), 'UTF-8');

    coreThemeFile = {};

    Object.keys(coreThemeFileUO).sort().forEach(key => {
        coreThemeFile[key] = coreThemeFileUO[key];
    });

    coreThemeKeys = Object.keys(coreThemeFile);

    let table1 = `| Theme Slot | SASS Variable | Color  |\r\n| --- | --- | --- |\r\n`,
        table2 = table1;

    coreThemeKeys.forEach(key => {

        let uifKey = key.replace('ms-', '');
        let table1row = "",
            table2row = table1row;
        if (coreThemeFile[key].toString().indexOf('[') !== -1) {
            //currentKey = sassPrefix + uifKey + ": " + coreThemeFile[key] + ";\r\n";
            table2row = `| ${key} | ${sassPrefix+ uifKey} | ${coreThemeFile[key]} |\r\n`;
        } else {
            // currentKey = "| "+ key +" | "+ sassPrefix + " | "+ uifKey + " | <div style='background-color: " + coreThemeFile[key] + "'> \"[theme:" + uifKey + ", default:" + coreThemeFile[key] + "]\";</div>|\r\n\r\n";
            table1row = `| ${key} |  ${sassPrefix+uifKey} | <span style='border: 1px black solid; background-color: ${coreThemeFile[key]}; display: inline-block; width: 2em; margin-right: 0.5em;'>&nbsp;&nbsp;</span>&nbsp;${coreThemeFile[key]} |\n`;
        }

        table1 += table1row;
        table2 += table2row;

    });

    console.log(sassFileContent);

    fs.writeFileSync(outputFile, heading1 + table1 + heading2 + table2, 'utf-8');

}