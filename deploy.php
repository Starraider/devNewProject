<?php

namespace Deployer;

require_once(__DIR__ . '/vendor/sourcebroker/deployer-loader/autoload.php');
new \SourceBroker\DeployerExtendedTypo3\Loader();

set('repository', 'git@github.com:Starraider/devNewProject.git');
set('web_path', 'public/');
set('composer_channel', 2);


set('shared_files', ['.env']);

host('live')
    ->hostname('pxxxxxx.mittwaldserver.info')
    ->user('pxxxxxx')
    ->set('branch', 'main')
    ->multiplexing(true)
    ->addSshOption('StrictHostKeyChecking', 'no')
    ->set('writable_mode', 'chmod')
    ->set('fetch_method', 'curl')
    ->set('bin/php', '/usr/local/bin/php')
    ->set('bin/composer', '/usr/local/bin/composer')
    ->set('public_urls', ['http://pxxxxxx.mittwaldserver.info/jeh-seitz/live/current/public/'])
    ->set('deploy_path', '/home/www/pxxxxxx/html/devNewProject/live');

host('beta')
    ->hostname('pxxxxxx.mittwaldserver.info')
    ->user('pxxxxxx')
    ->set('branch', 'develop')
    ->addSshOption('StrictHostKeyChecking', 'no')
    ->set('writable_mode', 'chmod')
    ->set('fetch_method', 'curl')
    ->set('bin/php', '/usr/local/bin/php')
    ->set('bin/composer', '/usr/local/bin/composer')
    ->set('public_urls', ['http://pxxxxxx.mittwaldserver.info/jeh-seitz/beta/current/public/'])
    ->set('deploy_path', '/home/www/pxxxxxx/html/devNewProject/beta');

host('local')
    ->hostname('local')
    ->set('deploy_path', getcwd())
    ->set('public_urls', ['https://devnewproject.ddev.site']);
