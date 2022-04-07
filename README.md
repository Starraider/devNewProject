# TYPO3 Development Site for demonstrating Webpack Encore

This project was build, to test and demonstrate the use of Webpack Encore with TYPO3-CMS.

## System requirements

- Docker installed and running
- DDEV installed
- Node.js installed

## How to start a new project

1. Make a new project directory and change into it

```bash
mkdir myProject
cd myProject
```

2. Clone this repository

```bash
git clone --single-branch --branch main git@github.com:Starraider/devNewProject.git .
git submodule update --init --recursive
```

3. Disconnect your project from original github and git

```bash
git remote rm origin
rm -rf .git
```

4. Initialize your own git repository

```bash
git init
```

5. Push your git repository to Github

6. Change project name from newProject to your own name

7. Install node dependencies

```bash
cd Build
yarn install
```

8. Start DDEV and install dependencies

```bash
ddev composer install
```
9. Restore database and files

```bash
ddev db-restore
ddev fileadmin-restore
```
10. Launch website

```bash
ddev start
ddev launch typo3
```
11. Login

Username:
Passwort:


## How to use DDEV

```bash
ddev start
ddev composer update
ddev stop
ddev describe
```

## Opening the website

```bash
ddev launch
```

or go to [https://devwebpack.ddev.site](https://devwebpack.ddev.site)

### How to use Webpack Encore

Be aware: Webpack Encore needs Node.js Version 16.8!
You can switch Node.js Version with:

```bash
nvm use system
```

#### compile assets once

```bash
yarn encore dev
```

#### or, recompile assets automatically when files change

```bash
yarn encore dev --watch
```

#### on deploy, create a production build

```bash
yarn encore production
```

### Backup

```bash
ddev export-db --file=/Quellen/backup/db.sql.gz
ddev db-backup
ddev db-restore
ddev fileadmin-backup
ddev fileadmin-restore

//ddev export-db >./Quellen/backup/2021-11-27_db.sql.gz
```

## typo3-console

Attention: The typo3-console runs only inside the container!

```bash
ddev typo3cms cache:flush
ddev typo3cms database:updateschema
```

## TYPO3 CLI Commands

```bash
ddev typo3 --help
ddev typo3 list (lists all commands)
ddev typo3 language:update
```

### Debug Mode

You can change the TYPO3_CONTEXT in the file `.ddev/config.yaml`

To see error messages in the frontend put in Setup:

```bash
- TYPO3_CONTEXT=Development
```

## Testing & Linting

### Static Linters

Run all static linters at once:

```bash
ddev composer ci:static
```

#### Prettier

Prettier will auto format all JavaScript files.

#### PHP CS Fixer

Right click on file and chose "Dokument formatieren" oder "php-cs-fixer: diff" oder "php-cs-fixer: fix"

#### PHPStan

Right click on file or folder and chose "PHPStan: Scan for Errors"

#### TypoScript Lint

```bash
ddev composer ci:ts:lint
```

#### Normalize composer.json

```bash
ddev composer ci:composer:normalize
```

### Acceptance Tests

#### Prerequisite

You must have installed Cypress.

#### Run the tests

Inside the ```Build``` folder run:

```bash
yarn run cypress open
```

## License

GPL-2.0 or later
