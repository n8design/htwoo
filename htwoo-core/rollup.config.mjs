import { terser } from 'rollup-plugin-terser';

// Bundles the ES modules that `tsc -p tsconfig.package.json` compiles from src/ts into lib/js.
const libJs = '../packages/htwoo-core/lib/js';
const distJs = '../packages/htwoo-core/dist/js';

// entry module -> bundle name (htwoo.js, htwoo.dialog.js, ...)
const entries = {
  main: 'htwoo',
  dialog: 'htwoo.dialog',
  nav: 'htwoo.nav',
  overflow: 'htwoo.overflow',
  pivot: 'htwoo.pivot',
  select: 'htwoo.select',
  table: 'htwoo.table'
};

// output folder == module format
const formats = ['umd', 'cjs', 'amd'];

export default formats.flatMap(format =>
  Object.entries(entries).map(([entry, name]) => ({
    input: `${libJs}/${entry}.js`,
    output: [
      { file: `${distJs}/${format}/${name}.js`, name, format, exports: 'named' },
      { file: `${distJs}/${format}/${name}.min.js`, name, format, exports: 'named', plugins: [terser()] }
    ]
  }))
);
