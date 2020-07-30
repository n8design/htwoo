const pkg = require('../../package.json');

const yosay = () => {
    console.log("LONGLAST :: ", pkg.version);
}

module.exports = yosay;