import {
  addons
} from '@storybook/addons';
import hooTheme from './hootheme.js';

addons.setConfig({
  theme: hooTheme,
  previewTabs: {
    'storybook/docs/panel': {
      index: -1
    },
    canvas: {
      hidden: true
    }
  },
});