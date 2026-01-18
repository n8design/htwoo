import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.@(mdx)",
    "../src/**/*.stories.js"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-webpack5', options: {
      builder: {
        useSWC: true
      }
    }
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  
  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config;

export function enumOptions(someEnum) {
  return {
    options: Object.keys(someEnum)
      .filter((key) => !isNaN(parseInt(key)))
      .map((key) => parseInt(key)),
    mapping: someEnum,
    control: {
      type: 'select',
      labels: Object.values(someEnum).filter(
        (value) => typeof value === 'string'
      ),
    },
  }
}