import type { StorybookConfig } from '@storybook-astro/framework';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|js)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook-astro/framework',
    // Static mode pre-renders stories at build time, so storybook-static/ deploys as plain files.
    options: { renderMode: 'static' },
  },
};

export default config;
