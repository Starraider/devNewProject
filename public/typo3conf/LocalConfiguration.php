<?php
return [
    'BE' => [
        'debug' => true,
        'explicitADmode' => 'explicitAllow',
        'installToolPassword' => '$argon2i$v=19$m=65536,t=16,p=1$MmxlVnI1NG9tNkovQ2hPZg$qWy6ME8vwLefBfCI0iHdsRwrksC8pPBNv7edIUf1LXA',
        'passwordHashing' => [
            'className' => 'TYPO3\\CMS\\Core\\Crypto\\PasswordHashing\\Argon2iPasswordHash',
            'options' => [],
        ],
    ],
    'DB' => [
        'Connections' => [
            'Default' => [
                'charset' => 'utf8',
                'driver' => 'mysqli',
            ],
        ],
    ],
    'EXTCONF' => [
        'lang' => [
            'availableLanguages' => [
                'de',
            ],
        ],
    ],
    'EXTENSIONS' => [
        'backend' => [
            'backendFavicon' => '',
            'backendLogo' => 'EXT:skombase/Resources/Public/Images/Logo_machwerk_klein.svg',
            'loginBackgroundImage' => '',
            'loginFootnote' => '',
            'loginHighlightColor' => '',
            'loginLogo' => 'EXT:skombase/Resources/Public/Images/Logo_machwerk.svg',
            'loginLogoAlt' => '',
        ],
        'bootstrap_package' => [
            'disableCssProcessing' => '1',
            'disableGoogleFontCaching' => '0',
            'disablePageTsBackendLayouts' => '0',
            'disablePageTsContentElements' => '0',
            'disablePageTsRTE' => '0',
            'disablePageTsTCADefaults' => '0',
            'disablePageTsTCEFORM' => '0',
            'disablePageTsTCEMAIN' => '0',
        ],
        'content_animations' => [
            'disableAddAnimationsTab' => '0',
            'extendedAnimationSettings' => '0',
            'hideFooterAnimationLabel' => '0',
        ],
        'contentblocks_reg_api' => [
            'contentBlockDefinition' => '0',
            'enableLayoutOptions' => '1',
            'showBackendModule' => '1',
        ],
        'extensionmanager' => [
            'automaticInstallation' => '1',
            'offlineMode' => '0',
        ],
        'imageoptimizer' => [
            'gifBinary' => 'gifsicle',
            'gifCheck' => 'gif',
            'gifOnProcessing' => '0',
            'gifOnUpload' => '0',
            'gifParametersOnProcessing' => '--batch -O2 %s',
            'gifParametersOnUpload' => '--batch -O2 %s',
            'jpgBinary' => 'jpegoptim',
            'jpgCheck' => 'jpg',
            'jpgOnProcessing' => '0',
            'jpgOnUpload' => '0',
            'jpgParametersOnProcessing' => '--strip-all %s',
            'jpgParametersOnUpload' => '--strip-all %s',
            'pngBinary' => 'optipng',
            'pngCheck' => 'png',
            'pngOnProcessing' => '0',
            'pngOnUpload' => '0',
            'pngParametersOnProcessing' => '-o2 %s',
            'pngParametersOnUpload' => '-o2 %s',
            'svgBinary' => 'svgo',
            'svgCheck' => 'svg',
            'svgOnUpload' => '0',
            'svgParametersOnUpload' => '--pretty %s',
        ],
        'news' => [
            'advancedMediaPreview' => '1',
            'archiveDate' => 'date',
            'categoryBeGroupTceFormsRestriction' => '0',
            'categoryRestriction' => '',
            'contentElementPreview' => '1',
            'contentElementRelation' => '1',
            'dateTimeNotRequired' => '0',
            'hidePageTreeForAdministrationModule' => '0',
            'manualSorting' => '0',
            'prependAtCopy' => '1',
            'resourceFolderImporter' => '/news_import',
            'rteForTeaser' => '0',
            'showAdministrationModule' => '1',
            'showImporter' => '0',
            'slugBehaviour' => 'unique',
            'storageUidImporter' => '1',
            'tagPid' => '1',
        ],
        'sluggi' => [
            'last_segment_only' => '0',
            'pages_fields' => '[["nav_title","title"]]',
            'slash_replacement' => '1',
            'synchronize' => '1',
            'whitelist' => '',
        ],
        'webp' => [
            'convert_all' => '1',
            'converter' => 'Plan2net\\Webp\\Converter\\MagickConverter',
            'mime_types' => 'image/jpeg,image/png,image/gif',
            'parameters' => 'image/jpeg::-quality 85 -define webp:lossless=false|image/png::-quality 75 -define webp:lossless=true|image/gif::-quality 85 -define webp:lossless=true',
            'silent' => '0',
        ],
    ],
    'FE' => [
        'debug' => true,
        'disableNoCacheParameter' => true,
        'passwordHashing' => [
            'className' => 'TYPO3\\CMS\\Core\\Crypto\\PasswordHashing\\Argon2iPasswordHash',
            'options' => [],
        ],
    ],
    'GFX' => [
        'processor' => 'ImageMagick',
        'processor_allowTemporaryMasksAsPng' => false,
        'processor_colorspace' => 'sRGB',
        'processor_effects' => true,
        'processor_enabled' => true,
        'processor_path' => '/usr/bin/',
        'processor_path_lzw' => '/usr/bin/',
    ],
    'LOG' => [
        'TYPO3' => [
            'CMS' => [
                'deprecations' => [
                    'writerConfiguration' => [
                        'notice' => [
                            'TYPO3\CMS\Core\Log\Writer\FileWriter' => [
                                'disabled' => false,
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
    'MAIL' => [
        'transport' => 'sendmail',
        'transport_sendmail_command' => '/usr/local/bin/mailhog sendmail test@example.org --smtp-addr 127.0.0.1:1025',
        'transport_smtp_encrypt' => '',
        'transport_smtp_password' => '',
        'transport_smtp_server' => '',
        'transport_smtp_username' => '',
    ],
    'SYS' => [
        'caching' => [
            'cacheConfigurations' => [
                'hash' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                ],
                'imagesizes' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'options' => [
                        'compression' => true,
                    ],
                ],
                'pages' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'options' => [
                        'compression' => true,
                    ],
                ],
                'pagesection' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'options' => [
                        'compression' => true,
                    ],
                ],
                'rootline' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'options' => [
                        'compression' => true,
                    ],
                ],
            ],
        ],
        'devIPmask' => '*',
        'displayErrors' => 1,
        'encryptionKey' => '387129b34603dc48722a2ccaddcb569210640213d539e1864699efc9191dd54ffa05e120c4d0b39dc0f26d617226c174',
        'exceptionalErrors' => 12290,
        'features' => [
            'unifiedPageTranslationHandling' => true,
            'yamlImportsFollowDeclarationOrder' => true,
        ],
        'sitename' => 'devNewProject',
        'systemMaintainers' => [
            1,
        ],
    ],
];
