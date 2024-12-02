import { Preview } from '@storybook/react';
const preview: Preview = {
  parameters: {
    controls: {
      expanded: true
    },
    viewMode: 'docs',
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', ['Getting Started', 'Component Structure'], 'Advanced', 'Components', 'Contributing', 'Legacy Docs', ['V1'], ['Introduction', 'Advanced', 'Contributing']],
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
  },

  tags: ['autodocs']
}

export default preview;