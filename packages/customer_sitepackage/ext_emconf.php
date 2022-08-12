<?php

/*
 * Copyright by Sven Kalbhenn (sven@skom.de).
 * See LICENSE that was shipped with this package.
 */

$EM_CONF[$_EXTKEY] = [
    'title' => 'Customer Sitepackage',
    'description' => 'This is the default customer sitepackage',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '12.0.0-12.9.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Skom\\CustomerSitepackage\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Sven Kalbhenn',
    'author_email' => 'sven@skom.de',
    'author_company' => 'SKom',
    'version' => '11.1.0',
];
