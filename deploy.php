<?php

namespace Deployer;

require_once(__DIR__ . '/vendor/sourcebroker/deployer-loader/autoload.php');
new \SourceBroker\DeployerExtendedTypo3\Loader();

set('repository', 'git@github.com:Starraider/devPhotographieren.git');
set('web_path', 'public/');
set('composer_channel', 2);


set('shared_files', ['.env']);

host('live')
    ->hostname('p205297.typo3server.info')
    ->user('p205297')
    ->set('branch', 'master')
    ->identityFile('~/.ssh/id_rsa')
    ->set('writable_mode', 'chmod')
    ->set('fetch_method', 'curl')
    ->set('bin/php', '/usr/local/bin/php')
    ->set('bin/composer', '/usr/local/bin/composer')
    ->set('public_urls', ['https://www.photographieren.info'])
    ->set('deploy_path', '/home/www/p205297/html/photographieren/live');

host('beta')
    ->hostname('p205297.mittwaldserver.info')
    ->user('p205297')
    ->set('branch', 'develop')
    ->identityFile('~/.ssh/id_rsa')
    ->set('writable_mode', 'chmod')
    ->set('fetch_method', 'curl')
    ->set('bin/php', '/usr/local/bin/php')
    ->set('bin/composer', '/usr/local/bin/composer')
    ->set('public_urls', ['https://beta.photographieren.info'])
    ->set('deploy_path', '/home/www/p205297/html/photographieren/beta');

host('local')
    ->hostname('local')
    ->set('deploy_path', getcwd())
    ->set('public_urls', ['http://devnewproject.ddev.site']);
