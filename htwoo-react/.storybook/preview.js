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
      order: ['Introduction', ['Getting Started', 'Component Structure'], 'Advanced', 'Components', 'Contributing','Legacy Docs', ['V1'], ['Introduction','Advanced','Contributing']],
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
  },],
}