'use strict';

/**
 * @n8d/htwoo-patternlab-config
 *
 * Pattern Lab configuration package with Ice Build, Ice Hotreloader, and custom plugin system
 */

const path = require('path');

module.exports = {
  /**
   * Get the path to the plugin directory
   */
  getPluginPath: function() {
    return path.join(__dirname, 'plugin');
  },

  /**
   * Get the path to configuration templates
   */
  getTemplatesPath: function() {
    return path.join(__dirname, 'templates');
  },

  /**
   * Get the Pattern Lab config template
   */
  getPatternLabConfig: function() {
    return require('./templates/patternlab-config.json');
  },

  /**
   * Get the Ice Build config template
   */
  getIceConfig: function() {
    return require('./templates/ice.config.js');
  },

  /**
   * Get the recommended package.json scripts
   */
  getScripts: function() {
    return require('./templates/package-scripts.json');
  }
};
