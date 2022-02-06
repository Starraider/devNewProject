# TYPO3 Development Site for demonstrating Webpack Encore

This project was build, to test and demonstrate the use of Webpack Encore with TYPO3-CMS.

## System requirements

1. Docker installed and running
2. DDEV installed

## DDEV

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

### Webpack Encore

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

You can change the TYPO3_CONTEXT in the file `docker-compose.typo3.yaml`

To see error messages in the frontend put in Setup:

```bash
config.contentObjectExceptionHandler = 0
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

## License

GPL-2.0 or later
