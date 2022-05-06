var Encore = require('@symfony/webpack-encore')
const WebpackNotifierPlugin = require('webpack-notifier')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const path = require('path')
//const ESLintPlugin = require('eslint-webpack-plugin')

Encore
  // the directory where compiled assets will be stored
  .setOutputPath('../public/build')

  // public path used by the web server to access the output path
  .setPublicPath('/build')

  // only needed for CDN's or sub-directory deploy
  // .setManifestKeyPrefix('build/')

  .configureFontRule({
    type: 'asset',
    //maxSize: 4 * 1024
  })

  // Sprite-Loader
  .addLoader({
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    options: {
      extract: true,
      spriteFilename: './sprite.svg',
    },
  })
  .addPlugin(new SpriteLoaderPlugin())

  // ESLint
  //.addPlugin(new ESLintPlugin())
  // WebpackNotifier
  .addPlugin(new WebpackNotifierPlugin({ emoji: true }))

  // Copy some static images to your -> https://symfony.com/doc/current/frontend/encore/copy-files.html
  .copyFiles([
    {
      from: './images',
      to: 'Images/[path][name].[ext]',
      includeSubdirectories: false,
      pattern: /\.(png|jpg|jpeg|svg)$/,
    },
    {
      from: '../vendor/skom/skombase/Resources/Public/Images',
      to: 'Images/skombase/[name].[ext]',
      includeSubdirectories: false,
      pattern: /\.(png|jpg|jpeg|svg)$/,
    },
    {
      from: './node_modules/photoswipe/dist/default-skin/',
      to: 'Images/photoswipe/[name].[ext]',
      includeSubdirectories: false,
      pattern: /\.(png|jpg|gif|svg)$/,
    },
  ])
  .configureImageRule({
    // tell Webpack it should consider inlining
    type: 'asset',
    //maxSize: 4 * 1024, // 4 kb - the default is 8kb
  })
  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
   */
  .addEntry('app', './js/app.js')

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())

  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // uncomment if you use TypeScript -> https://symfony.com/doc/current/frontend/encore/typescript.html
  // .enableTypeScriptLoader()

  // uncomment if you are using Sass/SCSS files -> https://symfony.com/doc/current/frontend/encore/css-preprocessors.html
  .enableSassLoader()

  // uncomment if you're having problems with a jQuery plugin -> https://symfony.com/doc/current/frontend/encore/legacy-applications.html
  // .autoProvidejQuery()

  // uncomment if you use the postcss -> https://symfony.com/doc/current/frontend/encore/postcss.html
  .enablePostCssLoader()

  // uncomment if you want to use vue -> https://symfony.com/doc/current/frontend/encore/vuejs.html
  // .enableVueLoader()

  // uncomment if you´re want to lint your sources
  //.enableEslintLoader()

  // uncomment if you´re want to have integrity hashes for your script tags, the extension takes care of it
  // .enableIntegrityHashes()

  // uncomment if you´re want to share general code for the different entries -> https://symfony.com/doc/current/frontend/encore/split-chunks.html
  .splitEntryChunks()

// Uncomment if you are going to use a CDN -> https://symfony.com/doc/current/frontend/encore/cdn.html
// if (Encore.isProduction()) {
//Encore.setPublicPath('https://my-cool-app.com.global.prod.fastly.net');

// guarantee that the keys in manifest.json are *still*
// prefixed with build/
// (e.g. "build/dashboard.js": "https://my-cool-app.com.global.prod.fastly.net/dashboard.js")
// Encore.setManifestKeyPrefix('build/');
// }

module.exports = Encore.getWebpackConfig()
