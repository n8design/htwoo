'use strict';

const pluginName = 'plugin-design';
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const _ = require('lodash');

function writeConfigToOutput(patternlab, pluginConfig) {
  var pluginConfigPathName = path.resolve(
    patternlab.config.paths.public.root,
    'plugin'
  );
  try {
    fs.outputFileSync(
      pluginConfigPathName + '/' + pluginName + '.json',
      JSON.stringify(pluginConfig, null, 2)
    );
  } catch (ex) {
    console.trace(pluginName + ': Error occurred while writing plugin configuration');
    console.log(ex);
  }
}

function registerEvents(patternlab) {
  // Register event handlers here
  // Available events: https://github.com/pattern-lab/patternlab-node/wiki/Creating-Plugins#events
}

function getPluginFrontendConfig() {
  var defaults = {
    "name": "plugin-design",
    "templates": [],
    "stylesheets": [
      "../../plugins/" + pluginName + "/css/" + pluginName + ".css"
    ],
    "javascripts": [
      "plugins/" + pluginName + "/js/" + pluginName + ".js"
    ],
    "onready": "PluginDesign.init()",
    "callback": ""
  };

  // Merge with config.json if it exists
  try {
    var pluginConfig = require('./config.json');
    return _.extend({}, defaults, pluginConfig);
  } catch (e) {
    return defaults;
  }
}

function pluginInit(patternlab) {
  if (!patternlab) {
    console.error('patternlab object not provided to plugin-init');
    process.exit(1);
  }

  // Write plugin config
  var pluginConfig = getPluginFrontendConfig();
  writeConfigToOutput(patternlab, pluginConfig);

  // Add to patternlab plugins array
  if (!patternlab.plugins) {
    patternlab.plugins = [];
  }
  patternlab.plugins.push(pluginConfig);

  // Copy plugin dist files to public
  var pluginFiles = glob.sync(__dirname + '/dist/**/*');

  if (pluginFiles && pluginFiles.length > 0) {
    for (var i = 0; i < pluginFiles.length; i++) {
      try {
        var fileStat = fs.statSync(pluginFiles[i]);
        if (fileStat.isFile()) {
          var relativePath = path.relative(__dirname, pluginFiles[i]).replace('dist', '');
          var writePath = path.join(
            patternlab.config.paths.public.root,
            'plugins',
            'design',
            pluginName,
            relativePath
          );
          fs.copySync(pluginFiles[i], writePath);
        }
      } catch (ex) {
        console.trace(pluginName + ': Error occurred while copying plugin file', pluginFiles[i]);
        console.log(ex);
      }
    }
  }

  // Register events
  if (patternlab.config[pluginName] !== undefined && !patternlab.config[pluginName]) {
    registerEvents(patternlab);
    patternlab.config[pluginName] = true;
  }
}

module.exports = pluginInit;
