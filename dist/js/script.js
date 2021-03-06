/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/script.js":
/*!**************************!*\
  !*** ./assets/script.js ***!
  \**************************/
/***/ (() => {

var root = new Vue({
  el: "#root",
  data: {
    logo_google: "./assets/img/logo/google-logo.svg",
    logo_slack: "./assets/img/logo/slack-logo.svg",
    navbar: ['Solutions', 'Pricing', 'Blog', 'Sign in'],
    main_first_section: [{
      title: "Traditional people processes lead to disengagement and turnover",
      jumbo_pic: "./assets/img/main/section_1/before.png",
      cards: [{
        img: "./assets/img/main/section_1/hardcore.png",
        text: "They are hardcore, formal and disconnected"
      }, {
        img: "./assets/img/main/section_1/nofeedback.png",
        text: "They don't encourage regular feedback"
      }, {
        img: "./assets/img/main/section_1/notsafe.png",
        text: "They don't make it safe to speak up"
      }]
    }],
    main_second_section: [{
      title: "It doesn't have to be like that. Teambit is a modern solution that teammates love.",
      jumbo_pic: "./assets/img/main/section_2/after.png",
      cards: [{
        img: "./assets/img/main/section_2/lightweight.png",
        text: "It's lightweight fun and interconnected"
      }, {
        img: "./assets/img/main/section_2/feedbacksuggestions.png",
        text: "It encourages regular feedback with contextual requests"
      }, {
        img: "./assets/img/main/section_2/safe.png",
        text: "It creates a safe environment for dialog"
      }]
    }],
    main_third_section: [{
      left_img: "./assets/img/main/section_3/1.jpg",
      right_img: "./assets/img/main/section_3/2.jpg",
      title: "Feedback to help teammates improve",
      description: "Empower your teammates to know in real time what they are doing well and what they need to improve"
    }, {
      left_img: "./assets/img/main/section_3/4.jpg",
      right_img: "./assets/img/main/section_3/3.jpg",
      title: "Surveys to help the team be better",
      description: "Get real-time insights into your team with research-backed, lightweight and regular surveys."
    }, {
      left_img: "./assets/img/main/section_3/5.jpg",
      right_img: "./assets/img/main/section_3/6.jpg",
      title: "Reviews to help teammates get a fair evaluation",
      description: "Make better compensation and promotion decisions with objective and quick perfomance reviews."
    }, {
      left_img: "./assets/img/main/section_3/8.jpg",
      right_img: "./assets/img/main/section_3/7.jpg",
      title: "Praise to help teammates feel valued",
      description: "Make it habit to recognize and praise people who do great work."
    }],
    footer: [{
      title: "Product",
      element: ["Feedback", "Surveys", "Reviews", "Praise", "Slack", "Integration", "Schedule a demo", "Pricing"]
    }, {
      title: "About",
      element: ["Feedback", "Surveys", "Reviews", "Praise"]
    }, {
      title: "Connect",
      element: ["Feedback", "Surveys", "Reviews", "Praise"]
    }, {
      title: "Lobs",
      element: ["Feedback", "Surveys", "Reviews", "Praise"]
    }, {
      title: "From the blog",
      element: ['How to change your company culture: a four-step framework', 'How teams can be more productive by killing 8-hour workday', 'How to build high performing teams inspired by nature', "View all"]
    }]
  },
  methods: {
    openNav: function openNav() {
      var x = document.getElementById('collapse');

      if (x.style.display == 'block') {
        x.style.display = 'none';
      } else {
        x.style.display = 'block';
      }
    }
  },
  mounted: {}
});

/***/ }),

/***/ "./assets/style.scss":
/*!***************************!*\
  !*** ./assets/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/script": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./assets/script.js"],
/******/ 			["./assets/style.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknode_sass_teambit"] = self["webpackChunknode_sass_teambit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;