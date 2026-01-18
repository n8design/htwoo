/**
 * Ice Build Configuration for Documentation: Compiles CSS for docs deployment
 */
export default {
  input: {
    path: 'src',
  },

  output: {
    path: '../docs/htwoo-core',
  },

  scss: {
    outDir: '../docs/htwoo-core/css',         // CSS goes directly to docs folder
    includePaths: ['node_modules'],
    sourceMap: false,
  },

  typescript: {},

  hotreload: {
    enabled: false,  // Disabled for docs build
  },
};
