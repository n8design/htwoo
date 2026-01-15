module.exports = {
  input: 'source',  // Pattern Lab uses 'source' directory by default
  output: 'public/css',
  includePaths: ['node_modules'],
  sourceMap: true,
  hotReload: {
    enabled: true,
    port: 3001
  }
};
