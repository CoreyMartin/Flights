This app demonstrates React Native working along side React for web with an emphasis on code and style sharing to create a universal app.

# How to get started

Follow the [instructions here](https://facebook.github.io/react-native/docs/getting-started.html) to get watchman, react-native-cli, and Xcode installed. react-native-cli is a lightweight tool while the actual version of react-native used is local to the repo.

Pull the repo locally and run `yarn install`. 

# Build for web

First run `yarn run prod` which will copy the fonts to the build folder. Then you can continue leave that running generating prod bundles or stop it and run `npm run dev` which will give you detailed debugging and hot reloading functionality. Remember to put the correct reference to the script in the template, http://localhost:3000/app.dev.js for the dev bundle.

# Build native apps

Run `react-native run-ios` or `react-native run-android`