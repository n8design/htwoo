const path = require('path');

const
    getPatterns = require('../tools/get-test');

console.debug(path.join(__dirname, '../dependencyGraph.json'));
console.debug(getPatterns);