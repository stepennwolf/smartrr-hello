# Smartrr Hello

## Purpose
This project intended to implement [Senior Application Engineer Homework
](https://github.com/smartrr-hello/senior_engineer_homework).

## Tickets
The 2 sequential tickets listed below are needed to deliver the target project.

### 1. Bootstrap the brand-new UI project

Bootstrap a new UI project based on React.js framework.

**Requirements**
- Generate the basic folder structure and app architecture from boilerplate
using [Create React App](https://create-react-app.dev/) scaffolding tool.
- TypesScript as the codebase
- Provide testing framework
- Provide instruction of how to run the app & tests


### 2. Latest USD/BRL currency conversion rates page.

Deliver the UI page which would show latest USD/BRL currency conversion rates.
Data should be pulled every hour. Print last 24 hours. 

#### Sub-tasks

- Make integration with [Currency Converter API](https://rapidapi.com/natkapral/api/currency-converter5)
to get currency data.
- Implement UI page according to provided UX/UI mocks (_imagine it's provided_).
As data source for currency data use integration provided above.
- Cover code with tests


## Project details

Project is generated with [Create React App](https://create-react-app.dev/), so it has a boilerplate folder structure.
For simplicity purposes there is no usage of state management library like Redux, Mobx, etc. All app data
managed in state of `LastCurrencyConversionRatesWithData` component.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See more details in [this documents](./README-cra.md).
