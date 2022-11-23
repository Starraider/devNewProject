# DDEV

DDEV provides a base for local development.

## How to use DDEV

```bash
# start the ddev project
ddev start

# update the composer dependencies
ddev composer update

# stop the ddev project
ddev stop

ddev describe

# stops all ddev projects
ddev poweroff
```

## Opening the local website

```bash
# opens the local website in default browser
ddev launch
# opens TYPO3-Backend
ddev launch typo3
```

or simply go to [https://dgvtproject.ddev.site](https://dgvtproject.ddev.site)

## Backup & Restore

```bash

ddev export-db --file=/Quellen/backup/db.sql.gz
ddev db-backup
ddev db-restore
ddev fileadmin-backup
ddev fileadmin-restore

//ddev export-db >./backup/2021-11-27_db.sql.gz
```

## Access the Database

```bash
# Opens phpMyAdmin
ddev launch -p
```

If you use the free [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) database browser for macOS, run ``ddev sequelace`` within your project folder, and Sequel Ace will launch and access the database for that project.

## Access to MailHog

```bash
# Opens MailHog
ddev launch -m
```
