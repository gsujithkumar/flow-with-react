This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-

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