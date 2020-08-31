/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calc\", function() { return calc; });\nfunction calc(){\r\n    let persons =   document.querySelectorAll('.counter-block-input')[0],\r\n        restDays =  document.querySelectorAll('.counter-block-input')[1],\r\n        place = document.getElementById('select'),\r\n        totalValue = document.getElementById('total'),\r\n        personsSum = 0,\r\n        daysSum = 0,\r\n        total = 0;\r\n\r\n        totalValue.innerHTML = 0;\r\n\r\n        const inputHandler = event => {\r\n            if (!parseInt(restDays.value) || !parseInt(persons.value)){\r\n                totalValue.innerHTML = 0;\r\n            }else {\r\n                personsSum = +event.target.value;\r\n                total = (personsSum+daysSum)*450;\r\n                totalValue.innerHTML = total;\r\n            }\r\n        };\r\n\r\n        persons.addEventListener('input', inputHandler);\r\n        restDays.addEventListener('input', inputHandler);\r\n\r\n\r\n        place.addEventListener('change', function(){\r\n            if (persons.value != '' || restDays.value != ''){\r\n                let a = total;\r\n                totalValue.innerHTML = a * this.options[this.selectedIndex].value;\r\n            } else {\r\n                totalValue.innerHTML = 0;\r\n            }\r\n        })\r\n}\n\n//# sourceURL=webpack:///./src/js/parts/calc.js?");

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal\", function() { return modal; });\nfunction modal(){\r\n    let more = document.querySelector('.more'),\r\n        overlay = document.querySelector('.overlay'),\r\n        descriptionButton = document.querySelectorAll('.description-btn'),\r\n        infoTabContent = document.querySelectorAll('.info-tabcontent'),\r\n        close = document.querySelector('.popup-close');\r\n\r\n\r\n    more.addEventListener('click', function () {\r\n        overlay.style.display = 'block';\r\n        this.classList.add('more-splash');\r\n        document.body.style.overflow = 'hidden';\r\n    });\r\n\r\n    close.addEventListener('click', function () {\r\n        overlay.style.display = 'none';\r\n        more.classList.add('more-splash');\r\n        document.body.style.overflow = '';\r\n    });\r\n\r\n\r\n    infoTabContent.forEach(function (item) {\r\n        item.addEventListener('click', function (event) {\r\n            let target = event.target;\r\n            if (target && target.classList.contains('description-btn')) {\r\n                for (let i = 0; i < descriptionButton.length; i++) {\r\n                    if (target == descriptionButton[i]) {\r\n                        overlay.style.display = 'block';\r\n                        more.classList.add('more-splash');\r\n                        document.body.style.overflow = 'hidden';\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        });\r\n    });\r\n    // Form\r\n\r\n\r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: ' Спасибо! Наш менеджер скоро с Вами свяжется!',\r\n        failure: ' Что-то пошло не так !'\r\n    };\r\n\r\n    let form = document.querySelector('.main-form'),\r\n        input = form.getElementsByTagName('input'),\r\n        statusMessage = document.createElement('div');\r\n\r\n    statusMessage.classList.add('status');\r\n\r\n    function sendForm(form) {\r\n\r\n        form.addEventListener('submit', function (event) {\r\n            event.preventDefault();\r\n            form.appendChild(statusMessage);\r\n            let formData = new FormData(form);\r\n\r\n            function postData() {\r\n\r\n                return new Promise(function (resolve, reject) {\r\n\r\n                    let request = new XMLHttpRequest();\r\n                    request.open('POST', 'server.php');\r\n                    //request.setRequestHeader('Content-type','application/x-www-form-urlencoded');\r\n                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');\r\n                    request.addEventListener('readystatechange', function () {\r\n                        if (request.readyState < 4) {\r\n                            resolve();\r\n                        } else if (request.readyState === 4 && request.status == 200) {\r\n                            resolve();\r\n                        } else {\r\n                            reject();\r\n                        }\r\n                    });\r\n\r\n                    let obj = {};\r\n                    formData.forEach(function (value, key) {\r\n                        obj[key] = value;\r\n                    });\r\n                    let json = JSON.stringify(obj);\r\n                    request.send(json);\r\n                });\r\n            } //end postData\r\n\r\n            function clearInput(){\r\n                for (let i = 0; i < input.length; i++) {\r\n                    input[i].value = '';\r\n                }\r\n            }\r\n\r\n            postData()\r\n                .then(()=>statusMessage.innerHTML = message.loading)\r\n                .then(()=>statusMessage.innerHTML = message.success)\r\n                .catch(()=>statusMessage.innerHTML = message.failure)\r\n                .then(clearInput);          \r\n\r\n            \r\n        });\r\n    }\r\n\r\n    sendForm(form);\r\n}\n\n//# sourceURL=webpack:///./src/js/parts/modal.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\nfunction slider(){\r\n    let sliderIndex = 1,\r\n        slides = document.querySelectorAll('.slider-item'),\r\n        prev = document.querySelector('.prev'),\r\n        next = document.querySelector('.next'),\r\n        dotsWrap = document.querySelector('.slider-dots'),\r\n        dots = document.querySelectorAll('.dot');\r\n    \r\n    showSlides(sliderIndex);\r\n\r\n\r\n    function showSlides(n){\r\n\r\n        if (n >= slides.length){\r\n            sliderIndex = 0;\r\n        }else if (n < 0){\r\n            sliderIndex = slides.length -1;\r\n        }\r\n        \r\n        slides.forEach(element => {\r\n            element.style.display = 'none';  \r\n        });\r\n        dots.forEach(element => {\r\n            element.classList.remove('dot-active');\r\n        });\r\n        slides[sliderIndex].style.display = 'block';\r\n        dots[sliderIndex].classList.add('dot-active');\r\n    }\r\n    \r\n    function plusSlide(n){\r\n        showSlides(sliderIndex +=n);\r\n    }\r\n\r\n    function currentSlide(n){\r\n        showSlides(sliderIndex = n);\r\n    }\r\n\r\n    prev.addEventListener('click', function(){\r\n        plusSlide(-1);\r\n    });\r\n    next.addEventListener('click', function(){\r\n        plusSlide(1);\r\n    });\r\n\r\n    dotsWrap.addEventListener('click', function(event){\r\n        let target = event.target;\r\n        if (target && target.classList.contains('dot')) {\r\n            for (let i = 0; i < dots.length; i++) {\r\n                if (target == dots[i]) {\r\n                    currentSlide(i);\r\n                    \r\n                }\r\n            }\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/js/parts/slider.js?");

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\nfunction tabs(){\r\n    let infoHeader = document.querySelector('.info-header'),\r\n        infoHeaderTab = document.querySelectorAll('.info-header-tab'),\r\n        infoTabContent = document.querySelectorAll('.info-tabcontent');\r\n\r\n    function hideinfoTabContent(a) {\r\n        for (let i = a; i < infoTabContent.length; i++) {\r\n            infoTabContent[i].classList.remove('show');\r\n            infoTabContent[i].classList.add('hide');\r\n        }\r\n    }\r\n\r\n    hideinfoTabContent(1);\r\n\r\n    function showinfoTabContent(b) {\r\n        if (infoTabContent[b].classList.contains('hide')) {\r\n            infoTabContent[b].classList.add('show');\r\n            infoTabContent[b].classList.remove('hide');\r\n        }\r\n    }\r\n\r\n    infoHeader.addEventListener('click', function (event) {\r\n        let target = event.target;\r\n        if (target && target.classList.contains('info-header-tab')) {\r\n            for (let i = 0; i < infoHeaderTab.length; i++) {\r\n                if (target == infoHeaderTab[i]) {\r\n                    hideinfoTabContent(0);\r\n                    showinfoTabContent(i);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/js/parts/tabs.js?");

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return timer; });\nfunction timer(){\r\n    let deadLine = '2020-05-29';\r\n\r\n    function getTimeRemaining(endTime) {\r\n        let t = Date.parse(endTime) - Date.parse(new Date()),\r\n            seconds = Math.floor((t / 1000) % 60),\r\n            minutes = Math.floor((t / 1000 / 60) % 60),\r\n            hours = Math.floor((t / 1000 / 3600) % 24),\r\n            days = Math.floor(t / 1000 / 3600 / 24);\r\n\r\n        return {\r\n            'total': t,\r\n            'days': ('0' + days).slice(-2),\r\n            'hours': ('0' + hours).slice(-2),\r\n            'minutes': ('0' + minutes).slice(-2),\r\n            'seconds': ('0' + seconds).slice(-2)\r\n        };\r\n    }\r\n\r\n    function setClock(id, endTime) {\r\n        let timer = document.getElementById(id),\r\n            hours = timer.querySelector('.hours'),\r\n            minutes = timer.querySelector('.minutes'),\r\n            seconds = timer.querySelector('.seconds'),\r\n            days = timer.querySelector('.days'),\r\n            timeInterval = setInterval(updateClock, 1000);\r\n\r\n        function updateClock() {\r\n            let t = getTimeRemaining(endTime);\r\n            hours.textContent = t.hours;\r\n            minutes.textContent = t.minutes;\r\n            seconds.textContent = t.seconds;\r\n            days.textContent = t.days;\r\n            if (t.total <= 0) {\r\n                clearInterval(timeInterval);\r\n            }\r\n\r\n        }\r\n    }\r\n\r\n    setClock('timer', deadLine);\r\n}\n\n//# sourceURL=webpack:///./src/js/parts/timer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_calc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/calc.js */ \"./src/js/parts/calc.js\");\n/* harmony import */ var _parts_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/slider.js */ \"./src/js/parts/slider.js\");\n/* harmony import */ var _parts_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/modal.js */ \"./src/js/parts/modal.js\");\n/* harmony import */ var _parts_timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/timer.js */ \"./src/js/parts/timer.js\");\n/* harmony import */ var _parts_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/tabs.js */ \"./src/js/parts/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n    'use strict';\r\n    \r\n\r\n    Object(_parts_calc_js__WEBPACK_IMPORTED_MODULE_0__[\"calc\"])();\r\n    Object(_parts_slider_js__WEBPACK_IMPORTED_MODULE_1__[\"slider\"])();\r\n    Object(_parts_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"modal\"])();\r\n    Object(_parts_timer_js__WEBPACK_IMPORTED_MODULE_3__[\"timer\"])();\r\n    Object(_parts_tabs_js__WEBPACK_IMPORTED_MODULE_4__[\"tabs\"])();\r\n\r\n    \r\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });