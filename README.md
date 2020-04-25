[![Build Status](https://api.travis-ci.com/zmgalante/lletter6.svg?branch=master)](https://travis-ci.com/github/zmgalante/lletter6)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

# Summary

This project is intended for personal use only, project made for fun between friends. This is a simple implementation of the board game `Love Letter` the 6-player version. We do not own this game this game is made by **[Alderac Entertainment Group](https://www.alderac.com/)**.

# Table of Contents

- [Contribution Workflow](#contribution-workflow)
	- [Issues](#issues) 
	- [Branches](#branches)
	- [Pull Requests](#pull-requests)
- [Setup Project](#setup-project)
- [Developing](#developing)
	- [Scripts](#scripts)
	- [Unit Tests](#unit-tests)
	- [E2E Tests](#e2e-tests)

<br />

## Contribution Workflow

Make sure you follow the steps bellow before picking up and issue and start developing.

### Issues

If there is already an issue created for something you want to resolve/develop, make sure to assing that issue to yourself, otherwise please create an issue before start developing.
<br />
<br />
If you have to create an issue there are two types:

| Type          | When                               | Labels            |
| :------------ | :--------------------------------- | :---------------- |
| Feature       | there is no support in the project | enhancement       |
| Bugfix        | there is faulty implementation     | help wanted, bug  |

***Note: Please make sure you fill these issue templates the most detailed possible***

### Branches

When creating a new branch please make sure this one is created from master and ***contains the right prefix***, like so:

```
issue: Feature - Add reach router #16
branch-name: feature/add-reach-router
---
issue: Bugfix - Reach router not properly working #18
branch-name: bugfix/fix-reach-router
```
***Note: When you are finished and the changes are in master please close the branch***

### Pull Requests

When commiting your changes you will notice that when you do `git commit` in your branch a script will run, this script will ensure that you respect our `eslint` and `prettier` rules before letting you commit and push anything.
<br />
<br />
Upon opening a PR you will be prompted with a PR template, please make sure you fill it the most detailed possible and make sure you respect all the items in the checklist at the top, ***if one of the items in the checklist does not apply please remove it***.
<br />
<br />
After the PR is open you will notice that some checks will be triggered, the responsible for this is Travis, the latter is running all the jest and e2e tests and also a build of your branch to make sure it is healthy to deploy to master.

**You can follow your travis builds [HERE](https://travis-ci.com/github/zmgalante/lletter6/builds).**

<br />

## Setup Project

This is a pretty simple section only a few things are required:

```
node -v
v12.16.1

npm -v
6.13.4

yarn -v
1.21.1
```

**Note: the versions above don't need to be exactly those but please make sure they are not lower than that, those are the LTS and the time the project was started.**

After pulling a branch to your local, just run `yarn`. **!important -- DO NOT use npm always yarn**
Soon `yarn` command finishes running only one more thing is needed because this is a project hosted in github pages and it's a subdomain inside my github, on the root folder please create the following file, to ensure that your local server runs on the right url:

`.env.development`
<br />

```
PUBLIC_URL=/

```
Make sure that file contains the above^^.

<br />

## Developing

This section contains info that might be usefull for you when developing locally.

### Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

#### `yarn test:jest`

Launches the jest test runner in the interactive watch mode.

#### `yarn test:e2e`

Launches the e2e cypress test runner in console mode.

#### `yarn test:full`

Runs both jest and e2e tests.

#### `yarn cy-debug`

Will open the cypress UI so you can see visually the test occurring.

#### `yarn eslint:full`

Runs eslint on all the js files to check if all respect the rules.

#### `yarn eslint:fix`

Fixes all the fixable eslint problems on js files.

<br />

### Unit Tests

The unit tests are made in Jest and using the `@testing-library/react` package, please make sure you place them on a tests folder near your component and with the same name and start the describes with `(Component) ComponentName`, all the test files **MUST HAVE** the following extension `*.test.js`. You can check the documentation [HERE](https://testing-library.com/docs/react-testing-library/intro).

<br />

### E2E Tests

The E2E tests are made with Cypress, for cypress tests all tests most be inside the following folder, `cypress/integration`, all the e2e tests files **MUST HAVE** the following extension `*.spec.js`. Make sure your file name includes the page in question and the describe starts with `(Page) Some Page Name`.You can check the documentation [HERE](https://docs.cypress.io/api/api/table-of-contents.html).

***Note: when preparing for e2e please make sure your html elements contain the `data-test` attribute***
