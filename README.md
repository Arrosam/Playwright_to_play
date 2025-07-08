# Playwright Showcase

This is a playwright sample code for Owasp juice shop, integrated with Github action.

## Getting Started

There is no actual product to run in this repo, only test cases are written. But you can get it started with

```
npm install
```

To test with the automation test scripts, run following command:

```
npm test
```
Noted that this is not a common command for Typescript project. By executing the command above, it will trigger
```
npx playwright test --ui
```

Noted that UI mode will perform differently to actual testing procedure, including slower executing speed, running in headed mode. Which may result a failure in actual test.

The end-to-end test will be running in headless mode in Github action, which will be triggered each time when a branch has been merged into main branch.

To test with local environment, use following command

```
npx playwright test
```