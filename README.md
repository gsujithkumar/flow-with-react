This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn add flow-bin` to install flow
yarn add flow-bin

### in package.json add below statement in scripts section
"flow":"flow"

### `yarn flow init` to initialize flow - this will create .flowconfig file(refer the .flowconfig file of this repo for sample)
yarn flow init

### `yarn flow` to execute the flow
yarn flow

### if you run into any issues stop the flow server and start it again
yarn flow stop 

yarn flow


# if you are getting the warnings like `type annotations can only be used in typescript files` follow the below steps
install the extension Flow Language Support

disable the built-in TypeScript extension (to disable use following steps)

1. go to extensions tab 
2. search for @builtin TypeScript and JavaScript Language Features
3. click on Disable