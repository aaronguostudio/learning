# React with TypeScript

## Topics

- Adding eslint and prettier
- Adding polyfill
- Storybook
  - [Story Book](https://create-react-app.dev/docs/developing-components-in-isolation/#!)
  - [Getting started](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/)
    - add new components without business logic (Live TDD)
    - snapshort test (run npm test will trigger the storybook test)

## Good practice for using typescript

- [Good practice](https://medium.com/@vitalyb/dont-let-typescript-slow-you-down-92d394ec8c9f)

## Config TypeScript

- [customze cra](https://github.com/arackaf/customize-cra/blob/master/api.md)

## Discovered

- Seems that create react app doesn't support typescirpt alias
  - [TypeScript alias](https://github.com/facebook/create-react-app/issues/5118)
- Add polyfill for CRA
  - [Polyfill for CRA](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)
- Extend eslint
  - Create react app has a build-in eslint and rules setup, which is using this npm package
    - notice, because of using CRA, I don't need to install anything, it's already configured
    - [For typescript](https://www.npmjs.com/package/eslint-config-react-app)
  - [For javascript](https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672)
- [Add Prettier](https://create-react-app.dev/docs/setting-up-your-editor)

## Prototyping with typescript

- CRA offers a easy way to handle eslint. By add a .env file and add EXTEND_ESLINT=false will turn off extended esint configuration. For the warning from the browser, add a .eslintignore file and add src will ignore all warnings

<!-- start from https://www.learnstorybook.com/intro-to-storybook/react/en/composite-component/ -->
