<?php

/*
 * Copyright by Sven Kalbhenn (sven@skom.de).
 * See LICENSE that was shipped with this package.
 */

defined('TYPO3') || die('Access denied.');
/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['customer_sitepackage'] = 'EXT:customer_sitepackage/Configuration/RTE/Default.yaml';

/**********
 * Backend Logos
 */
$GLOBALS['TYPO3_CONF_VARS']['EXTENSIONS']['backend']['loginLogo'] = 'EXT:customer_sitepackage/Resources/Public/Images/Logo_machwerk.svg';
$GLOBALS['TYPO3_CONF_VARS']['EXTENSIONS']['backend']['backendLogo'] = 'EXT:customer_sitepackage/Resources/Public/Images/Logo_machwerk_klein.svg';

// Register custom EXT:form configuration
if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('form')) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(trim('
        module.tx_form {
            settings {
                yamlConfigurations {
                    210 = EXT:customer_sitepackage/Configuration/Form/Setup.yaml
                }
            }
        }
        plugin.tx_form {
            settings {
                yamlConfigurations {
                    210 = EXT:customer_sitepackage/Configuration/Form/Setup.yaml
                }
            }
        }
    '));
}

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:customer_sitepackage/Configuration/TsConfig/Page/All.tsconfig">');
