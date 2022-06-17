export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    expanded: true
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Advanced', 'Atoms', 'Molecules', 'Organisms'],
    },
  },
  docs: {
    source: {
      state: 'open',
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