const path = require('path');
const custom = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(mdx)",
    "../lib/**/*.stories.@(js|jsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs"
  ],
  features: {
    previewMdx2: true,
  }
}