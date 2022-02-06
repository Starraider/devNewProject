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
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! klaro/dist/klaro-no-css */ "./node_modules/klaro/dist/klaro-no-css.js");
/* harmony import */ var klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_2__);
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
/*
// import $ from 'jquery';

/*
 * Include Bootstrap in your Sass-file. You can here specify which plugins you need
 */

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
        $('.embed-responsive').css('padding-top', '56.25%');
      } else {
        $('.embed-responsive').css('padding-top', '0');
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

window.klaro = klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_2__;
window.klaroConfig = config; // we set up Klaro with the config

klaro_dist_klaro_no_css__WEBPACK_IMPORTED_MODULE_2__.setup(config);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_klaro_dist_klaro-no-css_js"], function() { return __webpack_exec__("./js/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsT0FBTyxFQUFFLEtBRlg7QUFHRVcsSUFBQUEsS0FBSyxFQUFFLGtCQUhUO0FBSUVNLElBQUFBLFFBQVEsRUFBRSxDQUFDLFdBQUQsQ0FKWjtBQUtFYyxJQUFBQSxPQUFPLEVBQUUsQ0FDUCxDQUFDLFVBQUQsRUFBYSxHQUFiLEVBQWtCLDBCQUFsQixDQURPLEVBRVAsQ0FBQyxXQUFELEVBQWMsR0FBZCxFQUFtQiwwQkFBbkIsQ0FGTyxFQUdQLENBQUMsY0FBRCxFQUFpQixHQUFqQixFQUFzQiwwQkFBdEIsQ0FITyxDQUxYO0FBVUVDLElBQUFBLFFBQVEsRUFBRTtBQVZaLEdBZFEsRUEwQlI7QUFDRVIsSUFBQUEsSUFBSSxFQUFFLFlBRFI7QUFFRVAsSUFBQUEsUUFBUSxFQUFFLENBQUMsWUFBRCxDQUZaO0FBR0VlLElBQUFBLFFBQVEsRUFBRTtBQUhaLEdBMUJRLEVBK0JSO0FBQ0VSLElBQUFBLElBQUksRUFBRSxlQURSO0FBRUVQLElBQUFBLFFBQVEsRUFBRSxDQUFDLFlBQUQsQ0FGWjtBQUdFZSxJQUFBQSxRQUFRLEVBQUU7QUFIWixHQS9CUTtBQTNGRyxDQUFmLEVBaUlBOztBQUNBQyxNQUFNLENBQUNDLEtBQVAsR0FBZWhELG9EQUFmO0FBQ0ErQyxNQUFNLENBQUNFLFdBQVAsR0FBcUJoRCxNQUFyQixFQUNBOztBQUNBRCwwREFBQSxDQUFZQyxNQUFaO0FBRUE7QUFDQTtBQUNBOztBQUNBa0QsT0FBTyxDQUFDQyxHQUFSLENBQVksa0RBQVo7Ozs7Ozs7Ozs7OztBQzFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldm5ld3Byb2plY3QvL1VzZXJzL3N2ZW5rYWxiaGVubi9Ecm9wYm94L1Byb2pla3RlL2Rldk5ld1Byb2plY3QvQnVpbGQvaWNvbnN8c3luY3wvXFwuc3ZnJC8iLCJ3ZWJwYWNrOi8vZGV2bmV3cHJvamVjdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9kZXZuZXdwcm9qZWN0Ly4vc3R5bGVzL21haW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZGUtREUuc3ZnXCI6IFwiLi9pY29ucy9kZS1ERS5zdmdcIixcblx0XCIuL2VuLVVTLnN2Z1wiOiBcIi4vaWNvbnMvZW4tVVMuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vaWNvbnMgc3luYyByZWN1cnNpdmUgXFxcXC5zdmckXCI7IiwiLy8gQnVpbGQvanMvYXBwLmpzXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLypcbiAqIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChtYWluLmNzcyBpbiB0aGlzIGNhc2UpXG4gKi9cbmltcG9ydCAnLi4vc3R5bGVzL21haW4uc2NzcydcblxuLypcbiAqIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIixcbiAqIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8qXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKlxuICogSW5jbHVkZSBCb290c3RyYXAgaW4geW91ciBTYXNzLWZpbGUuIFlvdSBjYW4gaGVyZSBzcGVjaWZ5IHdoaWNoIHBsdWdpbnMgeW91IG5lZWRcbiAqL1xuaW1wb3J0IHsgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXIgfSBmcm9tICdib290c3RyYXAnXG5cbi8vIFNwcml0ZSBMb2FkZXJcbmZ1bmN0aW9uIHJlcXVpcmVBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpXG59XG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaWNvbnMvJywgdHJ1ZSwgL1xcLnN2ZyQvKSlcblxuLy8gS2xhcm9cbmltcG9ydCAqIGFzIEtsYXJvIGZyb20gJ2tsYXJvL2Rpc3Qva2xhcm8tbm8tY3NzJ1xuY29uc3QgY29uZmlnID0ge1xuICBzdHlsaW5nOiB7XG4gICAgdGhlbWU6IFsnZGFyaycsICd0b3AnLCAnd2lkZSddLFxuICAgIC8vIEdyZWVuIEJ1dHRvblxuICAgIGdyZWVuMTogJyMxYTkzNmYnLFxuICAgIC8vIGRpc2FibGVkIFN3aXRjaGVzXG4gICAgLy9ncmVlbjI6ICcjMzgxMjk5JyxcbiAgICAvLyBCbHVlIEJ1dHRvblxuICAgIGJsdWUxOiAnIzI1ODFjNCcsXG4gICAgLy8gQmFja2dyb3VuZFxuICAgIGRhcmsxOiAnIzQ0NDU0NCcsXG4gICAgJ2J1dHRvbi10ZXh0LWNvbG9yJzogJyNmZmZmZmYnLFxuICB9LFxuICBub0F1dG9Mb2FkOiBmYWxzZSxcbiAgaHRtbFRleHRzOiB0cnVlLFxuICBlbWJlZGRlZDogZmFsc2UsXG4gIGdyb3VwQnlQdXJwb3NlOiB0cnVlLFxuICBzdG9yYWdlTWV0aG9kOiAnY29va2llJyxcbiAgY29va2llTmFtZTogJ2tsYXJvJyxcbiAgY29va2llRXhwaXJlc0FmdGVyRGF5czogMzY1LFxuICBkZWZhdWx0OiBmYWxzZSxcbiAgbXVzdENvbnNlbnQ6IHRydWUsXG4gIGFjY2VwdEFsbDogdHJ1ZSxcbiAgaGlkZURlY2xpbmVBbGw6IGZhbHNlLFxuICBoaWRlTGVhcm5Nb3JlOiBmYWxzZSxcbiAgbm90aWNlQXNNb2RhbDogZmFsc2UsXG5cbiAgdHJhbnNsYXRpb25zOiB7XG4gICAgeno6IHtcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6ICcvc3BlY2lhbC1wYWdlcy9kYXRlbnNjaHV0emVya2xhZXJ1bmcvJyxcbiAgICB9LFxuICAgIGRlOiB7XG4gICAgICBwcml2YWN5UG9saWN5VXJsOiAnL3NwZWNpYWwtcGFnZXMvZGF0ZW5zY2h1dHplcmtsYWVydW5nLycsXG4gICAgICBjb25zZW50TW9kYWw6IHtcbiAgICAgICAgdGl0bGU6IFwiPGg0IGNsYXNzPSd0ZXh0LXNlY29uZGFyeSc+VmVyd2VuZHVuZyB2b24gQ29va2llczwvaDQ+XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdXaXIgdmVyd2VuZGVuIENvb2tpZXMgdW0gSWhuZW4gZWluZW4gYmVzdCBtw7ZnbGljaGVuIFNlcnZpY2UgYmlldGVuIHp1IGvDtm5uZW4uIEhpZXIga8O2bm5lbiBTaWUgZWluc2VoZW4gdW5kIGFucGFzc2VuLCB3ZWxjaGUgSW5mb3JtYXRpb24gd2lyIMO8YmVyIFNpZSBzYW1tZWxuLicsXG4gICAgICB9LFxuICAgICAgZ29vZ2xlYW5hbHl0aWNzOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdTYW1tZWxuIHZvbiBhbm9ueW1pc2llcnRlbiBCZXN1Y2hlcnN0YXRpc3Rpa2VuLCB1bSBkZW4gSW5oYWx0IGRpZXNlciBXZWJzaXRlIHp1IHZlcmJlc3Nlcm4uJyxcbiAgICAgIH0sXG4gICAgICB5b3V0dWJlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQW56ZWlnZW4gdm9uIFlvdVR1YmUtVmlkZW9zJyxcbiAgICAgIH0sXG4gICAgICBteWxhbmd1YWdlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR2V3w6RobHRlIFNwcmFjaGUnLFxuICAgICAgICB0aXRsZTogJ1NwcmFjaC1Db29raWUnLFxuICAgICAgfSxcbiAgICAgIGNvb2tpZWNvbnNlbnQ6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdJaHJlIENvb2tpZSBBdXN3YWhsJyxcbiAgICAgICAgdGl0bGU6ICdDb29raWUtWnVzdGltbXVuZycsXG4gICAgICB9LFxuICAgICAgcHVycG9zZXM6IHtcbiAgICAgICAgYW5hbHl0aWNzOiAnQmVzdWNoZXItU3RhdGlzdGlrZW4nLFxuICAgICAgICBleHRlcm5hbG1lZGlhOiAnRXh0ZXJuZSBNZWRpZW4nLFxuICAgICAgICBmdW5jdGlvbmFsOiAnRnVua3Rpb25hbGUgQ29va2llcycsXG4gICAgICAgIGFkdmVydGlzaW5nOiAnQW56ZWlnZW4gdm9uIFdlcmJ1bmcnLFxuICAgICAgICBzdHlsaW5nOiAnU3R5bGluZycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZW46IHtcbiAgICAgIGNvbnNlbnRNb2RhbDoge1xuICAgICAgICB0aXRsZTogXCI8aDQgY2xhc3M9J3RleHQtcHJpbWFyeSc+VXNlIG9mIENvb2tpZXM8L2g0PlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnV2UgdXNlIGNvb2tpZXMgdG8gb2ZmZXIgeW91IHRoZSBiZXN0IHBvc3NpYmxlIHNlcnZpY2UuIEhlcmUgeW91IGNhbiBzZWUgYW5kIGN1c3RvbWl6ZSB0aGUgaW5mb3JtYXRpb24gdGhhdCB3ZSBjb2xsZWN0IGFib3V0IHlvdS4nLFxuICAgICAgfSxcbiAgICAgIGdvb2dsZWFuYWx5dGljczoge1xuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnQ29sbGVjdGluZyBhbm9ueW1vdXMgdXNhZ2UgZGF0YSB0byBpbXByb3ZlIHRoZSBjb250ZW50IHNlcnZlZCBvbiB0aGlzIHdlYnNpdGUuJyxcbiAgICAgIH0sXG4gICAgICB5b3V0dWJlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2hvdyBZb3VUdWJlLVZpZGVvcycsXG4gICAgICB9LFxuICAgICAgbXlsYW5ndWFnZToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgbGFuZ3VhZ2UnLFxuICAgICAgICB0aXRsZTogJ0xhbmd1YWdlLUNvb2tpZScsXG4gICAgICB9LFxuICAgICAgY29va2llY29uc2VudDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgQ29va2llIENvbnNlbnQnLFxuICAgICAgICB0aXRsZTogJ0Nvb2tpZS1Db25zZW50JyxcbiAgICAgIH0sXG4gICAgICBwdXJwb3Nlczoge1xuICAgICAgICBhbmFseXRpY3M6ICdBbmFseXRpY3MnLFxuICAgICAgICBleHRlcm5hbG1lZGlhOiAnRXh0ZXJuYWwgTWVkaWEnLFxuICAgICAgICBmdW5jdGlvbmFsOiAnRnVuY3Rpb25hbCBjb29raWVzJyxcbiAgICAgICAgYWR2ZXJ0aXNpbmc6ICdBZHZlcnRpc2luZycsXG4gICAgICAgIHN0eWxpbmc6ICdTdHlsaW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmljZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAneW91dHViZScsXG4gICAgICB0aXRsZTogJ1lvdVR1YmUgVmlkZW9zJyxcbiAgICAgIHB1cnBvc2VzOiBbJ2V4dGVybmFsbWVkaWEnXSxcbiAgICAgIGNvbnRleHR1YWxDb25zZW50T25seTogZmFsc2UsXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGNvbnNlbnQsIHNlcnZpY2UpIHtcbiAgICAgICAgaWYgKGNvbnNlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAkKCcuZW1iZWQtcmVzcG9uc2l2ZScpLmNzcygncGFkZGluZy10b3AnLCAnNTYuMjUlJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKCcuZW1iZWQtcmVzcG9uc2l2ZScpLmNzcygncGFkZGluZy10b3AnLCAnMCcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZ29vZ2xlYW5hbHl0aWNzJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdGl0bGU6ICdHb29nbGUtQW5hbHl0aWNzJyxcbiAgICAgIHB1cnBvc2VzOiBbJ2FuYWx5dGljcyddLFxuICAgICAgY29va2llczogW1xuICAgICAgICBbL15fZ2EuKiQvaSwgJy8nLCAnLmRldm5ld3Byb2plY3QuZGRldi5zaXRlJ10sXG4gICAgICAgIFsvXl9naWQuKiQvaSwgJy8nLCAnLmRldm5ld3Byb2plY3QuZGRldi5zaXRlJ10sXG4gICAgICAgIFsvXl9kY19ndG0uKiQvaSwgJy8nLCAnLmRldm5ld3Byb2plY3QuZGRldi5zaXRlJ10sXG4gICAgICBdLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ215bGFuZ3VhZ2UnLFxuICAgICAgcHVycG9zZXM6IFsnZnVuY3Rpb25hbCddLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY29va2llY29uc2VudCcsXG4gICAgICBwdXJwb3NlczogWydmdW5jdGlvbmFsJ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICBdLFxufVxuLy8gd2UgYXNzaWduIHRoZSBLbGFybyBtb2R1bGUgdG8gdGhlIHdpbmRvdywgc28gdGhhdCB3ZSBjYW4gYWNjZXNzIGl0IGluIEpTXG53aW5kb3cua2xhcm8gPSBLbGFyb1xud2luZG93LmtsYXJvQ29uZmlnID0gY29uZmlnXG4vLyB3ZSBzZXQgdXAgS2xhcm8gd2l0aCB0aGUgY29uZmlnXG5LbGFyby5zZXR1cChjb25maWcpXG5cbi8qXG4gKiBQdXQgeW91ciBvd24gamF2YXNjcmlwdCBjb2RlIGhlcmVcbiAqL1xuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIEJ1aWxkL2pzL2FwcC5qcycpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiVG9vbHRpcCIsIlRvYXN0IiwiUG9wb3ZlciIsInJlcXVpcmVBbGwiLCJyIiwia2V5cyIsImZvckVhY2giLCJyZXF1aXJlIiwiY29udGV4dCIsIktsYXJvIiwiY29uZmlnIiwic3R5bGluZyIsInRoZW1lIiwiZ3JlZW4xIiwiYmx1ZTEiLCJkYXJrMSIsIm5vQXV0b0xvYWQiLCJodG1sVGV4dHMiLCJlbWJlZGRlZCIsImdyb3VwQnlQdXJwb3NlIiwic3RvcmFnZU1ldGhvZCIsImNvb2tpZU5hbWUiLCJjb29raWVFeHBpcmVzQWZ0ZXJEYXlzIiwiZGVmYXVsdCIsIm11c3RDb25zZW50IiwiYWNjZXB0QWxsIiwiaGlkZURlY2xpbmVBbGwiLCJoaWRlTGVhcm5Nb3JlIiwibm90aWNlQXNNb2RhbCIsInRyYW5zbGF0aW9ucyIsInp6IiwicHJpdmFjeVBvbGljeVVybCIsImRlIiwiY29uc2VudE1vZGFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdvb2dsZWFuYWx5dGljcyIsInlvdXR1YmUiLCJteWxhbmd1YWdlIiwiY29va2llY29uc2VudCIsInB1cnBvc2VzIiwiYW5hbHl0aWNzIiwiZXh0ZXJuYWxtZWRpYSIsImZ1bmN0aW9uYWwiLCJhZHZlcnRpc2luZyIsImVuIiwic2VydmljZXMiLCJuYW1lIiwiY29udGV4dHVhbENvbnNlbnRPbmx5IiwiY2FsbGJhY2siLCJjb25zZW50Iiwic2VydmljZSIsIiQiLCJjc3MiLCJjb29raWVzIiwicmVxdWlyZWQiLCJ3aW5kb3ciLCJrbGFybyIsImtsYXJvQ29uZmlnIiwic2V0dXAiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==