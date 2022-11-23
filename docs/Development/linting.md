# Linting

Linting is the automated checking of your source code for programmatic and/or stylistic errors. This is done by using tools, known as linters.

## Linting in the editor vs. linting in the CLI

The best way to do linting, is to do it while you type, because it saves time and teaches you, to write correct code.
Therefore the linters should be plugins in your editor.
None the less, most linters need some kind of configuration.

This project provides configuration files for the following linters, which should be installed in your editor as a plugin:

- Editor config (.editorconfig)
- Prettier (.prettierrc)
- Commitlint (commitlint.config.js)

The following linters are installed via composer as CLI linters:

- typo3-typoscript-lint
- composer-normalize
- jsonlint

## linters

### Prettier

Prettier will auto format the following file types:

- JavaScript
- HTML
- CSS
- SCSS

For VS Code there is a plugin available: [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### PHP CS Fixer

[PHP CS Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) fixes your PHP code to follow the PSR-2 standard.

For VS Code there is a plugin available: [php-cs-fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer).

In VS Code right click on file and chose "Dokument formatieren" or "php-cs-fixer: diff" oder "php-cs-fixer: fix"

### PHPStan

PHPStan focuses on finding errors in your code without actually running it.

In VS Code right click on file or folder and chose "PHPStan: Scan for Errors"

### TypoScript Lint

The [typo3-typoscript-lint](https://github.com/martin-helmich/typo3-typoscript-lint) is used for linting of TypoScript files.
You can find the configuration file in ``/Build/typoscript-lint.yml``.

```bash
ddev composer ci:ts:lint
```

#### Normalize composer.json

```bash
ddev composer ci:composer:normalize
```

## Commands for running linters

For making it easier, to run the linters, you can use the following commands:

```bash
# Run all CLI linters at once:
ddev composer ci:static
```
