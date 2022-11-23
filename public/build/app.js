(self["webpackChunkdevnewproject"] = self["webpackChunkdevnewproject"] || []).push([["app"],{

/***/ "./icons sync recursive \\.svg$":
/*!****************************!*\
  !*** ./icons/ sync \.svg$ ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./de-DE.svg": "./icons/de-DE.svg",
	"./en-US.svg": "./icons/en-US.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./icons sync recursive \\.svg$";

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var lax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lax.js */ "./node_modules/lax.js/lib/lax.min.js");
/* harmony import */ var lax_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lax_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! klaro/dist/klaro-no-css */ "./node_modules/klaro/dist/klaro-no-css.js");
/* harmony import */ var klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_4__);
// Build/js/app.js
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
console.log('Starting build...');
/*
 * any CSS you import will output into a single css file (main.css in this case)
 */


/*
 * Need jQuery? Install it with "yarn add jquery",
 * then uncomment to import it.
 */

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_1___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_1___default());

/*
 * Include Bootstrap in your Sass-file. You can here specify which plugins you need
 */


// require('bootstrap/js/dist/lightbox')

// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover()
// })

//photoswipe
//import PhotoSwipe from 'photoswipe'
//import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
//global.PhotoSwipe = PhotoSwipe
//global.PhotoSwipeUI_Default = PhotoSwipeUI_Default


window.onload = function () {
  lax_js__WEBPACK_IMPORTED_MODULE_3___default().init();

  // Add a driver that we use to control our animations
  lax_js__WEBPACK_IMPORTED_MODULE_3___default().addDriver('scrollY', function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax_js__WEBPACK_IMPORTED_MODULE_3___default().addElements('#testbutton', {
    scrollY: {
      translateX: [['elInY', 'elCenterY', 'elOutY'], [0, 'screenWidth/2', 'screenWidth']]
    }
  });
};

/*
 * Sprite Loader
 */
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__("./icons sync recursive \\.svg$"));

/*
 * Klaro
 */

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
    'button-text-color': '#ffffff'
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
      privacyPolicyUrl: '/special-pages/datenschutzerklaerung/'
    },
    de: {
      privacyPolicyUrl: '/special-pages/datenschutzerklaerung/',
      consentModal: {
        title: "<h4 class='text-secondary'>Verwendung von Cookies</h4>",
        description: 'Wir verwenden Cookies um Ihnen einen best möglichen Service bieten zu können. Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.'
      },
      googleanalytics: {
        description: 'Sammeln von anonymisierten Besucherstatistiken, um den Inhalt dieser Website zu verbessern.'
      },
      youtube: {
        description: 'Anzeigen von YouTube-Videos'
      },
      mylanguage: {
        description: 'Gewählte Sprache',
        title: 'Sprach-Cookie'
      },
      cookieconsent: {
        description: 'Ihre Cookie Auswahl',
        title: 'Cookie-Zustimmung'
      },
      purposes: {
        analytics: 'Besucher-Statistiken',
        externalmedia: 'Externe Medien',
        functional: 'Funktionale Cookies',
        advertising: 'Anzeigen von Werbung',
        styling: 'Styling'
      }
    },
    en: {
      consentModal: {
        title: "<h4 class='text-primary'>Use of Cookies</h4>",
        description: 'We use cookies to offer you the best possible service. Here you can see and customize the information that we collect about you.'
      },
      googleanalytics: {
        description: 'Collecting anonymous usage data to improve the content served on this website.'
      },
      youtube: {
        description: 'Show YouTube-Videos'
      },
      mylanguage: {
        description: 'Your language',
        title: 'Language-Cookie'
      },
      cookieconsent: {
        description: 'Your Cookie Consent',
        title: 'Cookie-Consent'
      },
      purposes: {
        analytics: 'Analytics',
        externalmedia: 'External Media',
        functional: 'Functional cookies',
        advertising: 'Advertising',
        styling: 'Styling'
      }
    }
  },
  services: [{
    name: 'youtube',
    title: 'YouTube Videos',
    purposes: ['externalmedia'],
    contextualConsentOnly: false,
    callback: function (consent, service) {
      if (consent === true) {
        //$('.embed-responsive').css('padding-top', '56.25%')
      } else {
        //$('.embed-responsive').css('padding-top', '0')
      }
    }
  }, {
    name: 'googleanalytics',
    default: false,
    title: 'Google-Analytics',
    purposes: ['analytics'],
    cookies: [[/^_ga.*$/i, '/', '.devnewproject.ddev.site'], [/^_gid.*$/i, '/', '.devnewproject.ddev.site'], [/^_dc_gtm.*$/i, '/', '.devnewproject.ddev.site']],
    required: false
  }, {
    name: 'mylanguage',
    purposes: ['functional'],
    required: true
  }, {
    name: 'cookieconsent',
    purposes: ['functional'],
    required: true
  }]
};
// we assign the Klaro module to the window, so that we can access it in JS
window.klaro = klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_4__;
window.klaroConfig = config;
// we set up Klaro with the config
klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_4__.setup(config);

