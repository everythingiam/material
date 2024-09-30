/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/UI/my-button/my-button.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/UI/my-button/my-button.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Light.ttf */ "./src/assets/font/TTHoves-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Regular.ttf */ "./src/assets/font/TTHoves-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Medium.ttf */ "./src/assets/font/TTHoves-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-ExtraBold.ttf */ "./src/assets/font/TTHoves-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@font-face {
  font-family: "TTHoves Light";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "TTHoves";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Medium";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Extrabold";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
h1 {
  font-family: "TTHoves Medium";
  font-size: 4.2rem;
}

.font-h1-poster {
  font-family: "TTHoves Medium";
  font-size: 3.2rem;
  line-height: 107%;
}

.font-h1-hero {
  font-family: "TTHoves";
  font-size: 3.5rem;
}

.font-h2-mini {
  font-family: "TTHoves Medium";
  font-size: 1.8rem;
}

h2 {
  font-family: "TTHoves Medium";
  font-size: 2.4rem;
}

.font-p1-hero {
  font-family: "TTHoves Light";
  font-size: 2rem;
}

.font-p1-medium {
  font-family: "TTHoves Medium";
  font-size: 2.2rem;
}

.font-p1 {
  font-family: "TTHoves";
  font-size: 2rem;
  line-height: 150%;
}

.font-p2 {
  font-family: "TTHoves";
  font-size: 1.6rem;
}

.font-p3 {
  font-family: "TTHoves";
  font-size: 1.5rem;
}

.font-button, .button {
  font-family: "TTHoves";
  font-size: 1.4rem;
}

.font-filters {
  font-family: "TTHoves";
  font-size: 1.5rem;
  text-transform: uppercase;
}

.font-label {
  font-family: "TTHoves";
  font-size: 1.3rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  h1 {
    font-family: "TTHoves Medium";
    font-size: 2.5rem;
  }
  .font-h1-poster {
    font-family: "TTHoves Medium";
    font-size: 2.2rem;
    line-height: 107%;
  }
  .font-h1-hero {
    font-family: "TTHoves";
    font-size: 2.5rem;
  }
  h2 {
    font-family: "TTHoves Medium";
    font-size: 1.7rem;
  }
  .font-p1-hero {
    font-family: "TTHoves Light";
    font-size: 2.6rem;
  }
  .font-p1-medium {
    font-family: "TTHoves Medium";
    font-size: 1.5rem;
  }
  .font-p1 {
    font-family: "TTHoves";
    font-size: 1.5rem;
    line-height: 150%;
  }
  .font-p2 {
    font-family: "TTHoves";
    font-size: 1.4rem;
  }
  .font-p3 {
    font-family: "TTHoves";
    font-size: 1.2rem;
  }
  .font-button, .button {
    font-family: "TTHoves";
    font-size: 1.3rem;
  }
  .font-filters {
    font-family: "TTHoves";
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .font-label {
    font-family: "TTHoves";
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
body {
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
}

html {
  /* 10px */
  font-size: 62.5%;
}

.button {
  background-color: #0E63E3;
  border-radius: 1rem;
  padding: 0.9rem 2.1rem 1rem 2.1rem;
  color: #FAFAFA;
  border: none;
  transition: 0.2s ease;
  cursor: pointer;
  text-decoration: none;
}
.button:hover {
  background-color: #3DA2FF;
  border-radius: 0.3333333333rem;
}
.button:active {
  background-color: #004FC6;
  border-radius: 4px;
}
.button:disabled {
  background-color: #2A2B2C;
  opacity: 40%;
  cursor: not-allowed;
}
.button:focus {
  outline: 2px solid rgba(37, 37, 213, 0.2);
}
.button.outline {
  background-color: #FAFAFA;
  color: #0E63E3;
  border: 1px solid #0E63E3;
  padding: calc(0.9rem - 1px) calc(2.1rem - 1px) calc(1rem - 1px) calc(2.1rem - 1px);
}
.button.outline:hover {
  background-color: #edf1fb;
}
.button.outline:active {
  background-color: #cbd4e9;
}
.button.outline:disabled {
  border-color: #2A2B2C;
  cursor: not-allowed;
}
.button.outline:focus {
  outline: 2px solid rgba(37, 37, 213, 0.2);
}
.button.custom {
  width: 100%;
  height: 4.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1023px) {
  .button.custom {
    height: 4rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/UI/my-button/my-button.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/UI/my-form/my-form.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/UI/my-form/my-form.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Light.ttf */ "./src/assets/font/TTHoves-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Regular.ttf */ "./src/assets/font/TTHoves-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Medium.ttf */ "./src/assets/font/TTHoves-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-ExtraBold.ttf */ "./src/assets/font/TTHoves-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@font-face {
  font-family: "TTHoves Light";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "TTHoves";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Medium";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Extrabold";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
h1 {
  font-family: "TTHoves Medium";
  font-size: 4.2rem;
}

.font-h1-poster {
  font-family: "TTHoves Medium";
  font-size: 3.2rem;
  line-height: 107%;
}

.font-h1-hero {
  font-family: "TTHoves";
  font-size: 3.5rem;
}

.font-h2-mini {
  font-family: "TTHoves Medium";
  font-size: 1.8rem;
}

h2 {
  font-family: "TTHoves Medium";
  font-size: 2.4rem;
}

.font-p1-hero {
  font-family: "TTHoves Light";
  font-size: 2rem;
}

.font-p1-medium {
  font-family: "TTHoves Medium";
  font-size: 2.2rem;
}

.font-p1 {
  font-family: "TTHoves";
  font-size: 2rem;
  line-height: 150%;
}

.font-p2 {
  font-family: "TTHoves";
  font-size: 1.6rem;
}

.font-p3, form ul li span.error-message, form ul .text span.error-message, form ul li input,
form ul li textarea, form ul .text input,
form ul .text textarea {
  font-family: "TTHoves";
  font-size: 1.5rem;
}

.font-button {
  font-family: "TTHoves";
  font-size: 1.4rem;
}

.font-filters {
  font-family: "TTHoves";
  font-size: 1.5rem;
  text-transform: uppercase;
}

.font-label, form ul li label, form ul .text label {
  font-family: "TTHoves";
  font-size: 1.3rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  h1 {
    font-family: "TTHoves Medium";
    font-size: 2.5rem;
  }
  .font-h1-poster {
    font-family: "TTHoves Medium";
    font-size: 2.2rem;
    line-height: 107%;
  }
  .font-h1-hero {
    font-family: "TTHoves";
    font-size: 2.5rem;
  }
  h2 {
    font-family: "TTHoves Medium";
    font-size: 1.7rem;
  }
  .font-p1-hero {
    font-family: "TTHoves Light";
    font-size: 2.6rem;
  }
  .font-p1-medium {
    font-family: "TTHoves Medium";
    font-size: 1.5rem;
  }
  .font-p1 {
    font-family: "TTHoves";
    font-size: 1.5rem;
    line-height: 150%;
  }
  .font-p2 {
    font-family: "TTHoves";
    font-size: 1.4rem;
  }
  .font-p3, form ul li span.error-message, form ul .text span.error-message, form ul li input,
  form ul li textarea, form ul .text input,
  form ul .text textarea {
    font-family: "TTHoves";
    font-size: 1.2rem;
  }
  .font-button {
    font-family: "TTHoves";
    font-size: 1.3rem;
  }
  .font-filters {
    font-family: "TTHoves";
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .font-label, form ul li label, form ul .text label {
    font-family: "TTHoves";
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
body {
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
}

html {
  /* 10px */
  font-size: 62.5%;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem;
}
form ul {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  list-style: none;
}
form ul li, form ul .text {
  display: flex;
  flex-direction: column;
}
form ul li label, form ul .text label {
  color: rgba(42, 43, 44, 0.5);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}
form ul li textarea, form ul .text textarea {
  resize: none;
  min-height: 9rem;
}
form ul li input,
form ul li textarea, form ul .text input,
form ul .text textarea {
  padding: 1.3rem 1.6rem;
  border: 1px solid rgba(42, 43, 44, 0.1);
  background-color: rgba(42, 43, 44, 0.04);
  border-radius: 1rem;
  width: 100%;
}
form ul li input.invalid,
form ul li textarea.invalid, form ul .text input.invalid,
form ul .text textarea.invalid {
  border: 1px solid #e54e1f;
}
form ul li input.success,
form ul li textarea.success, form ul .text input.success,
form ul .text textarea.success {
  border-color: #6ead48;
}
form ul li input:disabled,
form ul li textarea:disabled, form ul .text input:disabled,
form ul .text textarea:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}
form ul li input:hover,
form ul li textarea:hover, form ul .text input:hover,
form ul .text textarea:hover {
  border: 0.1rem solid rgba(42, 43, 44, 0.6);
}
form ul li input:focus,
form ul li textarea:focus, form ul .text input:focus,
form ul .text textarea:focus {
  outline: 0.2rem solid rgba(37, 37, 213, 0.2);
  border: 0.1rem solid #0E63E3;
}
form ul li span.error-message, form ul .text span.error-message {
  font-size: 1.2rem;
  color: #e54e1f;
  margin-top: 1rem;
}

@media (max-width: 1023px) {
  form {
    gap: 1.8rem;
  }
  form ul {
    gap: 1rem;
  }
  input,
  textarea {
    padding: 1.2rem 1.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/UI/my-form/my-form.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/my-mini_card/my-mini-card.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/my-mini_card/my-mini-card.scss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Light.ttf */ "./src/assets/font/TTHoves-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Regular.ttf */ "./src/assets/font/TTHoves-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Medium.ttf */ "./src/assets/font/TTHoves-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-ExtraBold.ttf */ "./src/assets/font/TTHoves-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@font-face {
  font-family: "TTHoves Light";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "TTHoves";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Medium";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Extrabold";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
h1 {
  font-family: "TTHoves Medium";
  font-size: 4.2rem;
}

.font-h1-poster {
  font-family: "TTHoves Medium";
  font-size: 3.2rem;
  line-height: 107%;
}

.font-h1-hero {
  font-family: "TTHoves";
  font-size: 3.5rem;
}

.font-h2-mini, .product-card > a > footer.product-info > h2, .product-card > a > footer.product-info > .product-meta > p.price {
  font-family: "TTHoves Medium";
  font-size: 1.8rem;
}

h2 {
  font-family: "TTHoves Medium";
  font-size: 2.4rem;
}

.font-p1-hero {
  font-family: "TTHoves Light";
  font-size: 2rem;
}

.font-p1-medium {
  font-family: "TTHoves Medium";
  font-size: 2.2rem;
}

.font-p1 {
  font-family: "TTHoves";
  font-size: 2rem;
  line-height: 150%;
}

.font-p2 {
  font-family: "TTHoves";
  font-size: 1.6rem;
}

.font-p3, .product-card > a > footer.product-info > .product-meta > p.author {
  font-family: "TTHoves";
  font-size: 1.5rem;
}

.font-button {
  font-family: "TTHoves";
  font-size: 1.4rem;
}

.font-filters {
  font-family: "TTHoves";
  font-size: 1.5rem;
  text-transform: uppercase;
}

.font-label {
  font-family: "TTHoves";
  font-size: 1.3rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  h1 {
    font-family: "TTHoves Medium";
    font-size: 2.5rem;
  }
  .font-h1-poster {
    font-family: "TTHoves Medium";
    font-size: 2.2rem;
    line-height: 107%;
  }
  .font-h1-hero {
    font-family: "TTHoves";
    font-size: 2.5rem;
  }
  h2 {
    font-family: "TTHoves Medium";
    font-size: 1.7rem;
  }
  .font-p1-hero {
    font-family: "TTHoves Light";
    font-size: 2.6rem;
  }
  .font-p1-medium {
    font-family: "TTHoves Medium";
    font-size: 1.5rem;
  }
  .font-p1 {
    font-family: "TTHoves";
    font-size: 1.5rem;
    line-height: 150%;
  }
  .font-p2 {
    font-family: "TTHoves";
    font-size: 1.4rem;
  }
  .font-p3, .product-card > a > footer.product-info > .product-meta > p.author {
    font-family: "TTHoves";
    font-size: 1.2rem;
  }
  .font-button {
    font-family: "TTHoves";
    font-size: 1.3rem;
  }
  .font-filters {
    font-family: "TTHoves";
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .font-label {
    font-family: "TTHoves";
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
body {
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
}

html {
  /* 10px */
  font-size: 62.5%;
}

.product-card {
  overflow: hidden;
}
.product-card > a > .product-card-container {
  background: linear-gradient(#2A2B2C, #1b1b1b);
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4%;
  transition: 0.2s ease;
  position: relative;
}
.product-card > a > .product-card-container > img {
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
}
.product-card > a > .product-card-container > .favorite-btn {
  background-color: rgba(250, 250, 250, 0.6);
  backdrop-filter: blur(4px);
  transition: 0.2s ease;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 1.5px solid #2A2B2C;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-card > a > .product-card-container > .favorite-btn > svg {
  margin-top: 2px;
}
.product-card > a > .product-card-container > .favorite-btn:hover {
  background-color: #FAFAFA;
  backdrop-filter: blur(4px);
}
.product-card > a > .product-card-container > .favorite-btn.fav-active svg path {
  fill: #2A2B2C;
}
.product-card > a > footer.product-info {
  padding-top: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}
.product-card > a > footer.product-info > .product-meta {
  display: flex;
  justify-content: space-between;
}
.product-card > a > footer.product-info > .product-meta > p.author {
  color: rgba(42, 43, 44, 0.5);
  transition: 0.2s ease;
}
.product-card > a > footer.product-info > .product-meta > p.price {
  color: #2A2B2C;
  transition: 0.2s ease;
}
.product-card > a > footer.product-info > .separator {
  width: 100%;
  height: 0.07rem;
  background-color: rgba(42, 43, 44, 0.15);
  transition: 0.2s ease;
}
.product-card > a > footer.product-info > h2 {
  color: #2A2B2C;
  transition: color 200ms ease-in-out;
}
.product-card > a > footer.product-info > p {
  transition: color 200ms ease-in-out;
}
.product-card > a:hover > footer.product-info > h2,
.product-card > a:hover > footer.product-info > .product-meta > p.author,
.product-card > a:hover > footer.product-info > .product-meta > p.price {
  color: #0E63E3;
}
.product-card > a:hover > .product-card-container {
  padding: 3%;
}
.product-card > a:hover > footer.product-info > .separator {
  background-color: rgba(14, 99, 227, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/components/my-mini_card/my-mini-card.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE,aAAA;EACA,sBAAA;ADAF;;ACGA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE;IACE,kBAAA;IACA,mBAAA;EDAF;ECGA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDDF;ECIA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDFF;AACF;AErCA;EACE,4BAAA;EACA,gBAAA;EACA,+DAAA;AFuCF;AEpCA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;AFsCF;AEnCA;EACE,6BAAA;EACA,gBAAA;EACA,+DAAA;AFqCF;AElCA;EACE,gCAAA;EACA,gBAAA;EACA,+DAAA;AFoCF;AEjCA;EACE,6BAAA;EACA,iBAAA;AFmCF;;AEjCA;EACE,6BAAA;EACA,iBAAA;EACA,iBAAA;AFoCF;;AElCA;EACE,sBAAA;EACA,iBAAA;AFqCF;;AEnCA;EACE,6BAAA;EACA,iBAAA;AFsCF;;AEpCA;EACE,6BAAA;EACA,iBAAA;AFuCF;;AErCA;EACE,4BAAA;EACA,eAAA;AFwCF;;AEtCA;EACE,6BAAA;EACA,iBAAA;AFyCF;;AEvCA;EACE,sBAAA;EACA,eAAA;EACA,iBAAA;AF0CF;;AExCA;EACE,sBAAA;EACA,iBAAA;AF2CF;;AEzCA;EACE,sBAAA;EACA,iBAAA;AF4CF;;AE1CA;EACE,sBAAA;EACA,iBAAA;AF6CF;;AE3CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AF8CF;;AE5CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AF+CF;;AE5CA;EACE;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,4BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EF+CF;AACF;ACpMA;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;EACE,aAAA;EACA,sBAAA;ADqMF;;AClMA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;EACE;IACE,kBAAA;IACA,mBAAA;EDqMF;EClMA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDoMF;ECjMA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDmMF;AACF;AGvPA;EACE,aAAA;EACA,sBAAA;EACA,yBCLY;AJ8Pd;;AGtPA;EACE,SAAA;EACA,gBAAA;AHyPF;;AAnQA;EACE,gBAAA;AAsQF;AAnQI;EACE,6CAAA;EACA,WAAA;EACA,iBAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,qBIDQ;EJER,kBAAA;AAqQN;AAnQM;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AAqQR;AAlQM;EACE,0CAAA;EACA,0BAAA;EACA,qBIdM;EJgBN,YAAA;EACA,WAAA;EACA,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAmQR;AAjQQ;EACE,eAAA;AAmQV;AAhQQ;EACE,yBI7CI;EJ8CJ,0BAAA;AAkQV;AA9PU;EACE,aIpDE;AJoTd;AA1PI;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AA4PN;AA1PM;EACE,aAAA;EACA,8BAAA;AA4PR;AA1PQ;EAEE,4BAAA;EACA,qBI1DI;AJqTd;AAxPQ;EAEE,cI5EI;EJ6EJ,qBIhEI;AJyTd;AArPM;EACE,WAAA;EACA,eAAA;EACA,wCAAA;EACA,qBIxEM;AJ+Td;AApPM;EAEE,cI1FM;EJ2FN,mCAAA;AAqPR;AAlPM;EACE,mCAAA;AAoPR;AA/OM;;;EAGE,cIxGO;AJyVf;AA9OM;EACE,WAAA;AAgPR;AA7OM;EACE,wCAAA;AA+OR","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/dialog_popup/my-dialog_popup.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/dialog_popup/my-dialog_popup.scss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Light.ttf */ "./src/assets/font/TTHoves-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Regular.ttf */ "./src/assets/font/TTHoves-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Medium.ttf */ "./src/assets/font/TTHoves-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-ExtraBold.ttf */ "./src/assets/font/TTHoves-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@font-face {
  font-family: "TTHoves Light";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "TTHoves";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Medium";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Extrabold";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
h1 {
  font-family: "TTHoves Medium";
  font-size: 4.2rem;
}

.font-h1-poster {
  font-family: "TTHoves Medium";
  font-size: 3.2rem;
  line-height: 107%;
}

.font-h1-hero {
  font-family: "TTHoves";
  font-size: 3.5rem;
}

.font-h2-mini {
  font-family: "TTHoves Medium";
  font-size: 1.8rem;
}

h2 {
  font-family: "TTHoves Medium";
  font-size: 2.4rem;
}

.font-p1-hero {
  font-family: "TTHoves Light";
  font-size: 2rem;
}

.font-p1-medium {
  font-family: "TTHoves Medium";
  font-size: 2.2rem;
}

.font-p1 {
  font-family: "TTHoves";
  font-size: 2rem;
  line-height: 150%;
}

.font-p2, html > body > main > dialog > .dialog-popup > .right-side .blac, html > body > main > dialog > .dialog-popup > .left-side > p > span, html > body > main > dialog > .dialog-popup > .left-side > p {
  font-family: "TTHoves";
  font-size: 1.6rem;
}

.font-p3 {
  font-family: "TTHoves";
  font-size: 1.5rem;
}

.font-button {
  font-family: "TTHoves";
  font-size: 1.4rem;
}

.font-filters {
  font-family: "TTHoves";
  font-size: 1.5rem;
  text-transform: uppercase;
}

.font-label, html > body > main > dialog > .dialog-popup > .right-side > .or-google > p {
  font-family: "TTHoves";
  font-size: 1.3rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  h1 {
    font-family: "TTHoves Medium";
    font-size: 2.5rem;
  }
  .font-h1-poster {
    font-family: "TTHoves Medium";
    font-size: 2.2rem;
    line-height: 107%;
  }
  .font-h1-hero {
    font-family: "TTHoves";
    font-size: 2.5rem;
  }
  h2 {
    font-family: "TTHoves Medium";
    font-size: 1.7rem;
  }
  .font-p1-hero {
    font-family: "TTHoves Light";
    font-size: 2.6rem;
  }
  .font-p1-medium {
    font-family: "TTHoves Medium";
    font-size: 1.5rem;
  }
  .font-p1 {
    font-family: "TTHoves";
    font-size: 1.5rem;
    line-height: 150%;
  }
  .font-p2, html > body > main > dialog > .dialog-popup > .right-side .blac, html > body > main > dialog > .dialog-popup > .left-side > p > span, html > body > main > dialog > .dialog-popup > .left-side > p {
    font-family: "TTHoves";
    font-size: 1.4rem;
  }
  .font-p3 {
    font-family: "TTHoves";
    font-size: 1.2rem;
  }
  .font-button {
    font-family: "TTHoves";
    font-size: 1.3rem;
  }
  .font-filters {
    font-family: "TTHoves";
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .font-label, html > body > main > dialog > .dialog-popup > .right-side > .or-google > p {
    font-family: "TTHoves";
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
body {
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
}

html {
  /* 10px */
  font-size: 62.5%;
}

html > body > main > dialog {
  background-color: rgba(97, 97, 97, 0.5);
  position: fixed;
  inset: 0;
  z-index: 101;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  justify-content: center;
  transition: all 0.5s ease;
  display: block;
  opacity: 0;
  pointer-events: none;
  backdrop-filter: blur(15px);
  width: 100%;
  height: auto;
  border: 0;
  padding: 7% 1rem;
}
html > body > main > dialog > .dialog-popup {
  width: 100%;
  max-width: 96rem;
  background-color: #FAFAFA;
  position: relative;
  border-radius: 1rem;
  display: none;
  min-height: 54rem;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right: auto;
}
html > body > main > dialog > .dialog-popup.active {
  display: grid;
}
html > body > main > dialog > .dialog-popup > .left-side {
  background-size: cover;
  background-position: center;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
}
html > body > main > dialog > .dialog-popup > .left-side > .close {
  width: 4rem;
  height: 4rem;
  position: absolute;
  z-index: 10;
  top: 0;
  margin: 4rem;
}
html > body > main > dialog > .dialog-popup > .left-side > picture > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
html > body > main > dialog > .dialog-popup > .left-side > p {
  color: #FAFAFA;
  position: absolute;
  margin: 4rem;
}
html > body > main > dialog > .dialog-popup > .left-side > p > span {
  transition: 200ms;
  cursor: pointer;
  text-decoration: underline;
  color: #FAFAFA;
}
html > body > main > dialog > .dialog-popup > .left-side > p > span:hover {
  color: rgba(250, 250, 250, 0.6);
}
html > body > main > dialog > .dialog-popup > .right-side {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
html > body > main > dialog > .dialog-popup > .right-side > .or-google {
  width: 100%;
  display: flex;
  flex-direction: column;
}
html > body > main > dialog > .dialog-popup > .right-side > .or-google > p {
  align-self: center;
  color: rgba(42, 43, 44, 0.5);
  margin-bottom: 1.5rem;
}
html > body > main > dialog > .dialog-popup > .right-side > form.register {
  min-height: 41rem;
}
html > body > main > dialog > .dialog-popup > .right-side > form.register > ul.fields > .password-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
}
html > body > main > dialog > .dialog-popup > .right-side .blac {
  color: #2A2B2C;
  align-self: flex-end;
  transition: 200ms;
  cursor: pointer;
  text-decoration: underline;
  margin-top: -0.5rem;
}
html > body > main > dialog > .dialog-popup > .right-side .blac:hover {
  color: rgba(42, 43, 44, 0.6);
}

.pop-active {
  opacity: 1;
  pointer-events: all;
}

@media (max-width: 1439px) {
  html > body > main > dialog {
    padding: 5% 1rem;
  }
}
@media (max-width: 1023px) {
  html > body > main > dialog > .dialog-popup > .right-side {
    padding: 3rem;
  }
  html > body > main > dialog > .dialog-popup > .right-side > form.register > ul.fields > .password-wrap {
    gap: 1rem;
  }
}
@media (max-width: 639px) {
  html > body > main > dialog {
    padding: 0;
  }
  html > body > main > dialog > .dialog-popup {
    grid-template-columns: 1fr;
  }
  html > body > main > dialog > .dialog-popup > .left-side {
    height: 35rem;
  }
  html > body > main > dialog > .dialog-popup > .left-side > .close {
    right: 0;
  }
  html > body > main > dialog > .dialog-popup > .right-side {
    padding: 3rem 2rem;
  }
  html > body > main > dialog > .dialog-popup > .right-side > form.register {
    min-height: 37rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/modules/dialog_popup/my-dialog_popup.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE,aAAA;EACA,sBAAA;ADAF;;ACGA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE;IACE,kBAAA;IACA,mBAAA;EDAF;ECGA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDDF;ECIA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDFF;AACF;AErCA;EACE,4BAAA;EACA,gBAAA;EACA,+DAAA;AFuCF;AEpCA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;AFsCF;AEnCA;EACE,6BAAA;EACA,gBAAA;EACA,+DAAA;AFqCF;AElCA;EACE,gCAAA;EACA,gBAAA;EACA,+DAAA;AFoCF;AEjCA;EACE,6BAAA;EACA,iBAAA;AFmCF;;AEjCA;EACE,6BAAA;EACA,iBAAA;EACA,iBAAA;AFoCF;;AElCA;EACE,sBAAA;EACA,iBAAA;AFqCF;;AEnCA;EACE,6BAAA;EACA,iBAAA;AFsCF;;AEpCA;EACE,6BAAA;EACA,iBAAA;AFuCF;;AErCA;EACE,4BAAA;EACA,eAAA;AFwCF;;AEtCA;EACE,6BAAA;EACA,iBAAA;AFyCF;;AEvCA;EACE,sBAAA;EACA,eAAA;EACA,iBAAA;AF0CF;;AExCA;EACE,sBAAA;EACA,iBAAA;AF2CF;;AEzCA;EACE,sBAAA;EACA,iBAAA;AF4CF;;AE1CA;EACE,sBAAA;EACA,iBAAA;AF6CF;;AE3CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AF8CF;;AE5CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AF+CF;;AE5CA;EACE;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,4BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EF+CF;AACF;ACpMA;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;EACE,aAAA;EACA,sBAAA;ADqMF;;AClMA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;EACE;IACE,kBAAA;IACA,mBAAA;EDqMF;EClMA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDoMF;ECjMA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDmMF;AACF;AGvPA;EACE,aAAA;EACA,sBAAA;EACA,yBCLY;AJ8Pd;;AGtPA;EACE,SAAA;EACA,gBAAA;AHyPF;;AAnQA;EACE,uCAAA;EACA,eAAA;EACA,QAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,4BAAA;EACA,uBAAA;EACA,yBAAA;EACA,cAAA;EAEA,UAAA;EACA,oBAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,gBAAA;AAqQF;AAnQE;EACE,WAAA;EACA,gBAAA;EACA,yBIvBU;EJwBV,kBAAA;EACA,mBIdQ;EJeR,aAAA;EACA,iBAAA;EACA,qCAAA;EACA,iBAAA;EACA,kBAAA;AAqQJ;AAnQI;EACE,aAAA;AAqQN;AAlQI;EACE,sBAAA;EACA,2BAAA;EACA,YAAA;EACA,mBI7BM;EJ8BN,aAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;AAoQN;AAlQM;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,MAAA;EACA,YAAA;AAoQR;AAjQM;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBIjDI;EJkDJ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,iBAAA;AAmQR;AAhQM;EAEE,cItEM;EJuEN,kBAAA;EACA,YAAA;AAiQR;AA/PQ;EAEE,iBAAA;EACA,eAAA;EACA,0BAAA;EACA,cI/EI;AJ+Ud;AA9PU;EACE,+BAAA;AAgQZ;AA1PI;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AA4PN;AA1PM;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AA4PR;AA3PQ;EAEE,kBAAA;EACA,4BAAA;EACA,qBAAA;AA4PV;AAxPM;EACE,iBAAA;AA0PR;AAvPM;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,WAAA;AAyPR;AAtPM;EAEE,cIxHM;EJyHN,oBAAA;EACA,iBAAA;EACA,eAAA;EACA,0BAAA;EACA,mBAAA;AAuPR;AArPQ;EACE,4BAAA;AAuPV;;AAhPA;EACE,UAAA;EACA,mBAAA;AAmPF;;AAhPA;EACE;IACE,gBAAA;EAmPF;AACF;AAjPA;EACE;IACE,aAAA;EAmPF;EAhPA;IASE,SAAA;EA0OF;AACF;AAxOA;EACE;IACE,UAAA;EA0OF;EAxOE;IACE,0BAAA;EA0OJ;EAxOI;IACE,aAAA;EA0ON;EAxOM;IACE,QAAA;EA0OR;EAvOI;IACE,kBAAA;EAyON;EAvOM;IACE,iBAAA;EAyOR;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/footer/my-footer.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/footer/my-footer.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Light.ttf */ "./src/assets/font/TTHoves-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Regular.ttf */ "./src/assets/font/TTHoves-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Medium.ttf */ "./src/assets/font/TTHoves-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-ExtraBold.ttf */ "./src/assets/font/TTHoves-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@font-face {
  font-family: "TTHoves Light";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "TTHoves";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Medium";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Extrabold";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
h1 {
  font-family: "TTHoves Medium";
  font-size: 4.2rem;
}

.font-h1-poster {
  font-family: "TTHoves Medium";
  font-size: 3.2rem;
  line-height: 107%;
}

.font-h1-hero {
  font-family: "TTHoves";
  font-size: 3.5rem;
}

.font-h2-mini {
  font-family: "TTHoves Medium";
  font-size: 1.8rem;
}

h2 {
  font-family: "TTHoves Medium";
  font-size: 2.4rem;
}

.font-p1-hero {
  font-family: "TTHoves Light";
  font-size: 2rem;
}

.font-p1-medium {
  font-family: "TTHoves Medium";
  font-size: 2.2rem;
}

.font-p1, html > body > footer#footer > div.top > article .value {
  font-family: "TTHoves";
  font-size: 2rem;
  line-height: 150%;
}

.font-p2, html > body > footer#footer > div.top > article .label {
  font-family: "TTHoves";
  font-size: 1.6rem;
}

.font-p3 {
  font-family: "TTHoves";
  font-size: 1.5rem;
}

.font-button {
  font-family: "TTHoves";
  font-size: 1.4rem;
}

.font-filters {
  font-family: "TTHoves";
  font-size: 1.5rem;
  text-transform: uppercase;
}

.font-label {
  font-family: "TTHoves";
  font-size: 1.3rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  h1 {
    font-family: "TTHoves Medium";
    font-size: 2.5rem;
  }
  .font-h1-poster {
    font-family: "TTHoves Medium";
    font-size: 2.2rem;
    line-height: 107%;
  }
  .font-h1-hero {
    font-family: "TTHoves";
    font-size: 2.5rem;
  }
  h2 {
    font-family: "TTHoves Medium";
    font-size: 1.7rem;
  }
  .font-p1-hero {
    font-family: "TTHoves Light";
    font-size: 2.6rem;
  }
  .font-p1-medium {
    font-family: "TTHoves Medium";
    font-size: 1.5rem;
  }
  .font-p1, html > body > footer#footer > div.top > article .value {
    font-family: "TTHoves";
    font-size: 1.5rem;
    line-height: 150%;
  }
  .font-p2, html > body > footer#footer > div.top > article .label {
    font-family: "TTHoves";
    font-size: 1.4rem;
  }
  .font-p3 {
    font-family: "TTHoves";
    font-size: 1.2rem;
  }
  .font-button {
    font-family: "TTHoves";
    font-size: 1.3rem;
  }
  .font-filters {
    font-family: "TTHoves";
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .font-label {
    font-family: "TTHoves";
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
body {
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
}

html {
  /* 10px */
  font-size: 62.5%;
}

html > body > footer#footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2A2B2C;
  padding-top: 5rem;
  padding-bottom: 1rem;
}
html > body > footer#footer > div.top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  margin-bottom: 9%;
}
html > body > footer#footer > div.top > article > ul {
  display: flex;
  justify-content: space-between;
}
html > body > footer#footer > div.top > article > ul > li > a:hover {
  color: rgba(250, 250, 250, 0.5);
}
html > body > footer#footer > div.top > article > a:hover {
  color: rgba(250, 250, 250, 0.5);
}
html > body > footer#footer > div.top > article .label {
  color: rgba(250, 250, 250, 0.5);
  margin-bottom: 0.6rem;
}
html > body > footer#footer > div.top > article .value {
  color: #FAFAFA;
}
html > body > footer#footer > div.top > article.long {
  width: 35%;
}
html > body > footer#footer > svg {
  width: 100%;
}
html > body > footer#footer > svg > path {
  fill: #FAFAFA;
  opacity: 0.8;
  transition: fill 1s cubic-bezier(0.7, 0, 0.7, 0.7);
}
html > body > footer#footer > svg:hover path {
  fill: white !important;
}

@media (max-width: 800px) {
  html > body > footer#footer > div.top {
    max-width: 54rem;
    margin-bottom: 15%;
  }
  html > body > footer#footer > div.top > article.long {
    width: 100%;
    max-width: 35rem;
  }
  html > body > footer#footer > svg > path {
    fill: white;
    opacity: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/modules/footer/my-footer.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/header/my-header.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/header/my-header.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Light.ttf */ "./src/assets/font/TTHoves-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Regular.ttf */ "./src/assets/font/TTHoves-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Medium.ttf */ "./src/assets/font/TTHoves-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-ExtraBold.ttf */ "./src/assets/font/TTHoves-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@font-face {
  font-family: "TTHoves Light";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "TTHoves";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Medium";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Extrabold";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
h1 {
  font-family: "TTHoves Medium";
  font-size: 4.2rem;
}

.font-h1-poster {
  font-family: "TTHoves Medium";
  font-size: 3.2rem;
  line-height: 107%;
}

.font-h1-hero {
  font-family: "TTHoves";
  font-size: 3.5rem;
}

.font-h2-mini {
  font-family: "TTHoves Medium";
  font-size: 1.8rem;
}

h2 {
  font-family: "TTHoves Medium";
  font-size: 2.4rem;
}

.font-p1-hero {
  font-family: "TTHoves Light";
  font-size: 2rem;
}

.font-p1-medium {
  font-family: "TTHoves Medium";
  font-size: 2.2rem;
}

.font-p1, html > body > header#header > .left > nav > ul.sidebar > li > a {
  font-family: "TTHoves";
  font-size: 2rem;
  line-height: 150%;
}

.font-p2 {
  font-family: "TTHoves";
  font-size: 1.6rem;
}

.font-p3 {
  font-family: "TTHoves";
  font-size: 1.5rem;
}

.font-button, html > body > header#header > .left > nav > ul.wide > li > a {
  font-family: "TTHoves";
  font-size: 1.4rem;
}

.font-filters {
  font-family: "TTHoves";
  font-size: 1.5rem;
  text-transform: uppercase;
}

.font-label {
  font-family: "TTHoves";
  font-size: 1.3rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  h1 {
    font-family: "TTHoves Medium";
    font-size: 2.5rem;
  }
  .font-h1-poster {
    font-family: "TTHoves Medium";
    font-size: 2.2rem;
    line-height: 107%;
  }
  .font-h1-hero {
    font-family: "TTHoves";
    font-size: 2.5rem;
  }
  h2 {
    font-family: "TTHoves Medium";
    font-size: 1.7rem;
  }
  .font-p1-hero {
    font-family: "TTHoves Light";
    font-size: 2.6rem;
  }
  .font-p1-medium {
    font-family: "TTHoves Medium";
    font-size: 1.5rem;
  }
  .font-p1, html > body > header#header > .left > nav > ul.sidebar > li > a {
    font-family: "TTHoves";
    font-size: 1.5rem;
    line-height: 150%;
  }
  .font-p2 {
    font-family: "TTHoves";
    font-size: 1.4rem;
  }
  .font-p3 {
    font-family: "TTHoves";
    font-size: 1.2rem;
  }
  .font-button, html > body > header#header > .left > nav > ul.wide > li > a {
    font-family: "TTHoves";
    font-size: 1.3rem;
  }
  .font-filters {
    font-family: "TTHoves";
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .font-label {
    font-family: "TTHoves";
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
body {
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
}

html {
  /* 10px */
  font-size: 62.5%;
}

html > body > header#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.7rem 0;
  background-color: #FAFAFA;
  border-bottom: 0.07rem solid rgba(42, 43, 44, 0.2);
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.12));
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
html > body > header#header > .left {
  display: flex;
  width: 35%;
  justify-content: space-between;
}
html > body > header#header > .left > a {
  font-family: "TTHoves";
  font-size: 24px;
  font-family: "TTHoves Extrabold";
  color: #0E63E3;
  text-decoration: none;
  transition: 200ms;
}
html > body > header#header > .left > a:hover {
  color: #3DA2FF;
}
html > body > header#header > .left > nav {
  width: 42%;
  align-self: center;
}
html > body > header#header > .left > nav > ul.sidebar {
  position: absolute;
  top: 6.5rem;
  right: 0;
  left: 0;
  padding-bottom: 2rem;
  z-index: 80;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  justify-content: flex-start;
  transition: 0.2s ease;
}
html > body > header#header > .left > nav > ul.sidebar.active {
  max-height: 500px;
  opacity: 1;
  visibility: visible;
  transition: max-height 0.2s ease-in, opacity 0.3s ease-in;
}
html > body > header#header > .left > nav > ul.sidebar > li {
  width: 100%;
}
html > body > header#header > .left > nav > ul.sidebar > li.sidebar-hidden {
  display: none;
}
html > body > header#header > .left > nav > ul.sidebar > li.buttons {
  padding: 1rem 0 1rem 3.6rem;
}
html > body > header#header > .left > nav > ul.sidebar > li.buttons > .outline {
  margin-left: 1rem;
}
html > body > header#header > .left > nav > ul.sidebar > li > a {
  display: block;
  width: 100%;
  padding: 2rem 3.6rem;
  text-align: left;
  font-size: 1.6rem;
  text-decoration: none;
  color: #2A2B2C;
}
html > body > header#header > .left > nav > ul.sidebar > li > a:hover {
  background-color: rgba(42, 43, 44, 0.12);
}
html > body > header#header > .left > nav > ul.wide {
  display: flex;
  list-style: none;
  justify-content: space-between;
}
html > body > header#header > .left > nav > ul.wide > li > a {
  text-decoration: none;
  transition: 200ms;
  color: #2A2B2C;
}
html > body > header#header > .left > nav > ul.wide > li > a:hover {
  color: #0E63E3;
}
html > body > header#header > .button-area {
  display: flex;
  align-items: center;
  gap: 2.4rem;
}
html > body > header#header > .button-area > a.outline {
  margin-right: 3rem;
}
html > body > header#header > .button-area > .icons-wrapper {
  display: flex;
  gap: 31px;
}
html > body > header#header > .button-area > .icons-wrapper > a {
  cursor: pointer;
}
html > body > header#header > .button-area > .icons-wrapper > a > svg path {
  transition: 0.2s ease;
}
html > body > header#header > .button-area > .icons-wrapper > a > svg:hover path {
  stroke: #0E63E3;
}
html > body > header#header > .button-area > .separator {
  width: 1px;
  height: 32px;
  background-color: rgba(42, 43, 44, 0.12);
  margin: 0 5px;
}
html > body > header#header > .menu-button {
  display: none;
  position: relative;
  width: 4rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #FAFAFA;
}
html > body > header#header > .menu-button.active::before {
  transform: rotate(45deg);
  top: calc(50% - 2px);
}
html > body > header#header > .menu-button.active::after {
  transform: rotate(-45deg);
  top: calc(50% - 2px);
}
html > body > header#header > .menu-button.active > span {
  transform: scale(0);
}
html > body > header#header > .menu-button::before {
  content: "";
  position: absolute;
  width: 60%;
  height: 0.2rem;
  background-color: #2A2B2C;
  border-radius: 1rem;
  transition: all 0.2s ease;
  top: 1.2rem;
}
html > body > header#header > .menu-button > span {
  position: absolute;
  width: 60%;
  height: 0.2rem;
  background-color: #2A2B2C;
  border-radius: 1rem;
  transition: all 0.2s ease;
}
html > body > header#header > .menu-button::after {
  content: "";
  position: absolute;
  width: 60%;
  height: 0.2rem;
  background-color: #2A2B2C;
  border-radius: 1rem;
  transition: all 0.2s ease;
  bottom: 1.2rem;
}

