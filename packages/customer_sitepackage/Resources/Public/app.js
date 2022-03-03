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
/* harmony import */ var scrollmagic_scrollmagic_uncompressed_ScrollMagic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scrollmagic/scrollmagic/uncompressed/ScrollMagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic_scrollmagic_uncompressed_ScrollMagic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scrollmagic_scrollmagic_uncompressed_ScrollMagic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var scrollmagic_scrollmagic_uncompressed_plugins_animation_gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap */ "./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js");
/* harmony import */ var scrollmagic_scrollmagic_uncompressed_plugins_animation_gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scrollmagic_scrollmagic_uncompressed_plugins_animation_gsap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scrollmagic_scrollmagic_uncompressed_plugins_debug_addIndicators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators */ "./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js");
/* harmony import */ var scrollmagic_scrollmagic_uncompressed_plugins_debug_addIndicators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scrollmagic_scrollmagic_uncompressed_plugins_debug_addIndicators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! klaro/dist/klaro-no-css */ "./node_modules/klaro/dist/klaro-no-css.js");
/* harmony import */ var klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_6__);
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

/*
 * ScrollMagic
 */



 //import TweenMax from 'gsap/dist/gsap'

 // init controller

var controller = new (scrollmagic_scrollmagic_uncompressed_ScrollMagic__WEBPACK_IMPORTED_MODULE_3___default().Controller)();
new (scrollmagic_scrollmagic_uncompressed_ScrollMagic__WEBPACK_IMPORTED_MODULE_3___default().Scene)({
  duration: 100,
  // the scene should last for a scroll distance of 100px
  offset: 50 // start this scene after scrolling for 50px

}).setPin('#testbutton') // pins the element for the the scene's duration
.addTo(controller); // assign the scene to the controller

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

window.klaro = klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_6__;
window.klaroConfig = config; // we set up Klaro with the config

klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_6__.setup(config);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js-no-f0ab6f"], function() { return __webpack_exec__("./js/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDcE5BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2bmV3cHJvamVjdC8vVXNlcnMvc3ZlbmthbGJoZW5uL0Ryb3Bib3gvUHJvamVrdGUvZGV2TmV3UHJvamVjdC9CdWlsZC9pY29uc3xzeW5jfC9cXC5zdmckLyIsIndlYnBhY2s6Ly9kZXZuZXdwcm9qZWN0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2Rldm5ld3Byb2plY3QvLi9zdHlsZXMvbWFpbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9kZS1ERS5zdmdcIjogXCIuL2ljb25zL2RlLURFLnN2Z1wiLFxuXHRcIi4vZW4tVVMuc3ZnXCI6IFwiLi9pY29ucy9lbi1VUy5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9pY29ucyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLnN2ZyRcIjsiLCIvLyBCdWlsZC9qcy9hcHAuanNcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vKlxuICogYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKG1haW4uY3NzIGluIHRoaXMgY2FzZSlcbiAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJ1xuXG4vKlxuICogTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLFxuICogdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qXG4gKiBJbmNsdWRlIEJvb3RzdHJhcCBpbiB5b3VyIFNhc3MtZmlsZS4gWW91IGNhbiBoZXJlIHNwZWNpZnkgd2hpY2ggcGx1Z2lucyB5b3UgbmVlZFxuICovXG5pbXBvcnQge1xuICBBY2NvcmRpb24sXG4gIFBvcG92ZXIsXG4gIFN0aWNreWhlYWRlcixcbiAgU21vb3Roc2Nyb2xsLFxuICBMaWdodGJveCxcbiAgTmF2YmFyLFxufSBmcm9tICdib290c3RyYXAnXG5cbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L2xpZ2h0Ym94JylcblxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuLy8gICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpXG4vLyB9KVxuXG4vL3Bob3Rvc3dpcGVcbi8vaW1wb3J0IFBob3RvU3dpcGUgZnJvbSAncGhvdG9zd2lwZSdcbi8vaW1wb3J0IFBob3RvU3dpcGVVSV9EZWZhdWx0IGZyb20gJ3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLXVpLWRlZmF1bHQnXG4vL2dsb2JhbC5QaG90b1N3aXBlID0gUGhvdG9Td2lwZVxuLy9nbG9iYWwuUGhvdG9Td2lwZVVJX0RlZmF1bHQgPSBQaG90b1N3aXBlVUlfRGVmYXVsdFxuXG4vKlxuICogU2Nyb2xsTWFnaWNcbiAqL1xuaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYydcbmltcG9ydCAnc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL3BsdWdpbnMvYW5pbWF0aW9uLmdzYXAnXG5pbXBvcnQgJ3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9wbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMnXG4vL2ltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwL2Rpc3QvZ3NhcCdcbmltcG9ydCBUaW1lbGluZU1heCBmcm9tICdnc2FwL2Rpc3QvZ3NhcCdcblxuLy8gaW5pdCBjb250cm9sbGVyXG5jb25zdCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKVxuXG5uZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICBkdXJhdGlvbjogMTAwLCAvLyB0aGUgc2NlbmUgc2hvdWxkIGxhc3QgZm9yIGEgc2Nyb2xsIGRpc3RhbmNlIG9mIDEwMHB4XG4gIG9mZnNldDogNTAsIC8vIHN0YXJ0IHRoaXMgc2NlbmUgYWZ0ZXIgc2Nyb2xsaW5nIGZvciA1MHB4XG59KVxuICAuc2V0UGluKCcjdGVzdGJ1dHRvbicpIC8vIHBpbnMgdGhlIGVsZW1lbnQgZm9yIHRoZSB0aGUgc2NlbmUncyBkdXJhdGlvblxuICAuYWRkVG8oY29udHJvbGxlcikgLy8gYXNzaWduIHRoZSBzY2VuZSB0byB0aGUgY29udHJvbGxlclxuXG4vKlxuICogU3ByaXRlIExvYWRlclxuICovXG5mdW5jdGlvbiByZXF1aXJlQWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKVxufVxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ljb25zLycsIHRydWUsIC9cXC5zdmckLykpXG5cbi8qXG4gKiBLbGFyb1xuICovXG5pbXBvcnQgKiBhcyBLbGFybyBmcm9tICdrbGFyby9kaXN0L2tsYXJvLW5vLWNzcydcbmNvbnN0IGNvbmZpZyA9IHtcbiAgc3R5bGluZzoge1xuICAgIHRoZW1lOiBbJ2RhcmsnLCAndG9wJywgJ3dpZGUnXSxcbiAgICAvLyBHcmVlbiBCdXR0b25cbiAgICBncmVlbjE6ICcjMWE5MzZmJyxcbiAgICAvLyBkaXNhYmxlZCBTd2l0Y2hlc1xuICAgIC8vZ3JlZW4yOiAnIzM4MTI5OScsXG4gICAgLy8gQmx1ZSBCdXR0b25cbiAgICBibHVlMTogJyMyNTgxYzQnLFxuICAgIC8vIEJhY2tncm91bmRcbiAgICBkYXJrMTogJyM0NDQ1NDQnLFxuICAgICdidXR0b24tdGV4dC1jb2xvcic6ICcjZmZmZmZmJyxcbiAgfSxcbiAgbm9BdXRvTG9hZDogZmFsc2UsXG4gIGh0bWxUZXh0czogdHJ1ZSxcbiAgZW1iZWRkZWQ6IGZhbHNlLFxuICBncm91cEJ5UHVycG9zZTogdHJ1ZSxcbiAgc3RvcmFnZU1ldGhvZDogJ2Nvb2tpZScsXG4gIGNvb2tpZU5hbWU6ICdrbGFybycsXG4gIGNvb2tpZUV4cGlyZXNBZnRlckRheXM6IDM2NSxcbiAgZGVmYXVsdDogZmFsc2UsXG4gIG11c3RDb25zZW50OiB0cnVlLFxuICBhY2NlcHRBbGw6IHRydWUsXG4gIGhpZGVEZWNsaW5lQWxsOiBmYWxzZSxcbiAgaGlkZUxlYXJuTW9yZTogZmFsc2UsXG4gIG5vdGljZUFzTW9kYWw6IGZhbHNlLFxuXG4gIHRyYW5zbGF0aW9uczoge1xuICAgIHp6OiB7XG4gICAgICBwcml2YWN5UG9saWN5VXJsOiAnL3NwZWNpYWwtcGFnZXMvZGF0ZW5zY2h1dHplcmtsYWVydW5nLycsXG4gICAgfSxcbiAgICBkZToge1xuICAgICAgcHJpdmFjeVBvbGljeVVybDogJy9zcGVjaWFsLXBhZ2VzL2RhdGVuc2NodXR6ZXJrbGFlcnVuZy8nLFxuICAgICAgY29uc2VudE1vZGFsOiB7XG4gICAgICAgIHRpdGxlOiBcIjxoNCBjbGFzcz0ndGV4dC1zZWNvbmRhcnknPlZlcndlbmR1bmcgdm9uIENvb2tpZXM8L2g0PlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnV2lyIHZlcndlbmRlbiBDb29raWVzIHVtIElobmVuIGVpbmVuIGJlc3QgbcO2Z2xpY2hlbiBTZXJ2aWNlIGJpZXRlbiB6dSBrw7ZubmVuLiBIaWVyIGvDtm5uZW4gU2llIGVpbnNlaGVuIHVuZCBhbnBhc3Nlbiwgd2VsY2hlIEluZm9ybWF0aW9uIHdpciDDvGJlciBTaWUgc2FtbWVsbi4nLFxuICAgICAgfSxcbiAgICAgIGdvb2dsZWFuYWx5dGljczoge1xuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnU2FtbWVsbiB2b24gYW5vbnltaXNpZXJ0ZW4gQmVzdWNoZXJzdGF0aXN0aWtlbiwgdW0gZGVuIEluaGFsdCBkaWVzZXIgV2Vic2l0ZSB6dSB2ZXJiZXNzZXJuLicsXG4gICAgICB9LFxuICAgICAgeW91dHViZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ0FuemVpZ2VuIHZvbiBZb3VUdWJlLVZpZGVvcycsXG4gICAgICB9LFxuICAgICAgbXlsYW5ndWFnZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ0dld8OkaGx0ZSBTcHJhY2hlJyxcbiAgICAgICAgdGl0bGU6ICdTcHJhY2gtQ29va2llJyxcbiAgICAgIH0sXG4gICAgICBjb29raWVjb25zZW50OiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSWhyZSBDb29raWUgQXVzd2FobCcsXG4gICAgICAgIHRpdGxlOiAnQ29va2llLVp1c3RpbW11bmcnLFxuICAgICAgfSxcbiAgICAgIHB1cnBvc2VzOiB7XG4gICAgICAgIGFuYWx5dGljczogJ0Jlc3VjaGVyLVN0YXRpc3Rpa2VuJyxcbiAgICAgICAgZXh0ZXJuYWxtZWRpYTogJ0V4dGVybmUgTWVkaWVuJyxcbiAgICAgICAgZnVuY3Rpb25hbDogJ0Z1bmt0aW9uYWxlIENvb2tpZXMnLFxuICAgICAgICBhZHZlcnRpc2luZzogJ0FuemVpZ2VuIHZvbiBXZXJidW5nJyxcbiAgICAgICAgc3R5bGluZzogJ1N0eWxpbmcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVuOiB7XG4gICAgICBjb25zZW50TW9kYWw6IHtcbiAgICAgICAgdGl0bGU6IFwiPGg0IGNsYXNzPSd0ZXh0LXByaW1hcnknPlVzZSBvZiBDb29raWVzPC9oND5cIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ1dlIHVzZSBjb29raWVzIHRvIG9mZmVyIHlvdSB0aGUgYmVzdCBwb3NzaWJsZSBzZXJ2aWNlLiBIZXJlIHlvdSBjYW4gc2VlIGFuZCBjdXN0b21pemUgdGhlIGluZm9ybWF0aW9uIHRoYXQgd2UgY29sbGVjdCBhYm91dCB5b3UuJyxcbiAgICAgIH0sXG4gICAgICBnb29nbGVhbmFseXRpY3M6IHtcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0NvbGxlY3RpbmcgYW5vbnltb3VzIHVzYWdlIGRhdGEgdG8gaW1wcm92ZSB0aGUgY29udGVudCBzZXJ2ZWQgb24gdGhpcyB3ZWJzaXRlLicsXG4gICAgICB9LFxuICAgICAgeW91dHViZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1Nob3cgWW91VHViZS1WaWRlb3MnLFxuICAgICAgfSxcbiAgICAgIG15bGFuZ3VhZ2U6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3VyIGxhbmd1YWdlJyxcbiAgICAgICAgdGl0bGU6ICdMYW5ndWFnZS1Db29raWUnLFxuICAgICAgfSxcbiAgICAgIGNvb2tpZWNvbnNlbnQ6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3VyIENvb2tpZSBDb25zZW50JyxcbiAgICAgICAgdGl0bGU6ICdDb29raWUtQ29uc2VudCcsXG4gICAgICB9LFxuICAgICAgcHVycG9zZXM6IHtcbiAgICAgICAgYW5hbHl0aWNzOiAnQW5hbHl0aWNzJyxcbiAgICAgICAgZXh0ZXJuYWxtZWRpYTogJ0V4dGVybmFsIE1lZGlhJyxcbiAgICAgICAgZnVuY3Rpb25hbDogJ0Z1bmN0aW9uYWwgY29va2llcycsXG4gICAgICAgIGFkdmVydGlzaW5nOiAnQWR2ZXJ0aXNpbmcnLFxuICAgICAgICBzdHlsaW5nOiAnU3R5bGluZycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNlcnZpY2VzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3lvdXR1YmUnLFxuICAgICAgdGl0bGU6ICdZb3VUdWJlIFZpZGVvcycsXG4gICAgICBwdXJwb3NlczogWydleHRlcm5hbG1lZGlhJ10sXG4gICAgICBjb250ZXh0dWFsQ29uc2VudE9ubHk6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGNvbnNlbnQsIHNlcnZpY2UpIHtcbiAgICAgICAgaWYgKGNvbnNlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyQoJy5lbWJlZC1yZXNwb25zaXZlJykuY3NzKCdwYWRkaW5nLXRvcCcsICc1Ni4yNSUnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoJy5lbWJlZC1yZXNwb25zaXZlJykuY3NzKCdwYWRkaW5nLXRvcCcsICcwJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdnb29nbGVhbmFseXRpY3MnLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB0aXRsZTogJ0dvb2dsZS1BbmFseXRpY3MnLFxuICAgICAgcHVycG9zZXM6IFsnYW5hbHl0aWNzJ10sXG4gICAgICBjb29raWVzOiBbXG4gICAgICAgIFsvXl9nYS4qJC9pLCAnLycsICcuZGV2bmV3cHJvamVjdC5kZGV2LnNpdGUnXSxcbiAgICAgICAgWy9eX2dpZC4qJC9pLCAnLycsICcuZGV2bmV3cHJvamVjdC5kZGV2LnNpdGUnXSxcbiAgICAgICAgWy9eX2RjX2d0bS4qJC9pLCAnLycsICcuZGV2bmV3cHJvamVjdC5kZGV2LnNpdGUnXSxcbiAgICAgIF0sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbXlsYW5ndWFnZScsXG4gICAgICBwdXJwb3NlczogWydmdW5jdGlvbmFsJ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjb29raWVjb25zZW50JyxcbiAgICAgIHB1cnBvc2VzOiBbJ2Z1bmN0aW9uYWwnXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59XG4vLyB3ZSBhc3NpZ24gdGhlIEtsYXJvIG1vZHVsZSB0byB0aGUgd2luZG93LCBzbyB0aGF0IHdlIGNhbiBhY2Nlc3MgaXQgaW4gSlNcbndpbmRvdy5rbGFybyA9IEtsYXJvXG53aW5kb3cua2xhcm9Db25maWcgPSBjb25maWdcbi8vIHdlIHNldCB1cCBLbGFybyB3aXRoIHRoZSBjb25maWdcbktsYXJvLnNldHVwKGNvbmZpZylcblxuLypcbiAqIFB1dCB5b3VyIG93biBqYXZhc2NyaXB0IGNvZGUgaGVyZVxuICovXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gQnVpbGQvanMvYXBwLmpzJylcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwiQWNjb3JkaW9uIiwiUG9wb3ZlciIsIlN0aWNreWhlYWRlciIsIlNtb290aHNjcm9sbCIsIkxpZ2h0Ym94IiwiTmF2YmFyIiwiU2Nyb2xsTWFnaWMiLCJUaW1lbGluZU1heCIsImNvbnRyb2xsZXIiLCJDb250cm9sbGVyIiwiU2NlbmUiLCJkdXJhdGlvbiIsIm9mZnNldCIsInNldFBpbiIsImFkZFRvIiwicmVxdWlyZUFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJjb250ZXh0IiwiS2xhcm8iLCJjb25maWciLCJzdHlsaW5nIiwidGhlbWUiLCJncmVlbjEiLCJibHVlMSIsImRhcmsxIiwibm9BdXRvTG9hZCIsImh0bWxUZXh0cyIsImVtYmVkZGVkIiwiZ3JvdXBCeVB1cnBvc2UiLCJzdG9yYWdlTWV0aG9kIiwiY29va2llTmFtZSIsImNvb2tpZUV4cGlyZXNBZnRlckRheXMiLCJkZWZhdWx0IiwibXVzdENvbnNlbnQiLCJhY2NlcHRBbGwiLCJoaWRlRGVjbGluZUFsbCIsImhpZGVMZWFybk1vcmUiLCJub3RpY2VBc01vZGFsIiwidHJhbnNsYXRpb25zIiwienoiLCJwcml2YWN5UG9saWN5VXJsIiwiZGUiLCJjb25zZW50TW9kYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ29vZ2xlYW5hbHl0aWNzIiwieW91dHViZSIsIm15bGFuZ3VhZ2UiLCJjb29raWVjb25zZW50IiwicHVycG9zZXMiLCJhbmFseXRpY3MiLCJleHRlcm5hbG1lZGlhIiwiZnVuY3Rpb25hbCIsImFkdmVydGlzaW5nIiwiZW4iLCJzZXJ2aWNlcyIsIm5hbWUiLCJjb250ZXh0dWFsQ29uc2VudE9ubHkiLCJjYWxsYmFjayIsImNvbnNlbnQiLCJzZXJ2aWNlIiwiY3NzIiwiY29va2llcyIsInJlcXVpcmVkIiwid2luZG93Iiwia2xhcm8iLCJrbGFyb0NvbmZpZyIsInNldHVwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=