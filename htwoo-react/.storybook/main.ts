import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { StorybookConfig } from '@storybook/react-webpack5';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    "../src/**/*.@(mdx)",
    "../src/**/*.stories.js"
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"), options: {
      builder: {
        useSWC: true
      }
    }
  },

  swc: () => ({
    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: true,
        jsx: true,
        decorators: false,
        dynamicImport: false
      },
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

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}