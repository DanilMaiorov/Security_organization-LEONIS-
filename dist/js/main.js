/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dynamicAdapt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dynamicAdapt.js */ \"./src/js/modules/dynamicAdapt.js\");\n/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger.js */ \"./src/js/modules/burger.js\");\n/* harmony import */ var _modules_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swiper.js */ \"./src/js/modules/swiper.js\");\n\r\n\r\n\r\n\r\n(0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_1__.burger)();\r\n(0,_modules_swiper_js__WEBPACK_IMPORTED_MODULE_2__.sliderSwiper)();\n\n//# sourceURL=webpack://gulpStart/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": function() { return /* binding */ burger; }\n/* harmony export */ });\nfunction burger () {\r\n    const burgerOpen = document.querySelector('.burger');\r\n    const burgerLinks = document.querySelectorAll('.burger-content__menu-link');\r\n    const burgerContent = document.querySelector('.burger-content');\r\n    const burgerClose = document.querySelector('.close-burger');\r\n    const burgerBody = document.querySelector('.burger-content__menu-list');\r\n\r\n    burgerOpen.addEventListener('click', () => {\r\n        burgerBody.classList.toggle('active-list');\r\n    });\r\n    burgerOpen.addEventListener('click', () => {\r\n        burgerContent.style.display = 'block';\r\n    });\r\n    burgerLinks.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            burgerContent.style.display = 'none';\r\n        });\r\n    });\r\n    burgerClose.addEventListener('click', () => {\r\n        burgerContent.style.display = 'none';      \r\n    }); \r\n}\r\n\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/dynamicAdapt.js":
/*!****************************************!*\
  !*** ./src/js/modules/dynamicAdapt.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// Dynamic Adapt v.1\r\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\r\n// e.x. data-da=\".item,992,2\"\r\n// Andrikanych Yevhen 2020\r\n// https://www.youtube.com/c/freelancerlifestyle\r\n\r\n\r\nfunction DynamicAdapt(type) {\r\n\tthis.type = type;\r\n}\r\nDynamicAdapt.prototype.init = function () {\r\n\tconst _this = this;\r\n\t// ???????????? ????????????????\r\n\tthis.??bjects = [];\r\n\tthis.daClassname = \"_dynamic_adapt_\";\r\n\t// ???????????? DOM-??????????????????\r\n\tthis.nodes = document.querySelectorAll(\"[data-da]\");\r\n\t// ???????????????????? ??bjects ????????????????\r\n\tfor (let i = 0; i < this.nodes.length; i++) {\r\n\t\tconst node = this.nodes[i];\r\n\t\tconst data = node.dataset.da.trim();\r\n\t\tconst dataArray = data.split(\",\");\r\n\t\tconst ??bject = {};\r\n\t\t??bject.element = node;\r\n\t\t??bject.parent = node.parentNode;\r\n\t\t??bject.destination = document.querySelector(dataArray[0].trim());\r\n\t\t??bject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\r\n\t\t??bject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\r\n\t\t??bject.index = this.indexInParent(??bject.parent, ??bject.element);\r\n\t\tthis.??bjects.push(??bject);\r\n\t\t\r\n\t}\r\n\tthis.arraySort(this.??bjects);\r\n\t// ???????????? ???????????????????? ??????????-????????????????\r\n\tthis.mediaQueries = Array.prototype.map.call(this.??bjects, function (item) {\r\n\t\treturn '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\r\n\t}, this);\r\n\tthis.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\r\n\t\treturn Array.prototype.indexOf.call(self, item) === index;\r\n\t});\r\n\t// ?????????????????????? ?????????????????? ???? ??????????-????????????\r\n\t// ?? ?????????? ?????????????????????? ?????? ???????????? ??????????????\r\n\tfor (let i = 0; i < this.mediaQueries.length; i++) {\r\n\t\tconst media = this.mediaQueries[i];\r\n\t\tconst mediaSplit = String.prototype.split.call(media, ',');\r\n\t\tconst matchMedia = window.matchMedia(mediaSplit[0]);\r\n\t\tconst mediaBreakpoint = mediaSplit[1];\r\n\t\t// ???????????? ???????????????? ?? ???????????????????? ????????????????????????\r\n\t\tconst ??bjectsFilter = Array.prototype.filter.call(this.??bjects, function (item) {\r\n\t\t\treturn item.breakpoint === mediaBreakpoint;\r\n\t\t});\r\n\t\tmatchMedia.addListener(function () {\r\n\t\t\t_this.mediaHandler(matchMedia, ??bjectsFilter);\r\n\t\t});\r\n\t\tthis.mediaHandler(matchMedia, ??bjectsFilter);\r\n\t}\r\n};\r\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, ??bjects) {\r\n\tif (matchMedia.matches) {\r\n\t\tfor (let i = 0; i < ??bjects.length; i++) {\r\n\t\t\tconst ??bject = ??bjects[i];\r\n\t\t\t??bject.index = this.indexInParent(??bject.parent, ??bject.element);\r\n\t\t\tthis.moveTo(??bject.place, ??bject.element, ??bject.destination);\r\n\t\t}\r\n\t} else {\r\n\t\t//for (let i = 0; i < ??bjects.length; i++) {\r\n\t\tfor (let i = ??bjects.length - 1; i >= 0; i--) {\r\n\t\t\tconst ??bject = ??bjects[i];\r\n\t\t\tif (??bject.element.classList.contains(this.daClassname)) {\r\n\t\t\t\tthis.moveBack(??bject.parent, ??bject.element, ??bject.index);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n// ?????????????? ??????????????????????\r\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\r\n\telement.classList.add(this.daClassname);\r\n\tif (place === 'last' || place >= destination.children.length) {\r\n\t\tdestination.insertAdjacentElement('beforeend', element);\r\n\t\treturn;\r\n\t}\r\n\tif (place === 'first') {\r\n\t\tdestination.insertAdjacentElement('afterbegin', element);\r\n\t\treturn;\r\n\t}\r\n\tdestination.children[place].insertAdjacentElement('beforebegin', element);\r\n};\r\n// ?????????????? ????????????????\r\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\r\n\telement.classList.remove(this.daClassname);\r\n\tif (parent.children[index] !== undefined) {\r\n\t\tparent.children[index].insertAdjacentElement('beforebegin', element);\r\n\t} else {\r\n\t\tparent.insertAdjacentElement('beforeend', element);\r\n\t}\r\n};\r\n// ?????????????? ?????????????????? ?????????????? ???????????? ????????????????\r\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\r\n\tconst array = Array.prototype.slice.call(parent.children);\r\n\treturn Array.prototype.indexOf.call(array, element);\r\n};\r\n// ?????????????? ???????????????????? ?????????????? ???? breakpoint ?? place \r\n// ???? ?????????????????????? ?????? this.type = min\r\n// ???? ???????????????? ?????? this.type = max\r\nDynamicAdapt.prototype.arraySort = function (arr) {\r\n\tif (this.type === \"min\") {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn a.place - b.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn a.breakpoint - b.breakpoint;\r\n\t\t});\r\n\t} else {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn b.place - a.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn b.breakpoint - a.breakpoint;\r\n\t\t});\r\n\t\treturn;\r\n\t}\r\n};\r\nconst da = new DynamicAdapt(\"max\");\r\nda.init();\r\n\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/dynamicAdapt.js?");

/***/ }),

/***/ "./src/js/modules/swiper.js":
/*!**********************************!*\
  !*** ./src/js/modules/swiper.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderSwiper\": function() { return /* binding */ sliderSwiper; }\n/* harmony export */ });\nconst sliderSwiper = () => {\r\n    const swiper = new Swiper('.swiper', {\r\n        spaceBetween: 50,\r\n        centeredSlides: true,\r\n        loop: true,\r\n        navigation: {\r\n          nextEl: '.arrow-next',\r\n          prevEl: '.arrow-prev',\r\n        },\r\n        breakpointsInverse: true,\r\n        breakpoints: {\r\n            375:  {\r\n            slidesPerView: 1,\r\n\r\n            },\r\n            576: {\r\n            slidesPerView: 2,\r\n            },\r\n        },\r\n      });\r\n};\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;