# Playwright Project

End-to-end browser tests built with [Playwright Test](https://playwright.dev/docs/test-intro).

## Requirements

- Node.js 18 or newer
- npm
- Network access to the websites exercised by the tests

## Install

```bash
npm install
npx playwright install chromium
```

## Run Tests

Run the full test suite:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
npx playwright test tests/login.spec.ts
```

The suite currently runs against Chromium. Tests use live external websites, so availability or changes to those sites can affect results.

## View the HTML Report

After a test run, open the generated report with:

```bash
npx playwright show-report
```

## Project Layout

- `tests/example.spec.ts` contains basic Playwright documentation-site checks.
- `tests/login.spec.ts` covers login, product selection, checkout, and purchase confirmation.
- `playwright.config.ts` contains the test directory, browser project, retries, and HTML reporter configuration.
