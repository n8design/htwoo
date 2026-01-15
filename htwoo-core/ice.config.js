/**
 * Ice Build Configuration: Simple SCSS compile-over, no bundling.
 */
export default {
  input: {
    path: 'src',
    // No need to specify ts/scss patterns unless you want to override defaults
  },

  output: {
    path: 'public',
    // No filenames or bundling
  },

  scss: {
    outDir: 'public/css',         // All compiled CSS goes here
    includePaths: ['node_modules'],
    sourceMap: true,
    // No autoprefixer or extra plugins unless you want them
  },

  typescript: {},

  hotreload: {
    enabled: true,
    port: 3001,
    host: 'localhost',
    excludeExtensions: ['.map', '.d.ts', '.html', '.htm', '.hbs'],
  },
};