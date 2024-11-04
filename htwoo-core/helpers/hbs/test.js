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
    return lastId;
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

};