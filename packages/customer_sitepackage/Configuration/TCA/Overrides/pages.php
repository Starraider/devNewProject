<?php

/*
 * Copyright by Sven Kalbhenn (sven@skom.de).
 * See LICENSE that was shipped with this package.
 */

defined('TYPO3') || die('Access denied.');
call_user_func(function () {
    /**
     * Temporary variables
     */
    $extensionKey = 'customer_sitepackage';

    /**
     * Default PageTS for CustomerSitepackage
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/TsConfig/Page/All.tsconfig',
        'Customer Sitepackage'
    );
});
