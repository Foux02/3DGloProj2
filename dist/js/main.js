/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_regularExpressions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regularExpressions */ \"./modules/regularExpressions.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('21 december 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_regularExpressions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = menu.querySelector('.close-btn');\r\n  const menuItems = menu.querySelectorAll('ul>li>a');\r\n  const aLink = document.querySelector('a');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  menuBtn.addEventListener('click', handleMenu);\r\n  closeBtn.addEventListener('click', handleMenu);\r\n\r\n  menuItems.forEach((menuItem) =>\r\n    menuItem.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      handleMenu();\r\n\r\n      const idMenuItem = menuItem.getAttribute('href');\r\n      document.querySelector(idMenuItem).scrollIntoView({ behavior: 'smooth' });\r\n    })\r\n  );\r\n\r\n  aLink.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    const idALink = aLink.getAttribute('href');\r\n    document.querySelector(idALink).scrollIntoView({ behavior: 'smooth' });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const modalWindow = document.querySelector('.popup-content');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const closeBtn = document.querySelector('.popup-close');\r\n\r\n  const minWigth = 750;\r\n\r\n  let count = 0;\r\n  let wigth = document.documentElement.clientWidth;\r\n\r\n  let idInterval;\r\n\r\n  const anime = () => {\r\n    count++;\r\n    idInterval = requestAnimationFrame(anime);\r\n\r\n    if (count < Math.round(wigth / 50)) {\r\n      modalWindow.style.left = count * 20 + 'px';\r\n    } else {\r\n      cancelAnimationFrame(idInterval);\r\n      count = 0;\r\n    }\r\n  };\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      wigth = document.documentElement.clientWidth;\r\n      modal.style.display = 'block';\r\n\r\n      if (wigth > minWigth) {\r\n        anime();\r\n      } else {\r\n      }\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/regularExpressions.js":
/*!***************************************!*\
  !*** ./modules/regularExpressions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst regularExpressions = () => {\r\n  const formNames = document.querySelectorAll('.form-name');\r\n  const formPhones = document.querySelectorAll('.form-phone');\r\n  const formEmailes = document.querySelectorAll('.form-email');\r\n  const mess = document.querySelector('.mess');\r\n\r\n  const calcItemAll = document.querySelectorAll('input.calc-item');\r\n\r\n  calcItemAll.forEach((item) => {\r\n    item.addEventListener('blur', (e) => {\r\n      if (!/[^\\d]/g.test(item.value)) {\r\n        e.target.value = item.value;\r\n        console.log('число');\r\n      } else {\r\n        alert('Нужно ввести целое число');\r\n        e.target.value = e.target.value.replace(/[^\\d]/g, '');\r\n      }\r\n    });\r\n  });\r\n\r\n  formNames.forEach((item) => {\r\n    item.addEventListener('blur', (e) => {\r\n      if (/^[а-яА-Я-\\s]{0,}$/g.test(item.value)) {\r\n        e.target.value = item.value;\r\n      } else {\r\n        e.target.value = e.target.value.replace(/[\\w\\D]/g, '');\r\n      }\r\n    });\r\n  });\r\n\r\n  mess.addEventListener('blur', (e) => {\r\n    if (/^[а-яА-Я-\\s]{0,}$/g.test(mess.value)) {\r\n      e.target.value = mess.value;\r\n    } else {\r\n      e.target.value = e.target.value.replace(/[\\w\\D]/g, '');\r\n    }\r\n  });\r\n\r\n  formEmailes.forEach((item) => {\r\n    item.addEventListener('blur', (e) => {\r\n      if (/^[\\w\\.\\-\\_\\!\\~\\*\\'\\@]$/g.test(item.value)) {\r\n        e.target.value = item.value;\r\n      } else {\r\n        e.target.value = e.target.value.replace(\r\n          /[\\[\\]\\&\\/\\#\\,\\+\\$\\%\\\"\\:\\?\\<\\>\\{\\}а-яА-Я\\s]/g,\r\n          ''\r\n        );\r\n        e.target.value = e.target.value.replace(/[\\-]{2,}/g, '-');\r\n        e.target.value = e.target.value.replace(/^[\\-]/g, '');\r\n        e.target.value = e.target.value.replace(/[\\-]$/g, '');\r\n      }\r\n    });\r\n  });\r\n\r\n  formPhones.forEach((item) => {\r\n    item.addEventListener('blur', (e) => {\r\n      if (/^[\\d\\(\\)\\-]$/g.test(item.value)) {\r\n        e.target.value = item.value;\r\n      } else {\r\n        e.target.value = e.target.value.replace(\r\n          /[\\&\\/\\#\\,\\+\\$\\~\\%\\.\\'\\\"\\:\\*\\?\\<\\>\\{\\}\\!\\_a-zA-Zа-яА-Я\\s]/g,\r\n          ''\r\n        );\r\n        e.target.value = e.target.value.replace(/[\\-]{2,}/g, '-');\r\n        e.target.value = e.target.value.replace(/^[\\-]/g, '');\r\n        e.target.value = e.target.value.replace(/[\\-]$/g, '');\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regularExpressions);\r\n\n\n//# sourceURL=webpack:///./modules/regularExpressions.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let diff = dateStop - dateNow;\r\n\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    let nullHours = hours;\r\n    nullHours > -1 && nullHours < 10 && diff >= 0\r\n      ? (nullHours = `${'0' + hours}`)\r\n      : diff < 0\r\n      ? (nullHours = `00`)\r\n      : (nullHours = `${hours}`);\r\n\r\n    let nullMinutes = minutes;\r\n    nullMinutes > -1 && nullMinutes < 10 && diff >= 0\r\n      ? (nullMinutes = `${'0' + minutes}`)\r\n      : diff < 0\r\n      ? (nullMinutes = `00`)\r\n      : (nullMinutes = `${minutes}`);\r\n\r\n    let nullSeconds = seconds;\r\n    nullSeconds > -1 && nullSeconds < 10 && diff >= 0\r\n      ? (nullSeconds = `${'0' + seconds}`)\r\n      : diff < 0\r\n      ? (nullSeconds = `00`)\r\n      : (nullSeconds = `${seconds}`);\r\n\r\n    return { timeRemaining, nullHours, nullMinutes, nullSeconds, diff };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.diff < 0) {\r\n      clearInterval(timerId);\r\n    }\r\n\r\n    timerHours.textContent = getTime.nullHours;\r\n    timerMinutes.textContent = getTime.nullMinutes;\r\n    timerSeconds.textContent = getTime.nullSeconds;\r\n  };\r\n\r\n  setInterval(updateClock, 1, deadline);\r\n\r\n  const timerId = setInterval(updateClock, 1000, deadline);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;