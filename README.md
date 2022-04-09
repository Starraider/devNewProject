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
rm .gitmodules
```

4. Initialize your own git repository

```bash
git init
```

5. Push your git repository to Github

Usually VS Code asks you to generate a new Github repository when you make your first git commit.

6. Change project name from devNewProject to your own project name

Replace "devNewProject" with your own project name in these files:

- .ddev/config.yaml
- composer.json
- public/typo3conf/LocalConfiguration.php
- Build/package.json

7. Change repository URL

Replace the repository URL "https://github.com/Starraider/devNewProject.git" with your own repository URL in these files:

- composer.json
- Build/package.json

8. Install node dependencies

```bash
cd Build
yarn install
```

9. Start DDEV and install dependencies

```bash
ddev start
ddev composer install
```

10. Change settings in .env

Open file ```.env``` in your editor.
Change ```SITE_BASE=``` to the generated URL, which is shown after ```ddev start```.
Change ```TYPO3__DB__Connections__Default__host=``` to the generated db container name, which is shown during ```ddev start```.
Restart ```ddev restart```.

11. Restore database and files

```bash
ddev db-restore
ddev fileadmin-restore
```

12. Generate webpack files

```bash
cd Build/
yarn encore dev
```
If you get an error message, maybe you have to change your node.js version with ```nvm use system```.

13. Launch local website

```bash
ddev restart
ddev launch typo3
```

14. Login

Username:
Passwort:

15. If you see the error message "zuncompress(): need dictionary ..."

This is currently a bug in DDEV.
Open file ```public/typo3conf/AdditionalConfiguration.php``` in your editor.
Remove the comment "#ddev-generated" on the top of the file (otherwise it will be overwriten on every start).
Change ```'driver' => 'pdo_mysql',``` into ```'driver' => 'mysqli',```.
Restore DB again with ```ddev db-restore```.
Restart with ```ddev restart```.
Now the error message should be gone.

16. Change local development URL

Replace the development URL "https://devnewproject.ddev.site" with the generated URL, which is shown after ```ddev start```, in these files:

- Build/js/app.js
- Build/cypress.json

17. Change deployment credentials

Change all credentials in deploy.php to your own deployment data.

18. Setup GitHub Action for automated deployment

a. Generate ssh keys for cloning of your private repository to your server

Generate ssh keys on your server with:

```bash
ssh-keygen -t rsa -b 4096
```

Leave password empty!
Use the public key on GitHub for "Settings -> Deployment Keys -> Add deploy key" (name doesn't matter).
Make a test connection to GitHub to update the known_hosts file, with:

```bash
ssh -T git@github.com
```

b. Generate ssh keys for the deployment from GitHub to your server

Generate ssh keys on your local machine:

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_github -C "your_email@example.com"
```

Leave password empty and use the email address, which you used for your GitHub account.
If you alreade have a local ssh keys without password, you can use this instead.

Upload the public key to your server with:

```bash
ssh-copy-id -f -i ~/.ssh/id_github pxxxxxx@pxxxxxx.mittwaldserver.info
```

Make a test connection to your server to update the known_hosts file, with:

```bash
ssh -i ~/.ssh/id_github pxxxxxx@pxxxxxx.mittwaldserver.info
```

Open the private key and use it on GitHub for generating "Settings -> Secrets -> Actions -> New repository secret" with Name "PRIVATE_KEY".

Get your entry from known_hosts on your local machine, with:

```bash
ssh-keyscan pxxxxxx.mittwaldserver.info
```

Copy the line which looks like "pxxxxxx.mittwaldserver.info ssh-rsa AAA..." and use it on GitHub for generating "Settings -> Secrets -> Actions -> New repository secret" with Name "KNOWN_HOSTS". (Without it ssh would ask if you want to add your server to the known_hosts).



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

or go to [https://devnewproject.ddev.site](https://devnewproject.ddev.site)

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
