import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(mdx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
  ],
  framework: { name: '@storybook/react-webpack5', options: {} }
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