@media (max-width: 1000px) {
  html > body > header#header > .menu-button {
    display: flex;
    cursor: pointer;
  }
  html > body > header#header > .left {
    width: auto;
  }
  html > body > header#header > .left > nav > ul.wide {
    display: none;
  }
  html > body > header#header > .button-area > .icons-wrapper {
    display: none;
  }
  html > body > header#header > .button-area > a.outline {
    margin-right: 0;
  }
}
@media (max-width: 730px) {
  html > body > header#header > .button-area {
    display: none;
  }
  html > body > header#header > .left > nav > ul.sidebar > li.sidebar-hidden {
    display: block;
  }
}
@media (min-width: 1001px) {
  html > body > header#header > .left > nav > ul.sidebar {
    display: none !important;
  }
}
@media (max-width: 639px) {
  html > body > header#header > .left > nav > ul.sidebar > li > a,
  html > body > header#header > .left > nav > ul.sidebar > li.buttons {
    padding-left: 1.6rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/modules/header/my-header.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE,aAAA;EACA,sBAAA;ADAF;;ACGA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE;IACE,kBAAA;IACA,mBAAA;EDAF;ECGA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDDF;ECIA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDFF;AACF;AErCA;EACE,4BAAA;EACA,gBAAA;EACA,+DAAA;AFuCF;AEpCA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;AFsCF;AEnCA;EACE,6BAAA;EACA,gBAAA;EACA,+DAAA;AFqCF;AElCA;EACE,gCAAA;EACA,gBAAA;EACA,+DAAA;AFoCF;AEjCA;EACE,6BAAA;EACA,iBAAA;AFmCF;;AEjCA;EACE,6BAAA;EACA,iBAAA;EACA,iBAAA;AFoCF;;AElCA;EACE,sBAAA;EACA,iBAAA;AFqCF;;AEnCA;EACE,6BAAA;EACA,iBAAA;AFsCF;;AEpCA;EACE,6BAAA;EACA,iBAAA;AFuCF;;AErCA;EACE,4BAAA;EACA,eAAA;AFwCF;;AEtCA;EACE,6BAAA;EACA,iBAAA;AFyCF;;AEvCA;EACE,sBAAA;EACA,eAAA;EACA,iBAAA;AF0CF;;AExCA;EACE,sBAAA;EACA,iBAAA;AF2CF;;AEzCA;EACE,sBAAA;EACA,iBAAA;AF4CF;;AE1CA;EACE,sBAAA;EACA,iBAAA;AF6CF;;AE3CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AF8CF;;AE5CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AF+CF;;AE5CA;EACE;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,4BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,6BAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EF+CF;EE7CA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EF+CF;AACF;ACpMA;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;EACE,aAAA;EACA,sBAAA;ADqMF;;AClMA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADqMF;;AClMA;EACE;IACE,kBAAA;IACA,mBAAA;EDqMF;EClMA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDoMF;ECjMA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDmMF;AACF;AGvPA;EACE,aAAA;EACA,sBAAA;EACA,yBCLY;AJ8Pd;;AGtPA;EACE,SAAA;EACA,gBAAA;AHyPF;;AAnQA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,yBILY;EJMZ,kDAAA;EACA,qDAAA;EACA,gBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AAsQF;AApQE;EACE,aAAA;EACA,UAAA;EACA,8BAAA;AAsQJ;AApQI;EACE,sBAAA;EACA,eAAA;EACA,gCAAA;EACA,cIzBS;EJ0BT,qBAAA;EACA,iBAAA;AAsQN;AApQM;EACE,cItBa;AJ4RrB;AAlQI;EACE,UAAA;EACA,kBAAA;AAoQN;AAlQM;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,OAAA;EACA,oBAAA;EACA,WAAA;EACA,yBI3CM;EJ4CN,aAAA;EACA,sBAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,oCAAA;EACA,2BAAA;EACA,qBIvCM;AJ2Sd;AAlQQ;EACE,iBAAA;EACA,UAAA;EACA,mBAAA;EACA,yDAAA;AAoQV;AAjQQ;EACE,WAAA;AAmQV;AAjQU;EACE,aAAA;AAmQZ;AAhQU;EACE,2BAAA;AAkQZ;AAhQY;EACE,iBAAA;AAkQd;AA9PU;EAEE,cAAA;EACA,WAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,cIpFE;AJmVd;AA7PY;EACE,wCAAA;AA+Pd;AAzPM;EACE,aAAA;EACA,gBAAA;EACA,8BAAA;AA2PR;AAzPQ;EAEE,qBAAA;EACA,iBAAA;EACA,cItGI;AJgWd;AAzPU;EACE,cIzGG;AJoWf;AApPE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AAsPJ;AApPI;EACE,kBAAA;AAsPN;AAnPI;EACE,aAAA;EACA,SAAA;AAqPN;AAnPM;EACE,eAAA;AAqPR;AAlPU;EACE,qBIpHE;AJwWd;AAhPY;EACE,eIvIC;AJyXf;AA3OI;EACE,UAAA;EACA,YAAA;EACA,wCAAA;EACA,aAAA;AA6ON;AAzOE;EACE,aAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,yBI5JU;AJuYd;AAxOM;EACE,wBAAA;EACA,oBAAA;AA0OR;AAvOM;EACE,yBAAA;EACA,oBAAA;AAyOR;AAtOM;EACE,mBAAA;AAwOR;AApOI;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,cAAA;EACA,yBIpLQ;EJqLR,mBAAA;EACA,yBAAA;EACA,WAAA;AAsON;AAnOI;EACE,kBAAA;EACA,UAAA;EACA,cAAA;EACA,yBI9LQ;EJ+LR,mBAAA;EACA,yBAAA;AAqON;AAlOI;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,cAAA;EACA,yBIxMQ;EJyMR,mBAAA;EACA,yBAAA;EACA,cAAA;AAoON;;AA/NA;EAEI;IACE,aAAA;IACA,eAAA;EAiOJ;EA/NE;IACE,WAAA;EAiOJ;EA/NI;IACE,aAAA;EAiON;EA9NE;IACE,aAAA;EAgOJ;EA9NE;IACE,eAAA;EAgOJ;AACF;AA7NA;EACE;IACE,aAAA;EA+NF;EA5NA;IACE,cAAA;EA8NF;AACF;AA3NA;EACE;IACE,wBAAA;EA6NF;AACF;AA1NA;EACE;;IAGE,oBAAA;EA2NF;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/person/my-person.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/person/my-person.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Light.ttf */ "./src/assets/font/TTHoves-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Regular.ttf */ "./src/assets/font/TTHoves-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Medium.ttf */ "./src/assets/font/TTHoves-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-ExtraBold.ttf */ "./src/assets/font/TTHoves-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@font-face {
  font-family: "TTHoves Light";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "TTHoves";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Medium";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Extrabold";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
h1 {
  font-family: "TTHoves Medium";
  font-size: 4.2rem;
}

.font-h1-poster {
  font-family: "TTHoves Medium";
  font-size: 3.2rem;
  line-height: 107%;
}

.font-h1-hero {
  font-family: "TTHoves";
  font-size: 3.5rem;
}

.font-h2-mini {
  font-family: "TTHoves Medium";
  font-size: 1.8rem;
}

h2 {
  font-family: "TTHoves Medium";
  font-size: 2.4rem;
}

.font-p1-hero {
  font-family: "TTHoves Light";
  font-size: 2rem;
}

.font-p1-medium {
  font-family: "TTHoves Medium";
  font-size: 2.2rem;
}

.font-p1, .person p {
  font-family: "TTHoves";
  font-size: 2rem;
  line-height: 150%;
}

.font-p2 {
  font-family: "TTHoves";
  font-size: 1.6rem;
}

.font-p3 {
  font-family: "TTHoves";
  font-size: 1.5rem;
}

.font-button {
  font-family: "TTHoves";
  font-size: 1.4rem;
}

.font-filters {
  font-family: "TTHoves";
  font-size: 1.5rem;
  text-transform: uppercase;
}

.font-label {
  font-family: "TTHoves";
  font-size: 1.3rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  h1 {
    font-family: "TTHoves Medium";
    font-size: 2.5rem;
  }
  .font-h1-poster {
    font-family: "TTHoves Medium";
    font-size: 2.2rem;
    line-height: 107%;
  }
  .font-h1-hero {
    font-family: "TTHoves";
    font-size: 2.5rem;
  }
  h2 {
    font-family: "TTHoves Medium";
    font-size: 1.7rem;
  }
  .font-p1-hero {
    font-family: "TTHoves Light";
    font-size: 2.6rem;
  }
  .font-p1-medium {
    font-family: "TTHoves Medium";
    font-size: 1.5rem;
  }
  .font-p1, .person p {
    font-family: "TTHoves";
    font-size: 1.5rem;
    line-height: 150%;
  }
  .font-p2 {
    font-family: "TTHoves";
    font-size: 1.4rem;
  }
  .font-p3 {
    font-family: "TTHoves";
    font-size: 1.2rem;
  }
  .font-button {
    font-family: "TTHoves";
    font-size: 1.3rem;
  }
  .font-filters {
    font-family: "TTHoves";
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .font-label {
    font-family: "TTHoves";
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
body {
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
}

html {
  /* 10px */
  font-size: 62.5%;
}

.person {
  padding-top: 2.5rem;
  padding-bottom: 6rem;
  display: flex;
  justify-content: space-between;
}
.person .left {
  display: flex;
  align-items: center;
}
.person .left .meta {
  margin-left: 3.3rem;
}
.person .left img {
  border-radius: 50%;
  width: 16rem;
  height: 16rem;
  object-fit: cover;
}
.person h1 {
  color: #2A2B2C;
  margin-bottom: 0.9rem;
}
.person p {
  color: rgba(42, 43, 44, 0.8);
  max-width: 42rem;
}`, "",{"version":3,"sources":["webpack://./src/modules/person/my-person.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/poster_bar/my-poster_bar.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/poster_bar/my-poster_bar.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Light.ttf */ "./src/assets/font/TTHoves-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Regular.ttf */ "./src/assets/font/TTHoves-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-Medium.ttf */ "./src/assets/font/TTHoves-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/font/TTHoves-ExtraBold.ttf */ "./src/assets/font/TTHoves-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@font-face {
  font-family: "TTHoves Light";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "TTHoves";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Medium";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "TTHoves Extrabold";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
h1 {
  font-family: "TTHoves Medium";
  font-size: 4.2rem;
}

.font-h1-poster {
  font-family: "TTHoves Medium";
  font-size: 3.2rem;
  line-height: 107%;
}

.font-h1-hero {
  font-family: "TTHoves";
  font-size: 3.5rem;
}

.font-h2-mini {
  font-family: "TTHoves Medium";
  font-size: 1.8rem;
}

h2 {
  font-family: "TTHoves Medium";
  font-size: 2.4rem;
}

.font-p1-hero {
  font-family: "TTHoves Light";
  font-size: 2rem;
}

.font-p1-medium {
  font-family: "TTHoves Medium";
  font-size: 2.2rem;
}

.font-p1 {
  font-family: "TTHoves";
  font-size: 2rem;
  line-height: 150%;
}

.font-p2 {
  font-family: "TTHoves";
  font-size: 1.6rem;
}

.font-p3 {
  font-family: "TTHoves";
  font-size: 1.5rem;
}

.font-button {
  font-family: "TTHoves";
  font-size: 1.4rem;
}

.font-filters {
  font-family: "TTHoves";
  font-size: 1.5rem;
  text-transform: uppercase;
}

.font-label {
  font-family: "TTHoves";
  font-size: 1.3rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  h1 {
    font-family: "TTHoves Medium";
    font-size: 2.5rem;
  }
  .font-h1-poster {
    font-family: "TTHoves Medium";
    font-size: 2.2rem;
    line-height: 107%;
  }
  .font-h1-hero {
    font-family: "TTHoves";
    font-size: 2.5rem;
  }
  h2 {
    font-family: "TTHoves Medium";
    font-size: 1.7rem;
  }
  .font-p1-hero {
    font-family: "TTHoves Light";
    font-size: 2.6rem;
  }
  .font-p1-medium {
    font-family: "TTHoves Medium";
    font-size: 1.5rem;
  }
  .font-p1 {
    font-family: "TTHoves";
    font-size: 1.5rem;
    line-height: 150%;
  }
  .font-p2 {
    font-family: "TTHoves";
    font-size: 1.4rem;
  }
  .font-p3 {
    font-family: "TTHoves";
    font-size: 1.2rem;
  }
  .font-button {
    font-family: "TTHoves";
    font-size: 1.3rem;
  }
  .font-filters {
    font-family: "TTHoves";
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .font-label {
    font-family: "TTHoves";
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.
*/
body {
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
}

main {
  display: flex;
  flex-direction: column;
}

html > body > main > section.gallery,
html > body > main > section.mail {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
}

html > body > header#header,
html > body > footer#footer {
  width: calc(100% + 72px);
  margin-left: -36px;
  margin-right: -36px;
  padding-left: 36px;
  padding-right: 36px;
}

@media (max-width: 639px) {
  body {
    padding-left: 16px;
    padding-right: 16px;
  }
  html > body > main > section.gallery,
  html > body > main > section.mail {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
body {
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
}

html {
  /* 10px */
  font-size: 62.5%;
}

html > body > main > section.poster-bar {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  column-gap: 2rem;
  row-gap: 5.8rem;
  margin-bottom: 8rem;
}`, "",{"version":3,"sources":["webpack://./src/modules/poster_bar/my-poster_bar.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0px;
  margin: 0px;
  border: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a, a:link, a:visited {
  text-decoration: none;
}

a {
  transition: 0.2s ease;
}

a:hover {
  text-decoration: none;
}

aside, nav, footer, header, section, main {
  display: block;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
}

ul, ul li {
  list-style: none;
}

img {
  width: 100%;
  height: auto;
  vertical-align: top;
}

img, svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

input, textarea, button, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

button, input[type=submit] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}

input:focus, input:active, button:focus, button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}`, "",{"version":3,"sources":["webpack://./src/styles/reset.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAGA;EAEC,YAAA;EACA,WAAA;EACA,YAAA;AAHD;;AAMA;;;EAIC,sBAAA;AAJD;;AAOA;EAEI,qBAAA;AALJ;;AAQA;EAEI,qBCVU;ADId;;AASA;EAEI,qBAAA;AAPJ;;AAUA;EAEC,cAAA;AARD;;AAWA;EAEI,kBAAA;EACH,oBAAA;AATD;;AAYA;EAEC,gBAAA;AAVD;;AAaA;EAEC,WAAA;EACA,YAAA;EACA,mBAAA;AAXD;;AAcA;EAEC,eAAA;EACA,YAAA;AAZD;;AAeA;EAEE,kBAAA;AAbF;;AAgBA;EAEC,oBAAA;EACG,kBAAA;EACA,cAAA;EACA,6BAAA;AAdJ;;AAiBA;EAEC,aAAA;AAfD;;AAkBA;EAEI,qBAAA;EACA,gBAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;AAhBJ;;AAmBA;EAEI,aAAA;AAjBJ;;AAoBA;EAEC,UAAA;EACA,SAAA;AAlBD;;AAqBA;EAEC,eAAA;AAnBD;;AAsBA;EAEC,cAAA;AApBD","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/my-mini_card/index.html":
/*!************************************************!*\
  !*** ./src/components/my-mini_card/index.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/image 65.png */ "./src/assets/img/image 65.png"), __webpack_require__.b);
// Module
var code = `<a
  href="/material/posters/american-architecture/index.html"
  title="American Architecture"
>
  <div class="product-card-container">
    <img src="${___HTML_LOADER_IMPORT_0___}" alt="American Architecture" />
    <button class="favorite-btn">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="heart"
          d="M16.5472 3.74902C13.5041 3.74902 12.0041 6.74902 12.0041 6.74902C12.0041 6.74902 10.5041 3.74902 7.46096 3.74902C4.98783 3.74902 3.02939 5.81809 3.00408 8.28699C2.95252 13.4118 7.06955 17.0564 11.5822 20.1192C11.7066 20.2038 11.8536 20.2491 12.0041 20.2491C12.1546 20.2491 12.3015 20.2038 12.426 20.1192C16.9381 17.0564 21.0552 13.4118 21.0041 8.28699C20.9788 5.81809 19.0203 3.74902 16.5472 3.74902Z"
          stroke="#2A2B2C"
          stroke-width="1.19514"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
  <footer class="product-info">
    <h2>American Architecture</h2>
    <div class="separator"></div>
    <div class="product-meta">
      <p class="author">@bomboсlat</p>
      <p class="price"><span>3 500</span> ₽</p>
    </div>
  </footer>
</a>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/modules/dialog_popup/forgot.html":
/*!**********************************************!*\
  !*** ./src/modules/dialog_popup/forgot.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/register-large.png */ "./src/assets/img/register-large.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/register-medium.png */ "./src/assets/img/register-medium.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/register-small.png */ "./src/assets/img/register-small.png"), __webpack_require__.b);
// Module
var code = `<div class="left-side">
  <button class="close">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3955 20.1135L4.43872 3.88623M20.3955 3.88623L4.43872 20.1135"
        stroke="#FAFAFA"
        stroke-width="1.19177"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  <picture>
    <source
      media="(min-width: 1200px)"
      srcset="${___HTML_LOADER_IMPORT_0___}"
    />
    <source
      media="(min-width: 768px)"
      srcset="${___HTML_LOADER_IMPORT_1___}"
    />
    <img src="${___HTML_LOADER_IMPORT_2___}" alt="register Image" />
  </picture>
  <p>Ещё не с нами? <span class="registerLink">Регистрируйтесь!</span></p>
</div>
<div class="right-side">
  <form action="">
    <h2>Забыли пароль</h2>
    <ul class="fields">
      <li class="text">
        <label for="name">Почта или никнейм</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Почта или никнейм"
          required
        />
        <span class="error-message"></span>
      </li>
    </ul>
    <button class="button normal custom" type="submit">
      Восстановить пароль
    </button>
    <span class="loginLink blac">Вернуться назад</span>
  </form>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/modules/dialog_popup/login.html":
/*!*********************************************!*\
  !*** ./src/modules/dialog_popup/login.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/login-large.png */ "./src/assets/img/login-large.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/login-medium.png */ "./src/assets/img/login-medium.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/login-small.png */ "./src/assets/img/login-small.png"), __webpack_require__.b);
// Module
var code = `<div class="left-side">
  <button class="close">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3955 20.1135L4.43872 3.88623M20.3955 3.88623L4.43872 20.1135"
        stroke="#FAFAFA"
        stroke-width="1.19177"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  <picture>
    <source
      media="(min-width: 1200px)"
      srcset="${___HTML_LOADER_IMPORT_0___}"
    />
    <source
      media="(min-width: 768px)"
      srcset="${___HTML_LOADER_IMPORT_1___}"
    />
    <img src="${___HTML_LOADER_IMPORT_2___}" alt="Login Image" />
  </picture>
  <p>Ещё не с нами? <span class="registerLink">Регистрируйтесь!</span></p>
</div>
<div class="right-side">
  <form action="" class="login">
    <h2>Вход</h2>
    <ul class="fields">
      <li class="text">
        <label for="name">Почта или никнейм</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Имя или никнейм"
          required
        />
        <span class="error-message"></span>
      </li>
      <li class="text">
        <label for="password">Пароль</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          required
        />
        <span class="error-message"></span>
      </li>
    </ul>
    <button class="button normal custom" type="submit">Войти</button>
    <span class="forgotLink blac">Забыли пароль?</span>
  </form>
  <div class="or-google">
    <p>ИЛИ</p>
    <button class="button outline custom">Войти через Google</button>
  </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/modules/dialog_popup/register.html":
/*!************************************************!*\
  !*** ./src/modules/dialog_popup/register.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/register-large.png */ "./src/assets/img/register-large.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/register-medium.png */ "./src/assets/img/register-medium.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/img/register-small.png */ "./src/assets/img/register-small.png"), __webpack_require__.b);
// Module
var code = `<div class="left-side">
  <button class="close">
    <svg>
      width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg" >
      <path
        d="M20.3955 20.1135L4.43872 3.88623M20.3955 3.88623L4.43872 20.1135"
        stroke="#FAFAFA"
        stroke-width="1.19177"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  <picture>
    <source
      media="(min-width: 1200px)"
      srcset="${___HTML_LOADER_IMPORT_0___}"
    />
    <source
      media="(min-width: 768px)"
      srcset="${___HTML_LOADER_IMPORT_1___}"
    />
    <img src="${___HTML_LOADER_IMPORT_2___}" alt="register Image" />
  </picture>
  <p>Уже с нами? <span class="loginLink">Входите!</span></p>
</div>
<div class="right-side">
  <form action="" class="register">
    <h2>Регистрация</h2>
    <ul class="fields">
      <li class="text">
        <label for="name">Никнейм</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Никнейм"
          required
        />
        <span class="error-message"></span>
      </li>
      <li class="text">
        <label for="email">Почта</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Почта"
          required
        />
        <span class="error-message"></span>
      </li>
      <li class="text password-wrap">
        <div class="text">
          <label for="password">Пароль</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            required
          />
          <span class="error-message"></span>
        </div>
        <div class="text">
          <label for="password2">Пароль</label>
          <input
            type="password"
            name="password2 id="
            password2
            placeholder="Пароль"
            required
          />
          <span class="error-message"></span>
        </div>
      </li>
    </ul>
    <button class="button normal custom" type="submit">
      Зарегестрироваться
    </button>
  </form>
  <div class="or-google">
    <p>ИЛИ</p>
    <button class="button outline custom">Войти через Google</button>
  </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/modules/footer/index.html":
/*!***************************************!*\
  !*** ./src/modules/footer/index.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="top">
  <article>
    <p class="label">Контакты</p>
    <a href="" class="value">alina.mikhaylova.03@mail.ru</a>
  </article>
  <article>
    <p class="label">Основательница</p>
    <p class="value">Михайлова Алина Р33662</p>
  </article>
  <article class="long">
    <p class="label">Социальные сети</p>
    <ul>
      <li><a href="" class="value">Instagram</a></li>
      <li><a href="" class="value">Vkontakte</a></li>
      <li><a href="" class="value">Telegram</a></li>
    </ul>
  </article>
</div>
<svg
  width="1249"
  height="180"
  viewBox="0 0 1249 180"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity="0.5"
    d="M1.30653 179V179.445H1.75098H42.3256H42.77V179V70.4004H47.0747L82.4775 179.138L82.5774 179.445H82.9001H120.939H121.262L121.361 179.138L156.764 70.4004H161.069V179V179.445H161.513H202.088H202.532V179V1.48633V1.04188H202.088H139.958H139.634L139.535 1.35017L104.132 111.354H99.7074L64.3039 1.35017L64.2047 1.04188H63.8808H1.75098H1.30653V1.48633V179ZM218.072 178.856L217.87 179.445H218.492H262.871H263.195L263.294 179.136L274.606 143.942H342.428L353.74 179.136L353.839 179.445H354.163H398.542H399.164L398.962 178.856L338.1 1.34218L337.997 1.04188H337.68H279.354H279.037L278.934 1.34218L218.072 178.856ZM436.295 179V179.445H436.739H477.314H477.758V179V41.2374H526.764H527.208V40.793V1.48633V1.04188H526.764H387.289H386.844V1.48633V40.793V41.2374H387.289H436.295V179ZM549.103 179V179.445H549.547H671.271H671.716V179V142.229V141.785H671.271H590.566V108.439H666.199H666.644V107.995V72.4919V72.0474H666.199H590.566V38.7015H671.271H671.716V38.2571V1.48633V1.04188H671.271H549.547H549.103V1.48633V179ZM701.159 179V179.445H701.603H742.178H742.622V179V122.387H747.05L797.635 179.295L797.768 179.445H797.968H848.686H849.695L849.014 178.7L795.074 119.743C803.601 118.648 811.572 115.959 818.985 111.676L818.994 111.67C835.717 101.432 844.059 84.9592 844.059 62.3482C844.059 43.9958 838.617 29.1692 827.703 17.914C816.79 6.65973 802.638 1.04188 785.288 1.04188H701.603H701.159V1.48633V179ZM796.88 78.7843L796.879 78.7849C793.251 82.7431 788.555 84.727 782.752 84.727H742.622V39.9694H782.752C788.549 39.9694 793.243 42.0332 796.873 46.1584L796.88 46.1655L796.886 46.1723C800.678 50.1287 802.595 55.5031 802.595 62.3482C802.595 69.1926 800.678 74.6561 796.88 78.7843ZM873.521 179V179.445H873.966H914.54H914.985V179V1.48633V1.04188H914.54H873.966H873.521V1.48633V179ZM930.554 178.856L930.352 179.445H930.974H975.353H975.677L975.776 179.136L987.088 143.942H1054.91L1066.22 179.136L1066.32 179.445H1066.65H1111.02H1111.65L1111.44 178.856L1050.58 1.34218L1050.48 1.04188H1050.16H991.836H991.519L991.416 1.34218L930.554 178.856ZM1127.11 179V179.445H1127.56H1248.01H1248.46V179V139.693V139.249H1248.01H1168.58V1.48633V1.04188H1168.13H1127.56H1127.11V1.48633V179ZM286.303 107.55L306.306 45.0413H310.728L330.731 107.55H286.303ZM1043.21 107.55H998.785L1018.79 45.0413H1023.21L1043.21 107.55Z"
    fill="#FAFAFA"
    stroke="#FAFAFA"
    stroke-width="0.888889"
  />
</svg>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/modules/header/index.html":
/*!***************************************!*\
  !*** ./src/modules/header/index.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="left">
  <a href="/material/index.html">MATERIAL</a>
  <nav>
    <ul class="sidebar">
      <li>
        <a href="/material/catalog/index.html">Каталог</a>
      </li>
      <li>
        <a href="#">О нас</a>
      </li>
      <li>
        <a href="/material/favorites/index.html">Избранное</a>
      </li>
      <li>
        <a href="/material/cart/index.html">Корзина</a>
      </li>
      <li class="sidebar-hidden">
        <a href="/material/create/index.html">Добавить постер</a>
      </li>
      <li class="sidebar-hidden buttons">
        <button class="button normal sidebarLoginBtn">Войти</button>
        <button class="button outline sidebarRegisterBtn">Регистрация</button>
      </li>
    </ul>
    <ul class="wide">
      <li>
        <a href="/material/catalog/index.html">Каталог</a>
      </li>
      <li>
        <a href="#">О нас</a>
      </li>
    </ul>
  </nav>
</div>

<div class="button-area">
  <a href="/material/create/index.html" class="button outline"
    >Добавить постер</a
  >

  <div class="icons-wrapper">
    <a href="/material/favourites/index.html">
      <svg
        class="heart"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5472 3.74902C13.5041 3.74902 12.0041 6.74902 12.0041 6.74902C12.0041 6.74902 10.5041 3.74902 7.46096 3.74902C4.98783 3.74902 3.02939 5.81809 3.00408 8.28699C2.95252 13.4118 7.06955 17.0564 11.5822 20.1192C11.7066 20.2038 11.8536 20.2491 12.0041 20.2491C12.1546 20.2491 12.3015 20.2038 12.426 20.1192C16.9381 17.0564 21.0552 13.4118 21.0041 8.28699C20.9788 5.81809 19.0203 3.74902 16.5472 3.74902Z"
          stroke="#2A2B2C"
          stroke-width="1.19514"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
    <a href="/material/cart/index.html">
      <svg
        class="cart"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.2464 20.249C8.66061 20.249 8.9964 19.9132 8.9964 19.499C8.9964 19.0848 8.66061 18.749 8.2464 18.749C7.83219 18.749 7.4964 19.0848 7.4964 19.499C7.4964 19.9132 7.83219 20.249 8.2464 20.249Z"
          fill="#2A2B2C"
          stroke="#2A2B2C"
          stroke-width="1.19514"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.8341 20.249C18.2483 20.249 18.5841 19.9132 18.5841 19.499C18.5841 19.0848 18.2483 18.749 17.8341 18.749C17.4199 18.749 17.0841 19.0848 17.0841 19.499C17.0841 19.9132 17.4199 20.249 17.8341 20.249Z"
          fill="#2A2B2C"
          stroke="#2A2B2C"
          stroke-width="1.19514"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.2464 3.74902H5.2464L7.4964 16.499H19.4964"
          stroke="#2A2B2C"
          stroke-width="1.19514"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.4964 13.5H19.1889C19.2756 13.5001 19.3597 13.4701 19.4268 13.4151C19.4939 13.3601 19.5398 13.2836 19.5569 13.1986L20.9069 6.44859C20.9178 6.39417 20.9164 6.338 20.903 6.28414C20.8895 6.23029 20.8643 6.18009 20.8291 6.13717C20.7939 6.09426 20.7496 6.05969 20.6994 6.03597C20.6492 6.01225 20.5944 5.99996 20.5389 6H5.9964"
          stroke="#2A2B2C"
          stroke-width="1.19514"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>

  <div class="separator"></div>

  <button class="button normal loginBtn">Войти</button>
  <button class="button outline registerBtn">Регистрация</button>
</div>
<button class="menu-button">
  <span></span>
</button>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/modules/person/index.html":
/*!***************************************!*\
  !*** ./src/modules/person/index.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/cat1.png */ "./src/assets/img/cat1.png"), __webpack_require__.b);
// Module
var code = `<div class="left">
  <img src="${___HTML_LOADER_IMPORT_0___}" alt="profile" />
  <div class="meta">
    <h1>Андрей Миронов</h1>
    <p>Уникальный дизайнер из Санкт-Петербурга. Готов к работе!</p>
  </div>
</div>
<div class="links"></div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/UI/my-button/my-button.scss":
/*!*****************************************!*\
  !*** ./src/UI/my-button/my-button.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/UI/my-button/my-button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/UI/my-form/my-form.scss":
/*!*************************************!*\
  !*** ./src/UI/my-form/my-form.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-form.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/UI/my-form/my-form.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/my-mini_card/my-mini-card.scss":
/*!*******************************************************!*\
  !*** ./src/components/my-mini_card/my-mini-card.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_mini_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-mini-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/my-mini_card/my-mini-card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_mini_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_mini_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_mini_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_mini_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/dialog_popup/my-dialog_popup.scss":
/*!*******************************************************!*\
  !*** ./src/modules/dialog_popup/my-dialog_popup.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_dialog_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-dialog_popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/dialog_popup/my-dialog_popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_dialog_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_dialog_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_dialog_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_dialog_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/footer/my-footer.scss":
/*!*******************************************!*\
  !*** ./src/modules/footer/my-footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/footer/my-footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/header/my-header.scss":
/*!*******************************************!*\
  !*** ./src/modules/header/my-header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/header/my-header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/person/my-person.scss":
/*!*******************************************!*\
  !*** ./src/modules/person/my-person.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_person_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-person.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/person/my-person.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_person_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_person_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_person_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_person_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/poster_bar/my-poster_bar.scss":
/*!***************************************************!*\
  !*** ./src/modules/poster_bar/my-poster_bar.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_bar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-poster_bar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/poster_bar/my-poster_bar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_bar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_bar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_bar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_bar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI/my-button/my-button.js":
/*!***************************************!*\
  !*** ./src/UI/my-button/my-button.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-button.scss */ "./src/UI/my-button/my-button.scss");


