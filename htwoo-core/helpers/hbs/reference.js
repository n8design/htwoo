"use strict";

/**
 * This helper provides support for data references in JSON files using {{reference path}} notation
 * It will be replaced during PatternLab compilation with the actual data
 */

const _ = require('lodash');

module.exports = function (Handlebars) {
  
  // Add the missing eq helper
  Handlebars.registerHelper('eq', function(a, b) {
    return a === b;
  });
  
  // Register a preprocessor for pattern data
  // This would need to be integrated with PatternLab's data processing
  Handlebars.registerHelper('reference', function() {
    // Convert arguments to array
    const args = Array.prototype.slice.call(arguments);
    // Remove the last item which is the Handlebars options object
    const options = args.pop();
    
    // Process each path argument
    let result = [];
    args.forEach(path => {
      if (typeof path === 'string') {
        // Split path by dots to navigate nested objects
        const parts = path.split('.');
        // Get the referenced data from the root context
        let data = this;
        
        // Navigate to the referenced data
        for (const part of parts) {
          if (data && data[part] !== undefined) {
            data = data[part];
          } else {
            console.warn(`Reference path not found: ${path}`);
            data = [];
            break;
          }
        }
        
        // Add referenced data to result
        if (Array.isArray(data)) {
          result = result.concat(data);
        } else if (typeof data === 'object') {
          result.push(data);
        }
      } else if (Array.isArray(path)) {
        // If the path is already an array, add its items
        result = result.concat(path);
      }
    });
    
    return result;
  });
  
  // Data expansion helper for use in Handlebars templates
  Handlebars.registerHelper('expandData', function(context, options) {
    if (!context) return '';
    
    // Process any {{reference}} strings in the context
    const processObject = (obj) => {
      if (!obj || typeof obj !== 'object') return obj;
      
      // Create a new object to avoid modifying the original
      const result = Array.isArray(obj) ? [] : {};
      
      // Process each property
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'string' && value.startsWith('{{reference ') && value.endsWith('}}')) {
          // Extract the path from the reference string
          const path = value.substring(12, value.length - 2).trim();
          // Get the referenced data using lodash get for safe navigation
          const referencedData = _.get(options.data.root, path);
          result[key] = referencedData;
        } else if (typeof value === 'object' && value !== null) {
          // Recursively process nested objects
          result[key] = processObject(value);
        } else {
          result[key] = value;
        }
      });
      
      return result;
    };
    
    return processObject(context);
  });
  
  // Select options helper for dynamic option generation
  Handlebars.registerHelper('selectOptions', function(optionsArray, selected, options) {
    if (!optionsArray || !Array.isArray(optionsArray)) {
      return options.inverse(this);
    }
    
    let result = '';
    optionsArray.forEach(option => {
      const isSelected = selected && option.key === selected;
      const context = {
        ...option,
        selected: isSelected ? 'selected' : ''
      };
      result += options.fn(context);
    });
    
    return result;
  });
  
  // Helper to get options from a category
  Handlebars.registerHelper('optionCategory', function(categoryName, options) {
    const categories = _.get(options.data.root, 'option-categories');
    if (!categories || !categories[categoryName]) {
      return options.inverse(this);
    }
    
    return options.fn(categories[categoryName]);
  });
  
  // Helper for select-options block context
  Handlebars.registerHelper('select-options', function(options) {
    // Get the select options data from the global data context
    const selectOptions = options.data.root['select-options'] || {};
    // Merge with the current context
    const context = Object.assign({}, this, selectOptions);
    // Execute the block with the merged context
    return options.fn(context);
  });
};
