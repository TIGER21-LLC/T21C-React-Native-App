import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// We use this to set the list of available viewports and the default viewport
// See: 
// https://www.npmjs.com/package/@storybook/addon-viewport
// https://storybook.js.org/docs/react/essentials/viewport
// https://github.com/storybookjs/storybook/blob/master/addons/viewport/src/defaults.ts

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'iphone6',
  },
}