//UI-компонент "Кнопка"

// в принципе этим можно не пользоваться
function createButton(text, mode, isCustom) {
  const btn = document.createElement('button');
  btn.classList.add('button');

  setText(btn, text);
  setMode(btn, mode, isCustom);

  return btn;
}

function createA(text, mode, isCustom, link) {
  const a = document.createElement('a');
  a.classList.add('button');

  setText(a, text);
  setMode(a, mode, isCustom);
  setLink(a, link);

  return a;
}

function setText(btn, text) {
  btn.textContent = text;
}

function setMode(btn, mode, custom) {
  btn.classList.add(mode);

  if (custom) {
    btn.classList.add('custom');
  }
}

function setLink(a, link) {
  a.href = link;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createButton,
  createA,
});


/***/ }),

/***/ "./src/UI/my-form/my-form.js":
/*!***********************************!*\
  !*** ./src/UI/my-form/my-form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-form.scss */ "./src/UI/my-form/my-form.scss");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.js */ "./src/UI/my-form/validation.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_validation_js__WEBPACK_IMPORTED_MODULE_1__);



// function create(labelP, placeholderP){
//     const formm = document.createElement('form')
//     formm.classList.add('input-group')
//     const labelH = document.createElement('label')
//     formm.appendChild(labelH)
//     const inputH = document.createElement('input')
//     inputH.type = 'text';
//     formm.appendChild(inputH)
//     const spanH = document.createElement('span')
//     formm.appendChild(spanH)

