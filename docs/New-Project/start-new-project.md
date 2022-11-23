# How to start a new project

### 1. Make a new project from GitHub Template

Go to the [GitHub repository](https://github.com/Starraider/dgvtProject) and click on the green button "Use this template" in the upper right corner. Give your own project a name and a description. Choose wheter you want to make it "Public" or "Private" and wheter you want to copy all branches or just the main branch.

### 2. Clone your new repository

Make a local project folder and clone your new repository into it.
Update the submodules.

```bash
mkdir <myProject>
cd <myProject>
git clone --single-branch --branch main git@github.com:<myVendorName>/<myProjectRepo>.git .
git submodule update --init --recursive
```

### 3. Change project name from devNewProject to your own project name

Replace "devNewProject" with your own project name in these files:

- .ddev/config.yaml
- composer.json
- public/typo3conf/LocalConfiguration.php
- Build/package.json

### 4. Change repository URL

Replace the repository URL "https://github.com/Starraider/devNewProject.git" with your own repository URL in these files:

- composer.json
- Build/package.json

### 5. Install node dependencies

```bash
cd Build
yarn install
```

### 6. Start DDEV and install dependencies

```bash
ddev start
ddev composer install
```

### 7. Change settings in .env

Open file ```.env``` in your editor.
Change ```SITE_BASE=``` to the generated URL, which is shown after ```ddev start```.
Change ```TYPO3__DB__Connections__Default__host=``` to the generated db container name, which is shown during ```ddev start```.
Restart ```ddev restart```.

### 8. Restore database and files

```bash
ddev db-restore
ddev fileadmin-restore
```

### 9. Generate webpack files

```bash
cd Build/
yarn encore dev
```

If you get an error message, maybe you have to change your node.js version with ```nvm use system```.

### 10. Launch local website

```bash
ddev restart
ddev launch typo3
```

### 11. Login and create your own admin user

For your first login, you can use the default admin user:

`Username: admin`

`Passwort: admin123`

Please rename this default admin user and give it a new passwort as soon as possible.

### 12. If you see the error message "zuncompress(): need dictionary ..."

This is currently a bug in DDEV.
Open file ```public/typo3conf/AdditionalConfiguration.php``` in your editor.
Remove the comment "#ddev-generated" on the top of the file (otherwise it will be overwriten on every start).
Change ```'driver' => 'pdo_mysql',``` into ```'driver' => 'mysqli',```.
Restore DB again with ```ddev db-restore```.
Restart with ```ddev restart```.
Now the error message should be gone.

### 13. Change local development URL

Replace the development URL "https://devnewproject.ddev.site" with the generated URL, which is shown after ```ddev start```, in the following files:

- Build/js/app.js
- Build/cypress.json

### 15. Setup Deployment

See here [how to setup the deployment](deployment.md).
