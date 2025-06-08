/**
 * HTWOO Core Package
 * 
 * Main export file for the HTWOO Core package
 */

// Export individual modules
const htwoo = require('./dist/js/cjs/htwoo.min.js');
const dialog = require('./dist/js/cjs/htwoo.dialog.min.js');
const nav = require('./dist/js/cjs/htwoo.nav.min.js');
const overflow = require('./dist/js/cjs/htwoo.overflow.min.js');
const pivot = require('./dist/js/cjs/htwoo.pivot.min.js');
const select = require('./dist/js/cjs/htwoo.select.min.js');
const table = require('./dist/js/cjs/htwoo.table.min.js');

// Export as a combined object
module.exports = {
  htwoo,
  dialog,
  nav,
  overflow,
  pivot,
  select,
  table
};