//     setText(formm, labelP, placeholderP);

//     return formm;
// }

// function setText(formm, labelP, placeholderP){
//     const labelH = formm.querySelector('label')
//     const inputH = formm.querySelector('input')
    
//     labelH.textContent = labelP;
//     inputH.placeholder = placeholderP;
// }

// export default {
//     create
// }

/***/ }),

/***/ "./src/UI/my-form/validation.js":
/*!**************************************!*\
  !*** ./src/UI/my-form/validation.js ***!
  \**************************************/
/***/ (() => {



function setupFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!checkValidity(form)) {
        showCustomErrors(form);
      } else {
        form.submit(); 
      }
    });
  });
}

function checkValidity(form){

}
// // Показать кастомные ошибки в span для всех полей с name
// function showCustomErrors(form) {
//   const inputs = form.querySelectorAll('input['); // Поля с name

//   inputs.forEach(input => {
//     const errorSpan = getErrorSpan(input);

//     if (!input.validity.valid) {
//       showError(input, errorSpan);
//     } else {
//       clearError(errorSpan);
//     }
//   });
// }

// // Показать сообщение об ошибке
// function showError(input, errorSpan) {
//   let message = '';

//   if (input.validity.valueMissing) {
//     message = 'Поле обязательно для заполнения';
//   } else if (input.validity.typeMismatch) {
//     message = 'Введите корректное значение';
//   } else if (input.validity.tooShort) {
//     message = `Минимальная длина ${input.minLength} символов. Введено ${input.value.length}`;
//   } else if (input.validity.patternMismatch) {
//     message = 'Значение не соответствует формату';
//   }

//   errorSpan.textContent = message;
// }

// // Очистить сообщение об ошибке
// function clearError(errorSpan) {
//   errorSpan.textContent = '';
// }

// // Найти или создать span для сообщения об ошибке
// function getErrorSpan(input) {
//   let errorSpan = input.parentElement.querySelector('.error-message');
//   if (!errorSpan) {
//     errorSpan = document.createElement('span');
//     errorSpan.classList.add('error-message');
//     input.parentElement.appendChild(errorSpan);
//   }
//   return errorSpan;
// }

// // Запуск валидации при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//   setupFormValidation();
// });


/***/ }),

/***/ "./src/components/my-mini_card/my-mini_card.js":
/*!*****************************************************!*\
  !*** ./src/components/my-mini_card/my-mini_card.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_mini_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-mini-card.scss */ "./src/components/my-mini_card/my-mini-card.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/components/my-mini_card/index.html");



function create(poster) {
  const card = document.createElement('article');
  card.classList.add('product-card');
  card.id = 'post-123';
  card.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1__["default"];

  turnOnFavButton(card);
  if (poster){
      setData(card, poster);
  }

  return card;
}

function turnOnFavButton(card) {
  const fav = card.querySelector('.favorite-btn');
  fav.addEventListener('click', (event) => {
    event.preventDefault();
    fav.classList.toggle('fav-active');
  });
}

function setData(card, poster) {
  const nameHtml = card.querySelector('h2');
  const authorHtml = card.querySelector('.author');
  const priceHtml = card.querySelector('.price span');
  const imgHtml = card.querySelector('img');

  nameHtml.textContent = poster.title;
  authorHtml.textContent = poster.author;
  priceHtml.textContent = poster.price;
  imgHtml.src = poster.image;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
});


/***/ }),

/***/ "./src/modules/dialog_popup/my-dialog_popup.js":
/*!*****************************************************!*\
  !*** ./src/modules/dialog_popup/my-dialog_popup.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_dialog_popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-dialog_popup.scss */ "./src/modules/dialog_popup/my-dialog_popup.scss");
/* harmony import */ var _login_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.html */ "./src/modules/dialog_popup/login.html");
/* harmony import */ var _register_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.html */ "./src/modules/dialog_popup/register.html");
/* harmony import */ var _forgot_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.html */ "./src/modules/dialog_popup/forgot.html");
/* harmony import */ var _UI_my_form_my_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/my-form/my-form */ "./src/UI/my-form/my-form.js");
/* harmony import */ var _UI_my_button_my_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/my-button/my-button */ "./src/UI/my-button/my-button.js");








// import "./validation.js";

const contentMap = new Map([
  ['login', _login_html__WEBPACK_IMPORTED_MODULE_1__["default"]],
  ['register', _register_html__WEBPACK_IMPORTED_MODULE_2__["default"]],
  ['forgot', _forgot_html__WEBPACK_IMPORTED_MODULE_3__["default"]],
]);

function create() {
  const popupSystem = document.createElement('dialog');

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('main').appendChild(popupSystem);
  });

  contentMap.forEach((content, type) => {
    const newWindow = document.createElement('div');
    newWindow.innerHTML = content;
    newWindow.classList.add('dialog-popup', type);
    popupSystem.appendChild(newWindow);
  });

  addCloseLogic(popupSystem);
  setLinks(popupSystem);

  return popupSystem;
}

function addCloseLogic(popupSystem) {
  popupSystem.addEventListener('click', (event) => {
    if (!event.target.closest('.dialog-popup.active')) {
      closeAll(popupSystem);
    }
  });

  popupSystem.querySelectorAll(".close").forEach((btn) => {
    btn.addEventListener('click', () => {
      closeAll(popupSystem);
    })
  })

  popupSystem.querySelectorAll('.dialog-popup').forEach((dialog) => {
    dialog.addEventListener('click', (event) => event.stopPropagation());
  });
}

function setButtonAsOpener(popupSystem, type, button) {
  if (button) {
    button.addEventListener('click', () => openPopup(popupSystem, type));
  } else {
    console.error(`Button for type ${type} not found`);
  }
}

function setLinks(popupSystem) {
  ['register', 'login', 'forgot'].forEach((type) => {
    popupSystem.querySelectorAll(`.${type}Link`).forEach((link) => {
      setLinkAsOpener(popupSystem, type, link);
    });
  });
}

function setLinkAsOpener(popupSystem, type, link) {
  if (link) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      closeAll(popupSystem);
      openPopup(popupSystem, type);
    });
  } else {
    console.error(`Link for type ${type} not found`);
  }
}

function openPopup(popupSystem, type) {
  popupSystem.classList.add('pop-active');
  document.body.style.overflow = 'hidden';
  popupSystem.querySelector(`.${type}`).classList.add('active');
}

function closeAll(popupSystem) {
  popupSystem.classList.remove('pop-active');
  document.body.style.overflow = 'auto';
  popupSystem.querySelectorAll('.dialog-popup.active').forEach((dialog) => {
    dialog.classList.remove('active');
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
  setButtonAsOpener,
});


/***/ }),

/***/ "./src/modules/footer/my-footer.js":
/*!*****************************************!*\
  !*** ./src/modules/footer/my-footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-footer.scss */ "./src/modules/footer/my-footer.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/modules/footer/index.html");



function create() {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1__["default"];

  document.addEventListener('DOMContentLoaded', () => {
    if (footer) {
      const svgPath = footer.querySelector('svg path');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            svgPath.style.fill = 'transparent';
          } else {
            svgPath.style.fill = 'white';
          }
        });
      }, {
        threshold: 0.7
      });
  
      observer.observe(footer);
    } 
  });
  return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
});


/***/ }),

/***/ "./src/modules/header/my-header.js":
/*!*****************************************!*\
  !*** ./src/modules/header/my-header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-header.scss */ "./src/modules/header/my-header.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/modules/header/index.html");
/* harmony import */ var _dialog_popup_my_dialog_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog_popup/my-dialog_popup */ "./src/modules/dialog_popup/my-dialog_popup.js");




function create() {
  const header = document.createElement('header');
  header.id = 'header';
  header.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1__["default"];

  const dialogs = _dialog_popup_my_dialog_popup__WEBPACK_IMPORTED_MODULE_2__["default"].create();

  const loginBtn = header.querySelector('.loginBtn');
  const registerBtn = header.querySelector('.registerBtn');
  const sidebarLoginBtn = header.querySelector('.sidebarLoginBtn');
  const sidebarRegisterBtn = header.querySelector('.sidebarRegisterBtn');
  // const forgotBtn = header.querySelector('.forgotBtn');

  _dialog_popup_my_dialog_popup__WEBPACK_IMPORTED_MODULE_2__["default"].setButtonAsOpener(dialogs, 'login', loginBtn);
  _dialog_popup_my_dialog_popup__WEBPACK_IMPORTED_MODULE_2__["default"].setButtonAsOpener(dialogs, 'register', registerBtn);
  _dialog_popup_my_dialog_popup__WEBPACK_IMPORTED_MODULE_2__["default"].setButtonAsOpener(dialogs, 'login', sidebarLoginBtn);
  _dialog_popup_my_dialog_popup__WEBPACK_IMPORTED_MODULE_2__["default"].setButtonAsOpener(dialogs, 'register', sidebarRegisterBtn);
  // myDialog_popup.setAsOpener(dialogs, 'forgot', forgotBtn);

  addSideBar(header);

  return header;
}

function addSideBar(header) {
  const icon = header.querySelector('.menu-button');
  const sidebar = header.querySelector('.sidebar');

  icon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    icon.classList.toggle('active');
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
});


/***/ }),

/***/ "./src/modules/person/my-person.js":
/*!*****************************************!*\
  !*** ./src/modules/person/my-person.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_person_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-person.scss */ "./src/modules/person/my-person.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/modules/person/index.html");



