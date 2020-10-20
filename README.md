This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn add flow-bin` to install flow
yarn add flow-bin

### in package.json add below section in scripts section
"flow":"flow"

### `yarn flow init` to initialize flow - this will create .flowconfig file
yarn flow init

### `yarn flow` to execute the flow
yarn flow

### if you run into any issues stop the flow server and start it again
yarn flow stop
yarn flow


## if you are getting the warnings like `type annotations can only be used in typescript files` follow the below steps
install the extension Flow Language Support
disable the built-in TypeScript extension (to disable use following steps)
    go to extensions tab
    search for @builtin TypeScript and JavaScript Language Features
    click on Disable