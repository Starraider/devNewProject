// Build/js/app.js
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

/*
 * any CSS you import will output into a single css file (main.css in this case)
 */
import '../styles/main.scss'

/*
 * Need jQuery? Install it with "yarn add jquery",
 * then uncomment to import it.
 */
import $ from 'jquery'
window.jQuery = $
window.$ = $

/*
 * Include Bootstrap in your Sass-file. You can here specify which plugins you need
 */
import 'bootstrap'

// require('bootstrap/js/dist/lightbox')

// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover()
// })

//photoswipe
//import PhotoSwipe from 'photoswipe'
//import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
//global.PhotoSwipe = PhotoSwipe
//global.PhotoSwipeUI_Default = PhotoSwipeUI_Default

import lax from 'lax.js'

window.onload = function() {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function() {
    return window.scrollY
  })

  // Add animation bindings to elements
  lax.addElements('#testbutton', {
    scrollY: {
      translateX: [
        ['elInY', 'elCenterY', 'elOutY'],
        [0, 'screenWidth/2', 'screenWidth'],
      ],
    },
  })
}

/*
 * Sprite Loader
 */
function requireAll(r) {
  r.keys().forEach(r)
}
requireAll(require.context('../icons/', true, /\.svg$/))

/*
 * Klaro
 */
import * as Klaro from 'klaro/dist/klaro-no-css'
const config = {
  styling: {
    theme: ['dark', 'top', 'wide'],
    // Green Button
    green1: '#1a936f',
    // disabled Switches
    //green2: '#381299',
    // Blue Button
    blue1: '#2581c4',
    // Background
    dark1: '#444544',
    'button-text-color': '#ffffff',
  },
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: true,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: false,

  translations: {
    zz: {
      privacyPolicyUrl: '/special-pages/datenschutzerklaerung/',
    },
    de: {
      privacyPolicyUrl: '/special-pages/datenschutzerklaerung/',
      consentModal: {
        title: "<h4 class='text-secondary'>Verwendung von Cookies</h4>",
        description:
          'Wir verwenden Cookies um Ihnen einen best möglichen Service bieten zu können. Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.',
      },
      googleanalytics: {
        description:
          'Sammeln von anonymisierten Besucherstatistiken, um den Inhalt dieser Website zu verbessern.',
      },
      youtube: {
        description: 'Anzeigen von YouTube-Videos',
      },
      mylanguage: {
        description: 'Gewählte Sprache',
        title: 'Sprach-Cookie',
      },
      cookieconsent: {
        description: 'Ihre Cookie Auswahl',
        title: 'Cookie-Zustimmung',
      },
      purposes: {
        analytics: 'Besucher-Statistiken',
        externalmedia: 'Externe Medien',
        functional: 'Funktionale Cookies',
        advertising: 'Anzeigen von Werbung',
        styling: 'Styling',
      },
    },
    en: {
      consentModal: {
        title: "<h4 class='text-primary'>Use of Cookies</h4>",
        description:
          'We use cookies to offer you the best possible service. Here you can see and customize the information that we collect about you.',
      },
      googleanalytics: {
        description:
          'Collecting anonymous usage data to improve the content served on this website.',
      },
      youtube: {
        description: 'Show YouTube-Videos',
      },
      mylanguage: {
        description: 'Your language',
        title: 'Language-Cookie',
      },
      cookieconsent: {
        description: 'Your Cookie Consent',
        title: 'Cookie-Consent',
      },
      purposes: {
        analytics: 'Analytics',
        externalmedia: 'External Media',
        functional: 'Functional cookies',
        advertising: 'Advertising',
        styling: 'Styling',
      },
    },
  },
  services: [
    {
      name: 'youtube',
      title: 'YouTube Videos',
      purposes: ['externalmedia'],
      contextualConsentOnly: false,
      callback: function(consent, service) {
        if (consent === true) {
          //$('.embed-responsive').css('padding-top', '56.25%')
        } else {
          //$('.embed-responsive').css('padding-top', '0')
        }
      },
    },
    {
      name: 'googleanalytics',
      default: false,
      title: 'Google-Analytics',
      purposes: ['analytics'],
      cookies: [
        [/^_ga.*$/i, '/', '.devnewproject.ddev.site'],
        [/^_gid.*$/i, '/', '.devnewproject.ddev.site'],
        [/^_dc_gtm.*$/i, '/', '.devnewproject.ddev.site'],
      ],
      required: false,
    },
    {
      name: 'mylanguage',
      purposes: ['functional'],
      required: true,
    },
    {
      name: 'cookieconsent',
      purposes: ['functional'],
      required: true,
    },
  ],
}
// we assign the Klaro module to the window, so that we can access it in JS
window.klaro = Klaro
window.klaroConfig = config
// we set up Klaro with the config
Klaro.setup(config)

/*
 * Put your own javascript code here
 */
console.log('Hello Webpack Encore! Edit me in Build/js/app.js')
