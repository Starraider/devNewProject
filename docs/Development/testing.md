# Testing

## Acceptance Tests (E2E tests)

For testing the frontend we use the modern frontend testing tool "Cypress".
You can find more [information about Cypress here](https://docs.cypress.io/guides/overview/why-cypress).

### Cypress installation

The installation of Cypress should have already been done, during the [setup of the new project](New-Project/start-new-project.md).
It is done during the installation of the node dependencies:

```bash
cd Build
yarn install
```

### Start Cypress and running the tests

Inside the `/Build/` folder run:

```bash
yarn run cypress open
```

```bash
ddev composer ci:tests:accept
```

## Regression Test

Thanks to the "snapshots" plugin, you can write regression tests with Cypress very easyly as well.
