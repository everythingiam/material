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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
    font-size: 1.6rem;
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
    font-size: 1.6rem;
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/my-poster-frame/my-poster-frame.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/my-poster-frame/my-poster-frame.scss ***!
  \******************************************************************************************************************************************/
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
    font-size: 1.6rem;
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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

.poster-left {
  max-width: 100%;
  height: calc(86.5vh - 30px);
  background: linear-gradient(#2A2B2C, #1b1b1b);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  position: sticky;
}
.poster-left > .tilt-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.poster-left > .tilt-container > .card-container {
  width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 3/4;
  padding: 5%;
  transition: padding 200ms ease-in-out;
  will-change: transform;
}
.poster-left > .tilt-container > .card-container > picture {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.poster-left > .tilt-container > .card-container > picture > img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  aspect-ratio: 3/4;
}

@media (max-width: 639px) {
  .poster-left {
    height: 55vh !important;
  }
}
@media (max-width: 1023px) {
  .poster-left {
    height: 70vh;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/my-poster-frame/my-poster-frame.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
    font-size: 1.6rem;
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
}`, "",{"version":3,"sources":["webpack://./src/modules/dialog_popup/my-dialog_popup.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
    font-size: 1.6rem;
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
    font-size: 1.6rem;
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
  transition: 400ms ease-out;
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
  top: 7.4rem;
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
  background-color: transparent;
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
html > body > header#header.dark {
  background-color: rgba(250, 250, 250, 0.1);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(250, 250, 250, 0.1);
}
html > body > header#header.dark > .left > a {
  color: #FAFAFA;
}
html > body > header#header.dark > .left > nav > ul > li > a {
  color: #FAFAFA;
}
html > body > header#header.dark > .left > nav > ul > li > a:hover {
  color: rgba(250, 250, 250, 0.5);
}
html > body > header#header.dark > .left > nav > ul.sidebar {
  background-color: rgba(250, 250, 250, 0.1);
  backdrop-filter: blur(15px);
}
html > body > header#header.dark button.button {
  background-color: #FAFAFA;
  color: #2A2B2C;
}
html > body > header#header.dark button.button:hover {
  background-color: rgba(250, 250, 250, 0.9);
}
html > body > header#header.dark a.outline,
html > body > header#header.dark button.outline {
  background-color: rgba(250, 250, 250, 0.1);
  border: 1px solid #FAFAFA;
  color: #FAFAFA;
}
html > body > header#header.dark a.outline:hover,
html > body > header#header.dark button.outline:hover {
  background-color: rgba(250, 250, 250, 0.2);
}
html > body > header#header.dark > .button-area > .icons-wrapper > a > svg path {
  stroke: #FAFAFA;
}
html > body > header#header.dark > .button-area > .icons-wrapper > a > svg:hover path {
  stroke: rgba(250, 250, 250, 0.5);
}
html > body > header#header.dark > .menu-button > span, html > body > header#header.dark > .menu-button::before, html > body > header#header.dark > .menu-button::after {
  background-color: #FAFAFA;
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
}`, "",{"version":3,"sources":["webpack://./src/modules/header/my-header.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/poster_create/my-poster_create.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/poster_create/my-poster_create.scss ***!
  \**************************************************************************************************************************************/
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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

.font-p3, html > body > main > section.poster-create > .left > .spans {
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
    font-size: 1.6rem;
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
  .font-p3, html > body > main > section.poster-create > .left > .spans {
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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

html > body > main > section.poster-create {
  padding-top: 2.5rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 4rem;
  margin-bottom: 8.5rem;
  position: relative;
}
html > body > main > section.poster-create > .left > .poster-left {
  background: linear-gradient(#ededed, #cccccc);
  height: 75vh;
}
html > body > main > section.poster-create > .left > .poster-left > .tilt-container > .card-container > picture > img.empty {
  width: 40%;
  height: 40%;
}
html > body > main > section.poster-create > .left > .spans {
  color: rgba(42, 43, 44, 0.5);
  margin-top: 1.6rem;
}
html > body > main > section.poster-create > .left > .spans > span {
  color: #2A2B2C;
}
html > body > main > section.poster-create > .right {
  display: flex;
  height: auto;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
}
html > body > main > section.poster-create > .right > form {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1023px) {
  html > body > main > section.poster-create {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 2rem;
    margin-bottom: 4rem;
  }
  html > body > main > section.poster-create > .left {
    grid-row: 1;
  }
  html > body > main > section.poster-create > .right {
    grid-row: 2;
  }
}
@media (max-width: 639px) {
  html > body > main > section.poster-create > .left > .poster-left > .tilt-container > .card-container > picture > img.empty {
    width: 60%;
  }
}`, "",{"version":3,"sources":["webpack://./src/modules/poster_create/my-poster_create.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss ***!
  \*************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
    font-size: 1.6rem;
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
html > body > main > section.mail,
html > body > main > section.hero {
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
  html > body > main > section.mail,
  html > body > main > section.hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  html > body > header#header,
  html > body > footer#footer,
  html > body > main > section.hero {
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
}`, "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE,aAAA;EACA,sBAAA;ADAF;;ACGA;;;EAGE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE;IACE,kBAAA;IACA,mBAAA;EDAF;ECGA;;;IAGE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDDF;ECIA;;;IAGE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDFF;AACF;AExCA;EACE,4BAAA;EACA,gBAAA;EACA,+DAAA;AF0CF;AEvCA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;AFyCF;AEtCA;EACE,6BAAA;EACA,gBAAA;EACA,+DAAA;AFwCF;AErCA;EACE,gCAAA;EACA,gBAAA;EACA,+DAAA;AFuCF;AEpCA;EACE,6BAAA;EACA,iBAAA;AFsCF;;AEpCA;EACE,6BAAA;EACA,iBAAA;EACA,iBAAA;AFuCF;;AErCA;EACE,sBAAA;EACA,iBAAA;AFwCF;;AEtCA;EACE,6BAAA;EACA,iBAAA;AFyCF;;AEvCA;EACE,6BAAA;EACA,iBAAA;AF0CF;;AExCA;EACE,4BAAA;EACA,eAAA;AF2CF;;AEzCA;EACE,6BAAA;EACA,iBAAA;AF4CF;;AE1CA;EACE,sBAAA;EACA,eAAA;EACA,iBAAA;AF6CF;;AE3CA;EACE,sBAAA;EACA,iBAAA;AF8CF;;AE5CA;EACE,sBAAA;EACA,iBAAA;AF+CF;;AE7CA;EACE,sBAAA;EACA,iBAAA;AFgDF;;AE9CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AFiDF;;AE/CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AFkDF;;AE/CA;EACE;IACE,6BAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,6BAAA;IACA,iBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,6BAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,4BAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,6BAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EFkDF;AACF;ACvMA;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADwMF;;ACrMA;EACE,aAAA;EACA,sBAAA;ADwMF;;ACrMA;;;EAGE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADwMF;;ACrMA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADwMF;;ACrMA;EACE;IACE,kBAAA;IACA,mBAAA;EDwMF;ECrMA;;;IAGE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDuMF;ECpMA;;;IAGE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDsMF;AACF;AA7PA;EACE,aAAA;EACA,sBAAA;EACA,yBGLY;AHoQd;;AA5PA;EACE,SAAA;EACA,gBAAA;AA+PF","sourceRoot":""}]);
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

/***/ "./src/components/my-poster-frame/index.html":
/*!***************************************************!*\
  !*** ./src/components/my-poster-frame/index.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="tilt-container">
  <div class="card-container">
    
  </div>
</div>
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

/***/ "./src/modules/poster_create/index.html":
/*!**********************************************!*\
  !*** ./src/modules/poster_create/index.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="left">
  <div class="spans">
    Размер картинки: <span class="fileSize">XxX</span> px
    <br />Соотношение сторон (см):
    <span class="pictureSize">X | X | X</span>
  </div>
</div>
<div class="right">
  <form action="">
    <h2>Добавить постер</h2>
    <ul class="fields">
      <li class="text">
        <label for="name">Название</label>
        <input type="text" name="name" placeholder="Название" />
        <span class="error-message"></span>
      </li>
      <li class="text">
        <label for="name">Цена</label>
        <input
          type="text"
          name="name"
          placeholder="Цена"
          style="max-width: 50%"
        />
        <span class="error-message"></span>
      </li>
      <li class="textarea">
        <label for="name">Описание</label>
        <textarea
          placeholder="Введите текст"
          name="description"
          id=""
        ></textarea>
        <span class="error-message"></span>
      </li>
    </ul>
    <button class="button normal custom">Выложить постер</button>
  </form>
</div>
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

/***/ "./src/components/my-poster-frame/my-poster-frame.scss":
/*!*************************************************************!*\
  !*** ./src/components/my-poster-frame/my-poster-frame.scss ***!
  \*************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_frame_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-poster-frame.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/my-poster-frame/my-poster-frame.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_frame_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_frame_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_frame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_frame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/poster_create/my-poster_create.scss":
/*!*********************************************************!*\
  !*** ./src/modules/poster_create/my-poster_create.scss ***!
  \*********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_create_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-poster_create.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/poster_create/my-poster_create.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_create_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_create_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_create_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_poster_create_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./common.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-tilt/lib/vanilla-tilt.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.8.1
 */

var VanillaTilt = function () {
  function VanillaTilt(element) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, VanillaTilt);

    if (!(element instanceof Node)) {
      throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
    }

    this.width = null;
    this.height = null;
    this.clientWidth = null;
    this.clientHeight = null;
    this.left = null;
    this.top = null;

    // for Gyroscope sampling
    this.gammazero = null;
    this.betazero = null;
    this.lastgammazero = null;
    this.lastbetazero = null;

    this.transitionTimeout = null;
    this.updateCall = null;
    this.event = null;

    this.updateBind = this.update.bind(this);
    this.resetBind = this.reset.bind(this);

    this.element = element;
    this.settings = this.extendSettings(settings);

    this.reverse = this.settings.reverse ? -1 : 1;
    this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
    this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
    this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
    this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
    this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
    this.gyroscopeSamples = this.settings.gyroscopeSamples;

    this.elementListener = this.getElementListener();

    if (this.glare) {
      this.prepareGlare();
    }

    if (this.fullPageListening) {
      this.updateClientSize();
    }

    this.addEventListeners();
    this.reset();

    if (this.resetToStart === false) {
      this.settings.startX = 0;
      this.settings.startY = 0;
    }
  }

  VanillaTilt.isSettingTrue = function isSettingTrue(setting) {
    return setting === "" || setting === true || setting === 1;
  };

  /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */


  VanillaTilt.prototype.getElementListener = function getElementListener() {
    if (this.fullPageListening) {
      return window.document;
    }

    if (typeof this.settings["mouse-event-element"] === "string") {
      var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

      if (mouseEventElement) {
        return mouseEventElement;
      }
    }

    if (this.settings["mouse-event-element"] instanceof Node) {
      return this.settings["mouse-event-element"];
    }

    return this.element;
  };

  /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */


  VanillaTilt.prototype.addEventListeners = function addEventListeners() {
    this.onMouseEnterBind = this.onMouseEnter.bind(this);
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    this.onMouseLeaveBind = this.onMouseLeave.bind(this);
    this.onWindowResizeBind = this.onWindowResize.bind(this);
    this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

    this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

    if (this.glare || this.fullPageListening) {
      window.addEventListener("resize", this.onWindowResizeBind);
    }

    if (this.gyroscope) {
      window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    }
  };

  /**
   * Method remove event listeners from current this.elementListener
   */


  VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {
    this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

    if (this.gyroscope) {
      window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
    }

    if (this.glare || this.fullPageListening) {
      window.removeEventListener("resize", this.onWindowResizeBind);
    }
  };

  VanillaTilt.prototype.destroy = function destroy() {
    clearTimeout(this.transitionTimeout);
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.element.style.willChange = "";
    this.element.style.transition = "";
    this.element.style.transform = "";
    this.resetGlare();

    this.removeEventListeners();
    this.element.vanillaTilt = null;
    delete this.element.vanillaTilt;

    this.element = null;
  };

  VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
    if (event.gamma === null || event.beta === null) {
      return;
    }

    this.updateElementPosition();

    if (this.gyroscopeSamples > 0) {
      this.lastgammazero = this.gammazero;
      this.lastbetazero = this.betazero;

      if (this.gammazero === null) {
        this.gammazero = event.gamma;
        this.betazero = event.beta;
      } else {
        this.gammazero = (event.gamma + this.lastgammazero) / 2;
        this.betazero = (event.beta + this.lastbetazero) / 2;
      }

      this.gyroscopeSamples -= 1;
    }

    var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
    var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;

    var degreesPerPixelX = totalAngleX / this.width;
    var degreesPerPixelY = totalAngleY / this.height;

    var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
    var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);

    var posX = angleX / degreesPerPixelX;
    var posY = angleY / degreesPerPixelY;

    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = {
      clientX: posX + this.left,
      clientY: posY + this.top
    };

    this.updateCall = requestAnimationFrame(this.updateBind);
  };

  VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {
    this.updateElementPosition();
    this.element.style.willChange = "transform";
    this.setTransition();
  };

  VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = event;
    this.updateCall = requestAnimationFrame(this.updateBind);
  };

  VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {
    this.setTransition();

    if (this.settings.reset) {
      requestAnimationFrame(this.resetBind);
    }
  };

  VanillaTilt.prototype.reset = function reset() {
    this.onMouseEnter();

    if (this.fullPageListening) {
      this.event = {
        clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
        clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
      };
    } else {
      this.event = {
        clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
        clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
      };
    }

    var backupScale = this.settings.scale;
    this.settings.scale = 1;
    this.update();
    this.settings.scale = backupScale;
    this.resetGlare();
  };

  VanillaTilt.prototype.resetGlare = function resetGlare() {
    if (this.glare) {
      this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "0";
    }
  };

  VanillaTilt.prototype.getValues = function getValues() {
    var x = void 0,
        y = void 0;

    if (this.fullPageListening) {
      x = this.event.clientX / this.clientWidth;
      y = this.event.clientY / this.clientHeight;
    } else {
      x = (this.event.clientX - this.left) / this.width;
      y = (this.event.clientY - this.top) / this.height;
    }

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
    var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
    var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

    return {
      tiltX: tiltX,
      tiltY: tiltY,
      percentageX: x * 100,
      percentageY: y * 100,
      angle: angle
    };
  };

  VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {
    var rect = this.element.getBoundingClientRect();

    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  };

  VanillaTilt.prototype.update = function update() {
    var values = this.getValues();

    this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

    if (this.glare) {
      this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
    }

    this.element.dispatchEvent(new CustomEvent("tiltChange", {
      "detail": values
    }));

    this.updateCall = null;
  };

  /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */


  VanillaTilt.prototype.prepareGlare = function prepareGlare() {
    // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
    if (!this.glarePrerender) {
      // Create glare element
      var jsTiltGlare = document.createElement("div");
      jsTiltGlare.classList.add("js-tilt-glare");

      var jsTiltGlareInner = document.createElement("div");
      jsTiltGlareInner.classList.add("js-tilt-glare-inner");

      jsTiltGlare.appendChild(jsTiltGlareInner);
      this.element.appendChild(jsTiltGlare);
    }

    this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
    this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

    if (this.glarePrerender) {
      return;
    }

    Object.assign(this.glareElementWrapper.style, {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "hidden",
      "pointer-events": "none",
      "border-radius": "inherit"
    });

    Object.assign(this.glareElement.style, {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "pointer-events": "none",
      "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
      "transform": "rotate(180deg) translate(-50%, -50%)",
      "transform-origin": "0% 0%",
      "opacity": "0"
    });

    this.updateGlareSize();
  };

  VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {
    if (this.glare) {
      var glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;

      Object.assign(this.glareElement.style, {
        "width": glareSize + "px",
        "height": glareSize + "px"
      });
    }
  };

  VanillaTilt.prototype.updateClientSize = function updateClientSize() {
    this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  };

  VanillaTilt.prototype.onWindowResize = function onWindowResize() {
    this.updateGlareSize();
    this.updateClientSize();
  };

  VanillaTilt.prototype.setTransition = function setTransition() {
    var _this = this;

    clearTimeout(this.transitionTimeout);
    this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
    if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;

    this.transitionTimeout = setTimeout(function () {
      _this.element.style.transition = "";
      if (_this.glare) {
        _this.glareElement.style.transition = "";
      }
    }, this.settings.speed);
  };

  /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
   * @param {boolean} settings.glare - if it should have a "glare" effect
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */


  VanillaTilt.prototype.extendSettings = function extendSettings(settings) {
    var defaultSettings = {
      reverse: false,
      max: 15,
      startX: 0,
      startY: 0,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      glare: false,
      "max-glare": 1,
      "glare-prerender": false,
      "full-page-listening": false,
      "mouse-event-element": null,
      reset: true,
      "reset-to-start": true,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10
    };

    var newSettings = {};
    for (var property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.hasAttribute("data-tilt-" + property)) {
        var attribute = this.element.getAttribute("data-tilt-" + property);
        try {
          newSettings[property] = JSON.parse(attribute);
        } catch (e) {
          newSettings[property] = attribute;
        }
      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  };

  VanillaTilt.init = function init(elements, settings) {
    if (elements instanceof Node) {
      elements = [elements];
    }

    if (elements instanceof NodeList) {
      elements = [].slice.call(elements);
    }

    if (!(elements instanceof Array)) {
      return;
    }

    elements.forEach(function (element) {
      if (!("vanillaTilt" in element)) {
        element.vanillaTilt = new VanillaTilt(element, settings);
      }
    });
  };

  return VanillaTilt;
}();

if (typeof document !== "undefined") {
  /* expose the class to window */
  window.VanillaTilt = VanillaTilt;

  /**
   * Auto load
   */
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}

