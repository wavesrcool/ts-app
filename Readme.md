# React Native Typescript Expo App

Nice iOS/Android app with React-Navigation in Expo.

## Features

- React Native Expo iOS/Android app
- TypeScript, React Navigation, Apollo/Client, Redux, GraphQL Code Generator
- extends React Native with Native-Base v3
- load static content with useCachedResources() hook
- native maps with React-Native-Maps 
- translations with Expo Location and i18n-js
- read/write to device encrypted file system with Expo Secure Store

## Install Expo

Install the Expo CLI globally using npm.

```bash
npm install --global expo-cli
```

## Install dependencies

Use the package manager to install node.js dependencies.

```bash
yarn
```

## TypeScript compilation

Compile Typscript files in watch-mode and find out if it's all good!

```bash
 yarn w
```

## Run

Run the Expo app.

```bash
 yarn start
```

## Open the iOS Simulator

With Expo command-line tools running (yarn start) press keyboard "i" to start iOS Simulator.

```bash
 i
```

## Generate new GraphQL hooks using introspection

Generate new TypeScript GraphQL hooks via introspection of the Apollo Server endpoint in codegen.yml? (using https://www.graphql-code-generator.com)


```bash
 yarn gen
```

## Initialize new Git repository

Get rid of the git remote and create a local git repo that type checks staged code changes on every commit with Husky?

```bash
 # remove existing .git files
 rm -rf .git

 # create new repo
 git init

 # install husky git hooks
 yarn husky install

 # add files
 git add .

 # commit files
 git commit -m "nice dude!"
```
