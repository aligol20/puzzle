# Puzzle
A React Native Project with **Typescript** for showing the ascii faces.

## Cross Platform
Currently available for Android and iOS


 

a tile puzzle interface that consists of a frame divided into even tiles with one tile missing. These tiles should then be randomised so that user interaction is required to resolve the original frame. Tiles may only be moved into the empty position.
----

## Setup instructions

#### 1. Install dependencies
- `git clone https://github.com/aligol20/puzzle.git`
##### 2. Install React-native dependencies
- `cd public`
- `cd Puzzle`
- `npm install`
- `cd ios`
- `pod install`
- `cd ..`
### Running App on ios
- `npx react-native run-ios`
### Running App on android
- You should define the SDK directory for your app, for more info look at [local.properties](https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil).

- For installing on physical android device, make sure that 'ADB' works correctly, for checking 'ADB', connect your android device with USB cable to computer and run following code:
- `adb devices`.
- **note**: Be sure your computer and android device are connected to same the WIFI.
- **note**:  USB debugging mode of physical android device should be enabled. More info at [USB debugging](https://developer.android.com/studio/debug/dev-options):
- `npx react-native run-android`
### ToDo
- Adding animation when tiles moving







