# Getting Started

>**Note** This mobile application has the functionality of a profile page. Data does not get saved in the database, but the application functions as expected unitl refreshed/restarted.
The application supports both portrait and landscape(left/right) orientation modes.
This mobile application is built by using React Native framework.

## Setup

Note: If you don't have Homebrew installed please install it by running the following command in your terminal: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

1. Clone the project from the github repo: https://github.com/AJ-ANUJ/Profile_Page_App in to your machine using the following command:git clone <repo_url>

2. Navigate to the cloned repository

3. Install Node.js
   Steps to install:
      1. Run the following command in the terminal: brew install node

4. Install CocoaPods
   Steps to install:
      1. This will require Ruby version >= 2.7.0, please use ruby version manager like rbenv to set the ruby version to >=2.7.0 if not already set.
         Commands to run for it:
            a. brew install rbenv
            b. if bash shell: echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
               if zsh shell: echo 'eval "$(rbenv init -)"' >> ~/.zshrc
            c. if bash: source ~/.bash_profile
               if zsh: source ~/.zshrc

      2. Run the following command in the terminal: sudo gem install cocoapods
 
5. Install react-navigation/native library
   Steps to install:
      1. Run the following command: npm install @react-navigation/native

6. Install react-navigation/native-stack
   Steps to install:
      1. Run the following command: npm install @react-navigation/native-stack

7. react-native-image-picker
   Steps to install:
      1. Run the following command: npm install react-native-image-picker

9. react-native-vector-icons
   Steps to install:
      1. Run the following command: npm install react-native-vector-icons

10. Run the following cmd in the project root folder: Npx pod-install

11. Xcode: Xcode is needed as it provides the simulators for testing and debugging iOS and macOS apps on various virtual devices.
   Steps to install:
      1. Please install/update the Xcode from the App store.

Once the above steps for setup are done, the app is ready to be used in the simulator.

## Steps to start the app:

1. If you want any specific device to be used as simulator, please open that particular device in the simulator and then the run the command to start the app.
2. To start the app in the default device set in the simulator, run the command in the project root folder directly.
3. Command to run in the project root folder directly: npx react-native run-ios

<**Note** I have created this app by working with iphone 11 simulator.
