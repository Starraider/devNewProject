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
  lax_js__WEBPACK_IMPORTED_MODULE_3___default().init(); // Add a driver that we use to control our animations

  lax_js__WEBPACK_IMPORTED_MODULE_3___default().addDriver('scrollY', function () {
    return window.scrollY;
  }); // Add animation bindings to elements

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
      if (consent === true) {//$('.embed-responsive').css('padding-top', '56.25%')
      } else {//$('.embed-responsive').css('padding-top', '0')
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

window.klaro = klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_4__;
window.klaroConfig = config; // we set up Klaro with the config

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZixNQUFNLENBQUM2RCxXQUFQLEdBQXFCN0MsTUFBckIsRUFDQTs7QUFDQUQsMERBQUEsQ0FBWUMsTUFBWjtBQUVBO0FBQ0E7QUFDQTs7QUFDQStDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtEQUFaOzs7Ozs7Ozs7Ozs7QUNqTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZuZXdwcm9qZWN0Ly9Vc2Vycy9zdmVua2FsYmhlbm4vRHJvcGJveC9Qcm9qZWt0ZS9kZXZOZXdQcm9qZWN0L0J1aWxkL2ljb25zfHN5bmN8L1xcLnN2ZyQvIiwid2VicGFjazovL2Rldm5ld3Byb2plY3QvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZGV2bmV3cHJvamVjdC8uL3N0eWxlcy9tYWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2RlLURFLnN2Z1wiOiBcIi4vaWNvbnMvZGUtREUuc3ZnXCIsXG5cdFwiLi9lbi1VUy5zdmdcIjogXCIuL2ljb25zL2VuLVVTLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2ljb25zIHN5bmMgcmVjdXJzaXZlIFxcXFwuc3ZnJFwiOyIsIi8vIEJ1aWxkL2pzL2FwcC5qc1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8qXG4gKiBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAobWFpbi5jc3MgaW4gdGhpcyBjYXNlKVxuICovXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnXG5cbi8qXG4gKiBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsXG4gKiB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbndpbmRvdy5qUXVlcnkgPSAkXG53aW5kb3cuJCA9ICRcblxuLypcbiAqIEluY2x1ZGUgQm9vdHN0cmFwIGluIHlvdXIgU2Fzcy1maWxlLiBZb3UgY2FuIGhlcmUgc3BlY2lmeSB3aGljaCBwbHVnaW5zIHlvdSBuZWVkXG4gKi9cbmltcG9ydCAnYm9vdHN0cmFwJ1xuXG4vLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC9saWdodGJveCcpXG5cbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbi8vICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKVxuLy8gfSlcblxuLy9waG90b3N3aXBlXG4vL2ltcG9ydCBQaG90b1N3aXBlIGZyb20gJ3Bob3Rvc3dpcGUnXG4vL2ltcG9ydCBQaG90b1N3aXBlVUlfRGVmYXVsdCBmcm9tICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS11aS1kZWZhdWx0J1xuLy9nbG9iYWwuUGhvdG9Td2lwZSA9IFBob3RvU3dpcGVcbi8vZ2xvYmFsLlBob3RvU3dpcGVVSV9EZWZhdWx0ID0gUGhvdG9Td2lwZVVJX0RlZmF1bHRcblxuaW1wb3J0IGxheCBmcm9tICdsYXguanMnXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgbGF4LmluaXQoKVxuXG4gIC8vIEFkZCBhIGRyaXZlciB0aGF0IHdlIHVzZSB0byBjb250cm9sIG91ciBhbmltYXRpb25zXG4gIGxheC5hZGREcml2ZXIoJ3Njcm9sbFknLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LnNjcm9sbFlcbiAgfSlcblxuICAvLyBBZGQgYW5pbWF0aW9uIGJpbmRpbmdzIHRvIGVsZW1lbnRzXG4gIGxheC5hZGRFbGVtZW50cygnI3Rlc3RidXR0b24nLCB7XG4gICAgc2Nyb2xsWToge1xuICAgICAgdHJhbnNsYXRlWDogW1xuICAgICAgICBbJ2VsSW5ZJywgJ2VsQ2VudGVyWScsICdlbE91dFknXSxcbiAgICAgICAgWzAsICdzY3JlZW5XaWR0aC8yJywgJ3NjcmVlbldpZHRoJ10sXG4gICAgICBdLFxuICAgIH0sXG4gIH0pXG59XG5cbi8qXG4gKiBTcHJpdGUgTG9hZGVyXG4gKi9cbmZ1bmN0aW9uIHJlcXVpcmVBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpXG59XG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaWNvbnMvJywgdHJ1ZSwgL1xcLnN2ZyQvKSlcblxuLypcbiAqIEtsYXJvXG4gKi9cbmltcG9ydCAqIGFzIEtsYXJvIGZyb20gJ2tsYXJvL2Rpc3Qva2xhcm8tbm8tY3NzJ1xuY29uc3QgY29uZmlnID0ge1xuICBzdHlsaW5nOiB7XG4gICAgdGhlbWU6IFsnZGFyaycsICd0b3AnLCAnd2lkZSddLFxuICAgIC8vIEdyZWVuIEJ1dHRvblxuICAgIGdyZWVuMTogJyMxYTkzNmYnLFxuICAgIC8vIGRpc2FibGVkIFN3aXRjaGVzXG4gICAgLy9ncmVlbjI6ICcjMzgxMjk5JyxcbiAgICAvLyBCbHVlIEJ1dHRvblxuICAgIGJsdWUxOiAnIzI1ODFjNCcsXG4gICAgLy8gQmFja2dyb3VuZFxuICAgIGRhcmsxOiAnIzQ0NDU0NCcsXG4gICAgJ2J1dHRvbi10ZXh0LWNvbG9yJzogJyNmZmZmZmYnLFxuICB9LFxuICBub0F1dG9Mb2FkOiBmYWxzZSxcbiAgaHRtbFRleHRzOiB0cnVlLFxuICBlbWJlZGRlZDogZmFsc2UsXG4gIGdyb3VwQnlQdXJwb3NlOiB0cnVlLFxuICBzdG9yYWdlTWV0aG9kOiAnY29va2llJyxcbiAgY29va2llTmFtZTogJ2tsYXJvJyxcbiAgY29va2llRXhwaXJlc0FmdGVyRGF5czogMzY1LFxuICBkZWZhdWx0OiBmYWxzZSxcbiAgbXVzdENvbnNlbnQ6IHRydWUsXG4gIGFjY2VwdEFsbDogdHJ1ZSxcbiAgaGlkZURlY2xpbmVBbGw6IGZhbHNlLFxuICBoaWRlTGVhcm5Nb3JlOiBmYWxzZSxcbiAgbm90aWNlQXNNb2RhbDogZmFsc2UsXG5cbiAgdHJhbnNsYXRpb25zOiB7XG4gICAgeno6IHtcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6ICcvc3BlY2lhbC1wYWdlcy9kYXRlbnNjaHV0emVya2xhZXJ1bmcvJyxcbiAgICB9LFxuICAgIGRlOiB7XG4gICAgICBwcml2YWN5UG9saWN5VXJsOiAnL3NwZWNpYWwtcGFnZXMvZGF0ZW5zY2h1dHplcmtsYWVydW5nLycsXG4gICAgICBjb25zZW50TW9kYWw6IHtcbiAgICAgICAgdGl0bGU6IFwiPGg0IGNsYXNzPSd0ZXh0LXNlY29uZGFyeSc+VmVyd2VuZHVuZyB2b24gQ29va2llczwvaDQ+XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdXaXIgdmVyd2VuZGVuIENvb2tpZXMgdW0gSWhuZW4gZWluZW4gYmVzdCBtw7ZnbGljaGVuIFNlcnZpY2UgYmlldGVuIHp1IGvDtm5uZW4uIEhpZXIga8O2bm5lbiBTaWUgZWluc2VoZW4gdW5kIGFucGFzc2VuLCB3ZWxjaGUgSW5mb3JtYXRpb24gd2lyIMO8YmVyIFNpZSBzYW1tZWxuLicsXG4gICAgICB9LFxuICAgICAgZ29vZ2xlYW5hbHl0aWNzOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdTYW1tZWxuIHZvbiBhbm9ueW1pc2llcnRlbiBCZXN1Y2hlcnN0YXRpc3Rpa2VuLCB1bSBkZW4gSW5oYWx0IGRpZXNlciBXZWJzaXRlIHp1IHZlcmJlc3Nlcm4uJyxcbiAgICAgIH0sXG4gICAgICB5b3V0dWJlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQW56ZWlnZW4gdm9uIFlvdVR1YmUtVmlkZW9zJyxcbiAgICAgIH0sXG4gICAgICBteWxhbmd1YWdlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR2V3w6RobHRlIFNwcmFjaGUnLFxuICAgICAgICB0aXRsZTogJ1NwcmFjaC1Db29raWUnLFxuICAgICAgfSxcbiAgICAgIGNvb2tpZWNvbnNlbnQ6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdJaHJlIENvb2tpZSBBdXN3YWhsJyxcbiAgICAgICAgdGl0bGU6ICdDb29raWUtWnVzdGltbXVuZycsXG4gICAgICB9LFxuICAgICAgcHVycG9zZXM6IHtcbiAgICAgICAgYW5hbHl0aWNzOiAnQmVzdWNoZXItU3RhdGlzdGlrZW4nLFxuICAgICAgICBleHRlcm5hbG1lZGlhOiAnRXh0ZXJuZSBNZWRpZW4nLFxuICAgICAgICBmdW5jdGlvbmFsOiAnRnVua3Rpb25hbGUgQ29va2llcycsXG4gICAgICAgIGFkdmVydGlzaW5nOiAnQW56ZWlnZW4gdm9uIFdlcmJ1bmcnLFxuICAgICAgICBzdHlsaW5nOiAnU3R5bGluZycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZW46IHtcbiAgICAgIGNvbnNlbnRNb2RhbDoge1xuICAgICAgICB0aXRsZTogXCI8aDQgY2xhc3M9J3RleHQtcHJpbWFyeSc+VXNlIG9mIENvb2tpZXM8L2g0PlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnV2UgdXNlIGNvb2tpZXMgdG8gb2ZmZXIgeW91IHRoZSBiZXN0IHBvc3NpYmxlIHNlcnZpY2UuIEhlcmUgeW91IGNhbiBzZWUgYW5kIGN1c3RvbWl6ZSB0aGUgaW5mb3JtYXRpb24gdGhhdCB3ZSBjb2xsZWN0IGFib3V0IHlvdS4nLFxuICAgICAgfSxcbiAgICAgIGdvb2dsZWFuYWx5dGljczoge1xuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnQ29sbGVjdGluZyBhbm9ueW1vdXMgdXNhZ2UgZGF0YSB0byBpbXByb3ZlIHRoZSBjb250ZW50IHNlcnZlZCBvbiB0aGlzIHdlYnNpdGUuJyxcbiAgICAgIH0sXG4gICAgICB5b3V0dWJlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2hvdyBZb3VUdWJlLVZpZGVvcycsXG4gICAgICB9LFxuICAgICAgbXlsYW5ndWFnZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgbGFuZ3VhZ2UnLFxuICAgICAgICB0aXRsZTogJ0xhbmd1YWdlLUNvb2tpZScsXG4gICAgICB9LFxuICAgICAgY29va2llY29uc2VudDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgQ29va2llIENvbnNlbnQnLFxuICAgICAgICB0aXRsZTogJ0Nvb2tpZS1Db25zZW50JyxcbiAgICAgIH0sXG4gICAgICBwdXJwb3Nlczoge1xuICAgICAgICBhbmFseXRpY3M6ICdBbmFseXRpY3MnLFxuICAgICAgICBleHRlcm5hbG1lZGlhOiAnRXh0ZXJuYWwgTWVkaWEnLFxuICAgICAgICBmdW5jdGlvbmFsOiAnRnVuY3Rpb25hbCBjb29raWVzJyxcbiAgICAgICAgYWR2ZXJ0aXNpbmc6ICdBZHZlcnRpc2luZycsXG4gICAgICAgIHN0eWxpbmc6ICdTdHlsaW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmljZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAneW91dHViZScsXG4gICAgICB0aXRsZTogJ1lvdVR1YmUgVmlkZW9zJyxcbiAgICAgIHB1cnBvc2VzOiBbJ2V4dGVybmFsbWVkaWEnXSxcbiAgICAgIGNvbnRleHR1YWxDb25zZW50T25seTogZmFsc2UsXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oY29uc2VudCwgc2VydmljZSkge1xuICAgICAgICBpZiAoY29uc2VudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vJCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5jc3MoJ3BhZGRpbmctdG9wJywgJzU2LjI1JScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLmNzcygncGFkZGluZy10b3AnLCAnMCcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZ29vZ2xlYW5hbHl0aWNzJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdGl0bGU6ICdHb29nbGUtQW5hbHl0aWNzJyxcbiAgICAgIHB1cnBvc2VzOiBbJ2FuYWx5dGljcyddLFxuICAgICAgY29va2llczogW1xuICAgICAgICBbL15fZ2EuKiQvaSwgJy8nLCAnLmRldm5ld3Byb2plY3QuZGRldi5zaXRlJ10sXG4gICAgICAgIFsvXl9naWQuKiQvaSwgJy8nLCAnLmRldm5ld3Byb2plY3QuZGRldi5zaXRlJ10sXG4gICAgICAgIFsvXl9kY19ndG0uKiQvaSwgJy8nLCAnLmRldm5ld3Byb2plY3QuZGRldi5zaXRlJ10sXG4gICAgICBdLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ215bGFuZ3VhZ2UnLFxuICAgICAgcHVycG9zZXM6IFsnZnVuY3Rpb25hbCddLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY29va2llY29uc2VudCcsXG4gICAgICBwdXJwb3NlczogWydmdW5jdGlvbmFsJ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICBdLFxufVxuLy8gd2UgYXNzaWduIHRoZSBLbGFybyBtb2R1bGUgdG8gdGhlIHdpbmRvdywgc28gdGhhdCB3ZSBjYW4gYWNjZXNzIGl0IGluIEpTXG53aW5kb3cua2xhcm8gPSBLbGFyb1xud2luZG93LmtsYXJvQ29uZmlnID0gY29uZmlnXG4vLyB3ZSBzZXQgdXAgS2xhcm8gd2l0aCB0aGUgY29uZmlnXG5LbGFyby5zZXR1cChjb25maWcpXG5cbi8qXG4gKiBQdXQgeW91ciBvd24gamF2YXNjcmlwdCBjb2RlIGhlcmVcbiAqL1xuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIEJ1aWxkL2pzL2FwcC5qcycpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImpRdWVyeSIsImxheCIsIm9ubG9hZCIsImluaXQiLCJhZGREcml2ZXIiLCJzY3JvbGxZIiwiYWRkRWxlbWVudHMiLCJ0cmFuc2xhdGVYIiwicmVxdWlyZUFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJjb250ZXh0IiwiS2xhcm8iLCJjb25maWciLCJzdHlsaW5nIiwidGhlbWUiLCJncmVlbjEiLCJibHVlMSIsImRhcmsxIiwibm9BdXRvTG9hZCIsImh0bWxUZXh0cyIsImVtYmVkZGVkIiwiZ3JvdXBCeVB1cnBvc2UiLCJzdG9yYWdlTWV0aG9kIiwiY29va2llTmFtZSIsImNvb2tpZUV4cGlyZXNBZnRlckRheXMiLCJkZWZhdWx0IiwibXVzdENvbnNlbnQiLCJhY2NlcHRBbGwiLCJoaWRlRGVjbGluZUFsbCIsImhpZGVMZWFybk1vcmUiLCJub3RpY2VBc01vZGFsIiwidHJhbnNsYXRpb25zIiwienoiLCJwcml2YWN5UG9saWN5VXJsIiwiZGUiLCJjb25zZW50TW9kYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ29vZ2xlYW5hbHl0aWNzIiwieW91dHViZSIsIm15bGFuZ3VhZ2UiLCJjb29raWVjb25zZW50IiwicHVycG9zZXMiLCJhbmFseXRpY3MiLCJleHRlcm5hbG1lZGlhIiwiZnVuY3Rpb25hbCIsImFkdmVydGlzaW5nIiwiZW4iLCJzZXJ2aWNlcyIsIm5hbWUiLCJjb250ZXh0dWFsQ29uc2VudE9ubHkiLCJjYWxsYmFjayIsImNvbnNlbnQiLCJzZXJ2aWNlIiwiY29va2llcyIsInJlcXVpcmVkIiwia2xhcm8iLCJrbGFyb0NvbmZpZyIsInNldHVwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=