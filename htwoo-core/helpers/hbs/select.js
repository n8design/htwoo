"use strict";

/**
 * This helper provides specific helpers for select dropdowns
 */

module.exports = function (Handlebars) {
  
  // Helper for select-options block
  Handlebars.registerHelper('select-options', function(options) {
    // Just return the block content with the current context
    return options.fn(this);
  });

  // Helper for select-options-grouped block
  Handlebars.registerHelper('select-options-grouped', function(options) {
    // Get select options grouped data from the context
    let context = this;
    
    // Check if we have select-options-grouped in the root data
    if (options.data && options.data.root && options.data.root['select-options-grouped']) {
      // Merge with the current context
      context = Object.assign({}, context, options.data.root['select-options-grouped']);
    }
    
    // If we're in a pattern context with select-options-grouped as a direct property
    if (this['select-options-grouped']) {
      context = Object.assign({}, context, this['select-options-grouped']);
    }
    
    // Execute the block with the context
    return options.fn(context);
  });

  // Helper for select-options-person block
  Handlebars.registerHelper('select-options-person', function(options) {
    // Get select options person data from the context
    let context = this;
    
    // Check if we have select-options-person in the root data
    if (options.data && options.data.root && options.data.root['select-options-person']) {
      // Merge with the current context
      context = Object.assign({}, context, options.data.root['select-options-person']);
    }
    
    // If we're in a pattern context with select-options-person as a direct property
    if (this['select-options-person']) {
      context = Object.assign({}, context, this['select-options-person']);
    }
    
    // Execute the block with the context
    return options.fn(context);
  });

  // Helper to directly render select options
  Handlebars.registerHelper('renderSelectOptions', function(options) {
    const items = options.hash.items || [];
    let result = '';
    
    items.forEach(item => {
      result += `<li data-value="${item.key}" class="hoo-option ${item.disabled || ''}" 
                    aria-disabled="${item.disabled ? 'true' : 'false'}">${item.value}</li>`;
    });
    
    return new Handlebars.SafeString(result);
  });
};
