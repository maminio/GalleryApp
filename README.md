# Gallery App

First React native app @KCLTech PlusOne

## Installation

#### Checkout project

```bash
git clone https://github.com/maminio/GalleryApp.git
```

#### macOS

* Install dependencies `brew install node watchman`
  * *Make sure you have node version 4 or newer*
* Install react-native `npm install -g react-native-cli`

###### iOS

* Install Xcode (https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
* Run the project `react-native run-ios`

#### Windows

- `echo "sdk.dir = C:\\Users\\$(whoami)\\AppData\\Local\\Android\\sdk" > android/local.properties`

  - *Make sure you have node version 4 or newer*

- Install react-native `npm install -g react-native-cli`

###### Android

- Install android studio (https://developer.android.com/studio/install)

- Run the project `react-native run-android`

## Yarn

Fast, reliable, and secure dependency management

#### Install module

```bash
yarn add MODULE_NAME


#### Re-install module

yarn add --force MODULE_NAME
```

#### Remove module

```bash
yarn remove MODULE_NAME
```

#### Clear cache

```bash
yarn cache clean
```

#### Re-install all modules

```bash
rm -rf node_modules && yarn cache clean && yarn install
```



## Debugging

### Android problem
In my case the issue was that the emulator was making a request to:

`http://10.0.2.2:8081/debugger-ui`

instead of:

`http://localhost:8081/debugger-ui` and the request was failing.

To solve the issue: Before enabling remote debugging on your emulator, open http://localhost:8081/debugger-ui in chrome. Then enable remote debugging and go back to the chrome page where you should see your console logs.

#### Remote debugger

https://github.com/jhen0409/react-native-debugger

https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md

```bash
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

#### Logs

```bash
react-native log-ios
```

#### Cache

watchman watch-del-all && rm -rf node_modules && yarn install && rm -fr $TMPDIR/react-* && npm start -- --reset-cache