function create(photo, name, description, mail, website, tg){
    const person = document.createElement('article')
    person.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1__["default"];
    person.classList.add('person')

    return person;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    create
});

/***/ }),

/***/ "./src/modules/poster_bar/my-poster_bar.js":
/*!*************************************************!*\
  !*** ./src/modules/poster_bar/my-poster_bar.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_poster_bar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-poster_bar.scss */ "./src/modules/poster_bar/my-poster_bar.scss");


function create(posters_array){
    var bar = document.createElement('section')
    bar.classList.add('poster-bar')
    setPosters(bar, posters_array)

    return bar;
}

function setPosters(bar, posters_array){
    posters_array.forEach(elem => {
        bar.appendChild(elem);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    create
});

/***/ }),

/***/ "./src/assets/font/TTHoves-ExtraBold.ttf":
/*!***********************************************!*\
  !*** ./src/assets/font/TTHoves-ExtraBold.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d065fa41b16fbd51e41d.ttf";

/***/ }),

/***/ "./src/assets/font/TTHoves-Light.ttf":
/*!*******************************************!*\
  !*** ./src/assets/font/TTHoves-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff447b186f99becf2ff2.ttf";

/***/ }),

/***/ "./src/assets/font/TTHoves-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/font/TTHoves-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c84646119459f89cd0d4.ttf";

/***/ }),

/***/ "./src/assets/font/TTHoves-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/font/TTHoves-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "22badb647628141aaacb.ttf";

/***/ }),

/***/ "./src/assets/img/cat1.png":
/*!*********************************!*\
  !*** ./src/assets/img/cat1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f54e6d2785e94e1c1248.png";

/***/ }),

/***/ "./src/assets/img/image 65.png":
/*!*************************************!*\
  !*** ./src/assets/img/image 65.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7e6d6cf0bc04d3dd49a5.png";

/***/ }),

/***/ "./src/assets/img/login-large.png":
/*!****************************************!*\
  !*** ./src/assets/img/login-large.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "36d44d386b216590da35.png";

/***/ }),

/***/ "./src/assets/img/login-medium.png":
/*!*****************************************!*\
  !*** ./src/assets/img/login-medium.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5501d8f2f5e785b0d1c2.png";

/***/ }),

/***/ "./src/assets/img/login-small.png":
/*!****************************************!*\
  !*** ./src/assets/img/login-small.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3f7b1be684def4015d6b.png";

/***/ }),

/***/ "./src/assets/img/register-large.png":
/*!*******************************************!*\
  !*** ./src/assets/img/register-large.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0173dc15ee8c0428359.png";

/***/ }),

/***/ "./src/assets/img/register-medium.png":
/*!********************************************!*\
  !*** ./src/assets/img/register-medium.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9da89a2054e08878b7cd.png";

/***/ }),

/***/ "./src/assets/img/register-small.png":
/*!*******************************************!*\
  !*** ./src/assets/img/register-small.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f5f49733e47534bf60b.png";

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/material/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"person": 0
/******/ 		};
/******/ 		
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************************!*\
  !*** ./src/pages/people/miron_dis/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _modules_person_my_person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/person/my-person */ "./src/modules/person/my-person.js");
/* harmony import */ var _modules_poster_bar_my_poster_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/poster_bar/my-poster_bar */ "./src/modules/poster_bar/my-poster_bar.js");
/* harmony import */ var _components_my_mini_card_my_mini_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/my-mini_card/my-mini_card */ "./src/components/my-mini_card/my-mini_card.js");
/* harmony import */ var _modules_header_my_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/header/my-header */ "./src/modules/header/my-header.js");
/* harmony import */ var _modules_footer_my_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/footer/my-footer */ "./src/modules/footer/my-footer.js");









const body = document.querySelector('body');
const main = document.createElement('main');

const posters = [
  _components_my_mini_card_my_mini_card__WEBPACK_IMPORTED_MODULE_3__["default"].create(),
  _components_my_mini_card_my_mini_card__WEBPACK_IMPORTED_MODULE_3__["default"].create(),
  _components_my_mini_card_my_mini_card__WEBPACK_IMPORTED_MODULE_3__["default"].create(),
];

