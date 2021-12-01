const path = require('path');
const custom = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|mdx)",
    "../lib/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials"
  ]
}