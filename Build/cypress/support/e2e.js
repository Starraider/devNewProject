// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-plugin-snapshots/commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// The name of the cookie holding whether the user has accepted
// the cookie policy
const COOKIE_NAME = 'klaro'
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE =
  '%7B%22youtube%22%3Atrue%2C%22googleanalytics%22%3Atrue%2C%22mylanguage%22%3Atrue%2C%22cookieconsent%22%3Atrue%7D'

Cypress.on('window:before:load', window => {
  window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`
})