module.exports = VanillaTilt;


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

/***/ "./src/components/my-poster-frame/my-poster-frame.js":
/*!***********************************************************!*\
  !*** ./src/components/my-poster-frame/my-poster-frame.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-tilt */ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/components/my-poster-frame/index.html");
/* harmony import */ var _helpers_srcsetGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/srcsetGenerator */ "./src/helpers/srcsetGenerator.js");
/* harmony import */ var _assets_img_image_65_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/image 65.png */ "./src/assets/img/image 65.png");
/* harmony import */ var _my_poster_frame_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-poster-frame.scss */ "./src/components/my-poster-frame/my-poster-frame.scss");






function create(poster_img) {
  const frame = document.createElement('aside')
  frame.classList.add('poster-left');
  frame.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!poster_img){
    poster_img = _assets_img_image_65_png__WEBPACK_IMPORTED_MODULE_3__;
  }
  const picture = _helpers_srcsetGenerator__WEBPACK_IMPORTED_MODULE_2__["default"].generate(poster_img);
  const cardCont = frame.querySelector('.card-container');
  cardCont.appendChild(picture);

  addTilt(frame.querySelector('.tilt-container'));
  return frame;
}

function addTilt(card) {
  vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default().init(card, {
    max: 7,
    reverse: true,
    // "mouse-event-element": "body",
    // speed: 400,
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
});


/***/ }),

/***/ "./src/helpers/srcsetGenerator.js":
/*!****************************************!*\
  !*** ./src/helpers/srcsetGenerator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var srcset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! srcset */ "./node_modules/srcset/index.js");


function generate(img_path) {
  const generatedSrcset = (0,srcset__WEBPACK_IMPORTED_MODULE_0__.stringifySrcset)([
    { url: img_path, width: 768 },
    { url: img_path, width: 1200 }
  ]);

  const picture = document.createElement('picture');
  const img = document.createElement('img');
  img.srcset = generatedSrcset;
  img.src = img_path;

  picture.appendChild(img);
  
  return picture;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  generate,
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

/***/ "./src/modules/poster_create/my-poster_create.js":
/*!*******************************************************!*\
  !*** ./src/modules/poster_create/my-poster_create.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/modules/poster_create/index.html");
/* harmony import */ var _components_my_poster_frame_my_poster_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/my-poster-frame/my-poster-frame */ "./src/components/my-poster-frame/my-poster-frame.js");
/* harmony import */ var _my_poster_create_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-poster_create.scss */ "./src/modules/poster_create/my-poster_create.scss");
/* harmony import */ var _assets_img_dobavit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/dobavit.svg */ "./src/assets/img/dobavit.svg");





function create() {
  const create = document.createElement('section');
  create.classList.add('poster-create');
  create.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_0__["default"];

  const frame = _components_my_poster_frame_my_poster_frame__WEBPACK_IMPORTED_MODULE_1__["default"].create(_assets_img_dobavit_svg__WEBPACK_IMPORTED_MODULE_3__);
  const left = create.querySelector('.left');

  left.insertBefore(frame, create.querySelector('.spans'));

  const img = left.querySelector('img');
  img.classList.add('empty');
  return create;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
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

/***/ "./src/assets/img/dobavit.svg":
/*!************************************!*\
  !*** ./src/assets/img/dobavit.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6ec330687a8391fc2ed6.svg";

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

/***/ }),

/***/ "./node_modules/srcset/index.js":
/*!**************************************!*\
  !*** ./node_modules/srcset/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseSrcset: () => (/* binding */ parseSrcset),
/* harmony export */   stringifySrcset: () => (/* binding */ stringifySrcset)
/* harmony export */ });
/**
This regex represents a loose rule of an “image candidate string”.

@see https://html.spec.whatwg.org/multipage/images.html#srcset-attribute

An “image candidate string” roughly consists of the following:
1. Zero or more whitespace characters.
2. A non-empty URL that does not start or end with `,`.
3. Zero or more whitespace characters.
4. An optional “descriptor” that starts with a whitespace character.
5. Zero or more whitespace characters.
6. Each image candidate string is separated by a `,`.

We intentionally implement a loose rule here so that we can perform more aggressive error handling and reporting in the below code.
*/
const imageCandidateRegex = /\s*([^,]\S*[^,](?:\s+[^,]+)?)\s*(?:,|$)/;

const duplicateDescriptorCheck = (allDescriptors, value, postfix) => {
	allDescriptors[postfix] = allDescriptors[postfix] || {};
	if (allDescriptors[postfix][value]) {
		throw new Error(`No more than one image candidate is allowed for a given descriptor: ${value}${postfix}`);
	}

	allDescriptors[postfix][value] = true;
};

const fallbackDescriptorDuplicateCheck = allDescriptors => {
	if (allDescriptors.fallback) {
		throw new Error('Only one fallback image candidate is allowed');
	}

	// TODO: Use `?`.
	if (allDescriptors.x && allDescriptors.x['1']) {
		throw new Error('A fallback image is equivalent to a 1x descriptor, providing both is invalid.');
	}

	allDescriptors.fallback = true;
};

const descriptorCountCheck = (allDescriptors, currentDescriptors) => {
	if (currentDescriptors.length === 0) {
		fallbackDescriptorDuplicateCheck(allDescriptors);
	} else if (currentDescriptors.length > 1) {
		throw new Error(`Image candidate may have no more than one descriptor, found ${currentDescriptors.length}: ${currentDescriptors.join(' ')}`);
	}
};

const validDescriptorCheck = (value, postfix, descriptor) => {
	if (Number.isNaN(value)) {
		throw new TypeError(`${descriptor || value} is not a valid number`);
	}

	switch (postfix) {
		case 'w': {
			if (value <= 0) {
				throw new Error('Width descriptor must be greater than zero');
			} else if (!Number.isInteger(value)) {
				throw new TypeError('Width descriptor must be an integer');
			}

			break;
		}

		case 'x': {
			if (value <= 0) {
				throw new Error('Pixel density descriptor must be greater than zero');
			}

			break;
		}

		case 'h': {
			throw new Error('Height descriptor is no longer allowed');
		}

		default: {
			throw new Error(`Invalid srcset descriptor: ${descriptor}`);
		}
	}
};

function parseSrcset(string, {strict = false} = {}) {
	const allDescriptors = strict ? {} : undefined;

	return string
		.replace(/\r?\n/, '')
		.replace(/,\s+/, ', ')
		.split(imageCandidateRegex)
		.filter((part, index) => index % 2 === 1)
		.map(part => {
			const [url, ...descriptors] = part.trim().split(/\s+/);

			const result = {url};

			if (strict) {
				descriptorCountCheck(allDescriptors, descriptors);
			}

			for (const descriptor of descriptors) {
				const postfix = descriptor[descriptor.length - 1];
				const value = Number.parseFloat(descriptor.slice(0, -1));

				if (strict) {
					validDescriptorCheck(value, postfix, descriptor);
					duplicateDescriptorCheck(allDescriptors, value, postfix);
				}

				switch (postfix) {
					case 'w': {
						result.width = value;
						break;
					}

					case 'h': {
						result.height = value;
						break;
					}

					case 'x': {
						result.density = value;
						break;
					}

					// No default
				}
			}

			return result;
		});
}

const knownDescriptors = new Set(['width', 'height', 'density']);

function stringifySrcset(array, {strict = false} = {}) {
	const allDescriptors = strict ? {} : undefined;

	return array.map(element => {
		if (!element.url) {
			if (strict) {
				throw new Error('URL is required');
			}

			return '';
		}

		const descriptorKeys = Object.keys(element).filter(key => knownDescriptors.has(key));

		if (strict) {
			descriptorCountCheck(allDescriptors, descriptorKeys);
		}

		const result = [element.url];

		for (const descriptorKey of descriptorKeys) {
			const value = element[descriptorKey];
			let postfix;
			switch (descriptorKey) {
				case 'width': {
					postfix = 'w';

					break;
				}

				case 'height': {
					postfix = 'h';

					break;
				}

				case 'density': {
					postfix = 'x';

					break;
				}
			// No default
			}

			const descriptor = `${value}${postfix}`;

			if (strict) {
				validDescriptorCheck(value, postfix);
				duplicateDescriptorCheck(allDescriptors, value, postfix);
			}

			result.push(descriptor);
		}

		return result.join(' ');
	}).join(', ');
}


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
/******/ 			"create": 0
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
/*!***********************************!*\
  !*** ./src/pages/create/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/common.scss */ "./src/styles/common.scss");
/* harmony import */ var _modules_header_my_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/header/my-header */ "./src/modules/header/my-header.js");
/* harmony import */ var _modules_poster_create_my_poster_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/poster_create/my-poster_create */ "./src/modules/poster_create/my-poster_create.js");
/* harmony import */ var _modules_footer_my_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/footer/my-footer */ "./src/modules/footer/my-footer.js");








const body = document.querySelector('body');
const main = document.createElement('main');

