# Idea and Concept

The idea behind this project template is, to provide a development environment that serves as a basis for all (future) TYPO3 websites of the DGVT e.V.
It includes:

- DDEV configuration
- TYPO3 configuration
- Default Extensions
- Webpack Encore
- Linting & Testing
- Deployment (manually & automaticly)
- customer_sitepackage (for the project specific customizations)
- etc.

## CI / CD

### Continuous Integration (CI)

Continuous Integration (CI) is a development practice where developers integrate code into a shared repository frequently. Each integration can then be verified by an automated build and automated tests.
For this purpose, this project templates comes with some pre-configured CI tools, like [linters](../Development/linting.md) and [testing](../Development/testing.md) tools.

As build tool, [Webpack Encore](../Development/webpack-encore.md) is used.

### Continuous Delivery (CD)

Continuous Delivery (CD) is a software development practice where code changes are automatically deployed to the staging server (beta) and/or production server (live).
For this purpose, this project templates comes with a pre-configured [deployment tool](../New-Project/deployment.md).

## Sitepackage structure

This project template is based on the [bootstrap_package](https://github.com/benjaminkott/bootstrap_package) as a foundation, with a fully configured frontend theme for TYPO3, based on the Bootstrap CSS Framework.

As a second layer, it's based on the [dgvtbase](https://github.com/Starraider/dgvtbase) sitepackage, which contains all the configuration, templates and styles, which all DGVT-Websites have in common.

As the top layer, the [customer_sitepackage](https://github.com/Starraider/dgvtProject/tree/main/packages/customer_sitepackage), which is part of this repository, contains all the project specific customizations.

Each sitepackage layer can override the configuration of the lower layers, but not the other way around.