/*
 * Put your own javascript code here
 */
console.log('Hello Webpack Encore! Edit me in Build/js/app.js');

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./icons/de-DE.svg":
/*!*************************!*\
  !*** ./icons/de-DE.svg ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,ZXhwb3J0IGRlZmF1bHQgewogICAgICBpZDogImRlLURFLXVzYWdlIiwKICAgICAgdmlld0JveDogIjAgMCA2NDAgNDgwIiwKICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICIvVXNlcnMvc3ZlbmthbGJoZW5uL0Ryb3Bib3gvUHJvamVrdGUvZGV2TmV3UHJvamVjdC9CdWlsZC9pY29ucy9kZS1ERS5zdmciLAogICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkgewogICAgICAgIHJldHVybiB0aGlzLnVybDsKICAgICAgfQogICAgfQ==";

/***/ }),

/***/ "./icons/en-US.svg":
/*!*************************!*\
  !*** ./icons/en-US.svg ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,ZXhwb3J0IGRlZmF1bHQgewogICAgICBpZDogImVuLVVTLXVzYWdlIiwKICAgICAgdmlld0JveDogIjAgMCA2NDAgNDgwIiwKICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICIvVXNlcnMvc3ZlbmthbGJoZW5uL0Ryb3Bib3gvUHJvamVrdGUvZGV2TmV3UHJvamVjdC9CdWlsZC9pY29ucy9lbi1VUy5zdmciLAogICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkgewogICAgICAgIHJldHVybiB0aGlzLnVybDsKICAgICAgfQogICAgfQ==";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js-no-74c5b1"], function() { return __webpack_exec__("./js/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQWtCO0lBQ3pCTSxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDdkJZLE9BQU8sRUFBRSxDQUNQLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQyxFQUM3QyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsMEJBQTBCLENBQUMsRUFDOUMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLDBCQUEwQixDQUFDLENBQ2xEO0lBQ0RDLFFBQVEsRUFBRTtFQUNaLENBQUMsRUFDRDtJQUNFTixJQUFJLEVBQUUsWUFBWTtJQUNsQlAsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ3hCYSxRQUFRLEVBQUU7RUFDWixDQUFDLEVBQ0Q7SUFDRU4sSUFBSSxFQUFFLGVBQWU7SUFDckJQLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUN4QmEsUUFBUSxFQUFFO0VBQ1osQ0FBQztBQUVMLENBQUM7QUFDRDtBQUNBM0QsTUFBTSxDQUFDNEQsS0FBSyxHQUFHN0Msb0RBQUs7QUFDcEJmLE1BQU0sQ0FBQzZELFdBQVcsR0FBRzdDLE1BQU07QUFDM0I7QUFDQUQsMERBQVcsQ0FBQ0MsTUFBTSxDQUFDOztBQUVuQjtBQUNBO0FBQ0E7QUFDQW5CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7Ozs7QUNqTi9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2bmV3cHJvamVjdC8uL2ljb25zLyBzeW5jIFxcLnN2ZyQiLCJ3ZWJwYWNrOi8vZGV2bmV3cHJvamVjdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9kZXZuZXdwcm9qZWN0Ly4vc3R5bGVzL21haW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZGUtREUuc3ZnXCI6IFwiLi9pY29ucy9kZS1ERS5zdmdcIixcblx0XCIuL2VuLVVTLnN2Z1wiOiBcIi4vaWNvbnMvZW4tVVMuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vaWNvbnMgc3luYyByZWN1cnNpdmUgXFxcXC5zdmckXCI7IiwiLy8gQnVpbGQvanMvYXBwLmpzXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cbmNvbnNvbGUubG9nKCdTdGFydGluZyBidWlsZC4uLicpXG4vKlxuICogYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKG1haW4uY3NzIGluIHRoaXMgY2FzZSlcbiAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJ1xuXG4vKlxuICogTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLFxuICogdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG53aW5kb3cualF1ZXJ5ID0gJFxud2luZG93LiQgPSAkXG5cbi8qXG4gKiBJbmNsdWRlIEJvb3RzdHJhcCBpbiB5b3VyIFNhc3MtZmlsZS4gWW91IGNhbiBoZXJlIHNwZWNpZnkgd2hpY2ggcGx1Z2lucyB5b3UgbmVlZFxuICovXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcblxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvbGlnaHRib3gnKVxuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKClcbi8vIH0pXG5cbi8vcGhvdG9zd2lwZVxuLy9pbXBvcnQgUGhvdG9Td2lwZSBmcm9tICdwaG90b3N3aXBlJ1xuLy9pbXBvcnQgUGhvdG9Td2lwZVVJX0RlZmF1bHQgZnJvbSAncGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtdWktZGVmYXVsdCdcbi8vZ2xvYmFsLlBob3RvU3dpcGUgPSBQaG90b1N3aXBlXG4vL2dsb2JhbC5QaG90b1N3aXBlVUlfRGVmYXVsdCA9IFBob3RvU3dpcGVVSV9EZWZhdWx0XG5cbmltcG9ydCBsYXggZnJvbSAnbGF4LmpzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGxheC5pbml0KClcblxuICAvLyBBZGQgYSBkcml2ZXIgdGhhdCB3ZSB1c2UgdG8gY29udHJvbCBvdXIgYW5pbWF0aW9uc1xuICBsYXguYWRkRHJpdmVyKCdzY3JvbGxZJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZXG4gIH0pXG5cbiAgLy8gQWRkIGFuaW1hdGlvbiBiaW5kaW5ncyB0byBlbGVtZW50c1xuICBsYXguYWRkRWxlbWVudHMoJyN0ZXN0YnV0dG9uJywge1xuICAgIHNjcm9sbFk6IHtcbiAgICAgIHRyYW5zbGF0ZVg6IFtcbiAgICAgICAgWydlbEluWScsICdlbENlbnRlclknLCAnZWxPdXRZJ10sXG4gICAgICAgIFswLCAnc2NyZWVuV2lkdGgvMicsICdzY3JlZW5XaWR0aCddLFxuICAgICAgXSxcbiAgICB9LFxuICB9KVxufVxuXG4vKlxuICogU3ByaXRlIExvYWRlclxuICovXG5mdW5jdGlvbiByZXF1aXJlQWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKVxufVxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ljb25zLycsIHRydWUsIC9cXC5zdmckLykpXG5cbi8qXG4gKiBLbGFyb1xuICovXG5pbXBvcnQgKiBhcyBLbGFybyBmcm9tICdrbGFyby9kaXN0L2tsYXJvLW5vLWNzcydcbmNvbnN0IGNvbmZpZyA9IHtcbiAgc3R5bGluZzoge1xuICAgIHRoZW1lOiBbJ2RhcmsnLCAndG9wJywgJ3dpZGUnXSxcbiAgICAvLyBHcmVlbiBCdXR0b25cbiAgICBncmVlbjE6ICcjMWE5MzZmJyxcbiAgICAvLyBkaXNhYmxlZCBTd2l0Y2hlc1xuICAgIC8vZ3JlZW4yOiAnIzM4MTI5OScsXG4gICAgLy8gQmx1ZSBCdXR0b25cbiAgICBibHVlMTogJyMyNTgxYzQnLFxuICAgIC8vIEJhY2tncm91bmRcbiAgICBkYXJrMTogJyM0NDQ1NDQnLFxuICAgICdidXR0b24tdGV4dC1jb2xvcic6ICcjZmZmZmZmJyxcbiAgfSxcbiAgbm9BdXRvTG9hZDogZmFsc2UsXG4gIGh0bWxUZXh0czogdHJ1ZSxcbiAgZW1iZWRkZWQ6IGZhbHNlLFxuICBncm91cEJ5UHVycG9zZTogdHJ1ZSxcbiAgc3RvcmFnZU1ldGhvZDogJ2Nvb2tpZScsXG4gIGNvb2tpZU5hbWU6ICdrbGFybycsXG4gIGNvb2tpZUV4cGlyZXNBZnRlckRheXM6IDM2NSxcbiAgZGVmYXVsdDogZmFsc2UsXG4gIG11c3RDb25zZW50OiB0cnVlLFxuICBhY2NlcHRBbGw6IHRydWUsXG4gIGhpZGVEZWNsaW5lQWxsOiBmYWxzZSxcbiAgaGlkZUxlYXJuTW9yZTogZmFsc2UsXG4gIG5vdGljZUFzTW9kYWw6IGZhbHNlLFxuXG4gIHRyYW5zbGF0aW9uczoge1xuICAgIHp6OiB7XG4gICAgICBwcml2YWN5UG9saWN5VXJsOiAnL3NwZWNpYWwtcGFnZXMvZGF0ZW5zY2h1dHplcmtsYWVydW5nLycsXG4gICAgfSxcbiAgICBkZToge1xuICAgICAgcHJpdmFjeVBvbGljeVVybDogJy9zcGVjaWFsLXBhZ2VzL2RhdGVuc2NodXR6ZXJrbGFlcnVuZy8nLFxuICAgICAgY29uc2VudE1vZGFsOiB7XG4gICAgICAgIHRpdGxlOiBcIjxoNCBjbGFzcz0ndGV4dC1zZWNvbmRhcnknPlZlcndlbmR1bmcgdm9uIENvb2tpZXM8L2g0PlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnV2lyIHZlcndlbmRlbiBDb29raWVzIHVtIElobmVuIGVpbmVuIGJlc3QgbcO2Z2xpY2hlbiBTZXJ2aWNlIGJpZXRlbiB6dSBrw7ZubmVuLiBIaWVyIGvDtm5uZW4gU2llIGVpbnNlaGVuIHVuZCBhbnBhc3Nlbiwgd2VsY2hlIEluZm9ybWF0aW9uIHdpciDDvGJlciBTaWUgc2FtbWVsbi4nLFxuICAgICAgfSxcbiAgICAgIGdvb2dsZWFuYWx5dGljczoge1xuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnU2FtbWVsbiB2b24gYW5vbnltaXNpZXJ0ZW4gQmVzdWNoZXJzdGF0aXN0aWtlbiwgdW0gZGVuIEluaGFsdCBkaWVzZXIgV2Vic2l0ZSB6dSB2ZXJiZXNzZXJuLicsXG4gICAgICB9LFxuICAgICAgeW91dHViZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ0FuemVpZ2VuIHZvbiBZb3VUdWJlLVZpZGVvcycsXG4gICAgICB9LFxuICAgICAgbXlsYW5ndWFnZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ0dld8OkaGx0ZSBTcHJhY2hlJyxcbiAgICAgICAgdGl0bGU6ICdTcHJhY2gtQ29va2llJyxcbiAgICAgIH0sXG4gICAgICBjb29raWVjb25zZW50OiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSWhyZSBDb29raWUgQXVzd2FobCcsXG4gICAgICAgIHRpdGxlOiAnQ29va2llLVp1c3RpbW11bmcnLFxuICAgICAgfSxcbiAgICAgIHB1cnBvc2VzOiB7XG4gICAgICAgIGFuYWx5dGljczogJ0Jlc3VjaGVyLVN0YXRpc3Rpa2VuJyxcbiAgICAgICAgZXh0ZXJuYWxtZWRpYTogJ0V4dGVybmUgTWVkaWVuJyxcbiAgICAgICAgZnVuY3Rpb25hbDogJ0Z1bmt0aW9uYWxlIENvb2tpZXMnLFxuICAgICAgICBhZHZlcnRpc2luZzogJ0FuemVpZ2VuIHZvbiBXZXJidW5nJyxcbiAgICAgICAgc3R5bGluZzogJ1N0eWxpbmcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVuOiB7XG4gICAgICBjb25zZW50TW9kYWw6IHtcbiAgICAgICAgdGl0bGU6IFwiPGg0IGNsYXNzPSd0ZXh0LXByaW1hcnknPlVzZSBvZiBDb29raWVzPC9oND5cIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ1dlIHVzZSBjb29raWVzIHRvIG9mZmVyIHlvdSB0aGUgYmVzdCBwb3NzaWJsZSBzZXJ2aWNlLiBIZXJlIHlvdSBjYW4gc2VlIGFuZCBjdXN0b21pemUgdGhlIGluZm9ybWF0aW9uIHRoYXQgd2UgY29sbGVjdCBhYm91dCB5b3UuJyxcbiAgICAgIH0sXG4gICAgICBnb29nbGVhbmFseXRpY3M6IHtcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0NvbGxlY3RpbmcgYW5vbnltb3VzIHVzYWdlIGRhdGEgdG8gaW1wcm92ZSB0aGUgY29udGVudCBzZXJ2ZWQgb24gdGhpcyB3ZWJzaXRlLicsXG4gICAgICB9LFxuICAgICAgeW91dHViZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1Nob3cgWW91VHViZS1WaWRlb3MnLFxuICAgICAgfSxcbiAgICAgIG15bGFuZ3VhZ2U6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3VyIGxhbmd1YWdlJyxcbiAgICAgICAgdGl0bGU6ICdMYW5ndWFnZS1Db29raWUnLFxuICAgICAgfSxcbiAgICAgIGNvb2tpZWNvbnNlbnQ6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3VyIENvb2tpZSBDb25zZW50JyxcbiAgICAgICAgdGl0bGU6ICdDb29raWUtQ29uc2VudCcsXG4gICAgICB9LFxuICAgICAgcHVycG9zZXM6IHtcbiAgICAgICAgYW5hbHl0aWNzOiAnQW5hbHl0aWNzJyxcbiAgICAgICAgZXh0ZXJuYWxtZWRpYTogJ0V4dGVybmFsIE1lZGlhJyxcbiAgICAgICAgZnVuY3Rpb25hbDogJ0Z1bmN0aW9uYWwgY29va2llcycsXG4gICAgICAgIGFkdmVydGlzaW5nOiAnQWR2ZXJ0aXNpbmcnLFxuICAgICAgICBzdHlsaW5nOiAnU3R5bGluZycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNlcnZpY2VzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3lvdXR1YmUnLFxuICAgICAgdGl0bGU6ICdZb3VUdWJlIFZpZGVvcycsXG4gICAgICBwdXJwb3NlczogWydleHRlcm5hbG1lZGlhJ10sXG4gICAgICBjb250ZXh0dWFsQ29uc2VudE9ubHk6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGNvbnNlbnQsIHNlcnZpY2UpIHtcbiAgICAgICAgaWYgKGNvbnNlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyQoJy5lbWJlZC1yZXNwb25zaXZlJykuY3NzKCdwYWRkaW5nLXRvcCcsICc1Ni4yNSUnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vJCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5jc3MoJ3BhZGRpbmctdG9wJywgJzAnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2dvb2dsZWFuYWx5dGljcycsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIHRpdGxlOiAnR29vZ2xlLUFuYWx5dGljcycsXG4gICAgICBwdXJwb3NlczogWydhbmFseXRpY3MnXSxcbiAgICAgIGNvb2tpZXM6IFtcbiAgICAgICAgWy9eX2dhLiokL2ksICcvJywgJy5kZXZuZXdwcm9qZWN0LmRkZXYuc2l0ZSddLFxuICAgICAgICBbL15fZ2lkLiokL2ksICcvJywgJy5kZXZuZXdwcm9qZWN0LmRkZXYuc2l0ZSddLFxuICAgICAgICBbL15fZGNfZ3RtLiokL2ksICcvJywgJy5kZXZuZXdwcm9qZWN0LmRkZXYuc2l0ZSddLFxuICAgICAgXSxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdteWxhbmd1YWdlJyxcbiAgICAgIHB1cnBvc2VzOiBbJ2Z1bmN0aW9uYWwnXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnQnLFxuICAgICAgcHVycG9zZXM6IFsnZnVuY3Rpb25hbCddLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgXSxcbn1cbi8vIHdlIGFzc2lnbiB0aGUgS2xhcm8gbW9kdWxlIHRvIHRoZSB3aW5kb3csIHNvIHRoYXQgd2UgY2FuIGFjY2VzcyBpdCBpbiBKU1xud2luZG93LmtsYXJvID0gS2xhcm9cbndpbmRvdy5rbGFyb0NvbmZpZyA9IGNvbmZpZ1xuLy8gd2Ugc2V0IHVwIEtsYXJvIHdpdGggdGhlIGNvbmZpZ1xuS2xhcm8uc2V0dXAoY29uZmlnKVxuXG4vKlxuICogUHV0IHlvdXIgb3duIGphdmFzY3JpcHQgY29kZSBoZXJlXG4gKi9cbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBCdWlsZC9qcy9hcHAuanMnKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwid2luZG93IiwialF1ZXJ5IiwibGF4Iiwib25sb2FkIiwiaW5pdCIsImFkZERyaXZlciIsInNjcm9sbFkiLCJhZGRFbGVtZW50cyIsInRyYW5zbGF0ZVgiLCJyZXF1aXJlQWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsImNvbnRleHQiLCJLbGFybyIsImNvbmZpZyIsInN0eWxpbmciLCJ0aGVtZSIsImdyZWVuMSIsImJsdWUxIiwiZGFyazEiLCJub0F1dG9Mb2FkIiwiaHRtbFRleHRzIiwiZW1iZWRkZWQiLCJncm91cEJ5UHVycG9zZSIsInN0b3JhZ2VNZXRob2QiLCJjb29raWVOYW1lIiwiY29va2llRXhwaXJlc0FmdGVyRGF5cyIsImRlZmF1bHQiLCJtdXN0Q29uc2VudCIsImFjY2VwdEFsbCIsImhpZGVEZWNsaW5lQWxsIiwiaGlkZUxlYXJuTW9yZSIsIm5vdGljZUFzTW9kYWwiLCJ0cmFuc2xhdGlvbnMiLCJ6eiIsInByaXZhY3lQb2xpY3lVcmwiLCJkZSIsImNvbnNlbnRNb2RhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnb29nbGVhbmFseXRpY3MiLCJ5b3V0dWJlIiwibXlsYW5ndWFnZSIsImNvb2tpZWNvbnNlbnQiLCJwdXJwb3NlcyIsImFuYWx5dGljcyIsImV4dGVybmFsbWVkaWEiLCJmdW5jdGlvbmFsIiwiYWR2ZXJ0aXNpbmciLCJlbiIsInNlcnZpY2VzIiwibmFtZSIsImNvbnRleHR1YWxDb25zZW50T25seSIsImNhbGxiYWNrIiwiY29uc2VudCIsInNlcnZpY2UiLCJjb29raWVzIiwicmVxdWlyZWQiLCJrbGFybyIsImtsYXJvQ29uZmlnIiwic2V0dXAiXSwic291cmNlUm9vdCI6IiJ9