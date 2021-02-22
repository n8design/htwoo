module.exports = function (Handlebars) {
  Handlebars.registerHelper('test', function () {
    return 'This is a test helper';
  });
  Handlebars.registerHelper('getJsonContext', function (data, options) {
    console.debug(data, options)
    return options.fn(JSON.parse(data));
  });
  Handlebars.registerHelper('json', function (context) {
    console.debug(context)
    return JSON.stringify(context);
  });
};