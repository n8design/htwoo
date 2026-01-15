"use strict";

/**
 * Utility helpers for PatternLab
 */

module.exports = function (Handlebars) {
  
  // Helper to provide default values for variables
  Handlebars.registerHelper('default', function(value, defaultValue) {
    return value != null ? value : defaultValue;
  });
  
  // Alias for default helper to ensure it's accessible
  Handlebars.registerHelper('defaultValue', function(value, defaultValue) {
    return value != null ? value : defaultValue;
  });
  
};
