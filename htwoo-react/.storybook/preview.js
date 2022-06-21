export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    expanded: true
  },
  viewMode: 'docs',
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Advanced', 'Atoms', 'Molecules', 'Organisms'],
    },
  },
  addons: [{
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: null,
      transcludeMarkdown: true,
    },
  }, ],
}