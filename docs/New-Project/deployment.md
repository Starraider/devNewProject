# Deployment

## Principles

### Server structure

For all DGVT websites, there should be three "instances":

#### 1. Local development environment

Each developer has a virtualized instance of the website on his local machine via DDEV & Docker. This is where development and initial testing takes place. All changes are committed to the GitHub repository.

#### 2. Beta server for testing

The beta server (often called staging server), is used to test the website in the same server environment as later the live server. In addition, the new functions/styles can be checked and discussed with the customer here, before it goes online.

#### 3. Live server

The live server hosts the publicly accessible website.

### Deployment

Deployment to the beta and live servers runs via the GitHub repository. [Deployer](https://deployer.org) is used as the deployment script. It allows deployment with sero downtime.
Deployment can either be triggered "manually" in the local development environment, or automatically via GitHub actions, f.e. as soon as a new release is published.

## Setup Deployer

### Basic setup

Change all credentials in [deploy.php](https://github.com/Starraider/dgvtProject/blob/main/deploy.php) to your own deployment credentials.

### Setup GitHub Action for automated deployment

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
