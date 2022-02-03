# Custom Storybook Setup

We have a custom storybook setup that helps the team in —

- Coding frontend UI components without the need for backend setup. While allowing the same components to fully integrate with the backend when it is ready.
- Navigating a list of all frontend UI components and screens on a hosted web version of storybook here (TODO link).
- Testing all UI components via automated visual regression tests (TODO link).
- TODO add more points.

## Setup Details

The following steps are a one time custom setup that has already been done for this repository. For everyday use you can skip to section TODO, but it is highly recommended that you understand how and why the custom setup was done.

### React v/s React Native

Storybook started as a tool to help build UI componens for React based web apps. It later evolved to support many other frameworks including React Native. However, all the awesome Storybook functionalities are only available in the React web version, which is the most actively maintained version.

- https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/
- https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/

Because our react native app is powered by expo, which supports the package `@expo/webpack-config`, allowing us to build React Native mobile components as React web components — **we DO NOT use the React Native version of storybook and instead use a custom React setup** which gives us better desired functionality.

```
# Our storybook setup is NOT DONE like this
npx -p @storybook/cli sb init --type react_native

# It is done like this
npx -p @storybook/cli sb init --type react
[[followed by custom setup of `@expo/webpack-config` and `.storybook/webpack.config.js` and more]]
```

### Initiating Storybook in the App

This is a one time step already done for this repository.

```
npx -p @storybook/cli sb init --type react
```

Starting storybook right after this results in an error because we have a react-native app with react based storybook.

```
ERROR in ./node_modules/react-native/index.js 14:7
Module parse failed: Unexpected token (14:7)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
```

### Expo Webpack Configurations

we add it as a dev dependency

    yarn add -D @expo/webpack-config

then we add custom webconfig at `.storybook/webpack.config.js`

    const { resolve } = require("path");
    const { withUnimodules } = require("@expo/webpack-config/addons");

    module.exports = ({ config }) => {
    return withUnimodules(config, { projectRoot: resolve(__dirname, "../") });
    };

TODO improve.

### Storybook Layout Configurations

We customize the layout and controls for our usecase by configuring `.storybook/preview.js` and `.storybook/manager.js`

TODO add config details.

## Local Frontend Development

Refer to relevant Figma designs (TODO link) frontend Jira issues (TODO link).

Run storybook > Open in local browser > See code changes live.

```
yarn storybook
```

See these examples for how to

- Create navigable UI "stories".
- Code standalone components.
- Compose multiple smaller components into bigger components.