const person = _modules_person_my_person__WEBPACK_IMPORTED_MODULE_1__["default"].create();
body.appendChild(_modules_header_my_header__WEBPACK_IMPORTED_MODULE_4__["default"].create())
body.appendChild(main);
main.appendChild(person);
main.appendChild(_modules_poster_bar_my_poster_bar__WEBPACK_IMPORTED_MODULE_2__["default"].create(posters));
body.appendChild(_modules_footer_my_footer__WEBPACK_IMPORTED_MODULE_5__["default"].create())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxUUFBcVEsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sc0JBQXNCO0FBQzdyRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFZ2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpUUFBaVEsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sUUFBUSxXQUFXLE1BQU0sUUFBUSxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLHNCQUFzQjtBQUN2dkY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pXdkM7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsK0pBQXFEO0FBQ2pHLDRDQUE0QyxtS0FBdUQ7QUFDbkcsNENBQTRDLGlLQUFzRDtBQUNsRyw0Q0FBNEMsdUtBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1SQUFtUixVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLFFBQVEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyx1QkFBdUI7QUFDbCtGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvV3ZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtUkFBbVIsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxzQkFBc0I7QUFDaGhIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvYXZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVRQUF1USxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLHNCQUFzQjtBQUN4c0Y7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BWdkM7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsK0pBQXFEO0FBQ2pHLDRDQUE0QyxtS0FBdUQ7QUFDbkcsNENBQTRDLGlLQUFzRDtBQUNsRyw0Q0FBNEMsdUtBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVRQUF1USxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sc0JBQXNCO0FBQzE4SDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGV2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1UUFBdVEsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsdUJBQXVCO0FBQ3I3RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalR2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK1FBQStRLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQzlGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDcENuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNwQztBQUN5RDtBQUNXO0FBQ0k7QUFDaEI7QUFDQTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZFQUFXO0FBQ2IsRUFBRSw2RUFBVztBQUNiLEVBQUUsNkVBQVc7QUFDYjtBQUNBO0FBQ0EsZUFBZSxpRUFBUTtBQUN2QixpQkFBaUIsaUVBQVE7QUFDekI7QUFDQTtBQUNBLGlCQUFpQix5RUFBVztBQUM1QixpQkFBaUIsaUVBQVEsVSIsInNvdXJjZXMiOlsid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9VSS9teS1idXR0b24vbXktYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9jb21wb25lbnRzL215LW1pbmlfY2FyZC9teS1taW5pLWNhcmQuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9kaWFsb2dfcG9wdXAvbXktZGlhbG9nX3BvcHVwLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZm9vdGVyL215LWZvb3Rlci5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9wZXJzb24vbXktcGVyc29uLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvcG9zdGVyX2Jhci9teS1wb3N0ZXJfYmFyLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvY29tcG9uZW50cy9teS1taW5pX2NhcmQvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9kaWFsb2dfcG9wdXAvZm9yZ290Lmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL3JlZ2lzdGVyLmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZm9vdGVyL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvaGVhZGVyL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvcGVyc29uL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWJ1dHRvbi9teS1idXR0b24uc2Nzcz8wY2UxIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9VSS9teS1mb3JtL215LWZvcm0uc2Nzcz83Njg2Iiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9jb21wb25lbnRzL215LW1pbmlfY2FyZC9teS1taW5pLWNhcmQuc2Nzcz81YzM2Iiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2RpYWxvZ19wb3B1cC9teS1kaWFsb2dfcG9wdXAuc2Nzcz81ZDM2Iiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2Zvb3Rlci9teS1mb290ZXIuc2Nzcz9iYTAwIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXIuc2Nzcz83YWNmIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL3BlcnNvbi9teS1wZXJzb24uc2Nzcz9hYjViIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL3Bvc3Rlcl9iYXIvbXktcG9zdGVyX2Jhci5zY3NzPzI0ZjUiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzP2UzMzEiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktYnV0dG9uL215LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktZm9ybS9teS1mb3JtLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9VSS9teS1mb3JtL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL2NvbXBvbmVudHMvbXktbWluaV9jYXJkL215LW1pbmlfY2FyZC5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9kaWFsb2dfcG9wdXAvbXktZGlhbG9nX3BvcHVwLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2Zvb3Rlci9teS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvaGVhZGVyL215LWhlYWRlci5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9wZXJzb24vbXktcGVyc29uLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL3Bvc3Rlcl9iYXIvbXktcG9zdGVyX2Jhci5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9wYWdlcy9wZW9wbGUvbWlyb25fZGlzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24sIC5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24sIC5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFNjNFMztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC45cmVtIDIuMXJlbSAxcmVtIDIuMXJlbTtcbiAgY29sb3I6ICNGQUZBRkE7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0RBMkZGO1xuICBib3JkZXItcmFkaXVzOiAwLjMzMzMzMzMzMzNyZW07XG59XG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRGQzY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBvcGFjaXR5OiA0MCU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMzcsIDM3LCAyMTMsIDAuMik7XG59XG4uYnV0dG9uLm91dGxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBjb2xvcjogIzBFNjNFMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzBFNjNFMztcbiAgcGFkZGluZzogY2FsYygwLjlyZW0gLSAxcHgpIGNhbGMoMi4xcmVtIC0gMXB4KSBjYWxjKDFyZW0gLSAxcHgpIGNhbGMoMi4xcmVtIC0gMXB4KTtcbn1cbi5idXR0b24ub3V0bGluZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZmI7XG59XG4uYnV0dG9uLm91dGxpbmU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDRlOTtcbn1cbi5idXR0b24ub3V0bGluZTpkaXNhYmxlZCB7XG4gIGJvcmRlci1jb2xvcjogIzJBMkIyQztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5idXR0b24ub3V0bGluZTpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDM3LCAzNywgMjEzLCAwLjIpO1xufVxuLmJ1dHRvbi5jdXN0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0Ljg4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuYnV0dG9uLmN1c3RvbSB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvVUkvbXktYnV0dG9uL215LWJ1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEQUY7RUNHQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOztJQUVFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURGRjtBQUNGO0FFckNBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGdUNGO0FFcENBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGc0NGO0FFbkNBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGcUNGO0FFbENBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGb0NGO0FFakNBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRm1DRjs7QUVqQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZvQ0Y7O0FFbENBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRnFDRjs7QUVuQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FGc0NGOztBRXBDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZ1Q0Y7O0FFckNBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FGd0NGOztBRXRDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZ5Q0Y7O0FFdkNBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUYwQ0Y7O0FFeENBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRjJDRjs7QUV6Q0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FGNENGOztBRTFDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUY2Q0Y7O0FFM0NBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FGOENGOztBRTVDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRitDRjs7QUU1Q0E7RUFDRTtJQUNFLDZCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtFRitDRjtFRTdDQTtJQUNFLDRCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFRitDRjtFRTdDQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VGK0NGO0FBQ0Y7QUNwTUE7Ozs7O0NBQUE7QUFPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBRHFNRjs7QUNsTUE7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFRHFNRjtFQ2xNQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURvTUY7RUNqTUE7O0lBRUUsd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRG1NRjtBQUNGO0FHdlBBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDTFk7QUo4UGQ7O0FHdFBBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FIeVBGOztBQWxRQTtFQUVFLHlCSUxhO0VKTWIsbUJJT1U7RUpOVixrQ0FBQTtFQUNBLGNJTlk7RUpPWixZQUFBO0VBQ0EscUJJSVk7RUpIWixlQUFBO0VBQ0EscUJBQUE7QUFvUUY7QUFsUUU7RUFDRSx5QklQaUI7RUpRakIsOEJBQUE7QUFvUUo7QUFqUUU7RUFDRSx5QklYbUI7RUpZbkIsa0JBQUE7QUFtUUo7QUFoUUU7RUFDRSx5QklmbUI7RUpnQm5CLFlBQUE7RUFDQSxtQkFBQTtBQWtRSjtBQS9QRTtFQUNFLHlDQUFBO0FBaVFKO0FBOVBFO0VBQ0UseUJJakNVO0VKa0NWLGNJcENXO0VKcUNYLHlCQUFBO0VBQ0Esa0ZBQUE7QUFnUUo7QUE3UEk7RUFDRSx5QkFBQTtBQStQTjtBQTVQSTtFQUNFLHlCQUFBO0FBOFBOO0FBM1BJO0VBQ0UscUJJakRRO0VKa0RSLG1CQUFBO0FBNlBOO0FBMVBJO0VBQ0UseUNBQUE7QUE0UE47QUF4UEU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBMFBKOztBQXRQQTtFQUNFO0lBQ0UsWUFBQTtFQXlQRjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMywgZm9ybSB1bCBsaSBzcGFuLmVycm9yLW1lc3NhZ2UsIGZvcm0gdWwgLnRleHQgc3Bhbi5lcnJvci1tZXNzYWdlLCBmb3JtIHVsIGxpIGlucHV0LFxuZm9ybSB1bCBsaSB0ZXh0YXJlYSwgZm9ybSB1bCAudGV4dCBpbnB1dCxcbmZvcm0gdWwgLnRleHQgdGV4dGFyZWEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwsIGZvcm0gdWwgbGkgbGFiZWwsIGZvcm0gdWwgLnRleHQgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMsIGZvcm0gdWwgbGkgc3Bhbi5lcnJvci1tZXNzYWdlLCBmb3JtIHVsIC50ZXh0IHNwYW4uZXJyb3ItbWVzc2FnZSwgZm9ybSB1bCBsaSBpbnB1dCxcbiAgZm9ybSB1bCBsaSB0ZXh0YXJlYSwgZm9ybSB1bCAudGV4dCBpbnB1dCxcbiAgZm9ybSB1bCAudGV4dCB0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsLCBmb3JtIHVsIGxpIGxhYmVsLCBmb3JtIHVsIC50ZXh0IGxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbmh0bWwge1xuICAvKiAxMHB4ICovXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAyLjVyZW07XG59XG5mb3JtIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjRyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5mb3JtIHVsIGxpLCBmb3JtIHVsIC50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmZvcm0gdWwgbGkgbGFiZWwsIGZvcm0gdWwgLnRleHQgbGFiZWwge1xuICBjb2xvcjogcmdiYSg0MiwgNDMsIDQ0LCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5mb3JtIHVsIGxpIHRleHRhcmVhLCBmb3JtIHVsIC50ZXh0IHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBtaW4taGVpZ2h0OiA5cmVtO1xufVxuZm9ybSB1bCBsaSBpbnB1dCxcbmZvcm0gdWwgbGkgdGV4dGFyZWEsIGZvcm0gdWwgLnRleHQgaW5wdXQsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhIHtcbiAgcGFkZGluZzogMS4zcmVtIDEuNnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDQ0LCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuMDQpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbmZvcm0gdWwgbGkgaW5wdXQuaW52YWxpZCxcbmZvcm0gdWwgbGkgdGV4dGFyZWEuaW52YWxpZCwgZm9ybSB1bCAudGV4dCBpbnB1dC5pbnZhbGlkLFxuZm9ybSB1bCAudGV4dCB0ZXh0YXJlYS5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1NGUxZjtcbn1cbmZvcm0gdWwgbGkgaW5wdXQuc3VjY2VzcyxcbmZvcm0gdWwgbGkgdGV4dGFyZWEuc3VjY2VzcywgZm9ybSB1bCAudGV4dCBpbnB1dC5zdWNjZXNzLFxuZm9ybSB1bCAudGV4dCB0ZXh0YXJlYS5zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmVhZDQ4O1xufVxuZm9ybSB1bCBsaSBpbnB1dDpkaXNhYmxlZCxcbmZvcm0gdWwgbGkgdGV4dGFyZWE6ZGlzYWJsZWQsIGZvcm0gdWwgLnRleHQgaW5wdXQ6ZGlzYWJsZWQsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbmZvcm0gdWwgbGkgaW5wdXQ6aG92ZXIsXG5mb3JtIHVsIGxpIHRleHRhcmVhOmhvdmVyLCBmb3JtIHVsIC50ZXh0IGlucHV0OmhvdmVyLFxuZm9ybSB1bCAudGV4dCB0ZXh0YXJlYTpob3ZlciB7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoNDIsIDQzLCA0NCwgMC42KTtcbn1cbmZvcm0gdWwgbGkgaW5wdXQ6Zm9jdXMsXG5mb3JtIHVsIGxpIHRleHRhcmVhOmZvY3VzLCBmb3JtIHVsIC50ZXh0IGlucHV0OmZvY3VzLFxuZm9ybSB1bCAudGV4dCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDAuMnJlbSBzb2xpZCByZ2JhKDM3LCAzNywgMjEzLCAwLjIpO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMEU2M0UzO1xufVxuZm9ybSB1bCBsaSBzcGFuLmVycm9yLW1lc3NhZ2UsIGZvcm0gdWwgLnRleHQgc3Bhbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjZTU0ZTFmO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGZvcm0ge1xuICAgIGdhcDogMS44cmVtO1xuICB9XG4gIGZvcm0gdWwge1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9VSS9teS1mb3JtL215LWZvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JlZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjs7Ozs7Q0FBQTtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBREFGOztBQ0dBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFREFGO0VDR0E7O0lBRUUsd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEREY7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c0JBQUE7QUEwUU47QUF4UU87RUFFQyw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUF5UVI7QUF0UU87RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7QUF3UVI7QUFyUU87OztFQUdDLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CSXZCSTtFSndCSixXQUFBO0FBdVFSO0FBclFROzs7RUFDRSx5QkFBQTtBQXlRVjtBQXRRUTs7O0VBQ0UscUJBQUE7QUEwUVY7QUF2UVE7OztFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUEyUVY7QUF4UVE7OztFQUNFLDBDQUFBO0FBNFFWO0FBMVFROzs7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0FBOFFWO0FBMVFPO0VBRUMsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUEyUVI7O0FBclFBO0VBQ0U7SUFDRSxXQUFBO0VBd1FGO0VBdFFHO0lBQ0MsU0FBQTtFQXdRSjtFQXBRQTs7SUFFRSxzQkFBQTtFQXNRRjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSwgLnByb2R1Y3QtY2FyZCA+IGEgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gaDIsIC5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLnByaWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5mb250LXAxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtcDEtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5mb250LXAxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4uZm9udC1wMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5mb250LXAzLCAucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiAucHJvZHVjdC1tZXRhID4gcC5hdXRob3Ige1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMsIC5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLmF1dGhvciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbmh0bWwge1xuICAvKiAxMHB4ICovXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3QtY2FyZCA+IGEgPiAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMkEyQjJDLCAjMWIxYjFiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0JTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gLnByb2R1Y3QtY2FyZC1jb250YWluZXIgPiAuZmF2b3JpdGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBoZWlnaHQ6IDRyZW07XG4gIHdpZHRoOiA0cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzJBMkIyQztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyID4gLmZhdm9yaXRlLWJ0biA+IHN2ZyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gLnByb2R1Y3QtY2FyZC1jb250YWluZXIgPiAuZmF2b3JpdGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyID4gLmZhdm9yaXRlLWJ0bi5mYXYtYWN0aXZlIHN2ZyBwYXRoIHtcbiAgZmlsbDogIzJBMkIyQztcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyB7XG4gIHBhZGRpbmctdG9wOiAxLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS40cmVtO1xufVxuLnByb2R1Y3QtY2FyZCA+IGEgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gLnByb2R1Y3QtbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLmF1dGhvciB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuNSk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLnByaWNlIHtcbiAgY29sb3I6ICMyQTJCMkM7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5zZXBhcmF0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjA3cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiBoMiB7XG4gIGNvbG9yOiAjMkEyQjJDO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IHAge1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhOmhvdmVyID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IGgyLFxuLnByb2R1Y3QtY2FyZCA+IGE6aG92ZXIgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gLnByb2R1Y3QtbWV0YSA+IHAuYXV0aG9yLFxuLnByb2R1Y3QtY2FyZCA+IGE6aG92ZXIgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gLnByb2R1Y3QtbWV0YSA+IHAucHJpY2Uge1xuICBjb2xvcjogIzBFNjNFMztcbn1cbi5wcm9kdWN0LWNhcmQgPiBhOmhvdmVyID4gLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzJTtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhOmhvdmVyID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5zZXBhcmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCA5OSwgMjI3LCAwLjUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbXktbWluaV9jYXJkL215LW1pbmktY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEQUY7RUNHQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOztJQUVFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURGRjtBQUNGO0FFckNBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGdUNGO0FFcENBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGc0NGO0FFbkNBO0VBQ0UsNkJBQUE7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QUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW1RUjtBQWpRUTtFQUNFLGVBQUE7QUFtUVY7QUFoUVE7RUFDRSx5Qkk3Q0k7RUo4Q0osMEJBQUE7QUFrUVY7QUE5UFU7RUFDRSxhSXBERTtBSm9UZDtBQTFQSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQTRQTjtBQTFQTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQTRQUjtBQTFQUTtFQUVFLDRCQUFBO0VBQ0EscUJJMURJO0FKcVRkO0FBeFBRO0VBRUUsY0k1RUk7RUo2RUoscUJJaEVJO0FKeVRkO0FBclBNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCSXhFTTtBSitUZDtBQXBQTTtFQUVFLGNJMUZNO0VKMkZOLG1DQUFBO0FBcVBSO0FBbFBNO0VBQ0UsbUNBQUE7QUFvUFI7QUEvT007OztFQUdFLGNJeEdPO0FKeVZmO0FBOU9NO0VBQ0UsV0FBQTtBQWdQUjtBQTdPTTtFQUNFLHdDQUFBO0FBK09SXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIsIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSAuYmxhYywgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiBwID4gc3BhbiwgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiBwIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwsIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSA+IC5vci1nb29nbGUgPiBwIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZm9udC1oMS1wb3N0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEwNyU7XG4gIH1cbiAgLmZvbnQtaDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5mb250LXAxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgfVxuICAuZm9udC1wMS1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmZvbnQtcDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiwgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlIC5ibGFjLCBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAgPiBzcGFuLCBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsLCBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiAub3ItZ29vZ2xlID4gcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuNSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNyUgMXJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5NnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xuICBtaW4taGVpZ2h0OiA1NHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAuYWN0aXZlIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiAuY2xvc2Uge1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogNHJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gcGljdHVyZSA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAge1xuICBjb2xvcjogI0ZBRkFGQTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDRyZW07XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAgPiBzcGFuIHtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjRkFGQUZBO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiBwID4gc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNik7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUge1xuICBwYWRkaW5nOiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiAub3ItZ29vZ2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiAub3ItZ29vZ2xlID4gcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlID4gZm9ybS5yZWdpc3RlciB7XG4gIG1pbi1oZWlnaHQ6IDQxcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlID4gZm9ybS5yZWdpc3RlciA+IHVsLmZpZWxkcyA+IC5wYXNzd29yZC13cmFwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlIC5ibGFjIHtcbiAgY29sb3I6ICMyQTJCMkM7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLXRvcDogLTAuNXJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSAuYmxhYzpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuNik7XG59XG5cbi5wb3AtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cge1xuICAgIHBhZGRpbmc6IDUlIDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSA+IGZvcm0ucmVnaXN0ZXIgPiB1bC5maWVsZHMgPiAucGFzc3dvcmQtd3JhcCB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlIHtcbiAgICBoZWlnaHQ6IDM1cmVtO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gLmNsb3NlIHtcbiAgICByaWdodDogMDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUge1xuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiBmb3JtLnJlZ2lzdGVyIHtcbiAgICBtaW4taGVpZ2h0OiAzN3JlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEQUY7RUNHQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOztJQUVFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURGRjtBQUNGO0FFckNBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGdUNGO0FFcENBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGc0NGO0FFbkNB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RUFDRTtJQUNFLFVBQUE7RUEwT0Y7RUF4T0U7SUFDRSwwQkFBQTtFQTBPSjtFQXhPSTtJQUNFLGFBQUE7RUEwT047RUF4T007SUFDRSxRQUFBO0VBME9SO0VBdk9JO0lBQ0Usa0JBQUE7RUF5T047RUF2T007SUFDRSxpQkFBQTtFQXlPUjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSwgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLnZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4uZm9udC1wMiwgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSwgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLnZhbHVlIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIsIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlIC5sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZvbnQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmZvbnQtZmlsdGVycyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmZvbnQtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDklO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgPiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlID4gdWwgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlIC5sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlIC52YWx1ZSB7XG4gIGNvbG9yOiAjRkFGQUZBO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUubG9uZyB7XG4gIHdpZHRoOiAzNSU7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBzdmcge1xuICB3aWR0aDogMTAwJTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IHN2ZyA+IHBhdGgge1xuICBmaWxsOiAjRkFGQUZBO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IGZpbGwgMXMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC43LCAwLjcpO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gc3ZnOmhvdmVyIHBhdGgge1xuICBmaWxsOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCB7XG4gICAgbWF4LXdpZHRoOiA1NHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUubG9uZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgfVxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBzdmcgPiBwYXRoIHtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9mb290ZXIvbXktZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2Vi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TUY7O0FDbE1BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEcU1GO0VDbE1BOztJQUVFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRG9NRjtFQ2pNQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEbU1GO0FBQ0Y7QUd2UEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkNMWTtBSjhQZDs7QUd0UEE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUh5UEY7O0FBblFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QklMWTtFSk1aLGlCQUFBO0VBQ0Esb0JBQUE7QUFzUUY7QUFwUUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXNRSjtBQW5RTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQXFRUjtBQW5RUTtFQUNFLCtCQUFBO0FBcVFWO0FBalFNO0VBQ0UsK0JBQUE7QUFtUVI7QUFoUU07RUFFRSwrQkFBQTtFQUNBLHFCQUFBO0FBaVFSO0FBOVBNO0VBRUUsY0l0Q007QUpxU2Q7QUEzUEk7RUFDRSxVQUFBO0FBNlBOO0FBelBFO0VBQ0UsV0FBQTtBQTJQSjtBQXpQSTtFQUNFLGFJbkRRO0VKb0RSLFlBQUE7RUFDQSxrREFBQTtBQTJQTjtBQXZQTTtFQUNFLHNCQUFBO0FBeVBSOztBQWxQQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQXFQRjtFQW5QRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQXFQSjtFQWxQQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBb1BGO0FBQ0ZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBFeHRyYWJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogNC4ycmVtO1xufVxuXG4uZm9udC1oMS1wb3N0ZXIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEwNyU7XG59XG5cbi5mb250LWgxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xufVxuXG4uZm9udC1oMi1taW5pIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5mb250LXAxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtcDEtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5mb250LXAxLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24sIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwud2lkZSA+IGxpID4gYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZvbnQtYnV0dG9uLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUgPiBsaSA+IGEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuN3JlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIHNvbGlkIHJnYmEoNDIsIDQzLCA0NCwgMC4yKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEyKSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDM1JTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBhIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGNvbG9yOiAjMEU2M0UzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IDIwMG1zO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICMzREEyRkY7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiB7XG4gIHdpZHRoOiA0MiU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2LjVyZW07XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgei1pbmRleDogODA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhci5hY3RpdmUge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2UtaW4sIG9wYWNpdHkgMC4zcyBlYXNlLWluO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkge1xuICB3aWR0aDogMTAwJTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpLnNpZGViYXItaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpLmJ1dHRvbnMge1xuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAzLjZyZW07XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaS5idXR0b25zID4gLm91dGxpbmUge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpID4gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAzLjZyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMkEyQjJDO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkgPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDQ0LCAwLjEyKTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwud2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwud2lkZSA+IGxpID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG4gIGNvbG9yOiAjMkEyQjJDO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC53aWRlID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwRTYzRTM7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIuNHJlbTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IGEub3V0bGluZSB7XG4gIG1hcmdpbi1yaWdodDogM3JlbTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IC5pY29ucy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMXB4O1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIgPiBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIgPiBhID4gc3ZnIHBhdGgge1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiAuaWNvbnMtd3JhcHBlciA+IGEgPiBzdmc6aG92ZXIgcGF0aCB7XG4gIHN0cm9rZTogIzBFNjNFMztcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IC5zZXBhcmF0b3Ige1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC4xMik7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24uYWN0aXZlOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uLmFjdGl2ZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbi5hY3RpdmUgPiBzcGFuIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyQztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdG9wOiAxLjJyZW07XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24gPiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyQztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBib3R0b206IDEuMnJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gYS5vdXRsaW5lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzBweCkge1xuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkuc2lkZWJhci1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMXB4KSB7XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkgPiBhLFxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaS5idXR0b25zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNnJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvaGVhZGVyL215LWhlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEQUY7RUNHQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOztJQUVFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURGRjtBQUNGO0FFckNBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGdUNGO0FFcENBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGc0NGO0FFbkNBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGcUNGO0FFbENBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGb0NGO0FFakNBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRm1DRjs7QUVqQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZvQ0Y7O0FFbENBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRnFDRjs7QUVuQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FGc0NGOztBRXBDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZ1Q0Y7O0FFckNBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FGd0NGOztBRXRDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZ5Q0Y7O0FFdkNBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUYwQ0Y7O0FFeENBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRjJDRjs7QUV6Q0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FGNENGOztBRTFDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUY2Q0Y7O0FFM0NBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FGOENGOztBRTVDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRitDRjs7QUU1Q0E7RUFDRTtJQUNFLDZCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtFRitDRjtFRTdDQTtJQUNFLDRCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFRitDRjtFRTdDQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VGK0NGO0FBQ0Y7QUNwTUE7Ozs7O0NBQUE7QUFPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBRHFNRjs7QUNsTUE7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFRHFNRjtFQ2xNQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURvTUY7RUNqTUE7O0lBRUUsd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRG1NRjtBQUNGO0FHdlBBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDTFk7QUo4UGQ7O0FHdFBBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FIeVBGOztBQW5RQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QklMWTtFSk1aLGtEQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFzUUY7QUFwUUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBc1FKO0FBcFFJO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjSXpCUztFSjBCVCxxQkFBQTtFQUNBLGlCQUFBO0FBc1FOO0FBcFFNO0VBQ0UsY0l0QmE7QUo0UnJCO0FBbFFJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBb1FOO0FBbFFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkkzQ007RUo0Q04sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkl2Q007QUoyU2Q7QUFsUVE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlEQUFBO0FBb1FWO0FBalFRO0VBQ0UsV0FBQTtBQW1RVjtBQWpRVTtFQUNFLGFBQUE7QUFtUVo7QUFoUVU7RUFDRSwyQkFBQTtBQWtRWjtBQWhRWTtFQUNFLGlCQUFBO0FBa1FkO0FBOVBVO0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNJcEZFO0FKbVZkO0FBN1BZO0VBQ0Usd0NBQUE7QUErUGQ7QUF6UE07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQTJQUjtBQXpQUTtFQUVFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjSXRHSTtBSmdXZDtBQXpQVTtFQUNFLGNJekdHO0FKb1dmO0FBcFBFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXNQSjtBQXBQSTtFQUNFLGtCQUFBO0FBc1BOO0FBblBJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFxUE47QUFuUE07RUFDRSxlQUFBO0FBcVBSO0FBbFBVO0VBQ0UscUJJcEhFO0FKd1dkO0FBaFBZO0VBQ0UsZUl2SUM7QUp5WGY7QUEzT0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtBQTZPTjtBQXpPRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5Qkk1SlU7QUp1WWQ7QUF4T007RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0FBME9SO0FBdk9NO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQXlPUjtBQXRPTTtFQUNFLG1CQUFBO0FBd09SO0FBcE9JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QklwTFE7RUpxTFIsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFzT047QUFuT0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJJOUxRO0VKK0xSLG1CQUFBO0VBQ0EseUJBQUE7QUFxT047QUFsT0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCSXhNUTtFSnlNUixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQW9PTjs7QUEvTkE7RUFFSTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBaU9KO0VBL05FO0lBQ0UsV0FBQTtFQWlPSjtFQS9OSTtJQUNFLGFBQUE7RUFpT047RUE5TkU7SUFDRSxhQUFBO0VBZ09KO0VBOU5FO0lBQ0UsZUFBQTtFQWdPSjtBQUNGO0FBN05BO0VBQ0U7SUFDRSxhQUFBO0VBK05GO0VBNU5BO0lBQ0UsY0FBQTtFQThORjtBQUNGO0FBM05BO0VBQ0U7SUFDRSx3QkFBQTtFQTZORjtBQUNGO0FBMU5BO0VBQ0U7O0lBR0Usb0JBQUE7RUEyTkY7QUFDRlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEsIC5wZXJzb24gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxLCAucGVyc29uIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZvbnQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmZvbnQtZmlsdGVycyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmZvbnQtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuLnBlcnNvbiB7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucGVyc29uIC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wZXJzb24gLmxlZnQgLm1ldGEge1xuICBtYXJnaW4tbGVmdDogMy4zcmVtO1xufVxuLnBlcnNvbiAubGVmdCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNnJlbTtcbiAgaGVpZ2h0OiAxNnJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucGVyc29uIGgxIHtcbiAgY29sb3I6ICMyQTJCMkM7XG4gIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcbn1cbi5wZXJzb24gcCB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuOCk7XG4gIG1heC13aWR0aDogNDJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9wZXJzb24vbXktcGVyc29uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7Ozs7O0NBQUE7QUFPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QURBRjs7QUNHQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTs7RUFFRSx3QkFBQTtFQUNB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O0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQXNRRjtBQXJRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQXVRSjtBQXRRSTtFQUNFLG1CQUFBO0FBd1FOO0FBdFFJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBd1FOO0FBclFFO0VBQ0UsY0lwQlU7RUpxQlYscUJBQUE7QUF1UUo7QUFyUUU7RUFFRSw0QkFBQTtFQUNBLGdCQUFBO0FBc1FKXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbmh0bWwge1xuICAvKiAxMHB4ICovXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ucG9zdGVyLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNzBweCwgMWZyKSk7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIHJvdy1nYXA6IDUuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3Bvc3Rlcl9iYXIvbXktcG9zdGVyX2Jhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEQUY7RUNHQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOztJQUVFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURGRjtBQUNGO0FFckNBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGdUNGO0FFcENBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGc0NGO0FFbkNBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGcUNGO0FFbENBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGb0NGO0FFakNBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRm1DRjs7QUVqQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZvQ0Y7O0FFbENBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRnFDRjs7QUVuQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FGc0NGOztBRXBDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZ1Q0Y7O0FFckNBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FGd0NGOztBRXRDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZ5Q0Y7O0FFdkNBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUYwQ0Y7O0FFeENBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRjJDRjs7QUV6Q0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FGNENGOztBRTFDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUY2Q0Y7O0FFM0NBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FGOENGOztBRTVDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRitDRjs7QUU1Q0E7RUFDRTtJQUNFLDZCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtFRitDRjtFRTdDQTtJQUNFLDRCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFRitDRjtFRTdDQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUYrQ0Y7RUU3Q0E7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VGK0NGO0VFN0NBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VGK0NGO0FBQ0Y7QUNwTUE7Ozs7O0NBQUE7QUFPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBRHFNRjs7QUNsTUE7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEcU1GOztBQ2xNQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFRHFNRjtFQ2xNQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURvTUY7RUNqTUE7O0lBRUUsd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRG1NRjtBQUNGO0FHdlBBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDTFk7QUo4UGQ7O0FHdFBBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FIeVBGOztBQW5RQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXNRSlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYXNpZGUsIG5hdiwgZm9vdGVyLCBoZWFkZXIsIHNlY3Rpb24sIG1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbnVsLCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmltZywgc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmFkZHJlc3Mge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0OmFjdGl2ZSwgYnV0dG9uOmZvY3VzLCBidXR0b246YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRDs7QUFNQTs7O0VBSUMsc0JBQUE7QUFKRDs7QUFPQTtFQUVJLHFCQUFBO0FBTEo7O0FBUUE7RUFFSSxxQkNWVTtBRElkOztBQVNBO0VBRUkscUJBQUE7QUFQSjs7QUFVQTtFQUVDLGNBQUE7QUFSRDs7QUFXQTtFQUVJLGtCQUFBO0VBQ0gsb0JBQUE7QUFURDs7QUFZQTtFQUVDLGdCQUFBO0FBVkQ7O0FBYUE7RUFFQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBWEQ7O0FBY0E7RUFFQyxlQUFBO0VBQ0EsWUFBQTtBQVpEOztBQWVBO0VBRUUsa0JBQUE7QUFiRjs7QUFnQkE7RUFFQyxvQkFBQTtFQUNHLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBZEo7O0FBaUJBO0VBRUMsYUFBQTtBQWZEOztBQWtCQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWhCSjs7QUFtQkE7RUFFSSxhQUFBO0FBakJKOztBQW9CQTtFQUVDLFVBQUE7RUFDQSxTQUFBO0FBbEJEOztBQXFCQTtFQUVDLGVBQUE7QUFuQkQ7O0FBc0JBO0VBRUMsY0FBQTtBQXBCRFwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2UgNjUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBjb2RlID0gYDxhXHJcbiAgaHJlZj1cIi9tYXRlcmlhbC9wb3N0ZXJzL2FtZXJpY2FuLWFyY2hpdGVjdHVyZS9pbmRleC5odG1sXCJcclxuICB0aXRsZT1cIkFtZXJpY2FuIEFyY2hpdGVjdHVyZVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1jYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgPGltZyBzcmM9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiIGFsdD1cIkFtZXJpY2FuIEFyY2hpdGVjdHVyZVwiIC8+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZmF2b3JpdGUtYnRuXCI+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiaGVhcnRcIlxyXG4gICAgICAgICAgZD1cIk0xNi41NDcyIDMuNzQ5MDJDMTMuNTA0MSAzLjc0OTAyIDEyLjAwNDEgNi43NDkwMiAxMi4wMDQxIDYuNzQ5MDJDMTIuMDA0MSA2Ljc0OTAyIDEwLjUwNDEgMy43NDkwMiA3LjQ2MDk2IDMuNzQ5MDJDNC45ODc4MyAzLjc0OTAyIDMuMDI5MzkgNS44MTgwOSAzLjAwNDA4IDguMjg2OTlDMi45NTI1MiAxMy40MTE4IDcuMDY5NTUgMTcuMDU2NCAxMS41ODIyIDIwLjExOTJDMTEuNzA2NiAyMC4yMDM4IDExLjg1MzYgMjAuMjQ5MSAxMi4wMDQxIDIwLjI0OTFDMTIuMTU0NiAyMC4yNDkxIDEyLjMwMTUgMjAuMjAzOCAxMi40MjYgMjAuMTE5MkMxNi45MzgxIDE3LjA1NjQgMjEuMDU1MiAxMy40MTE4IDIxLjAwNDEgOC4yODY5OUMyMC45Nzg4IDUuODE4MDkgMTkuMDIwMyAzLjc0OTAyIDE2LjU0NzIgMy43NDkwMlpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGZvb3RlciBjbGFzcz1cInByb2R1Y3QtaW5mb1wiPlxyXG4gICAgPGgyPkFtZXJpY2FuIEFyY2hpdGVjdHVyZTwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1tZXRhXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwiYXV0aG9yXCI+QGJvbWJv0YFsYXQ8L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj48c3Bhbj4zIDUwMDwvc3Bhbj4g4oK9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb290ZXI+XHJcbjwvYT5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1sYXJnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItbWVkaXVtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1zbWFsbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiPlxyXG4gICAgPHN2Z1xyXG4gICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTIwLjM5NTUgMjAuMTEzNUw0LjQzODcyIDMuODg2MjNNMjAuMzk1NSAzLjg4NjIzTDQuNDM4NzIgMjAuMTEzNVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiI0ZBRkFGQVwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTE3N1wiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9idXR0b24+XHJcbiAgPHBpY3R1cmU+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogMTIwMHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX199XCJcclxuICAgIC8+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY4cHgpXCJcclxuICAgICAgc3Jjc2V0PVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fX31cIlxyXG4gICAgLz5cclxuICAgIDxpbWcgc3JjPVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fX31cIiBhbHQ9XCJyZWdpc3RlciBJbWFnZVwiIC8+XHJcbiAgPC9waWN0dXJlPlxyXG4gIDxwPtCV0YnRkSDQvdC1INGBINC90LDQvNC4PyA8c3BhbiBjbGFzcz1cInJlZ2lzdGVyTGlua1wiPtCg0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCE8L3NwYW4+PC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJpZ2h0LXNpZGVcIj5cclxuICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgIDxoMj7Ql9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMPC9oMj5cclxuICAgIDx1bCBjbGFzcz1cImZpZWxkc1wiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj7Qn9C+0YfRgtCwINC40LvQuCDQvdC40LrQvdC10LnQvDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0YfRgtCwINC40LvQuCDQvdC40LrQvdC10LnQvFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbm9ybWFsIGN1c3RvbVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAg0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINC/0LDRgNC+0LvRjFxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBjbGFzcz1cImxvZ2luTGluayBibGFjXCI+0JLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LQ8L3NwYW4+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9sb2dpbi1sYXJnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvbG9naW4tbWVkaXVtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9sb2dpbi1zbWFsbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiPlxyXG4gICAgPHN2Z1xyXG4gICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTIwLjM5NTUgMjAuMTEzNUw0LjQzODcyIDMuODg2MjNNMjAuMzk1NSAzLjg4NjIzTDQuNDM4NzIgMjAuMTEzNVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiI0ZBRkFGQVwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTE3N1wiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9idXR0b24+XHJcbiAgPHBpY3R1cmU+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogMTIwMHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX199XCJcclxuICAgIC8+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY4cHgpXCJcclxuICAgICAgc3Jjc2V0PVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fX31cIlxyXG4gICAgLz5cclxuICAgIDxpbWcgc3JjPVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fX31cIiBhbHQ9XCJMb2dpbiBJbWFnZVwiIC8+XHJcbiAgPC9waWN0dXJlPlxyXG4gIDxwPtCV0YnRkSDQvdC1INGBINC90LDQvNC4PyA8c3BhbiBjbGFzcz1cInJlZ2lzdGVyTGlua1wiPtCg0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCE8L3NwYW4+PC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJpZ2h0LXNpZGVcIj5cclxuICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cImxvZ2luXCI+XHJcbiAgICA8aDI+0JLRhdC+0LQ8L2gyPlxyXG4gICAgPHVsIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCf0L7Rh9GC0LAg0LjQu9C4INC90LjQutC90LXQudC8PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRjyDQuNC70Lgg0L3QuNC60L3QtdC50LxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBjdXN0b21cIiB0eXBlPVwic3VibWl0XCI+0JLQvtC50YLQuDwvYnV0dG9uPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmb3Jnb3RMaW5rIGJsYWNcIj7Ql9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMPzwvc3Bhbj5cclxuICA8L2Zvcm0+XHJcbiAgPGRpdiBjbGFzcz1cIm9yLWdvb2dsZVwiPlxyXG4gICAgPHA+0JjQm9CYPC9wPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBvdXRsaW5lIGN1c3RvbVwiPtCS0L7QudGC0Lgg0YfQtdGA0LXQtyBHb29nbGU8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItbGFyZ2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1nL3JlZ2lzdGVyLW1lZGl1bS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItc21hbGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJsZWZ0LXNpZGVcIj5cclxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIj5cclxuICAgIDxzdmc+XHJcbiAgICAgIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yMC4zOTU1IDIwLjExMzVMNC40Mzg3MiAzLjg4NjIzTTIwLjM5NTUgMy44ODYyM0w0LjQzODcyIDIwLjExMzVcIlxyXG4gICAgICAgIHN0cm9rZT1cIiNGQUZBRkFcIlxyXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTkxNzdcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxwaWN0dXJlPlxyXG4gICAgPHNvdXJjZVxyXG4gICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDEyMDBweClcIlxyXG4gICAgICBzcmNzZXQ9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiXHJcbiAgICAvPlxyXG4gICAgPHNvdXJjZVxyXG4gICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDc2OHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX199XCJcclxuICAgIC8+XHJcbiAgICA8aW1nIHNyYz1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX199XCIgYWx0PVwicmVnaXN0ZXIgSW1hZ2VcIiAvPlxyXG4gIDwvcGljdHVyZT5cclxuICA8cD7Qo9C20LUg0YEg0L3QsNC80Lg/IDxzcGFuIGNsYXNzPVwibG9naW5MaW5rXCI+0JLRhdC+0LTQuNGC0LUhPC9zcGFuPjwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyaWdodC1zaWRlXCI+XHJcbiAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJyZWdpc3RlclwiPlxyXG4gICAgPGgyPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2gyPlxyXG4gICAgPHVsIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCd0LjQutC90LXQudC8PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LjQutC90LXQudC8XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj7Qn9C+0YfRgtCwPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7Rh9GC0LBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dCBwYXNzd29yZC13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZDJcIj7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZDIgaWQ9XCJcclxuICAgICAgICAgICAgcGFzc3dvcmQyXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBub3JtYWwgY3VzdG9tXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICDQl9Cw0YDQtdCz0LXRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuICA8ZGl2IGNsYXNzPVwib3ItZ29vZ2xlXCI+XHJcbiAgICA8cD7QmNCb0Jg8L3A+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG91dGxpbmUgY3VzdG9tXCI+0JLQvtC50YLQuCDRh9C10YDQtdC3IEdvb2dsZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwidG9wXCI+XHJcbiAgPGFydGljbGU+XHJcbiAgICA8cCBjbGFzcz1cImxhYmVsXCI+0JrQvtC90YLQsNC60YLRizwvcD5cclxuICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cInZhbHVlXCI+YWxpbmEubWlraGF5bG92YS4wM0BtYWlsLnJ1PC9hPlxyXG4gIDwvYXJ0aWNsZT5cclxuICA8YXJ0aWNsZT5cclxuICAgIDxwIGNsYXNzPVwibGFiZWxcIj7QntGB0L3QvtCy0LDRgtC10LvRjNC90LjRhtCwPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJ2YWx1ZVwiPtCc0LjRhdCw0LnQu9C+0LLQsCDQkNC70LjQvdCwINCgMzM2NjI8L3A+XHJcbiAgPC9hcnRpY2xlPlxyXG4gIDxhcnRpY2xlIGNsYXNzPVwibG9uZ1wiPlxyXG4gICAgPHAgY2xhc3M9XCJsYWJlbFwiPtCh0L7RhtC40LDQu9GM0L3Ri9C1INGB0LXRgtC4PC9wPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cIlwiIGNsYXNzPVwidmFsdWVcIj5JbnN0YWdyYW08L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJcIiBjbGFzcz1cInZhbHVlXCI+VmtvbnRha3RlPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiXCIgY2xhc3M9XCJ2YWx1ZVwiPlRlbGVncmFtPC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvYXJ0aWNsZT5cclxuPC9kaXY+XHJcbjxzdmdcclxuICB3aWR0aD1cIjEyNDlcIlxyXG4gIGhlaWdodD1cIjE4MFwiXHJcbiAgdmlld0JveD1cIjAgMCAxMjQ5IDE4MFwiXHJcbiAgZmlsbD1cIm5vbmVcIlxyXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4+XHJcbiAgPHBhdGhcclxuICAgIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgZD1cIk0xLjMwNjUzIDE3OVYxNzkuNDQ1SDEuNzUwOThINDIuMzI1Nkg0Mi43N1YxNzlWNzAuNDAwNEg0Ny4wNzQ3TDgyLjQ3NzUgMTc5LjEzOEw4Mi41Nzc0IDE3OS40NDVIODIuOTAwMUgxMjAuOTM5SDEyMS4yNjJMMTIxLjM2MSAxNzkuMTM4TDE1Ni43NjQgNzAuNDAwNEgxNjEuMDY5VjE3OVYxNzkuNDQ1SDE2MS41MTNIMjAyLjA4OEgyMDIuNTMyVjE3OVYxLjQ4NjMzVjEuMDQxODhIMjAyLjA4OEgxMzkuOTU4SDEzOS42MzRMMTM5LjUzNSAxLjM1MDE3TDEwNC4xMzIgMTExLjM1NEg5OS43MDc0TDY0LjMwMzkgMS4zNTAxN0w2NC4yMDQ3IDEuMDQxODhINjMuODgwOEgxLjc1MDk4SDEuMzA2NTNWMS40ODYzM1YxNzlaTTIxOC4wNzIgMTc4Ljg1NkwyMTcuODcgMTc5LjQ0NUgyMTguNDkySDI2Mi44NzFIMjYzLjE5NUwyNjMuMjk0IDE3OS4xMzZMMjc0LjYwNiAxNDMuOTQySDM0Mi40MjhMMzUzLjc0IDE3OS4xMzZMMzUzLjgzOSAxNzkuNDQ1SDM1NC4xNjNIMzk4LjU0MkgzOTkuMTY0TDM5OC45NjIgMTc4Ljg1NkwzMzguMSAxLjM0MjE4TDMzNy45OTcgMS4wNDE4OEgzMzcuNjhIMjc5LjM1NEgyNzkuMDM3TDI3OC45MzQgMS4zNDIxOEwyMTguMDcyIDE3OC44NTZaTTQzNi4yOTUgMTc5VjE3OS40NDVINDM2LjczOUg0NzcuMzE0SDQ3Ny43NThWMTc5VjQxLjIzNzRINTI2Ljc2NEg1MjcuMjA4VjQwLjc5M1YxLjQ4NjMzVjEuMDQxODhINTI2Ljc2NEgzODcuMjg5SDM4Ni44NDRWMS40ODYzM1Y0MC43OTNWNDEuMjM3NEgzODcuMjg5SDQzNi4yOTVWMTc5Wk01NDkuMTAzIDE3OVYxNzkuNDQ1SDU0OS41NDdINjcxLjI3MUg2NzEuNzE2VjE3OVYxNDIuMjI5VjE0MS43ODVINjcxLjI3MUg1OTAuNTY2VjEwOC40MzlINjY2LjE5OUg2NjYuNjQ0VjEwNy45OTVWNzIuNDkxOVY3Mi4wNDc0SDY2Ni4xOTlINTkwLjU2NlYzOC43MDE1SDY3MS4yNzFINjcxLjcxNlYzOC4yNTcxVjEuNDg2MzNWMS4wNDE4OEg2NzEuMjcxSDU0OS41NDdINTQ5LjEwM1YxLjQ4NjMzVjE3OVpNNzAxLjE1OSAxNzlWMTc5LjQ0NUg3MDEuNjAzSDc0Mi4xNzhINzQyLjYyMlYxNzlWMTIyLjM4N0g3NDcuMDVMNzk3LjYzNSAxNzkuMjk1TDc5Ny43NjggMTc5LjQ0NUg3OTcuOTY4SDg0OC42ODZIODQ5LjY5NUw4NDkuMDE0IDE3OC43TDc5NS4wNzQgMTE5Ljc0M0M4MDMuNjAxIDExOC42NDggODExLjU3MiAxMTUuOTU5IDgxOC45ODUgMTExLjY3Nkw4MTguOTk0IDExMS42N0M4MzUuNzE3IDEwMS40MzIgODQ0LjA1OSA4NC45NTkyIDg0NC4wNTkgNjIuMzQ4MkM4NDQuMDU5IDQzLjk5NTggODM4LjYxNyAyOS4xNjkyIDgyNy43MDMgMTcuOTE0QzgxNi43OSA2LjY1OTczIDgwMi42MzggMS4wNDE4OCA3ODUuMjg4IDEuMDQxODhINzAxLjYwM0g3MDEuMTU5VjEuNDg2MzNWMTc5Wk03OTYuODggNzguNzg0M0w3OTYuODc5IDc4Ljc4NDlDNzkzLjI1MSA4Mi43NDMxIDc4OC41NTUgODQuNzI3IDc4Mi43NTIgODQuNzI3SDc0Mi42MjJWMzkuOTY5NEg3ODIuNzUyQzc4OC41NDkgMzkuOTY5NCA3OTMuMjQzIDQyLjAzMzIgNzk2Ljg3MyA0Ni4xNTg0TDc5Ni44OCA0Ni4xNjU1TDc5Ni44ODYgNDYuMTcyM0M4MDAuNjc4IDUwLjEyODcgODAyLjU5NSA1NS41MDMxIDgwMi41OTUgNjIuMzQ4MkM4MDIuNTk1IDY5LjE5MjYgODAwLjY3OCA3NC42NTYxIDc5Ni44OCA3OC43ODQzWk04NzMuNTIxIDE3OVYxNzkuNDQ1SDg3My45NjZIOTE0LjU0SDkxNC45ODVWMTc5VjEuNDg2MzNWMS4wNDE4OEg5MTQuNTRIODczLjk2Nkg4NzMuNTIxVjEuNDg2MzNWMTc5Wk05MzAuNTU0IDE3OC44NTZMOTMwLjM1MiAxNzkuNDQ1SDkzMC45NzRIOTc1LjM1M0g5NzUuNjc3TDk3NS43NzYgMTc5LjEzNkw5ODcuMDg4IDE0My45NDJIMTA1NC45MUwxMDY2LjIyIDE3OS4xMzZMMTA2Ni4zMiAxNzkuNDQ1SDEwNjYuNjVIMTExMS4wMkgxMTExLjY1TDExMTEuNDQgMTc4Ljg1NkwxMDUwLjU4IDEuMzQyMThMMTA1MC40OCAxLjA0MTg4SDEwNTAuMTZIOTkxLjgzNkg5OTEuNTE5TDk5MS40MTYgMS4zNDIxOEw5MzAuNTU0IDE3OC44NTZaTTExMjcuMTEgMTc5VjE3OS40NDVIMTEyNy41NkgxMjQ4LjAxSDEyNDguNDZWMTc5VjEzOS42OTNWMTM5LjI0OUgxMjQ4LjAxSDExNjguNThWMS40ODYzM1YxLjA0MTg4SDExNjguMTNIMTEyNy41NkgxMTI3LjExVjEuNDg2MzNWMTc5Wk0yODYuMzAzIDEwNy41NUwzMDYuMzA2IDQ1LjA0MTNIMzEwLjcyOEwzMzAuNzMxIDEwNy41NUgyODYuMzAzWk0xMDQzLjIxIDEwNy41NUg5OTguNzg1TDEwMTguNzkgNDUuMDQxM0gxMDIzLjIxTDEwNDMuMjEgMTA3LjU1WlwiXHJcbiAgICBmaWxsPVwiI0ZBRkFGQVwiXHJcbiAgICBzdHJva2U9XCIjRkFGQUZBXCJcclxuICAgIHN0cm9rZS13aWR0aD1cIjAuODg4ODg5XCJcclxuICAvPlxyXG48L3N2Zz5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gIDxhIGhyZWY9XCIvbWF0ZXJpYWwvaW5kZXguaHRtbFwiPk1BVEVSSUFMPC9hPlxyXG4gIDxuYXY+XHJcbiAgICA8dWwgY2xhc3M9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NhdGFsb2cvaW5kZXguaHRtbFwiPtCa0LDRgtCw0LvQvtCzPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj7QniDQvdCw0YE8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2Zhdm9yaXRlcy9pbmRleC5odG1sXCI+0JjQt9Cx0YDQsNC90L3QvtC1PC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9tYXRlcmlhbC9jYXJ0L2luZGV4Lmh0bWxcIj7QmtC+0YDQt9C40L3QsDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwic2lkZWJhci1oaWRkZW5cIj5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NyZWF0ZS9pbmRleC5odG1sXCI+0JTQvtCx0LDQstC40YLRjCDQv9C+0YHRgtC10YA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInNpZGViYXItaGlkZGVuIGJ1dHRvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBzaWRlYmFyTG9naW5CdG5cIj7QktC+0LnRgtC4PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBvdXRsaW5lIHNpZGViYXJSZWdpc3RlckJ0blwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgY2xhc3M9XCJ3aWRlXCI+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NhdGFsb2cvaW5kZXguaHRtbFwiPtCa0LDRgtCw0LvQvtCzPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj7QniDQvdCw0YE8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvbmF2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJidXR0b24tYXJlYVwiPlxyXG4gIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY3JlYXRlL2luZGV4Lmh0bWxcIiBjbGFzcz1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgID7QlNC+0LHQsNCy0LjRgtGMINC/0L7RgdGC0LXRgDwvYVxyXG4gID5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImljb25zLXdyYXBwZXJcIj5cclxuICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvZmF2b3VyaXRlcy9pbmRleC5odG1sXCI+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICBjbGFzcz1cImhlYXJ0XCJcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTYuNTQ3MiAzLjc0OTAyQzEzLjUwNDEgMy43NDkwMiAxMi4wMDQxIDYuNzQ5MDIgMTIuMDA0MSA2Ljc0OTAyQzEyLjAwNDEgNi43NDkwMiAxMC41MDQxIDMuNzQ5MDIgNy40NjA5NiAzLjc0OTAyQzQuOTg3ODMgMy43NDkwMiAzLjAyOTM5IDUuODE4MDkgMy4wMDQwOCA4LjI4Njk5QzIuOTUyNTIgMTMuNDExOCA3LjA2OTU1IDE3LjA1NjQgMTEuNTgyMiAyMC4xMTkyQzExLjcwNjYgMjAuMjAzOCAxMS44NTM2IDIwLjI0OTEgMTIuMDA0MSAyMC4yNDkxQzEyLjE1NDYgMjAuMjQ5MSAxMi4zMDE1IDIwLjIwMzggMTIuNDI2IDIwLjExOTJDMTYuOTM4MSAxNy4wNTY0IDIxLjA1NTIgMTMuNDExOCAyMS4wMDQxIDguMjg2OTlDMjAuOTc4OCA1LjgxODA5IDE5LjAyMDMgMy43NDkwMiAxNi41NDcyIDMuNzQ5MDJaXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTUxNFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvYT5cclxuICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY2FydC9pbmRleC5odG1sXCI+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICBjbGFzcz1cImNhcnRcIlxyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk04LjI0NjQgMjAuMjQ5QzguNjYwNjEgMjAuMjQ5IDguOTk2NCAxOS45MTMyIDguOTk2NCAxOS40OTlDOC45OTY0IDE5LjA4NDggOC42NjA2MSAxOC43NDkgOC4yNDY0IDE4Ljc0OUM3LjgzMjE5IDE4Ljc0OSA3LjQ5NjQgMTkuMDg0OCA3LjQ5NjQgMTkuNDk5QzcuNDk2NCAxOS45MTMyIDcuODMyMTkgMjAuMjQ5IDguMjQ2NCAyMC4yNDlaXCJcclxuICAgICAgICAgIGZpbGw9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTUxNFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE3LjgzNDEgMjAuMjQ5QzE4LjI0ODMgMjAuMjQ5IDE4LjU4NDEgMTkuOTEzMiAxOC41ODQxIDE5LjQ5OUMxOC41ODQxIDE5LjA4NDggMTguMjQ4MyAxOC43NDkgMTcuODM0MSAxOC43NDlDMTcuNDE5OSAxOC43NDkgMTcuMDg0MSAxOS4wODQ4IDE3LjA4NDEgMTkuNDk5QzE3LjA4NDEgMTkuOTEzMiAxNy40MTk5IDIwLjI0OSAxNy44MzQxIDIwLjI0OVpcIlxyXG4gICAgICAgICAgZmlsbD1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMi4yNDY0IDMuNzQ5MDJINS4yNDY0TDcuNDk2NCAxNi40OTlIMTkuNDk2NFwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTk1MTRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk03LjQ5NjQgMTMuNUgxOS4xODg5QzE5LjI3NTYgMTMuNTAwMSAxOS4zNTk3IDEzLjQ3MDEgMTkuNDI2OCAxMy40MTUxQzE5LjQ5MzkgMTMuMzYwMSAxOS41Mzk4IDEzLjI4MzYgMTkuNTU2OSAxMy4xOTg2TDIwLjkwNjkgNi40NDg1OUMyMC45MTc4IDYuMzk0MTcgMjAuOTE2NCA2LjMzOCAyMC45MDMgNi4yODQxNEMyMC44ODk1IDYuMjMwMjkgMjAuODY0MyA2LjE4MDA5IDIwLjgyOTEgNi4xMzcxN0MyMC43OTM5IDYuMDk0MjYgMjAuNzQ5NiA2LjA1OTY5IDIwLjY5OTQgNi4wMzU5N0MyMC42NDkyIDYuMDEyMjUgMjAuNTk0NCA1Ljk5OTk2IDIwLjUzODkgNkg1Ljk5NjRcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+XHJcblxyXG4gIDxidXR0b24gY2xhc3M9XCJidXR0b24gbm9ybWFsIGxvZ2luQnRuXCI+0JLQvtC50YLQuDwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJidXR0b24gb3V0bGluZSByZWdpc3RlckJ0blwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2J1dHRvbj5cclxuPC9kaXY+XHJcbjxidXR0b24gY2xhc3M9XCJtZW51LWJ1dHRvblwiPlxyXG4gIDxzcGFuPjwvc3Bhbj5cclxuPC9idXR0b24+XHJcbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1nL2NhdDEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgPGltZyBzcmM9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiIGFsdD1cInByb2ZpbGVcIiAvPlxyXG4gIDxkaXYgY2xhc3M9XCJtZXRhXCI+XHJcbiAgICA8aDE+0JDQvdC00YDQtdC5INCc0LjRgNC+0L3QvtCyPC9oMT5cclxuICAgIDxwPtCj0L3QuNC60LDQu9GM0L3Ri9C5INC00LjQt9Cw0LnQvdC10YAg0LjQtyDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs9CwLiDQk9C+0YLQvtCyINC6INGA0LDQsdC+0YLQtSE8L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibGlua3NcIj48L2Rpdj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1idXR0b24uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1idXR0b24uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktZm9ybS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWZvcm0uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktbWluaS1jYXJkLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktbWluaS1jYXJkLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWRpYWxvZ19wb3B1cC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWRpYWxvZ19wb3B1cC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1mb290ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktaGVhZGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktaGVhZGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LXBlcnNvbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LXBlcnNvbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1wb3N0ZXJfYmFyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktcG9zdGVyX2Jhci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9teS1idXR0b24uc2Nzcyc7XHJcblxyXG4vL1VJLdC60L7QvNC/0L7QvdC10L3RgiBcItCa0L3QvtC/0LrQsFwiXHJcblxyXG4vLyDQsiDQv9GA0LjQvdGG0LjQv9C1INGN0YLQuNC8INC80L7QttC90L4g0L3QtSDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y9cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIG1vZGUsIGlzQ3VzdG9tKSB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG5cclxuICBzZXRUZXh0KGJ0biwgdGV4dCk7XHJcbiAgc2V0TW9kZShidG4sIG1vZGUsIGlzQ3VzdG9tKTtcclxuXHJcbiAgcmV0dXJuIGJ0bjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQSh0ZXh0LCBtb2RlLCBpc0N1c3RvbSwgbGluaykge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgYS5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuXHJcbiAgc2V0VGV4dChhLCB0ZXh0KTtcclxuICBzZXRNb2RlKGEsIG1vZGUsIGlzQ3VzdG9tKTtcclxuICBzZXRMaW5rKGEsIGxpbmspO1xyXG5cclxuICByZXR1cm4gYTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGV4dChidG4sIHRleHQpIHtcclxuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRNb2RlKGJ0biwgbW9kZSwgY3VzdG9tKSB7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQobW9kZSk7XHJcblxyXG4gIGlmIChjdXN0b20pIHtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjdXN0b20nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExpbmsoYSwgbGluaykge1xyXG4gIGEuaHJlZiA9IGxpbms7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGVCdXR0b24sXHJcbiAgY3JlYXRlQSxcclxufTtcclxuIiwiaW1wb3J0ICcuL215LWZvcm0uc2NzcydcclxuaW1wb3J0ICcuL3ZhbGlkYXRpb24uanMnXHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGUobGFiZWxQLCBwbGFjZWhvbGRlclApe1xyXG4vLyAgICAgY29uc3QgZm9ybW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuLy8gICAgIGZvcm1tLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwJylcclxuLy8gICAgIGNvbnN0IGxhYmVsSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuLy8gICAgIGZvcm1tLmFwcGVuZENoaWxkKGxhYmVsSClcclxuLy8gICAgIGNvbnN0IGlucHV0SCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuLy8gICAgIGlucHV0SC50eXBlID0gJ3RleHQnO1xyXG4vLyAgICAgZm9ybW0uYXBwZW5kQ2hpbGQoaW5wdXRIKVxyXG4vLyAgICAgY29uc3Qgc3BhbkggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuLy8gICAgIGZvcm1tLmFwcGVuZENoaWxkKHNwYW5IKVxyXG5cclxuLy8gICAgIHNldFRleHQoZm9ybW0sIGxhYmVsUCwgcGxhY2Vob2xkZXJQKTtcclxuXHJcbi8vICAgICByZXR1cm4gZm9ybW07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNldFRleHQoZm9ybW0sIGxhYmVsUCwgcGxhY2Vob2xkZXJQKXtcclxuLy8gICAgIGNvbnN0IGxhYmVsSCA9IGZvcm1tLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJylcclxuLy8gICAgIGNvbnN0IGlucHV0SCA9IGZvcm1tLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcclxuICAgIFxyXG4vLyAgICAgbGFiZWxILnRleHRDb250ZW50ID0gbGFiZWxQO1xyXG4vLyAgICAgaW5wdXRILnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJQO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB7XHJcbi8vICAgICBjcmVhdGVcclxuLy8gfSIsIlxyXG5cclxuZnVuY3Rpb24gc2V0dXBGb3JtVmFsaWRhdGlvbigpIHtcclxuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcclxuXHJcbiAgZm9ybXMuZm9yRWFjaChmb3JtID0+IHtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKCFjaGVja1ZhbGlkaXR5KGZvcm0pKSB7XHJcbiAgICAgICAgc2hvd0N1c3RvbUVycm9ycyhmb3JtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtLnN1Ym1pdCgpOyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRpdHkoZm9ybSl7XHJcblxyXG59XHJcbi8vIC8vINCf0L7QutCw0LfQsNGC0Ywg0LrQsNGB0YLQvtC80L3Ri9C1INC+0YjQuNCx0LrQuCDQsiBzcGFuINC00LvRjyDQstGB0LXRhSDQv9C+0LvQtdC5INGBIG5hbWVcclxuLy8gZnVuY3Rpb24gc2hvd0N1c3RvbUVycm9ycyhmb3JtKSB7XHJcbi8vICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFsnKTsgLy8g0J/QvtC70Y8g0YEgbmFtZVxyXG5cclxuLy8gICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbi8vICAgICBjb25zdCBlcnJvclNwYW4gPSBnZXRFcnJvclNwYW4oaW5wdXQpO1xyXG5cclxuLy8gICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuLy8gICAgICAgc2hvd0Vycm9yKGlucHV0LCBlcnJvclNwYW4pO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgY2xlYXJFcnJvcihlcnJvclNwYW4pO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQn9C+0LrQsNC30LDRgtGMINGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVxyXG4vLyBmdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIGVycm9yU3Bhbikge1xyXG4vLyAgIGxldCBtZXNzYWdlID0gJyc7XHJcblxyXG4vLyAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuLy8gICAgIG1lc3NhZ2UgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XHJcbi8vICAgICBtZXNzYWdlID0gJ9CS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3QvtC1INC30L3QsNGH0LXQvdC40LUnO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuLy8gICAgIG1lc3NhZ2UgPSBg0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwICR7aW5wdXQubWluTGVuZ3RofSDRgdC40LzQstC+0LvQvtCyLiDQktCy0LXQtNC10L3QviAke2lucHV0LnZhbHVlLmxlbmd0aH1gO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XHJcbi8vICAgICBtZXNzYWdlID0gJ9CX0L3QsNGH0LXQvdC40LUg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDRhNC+0YDQvNCw0YLRgyc7XHJcbi8vICAgfVxyXG5cclxuLy8gICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQntGH0LjRgdGC0LjRgtGMINGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVxyXG4vLyBmdW5jdGlvbiBjbGVhckVycm9yKGVycm9yU3Bhbikge1xyXG4vLyAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9ICcnO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQndCw0LnRgtC4INC40LvQuCDRgdC+0LfQtNCw0YLRjCBzcGFuINC00LvRjyDRgdC+0L7QsdGJ0LXQvdC40Y8g0L7QsSDQvtGI0LjQsdC60LVcclxuLy8gZnVuY3Rpb24gZ2V0RXJyb3JTcGFuKGlucHV0KSB7XHJcbi8vICAgbGV0IGVycm9yU3BhbiA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcclxuLy8gICBpZiAoIWVycm9yU3Bhbikge1xyXG4vLyAgICAgZXJyb3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcclxuLy8gICAgIGlucHV0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JTcGFuKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIGVycm9yU3BhbjtcclxuLy8gfVxyXG5cclxuLy8gLy8g0JfQsNC/0YPRgdC6INCy0LDQu9C40LTQsNGG0LjQuCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbi8vICAgc2V0dXBGb3JtVmFsaWRhdGlvbigpO1xyXG4vLyB9KTtcclxuIiwiaW1wb3J0ICcuL215LW1pbmktY2FyZC5zY3NzJztcclxuaW1wb3J0IGNhcmRIVE1MIGZyb20gJy4vaW5kZXguaHRtbCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocG9zdGVyKSB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtY2FyZCcpO1xyXG4gIGNhcmQuaWQgPSAncG9zdC0xMjMnO1xyXG4gIGNhcmQuaW5uZXJIVE1MID0gY2FyZEhUTUw7XHJcblxyXG4gIHR1cm5PbkZhdkJ1dHRvbihjYXJkKTtcclxuICBpZiAocG9zdGVyKXtcclxuICAgICAgc2V0RGF0YShjYXJkLCBwb3N0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR1cm5PbkZhdkJ1dHRvbihjYXJkKSB7XHJcbiAgY29uc3QgZmF2ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtYnRuJyk7XHJcbiAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZmF2LmNsYXNzTGlzdC50b2dnbGUoJ2Zhdi1hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0YShjYXJkLCBwb3N0ZXIpIHtcclxuICBjb25zdCBuYW1lSHRtbCA9IGNhcmQucXVlcnlTZWxlY3RvcignaDInKTtcclxuICBjb25zdCBhdXRob3JIdG1sID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYXV0aG9yJyk7XHJcbiAgY29uc3QgcHJpY2VIdG1sID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2Ugc3BhbicpO1xyXG4gIGNvbnN0IGltZ0h0bWwgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG5cclxuICBuYW1lSHRtbC50ZXh0Q29udGVudCA9IHBvc3Rlci50aXRsZTtcclxuICBhdXRob3JIdG1sLnRleHRDb250ZW50ID0gcG9zdGVyLmF1dGhvcjtcclxuICBwcmljZUh0bWwudGV4dENvbnRlbnQgPSBwb3N0ZXIucHJpY2U7XHJcbiAgaW1nSHRtbC5zcmMgPSBwb3N0ZXIuaW1hZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGUsXHJcbn07XHJcbiIsImltcG9ydCAnLi9teS1kaWFsb2dfcG9wdXAuc2Nzcyc7XHJcbmltcG9ydCBsb2dpbkhUTUwgZnJvbSAnLi9sb2dpbi5odG1sJztcclxuaW1wb3J0IHJlZ2lzdGVySFRNTCBmcm9tICcuL3JlZ2lzdGVyLmh0bWwnO1xyXG5pbXBvcnQgZm9yZ290SFRNTCBmcm9tICcuL2ZvcmdvdC5odG1sJztcclxuXHJcbmltcG9ydCBteUZvcm0gZnJvbSAnLi4vLi4vVUkvbXktZm9ybS9teS1mb3JtJztcclxuaW1wb3J0IG15QnV0dG9uIGZyb20gJy4uLy4uL1VJL215LWJ1dHRvbi9teS1idXR0b24nO1xyXG5cclxuLy8gaW1wb3J0IFwiLi92YWxpZGF0aW9uLmpzXCI7XHJcblxyXG5jb25zdCBjb250ZW50TWFwID0gbmV3IE1hcChbXHJcbiAgWydsb2dpbicsIGxvZ2luSFRNTF0sXHJcbiAgWydyZWdpc3RlcicsIHJlZ2lzdGVySFRNTF0sXHJcbiAgWydmb3Jnb3QnLCBmb3Jnb3RIVE1MXSxcclxuXSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgY29uc3QgcG9wdXBTeXN0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChwb3B1cFN5c3RlbSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRlbnRNYXAuZm9yRWFjaCgoY29udGVudCwgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdXaW5kb3cuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIG5ld1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctcG9wdXAnLCB0eXBlKTtcclxuICAgIHBvcHVwU3lzdGVtLmFwcGVuZENoaWxkKG5ld1dpbmRvdyk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZENsb3NlTG9naWMocG9wdXBTeXN0ZW0pO1xyXG4gIHNldExpbmtzKHBvcHVwU3lzdGVtKTtcclxuXHJcbiAgcmV0dXJuIHBvcHVwU3lzdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbG9zZUxvZ2ljKHBvcHVwU3lzdGVtKSB7XHJcbiAgcG9wdXBTeXN0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kaWFsb2ctcG9wdXAuYWN0aXZlJykpIHtcclxuICAgICAgY2xvc2VBbGwocG9wdXBTeXN0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBwb3B1cFN5c3RlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsb3NlXCIpLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjbG9zZUFsbChwb3B1cFN5c3RlbSk7XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIHBvcHVwU3lzdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaWFsb2ctcG9wdXAnKS5mb3JFYWNoKChkaWFsb2cpID0+IHtcclxuICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRCdXR0b25Bc09wZW5lcihwb3B1cFN5c3RlbSwgdHlwZSwgYnV0dG9uKSB7XHJcbiAgaWYgKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlblBvcHVwKHBvcHVwU3lzdGVtLCB0eXBlKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEJ1dHRvbiBmb3IgdHlwZSAke3R5cGV9IG5vdCBmb3VuZGApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TGlua3MocG9wdXBTeXN0ZW0pIHtcclxuICBbJ3JlZ2lzdGVyJywgJ2xvZ2luJywgJ2ZvcmdvdCddLmZvckVhY2goKHR5cGUpID0+IHtcclxuICAgIHBvcHVwU3lzdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3R5cGV9TGlua2ApLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgc2V0TGlua0FzT3BlbmVyKHBvcHVwU3lzdGVtLCB0eXBlLCBsaW5rKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMaW5rQXNPcGVuZXIocG9wdXBTeXN0ZW0sIHR5cGUsIGxpbmspIHtcclxuICBpZiAobGluaykge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjbG9zZUFsbChwb3B1cFN5c3RlbSk7XHJcbiAgICAgIG9wZW5Qb3B1cChwb3B1cFN5c3RlbSwgdHlwZSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihgTGluayBmb3IgdHlwZSAke3R5cGV9IG5vdCBmb3VuZGApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblBvcHVwKHBvcHVwU3lzdGVtLCB0eXBlKSB7XHJcbiAgcG9wdXBTeXN0ZW0uY2xhc3NMaXN0LmFkZCgncG9wLWFjdGl2ZScpO1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICBwb3B1cFN5c3RlbS5xdWVyeVNlbGVjdG9yKGAuJHt0eXBlfWApLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUFsbChwb3B1cFN5c3RlbSkge1xyXG4gIHBvcHVwU3lzdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC1hY3RpdmUnKTtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gIHBvcHVwU3lzdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaWFsb2ctcG9wdXAuYWN0aXZlJykuZm9yRWFjaCgoZGlhbG9nKSA9PiB7XHJcbiAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGUsXHJcbiAgc2V0QnV0dG9uQXNPcGVuZXIsXHJcbn07XHJcbiIsImltcG9ydCAnLi9teS1mb290ZXIuc2Nzcyc7XHJcbmltcG9ydCBmb290ZXJIVE1MIGZyb20gJy4vaW5kZXguaHRtbCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IGZvb3RlckhUTUw7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBpZiAoZm9vdGVyKSB7XHJcbiAgICAgIGNvbnN0IHN2Z1BhdGggPSBmb290ZXIucXVlcnlTZWxlY3Rvcignc3ZnIHBhdGgnKTtcclxuICBcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHN2Z1BhdGguc3R5bGUuZmlsbCA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdmdQYXRoLnN0eWxlLmZpbGwgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGhyZXNob2xkOiAwLjdcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZm9vdGVyKTtcclxuICAgIH0gXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZSxcclxufTtcclxuIiwiaW1wb3J0ICcuL215LWhlYWRlci5zY3NzJztcclxuaW1wb3J0IGhlYWRlckhUTUwgZnJvbSAnLi9pbmRleC5odG1sJztcclxuaW1wb3J0IG15RGlhbG9nX3BvcHVwIGZyb20gJy4uL2RpYWxvZ19wb3B1cC9teS1kaWFsb2dfcG9wdXAnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGhlYWRlci5pZCA9ICdoZWFkZXInO1xyXG4gIGhlYWRlci5pbm5lckhUTUwgPSBoZWFkZXJIVE1MO1xyXG5cclxuICBjb25zdCBkaWFsb2dzID0gbXlEaWFsb2dfcG9wdXAuY3JlYXRlKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luQnRuID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbkJ0bicpO1xyXG4gIGNvbnN0IHJlZ2lzdGVyQnRuID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3RlckJ0bicpO1xyXG4gIGNvbnN0IHNpZGViYXJMb2dpbkJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhckxvZ2luQnRuJyk7XHJcbiAgY29uc3Qgc2lkZWJhclJlZ2lzdGVyQnRuID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyUmVnaXN0ZXJCdG4nKTtcclxuICAvLyBjb25zdCBmb3Jnb3RCdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmZvcmdvdEJ0bicpO1xyXG5cclxuICBteURpYWxvZ19wb3B1cC5zZXRCdXR0b25Bc09wZW5lcihkaWFsb2dzLCAnbG9naW4nLCBsb2dpbkJ0bik7XHJcbiAgbXlEaWFsb2dfcG9wdXAuc2V0QnV0dG9uQXNPcGVuZXIoZGlhbG9ncywgJ3JlZ2lzdGVyJywgcmVnaXN0ZXJCdG4pO1xyXG4gIG15RGlhbG9nX3BvcHVwLnNldEJ1dHRvbkFzT3BlbmVyKGRpYWxvZ3MsICdsb2dpbicsIHNpZGViYXJMb2dpbkJ0bik7XHJcbiAgbXlEaWFsb2dfcG9wdXAuc2V0QnV0dG9uQXNPcGVuZXIoZGlhbG9ncywgJ3JlZ2lzdGVyJywgc2lkZWJhclJlZ2lzdGVyQnRuKTtcclxuICAvLyBteURpYWxvZ19wb3B1cC5zZXRBc09wZW5lcihkaWFsb2dzLCAnZm9yZ290JywgZm9yZ290QnRuKTtcclxuXHJcbiAgYWRkU2lkZUJhcihoZWFkZXIpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTaWRlQmFyKGhlYWRlcikge1xyXG4gIGNvbnN0IGljb24gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJyk7XHJcbiAgY29uc3Qgc2lkZWJhciA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5cclxuICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGUsXHJcbn07XHJcbiIsImltcG9ydCAnLi9teS1wZXJzb24uc2NzcydcclxuaW1wb3J0IHBlcnNvbkhUTUwgZnJvbSAnLi9pbmRleC5odG1sJ1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBob3RvLCBuYW1lLCBkZXNjcmlwdGlvbiwgbWFpbCwgd2Vic2l0ZSwgdGcpe1xyXG4gICAgY29uc3QgcGVyc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpXHJcbiAgICBwZXJzb24uaW5uZXJIVE1MID0gcGVyc29uSFRNTDtcclxuICAgIHBlcnNvbi5jbGFzc0xpc3QuYWRkKCdwZXJzb24nKVxyXG5cclxuICAgIHJldHVybiBwZXJzb247XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGNyZWF0ZVxyXG59IiwiaW1wb3J0ICcuL215LXBvc3Rlcl9iYXIuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocG9zdGVyc19hcnJheSl7XHJcbiAgICB2YXIgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgncG9zdGVyLWJhcicpXHJcbiAgICBzZXRQb3N0ZXJzKGJhciwgcG9zdGVyc19hcnJheSlcclxuXHJcbiAgICByZXR1cm4gYmFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQb3N0ZXJzKGJhciwgcG9zdGVyc19hcnJheSl7XHJcbiAgICBwb3N0ZXJzX2FycmF5LmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNyZWF0ZVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9tYXRlcmlhbC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBlcnNvblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9yZXNldC5zY3NzJztcclxuXHJcbmltcG9ydCBteVBlcnNvbiBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3BlcnNvbi9teS1wZXJzb24nO1xyXG5pbXBvcnQgbXlQb3N0ZXJCYXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9wb3N0ZXJfYmFyL215LXBvc3Rlcl9iYXInO1xyXG5pbXBvcnQgbXlNaW5pX2NhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9teS1taW5pX2NhcmQvbXktbWluaV9jYXJkJztcclxuaW1wb3J0IG15SGVhZGVyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvaGVhZGVyL215LWhlYWRlcidcclxuaW1wb3J0IG15Rm9vdGVyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZm9vdGVyL215LWZvb3RlcidcclxuXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuY29uc3QgcG9zdGVycyA9IFtcclxuICBteU1pbmlfY2FyZC5jcmVhdGUoKSxcclxuICBteU1pbmlfY2FyZC5jcmVhdGUoKSxcclxuICBteU1pbmlfY2FyZC5jcmVhdGUoKSxcclxuXTtcclxuXHJcbmNvbnN0IHBlcnNvbiA9IG15UGVyc29uLmNyZWF0ZSgpO1xyXG5ib2R5LmFwcGVuZENoaWxkKG15SGVhZGVyLmNyZWF0ZSgpKVxyXG5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG5tYWluLmFwcGVuZENoaWxkKHBlcnNvbik7XHJcbm1haW4uYXBwZW5kQ2hpbGQobXlQb3N0ZXJCYXIuY3JlYXRlKHBvc3RlcnMpKTtcclxuYm9keS5hcHBlbmRDaGlsZChteUZvb3Rlci5jcmVhdGUoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=