body.appendChild(_modules_header_my_header__WEBPACK_IMPORTED_MODULE_2__["default"].create())
body.appendChild(main);
main.appendChild(_modules_poster_create_my_poster_create__WEBPACK_IMPORTED_MODULE_3__["default"].create());
body.appendChild(_modules_footer_my_footer__WEBPACK_IMPORTED_MODULE_4__["default"].create());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxUUFBcVEsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sc0JBQXNCO0FBQ25zRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFZ2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpUUFBaVEsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sUUFBUSxXQUFXLE1BQU0sUUFBUSxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLHNCQUFzQjtBQUM3dkY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9XdkM7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsK0pBQXFEO0FBQ2pHLDRDQUE0QyxtS0FBdUQ7QUFDbkcsNENBQTRDLGlLQUFzRDtBQUNsRyw0Q0FBNEMsdUtBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlSQUF5UixVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxzQkFBc0I7QUFDMXFGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVnZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtUkFBbVIsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxzQkFBc0I7QUFDdGhIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyYnZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVRQUF1USxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLHNCQUFzQjtBQUM5c0Y7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFWdkM7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsK0pBQXFEO0FBQ2pHLDRDQUE0QyxtS0FBdUQ7QUFDbkcsNENBQTRDLGlLQUFzRDtBQUNsRyw0Q0FBNEMsdUtBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVRQUF1USxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxzQkFBc0I7QUFDcnpJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6aEJ2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scVJBQXFSLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1TkFBdU4sVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0s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O0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUM5Rm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ3BDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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YnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9jb21wb25lbnRzL215LXBvc3Rlci1mcmFtZS9teS1wb3N0ZXItZnJhbWUuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9kaWFsb2dfcG9wdXAvbXktZGlhbG9nX3BvcHVwLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZm9vdGVyL215LWZvb3Rlci5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9wb3N0ZXJfY3JlYXRlL215LXBvc3Rlcl9jcmVhdGUuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9zdHlsZXMvcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL2NvbXBvbmVudHMvbXktcG9zdGVyLWZyYW1lL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL2ZvcmdvdC5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2RpYWxvZ19wb3B1cC9sb2dpbi5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2RpYWxvZ19wb3B1cC9yZWdpc3Rlci5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2Zvb3Rlci9pbmRleC5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9pbmRleC5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL3Bvc3Rlcl9jcmVhdGUvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktYnV0dG9uL215LWJ1dHRvbi5zY3NzPzBjZTEiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5zY3NzPzc2ODYiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL2NvbXBvbmVudHMvbXktcG9zdGVyLWZyYW1lL215LXBvc3Rlci1mcmFtZS5zY3NzPzVmZDMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cC5zY3NzPzVkMzYiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZm9vdGVyL215LWZvb3Rlci5zY3NzP2JhMDAiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvaGVhZGVyL215LWhlYWRlci5zY3NzPzdhY2YiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvcG9zdGVyX2NyZWF0ZS9teS1wb3N0ZXJfY3JlYXRlLnNjc3M/NTlhOSIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzPzFjNDEiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzP2UzMzEiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10aWx0L2xpYi92YW5pbGxhLXRpbHQuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWJ1dHRvbi9teS1idXR0b24uanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktZm9ybS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9jb21wb25lbnRzL215LXBvc3Rlci1mcmFtZS9teS1wb3N0ZXItZnJhbWUuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL2hlbHBlcnMvc3Jjc2V0R2VuZXJhdG9yLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2RpYWxvZ19wb3B1cC9teS1kaWFsb2dfcG9wdXAuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZm9vdGVyL215LWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9oZWFkZXIvbXktaGVhZGVyLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL3Bvc3Rlcl9jcmVhdGUvbXktcG9zdGVyX2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3Jjc2V0L2luZGV4LmpzIiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL3BhZ2VzL2NyZWF0ZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiwgLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiwgLmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFNjNFMztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC45cmVtIDIuMXJlbSAxcmVtIDIuMXJlbTtcbiAgY29sb3I6ICNGQUZBRkE7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0RBMkZGO1xuICBib3JkZXItcmFkaXVzOiAwLjMzMzMzMzMzMzNyZW07XG59XG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRGQzY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBvcGFjaXR5OiA0MCU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMzcsIDM3LCAyMTMsIDAuMik7XG59XG4uYnV0dG9uLm91dGxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBjb2xvcjogIzBFNjNFMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzBFNjNFMztcbiAgcGFkZGluZzogY2FsYygwLjlyZW0gLSAxcHgpIGNhbGMoMi4xcmVtIC0gMXB4KSBjYWxjKDFyZW0gLSAxcHgpIGNhbGMoMi4xcmVtIC0gMXB4KTtcbn1cbi5idXR0b24ub3V0bGluZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZmI7XG59XG4uYnV0dG9uLm91dGxpbmU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDRlOTtcbn1cbi5idXR0b24ub3V0bGluZTpkaXNhYmxlZCB7XG4gIGJvcmRlci1jb2xvcjogIzJBMkIyQztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5idXR0b24ub3V0bGluZTpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDM3LCAzNywgMjEzLCAwLjIpO1xufVxuLmJ1dHRvbi5jdXN0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0Ljg4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuYnV0dG9uLmN1c3RvbSB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvVUkvbXktYnV0dG9uL215LWJ1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7OztFQUdFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFREFGO0VDR0E7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRERGO0VDSUE7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURGRjtBQUNGO0FFeENBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGMENGO0FFdkNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGeUNGO0FFdENBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGd0NGO0FFckNBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGdUNGO0FFcENBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRnNDRjs7QUVwQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZ1Q0Y7O0FFckNBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRndDRjs7QUV0Q0E7RUFDRSw2QkFBQTtFQUNB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XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMsIGZvcm0gdWwgbGkgc3Bhbi5lcnJvci1tZXNzYWdlLCBmb3JtIHVsIC50ZXh0IHNwYW4uZXJyb3ItbWVzc2FnZSwgZm9ybSB1bCBsaSBpbnB1dCxcbmZvcm0gdWwgbGkgdGV4dGFyZWEsIGZvcm0gdWwgLnRleHQgaW5wdXQsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmZvbnQtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmZvbnQtZmlsdGVycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb250LWxhYmVsLCBmb3JtIHVsIGxpIGxhYmVsLCBmb3JtIHVsIC50ZXh0IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZm9udC1oMS1wb3N0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEwNyU7XG4gIH1cbiAgLmZvbnQtaDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5mb250LXAxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICAuZm9udC1wMS1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmZvbnQtcDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzLCBmb3JtIHVsIGxpIHNwYW4uZXJyb3ItbWVzc2FnZSwgZm9ybSB1bCAudGV4dCBzcGFuLmVycm9yLW1lc3NhZ2UsIGZvcm0gdWwgbGkgaW5wdXQsXG4gIGZvcm0gdWwgbGkgdGV4dGFyZWEsIGZvcm0gdWwgLnRleHQgaW5wdXQsXG4gIGZvcm0gdWwgLnRleHQgdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCwgZm9ybSB1bCBsaSBsYWJlbCwgZm9ybSB1bCAudGV4dCBsYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDIuNXJlbTtcbn1cbmZvcm0gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNHJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmZvcm0gdWwgbGksIGZvcm0gdWwgLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9ybSB1bCBsaSBsYWJlbCwgZm9ybSB1bCAudGV4dCBsYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuNSk7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmZvcm0gdWwgbGkgdGV4dGFyZWEsIGZvcm0gdWwgLnRleHQgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDlyZW07XG59XG5mb3JtIHVsIGxpIGlucHV0LFxuZm9ybSB1bCBsaSB0ZXh0YXJlYSwgZm9ybSB1bCAudGV4dCBpbnB1dCxcbmZvcm0gdWwgLnRleHQgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAxLjNyZW0gMS42cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgNDQsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC4wNCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9ybSB1bCBsaSBpbnB1dC5pbnZhbGlkLFxuZm9ybSB1bCBsaSB0ZXh0YXJlYS5pbnZhbGlkLCBmb3JtIHVsIC50ZXh0IGlucHV0LmludmFsaWQsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU0ZTFmO1xufVxuZm9ybSB1bCBsaSBpbnB1dC5zdWNjZXNzLFxuZm9ybSB1bCBsaSB0ZXh0YXJlYS5zdWNjZXNzLCBmb3JtIHVsIC50ZXh0IGlucHV0LnN1Y2Nlc3MsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhLnN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICM2ZWFkNDg7XG59XG5mb3JtIHVsIGxpIGlucHV0OmRpc2FibGVkLFxuZm9ybSB1bCBsaSB0ZXh0YXJlYTpkaXNhYmxlZCwgZm9ybSB1bCAudGV4dCBpbnB1dDpkaXNhYmxlZCxcbmZvcm0gdWwgLnRleHQgdGV4dGFyZWE6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuZm9ybSB1bCBsaSBpbnB1dDpob3ZlcixcbmZvcm0gdWwgbGkgdGV4dGFyZWE6aG92ZXIsIGZvcm0gdWwgLnRleHQgaW5wdXQ6aG92ZXIsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhOmhvdmVyIHtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSg0MiwgNDMsIDQ0LCAwLjYpO1xufVxuZm9ybSB1bCBsaSBpbnB1dDpmb2N1cyxcbmZvcm0gdWwgbGkgdGV4dGFyZWE6Zm9jdXMsIGZvcm0gdWwgLnRleHQgaW5wdXQ6Zm9jdXMsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMC4ycmVtIHNvbGlkIHJnYmEoMzcsIDM3LCAyMTMsIDAuMik7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICMwRTYzRTM7XG59XG5mb3JtIHVsIGxpIHNwYW4uZXJyb3ItbWVzc2FnZSwgZm9ybSB1bCAudGV4dCBzcGFuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICNlNTRlMWY7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgZm9ybSB7XG4gICAgZ2FwOiAxLjhyZW07XG4gIH1cbiAgZm9ybSB1bCB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIGlucHV0LFxuICB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMS4ycmVtIDEuNXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7OztFQUdFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFREFGO0VDR0E7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxt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QUNDLGFBQUE7RUFDQSxzQkFBQTtBQWdSTjtBQTlRTztFQUVDLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQStRUjtBQTVRTztFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQThRUjtBQTNRTzs7O0VBR0Msc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJJdkJJO0VKd0JKLFdBQUE7QUE2UVI7QUEzUVE7OztFQUNFLHlCQUFBO0FBK1FWO0FBNVFROzs7RUFDRSxxQkFBQTtBQWdSVjtBQTdRUTs7O0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQWlSVjtBQTlRUTs7O0VBQ0UsMENBQUE7QUFrUlY7QUFoUlE7OztFQUNFLDRDQUFBO0VBQ0EsNEJBQUE7QUFvUlY7QUFoUk87RUFFQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWlSUjs7QUEzUUE7RUFDRTtJQUNFLFdBQUE7RUE4UUY7RUE1UUc7SUFDQyxTQUFBO0VBOFFKO0VBMVFBOztJQUVFLHNCQUFBO0VBNFFGO0FBQ0ZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4ucG9zdGVyLWxlZnQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYyg4Ni41dmggLSAzMHB4KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyQTJCMkMsICMxYjFiMWIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuLnBvc3Rlci1sZWZ0ID4gLnRpbHQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucG9zdGVyLWxlZnQgPiAudGlsdC1jb250YWluZXIgPiAuY2FyZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFzcGVjdC1yYXRpbzogMy80O1xuICBwYWRkaW5nOiA1JTtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAyMDBtcyBlYXNlLWluLW91dDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cbi5wb3N0ZXItbGVmdCA+IC50aWx0LWNvbnRhaW5lciA+IC5jYXJkLWNvbnRhaW5lciA+IHBpY3R1cmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wb3N0ZXItbGVmdCA+IC50aWx0LWNvbnRhaW5lciA+IC5jYXJkLWNvbnRhaW5lciA+IHBpY3R1cmUgPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGFzcGVjdC1yYXRpbzogMy80O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgLnBvc3Rlci1sZWZ0IHtcbiAgICBoZWlnaHQ6IDU1dmggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAucG9zdGVyLWxlZnQge1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbXktcG9zdGVyLWZyYW1lL215LXBvc3Rlci1mcmFtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFB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RjtFQ3BNQTs7O0lBR0Usd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRHNNRjtBQUNGO0FHN1BBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDTFk7QUpvUWQ7O0FHNVBBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FIK1BGOztBQXpRQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBNFFGO0FBMVFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTRRSjtBQTFRSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQTRRTjtBQTFRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE0UVI7QUExUVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBNFFWOztBQXJRQTtFQUNFO0lBQ0UsdUJBQUE7RUF3UUY7QUFDRjtBQXRRQTtFQUNFO0lBQ0UsWUFBQTtFQXdRRjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyLCBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgLmJsYWMsIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gcCA+IHNwYW4sIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5mb250LXAzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmZvbnQtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmZvbnQtZmlsdGVycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb250LWxhYmVsLCBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiAub3ItZ29vZ2xlID4gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIsIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSAuYmxhYywgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiBwID4gc3BhbiwgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiBwIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCwgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlID4gLm9yLWdvb2dsZSA+IHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbmh0bWwge1xuICAvKiAxMHB4ICovXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMC41KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogMTAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiA3JSAxcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDk2cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDU0cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cC5hY3RpdmUge1xuICBkaXNwbGF5OiBncmlkO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IC5jbG9zZSB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiA0cmVtO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiBwaWN0dXJlID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gcCB7XG4gIGNvbG9yOiAjRkFGQUZBO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogNHJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gcCA+IHNwYW4ge1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICNGQUZBRkE7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAgPiBzcGFuOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSB7XG4gIHBhZGRpbmc6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSA+IC5vci1nb29nbGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSA+IC5vci1nb29nbGUgPiBwIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjb2xvcjogcmdiYSg0MiwgNDMsIDQ0LCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiBmb3JtLnJlZ2lzdGVyIHtcbiAgbWluLWhlaWdodDogNDFyZW07XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiBmb3JtLnJlZ2lzdGVyID4gdWwuZmllbGRzID4gLnBhc3N3b3JkLXdyYXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgLmJsYWMge1xuICBjb2xvcjogIzJBMkIyQztcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHRyYW5zaXRpb246IDIwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tdG9wOiAtMC41cmVtO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlIC5ibGFjOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC42KTtcbn1cblxuLnBvcC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyB7XG4gICAgcGFkZGluZzogNSUgMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlID4gZm9ybS5yZWdpc3RlciA+IHVsLmZpZWxkcyA+IC5wYXNzd29yZC13cmFwIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUge1xuICAgIGhlaWdodDogMzVyZW07XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiAuY2xvc2Uge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSB7XG4gICAgcGFkZGluZzogM3JlbSAycmVtO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSA+IGZvcm0ucmVnaXN0ZXIge1xuICAgIG1pbi1oZWlnaHQ6IDM3cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9kaWFsb2dfcG9wdXAvbXktZGlhbG9nX3BvcHVwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7Ozs7O0NBQUE7QUFPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7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QUFBO0VBQ0Esc0JBQUE7QUFrUVI7QUFqUVE7RUFFRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFrUVY7QUE5UE07RUFDRSxpQkFBQTtBQWdRUjtBQTdQTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBK1BSO0FBNVBNO0VBRUUsY0l4SE07RUp5SE4sb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBNlBSO0FBM1BRO0VBQ0UsNEJBQUE7QUE2UFY7O0FBdFBBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBeVBGOztBQXRQQTtFQUNFO0lBQ0UsZ0JBQUE7RUF5UEY7QUFDRjtBQXZQQTtFQUNFO0lBQ0UsYUFBQTtFQXlQRjtFQXRQQTtJQVNFLFNBQUE7RUFnUEY7QUFDRjtBQTlPQTtFQUNFO0lBQ0UsVUFBQTtFQWdQRjtFQTlPRTtJQUNFLDBCQUFBO0VBZ1BKO0VBOU9JO0lBQ0UsYUFBQTtFQWdQTjtFQTlPTTtJQUNFLFFBQUE7RUFnUFI7RUE3T0k7SUFDRSxrQkFBQTtFQStPTjtFQTdPTTtJQUNFLGlCQUFBO0VBK09SO0FBQ0ZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSwgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLnZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4uZm9udC1wMiwgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSwgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLnZhbHVlIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIsIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlIC5sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZvbnQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmZvbnQtZmlsdGVycyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmZvbnQtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbmh0bWwge1xuICAvKiAxMHB4ICovXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyQztcbiAgcGFkZGluZy10b3A6IDVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA5JTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlID4gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSA+IHVsID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlID4gYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNSk7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSAubGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSAudmFsdWUge1xuICBjb2xvcjogI0ZBRkFGQTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlLmxvbmcge1xuICB3aWR0aDogMzUlO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBzdmcgPiBwYXRoIHtcbiAgZmlsbDogI0ZBRkFGQTtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiBmaWxsIDFzIGN1YmljLWJlemllcigwLjcsIDAsIDAuNywgMC43KTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IHN2Zzpob3ZlciBwYXRoIHtcbiAgZmlsbDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3Age1xuICAgIG1heC13aWR0aDogNTRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlLmxvbmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzVyZW07XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gc3ZnID4gcGF0aCB7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvZm9vdGVyL215LWZvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7OztFQUdFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFO0lB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QTtFQUNBLG9CQUFBO0FBNFFGO0FBMVFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUE0UUo7QUF6UU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUEyUVI7QUF6UVE7RUFDRSwrQkFBQTtBQTJRVjtBQXZRTTtFQUNFLCtCQUFBO0FBeVFSO0FBdFFNO0VBRUUsK0JBQUE7RUFDQSxxQkFBQTtBQXVRUjtBQXBRTTtFQUVFLGNJdENNO0FKMlNkO0FBalFJO0VBQ0UsVUFBQTtBQW1RTjtBQS9QRTtFQUNFLFdBQUE7QUFpUUo7QUEvUEk7RUFDRSxhSW5EUTtFSm9EUixZQUFBO0VBQ0Esa0RBQUE7QUFpUU47QUE3UE07RUFDRSxzQkFBQTtBQStQUjs7QUF4UEE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUEyUEY7RUF6UEU7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUEyUEo7RUF4UEE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQTBQRjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEsIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpID4gYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiwgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC53aWRlID4gbGkgPiBhIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmZvbnQtZmlsdGVycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb250LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZm9udC1oMS1wb3N0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEwNyU7XG4gIH1cbiAgLmZvbnQtaDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5mb250LXAxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICAuZm9udC1wMS1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmZvbnQtcDEsIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpID4gYSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24sIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwud2lkZSA+IGxpID4gYSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IDQwMG1zIGVhc2Utb3V0O1xuICBwYWRkaW5nOiAxLjdyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBzb2xpZCByZ2JhKDQyLCA0MywgNDQsIDAuMik7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xMikpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzNSU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBjb2xvcjogIzBFNjNFMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjM0RBMkZGO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYge1xuICB3aWR0aDogNDIlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNy40cmVtO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIHotaW5kZXg6IDgwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIuYWN0aXZlIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLWluLCBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaS5zaWRlYmFyLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaS5idXR0b25zIHtcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMy42cmVtO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkuYnV0dG9ucyA+IC5vdXRsaW5lIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW0gMy42cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJBMkIyQztcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC4xMik7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUgPiBsaSA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IDIwMG1zO1xuICBjb2xvcjogIzJBMkIyQztcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwud2lkZSA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjMEU2M0UzO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyLjRyZW07XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiBhLm91dGxpbmUge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiAuaWNvbnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzFweDtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IC5pY29ucy13cmFwcGVyID4gYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IC5pY29ucy13cmFwcGVyID4gYSA+IHN2ZyBwYXRoIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIgPiBhID4gc3ZnOmhvdmVyIHBhdGgge1xuICBzdHJva2U6ICMwRTYzRTM7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiAuc2VwYXJhdG9yIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuMTIpO1xuICBtYXJnaW46IDAgNXB4O1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbi5hY3RpdmU6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24uYWN0aXZlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uLmFjdGl2ZSA+IHNwYW4ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0b3A6IDEuMnJlbTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbiA+IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQTJCMkM7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJvdHRvbTogMS4ycmVtO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLmRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrID4gLmxlZnQgPiBhIHtcbiAgY29sb3I6ICNGQUZBRkE7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayA+IC5sZWZ0ID4gbmF2ID4gdWwgPiBsaSA+IGEge1xuICBjb2xvcjogI0ZBRkFGQTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrID4gLmxlZnQgPiBuYXYgPiB1bCA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNSk7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLmRhcmsgYnV0dG9uLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIGNvbG9yOiAjMkEyQjJDO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLmRhcmsgYnV0dG9uLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC45KTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrIGEub3V0bGluZSxcbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrIGJ1dHRvbi5vdXRsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkFGQUZBO1xuICBjb2xvcjogI0ZBRkFGQTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrIGEub3V0bGluZTpob3Zlcixcbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrIGJ1dHRvbi5vdXRsaW5lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjIpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLmRhcmsgPiAuYnV0dG9uLWFyZWEgPiAuaWNvbnMtd3JhcHBlciA+IGEgPiBzdmcgcGF0aCB7XG4gIHN0cm9rZTogI0ZBRkFGQTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIgPiBhID4gc3ZnOmhvdmVyIHBhdGgge1xuICBzdHJva2U6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrID4gLm1lbnUtYnV0dG9uID4gc3BhbiwgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLmRhcmsgPiAubWVudS1idXR0b246OmJlZm9yZSwgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLmRhcmsgPiAubWVudS1idXR0b246OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gYS5vdXRsaW5lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzBweCkge1xuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkuc2lkZWJhci1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMXB4KSB7XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkgPiBhLFxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaS5idXR0b25zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNnJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvaGVhZGVyL215LWhlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7OztFQUdFLHdCQUFBO0VBQ0Esa0JBQUE7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O0VBRUMsMENBQUE7RUFDQSx5QkFBQTtFQUNBLGNJcFBRO0FKb2RkO0FBOU5NOztFQUNFLDBDQUFBO0FBaU9SO0FBM05VO0VBQ0UsZUk5UEU7QUoyZGQ7QUF6Tlk7RUFDRSxnQ0FBQTtBQTJOZDtBQXBOTTtFQUdFLHlCSTdRTTtBSmllZDs7QUE5TUE7RUFFSTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBZ05KO0VBOU1FO0lBQ0UsV0FBQTtFQWdOSjtFQTlNSTtJQUNFLGFBQUE7RUFnTk47RUE3TUU7SUFDRSxhQUFBO0VBK01KO0VBN01FO0lBQ0UsZUFBQTtFQStNSjtBQUNGO0FBNU1BO0VBQ0U7SUFDRSxhQUFBO0VBOE1GO0VBM01BO0lBQ0UsY0FBQTtFQTZNRjtBQUNGO0FBMU1BO0VBQ0U7SUFDRSx3QkFBQTtFQTRNRjtBQUNGO0FBek1BO0VBQ0U7O0lBRUUsb0JBQUE7RUEyTUY7QUFDRlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBFeHRyYWJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogNC4ycmVtO1xufVxuXG4uZm9udC1oMS1wb3N0ZXIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEwNyU7XG59XG5cbi5mb250LWgxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xufVxuXG4uZm9udC1oMi1taW5pIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5mb250LXAxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtcDEtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5mb250LXAxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4uZm9udC1wMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5mb250LXAzLCBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLnBvc3Rlci1jcmVhdGUgPiAubGVmdCA+IC5zcGFucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMywgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5wb3N0ZXItY3JlYXRlID4gLmxlZnQgPiAuc3BhbnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5wb3N0ZXItY3JlYXRlIHtcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xuICBncmlkLWdhcDogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLnBvc3Rlci1jcmVhdGUgPiAubGVmdCA+IC5wb3N0ZXItbGVmdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWRlZGVkLCAjY2NjY2NjKTtcbiAgaGVpZ2h0OiA3NXZoO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5wb3N0ZXItY3JlYXRlID4gLmxlZnQgPiAucG9zdGVyLWxlZnQgPiAudGlsdC1jb250YWluZXIgPiAuY2FyZC1jb250YWluZXIgPiBwaWN0dXJlID4gaW1nLmVtcHR5IHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA0MCU7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLnBvc3Rlci1jcmVhdGUgPiAubGVmdCA+IC5zcGFucyB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuNSk7XG4gIG1hcmdpbi10b3A6IDEuNnJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ucG9zdGVyLWNyZWF0ZSA+IC5sZWZ0ID4gLnNwYW5zID4gc3BhbiB7XG4gIGNvbG9yOiAjMkEyQjJDO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5wb3N0ZXItY3JlYXRlID4gLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLnBvc3Rlci1jcmVhdGUgPiAucmlnaHQgPiBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLnBvc3Rlci1jcmVhdGUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gICAgcm93LWdhcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ucG9zdGVyLWNyZWF0ZSA+IC5sZWZ0IHtcbiAgICBncmlkLXJvdzogMTtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLnBvc3Rlci1jcmVhdGUgPiAucmlnaHQge1xuICAgIGdyaWQtcm93OiAyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5wb3N0ZXItY3JlYXRlID4gLmxlZnQgPiAucG9zdGVyLWxlZnQgPiAudGlsdC1jb250YWluZXIgPiAuY2FyZC1jb250YWluZXIgPiBwaWN0dXJlID4gaW1nLmVtcHR5IHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9wb3N0ZXJfY3JlYXRlL215LXBvc3Rlcl9jcmVhdGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JlZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjs7Ozs7Q0FBQTtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBREFGOztBQ0dBOzs7RUFHRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RURBRjtFQ0dBOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VERkY7QUFDRjtBRXhDQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRjBDRjtBRXZDQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFD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STtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQXFRTjs7QUFoUUE7RUFDRTtJQUNFLDBCQUFBO0lBQ0Esa0NBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUFtUUY7RUFqUUU7SUFDRSxXQUFBO0VBbVFKO0VBaFFFO0lBQ0UsV0FBQTtFQWtRSjtBQUNGO0FBOVBBO0VBQ0U7SUFVRSxVQUFBO0VBdVBGO0FBQ0ZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JlZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjs7Ozs7Q0FBQTtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBREFGOztBQ0dBOzs7RUFHRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RURBRjtFQ0dBOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VERkY7QUFDRjtBRXhDQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRjBDRjtBRXZDQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRnlDRjtBRXRDQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRndDRjtBRXJDQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRnVDRjtBRXBDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZzQ0Y7O0FFcENBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FGdUNGOztBRXJDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUZ3Q0Y7O0FFdENBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRnlDRjs7QUV2Q0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FGMENGOztBRXhDQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBRjJDRjs7QUV6Q0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FGNENGOztBRTFDQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FGNkNGOztBRTNDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUY4Q0Y7O0FFNUNBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRitDRjs7QUU3Q0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FGZ0RGOztBRTlDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRmlERjs7QUUvQ0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUZrREY7O0FFL0NBO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLDZCQUFBO0lBQ0EsaUJBQUE7RUZrREY7RUVoREE7SUFDRSw0QkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUZrREY7RUVoREE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFRmtERjtBQUNGO0FDdk1BOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRHdNRjs7QUNyTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUR3TUY7O0FDck1BOzs7RUFHRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUR3TUY7O0FDck1BOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUR3TUY7O0FDck1BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEd01GO0VDck1BOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUR1TUY7RUNwTUE7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURzTUY7QUFDRjtBQTdQQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCR0xZO0FIb1FkOztBQTVQQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQStQRlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYXNpZGUsIG5hdiwgZm9vdGVyLCBoZWFkZXIsIHNlY3Rpb24sIG1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbnVsLCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmltZywgc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmFkZHJlc3Mge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0OmFjdGl2ZSwgYnV0dG9uOmZvY3VzLCBidXR0b246YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRDs7QUFNQTs7O0VBSUMsc0JBQUE7QUFKRDs7QUFPQTtFQUVJLHFCQUFBO0FBTEo7O0FBUUE7RUFFSSxxQkNWVTtBRElkOztBQVNBO0VBRUkscUJBQUE7QUFQSjs7QUFVQTtFQUVDLGNBQUE7QUFSRDs7QUFXQTtFQUVJLGtCQUFBO0VBQ0gsb0JBQUE7QUFURDs7QUFZQTtFQUVDLGdCQUFBO0FBVkQ7O0FBYUE7RUFFQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBWEQ7O0FBY0E7RUFFQyxlQUFBO0VBQ0EsWUFBQTtBQVpEOztBQWVBO0VBRUUsa0JBQUE7QUFiRjs7QUFnQkE7RUFFQyxvQkFBQTtFQUNHLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBZEo7O0FBaUJBO0VBRUMsYUFBQTtBQWZEOztBQWtCQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWhCSjs7QUFtQkE7RUFFSSxhQUFBO0FBakJKOztBQW9CQTtFQUVDLFVBQUE7RUFDQSxTQUFBO0FBbEJEOztBQXFCQTtFQUVDLGVBQUE7QUFuQkQ7O0FBc0JBO0VBRUMsY0FBQTtBQXBCRFwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwidGlsdC1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1sYXJnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItbWVkaXVtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1zbWFsbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiPlxyXG4gICAgPHN2Z1xyXG4gICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTIwLjM5NTUgMjAuMTEzNUw0LjQzODcyIDMuODg2MjNNMjAuMzk1NSAzLjg4NjIzTDQuNDM4NzIgMjAuMTEzNVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiI0ZBRkFGQVwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTE3N1wiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9idXR0b24+XHJcbiAgPHBpY3R1cmU+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogMTIwMHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX199XCJcclxuICAgIC8+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY4cHgpXCJcclxuICAgICAgc3Jjc2V0PVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fX31cIlxyXG4gICAgLz5cclxuICAgIDxpbWcgc3JjPVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fX31cIiBhbHQ9XCJyZWdpc3RlciBJbWFnZVwiIC8+XHJcbiAgPC9waWN0dXJlPlxyXG4gIDxwPtCV0YnRkSDQvdC1INGBINC90LDQvNC4PyA8c3BhbiBjbGFzcz1cInJlZ2lzdGVyTGlua1wiPtCg0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCE8L3NwYW4+PC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJpZ2h0LXNpZGVcIj5cclxuICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgIDxoMj7Ql9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMPC9oMj5cclxuICAgIDx1bCBjbGFzcz1cImZpZWxkc1wiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj7Qn9C+0YfRgtCwINC40LvQuCDQvdC40LrQvdC10LnQvDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0YfRgtCwINC40LvQuCDQvdC40LrQvdC10LnQvFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbm9ybWFsIGN1c3RvbVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAg0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINC/0LDRgNC+0LvRjFxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBjbGFzcz1cImxvZ2luTGluayBibGFjXCI+0JLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LQ8L3NwYW4+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9sb2dpbi1sYXJnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvbG9naW4tbWVkaXVtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9sb2dpbi1zbWFsbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiPlxyXG4gICAgPHN2Z1xyXG4gICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTIwLjM5NTUgMjAuMTEzNUw0LjQzODcyIDMuODg2MjNNMjAuMzk1NSAzLjg4NjIzTDQuNDM4NzIgMjAuMTEzNVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiI0ZBRkFGQVwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTE3N1wiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9idXR0b24+XHJcbiAgPHBpY3R1cmU+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogMTIwMHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX199XCJcclxuICAgIC8+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY4cHgpXCJcclxuICAgICAgc3Jjc2V0PVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fX31cIlxyXG4gICAgLz5cclxuICAgIDxpbWcgc3JjPVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fX31cIiBhbHQ9XCJMb2dpbiBJbWFnZVwiIC8+XHJcbiAgPC9waWN0dXJlPlxyXG4gIDxwPtCV0YnRkSDQvdC1INGBINC90LDQvNC4PyA8c3BhbiBjbGFzcz1cInJlZ2lzdGVyTGlua1wiPtCg0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCE8L3NwYW4+PC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJpZ2h0LXNpZGVcIj5cclxuICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cImxvZ2luXCI+XHJcbiAgICA8aDI+0JLRhdC+0LQ8L2gyPlxyXG4gICAgPHVsIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCf0L7Rh9GC0LAg0LjQu9C4INC90LjQutC90LXQudC8PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRjyDQuNC70Lgg0L3QuNC60L3QtdC50LxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBjdXN0b21cIiB0eXBlPVwic3VibWl0XCI+0JLQvtC50YLQuDwvYnV0dG9uPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmb3Jnb3RMaW5rIGJsYWNcIj7Ql9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMPzwvc3Bhbj5cclxuICA8L2Zvcm0+XHJcbiAgPGRpdiBjbGFzcz1cIm9yLWdvb2dsZVwiPlxyXG4gICAgPHA+0JjQm9CYPC9wPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBvdXRsaW5lIGN1c3RvbVwiPtCS0L7QudGC0Lgg0YfQtdGA0LXQtyBHb29nbGU8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItbGFyZ2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1nL3JlZ2lzdGVyLW1lZGl1bS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItc21hbGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJsZWZ0LXNpZGVcIj5cclxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIj5cclxuICAgIDxzdmc+XHJcbiAgICAgIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yMC4zOTU1IDIwLjExMzVMNC40Mzg3MiAzLjg4NjIzTTIwLjM5NTUgMy44ODYyM0w0LjQzODcyIDIwLjExMzVcIlxyXG4gICAgICAgIHN0cm9rZT1cIiNGQUZBRkFcIlxyXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTkxNzdcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxwaWN0dXJlPlxyXG4gICAgPHNvdXJjZVxyXG4gICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDEyMDBweClcIlxyXG4gICAgICBzcmNzZXQ9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiXHJcbiAgICAvPlxyXG4gICAgPHNvdXJjZVxyXG4gICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDc2OHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX199XCJcclxuICAgIC8+XHJcbiAgICA8aW1nIHNyYz1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX199XCIgYWx0PVwicmVnaXN0ZXIgSW1hZ2VcIiAvPlxyXG4gIDwvcGljdHVyZT5cclxuICA8cD7Qo9C20LUg0YEg0L3QsNC80Lg/IDxzcGFuIGNsYXNzPVwibG9naW5MaW5rXCI+0JLRhdC+0LTQuNGC0LUhPC9zcGFuPjwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyaWdodC1zaWRlXCI+XHJcbiAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJyZWdpc3RlclwiPlxyXG4gICAgPGgyPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2gyPlxyXG4gICAgPHVsIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCd0LjQutC90LXQudC8PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LjQutC90LXQudC8XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj7Qn9C+0YfRgtCwPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7Rh9GC0LBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dCBwYXNzd29yZC13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZDJcIj7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZDIgaWQ9XCJcclxuICAgICAgICAgICAgcGFzc3dvcmQyXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBub3JtYWwgY3VzdG9tXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICDQl9Cw0YDQtdCz0LXRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuICA8ZGl2IGNsYXNzPVwib3ItZ29vZ2xlXCI+XHJcbiAgICA8cD7QmNCb0Jg8L3A+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG91dGxpbmUgY3VzdG9tXCI+0JLQvtC50YLQuCDRh9C10YDQtdC3IEdvb2dsZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwidG9wXCI+XHJcbiAgPGFydGljbGU+XHJcbiAgICA8cCBjbGFzcz1cImxhYmVsXCI+0JrQvtC90YLQsNC60YLRizwvcD5cclxuICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cInZhbHVlXCI+YWxpbmEubWlraGF5bG92YS4wM0BtYWlsLnJ1PC9hPlxyXG4gIDwvYXJ0aWNsZT5cclxuICA8YXJ0aWNsZT5cclxuICAgIDxwIGNsYXNzPVwibGFiZWxcIj7QntGB0L3QvtCy0LDRgtC10LvRjNC90LjRhtCwPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJ2YWx1ZVwiPtCc0LjRhdCw0LnQu9C+0LLQsCDQkNC70LjQvdCwINCgMzM2NjI8L3A+XHJcbiAgPC9hcnRpY2xlPlxyXG4gIDxhcnRpY2xlIGNsYXNzPVwibG9uZ1wiPlxyXG4gICAgPHAgY2xhc3M9XCJsYWJlbFwiPtCh0L7RhtC40LDQu9GM0L3Ri9C1INGB0LXRgtC4PC9wPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cIlwiIGNsYXNzPVwidmFsdWVcIj5JbnN0YWdyYW08L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJcIiBjbGFzcz1cInZhbHVlXCI+VmtvbnRha3RlPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiXCIgY2xhc3M9XCJ2YWx1ZVwiPlRlbGVncmFtPC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvYXJ0aWNsZT5cclxuPC9kaXY+XHJcbjxzdmdcclxuICB3aWR0aD1cIjEyNDlcIlxyXG4gIGhlaWdodD1cIjE4MFwiXHJcbiAgdmlld0JveD1cIjAgMCAxMjQ5IDE4MFwiXHJcbiAgZmlsbD1cIm5vbmVcIlxyXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4+XHJcbiAgPHBhdGhcclxuICAgIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgZD1cIk0xLjMwNjUzIDE3OVYxNzkuNDQ1SDEuNzUwOThINDIuMzI1Nkg0Mi43N1YxNzlWNzAuNDAwNEg0Ny4wNzQ3TDgyLjQ3NzUgMTc5LjEzOEw4Mi41Nzc0IDE3OS40NDVIODIuOTAwMUgxMjAuOTM5SDEyMS4yNjJMMTIxLjM2MSAxNzkuMTM4TDE1Ni43NjQgNzAuNDAwNEgxNjEuMDY5VjE3OVYxNzkuNDQ1SDE2MS41MTNIMjAyLjA4OEgyMDIuNTMyVjE3OVYxLjQ4NjMzVjEuMDQxODhIMjAyLjA4OEgxMzkuOTU4SDEzOS42MzRMMTM5LjUzNSAxLjM1MDE3TDEwNC4xMzIgMTExLjM1NEg5OS43MDc0TDY0LjMwMzkgMS4zNTAxN0w2NC4yMDQ3IDEuMDQxODhINjMuODgwOEgxLjc1MDk4SDEuMzA2NTNWMS40ODYzM1YxNzlaTTIxOC4wNzIgMTc4Ljg1NkwyMTcuODcgMTc5LjQ0NUgyMTguNDkySDI2Mi44NzFIMjYzLjE5NUwyNjMuMjk0IDE3OS4xMzZMMjc0LjYwNiAxNDMuOTQySDM0Mi40MjhMMzUzLjc0IDE3OS4xMzZMMzUzLjgzOSAxNzkuNDQ1SDM1NC4xNjNIMzk4LjU0MkgzOTkuMTY0TDM5OC45NjIgMTc4Ljg1NkwzMzguMSAxLjM0MjE4TDMzNy45OTcgMS4wNDE4OEgzMzcuNjhIMjc5LjM1NEgyNzkuMDM3TDI3OC45MzQgMS4zNDIxOEwyMTguMDcyIDE3OC44NTZaTTQzNi4yOTUgMTc5VjE3OS40NDVINDM2LjczOUg0NzcuMzE0SDQ3Ny43NThWMTc5VjQxLjIzNzRINTI2Ljc2NEg1MjcuMjA4VjQwLjc5M1YxLjQ4NjMzVjEuMDQxODhINTI2Ljc2NEgzODcuMjg5SDM4Ni44NDRWMS40ODYzM1Y0MC43OTNWNDEuMjM3NEgzODcuMjg5SDQzNi4yOTVWMTc5Wk01NDkuMTAzIDE3OVYxNzkuNDQ1SDU0OS41NDdINjcxLjI3MUg2NzEuNzE2VjE3OVYxNDIuMjI5VjE0MS43ODVINjcxLjI3MUg1OTAuNTY2VjEwOC40MzlINjY2LjE5OUg2NjYuNjQ0VjEwNy45OTVWNzIuNDkxOVY3Mi4wNDc0SDY2Ni4xOTlINTkwLjU2NlYzOC43MDE1SDY3MS4yNzFINjcxLjcxNlYzOC4yNTcxVjEuNDg2MzNWMS4wNDE4OEg2NzEuMjcxSDU0OS41NDdINTQ5LjEwM1YxLjQ4NjMzVjE3OVpNNzAxLjE1OSAxNzlWMTc5LjQ0NUg3MDEuNjAzSDc0Mi4xNzhINzQyLjYyMlYxNzlWMTIyLjM4N0g3NDcuMDVMNzk3LjYzNSAxNzkuMjk1TDc5Ny43NjggMTc5LjQ0NUg3OTcuOTY4SDg0OC42ODZIODQ5LjY5NUw4NDkuMDE0IDE3OC43TDc5NS4wNzQgMTE5Ljc0M0M4MDMuNjAxIDExOC42NDggODExLjU3MiAxMTUuOTU5IDgxOC45ODUgMTExLjY3Nkw4MTguOTk0IDExMS42N0M4MzUuNzE3IDEwMS40MzIgODQ0LjA1OSA4NC45NTkyIDg0NC4wNTkgNjIuMzQ4MkM4NDQuMDU5IDQzLjk5NTggODM4LjYxNyAyOS4xNjkyIDgyNy43MDMgMTcuOTE0QzgxNi43OSA2LjY1OTczIDgwMi42MzggMS4wNDE4OCA3ODUuMjg4IDEuMDQxODhINzAxLjYwM0g3MDEuMTU5VjEuNDg2MzNWMTc5Wk03OTYuODggNzguNzg0M0w3OTYuODc5IDc4Ljc4NDlDNzkzLjI1MSA4Mi43NDMxIDc4OC41NTUgODQuNzI3IDc4Mi43NTIgODQuNzI3SDc0Mi42MjJWMzkuOTY5NEg3ODIuNzUyQzc4OC41NDkgMzkuOTY5NCA3OTMuMjQzIDQyLjAzMzIgNzk2Ljg3MyA0Ni4xNTg0TDc5Ni44OCA0Ni4xNjU1TDc5Ni44ODYgNDYuMTcyM0M4MDAuNjc4IDUwLjEyODcgODAyLjU5NSA1NS41MDMxIDgwMi41OTUgNjIuMzQ4MkM4MDIuNTk1IDY5LjE5MjYgODAwLjY3OCA3NC42NTYxIDc5Ni44OCA3OC43ODQzWk04NzMuNTIxIDE3OVYxNzkuNDQ1SDg3My45NjZIOTE0LjU0SDkxNC45ODVWMTc5VjEuNDg2MzNWMS4wNDE4OEg5MTQuNTRIODczLjk2Nkg4NzMuNTIxVjEuNDg2MzNWMTc5Wk05MzAuNTU0IDE3OC44NTZMOTMwLjM1MiAxNzkuNDQ1SDkzMC45NzRIOTc1LjM1M0g5NzUuNjc3TDk3NS43NzYgMTc5LjEzNkw5ODcuMDg4IDE0My45NDJIMTA1NC45MUwxMDY2LjIyIDE3OS4xMzZMMTA2Ni4zMiAxNzkuNDQ1SDEwNjYuNjVIMTExMS4wMkgxMTExLjY1TDExMTEuNDQgMTc4Ljg1NkwxMDUwLjU4IDEuMzQyMThMMTA1MC40OCAxLjA0MTg4SDEwNTAuMTZIOTkxLjgzNkg5OTEuNTE5TDk5MS40MTYgMS4zNDIxOEw5MzAuNTU0IDE3OC44NTZaTTExMjcuMTEgMTc5VjE3OS40NDVIMTEyNy41NkgxMjQ4LjAxSDEyNDguNDZWMTc5VjEzOS42OTNWMTM5LjI0OUgxMjQ4LjAxSDExNjguNThWMS40ODYzM1YxLjA0MTg4SDExNjguMTNIMTEyNy41NkgxMTI3LjExVjEuNDg2MzNWMTc5Wk0yODYuMzAzIDEwNy41NUwzMDYuMzA2IDQ1LjA0MTNIMzEwLjcyOEwzMzAuNzMxIDEwNy41NUgyODYuMzAzWk0xMDQzLjIxIDEwNy41NUg5OTguNzg1TDEwMTguNzkgNDUuMDQxM0gxMDIzLjIxTDEwNDMuMjEgMTA3LjU1WlwiXHJcbiAgICBmaWxsPVwiI0ZBRkFGQVwiXHJcbiAgICBzdHJva2U9XCIjRkFGQUZBXCJcclxuICAgIHN0cm9rZS13aWR0aD1cIjAuODg4ODg5XCJcclxuICAvPlxyXG48L3N2Zz5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gIDxhIGhyZWY9XCIvbWF0ZXJpYWwvaW5kZXguaHRtbFwiPk1BVEVSSUFMPC9hPlxyXG4gIDxuYXY+XHJcbiAgICA8dWwgY2xhc3M9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NhdGFsb2cvaW5kZXguaHRtbFwiPtCa0LDRgtCw0LvQvtCzPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj7QniDQvdCw0YE8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2Zhdm9yaXRlcy9pbmRleC5odG1sXCI+0JjQt9Cx0YDQsNC90L3QvtC1PC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9tYXRlcmlhbC9jYXJ0L2luZGV4Lmh0bWxcIj7QmtC+0YDQt9C40L3QsDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwic2lkZWJhci1oaWRkZW5cIj5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NyZWF0ZS9pbmRleC5odG1sXCI+0JTQvtCx0LDQstC40YLRjCDQv9C+0YHRgtC10YA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInNpZGViYXItaGlkZGVuIGJ1dHRvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBzaWRlYmFyTG9naW5CdG5cIj7QktC+0LnRgtC4PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBvdXRsaW5lIHNpZGViYXJSZWdpc3RlckJ0blwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgY2xhc3M9XCJ3aWRlXCI+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NhdGFsb2cvaW5kZXguaHRtbFwiPtCa0LDRgtCw0LvQvtCzPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj7QniDQvdCw0YE8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvbmF2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJidXR0b24tYXJlYVwiPlxyXG4gIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY3JlYXRlL2luZGV4Lmh0bWxcIiBjbGFzcz1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgID7QlNC+0LHQsNCy0LjRgtGMINC/0L7RgdGC0LXRgDwvYVxyXG4gID5cclxuICA8ZGl2IGNsYXNzPVwiaWNvbnMtd3JhcHBlclwiPlxyXG4gICAgPGEgaHJlZj1cIi9tYXRlcmlhbC9mYXZvdXJpdGVzL2luZGV4Lmh0bWxcIj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIGNsYXNzPVwiaGVhcnRcIlxyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xNi41NDcyIDMuNzQ5MDJDMTMuNTA0MSAzLjc0OTAyIDEyLjAwNDEgNi43NDkwMiAxMi4wMDQxIDYuNzQ5MDJDMTIuMDA0MSA2Ljc0OTAyIDEwLjUwNDEgMy43NDkwMiA3LjQ2MDk2IDMuNzQ5MDJDNC45ODc4MyAzLjc0OTAyIDMuMDI5MzkgNS44MTgwOSAzLjAwNDA4IDguMjg2OTlDMi45NTI1MiAxMy40MTE4IDcuMDY5NTUgMTcuMDU2NCAxMS41ODIyIDIwLjExOTJDMTEuNzA2NiAyMC4yMDM4IDExLjg1MzYgMjAuMjQ5MSAxMi4wMDQxIDIwLjI0OTFDMTIuMTU0NiAyMC4yNDkxIDEyLjMwMTUgMjAuMjAzOCAxMi40MjYgMjAuMTE5MkMxNi45MzgxIDE3LjA1NjQgMjEuMDU1MiAxMy40MTE4IDIxLjAwNDEgOC4yODY5OUMyMC45Nzg4IDUuODE4MDkgMTkuMDIwMyAzLjc0OTAyIDE2LjU0NzIgMy43NDkwMlpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgaHJlZj1cIi9tYXRlcmlhbC9jYXJ0L2luZGV4Lmh0bWxcIj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIGNsYXNzPVwiY2FydFwiXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTguMjQ2NCAyMC4yNDlDOC42NjA2MSAyMC4yNDkgOC45OTY0IDE5LjkxMzIgOC45OTY0IDE5LjQ5OUM4Ljk5NjQgMTkuMDg0OCA4LjY2MDYxIDE4Ljc0OSA4LjI0NjQgMTguNzQ5QzcuODMyMTkgMTguNzQ5IDcuNDk2NCAxOS4wODQ4IDcuNDk2NCAxOS40OTlDNy40OTY0IDE5LjkxMzIgNy44MzIxOSAyMC4yNDkgOC4yNDY0IDIwLjI0OVpcIlxyXG4gICAgICAgICAgZmlsbD1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTcuODM0MSAyMC4yNDlDMTguMjQ4MyAyMC4yNDkgMTguNTg0MSAxOS45MTMyIDE4LjU4NDEgMTkuNDk5QzE4LjU4NDEgMTkuMDg0OCAxOC4yNDgzIDE4Ljc0OSAxNy44MzQxIDE4Ljc0OUMxNy40MTk5IDE4Ljc0OSAxNy4wODQxIDE5LjA4NDggMTcuMDg0MSAxOS40OTlDMTcuMDg0MSAxOS45MTMyIDE3LjQxOTkgMjAuMjQ5IDE3LjgzNDEgMjAuMjQ5WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTk1MTRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0yLjI0NjQgMy43NDkwMkg1LjI0NjRMNy40OTY0IDE2LjQ5OUgxOS40OTY0XCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTUxNFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTcuNDk2NCAxMy41SDE5LjE4ODlDMTkuMjc1NiAxMy41MDAxIDE5LjM1OTcgMTMuNDcwMSAxOS40MjY4IDEzLjQxNTFDMTkuNDkzOSAxMy4zNjAxIDE5LjUzOTggMTMuMjgzNiAxOS41NTY5IDEzLjE5ODZMMjAuOTA2OSA2LjQ0ODU5QzIwLjkxNzggNi4zOTQxNyAyMC45MTY0IDYuMzM4IDIwLjkwMyA2LjI4NDE0QzIwLjg4OTUgNi4yMzAyOSAyMC44NjQzIDYuMTgwMDkgMjAuODI5MSA2LjEzNzE3QzIwLjc5MzkgNi4wOTQyNiAyMC43NDk2IDYuMDU5NjkgMjAuNjk5NCA2LjAzNTk3QzIwLjY0OTIgNi4wMTIyNSAyMC41OTQ0IDUuOTk5OTYgMjAuNTM4OSA2SDUuOTk2NFwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTk1MTRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBub3JtYWwgbG9naW5CdG5cIj7QktC+0LnRgtC4PC9idXR0b24+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBvdXRsaW5lIHJlZ2lzdGVyQnRuXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnV0dG9uXCI+XHJcbiAgPHNwYW4+PC9zcGFuPlxyXG48L2J1dHRvbj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJzcGFuc1wiPlxyXG4gICAg0KDQsNC30LzQtdGAINC60LDRgNGC0LjQvdC60Lg6IDxzcGFuIGNsYXNzPVwiZmlsZVNpemVcIj5YeFg8L3NwYW4+IHB4XHJcbiAgICA8YnIgLz7QodC+0L7RgtC90L7RiNC10L3QuNC1INGB0YLQvtGA0L7QvSAo0YHQvCk6XHJcbiAgICA8c3BhbiBjbGFzcz1cInBpY3R1cmVTaXplXCI+WCB8IFggfCBYPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICA8aDI+0JTQvtCx0LDQstC40YLRjCDQv9C+0YHRgtC10YA8L2gyPlxyXG4gICAgPHVsIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCd0LDQt9Cy0LDQvdC40LU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1XCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCm0LXQvdCwPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KbQtdC90LBcIlxyXG4gICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDUwJVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRhcmVhXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj7QntC/0LjRgdCw0L3QuNC1PC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0YLQtdC60YHRglwiXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgaWQ9XCJcIlxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBjdXN0b21cIj7QktGL0LvQvtC20LjRgtGMINC/0L7RgdGC0LXRgDwvYnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+XHJcbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktYnV0dG9uLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktYnV0dG9uLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWZvcm0uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1mb3JtLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LXBvc3Rlci1mcmFtZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LXBvc3Rlci1mcmFtZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1kaWFsb2dfcG9wdXAuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1kaWFsb2dfcG9wdXAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktZm9vdGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktZm9vdGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWhlYWRlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWhlYWRlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1wb3N0ZXJfY3JlYXRlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktcG9zdGVyX2NyZWF0ZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tb24uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tb24uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG4vKipcclxuICogQ3JlYXRlZCBieSBTZXJnaXUgyJhhbmRvciAobWlja3U3enUpIG9uIDEvMjcvMjAxNy5cclxuICogT3JpZ2luYWwgaWRlYTogaHR0cHM6Ly9naXRodWIuY29tL2dpanNyb2dlL3RpbHQuanNcclxuICogTUlUIExpY2Vuc2UuXHJcbiAqIFZlcnNpb24gMS44LjFcclxuICovXG5cbnZhciBWYW5pbGxhVGlsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmFuaWxsYVRpbHQoZWxlbWVudCkge1xuICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFuaWxsYVRpbHQpO1xuXG4gICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpKSB7XG4gICAgICB0aHJvdyBcIkNhbid0IGluaXRpYWxpemUgVmFuaWxsYVRpbHQgYmVjYXVzZSBcIiArIGVsZW1lbnQgKyBcIiBpcyBub3QgYSBOb2RlLlwiO1xuICAgIH1cblxuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLmNsaWVudFdpZHRoID0gbnVsbDtcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IG51bGw7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnRvcCA9IG51bGw7XG5cbiAgICAvLyBmb3IgR3lyb3Njb3BlIHNhbXBsaW5nXG4gICAgdGhpcy5nYW1tYXplcm8gPSBudWxsO1xuICAgIHRoaXMuYmV0YXplcm8gPSBudWxsO1xuICAgIHRoaXMubGFzdGdhbW1hemVybyA9IG51bGw7XG4gICAgdGhpcy5sYXN0YmV0YXplcm8gPSBudWxsO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVGltZW91dCA9IG51bGw7XG4gICAgdGhpcy51cGRhdGVDYWxsID0gbnVsbDtcbiAgICB0aGlzLmV2ZW50ID0gbnVsbDtcblxuICAgIHRoaXMudXBkYXRlQmluZCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEJpbmQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLmV4dGVuZFNldHRpbmdzKHNldHRpbmdzKTtcblxuICAgIHRoaXMucmV2ZXJzZSA9IHRoaXMuc2V0dGluZ3MucmV2ZXJzZSA/IC0xIDogMTtcbiAgICB0aGlzLnJlc2V0VG9TdGFydCA9IFZhbmlsbGFUaWx0LmlzU2V0dGluZ1RydWUodGhpcy5zZXR0aW5nc1tcInJlc2V0LXRvLXN0YXJ0XCJdKTtcbiAgICB0aGlzLmdsYXJlID0gVmFuaWxsYVRpbHQuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzLmdsYXJlKTtcbiAgICB0aGlzLmdsYXJlUHJlcmVuZGVyID0gVmFuaWxsYVRpbHQuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzW1wiZ2xhcmUtcHJlcmVuZGVyXCJdKTtcbiAgICB0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nID0gVmFuaWxsYVRpbHQuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzW1wiZnVsbC1wYWdlLWxpc3RlbmluZ1wiXSk7XG4gICAgdGhpcy5neXJvc2NvcGUgPSBWYW5pbGxhVGlsdC5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlKTtcbiAgICB0aGlzLmd5cm9zY29wZVNhbXBsZXMgPSB0aGlzLnNldHRpbmdzLmd5cm9zY29wZVNhbXBsZXM7XG5cbiAgICB0aGlzLmVsZW1lbnRMaXN0ZW5lciA9IHRoaXMuZ2V0RWxlbWVudExpc3RlbmVyKCk7XG5cbiAgICBpZiAodGhpcy5nbGFyZSkge1xuICAgICAgdGhpcy5wcmVwYXJlR2xhcmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mdWxsUGFnZUxpc3RlbmluZykge1xuICAgICAgdGhpcy51cGRhdGVDbGllbnRTaXplKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGlmICh0aGlzLnJlc2V0VG9TdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3RhcnRYID0gMDtcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3RhcnRZID0gMDtcbiAgICB9XG4gIH1cblxuICBWYW5pbGxhVGlsdC5pc1NldHRpbmdUcnVlID0gZnVuY3Rpb24gaXNTZXR0aW5nVHJ1ZShzZXR0aW5nKSB7XG4gICAgcmV0dXJuIHNldHRpbmcgPT09IFwiXCIgfHwgc2V0dGluZyA9PT0gdHJ1ZSB8fCBzZXR0aW5nID09PSAxO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIE1ldGhvZCByZXR1cm5zIGVsZW1lbnQgd2hhdCB3aWxsIGJlIGxpc3RlbiBtb3VzZSBldmVudHNcclxuICAgKiBAcmV0dXJuIHtOb2RlfVxyXG4gICAqL1xuXG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLmdldEVsZW1lbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGdldEVsZW1lbnRMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5mdWxsUGFnZUxpc3RlbmluZykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuc2V0dGluZ3NbXCJtb3VzZS1ldmVudC1lbGVtZW50XCJdID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YXIgbW91c2VFdmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3NbXCJtb3VzZS1ldmVudC1lbGVtZW50XCJdKTtcblxuICAgICAgaWYgKG1vdXNlRXZlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBtb3VzZUV2ZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5nc1tcIm1vdXNlLWV2ZW50LWVsZW1lbnRcIl0gaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5nc1tcIm1vdXNlLWV2ZW50LWVsZW1lbnRcIl07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfTtcblxuICAvKipcclxuICAgKiBNZXRob2Qgc2V0IGxpc3RlbiBtZXRob2RzIGZvciB0aGlzLmVsZW1lbnRMaXN0ZW5lclxyXG4gICAqIEByZXR1cm4ge05vZGV9XHJcbiAgICovXG5cblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLm9uTW91c2VFbnRlckJpbmQgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU1vdmVCaW5kID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZUxlYXZlQmluZCA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uQmluZCA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5lbGVtZW50TGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbk1vdXNlRW50ZXJCaW5kKTtcbiAgICB0aGlzLmVsZW1lbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uTW91c2VMZWF2ZUJpbmQpO1xuICAgIHRoaXMuZWxlbWVudExpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZUJpbmQpO1xuXG4gICAgaWYgKHRoaXMuZ2xhcmUgfHwgdGhpcy5mdWxsUGFnZUxpc3RlbmluZykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmd5cm9zY29wZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb25CaW5kKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXHJcbiAgICogTWV0aG9kIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZnJvbSBjdXJyZW50IHRoaXMuZWxlbWVudExpc3RlbmVyXHJcbiAgICovXG5cblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmVsZW1lbnRMaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uTW91c2VFbnRlckJpbmQpO1xuICAgIHRoaXMuZWxlbWVudExpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlQmluZCk7XG4gICAgdGhpcy5lbGVtZW50TGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlQmluZCk7XG5cbiAgICBpZiAodGhpcy5neXJvc2NvcGUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uQmluZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2xhcmUgfHwgdGhpcy5mdWxsUGFnZUxpc3RlbmluZykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQpO1xuICAgIH1cbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvblRpbWVvdXQpO1xuICAgIGlmICh0aGlzLnVwZGF0ZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQ2FsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLndpbGxDaGFuZ2UgPSBcIlwiO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICB0aGlzLnJlc2V0R2xhcmUoKTtcblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQgPSBudWxsO1xuICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5vbkRldmljZU9yaWVudGF0aW9uID0gZnVuY3Rpb24gb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5nYW1tYSA9PT0gbnVsbCB8fCBldmVudC5iZXRhID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVFbGVtZW50UG9zaXRpb24oKTtcblxuICAgIGlmICh0aGlzLmd5cm9zY29wZVNhbXBsZXMgPiAwKSB7XG4gICAgICB0aGlzLmxhc3RnYW1tYXplcm8gPSB0aGlzLmdhbW1hemVybztcbiAgICAgIHRoaXMubGFzdGJldGF6ZXJvID0gdGhpcy5iZXRhemVybztcblxuICAgICAgaWYgKHRoaXMuZ2FtbWF6ZXJvID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZ2FtbWF6ZXJvID0gZXZlbnQuZ2FtbWE7XG4gICAgICAgIHRoaXMuYmV0YXplcm8gPSBldmVudC5iZXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1tYXplcm8gPSAoZXZlbnQuZ2FtbWEgKyB0aGlzLmxhc3RnYW1tYXplcm8pIC8gMjtcbiAgICAgICAgdGhpcy5iZXRhemVybyA9IChldmVudC5iZXRhICsgdGhpcy5sYXN0YmV0YXplcm8pIC8gMjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5neXJvc2NvcGVTYW1wbGVzIC09IDE7XG4gICAgfVxuXG4gICAgdmFyIHRvdGFsQW5nbGVYID0gdGhpcy5zZXR0aW5ncy5neXJvc2NvcGVNYXhBbmdsZVggLSB0aGlzLnNldHRpbmdzLmd5cm9zY29wZU1pbkFuZ2xlWDtcbiAgICB2YXIgdG90YWxBbmdsZVkgPSB0aGlzLnNldHRpbmdzLmd5cm9zY29wZU1heEFuZ2xlWSAtIHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlTWluQW5nbGVZO1xuXG4gICAgdmFyIGRlZ3JlZXNQZXJQaXhlbFggPSB0b3RhbEFuZ2xlWCAvIHRoaXMud2lkdGg7XG4gICAgdmFyIGRlZ3JlZXNQZXJQaXhlbFkgPSB0b3RhbEFuZ2xlWSAvIHRoaXMuaGVpZ2h0O1xuXG4gICAgdmFyIGFuZ2xlWCA9IGV2ZW50LmdhbW1hIC0gKHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlTWluQW5nbGVYICsgdGhpcy5nYW1tYXplcm8pO1xuICAgIHZhciBhbmdsZVkgPSBldmVudC5iZXRhIC0gKHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlTWluQW5nbGVZICsgdGhpcy5iZXRhemVybyk7XG5cbiAgICB2YXIgcG9zWCA9IGFuZ2xlWCAvIGRlZ3JlZXNQZXJQaXhlbFg7XG4gICAgdmFyIHBvc1kgPSBhbmdsZVkgLyBkZWdyZWVzUGVyUGl4ZWxZO1xuXG4gICAgaWYgKHRoaXMudXBkYXRlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50ID0ge1xuICAgICAgY2xpZW50WDogcG9zWCArIHRoaXMubGVmdCxcbiAgICAgIGNsaWVudFk6IHBvc1kgKyB0aGlzLnRvcFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZUNhbGwgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVCaW5kKTtcbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMudXBkYXRlRWxlbWVudFBvc2l0aW9uKCk7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLndpbGxDaGFuZ2UgPSBcInRyYW5zZm9ybVwiO1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbigpO1xuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudXBkYXRlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy51cGRhdGVDYWxsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQmluZCk7XG4gIH07XG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLnNldFRyYW5zaXRpb24oKTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzLnJlc2V0KSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZXNldEJpbmQpO1xuICAgIH1cbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLm9uTW91c2VFbnRlcigpO1xuXG4gICAgaWYgKHRoaXMuZnVsbFBhZ2VMaXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICAgIGNsaWVudFg6ICh0aGlzLnNldHRpbmdzLnN0YXJ0WCArIHRoaXMuc2V0dGluZ3MubWF4KSAvICgyICogdGhpcy5zZXR0aW5ncy5tYXgpICogdGhpcy5jbGllbnRXaWR0aCxcbiAgICAgICAgY2xpZW50WTogKHRoaXMuc2V0dGluZ3Muc3RhcnRZICsgdGhpcy5zZXR0aW5ncy5tYXgpIC8gKDIgKiB0aGlzLnNldHRpbmdzLm1heCkgKiB0aGlzLmNsaWVudEhlaWdodFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ldmVudCA9IHtcbiAgICAgICAgY2xpZW50WDogdGhpcy5sZWZ0ICsgKHRoaXMuc2V0dGluZ3Muc3RhcnRYICsgdGhpcy5zZXR0aW5ncy5tYXgpIC8gKDIgKiB0aGlzLnNldHRpbmdzLm1heCkgKiB0aGlzLndpZHRoLFxuICAgICAgICBjbGllbnRZOiB0aGlzLnRvcCArICh0aGlzLnNldHRpbmdzLnN0YXJ0WSArIHRoaXMuc2V0dGluZ3MubWF4KSAvICgyICogdGhpcy5zZXR0aW5ncy5tYXgpICogdGhpcy5oZWlnaHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGJhY2t1cFNjYWxlID0gdGhpcy5zZXR0aW5ncy5zY2FsZTtcbiAgICB0aGlzLnNldHRpbmdzLnNjYWxlID0gMTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuc2V0dGluZ3Muc2NhbGUgPSBiYWNrdXBTY2FsZTtcbiAgICB0aGlzLnJlc2V0R2xhcmUoKTtcbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUucmVzZXRHbGFyZSA9IGZ1bmN0aW9uIHJlc2V0R2xhcmUoKSB7XG4gICAgaWYgKHRoaXMuZ2xhcmUpIHtcbiAgICAgIHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpXCI7XG4gICAgICB0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgfVxuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5nZXRWYWx1ZXMgPSBmdW5jdGlvbiBnZXRWYWx1ZXMoKSB7XG4gICAgdmFyIHggPSB2b2lkIDAsXG4gICAgICAgIHkgPSB2b2lkIDA7XG5cbiAgICBpZiAodGhpcy5mdWxsUGFnZUxpc3RlbmluZykge1xuICAgICAgeCA9IHRoaXMuZXZlbnQuY2xpZW50WCAvIHRoaXMuY2xpZW50V2lkdGg7XG4gICAgICB5ID0gdGhpcy5ldmVudC5jbGllbnRZIC8gdGhpcy5jbGllbnRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSAodGhpcy5ldmVudC5jbGllbnRYIC0gdGhpcy5sZWZ0KSAvIHRoaXMud2lkdGg7XG4gICAgICB5ID0gKHRoaXMuZXZlbnQuY2xpZW50WSAtIHRoaXMudG9wKSAvIHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIHggPSBNYXRoLm1pbihNYXRoLm1heCh4LCAwKSwgMSk7XG4gICAgeSA9IE1hdGgubWluKE1hdGgubWF4KHksIDApLCAxKTtcblxuICAgIHZhciB0aWx0WCA9ICh0aGlzLnJldmVyc2UgKiAodGhpcy5zZXR0aW5ncy5tYXggLSB4ICogdGhpcy5zZXR0aW5ncy5tYXggKiAyKSkudG9GaXhlZCgyKTtcbiAgICB2YXIgdGlsdFkgPSAodGhpcy5yZXZlcnNlICogKHkgKiB0aGlzLnNldHRpbmdzLm1heCAqIDIgLSB0aGlzLnNldHRpbmdzLm1heCkpLnRvRml4ZWQoMik7XG4gICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLmV2ZW50LmNsaWVudFggLSAodGhpcy5sZWZ0ICsgdGhpcy53aWR0aCAvIDIpLCAtKHRoaXMuZXZlbnQuY2xpZW50WSAtICh0aGlzLnRvcCArIHRoaXMuaGVpZ2h0IC8gMikpKSAqICgxODAgLyBNYXRoLlBJKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aWx0WDogdGlsdFgsXG4gICAgICB0aWx0WTogdGlsdFksXG4gICAgICBwZXJjZW50YWdlWDogeCAqIDEwMCxcbiAgICAgIHBlcmNlbnRhZ2VZOiB5ICogMTAwLFxuICAgICAgYW5nbGU6IGFuZ2xlXG4gICAgfTtcbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUudXBkYXRlRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gdXBkYXRlRWxlbWVudFBvc2l0aW9uKCkge1xuICAgIHZhciByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgdGhpcy5sZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIHRoaXMudG9wID0gcmVjdC50b3A7XG4gIH07XG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInBlcnNwZWN0aXZlKFwiICsgdGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZSArIFwicHgpIFwiICsgXCJyb3RhdGVYKFwiICsgKHRoaXMuc2V0dGluZ3MuYXhpcyA9PT0gXCJ4XCIgPyAwIDogdmFsdWVzLnRpbHRZKSArIFwiZGVnKSBcIiArIFwicm90YXRlWShcIiArICh0aGlzLnNldHRpbmdzLmF4aXMgPT09IFwieVwiID8gMCA6IHZhbHVlcy50aWx0WCkgKyBcImRlZykgXCIgKyBcInNjYWxlM2QoXCIgKyB0aGlzLnNldHRpbmdzLnNjYWxlICsgXCIsIFwiICsgdGhpcy5zZXR0aW5ncy5zY2FsZSArIFwiLCBcIiArIHRoaXMuc2V0dGluZ3Muc2NhbGUgKyBcIilcIjtcblxuICAgIGlmICh0aGlzLmdsYXJlKSB7XG4gICAgICB0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHZhbHVlcy5hbmdsZSArIFwiZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIjtcbiAgICAgIHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIlwiICsgdmFsdWVzLnBlcmNlbnRhZ2VZICogdGhpcy5zZXR0aW5nc1tcIm1heC1nbGFyZVwiXSAvIDEwMDtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ0aWx0Q2hhbmdlXCIsIHtcbiAgICAgIFwiZGV0YWlsXCI6IHZhbHVlc1xuICAgIH0pKTtcblxuICAgIHRoaXMudXBkYXRlQ2FsbCA9IG51bGw7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogQXBwZW5kcyB0aGUgZ2xhcmUgZWxlbWVudCAoaWYgZ2xhcmVQcmVyZW5kZXIgZXF1YWxzIGZhbHNlKVxyXG4gICAqIGFuZCBzZXRzIHRoZSBkZWZhdWx0IHN0eWxlXHJcbiAgICovXG5cblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUucHJlcGFyZUdsYXJlID0gZnVuY3Rpb24gcHJlcGFyZUdsYXJlKCkge1xuICAgIC8vIElmIG9wdGlvbiBwcmUtcmVuZGVyIGlzIGVuYWJsZWQgd2UgYXNzdW1lIGFsbCBodG1sL2NzcyBpcyBwcmVzZW50IGZvciBhbiBvcHRpbWFsIGdsYXJlIGVmZmVjdC5cbiAgICBpZiAoIXRoaXMuZ2xhcmVQcmVyZW5kZXIpIHtcbiAgICAgIC8vIENyZWF0ZSBnbGFyZSBlbGVtZW50XG4gICAgICB2YXIganNUaWx0R2xhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAganNUaWx0R2xhcmUuY2xhc3NMaXN0LmFkZChcImpzLXRpbHQtZ2xhcmVcIik7XG5cbiAgICAgIHZhciBqc1RpbHRHbGFyZUlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGpzVGlsdEdsYXJlSW5uZXIuY2xhc3NMaXN0LmFkZChcImpzLXRpbHQtZ2xhcmUtaW5uZXJcIik7XG5cbiAgICAgIGpzVGlsdEdsYXJlLmFwcGVuZENoaWxkKGpzVGlsdEdsYXJlSW5uZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGpzVGlsdEdsYXJlKTtcbiAgICB9XG5cbiAgICB0aGlzLmdsYXJlRWxlbWVudFdyYXBwZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aWx0LWdsYXJlXCIpO1xuICAgIHRoaXMuZ2xhcmVFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGlsdC1nbGFyZS1pbm5lclwiKTtcblxuICAgIGlmICh0aGlzLmdsYXJlUHJlcmVuZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudFdyYXBwZXIuc3R5bGUsIHtcbiAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgICAgXCJ0b3BcIjogXCIwXCIsXG4gICAgICBcImxlZnRcIjogXCIwXCIsXG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiLFxuICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiaW5oZXJpdFwiXG4gICAgfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLCB7XG4gICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgIFwidG9wXCI6IFwiNTAlXCIsXG4gICAgICBcImxlZnRcIjogXCI1MCVcIixcbiAgICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCIsXG4gICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKVwiLFxuICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgIFwidHJhbnNmb3JtLW9yaWdpblwiOiBcIjAlIDAlXCIsXG4gICAgICBcIm9wYWNpdHlcIjogXCIwXCJcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlR2xhcmVTaXplKCk7XG4gIH07XG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLnVwZGF0ZUdsYXJlU2l6ZSA9IGZ1bmN0aW9uIHVwZGF0ZUdsYXJlU2l6ZSgpIHtcbiAgICBpZiAodGhpcy5nbGFyZSkge1xuICAgICAgdmFyIGdsYXJlU2l6ZSA9ICh0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGggPiB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ID8gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoIDogdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCkgKiAyO1xuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLCB7XG4gICAgICAgIFwid2lkdGhcIjogZ2xhcmVTaXplICsgXCJweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBnbGFyZVNpemUgKyBcInB4XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUudXBkYXRlQ2xpZW50U2l6ZSA9IGZ1bmN0aW9uIHVwZGF0ZUNsaWVudFNpemUoKSB7XG4gICAgdGhpcy5jbGllbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUub25XaW5kb3dSZXNpemUgPSBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUdsYXJlU2l6ZSgpO1xuICAgIHRoaXMudXBkYXRlQ2xpZW50U2l6ZSgpO1xuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gc2V0VHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvblRpbWVvdXQpO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5zcGVlZCArIFwibXMgXCIgKyB0aGlzLnNldHRpbmdzLmVhc2luZztcbiAgICBpZiAodGhpcy5nbGFyZSkgdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSBcIiArIHRoaXMuc2V0dGluZ3Muc3BlZWQgKyBcIm1zIFwiICsgdGhpcy5zZXR0aW5ncy5lYXNpbmc7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xuICAgICAgaWYgKF90aGlzLmdsYXJlKSB7XG4gICAgICAgIF90aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcbiAgICAgIH1cbiAgICB9LCB0aGlzLnNldHRpbmdzLnNwZWVkKTtcbiAgfTtcblxuICAvKipcclxuICAgKiBNZXRob2QgcmV0dXJuIHBhdGNoZWQgc2V0dGluZ3Mgb2YgaW5zdGFuY2VcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNldHRpbmdzLnJldmVyc2UgLSByZXZlcnNlIHRoZSB0aWx0IGRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZXR0aW5ncy5tYXggLSBtYXggdGlsdCByb3RhdGlvbiAoZGVncmVlcylcclxuICAgKiBAcGFyYW0ge3N0YXJ0WH0gc2V0dGluZ3Muc3RhcnRYIC0gdGhlIHN0YXJ0aW5nIHRpbHQgb24gdGhlIFggYXhpcywgaW4gZGVncmVlcy4gRGVmYXVsdDogMFxyXG4gICAqIEBwYXJhbSB7c3RhcnRZfSBzZXR0aW5ncy5zdGFydFkgLSB0aGUgc3RhcnRpbmcgdGlsdCBvbiB0aGUgWSBheGlzLCBpbiBkZWdyZWVzLiBEZWZhdWx0OiAwXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNldHRpbmdzLnBlcnNwZWN0aXZlIC0gVHJhbnNmb3JtIHBlcnNwZWN0aXZlLCB0aGUgbG93ZXIgdGhlIG1vcmUgZXh0cmVtZSB0aGUgdGlsdCBnZXRzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNldHRpbmdzLmVhc2luZyAtIEVhc2luZyBvbiBlbnRlci9leGl0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNldHRpbmdzLnNjYWxlIC0gMiA9IDIwMCUsIDEuNSA9IDE1MCUsIGV0Yy4uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNldHRpbmdzLnNwZWVkIC0gU3BlZWQgb2YgdGhlIGVudGVyL2V4aXQgdHJhbnNpdGlvblxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0dGluZ3MudHJhbnNpdGlvbiAtIFNldCBhIHRyYW5zaXRpb24gb24gZW50ZXIvZXhpdFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IHNldHRpbmdzLmF4aXMgLSBXaGF0IGF4aXMgc2hvdWxkIGJlIGVuYWJsZWQuIENhbiBiZSBcInhcIiBvciBcInlcIlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0dGluZ3MuZ2xhcmUgLSBpZiBpdCBzaG91bGQgaGF2ZSBhIFwiZ2xhcmVcIiBlZmZlY3RcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2V0dGluZ3MubWF4LWdsYXJlIC0gdGhlIG1heGltdW0gXCJnbGFyZVwiIG9wYWNpdHkgKDEgPSAxMDAlLCAwLjUgPSA1MCUpXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy5nbGFyZS1wcmVyZW5kZXIgLSBmYWxzZSA9IFZhbmlsbGFUaWx0IGNyZWF0ZXMgdGhlIGdsYXJlIGVsZW1lbnRzIGZvciB5b3UsIG90aGVyd2lzZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0dGluZ3MuZnVsbC1wYWdlLWxpc3RlbmluZyAtIElmIHRydWUsIHBhcmFsbGF4IGVmZmVjdCB3aWxsIGxpc3RlbiB0byBtb3VzZSBtb3ZlIGV2ZW50cyBvbiB0aGUgd2hvbGUgZG9jdW1lbnQsIG5vdCBvbmx5IHRoZSBzZWxlY3RlZCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBzZXR0aW5ncy5tb3VzZS1ldmVudC1lbGVtZW50IC0gU3RyaW5nIHNlbGVjdG9yIG9yIGxpbmsgdG8gSFRNTC1lbGVtZW50IHdoYXQgd2lsbCBiZSBsaXN0ZW4gbW91c2UgZXZlbnRzXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy5yZXNldCAtIGZhbHNlID0gSWYgdGhlIHRpbHQgZWZmZWN0IGhhcyB0byBiZSByZXNldCBvbiBleGl0XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy5yZXNldC10by1zdGFydCAtIHRydWUgPSBPbiByZXNldCBldmVudCAobW91c2UgbGVhdmUpIHdpbGwgcmV0dXJuIHRvIGluaXRpYWwgc3RhcnQgYW5nbGUgKGlmIHN0YXJ0WCBvciBzdGFydFkgaXMgc2V0KVxyXG4gICAqIEBwYXJhbSB7Z3lyb3Njb3BlfSBzZXR0aW5ncy5neXJvc2NvcGUgLSBFbmFibGUgdGlsdGluZyBieSBkZXZpY2VvcmllbnRhdGlvbiBldmVudHNcclxuICAgKiBAcGFyYW0ge2d5cm9zY29wZVNlbnNpdGl2aXR5fSBzZXR0aW5ncy5neXJvc2NvcGVTZW5zaXRpdml0eSAtIEJldHdlZW4gMCBhbmQgMSAtIFRoZSBhbmdsZSBhdCB3aGljaCBtYXggdGlsdCBwb3NpdGlvbiBpcyByZWFjaGVkLiAxID0gOTBkZWcsIDAuNSA9IDQ1ZGVnLCBldGMuLlxyXG4gICAqIEBwYXJhbSB7Z3lyb3Njb3BlU2FtcGxlc30gc2V0dGluZ3MuZ3lyb3Njb3BlU2FtcGxlcyAtIEhvdyBtYW55IGd5cm9zY29wZSBtb3ZlcyB0byBkZWNpZGUgdGhlIHN0YXJ0aW5nIHBvc2l0aW9uLlxyXG4gICAqL1xuXG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLmV4dGVuZFNldHRpbmdzID0gZnVuY3Rpb24gZXh0ZW5kU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICB2YXIgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgICAgcmV2ZXJzZTogZmFsc2UsXG4gICAgICBtYXg6IDE1LFxuICAgICAgc3RhcnRYOiAwLFxuICAgICAgc3RhcnRZOiAwLFxuICAgICAgcGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKC4wMywuOTgsLjUyLC45OSlcIixcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgIHRyYW5zaXRpb246IHRydWUsXG4gICAgICBheGlzOiBudWxsLFxuICAgICAgZ2xhcmU6IGZhbHNlLFxuICAgICAgXCJtYXgtZ2xhcmVcIjogMSxcbiAgICAgIFwiZ2xhcmUtcHJlcmVuZGVyXCI6IGZhbHNlLFxuICAgICAgXCJmdWxsLXBhZ2UtbGlzdGVuaW5nXCI6IGZhbHNlLFxuICAgICAgXCJtb3VzZS1ldmVudC1lbGVtZW50XCI6IG51bGwsXG4gICAgICByZXNldDogdHJ1ZSxcbiAgICAgIFwicmVzZXQtdG8tc3RhcnRcIjogdHJ1ZSxcbiAgICAgIGd5cm9zY29wZTogdHJ1ZSxcbiAgICAgIGd5cm9zY29wZU1pbkFuZ2xlWDogLTQ1LFxuICAgICAgZ3lyb3Njb3BlTWF4QW5nbGVYOiA0NSxcbiAgICAgIGd5cm9zY29wZU1pbkFuZ2xlWTogLTQ1LFxuICAgICAgZ3lyb3Njb3BlTWF4QW5nbGVZOiA0NSxcbiAgICAgIGd5cm9zY29wZVNhbXBsZXM6IDEwXG4gICAgfTtcblxuICAgIHZhciBuZXdTZXR0aW5ncyA9IHt9O1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGRlZmF1bHRTZXR0aW5ncykge1xuICAgICAgaWYgKHByb3BlcnR5IGluIHNldHRpbmdzKSB7XG4gICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IHNldHRpbmdzW3Byb3BlcnR5XTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtdGlsdC1cIiArIHByb3BlcnR5KSkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGlsdC1cIiArIHByb3BlcnR5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXdTZXR0aW5nc1twcm9wZXJ0eV0gPSBKU09OLnBhcnNlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBuZXdTZXR0aW5nc1twcm9wZXJ0eV0gPSBhdHRyaWJ1dGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IGRlZmF1bHRTZXR0aW5nc1twcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1NldHRpbmdzO1xuICB9O1xuXG4gIFZhbmlsbGFUaWx0LmluaXQgPSBmdW5jdGlvbiBpbml0KGVsZW1lbnRzLCBzZXR0aW5ncykge1xuICAgIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICBpZiAoIShlbGVtZW50cyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGlmICghKFwidmFuaWxsYVRpbHRcIiBpbiBlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50LnZhbmlsbGFUaWx0ID0gbmV3IFZhbmlsbGFUaWx0KGVsZW1lbnQsIHNldHRpbmdzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gVmFuaWxsYVRpbHQ7XG59KCk7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLyogZXhwb3NlIHRoZSBjbGFzcyB0byB3aW5kb3cgKi9cbiAgd2luZG93LlZhbmlsbGFUaWx0ID0gVmFuaWxsYVRpbHQ7XG5cbiAgLyoqXHJcbiAgICogQXV0byBsb2FkXHJcbiAgICovXG4gIFZhbmlsbGFUaWx0LmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRpbHRdXCIpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWYW5pbGxhVGlsdDtcbiIsImltcG9ydCAnLi9teS1idXR0b24uc2Nzcyc7XHJcblxyXG4vL1VJLdC60L7QvNC/0L7QvdC10L3RgiBcItCa0L3QvtC/0LrQsFwiXHJcblxyXG4vLyDQsiDQv9GA0LjQvdGG0LjQv9C1INGN0YLQuNC8INC80L7QttC90L4g0L3QtSDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y9cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIG1vZGUsIGlzQ3VzdG9tKSB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG5cclxuICBzZXRUZXh0KGJ0biwgdGV4dCk7XHJcbiAgc2V0TW9kZShidG4sIG1vZGUsIGlzQ3VzdG9tKTtcclxuXHJcbiAgcmV0dXJuIGJ0bjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQSh0ZXh0LCBtb2RlLCBpc0N1c3RvbSwgbGluaykge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgYS5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuXHJcbiAgc2V0VGV4dChhLCB0ZXh0KTtcclxuICBzZXRNb2RlKGEsIG1vZGUsIGlzQ3VzdG9tKTtcclxuICBzZXRMaW5rKGEsIGxpbmspO1xyXG5cclxuICByZXR1cm4gYTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGV4dChidG4sIHRleHQpIHtcclxuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRNb2RlKGJ0biwgbW9kZSwgY3VzdG9tKSB7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQobW9kZSk7XHJcblxyXG4gIGlmIChjdXN0b20pIHtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjdXN0b20nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExpbmsoYSwgbGluaykge1xyXG4gIGEuaHJlZiA9IGxpbms7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGVCdXR0b24sXHJcbiAgY3JlYXRlQSxcclxufTtcclxuIiwiaW1wb3J0ICcuL215LWZvcm0uc2NzcydcclxuaW1wb3J0ICcuL3ZhbGlkYXRpb24uanMnXHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGUobGFiZWxQLCBwbGFjZWhvbGRlclApe1xyXG4vLyAgICAgY29uc3QgZm9ybW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuLy8gICAgIGZvcm1tLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwJylcclxuLy8gICAgIGNvbnN0IGxhYmVsSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuLy8gICAgIGZvcm1tLmFwcGVuZENoaWxkKGxhYmVsSClcclxuLy8gICAgIGNvbnN0IGlucHV0SCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuLy8gICAgIGlucHV0SC50eXBlID0gJ3RleHQnO1xyXG4vLyAgICAgZm9ybW0uYXBwZW5kQ2hpbGQoaW5wdXRIKVxyXG4vLyAgICAgY29uc3Qgc3BhbkggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuLy8gICAgIGZvcm1tLmFwcGVuZENoaWxkKHNwYW5IKVxyXG5cclxuLy8gICAgIHNldFRleHQoZm9ybW0sIGxhYmVsUCwgcGxhY2Vob2xkZXJQKTtcclxuXHJcbi8vICAgICByZXR1cm4gZm9ybW07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNldFRleHQoZm9ybW0sIGxhYmVsUCwgcGxhY2Vob2xkZXJQKXtcclxuLy8gICAgIGNvbnN0IGxhYmVsSCA9IGZvcm1tLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJylcclxuLy8gICAgIGNvbnN0IGlucHV0SCA9IGZvcm1tLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcclxuICAgIFxyXG4vLyAgICAgbGFiZWxILnRleHRDb250ZW50ID0gbGFiZWxQO1xyXG4vLyAgICAgaW5wdXRILnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJQO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB7XHJcbi8vICAgICBjcmVhdGVcclxuLy8gfSIsIlxyXG5cclxuZnVuY3Rpb24gc2V0dXBGb3JtVmFsaWRhdGlvbigpIHtcclxuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcclxuXHJcbiAgZm9ybXMuZm9yRWFjaChmb3JtID0+IHtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKCFjaGVja1ZhbGlkaXR5KGZvcm0pKSB7XHJcbiAgICAgICAgc2hvd0N1c3RvbUVycm9ycyhmb3JtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtLnN1Ym1pdCgpOyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRpdHkoZm9ybSl7XHJcblxyXG59XHJcbi8vIC8vINCf0L7QutCw0LfQsNGC0Ywg0LrQsNGB0YLQvtC80L3Ri9C1INC+0YjQuNCx0LrQuCDQsiBzcGFuINC00LvRjyDQstGB0LXRhSDQv9C+0LvQtdC5INGBIG5hbWVcclxuLy8gZnVuY3Rpb24gc2hvd0N1c3RvbUVycm9ycyhmb3JtKSB7XHJcbi8vICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFsnKTsgLy8g0J/QvtC70Y8g0YEgbmFtZVxyXG5cclxuLy8gICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbi8vICAgICBjb25zdCBlcnJvclNwYW4gPSBnZXRFcnJvclNwYW4oaW5wdXQpO1xyXG5cclxuLy8gICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuLy8gICAgICAgc2hvd0Vycm9yKGlucHV0LCBlcnJvclNwYW4pO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgY2xlYXJFcnJvcihlcnJvclNwYW4pO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQn9C+0LrQsNC30LDRgtGMINGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVxyXG4vLyBmdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIGVycm9yU3Bhbikge1xyXG4vLyAgIGxldCBtZXNzYWdlID0gJyc7XHJcblxyXG4vLyAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuLy8gICAgIG1lc3NhZ2UgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XHJcbi8vICAgICBtZXNzYWdlID0gJ9CS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3QvtC1INC30L3QsNGH0LXQvdC40LUnO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuLy8gICAgIG1lc3NhZ2UgPSBg0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwICR7aW5wdXQubWluTGVuZ3RofSDRgdC40LzQstC+0LvQvtCyLiDQktCy0LXQtNC10L3QviAke2lucHV0LnZhbHVlLmxlbmd0aH1gO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XHJcbi8vICAgICBtZXNzYWdlID0gJ9CX0L3QsNGH0LXQvdC40LUg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDRhNC+0YDQvNCw0YLRgyc7XHJcbi8vICAgfVxyXG5cclxuLy8gICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQntGH0LjRgdGC0LjRgtGMINGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVxyXG4vLyBmdW5jdGlvbiBjbGVhckVycm9yKGVycm9yU3Bhbikge1xyXG4vLyAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9ICcnO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQndCw0LnRgtC4INC40LvQuCDRgdC+0LfQtNCw0YLRjCBzcGFuINC00LvRjyDRgdC+0L7QsdGJ0LXQvdC40Y8g0L7QsSDQvtGI0LjQsdC60LVcclxuLy8gZnVuY3Rpb24gZ2V0RXJyb3JTcGFuKGlucHV0KSB7XHJcbi8vICAgbGV0IGVycm9yU3BhbiA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcclxuLy8gICBpZiAoIWVycm9yU3Bhbikge1xyXG4vLyAgICAgZXJyb3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcclxuLy8gICAgIGlucHV0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JTcGFuKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIGVycm9yU3BhbjtcclxuLy8gfVxyXG5cclxuLy8gLy8g0JfQsNC/0YPRgdC6INCy0LDQu9C40LTQsNGG0LjQuCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbi8vICAgc2V0dXBGb3JtVmFsaWRhdGlvbigpO1xyXG4vLyB9KTtcclxuIiwiaW1wb3J0IFZhbmlsbGFUaWx0IGZyb20gJ3ZhbmlsbGEtdGlsdCc7XHJcbmltcG9ydCBwb3N0ZXJIVE1MIGZyb20gJy4vaW5kZXguaHRtbCc7XHJcbmltcG9ydCBzcmNzZXRHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVycy9zcmNzZXRHZW5lcmF0b3InO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9pbWFnZSA2NS5wbmcnO1xyXG5pbXBvcnQgJy4vbXktcG9zdGVyLWZyYW1lLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBvc3Rlcl9pbWcpIHtcclxuICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJylcclxuICBmcmFtZS5jbGFzc0xpc3QuYWRkKCdwb3N0ZXItbGVmdCcpO1xyXG4gIGZyYW1lLmlubmVySFRNTCA9IHBvc3RlckhUTUw7XHJcblxyXG4gIGlmICghcG9zdGVyX2ltZyl7XHJcbiAgICBwb3N0ZXJfaW1nID0gSW1hZ2U7XHJcbiAgfVxyXG4gIGNvbnN0IHBpY3R1cmUgPSBzcmNzZXRHZW5lcmF0b3IuZ2VuZXJhdGUocG9zdGVyX2ltZyk7XHJcbiAgY29uc3QgY2FyZENvbnQgPSBmcmFtZS5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcclxuICBjYXJkQ29udC5hcHBlbmRDaGlsZChwaWN0dXJlKTtcclxuXHJcbiAgYWRkVGlsdChmcmFtZS5xdWVyeVNlbGVjdG9yKCcudGlsdC1jb250YWluZXInKSk7XHJcbiAgcmV0dXJuIGZyYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUaWx0KGNhcmQpIHtcclxuICBWYW5pbGxhVGlsdC5pbml0KGNhcmQsIHtcclxuICAgIG1heDogNyxcclxuICAgIHJldmVyc2U6IHRydWUsXHJcbiAgICAvLyBcIm1vdXNlLWV2ZW50LWVsZW1lbnRcIjogXCJib2R5XCIsXHJcbiAgICAvLyBzcGVlZDogNDAwLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBwYXJzZVNyY3NldCwgc3RyaW5naWZ5U3Jjc2V0IH0gZnJvbSAnc3Jjc2V0JztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlKGltZ19wYXRoKSB7XHJcbiAgY29uc3QgZ2VuZXJhdGVkU3Jjc2V0ID0gc3RyaW5naWZ5U3Jjc2V0KFtcclxuICAgIHsgdXJsOiBpbWdfcGF0aCwgd2lkdGg6IDc2OCB9LFxyXG4gICAgeyB1cmw6IGltZ19wYXRoLCB3aWR0aDogMTIwMCB9XHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nLnNyY3NldCA9IGdlbmVyYXRlZFNyY3NldDtcclxuICBpbWcuc3JjID0gaW1nX3BhdGg7XHJcblxyXG4gIHBpY3R1cmUuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICBcclxuICByZXR1cm4gcGljdHVyZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdlbmVyYXRlLFxyXG59IiwiaW1wb3J0ICcuL215LWRpYWxvZ19wb3B1cC5zY3NzJztcclxuaW1wb3J0IGxvZ2luSFRNTCBmcm9tICcuL2xvZ2luLmh0bWwnO1xyXG5pbXBvcnQgcmVnaXN0ZXJIVE1MIGZyb20gJy4vcmVnaXN0ZXIuaHRtbCc7XHJcbmltcG9ydCBmb3Jnb3RIVE1MIGZyb20gJy4vZm9yZ290Lmh0bWwnO1xyXG5cclxuaW1wb3J0IG15Rm9ybSBmcm9tICcuLi8uLi9VSS9teS1mb3JtL215LWZvcm0nO1xyXG5pbXBvcnQgbXlCdXR0b24gZnJvbSAnLi4vLi4vVUkvbXktYnV0dG9uL215LWJ1dHRvbic7XHJcblxyXG4vLyBpbXBvcnQgXCIuL3ZhbGlkYXRpb24uanNcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnRNYXAgPSBuZXcgTWFwKFtcclxuICBbJ2xvZ2luJywgbG9naW5IVE1MXSxcclxuICBbJ3JlZ2lzdGVyJywgcmVnaXN0ZXJIVE1MXSxcclxuICBbJ2ZvcmdvdCcsIGZvcmdvdEhUTUxdLFxyXG5dKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICBjb25zdCBwb3B1cFN5c3RlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHBvcHVwU3lzdGVtKTtcclxuICB9KTtcclxuXHJcbiAgY29udGVudE1hcC5mb3JFYWNoKChjb250ZW50LCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1dpbmRvdy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgbmV3V2luZG93LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1wb3B1cCcsIHR5cGUpO1xyXG4gICAgcG9wdXBTeXN0ZW0uYXBwZW5kQ2hpbGQobmV3V2luZG93KTtcclxuICB9KTtcclxuXHJcbiAgYWRkQ2xvc2VMb2dpYyhwb3B1cFN5c3RlbSk7XHJcbiAgc2V0TGlua3MocG9wdXBTeXN0ZW0pO1xyXG5cclxuICByZXR1cm4gcG9wdXBTeXN0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsb3NlTG9naWMocG9wdXBTeXN0ZW0pIHtcclxuICBwb3B1cFN5c3RlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdCgnLmRpYWxvZy1wb3B1cC5hY3RpdmUnKSkge1xyXG4gICAgICBjbG9zZUFsbChwb3B1cFN5c3RlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHBvcHVwU3lzdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xvc2VcIikuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNsb3NlQWxsKHBvcHVwU3lzdGVtKTtcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgcG9wdXBTeXN0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmRpYWxvZy1wb3B1cCcpLmZvckVhY2goKGRpYWxvZykgPT4ge1xyXG4gICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEJ1dHRvbkFzT3BlbmVyKHBvcHVwU3lzdGVtLCB0eXBlLCBidXR0b24pIHtcclxuICBpZiAoYnV0dG9uKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuUG9wdXAocG9wdXBTeXN0ZW0sIHR5cGUpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihgQnV0dG9uIGZvciB0eXBlICR7dHlwZX0gbm90IGZvdW5kYCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMaW5rcyhwb3B1cFN5c3RlbSkge1xyXG4gIFsncmVnaXN0ZXInLCAnbG9naW4nLCAnZm9yZ290J10uZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgcG9wdXBTeXN0ZW0ucXVlcnlTZWxlY3RvckFsbChgLiR7dHlwZX1MaW5rYCkuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICBzZXRMaW5rQXNPcGVuZXIocG9wdXBTeXN0ZW0sIHR5cGUsIGxpbmspO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExpbmtBc09wZW5lcihwb3B1cFN5c3RlbSwgdHlwZSwgbGluaykge1xyXG4gIGlmIChsaW5rKSB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNsb3NlQWxsKHBvcHVwU3lzdGVtKTtcclxuICAgICAgb3BlblBvcHVwKHBvcHVwU3lzdGVtLCB0eXBlKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBMaW5rIGZvciB0eXBlICR7dHlwZX0gbm90IGZvdW5kYCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuUG9wdXAocG9wdXBTeXN0ZW0sIHR5cGUpIHtcclxuICBwb3B1cFN5c3RlbS5jbGFzc0xpc3QuYWRkKCdwb3AtYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIHBvcHVwU3lzdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlQWxsKHBvcHVwU3lzdGVtKSB7XHJcbiAgcG9wdXBTeXN0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncG9wLWFjdGl2ZScpO1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgcG9wdXBTeXN0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmRpYWxvZy1wb3B1cC5hY3RpdmUnKS5mb3JFYWNoKChkaWFsb2cpID0+IHtcclxuICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZSxcclxuICBzZXRCdXR0b25Bc09wZW5lcixcclxufTtcclxuIiwiaW1wb3J0ICcuL215LWZvb3Rlci5zY3NzJztcclxuaW1wb3J0IGZvb3RlckhUTUwgZnJvbSAnLi9pbmRleC5odG1sJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcclxuICBmb290ZXIuaW5uZXJIVE1MID0gZm9vdGVySFRNTDtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGlmIChmb290ZXIpIHtcclxuICAgICAgY29uc3Qgc3ZnUGF0aCA9IGZvb3Rlci5xdWVyeVNlbGVjdG9yKCdzdmcgcGF0aCcpO1xyXG4gIFxyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgc3ZnUGF0aC5zdHlsZS5maWxsID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN2Z1BhdGguc3R5bGUuZmlsbCA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuN1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShmb290ZXIpO1xyXG4gICAgfSBcclxuICB9KTtcclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlLFxyXG59O1xyXG4iLCJpbXBvcnQgJy4vbXktaGVhZGVyLnNjc3MnO1xyXG5pbXBvcnQgaGVhZGVySFRNTCBmcm9tICcuL2luZGV4Lmh0bWwnO1xyXG5pbXBvcnQgbXlEaWFsb2dfcG9wdXAgZnJvbSAnLi4vZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XHJcbiAgaGVhZGVyLmlubmVySFRNTCA9IGhlYWRlckhUTUw7XHJcblxyXG4gIGNvbnN0IGRpYWxvZ3MgPSBteURpYWxvZ19wb3B1cC5jcmVhdGUoKTtcclxuXHJcbiAgY29uc3QgbG9naW5CdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmxvZ2luQnRuJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJCdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyQnRuJyk7XHJcbiAgY29uc3Qgc2lkZWJhckxvZ2luQnRuID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyTG9naW5CdG4nKTtcclxuICBjb25zdCBzaWRlYmFyUmVnaXN0ZXJCdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJSZWdpc3RlckJ0bicpO1xyXG4gIC8vIGNvbnN0IGZvcmdvdEJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuZm9yZ290QnRuJyk7XHJcblxyXG4gIG15RGlhbG9nX3BvcHVwLnNldEJ1dHRvbkFzT3BlbmVyKGRpYWxvZ3MsICdsb2dpbicsIGxvZ2luQnRuKTtcclxuICBteURpYWxvZ19wb3B1cC5zZXRCdXR0b25Bc09wZW5lcihkaWFsb2dzLCAncmVnaXN0ZXInLCByZWdpc3RlckJ0bik7XHJcbiAgbXlEaWFsb2dfcG9wdXAuc2V0QnV0dG9uQXNPcGVuZXIoZGlhbG9ncywgJ2xvZ2luJywgc2lkZWJhckxvZ2luQnRuKTtcclxuICBteURpYWxvZ19wb3B1cC5zZXRCdXR0b25Bc09wZW5lcihkaWFsb2dzLCAncmVnaXN0ZXInLCBzaWRlYmFyUmVnaXN0ZXJCdG4pO1xyXG4gIC8vIG15RGlhbG9nX3BvcHVwLnNldEFzT3BlbmVyKGRpYWxvZ3MsICdmb3Jnb3QnLCBmb3Jnb3RCdG4pO1xyXG5cclxuICBhZGRTaWRlQmFyKGhlYWRlcik7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNpZGVCYXIoaGVhZGVyKSB7XHJcbiAgY29uc3QgaWNvbiA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKTtcclxuICBjb25zdCBzaWRlYmFyID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcblxyXG4gIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZSxcclxufTtcclxuIiwiaW1wb3J0IGNyZWF0ZUhUTUwgZnJvbSAnLi9pbmRleC5odG1sJztcclxuaW1wb3J0IG15UG9zdGVyRnJhbWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9teS1wb3N0ZXItZnJhbWUvbXktcG9zdGVyLWZyYW1lJztcclxuaW1wb3J0ICcuL215LXBvc3Rlcl9jcmVhdGUuc2Nzcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2RvYmF2aXQuc3ZnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoJ3Bvc3Rlci1jcmVhdGUnKTtcclxuICBjcmVhdGUuaW5uZXJIVE1MID0gY3JlYXRlSFRNTDtcclxuXHJcbiAgY29uc3QgZnJhbWUgPSBteVBvc3RlckZyYW1lLmNyZWF0ZShJbWFnZSk7XHJcbiAgY29uc3QgbGVmdCA9IGNyZWF0ZS5xdWVyeVNlbGVjdG9yKCcubGVmdCcpO1xyXG5cclxuICBsZWZ0Lmluc2VydEJlZm9yZShmcmFtZSwgY3JlYXRlLnF1ZXJ5U2VsZWN0b3IoJy5zcGFucycpKTtcclxuXHJcbiAgY29uc3QgaW1nID0gbGVmdC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICBpbWcuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcclxuICByZXR1cm4gY3JlYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlLFxyXG59O1xyXG4iLCIvKipcblRoaXMgcmVnZXggcmVwcmVzZW50cyBhIGxvb3NlIHJ1bGUgb2YgYW4g4oCcaW1hZ2UgY2FuZGlkYXRlIHN0cmluZ+KAnS5cblxuQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbWFnZXMuaHRtbCNzcmNzZXQtYXR0cmlidXRlXG5cbkFuIOKAnGltYWdlIGNhbmRpZGF0ZSBzdHJpbmfigJ0gcm91Z2hseSBjb25zaXN0cyBvZiB0aGUgZm9sbG93aW5nOlxuMS4gWmVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy5cbjIuIEEgbm9uLWVtcHR5IFVSTCB0aGF0IGRvZXMgbm90IHN0YXJ0IG9yIGVuZCB3aXRoIGAsYC5cbjMuIFplcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG40LiBBbiBvcHRpb25hbCDigJxkZXNjcmlwdG9y4oCdIHRoYXQgc3RhcnRzIHdpdGggYSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbjUuIFplcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG42LiBFYWNoIGltYWdlIGNhbmRpZGF0ZSBzdHJpbmcgaXMgc2VwYXJhdGVkIGJ5IGEgYCxgLlxuXG5XZSBpbnRlbnRpb25hbGx5IGltcGxlbWVudCBhIGxvb3NlIHJ1bGUgaGVyZSBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIG1vcmUgYWdncmVzc2l2ZSBlcnJvciBoYW5kbGluZyBhbmQgcmVwb3J0aW5nIGluIHRoZSBiZWxvdyBjb2RlLlxuKi9cbmNvbnN0IGltYWdlQ2FuZGlkYXRlUmVnZXggPSAvXFxzKihbXixdXFxTKlteLF0oPzpcXHMrW14sXSspPylcXHMqKD86LHwkKS87XG5cbmNvbnN0IGR1cGxpY2F0ZURlc2NyaXB0b3JDaGVjayA9IChhbGxEZXNjcmlwdG9ycywgdmFsdWUsIHBvc3RmaXgpID0+IHtcblx0YWxsRGVzY3JpcHRvcnNbcG9zdGZpeF0gPSBhbGxEZXNjcmlwdG9yc1twb3N0Zml4XSB8fCB7fTtcblx0aWYgKGFsbERlc2NyaXB0b3JzW3Bvc3RmaXhdW3ZhbHVlXSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgTm8gbW9yZSB0aGFuIG9uZSBpbWFnZSBjYW5kaWRhdGUgaXMgYWxsb3dlZCBmb3IgYSBnaXZlbiBkZXNjcmlwdG9yOiAke3ZhbHVlfSR7cG9zdGZpeH1gKTtcblx0fVxuXG5cdGFsbERlc2NyaXB0b3JzW3Bvc3RmaXhdW3ZhbHVlXSA9IHRydWU7XG59O1xuXG5jb25zdCBmYWxsYmFja0Rlc2NyaXB0b3JEdXBsaWNhdGVDaGVjayA9IGFsbERlc2NyaXB0b3JzID0+IHtcblx0aWYgKGFsbERlc2NyaXB0b3JzLmZhbGxiYWNrKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdPbmx5IG9uZSBmYWxsYmFjayBpbWFnZSBjYW5kaWRhdGUgaXMgYWxsb3dlZCcpO1xuXHR9XG5cblx0Ly8gVE9ETzogVXNlIGA/YC5cblx0aWYgKGFsbERlc2NyaXB0b3JzLnggJiYgYWxsRGVzY3JpcHRvcnMueFsnMSddKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdBIGZhbGxiYWNrIGltYWdlIGlzIGVxdWl2YWxlbnQgdG8gYSAxeCBkZXNjcmlwdG9yLCBwcm92aWRpbmcgYm90aCBpcyBpbnZhbGlkLicpO1xuXHR9XG5cblx0YWxsRGVzY3JpcHRvcnMuZmFsbGJhY2sgPSB0cnVlO1xufTtcblxuY29uc3QgZGVzY3JpcHRvckNvdW50Q2hlY2sgPSAoYWxsRGVzY3JpcHRvcnMsIGN1cnJlbnREZXNjcmlwdG9ycykgPT4ge1xuXHRpZiAoY3VycmVudERlc2NyaXB0b3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGZhbGxiYWNrRGVzY3JpcHRvckR1cGxpY2F0ZUNoZWNrKGFsbERlc2NyaXB0b3JzKTtcblx0fSBlbHNlIGlmIChjdXJyZW50RGVzY3JpcHRvcnMubGVuZ3RoID4gMSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgSW1hZ2UgY2FuZGlkYXRlIG1heSBoYXZlIG5vIG1vcmUgdGhhbiBvbmUgZGVzY3JpcHRvciwgZm91bmQgJHtjdXJyZW50RGVzY3JpcHRvcnMubGVuZ3RofTogJHtjdXJyZW50RGVzY3JpcHRvcnMuam9pbignICcpfWApO1xuXHR9XG59O1xuXG5jb25zdCB2YWxpZERlc2NyaXB0b3JDaGVjayA9ICh2YWx1ZSwgcG9zdGZpeCwgZGVzY3JpcHRvcikgPT4ge1xuXHRpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZGVzY3JpcHRvciB8fCB2YWx1ZX0gaXMgbm90IGEgdmFsaWQgbnVtYmVyYCk7XG5cdH1cblxuXHRzd2l0Y2ggKHBvc3RmaXgpIHtcblx0XHRjYXNlICd3Jzoge1xuXHRcdFx0aWYgKHZhbHVlIDw9IDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdXaWR0aCBkZXNjcmlwdG9yIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8nKTtcblx0XHRcdH0gZWxzZSBpZiAoIU51bWJlci5pc0ludGVnZXIodmFsdWUpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1dpZHRoIGRlc2NyaXB0b3IgbXVzdCBiZSBhbiBpbnRlZ2VyJyk7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGNhc2UgJ3gnOiB7XG5cdFx0XHRpZiAodmFsdWUgPD0gMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BpeGVsIGRlbnNpdHkgZGVzY3JpcHRvciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvJyk7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGNhc2UgJ2gnOiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0hlaWdodCBkZXNjcmlwdG9yIGlzIG5vIGxvbmdlciBhbGxvd2VkJyk7XG5cdFx0fVxuXG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyY3NldCBkZXNjcmlwdG9yOiAke2Rlc2NyaXB0b3J9YCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTcmNzZXQoc3RyaW5nLCB7c3RyaWN0ID0gZmFsc2V9ID0ge30pIHtcblx0Y29uc3QgYWxsRGVzY3JpcHRvcnMgPSBzdHJpY3QgPyB7fSA6IHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1xccj9cXG4vLCAnJylcblx0XHQucmVwbGFjZSgvLFxccysvLCAnLCAnKVxuXHRcdC5zcGxpdChpbWFnZUNhbmRpZGF0ZVJlZ2V4KVxuXHRcdC5maWx0ZXIoKHBhcnQsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDEpXG5cdFx0Lm1hcChwYXJ0ID0+IHtcblx0XHRcdGNvbnN0IFt1cmwsIC4uLmRlc2NyaXB0b3JzXSA9IHBhcnQudHJpbSgpLnNwbGl0KC9cXHMrLyk7XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IHt1cmx9O1xuXG5cdFx0XHRpZiAoc3RyaWN0KSB7XG5cdFx0XHRcdGRlc2NyaXB0b3JDb3VudENoZWNrKGFsbERlc2NyaXB0b3JzLCBkZXNjcmlwdG9ycyk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgZGVzY3JpcHRvciBvZiBkZXNjcmlwdG9ycykge1xuXHRcdFx0XHRjb25zdCBwb3N0Zml4ID0gZGVzY3JpcHRvcltkZXNjcmlwdG9yLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUZsb2F0KGRlc2NyaXB0b3Iuc2xpY2UoMCwgLTEpKTtcblxuXHRcdFx0XHRpZiAoc3RyaWN0KSB7XG5cdFx0XHRcdFx0dmFsaWREZXNjcmlwdG9yQ2hlY2sodmFsdWUsIHBvc3RmaXgsIGRlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdGR1cGxpY2F0ZURlc2NyaXB0b3JDaGVjayhhbGxEZXNjcmlwdG9ycywgdmFsdWUsIHBvc3RmaXgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3dpdGNoIChwb3N0Zml4KSB7XG5cdFx0XHRcdFx0Y2FzZSAndyc6IHtcblx0XHRcdFx0XHRcdHJlc3VsdC53aWR0aCA9IHZhbHVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2FzZSAnaCc6IHtcblx0XHRcdFx0XHRcdHJlc3VsdC5oZWlnaHQgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNhc2UgJ3gnOiB7XG5cdFx0XHRcdFx0XHRyZXN1bHQuZGVuc2l0eSA9IHZhbHVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSk7XG59XG5cbmNvbnN0IGtub3duRGVzY3JpcHRvcnMgPSBuZXcgU2V0KFsnd2lkdGgnLCAnaGVpZ2h0JywgJ2RlbnNpdHknXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlTcmNzZXQoYXJyYXksIHtzdHJpY3QgPSBmYWxzZX0gPSB7fSkge1xuXHRjb25zdCBhbGxEZXNjcmlwdG9ycyA9IHN0cmljdCA/IHt9IDogdW5kZWZpbmVkO1xuXG5cdHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiB7XG5cdFx0aWYgKCFlbGVtZW50LnVybCkge1xuXHRcdFx0aWYgKHN0cmljdCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VSTCBpcyByZXF1aXJlZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVzY3JpcHRvcktleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50KS5maWx0ZXIoa2V5ID0+IGtub3duRGVzY3JpcHRvcnMuaGFzKGtleSkpO1xuXG5cdFx0aWYgKHN0cmljdCkge1xuXHRcdFx0ZGVzY3JpcHRvckNvdW50Q2hlY2soYWxsRGVzY3JpcHRvcnMsIGRlc2NyaXB0b3JLZXlzKTtcblx0XHR9XG5cblx0XHRjb25zdCByZXN1bHQgPSBbZWxlbWVudC51cmxdO1xuXG5cdFx0Zm9yIChjb25zdCBkZXNjcmlwdG9yS2V5IG9mIGRlc2NyaXB0b3JLZXlzKSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGVsZW1lbnRbZGVzY3JpcHRvcktleV07XG5cdFx0XHRsZXQgcG9zdGZpeDtcblx0XHRcdHN3aXRjaCAoZGVzY3JpcHRvcktleSkge1xuXHRcdFx0XHRjYXNlICd3aWR0aCc6IHtcblx0XHRcdFx0XHRwb3N0Zml4ID0gJ3cnO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlICdoZWlnaHQnOiB7XG5cdFx0XHRcdFx0cG9zdGZpeCA9ICdoJztcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSAnZGVuc2l0eSc6IHtcblx0XHRcdFx0XHRwb3N0Zml4ID0gJ3gnO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVzY3JpcHRvciA9IGAke3ZhbHVlfSR7cG9zdGZpeH1gO1xuXG5cdFx0XHRpZiAoc3RyaWN0KSB7XG5cdFx0XHRcdHZhbGlkRGVzY3JpcHRvckNoZWNrKHZhbHVlLCBwb3N0Zml4KTtcblx0XHRcdFx0ZHVwbGljYXRlRGVzY3JpcHRvckNoZWNrKGFsbERlc2NyaXB0b3JzLCB2YWx1ZSwgcG9zdGZpeCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdC5wdXNoKGRlc2NyaXB0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQuam9pbignICcpO1xuXHR9KS5qb2luKCcsICcpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9tYXRlcmlhbC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNyZWF0ZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9yZXNldC5zY3NzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29tbW9uLnNjc3MnO1xyXG5cclxuaW1wb3J0IG15SGVhZGVyIGZyb20gJy4uLy4uL21vZHVsZXMvaGVhZGVyL215LWhlYWRlcic7XHJcbmltcG9ydCBteVBvc3Rlcl9jcmVhdGUgZnJvbSAnLi4vLi4vbW9kdWxlcy9wb3N0ZXJfY3JlYXRlL215LXBvc3Rlcl9jcmVhdGUnO1xyXG5pbXBvcnQgbXlGb290ZXIgZnJvbSAnLi4vLi4vbW9kdWxlcy9mb290ZXIvbXktZm9vdGVyJztcclxuXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuYm9keS5hcHBlbmRDaGlsZChteUhlYWRlci5jcmVhdGUoKSlcclxuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxubWFpbi5hcHBlbmRDaGlsZChteVBvc3Rlcl9jcmVhdGUuY3JlYXRlKCkpO1xyXG5ib2R5LmFwcGVuZENoaWxkKG15Rm9vdGVyLmNyZWF0ZSgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9