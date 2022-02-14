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
/* harmony import */ var klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! klaro/dist/klaro-no-css */ "./node_modules/klaro/dist/klaro-no-css.js");
/* harmony import */ var klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_3__);
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

/*
 * Need jQuery? Install it with "yarn add jquery",
 * then uncomment to import it.
 */


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
// Sprite Loader

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./icons sync recursive \\.svg$")); // Klaro


var config = {
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
    callback: function callback(consent, service) {
      if (consent === true) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.embed-responsive').css('padding-top', '56.25%');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.embed-responsive').css('padding-top', '0');
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
}; // we assign the Klaro module to the window, so that we can access it in JS

window.klaro = klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_3__;
window.klaroConfig = config; // we set up Klaro with the config

klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_3__.setup(config);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js-no-7d884b"], function() { return __webpack_exec__("./js/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBRFEsRUFjUjtBQUNFTCxJQUFBQSxJQUFJLEVBQUUsaUJBRFI7QUFFRXhCLElBQUFBLE9BQU8sRUFBRSxLQUZYO0FBR0VXLElBQUFBLEtBQUssRUFBRSxrQkFIVDtBQUlFTSxJQUFBQSxRQUFRLEVBQUUsQ0FBQyxXQUFELENBSlo7QUFLRWEsSUFBQUEsT0FBTyxFQUFFLENBQ1AsQ0FBQyxVQUFELEVBQWEsR0FBYixFQUFrQiwwQkFBbEIsQ0FETyxFQUVQLENBQUMsV0FBRCxFQUFjLEdBQWQsRUFBbUIsMEJBQW5CLENBRk8sRUFHUCxDQUFDLGNBQUQsRUFBaUIsR0FBakIsRUFBc0IsMEJBQXRCLENBSE8sQ0FMWDtBQVVFQyxJQUFBQSxRQUFRLEVBQUU7QUFWWixHQWRRLEVBMEJSO0FBQ0VQLElBQUFBLElBQUksRUFBRSxZQURSO0FBRUVQLElBQUFBLFFBQVEsRUFBRSxDQUFDLFlBQUQsQ0FGWjtBQUdFYyxJQUFBQSxRQUFRLEVBQUU7QUFIWixHQTFCUSxFQStCUjtBQUNFUCxJQUFBQSxJQUFJLEVBQUUsZUFEUjtBQUVFUCxJQUFBQSxRQUFRLEVBQUUsQ0FBQyxZQUFELENBRlo7QUFHRWMsSUFBQUEsUUFBUSxFQUFFO0FBSFosR0EvQlE7QUEzRkcsQ0FBZixFQWlJQTs7QUFDQUMsTUFBTSxDQUFDQyxLQUFQLEdBQWUvQyxvREFBZjtBQUNBOEMsTUFBTSxDQUFDRSxXQUFQLEdBQXFCL0MsTUFBckIsRUFDQTs7QUFDQUQsMERBQUEsQ0FBWUMsTUFBWjtBQUVBO0FBQ0E7QUFDQTs7QUFDQWlELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtEQUFaOzs7Ozs7Ozs7Ozs7QUM3TEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZuZXdwcm9qZWN0Ly9Vc2Vycy9zdmVua2FsYmhlbm4vRHJvcGJveC9Qcm9qZWt0ZS9kZXZOZXdQcm9qZWN0L0J1aWxkL2ljb25zfHN5bmN8L1xcLnN2ZyQvIiwid2VicGFjazovL2Rldm5ld3Byb2plY3QvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZGV2bmV3cHJvamVjdC8uL3N0eWxlcy9tYWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2RlLURFLnN2Z1wiOiBcIi4vaWNvbnMvZGUtREUuc3ZnXCIsXG5cdFwiLi9lbi1VUy5zdmdcIjogXCIuL2ljb25zL2VuLVVTLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2ljb25zIHN5bmMgcmVjdXJzaXZlIFxcXFwuc3ZnJFwiOyIsIi8vIEJ1aWxkL2pzL2FwcC5qc1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8qXG4gKiBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAobWFpbi5jc3MgaW4gdGhpcyBjYXNlKVxuICovXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnXG5cbi8qXG4gKiBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsXG4gKiB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLypcbiAqIEluY2x1ZGUgQm9vdHN0cmFwIGluIHlvdXIgU2Fzcy1maWxlLiBZb3UgY2FuIGhlcmUgc3BlY2lmeSB3aGljaCBwbHVnaW5zIHlvdSBuZWVkXG4gKi9cbmltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgUG9wb3ZlcixcbiAgU3RpY2t5aGVhZGVyLFxuICBTbW9vdGhzY3JvbGwsXG4gIExpZ2h0Ym94LFxuICBOYXZiYXIsXG59IGZyb20gJ2Jvb3RzdHJhcCdcblxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvbGlnaHRib3gnKVxuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKClcbi8vIH0pXG5cbi8vcGhvdG9zd2lwZVxuLy9pbXBvcnQgUGhvdG9Td2lwZSBmcm9tICdwaG90b3N3aXBlJ1xuLy9pbXBvcnQgUGhvdG9Td2lwZVVJX0RlZmF1bHQgZnJvbSAncGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtdWktZGVmYXVsdCdcbi8vZ2xvYmFsLlBob3RvU3dpcGUgPSBQaG90b1N3aXBlXG4vL2dsb2JhbC5QaG90b1N3aXBlVUlfRGVmYXVsdCA9IFBob3RvU3dpcGVVSV9EZWZhdWx0XG5cbi8vIFNwcml0ZSBMb2FkZXJcbmZ1bmN0aW9uIHJlcXVpcmVBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpXG59XG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaWNvbnMvJywgdHJ1ZSwgL1xcLnN2ZyQvKSlcblxuLy8gS2xhcm9cbmltcG9ydCAqIGFzIEtsYXJvIGZyb20gJ2tsYXJvL2Rpc3Qva2xhcm8tbm8tY3NzJ1xuY29uc3QgY29uZmlnID0ge1xuICBzdHlsaW5nOiB7XG4gICAgdGhlbWU6IFsnZGFyaycsICd0b3AnLCAnd2lkZSddLFxuICAgIC8vIEdyZWVuIEJ1dHRvblxuICAgIGdyZWVuMTogJyMxYTkzNmYnLFxuICAgIC8vIGRpc2FibGVkIFN3aXRjaGVzXG4gICAgLy9ncmVlbjI6ICcjMzgxMjk5JyxcbiAgICAvLyBCbHVlIEJ1dHRvblxuICAgIGJsdWUxOiAnIzI1ODFjNCcsXG4gICAgLy8gQmFja2dyb3VuZFxuICAgIGRhcmsxOiAnIzQ0NDU0NCcsXG4gICAgJ2J1dHRvbi10ZXh0LWNvbG9yJzogJyNmZmZmZmYnLFxuICB9LFxuICBub0F1dG9Mb2FkOiBmYWxzZSxcbiAgaHRtbFRleHRzOiB0cnVlLFxuICBlbWJlZGRlZDogZmFsc2UsXG4gIGdyb3VwQnlQdXJwb3NlOiB0cnVlLFxuICBzdG9yYWdlTWV0aG9kOiAnY29va2llJyxcbiAgY29va2llTmFtZTogJ2tsYXJvJyxcbiAgY29va2llRXhwaXJlc0FmdGVyRGF5czogMzY1LFxuICBkZWZhdWx0OiBmYWxzZSxcbiAgbXVzdENvbnNlbnQ6IHRydWUsXG4gIGFjY2VwdEFsbDogdHJ1ZSxcbiAgaGlkZURlY2xpbmVBbGw6IGZhbHNlLFxuICBoaWRlTGVhcm5Nb3JlOiBmYWxzZSxcbiAgbm90aWNlQXNNb2RhbDogZmFsc2UsXG5cbiAgdHJhbnNsYXRpb25zOiB7XG4gICAgeno6IHtcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6ICcvc3BlY2lhbC1wYWdlcy9kYXRlbnNjaHV0emVya2xhZXJ1bmcvJyxcbiAgICB9LFxuICAgIGRlOiB7XG4gICAgICBwcml2YWN5UG9saWN5VXJsOiAnL3NwZWNpYWwtcGFnZXMvZGF0ZW5zY2h1dHplcmtsYWVydW5nLycsXG4gICAgICBjb25zZW50TW9kYWw6IHtcbiAgICAgICAgdGl0bGU6IFwiPGg0IGNsYXNzPSd0ZXh0LXNlY29uZGFyeSc+VmVyd2VuZHVuZyB2b24gQ29va2llczwvaDQ+XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdXaXIgdmVyd2VuZGVuIENvb2tpZXMgdW0gSWhuZW4gZWluZW4gYmVzdCBtw7ZnbGljaGVuIFNlcnZpY2UgYmlldGVuIHp1IGvDtm5uZW4uIEhpZXIga8O2bm5lbiBTaWUgZWluc2VoZW4gdW5kIGFucGFzc2VuLCB3ZWxjaGUgSW5mb3JtYXRpb24gd2lyIMO8YmVyIFNpZSBzYW1tZWxuLicsXG4gICAgICB9LFxuICAgICAgZ29vZ2xlYW5hbHl0aWNzOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdTYW1tZWxuIHZvbiBhbm9ueW1pc2llcnRlbiBCZXN1Y2hlcnN0YXRpc3Rpa2VuLCB1bSBkZW4gSW5oYWx0IGRpZXNlciBXZWJzaXRlIHp1IHZlcmJlc3Nlcm4uJyxcbiAgICAgIH0sXG4gICAgICB5b3V0dWJlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQW56ZWlnZW4gdm9uIFlvdVR1YmUtVmlkZW9zJyxcbiAgICAgIH0sXG4gICAgICBteWxhbmd1YWdlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR2V3w6RobHRlIFNwcmFjaGUnLFxuICAgICAgICB0aXRsZTogJ1NwcmFjaC1Db29raWUnLFxuICAgICAgfSxcbiAgICAgIGNvb2tpZWNvbnNlbnQ6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdJaHJlIENvb2tpZSBBdXN3YWhsJyxcbiAgICAgICAgdGl0bGU6ICdDb29raWUtWnVzdGltbXVuZycsXG4gICAgICB9LFxuICAgICAgcHVycG9zZXM6IHtcbiAgICAgICAgYW5hbHl0aWNzOiAnQmVzdWNoZXItU3RhdGlzdGlrZW4nLFxuICAgICAgICBleHRlcm5hbG1lZGlhOiAnRXh0ZXJuZSBNZWRpZW4nLFxuICAgICAgICBmdW5jdGlvbmFsOiAnRnVua3Rpb25hbGUgQ29va2llcycsXG4gICAgICAgIGFkdmVydGlzaW5nOiAnQW56ZWlnZW4gdm9uIFdlcmJ1bmcnLFxuICAgICAgICBzdHlsaW5nOiAnU3R5bGluZycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZW46IHtcbiAgICAgIGNvbnNlbnRNb2RhbDoge1xuICAgICAgICB0aXRsZTogXCI8aDQgY2xhc3M9J3RleHQtcHJpbWFyeSc+VXNlIG9mIENvb2tpZXM8L2g0PlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnV2UgdXNlIGNvb2tpZXMgdG8gb2ZmZXIgeW91IHRoZSBiZXN0IHBvc3NpYmxlIHNlcnZpY2UuIEhlcmUgeW91IGNhbiBzZWUgYW5kIGN1c3RvbWl6ZSB0aGUgaW5mb3JtYXRpb24gdGhhdCB3ZSBjb2xsZWN0IGFib3V0IHlvdS4nLFxuICAgICAgfSxcbiAgICAgIGdvb2dsZWFuYWx5dGljczoge1xuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnQ29sbGVjdGluZyBhbm9ueW1vdXMgdXNhZ2UgZGF0YSB0byBpbXByb3ZlIHRoZSBjb250ZW50IHNlcnZlZCBvbiB0aGlzIHdlYnNpdGUuJyxcbiAgICAgIH0sXG4gICAgICB5b3V0dWJlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2hvdyBZb3VUdWJlLVZpZGVvcycsXG4gICAgICB9LFxuICAgICAgbXlsYW5ndWFnZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgbGFuZ3VhZ2UnLFxuICAgICAgICB0aXRsZTogJ0xhbmd1YWdlLUNvb2tpZScsXG4gICAgICB9LFxuICAgICAgY29va2llY29uc2VudDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgQ29va2llIENvbnNlbnQnLFxuICAgICAgICB0aXRsZTogJ0Nvb2tpZS1Db25zZW50JyxcbiAgICAgIH0sXG4gICAgICBwdXJwb3Nlczoge1xuICAgICAgICBhbmFseXRpY3M6ICdBbmFseXRpY3MnLFxuICAgICAgICBleHRlcm5hbG1lZGlhOiAnRXh0ZXJuYWwgTWVkaWEnLFxuICAgICAgICBmdW5jdGlvbmFsOiAnRnVuY3Rpb25hbCBjb29raWVzJyxcbiAgICAgICAgYWR2ZXJ0aXNpbmc6ICdBZHZlcnRpc2luZycsXG4gICAgICAgIHN0eWxpbmc6ICdTdHlsaW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmljZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAneW91dHViZScsXG4gICAgICB0aXRsZTogJ1lvdVR1YmUgVmlkZW9zJyxcbiAgICAgIHB1cnBvc2VzOiBbJ2V4dGVybmFsbWVkaWEnXSxcbiAgICAgIGNvbnRleHR1YWxDb25zZW50T25seTogZmFsc2UsXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oY29uc2VudCwgc2VydmljZSkge1xuICAgICAgICBpZiAoY29uc2VudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICQoJy5lbWJlZC1yZXNwb25zaXZlJykuY3NzKCdwYWRkaW5nLXRvcCcsICc1Ni4yNSUnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoJy5lbWJlZC1yZXNwb25zaXZlJykuY3NzKCdwYWRkaW5nLXRvcCcsICcwJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdnb29nbGVhbmFseXRpY3MnLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB0aXRsZTogJ0dvb2dsZS1BbmFseXRpY3MnLFxuICAgICAgcHVycG9zZXM6IFsnYW5hbHl0aWNzJ10sXG4gICAgICBjb29raWVzOiBbXG4gICAgICAgIFsvXl9nYS4qJC9pLCAnLycsICcuZGV2bmV3cHJvamVjdC5kZGV2LnNpdGUnXSxcbiAgICAgICAgWy9eX2dpZC4qJC9pLCAnLycsICcuZGV2bmV3cHJvamVjdC5kZGV2LnNpdGUnXSxcbiAgICAgICAgWy9eX2RjX2d0bS4qJC9pLCAnLycsICcuZGV2bmV3cHJvamVjdC5kZGV2LnNpdGUnXSxcbiAgICAgIF0sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbXlsYW5ndWFnZScsXG4gICAgICBwdXJwb3NlczogWydmdW5jdGlvbmFsJ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjb29raWVjb25zZW50JyxcbiAgICAgIHB1cnBvc2VzOiBbJ2Z1bmN0aW9uYWwnXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59XG4vLyB3ZSBhc3NpZ24gdGhlIEtsYXJvIG1vZHVsZSB0byB0aGUgd2luZG93LCBzbyB0aGF0IHdlIGNhbiBhY2Nlc3MgaXQgaW4gSlNcbndpbmRvdy5rbGFybyA9IEtsYXJvXG53aW5kb3cua2xhcm9Db25maWcgPSBjb25maWdcbi8vIHdlIHNldCB1cCBLbGFybyB3aXRoIHRoZSBjb25maWdcbktsYXJvLnNldHVwKGNvbmZpZylcblxuLypcbiAqIFB1dCB5b3VyIG93biBqYXZhc2NyaXB0IGNvZGUgaGVyZVxuICovXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gQnVpbGQvanMvYXBwLmpzJylcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwiQWNjb3JkaW9uIiwiUG9wb3ZlciIsIlN0aWNreWhlYWRlciIsIlNtb290aHNjcm9sbCIsIkxpZ2h0Ym94IiwiTmF2YmFyIiwicmVxdWlyZUFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJjb250ZXh0IiwiS2xhcm8iLCJjb25maWciLCJzdHlsaW5nIiwidGhlbWUiLCJncmVlbjEiLCJibHVlMSIsImRhcmsxIiwibm9BdXRvTG9hZCIsImh0bWxUZXh0cyIsImVtYmVkZGVkIiwiZ3JvdXBCeVB1cnBvc2UiLCJzdG9yYWdlTWV0aG9kIiwiY29va2llTmFtZSIsImNvb2tpZUV4cGlyZXNBZnRlckRheXMiLCJkZWZhdWx0IiwibXVzdENvbnNlbnQiLCJhY2NlcHRBbGwiLCJoaWRlRGVjbGluZUFsbCIsImhpZGVMZWFybk1vcmUiLCJub3RpY2VBc01vZGFsIiwidHJhbnNsYXRpb25zIiwienoiLCJwcml2YWN5UG9saWN5VXJsIiwiZGUiLCJjb25zZW50TW9kYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ29vZ2xlYW5hbHl0aWNzIiwieW91dHViZSIsIm15bGFuZ3VhZ2UiLCJjb29raWVjb25zZW50IiwicHVycG9zZXMiLCJhbmFseXRpY3MiLCJleHRlcm5hbG1lZGlhIiwiZnVuY3Rpb25hbCIsImFkdmVydGlzaW5nIiwiZW4iLCJzZXJ2aWNlcyIsIm5hbWUiLCJjb250ZXh0dWFsQ29uc2VudE9ubHkiLCJjYWxsYmFjayIsImNvbnNlbnQiLCJzZXJ2aWNlIiwiY3NzIiwiY29va2llcyIsInJlcXVpcmVkIiwid2luZG93Iiwia2xhcm8iLCJrbGFyb0NvbmZpZyIsInNldHVwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=