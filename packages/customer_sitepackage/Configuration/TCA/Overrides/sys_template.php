<?php

/*
 * Copyright by Sven Kalbhenn (sven@skom.de).
 * See LICENSE that was shipped with this package.
 */

defined('TYPO3') or die('Access denied.');
call_user_func(function () {
    /**
     * Temporary variables
     */
    $extensionKey = 'customer_sitepackage';

    /**
     * Default TypoScript for CustomerSitepackage
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript',
        'Customer Sitepackage'
    );
});
