"use strict";

let lastId = ``;
let lastIdClean = -1;

module.exports = function (Handlebars) {

  Handlebars.registerHelper('test', function () {
    return 'This is a test helper';
  });

  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
      case '&&':
        return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
        return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
    }
  });

  Handlebars.registerHelper('getJsonContext', function (data, options) {
    // console.debug(data, options)
    return options.fn(JSON.parse(data));
  });
  Handlebars.registerHelper('json', function (context) {
    // console.debug(context)
    return JSON.stringify(context);
  });
  Handlebars.registerHelper('isdefined', function (value) {
    return value !== undefined;
  });
  Handlebars.registerHelper('getId', function (value) {
    lastId = `${value}-${Math.floor(Math.random(100) * 100)}`;
    lastIdClean = parseInt(lastId.split('-')[1]);
    return lastId;
  });
  Handlebars.registerHelper('getLastId', function (value) {
    return lastId;
  });

  Handlebars.registerHelper('getLastNumericId', function (value) {
    return lastIdClean;
  });

  Handlebars.registerHelper('seoTitle', function (value) {

    if (value) {

      let seoJunks = value.split('-');
      let seoTitle = "";

      if (seoJunks.length > 1) {

        let firstEntry = seoJunks.shift();

        let seoTitle = firstEntry.charAt(0).toUpperCase() + firstEntry.slice(1) + ' - ';

        seoJunks.forEach(element => {

          seoTitle += ' ' + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();

        });

        return seoTitle + " - ";

      }
      // let seoTitle = value.split('-');
      return seoTitle;
    }
  });

  Handlebars.registerHelper('h1Title', function (value) {

    if (value) {

      if (value.indexOf('pages') !== -1) {
        return "";
      }

      let seoJunks = value.split('-');
      let seoTitle = "";

      if (seoJunks.length > 1) {

        let firstEntry = seoJunks.shift();

        let seoTitle = firstEntry.charAt(0).toUpperCase() + firstEntry.slice(1) + ' - ';

        seoJunks.forEach(element => {

          seoTitle += ' ' + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();

        });

        return `<h1>${seoTitle}</h1>`;

      }
      // let seoTitle = value.split('-');
      return seoTitle;
    }
  });

  Handlebars.registerHelper('seoKeyword', function (value) {

    if (value) {

      let seoJunks = value.split('-');
      let seoTitle = "";

      if (seoJunks.length > 1) {

        let firstEntry = seoJunks.shift();

        let seoTitle = firstEntry.charAt(0).toUpperCase() + firstEntry.slice(1) + ', ';

        seoJunks.forEach(element => {

          seoTitle += element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();

        });

        return seoTitle;

      }
      // let seoTitle = value.split('-');
      return seoTitle;
    }
  });

  Handlebars.registerHelper('dynamicPartial', function(partialName, context) {

    // console.debug('🤟🤟', partialName, context);
    // console.debug('🤟', Handlebars.partials[partialName]);

    const partial = Handlebars.partials[partialName];
  
    if (!partial) {
      return `Partial "${partialName}" not found.`;
    }
  
    // If the partial is a string, compile it first
    const template = typeof partial === "function" ? partial : Handlebars.compile(partial);
    return new Handlebars.SafeString(template(context));
  });

  Handlebars.registerHelper('avatarWithSize', function (size, options) {
    // If this is already an avatar object from iteration, use it
    const baseAvatar = this.mugshot ? this : (this.avatar || {});
    const sizedAvatar = Object.assign({}, baseAvatar, { size: size });
    return options.fn({ avatar: sizedAvatar });
  });

  Handlebars.registerHelper('extendObject', function (baseObject, overrides, options) {
    const extended = Object.assign({}, baseObject, overrides);
    return options.fn(extended);
  });

  Handlebars.registerHelper('repeatWithBase', function (baseData, count, options) {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += options.fn(baseData);
    }
    return result;
  });

  Handlebars.registerHelper('lt', function (a, b) {
    return a < b;
  });

  // Helper to create splash card with different image and optional overrides
  Handlebars.registerHelper('splashCardWithImage', function(imageIndex, baseSplashCard, rootContext) {
    const imageMap = {
      0: '../../images/card-images/htwoo-gm-001.svg',
      1: '../../images/card-images/htwoo-gm-002.svg',
      2: '../../images/card-images/htwoo-gm-003.svg'
    };
    
    // Get the variant data if it exists
    const variants = rootContext && rootContext['splash-card-variants'] ? rootContext['splash-card-variants'] : [];
    const variant = variants[imageIndex] || {};
    
    // Create the merged card object
    const result = {
      ...baseSplashCard,
      ...variant,
      headerImage: imageMap[imageIndex] || baseSplashCard.headerImage
    };
    
    return result;
  });

  // Helper to apply readonly/disabled states to input showcases
  Handlebars.registerHelper('inputWithState', function(inputType, state, options) {
    const globalInputs = this.input || {};
    const baseInput = globalInputs[inputType] || {};
    
    // Apply state overrides (readonly, disabled, etc.)
    const stateOverrides = state || {};
    const result = {
      ...baseInput,
      ...stateOverrides
    };
    
    return options.fn({ input: result });
  });

  // Helper to apply state to all inputs in a collection
  Handlebars.registerHelper('inputShowcase', function(showcaseType, options) {
    const globalInputs = this.input || {};
    const showcaseStates = this['input-states'] || {};
    
    const result = {};
    
    // Apply showcase states to each input type
    Object.keys(globalInputs).forEach(inputType => {
      const baseInput = globalInputs[inputType];
      const stateOverride = showcaseStates[inputType] || {};
      
      result[inputType] = {
        ...baseInput,
        ...stateOverride
      };
    });
    
    return options.fn({ input: result, 'showcase-type': showcaseType });
  });

};