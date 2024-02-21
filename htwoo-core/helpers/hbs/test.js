"use strict";

module.exports = function (Handlebars) {

  let lastId = ``;

  Handlebars.registerHelper('test', function () {
    return 'This is a test helper';
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
    this.lastId = `${value}-${Math.floor(Math.random(100) * 100)}`;
    return this.lastId;
  });
  Handlebars.registerHelper('getLastId', function (value) {
    return this.lastId;
  });
  Handlebars.registerHelper('seoTitle', function (value) {
    console.debug('\n\n\nInitial Value', value);
    if (value) {

      let seoJunks = value.split('-');
      let seoTitle = "";

      if (seoJunks.length > 1) {
        
        let firstEntry = seoJunks.shift();
        
        console.debug('After Shift::', seoJunks);
        console.debug('firstEntry:::', firstEntry);

        let seoTitle = firstEntry.charAt(0).toUpperCase() + firstEntry.slice(1)+' - ';
        
        console.debug('SEO Title First:::', seoTitle);


        seoJunks.forEach(element => {

          seoTitle += ' '+element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
          console.debug('SEO Title Later:::', seoTitle);

        });
        
        return seoTitle + " - ";

      }
      console.log('FINAL SEO TITLE', seoTitle);
      // let seoTitle = value.split('-');
      return seoTitle;
    }
  });

};