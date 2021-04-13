const path = require('path');
const custom = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../lib/**/*.stories.mdx",
    "../lib/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    };
  },
}