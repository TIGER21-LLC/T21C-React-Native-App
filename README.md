# T21C-React-Native-App

This code repository holds the frontend of TIGER21-Connect mobile app built with Expo and React Native. Data and business logic is provided by [this custom backend API](https://github.com/TIGER21-LLC/Connect-symfony) built with api-platform and Symfony5. The final app name—as shown on Google Play and Apple App Store—will be decided by Marketing Team and Members Experience Team of TIGER21.

## Built With

- **React Native (version 0.64.3):** So we have a single codebase with native builds for both iPhone and Android.
- **Expo (SDK 44) (managed workflow):** So we can do quick coding, testing, and releases — with the help of Expo Go, Expo Auth Session, Expo Push Notifications, Expo Application Services (EAS), etcetera.
- T**ypescript (version ~4.3.5):** So we can maintain the app better and use modern typed JS.
- **React Navigation (version 6.x):** So we can do routing between screens using Expo's recommended library.
- **React Native UI Elements:** So we can build on top of battle tested UI components. We tried all the popular UI libraries before settling on this one.
- **Storybook/react (version 6.4.x):** So we can code UI components in isolation making them fully reusable and cleanly composable.
- **Chromatic.com:** So we can do automated visual tests. Might consider switching to Percy that is now a part of BrowserStack.

## Installation

### Pre-requisites

- nodejs (Active LTS version 16.x)
- expo-cli (version 5.0.3, globally installed)
- **Mac v/s PC** Given that an overwhelming majority of this app's users are on iPhone, and iPhone apps can only be developed on a Mac, it is highly recommended to use a Mac. However, TODO PC setup link.
- xcode & iphone simulator
- android studio and android simulator
- expo go app

### Setup

Clone with repository and install all the packages

    git clone <this-repo>
    cd T21C-React-Native-App
    npm install
    yarn

### Local Development

Run the app in simulators with live reloading

    yarn start

Code isolated UI components using storybook/react webview

    yarn storybook
