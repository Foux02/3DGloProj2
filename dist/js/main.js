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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_regularExpressions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regularExpressions */ \"./modules/regularExpressions.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('21 december 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_regularExpressions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const body = document.querySelector('body');\r\n  const menu = document.querySelector('menu');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  body.addEventListener('click', (e) => {\r\n    if (e.target.matches('img') && e.target.closest('.menu')) {\r\n      handleMenu();\r\n    } else if (e.target.matches('a.close-btn')) {\r\n      handleMenu();\r\n    } else if (e.target.closest('ul>li>a')) {\r\n      e.preventDefault();\r\n      handleMenu();\r\n\r\n      const menuItem = e.target.closest('ul>li>a');\r\n      const idMenuItem = menuItem.getAttribute('href');\r\n\r\n      document.querySelector(idMenuItem).scrollIntoView({ behavior: 'smooth' });\r\n    } else if (e.target.matches('main>a>img')) {\r\n      e.preventDefault();\r\n\r\n      const aLink = e.target.closest('main>a');\r\n      const idALink = aLink.getAttribute('href');\r\n\r\n      document.querySelector(idALink).scrollIntoView({ behavior: 'smooth' });\r\n    } else if (!e.target.closest('.active-menu')) {\r\n      menu.classList.remove('active-menu');\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const modalWindow = document.querySelector('.popup-content');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n  const minWigth = 750;\r\n\r\n  let count = 0;\r\n  let wigth = document.documentElement.clientWidth;\r\n\r\n  let idInterval;\r\n\r\n  const anime = () => {\r\n    count++;\r\n    idInterval = requestAnimationFrame(anime);\r\n\r\n    if (count < Math.round(wigth / 50)) {\r\n      modalWindow.style.left = count * 20 + 'px';\r\n    } else {\r\n      cancelAnimationFrame(idInterval);\r\n      count = 0;\r\n    }\r\n  };\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      wigth = document.documentElement.clientWidth;\r\n      modal.style.display = 'block';\r\n\r\n      if (wigth > minWigth) {\r\n        anime();\r\n      } else {\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (\r\n      !e.target.closest('.popup-content') ||\r\n      e.target.closest('.popup-close')\r\n    ) {\r\n      modal.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/regularExpressions.js":
/*!***************************************!*\
  !*** ./modules/regularExpressions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst regularExpressions = () => {\r\n  const formNames = document.querySelectorAll('.form-name');\r\n  const formNamesCss = document.getElementsByClassName('form-name');\r\n  const formPhones = document.querySelectorAll('.form-phone');\r\n  const formEmailes = document.querySelectorAll('.form-email');\r\n  const mess = document.querySelector('.mess');\r\n\r\n  const calcItemAll = document.querySelectorAll('input.calc-item');\r\n\r\n  calcItemAll.forEach((item) => {\r\n    item.addEventListener('blur', (e) => {\r\n      if (!/[^\\d]/g.test(item.value)) {\r\n        e.target.value = item.value;\r\n        console.log('число');\r\n      } else {\r\n        e.target.value = e.target.value.replace(/[^\\d]/g, '');\r\n      }\r\n    });\r\n  });\r\n\r\n  formNames.forEach((item, index) => {\r\n    item.addEventListener('blur', (e) => {\r\n      formNamesCss[index].style.textTransform = 'capitalize';\r\n      e.target.value = e.target.value.replace(\r\n        /[a-zA-Z0-9\\&\\@\\/\\#\\,\\+\\$\\~\\%\\.\\'\\\"\\:\\;\\*\\?\\<\\>\\{\\}\\!\\_\\(\\)]/g,\r\n        ''\r\n      );\r\n      e.target.value = e.target.value.replace(/[\\-]{2,}/g, '-');\r\n      e.target.value = e.target.value.replace(/[\\s]{2,}/g, ' ');\r\n      e.target.value = e.target.value.replace(/^[\\-\\s]*/g, '');\r\n      e.target.value = e.target.value.replace(/[\\-\\s]*$/g, '');\r\n\r\n      console.log('else' + index);\r\n    });\r\n  });\r\n\r\n  mess.addEventListener('blur', (e) => {\r\n    mess.style.textTransform = 'capitalize';\r\n    e.target.value = e.target.value.replace(\r\n      /[a-zA-Z0-9\\&\\/\\#\\,\\+\\$\\~\\%\\.\\'\\\"\\:\\;\\*\\?\\<\\>\\{\\}\\!\\_\\(\\)]/g,\r\n      ''\r\n    );\r\n    e.target.value = e.target.value.replace(/[\\-]{2,}/g, '-');\r\n    e.target.value = e.target.value.replace(/[\\s]{2,}/g, ' ');\r\n    e.target.value = e.target.value.replace(/^[\\-\\s]*/g, '');\r\n    e.target.value = e.target.value.replace(/[\\-\\s]*$/g, '');\r\n    mess.style.textTransform = 'capitalize';\r\n  });\r\n\r\n  formEmailes.forEach((item) => {\r\n    item.addEventListener('blur', (e) => {\r\n      e.target.value = e.target.value.replace(\r\n        /[\\[\\]\\&\\/\\#\\,\\+\\$\\%\\\"\\:\\?\\<\\>\\{\\}а-яА-Я\\s]/g,\r\n        ''\r\n      );\r\n      e.target.value = e.target.value.replace(/[\\-]{2,}/g, '-');\r\n      e.target.value = e.target.value.replace(/^[\\-]*/g, '');\r\n      e.target.value = e.target.value.replace(/[\\-]*$/g, '');\r\n    });\r\n  });\r\n\r\n  formPhones.forEach((item) => {\r\n    item.addEventListener('blur', (e) => {\r\n      e.target.value = e.target.value.replace(\r\n        /[\\&\\/\\#\\,\\+\\$\\~\\%\\.\\'\\\"\\:\\*\\?\\<\\>\\{\\}\\!\\_a-zA-Zа-яА-Я\\s]/g,\r\n        ''\r\n      );\r\n      e.target.value = e.target.value.replace(/[\\-]{2,}/g, '-');\r\n      e.target.value = e.target.value.replace(/^[\\-]*/g, '');\r\n      e.target.value = e.target.value.replace(/[\\-]*$/g, '');\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regularExpressions);\r\n\n\n//# sourceURL=webpack:///./modules/regularExpressions.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector('.portfolio-content');\r\n  const slides = document.querySelectorAll('.portfolio-item');\r\n  const dotUl = document.querySelector('.portfolio-dots');\r\n\r\n  const timerInterval = 2000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n  let dotLi;\r\n  let dots;\r\n\r\n  const dotList = () => {\r\n    for (let i = 0; i < slides.length - 1; i++) {\r\n      if (i < 1) {\r\n        dotLi = document.createElement('li');\r\n        dotLi.classList.add('dot', 'dot-active');\r\n        dotUl.append(dotLi);\r\n      }\r\n\r\n      dotLi = document.createElement('li');\r\n      dotLi.classList.add('dot');\r\n      dotUl.append(dotLi);\r\n    }\r\n  };\r\n\r\n  dotList();\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    dots = document.querySelectorAll('.dot');\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches('.dot, .portfolio-btn')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++;\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains('dot')) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseenter',\r\n    (e) => {\r\n      if (e.target.matches('.dot, .portfolio-btn')) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseleave',\r\n    (e) => {\r\n      if (e.target.matches('.dot, .portfolio-btn')) {\r\n        startSlide(timerInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timerInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab');\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active');\r\n          tabContent[index].classList.remove('d-none');\r\n        } else {\r\n          tab.classList.remove('active');\r\n          tabContent[index].classList.add('d-none');\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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