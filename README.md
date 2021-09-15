## Overview

This [Next.js](https://nextjs.org/) project comes pre-configured with ACB’s own [ESLint](https://eslint.org/) and [stylelint](https://stylelint.io/) code style rules:

- [@acolorbright/eslint-config-react](https://www.npmjs.com/package/@acolorbright/eslint-config-react)
- [@acolorbright/stylelint-config](https://www.npmjs.com/package/@acolorbright/stylelint-config)

Code style conventions help to standardise a codebase when it is being worked on by multiple people in a team. It saves time and mental overhead by increasing familiarity when switching projects. Linters help with this by issuing warnings and errors when editing files, and often times can fix simple issues for you. Combined with git hooks and/or test commands, we can even prevent non-passing commits from landing or the build from passing to maintain the integrity of the codebase.

Please follow the ACB [development workflow](docs/development-workflow.md) where applicable.

If you are struggling with the linter rules in your editor, please see our guide to [code editor plugins](docs/code-editor-plugins.md).

## Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Version 16 of [Node.js](https://nodejs.org/en/download/) (includes npm)

## Quickstart

```
npm install
npm run dev
```

## Basic Scripts

In the project directory, you can run:

### `npm install`

Installs all the required dependencies.

### `npm run dev`

Runs the app in the development mode. Open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## Linting and formatting

You can test the results of linting and formatting at any time with `npm run validate`.

### JavaScript and JSON

Code **style** is enforced with ESLint, while **formatting** is performed via Prettier.

Upon committing, files will first be linted with the `--fix` option and then formatted.

You can lint JavaScript at any time with `npm run lint:js`.

### CSS

CSS style and formatting is performed via Stylelint.

Upon committing, CSS will be linted with the `--fix` option.

You can lint CSS at any time with `npm run lint:css`.

### Commit messages

Once all staged files are passing and ready to be committed, Commitlint will lint the commit message itself. It enforces a `type` and an optional `scope`, along with a 72 character limit on the header.

You can run an interactive prompt to assist with making passing commit messages with `npm run commit`.

It will take you step by step through the process of making a passing commit, with tab autocompletion for `type` and `scope`.

## Testing

**You are welcome to write tests if you want to but you won’t be penalised if you don’t**

We are using [Jest](jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

Tests are executed with `npm test`.

To run Jest in watch mode during development (recommended), run `npm run test:dev` instead.

To generate a coverage report in the `coverage` folder, run `npm run test:coverage`.

Add `-- --verbose` to the end of any test command to generate verbose output,
e.g. `npm run test:coverage -- --verbose`.

### Recommended Structure

Tests should be placed under `src/__tests__` and named according to the component that is being tested, i.e. the tests for `FavoriteNumber.js` would be in a file named `src/__tests__/FavoriteNumber.test.js`.

The file should be structured similarly to the following. [See the documentation](https://testing-library.com/docs/react-testing-library/example-intro) for more details.

## Accessibility Testing

We include [agnostic-axe](https://github.com/dequelabs/agnostic-axe) for accessibility testing in dev mode. See the repository for full [details on usage](https://github.com/dequelabs/agnostic-axe#basic-usage).

Keep an eye on your browser console for any reports of violations.
