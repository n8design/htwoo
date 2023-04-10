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
};