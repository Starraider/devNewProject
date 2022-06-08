const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    'cypress-plugin-snapshots': {
      autoCleanUp: false,
      autopassNewSnapshots: true,
      imageConfig: {
        createDiffImage: true,
        resizeDevicePixelRatio: true,
        threshold: 0.01,
        thresholdType: 'percent',
      },
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://devnewproject.ddev.site',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
  },
})
