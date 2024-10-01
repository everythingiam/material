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
}`, "",{"version":3,"sources":["webpack://./src/components/my-mini_card/my-mini-card.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/modules/footer/my-footer.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE,aAAA;EACA,sBAAA;ADAF;;ACGA;;;EAGE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADAF;;ACGA;EACE;IACE,kBAAA;IACA,mBAAA;EDAF;ECGA;;;IAGE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDDF;ECIA;;;IAGE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDFF;AACF;AExCA;EACE,4BAAA;EACA,gBAAA;EACA,+DAAA;AF0CF;AEvCA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;AFyCF;AEtCA;EACE,6BAAA;EACA,gBAAA;EACA,+DAAA;AFwCF;AErCA;EACE,gCAAA;EACA,gBAAA;EACA,+DAAA;AFuCF;AEpCA;EACE,6BAAA;EACA,iBAAA;AFsCF;;AEpCA;EACE,6BAAA;EACA,iBAAA;EACA,iBAAA;AFuCF;;AErCA;EACE,sBAAA;EACA,iBAAA;AFwCF;;AEtCA;EACE,6BAAA;EACA,iBAAA;AFyCF;;AEvCA;EACE,6BAAA;EACA,iBAAA;AF0CF;;AExCA;EACE,4BAAA;EACA,eAAA;AF2CF;;AEzCA;EACE,6BAAA;EACA,iBAAA;AF4CF;;AE1CA;EACE,sBAAA;EACA,eAAA;EACA,iBAAA;AF6CF;;AE3CA;EACE,sBAAA;EACA,iBAAA;AF8CF;;AE5CA;EACE,sBAAA;EACA,iBAAA;AF+CF;;AE7CA;EACE,sBAAA;EACA,iBAAA;AFgDF;;AE9CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AFiDF;;AE/CA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AFkDF;;AE/CA;EACE;IACE,6BAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,6BAAA;IACA,iBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,6BAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,4BAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,6BAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EFkDF;EEhDA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EFkDF;AACF;ACvMA;;;;;CAAA;AAOA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ADwMF;;ACrMA;EACE,aAAA;EACA,sBAAA;ADwMF;;ACrMA;;;EAGE,wBAAA;EACA,kBAAA;EACA,mBAAA;ADwMF;;ACrMA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ADwMF;;ACrMA;EACE;IACE,kBAAA;IACA,mBAAA;EDwMF;ECrMA;;;IAGE,wBAAA;IACA,kBAAA;IACA,mBAAA;EDuMF;ECpMA;;;IAGE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EDsMF;AACF;AG7PA;EACE,aAAA;EACA,sBAAA;EACA,yBCLY;AJoQd;;AG5PA;EACE,SAAA;EACA,gBAAA;AH+PF;;AAzQA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,yBILY;EJMZ,iBAAA;EACA,oBAAA;AA4QF;AA1QE;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;AA4QJ;AAzQM;EACE,aAAA;EACA,8BAAA;AA2QR;AAzQQ;EACE,+BAAA;AA2QV;AAvQM;EACE,+BAAA;AAyQR;AAtQM;EAEE,+BAAA;EACA,qBAAA;AAuQR;AApQM;EAEE,cItCM;AJ2Sd;AAjQI;EACE,UAAA;AAmQN;AA/PE;EACE,WAAA;AAiQJ;AA/PI;EACE,aInDQ;EJoDR,YAAA;EACA,kDAAA;AAiQN;AA7PM;EACE,sBAAA;AA+PR;;AAxPA;EACE;IACE,gBAAA;IACA,kBAAA;EA2PF;EAzPE;IACE,WAAA;IACA,gBAAA;EA2PJ;EAxPA;IACE,WAAA;IACA,UAAA;EA0PF;AACF","sourceRoot":""}]);
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
html > body > header#header > .menu-button > span, html > body > header#header > .menu-button::before, html > body > header#header > .menu-button::after {
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
    font-size: 1.6rem;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxUUFBcVEsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sc0JBQXNCO0FBQ25zRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFZ2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpUUFBaVEsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sUUFBUSxXQUFXLE1BQU0sUUFBUSxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLHNCQUFzQjtBQUM3dkY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9XdkM7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsK0pBQXFEO0FBQ2pHLDRDQUE0QyxtS0FBdUQ7QUFDbkcsNENBQTRDLGlLQUFzRDtBQUNsRyw0Q0FBNEMsdUtBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1SQUFtUixVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLFFBQVEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyx1QkFBdUI7QUFDeCtGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWHZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtUkFBbVIsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxzQkFBc0I7QUFDdGhIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyYnZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVRQUF1USxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFX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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVRQUF1USxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxzQkFBc0I7QUFDcnpJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6aEJ2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1UUFBdVEsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsdUJBQXVCO0FBQzM3RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlR2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK1FBQStRLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sUUFBUSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxV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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDcEM7QUFDeUQ7QUFDVztBQUNJO0FBQ2hCO0FBQ0E7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RUFBVztBQUNiLEVBQUUsNkVBQVc7QUFDYixFQUFFLDZFQUFXO0FBQ2I7QUFDQTtBQUNBLGVBQWUsaUVBQVE7QUFDdkIsaUJBQWlCLGlFQUFRO0FBQ3pCO0FBQ0E7QUFDQSxpQkFBaUIseUVBQVc7QUFDNUIsaUJBQWlCLGlFQUFRLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktYnV0dG9uL215LWJ1dHRvbi5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9VSS9teS1mb3JtL215LWZvcm0uc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvY29tcG9uZW50cy9teS1taW5pX2NhcmQvbXktbWluaS1jYXJkLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cC5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2Zvb3Rlci9teS1mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9oZWFkZXIvbXktaGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvcGVyc29uL215LXBlcnNvbi5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL3Bvc3Rlcl9iYXIvbXktcG9zdGVyX2Jhci5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9zdHlsZXMvcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL2NvbXBvbmVudHMvbXktbWluaV9jYXJkL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL2ZvcmdvdC5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2RpYWxvZ19wb3B1cC9sb2dpbi5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2RpYWxvZ19wb3B1cC9yZWdpc3Rlci5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2Zvb3Rlci9pbmRleC5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9pbmRleC5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL3BlcnNvbi9pbmRleC5odG1sIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9VSS9teS1idXR0b24vbXktYnV0dG9uLnNjc3M/MGNlMSIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktZm9ybS9teS1mb3JtLnNjc3M/NzY4NiIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvY29tcG9uZW50cy9teS1taW5pX2NhcmQvbXktbWluaS1jYXJkLnNjc3M/NWMzNiIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9kaWFsb2dfcG9wdXAvbXktZGlhbG9nX3BvcHVwLnNjc3M/NWQzNiIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9mb290ZXIvbXktZm9vdGVyLnNjc3M/YmEwMCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9oZWFkZXIvbXktaGVhZGVyLnNjc3M/N2FjZiIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9wZXJzb24vbXktcGVyc29uLnNjc3M/YWI1YiIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9wb3N0ZXJfYmFyL215LXBvc3Rlcl9iYXIuc2Nzcz8yNGY1Iiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzcz9lMzMxIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWJ1dHRvbi9teS1idXR0b24uanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktZm9ybS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9jb21wb25lbnRzL215LW1pbmlfY2FyZC9teS1taW5pX2NhcmQuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cC5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9mb290ZXIvbXktZm9vdGVyLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvcGVyc29uL215LXBlcnNvbi5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9wb3N0ZXJfYmFyL215LXBvc3Rlcl9iYXIuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvcGFnZXMvcGVvcGxlL21pcm9uX2Rpcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiwgLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiwgLmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFNjNFMztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC45cmVtIDIuMXJlbSAxcmVtIDIuMXJlbTtcbiAgY29sb3I6ICNGQUZBRkE7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0RBMkZGO1xuICBib3JkZXItcmFkaXVzOiAwLjMzMzMzMzMzMzNyZW07XG59XG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRGQzY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBvcGFjaXR5OiA0MCU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMzcsIDM3LCAyMTMsIDAuMik7XG59XG4uYnV0dG9uLm91dGxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBjb2xvcjogIzBFNjNFMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzBFNjNFMztcbiAgcGFkZGluZzogY2FsYygwLjlyZW0gLSAxcHgpIGNhbGMoMi4xcmVtIC0gMXB4KSBjYWxjKDFyZW0gLSAxcHgpIGNhbGMoMi4xcmVtIC0gMXB4KTtcbn1cbi5idXR0b24ub3V0bGluZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZmI7XG59XG4uYnV0dG9uLm91dGxpbmU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDRlOTtcbn1cbi5idXR0b24ub3V0bGluZTpkaXNhYmxlZCB7XG4gIGJvcmRlci1jb2xvcjogIzJBMkIyQztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5idXR0b24ub3V0bGluZTpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDM3LCAzNywgMjEzLCAwLjIpO1xufVxuLmJ1dHRvbi5jdXN0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0Ljg4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuYnV0dG9uLmN1c3RvbSB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvVUkvbXktYnV0dG9uL215LWJ1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7OztFQUdFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFREFGO0VDR0E7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRERGO0VDSUE7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURGRjtBQUNGO0FFeENBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGMENGO0FFdkNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGeUNGO0FFdENB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UUo7QUFuUUk7RUFDRSx5QkFBQTtBQXFRTjtBQWxRSTtFQUNFLHlCQUFBO0FBb1FOO0FBalFJO0VBQ0UscUJJakRRO0VKa0RSLG1CQUFBO0FBbVFOO0FBaFFJO0VBQ0UseUNBQUE7QUFrUU47QUE5UEU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBZ1FKOztBQTVQQTtFQUNFO0lBQ0UsWUFBQTtFQStQRjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMsIGZvcm0gdWwgbGkgc3Bhbi5lcnJvci1tZXNzYWdlLCBmb3JtIHVsIC50ZXh0IHNwYW4uZXJyb3ItbWVzc2FnZSwgZm9ybSB1bCBsaSBpbnB1dCxcbmZvcm0gdWwgbGkgdGV4dGFyZWEsIGZvcm0gdWwgLnRleHQgaW5wdXQsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmZvbnQtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmZvbnQtZmlsdGVycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb250LWxhYmVsLCBmb3JtIHVsIGxpIGxhYmVsLCBmb3JtIHVsIC50ZXh0IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZm9udC1oMS1wb3N0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEwNyU7XG4gIH1cbiAgLmZvbnQtaDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5mb250LXAxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICAuZm9udC1wMS1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmZvbnQtcDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzLCBmb3JtIHVsIGxpIHNwYW4uZXJyb3ItbWVzc2FnZSwgZm9ybSB1bCAudGV4dCBzcGFuLmVycm9yLW1lc3NhZ2UsIGZvcm0gdWwgbGkgaW5wdXQsXG4gIGZvcm0gdWwgbGkgdGV4dGFyZWEsIGZvcm0gdWwgLnRleHQgaW5wdXQsXG4gIGZvcm0gdWwgLnRleHQgdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCwgZm9ybSB1bCBsaSBsYWJlbCwgZm9ybSB1bCAudGV4dCBsYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDIuNXJlbTtcbn1cbmZvcm0gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNHJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmZvcm0gdWwgbGksIGZvcm0gdWwgLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9ybSB1bCBsaSBsYWJlbCwgZm9ybSB1bCAudGV4dCBsYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuNSk7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmZvcm0gdWwgbGkgdGV4dGFyZWEsIGZvcm0gdWwgLnRleHQgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDlyZW07XG59XG5mb3JtIHVsIGxpIGlucHV0LFxuZm9ybSB1bCBsaSB0ZXh0YXJlYSwgZm9ybSB1bCAudGV4dCBpbnB1dCxcbmZvcm0gdWwgLnRleHQgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAxLjNyZW0gMS42cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgNDQsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC4wNCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9ybSB1bCBsaSBpbnB1dC5pbnZhbGlkLFxuZm9ybSB1bCBsaSB0ZXh0YXJlYS5pbnZhbGlkLCBmb3JtIHVsIC50ZXh0IGlucHV0LmludmFsaWQsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU0ZTFmO1xufVxuZm9ybSB1bCBsaSBpbnB1dC5zdWNjZXNzLFxuZm9ybSB1bCBsaSB0ZXh0YXJlYS5zdWNjZXNzLCBmb3JtIHVsIC50ZXh0IGlucHV0LnN1Y2Nlc3MsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhLnN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICM2ZWFkNDg7XG59XG5mb3JtIHVsIGxpIGlucHV0OmRpc2FibGVkLFxuZm9ybSB1bCBsaSB0ZXh0YXJlYTpkaXNhYmxlZCwgZm9ybSB1bCAudGV4dCBpbnB1dDpkaXNhYmxlZCxcbmZvcm0gdWwgLnRleHQgdGV4dGFyZWE6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuZm9ybSB1bCBsaSBpbnB1dDpob3ZlcixcbmZvcm0gdWwgbGkgdGV4dGFyZWE6aG92ZXIsIGZvcm0gdWwgLnRleHQgaW5wdXQ6aG92ZXIsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhOmhvdmVyIHtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSg0MiwgNDMsIDQ0LCAwLjYpO1xufVxuZm9ybSB1bCBsaSBpbnB1dDpmb2N1cyxcbmZvcm0gdWwgbGkgdGV4dGFyZWE6Zm9jdXMsIGZvcm0gdWwgLnRleHQgaW5wdXQ6Zm9jdXMsXG5mb3JtIHVsIC50ZXh0IHRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMC4ycmVtIHNvbGlkIHJnYmEoMzcsIDM3LCAyMTMsIDAuMik7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICMwRTYzRTM7XG59XG5mb3JtIHVsIGxpIHNwYW4uZXJyb3ItbWVzc2FnZSwgZm9ybSB1bCAudGV4dCBzcGFuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICNlNTRlMWY7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgZm9ybSB7XG4gICAgZ2FwOiAxLjhyZW07XG4gIH1cbiAgZm9ybSB1bCB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIGlucHV0LFxuICB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMS4ycmVtIDEuNXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtB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LGtCQUFBO0lBQ0EsbUJBQUE7RUQwTUY7QUFDRjtBR2pRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQ0xZO0FKd1FkOztBR2hRQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBSG1RRjs7QUE3UUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWdSRjtBQTlRRztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWdSSjtBQTlRSztFQUNDLGFBQUE7RUFDQSxzQkFBQTtBQWdSTjtBQTlRTztFQUVDLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQStRUjtBQTVRTztFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQThRUjtBQTNRTzs7O0VBR0Msc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJJdkJJO0VKd0JKLFdBQUE7QUE2UVI7QUEzUVE7OztFQUNFLHlCQUFBO0FBK1FWO0FBNVFROzs7RUFDRSxxQkFBQTtBQWdSVjtBQTdRUTs7O0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQWlSVjtBQTlRUTs7O0VBQ0UsMENBQUE7QUFrUlY7QUFoUlE7OztFQUNFLDRDQUFBO0VBQ0EsNEJBQUE7QUFvUlY7QUFoUk87RUFFQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWlSUjs7QUEzUUE7RUFDRTtJQUNFLFdBQUE7RUE4UUY7RUE1UUc7SUFDQyxTQUFBO0VBOFFKO0VBMVFBOztJQUVFLHNCQUFBO0VBNFFGO0FBQ0ZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSwgLnByb2R1Y3QtY2FyZCA+IGEgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gaDIsIC5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLnByaWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5mb250LXAxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtcDEtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5mb250LXAxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4uZm9udC1wMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5mb250LXAzLCAucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiAucHJvZHVjdC1tZXRhID4gcC5hdXRob3Ige1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMsIC5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLmF1dGhvciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4ucHJvZHVjdC1jYXJkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzJBMkIyQywgIzFiMWIxYik7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNCU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtY2FyZCA+IGEgPiAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyID4gLmZhdm9yaXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMyQTJCMkM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3QtY2FyZCA+IGEgPiAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciA+IC5mYXZvcml0ZS1idG4gPiBzdmcge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyID4gLmZhdm9yaXRlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuLnByb2R1Y3QtY2FyZCA+IGEgPiAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciA+IC5mYXZvcml0ZS1idG4uZmF2LWFjdGl2ZSBzdmcgcGF0aCB7XG4gIGZpbGw6ICMyQTJCMkM7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8ge1xuICBwYWRkaW5nLXRvcDogMS40cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNHJlbTtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiAucHJvZHVjdC1tZXRhID4gcC5hdXRob3Ige1xuICBjb2xvcjogcmdiYSg0MiwgNDMsIDQ0LCAwLjUpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiAucHJvZHVjdC1tZXRhID4gcC5wcmljZSB7XG4gIGNvbG9yOiAjMkEyQjJDO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiAuc2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC4wN3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDQ0LCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuLnByb2R1Y3QtY2FyZCA+IGEgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gaDIge1xuICBjb2xvcjogIzJBMkIyQztcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiBwIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4ucHJvZHVjdC1jYXJkID4gYTpob3ZlciA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiBoMixcbi5wcm9kdWN0LWNhcmQgPiBhOmhvdmVyID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLmF1dGhvcixcbi5wcm9kdWN0LWNhcmQgPiBhOmhvdmVyID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLnByaWNlIHtcbiAgY29sb3I6ICMwRTYzRTM7XG59XG4ucHJvZHVjdC1jYXJkID4gYTpob3ZlciA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMyU7XG59XG4ucHJvZHVjdC1jYXJkID4gYTpob3ZlciA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiAuc2VwYXJhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgOTksIDIyNywgMC41KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL215LW1pbmlfY2FyZC9teS1taW5pLWNhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JlZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjs7Ozs7Q0FB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LFdBQUE7QUFzUFI7QUFuUE07RUFDRSx3Q0FBQTtBQXFQUlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBFeHRyYWJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogNC4ycmVtO1xufVxuXG4uZm9udC1oMS1wb3N0ZXIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEwNyU7XG59XG5cbi5mb250LWgxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xufVxuXG4uZm9udC1oMi1taW5pIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5mb250LXAxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtcDEtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5mb250LXAxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4uZm9udC1wMiwgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlIC5ibGFjLCBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAgPiBzcGFuLCBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCwgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlID4gLm9yLWdvb2dsZSA+IHAge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyLCBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgLmJsYWMsIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gcCA+IHNwYW4sIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZvbnQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmZvbnQtZmlsdGVycyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmZvbnQtbGFiZWwsIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSA+IC5vci1nb29nbGUgPiBwIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuNSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNyUgMXJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5NnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xuICBtaW4taGVpZ2h0OiA1NHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAuYWN0aXZlIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiAuY2xvc2Uge1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogNHJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gcGljdHVyZSA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAge1xuICBjb2xvcjogI0ZBRkFGQTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDRyZW07XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLmxlZnQtc2lkZSA+IHAgPiBzcGFuIHtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjRkFGQUZBO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5sZWZ0LXNpZGUgPiBwID4gc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNik7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUge1xuICBwYWRkaW5nOiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiAub3ItZ29vZ2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiAub3ItZ29vZ2xlID4gcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlID4gZm9ybS5yZWdpc3RlciB7XG4gIG1pbi1oZWlnaHQ6IDQxcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlID4gZm9ybS5yZWdpc3RlciA+IHVsLmZpZWxkcyA+IC5wYXNzd29yZC13cmFwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlIC5ibGFjIHtcbiAgY29sb3I6ICMyQTJCMkM7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLXRvcDogLTAuNXJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSAuYmxhYzpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuNik7XG59XG5cbi5wb3AtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cge1xuICAgIHBhZGRpbmc6IDUlIDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nID4gLmRpYWxvZy1wb3B1cCA+IC5yaWdodC1zaWRlIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAucmlnaHQtc2lkZSA+IGZvcm0ucmVnaXN0ZXIgPiB1bC5maWVsZHMgPiAucGFzc3dvcmQtd3JhcCB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gZGlhbG9nIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlIHtcbiAgICBoZWlnaHQ6IDM1cmVtO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IGRpYWxvZyA+IC5kaWFsb2ctcG9wdXAgPiAubGVmdC1zaWRlID4gLmNsb3NlIHtcbiAgICByaWdodDogMDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUge1xuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBkaWFsb2cgPiAuZGlhbG9nLXBvcHVwID4gLnJpZ2h0LXNpZGUgPiBmb3JtLnJlZ2lzdGVyIHtcbiAgICBtaW4taGVpZ2h0OiAzN3JlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDR0E7OztFQUdFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFREFGO0VDR0E7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRERGO0VDSUE7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURGRjtBQUNGO0FFeENBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGMENGO0FFdkNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGeUNGO0FFdENBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGd0NGO0FFckNBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FGdUNGO0FFcENBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRnNDRjs7QUVwQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZ1Q0Y7O0FFckNBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRndDRjs7QUV0Q0E7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RVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEsIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlIC52YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIsIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlIC5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5mb250LXAzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmZvbnQtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmZvbnQtZmlsdGVycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb250LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZm9udC1oMS1wb3N0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEwNyU7XG4gIH1cbiAgLmZvbnQtaDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5mb250LXAxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICAuZm9udC1wMS1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmZvbnQtcDEsIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlIC52YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyLCBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSAubGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQTJCMkM7XG4gIHBhZGRpbmctdG9wOiA1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogOSU7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSA+IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgPiB1bCA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNSk7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSA+IGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLmxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLnZhbHVlIHtcbiAgY29sb3I6ICNGQUZBRkE7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZS5sb25nIHtcbiAgd2lkdGg6IDM1JTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IHN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gc3ZnID4gcGF0aCB7XG4gIGZpbGw6ICNGQUZBRkE7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogZmlsbCAxcyBjdWJpYy1iZXppZXIoMC43LCAwLCAwLjcsIDAuNyk7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBzdmc6aG92ZXIgcGF0aCB7XG4gIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wIHtcbiAgICBtYXgtd2lkdGg6IDU0cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgfVxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZS5sb25nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IHN2ZyA+IHBhdGgge1xuICAgIGZpbGw6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2Zvb3Rlci9teS1mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JlZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjs7Ozs7Q0FBQTtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBREFGOztBQ0dBOzs7RUFHRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RURBRjtFQ0dBOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VERkY7QUFDRjtBRXhDQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRjBDRjtBRXZDQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRnlDRjtBRXRDQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRndDRjtBRXJDQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRnVDRjtBRXBDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZzQ0Y7O0FFcENBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FGdUNGOztBRXJDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUZ3Q0Y7O0FFdENBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRnlDRjs7QUV2Q0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FGMENGOztBRXhDQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBRjJDRjs7QUV6Q0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FGNENGOztBRTFDQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FGNkNGOztBRTNDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUY4Q0Y7O0FFNUNBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRitDRjs7QUU3Q0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FGZ0RGOztBRTlDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRmlERjs7QUUvQ0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUZrREY7O0FFL0NBO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLDZCQUFBO0lBQ0EsaUJBQUE7RUZrREY7RUVoREE7SUFDRSw0QkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUZrREY7RUVoREE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFRmtERjtBQUNGO0FDdk1BOzs7OztDQUFBO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRHdNRjs7QUNyTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUR3TUY7O0FDck1BOzs7RUFHRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUR3TUY7O0FDck1BOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUR3TUY7O0FDck1BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEd01GO0VDck1BOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUR1TUY7RUNwTUE7OztJQUdFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURzTUY7QUFDRjtBRzdQQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQ0xZO0FKb1FkOztBRzVQQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBSCtQRjs7QUF6UUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCSUxZO0VKTVosaUJBQUE7RUFDQSxvQkFBQTtBQTRRRjtBQTFRRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBNFFKO0FBelFNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBMlFSO0FBelFRO0VBQ0UsK0JBQUE7QUEyUVY7QUF2UU07RUFDRSwrQkFBQTtBQXlRUjtBQXRRTTtFQUVFLCtCQUFBO0VBQ0EscUJBQUE7QUF1UVI7QUFwUU07RUFFRSxjSXRDTTtBSjJTZDtBQWpRSTtFQUNFLFVBQUE7QUFtUU47QUEvUEU7RUFDRSxXQUFBO0FBaVFKO0FBL1BJO0VBQ0UsYUluRFE7RUpvRFIsWUFBQTtFQUNBLGtEQUFBO0FBaVFOO0FBN1BNO0VBQ0Usc0JBQUE7QUErUFI7O0FBeFBBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBMlBGO0VBelBFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBMlBKO0VBeFBBO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUEwUEY7QUFDRlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlcixcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBFeHRyYWJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogNC4ycmVtO1xufVxuXG4uZm9udC1oMS1wb3N0ZXIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEwNyU7XG59XG5cbi5mb250LWgxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xufVxuXG4uZm9udC1oMi1taW5pIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5mb250LXAxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtcDEtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5mb250LXAxLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24sIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwud2lkZSA+IGxpID4gYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZvbnQtYnV0dG9uLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUgPiBsaSA+IGEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0cmFuc2l0aW9uOiA0MDBtcyBlYXNlLW91dDtcbiAgcGFkZGluZzogMS43cmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gc29saWQgcmdiYSg0MiwgNDMsIDQ0LCAwLjIpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IGEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBFeHRyYWJvbGRcIjtcbiAgY29sb3I6ICMwRTYzRTM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IGE6aG92ZXIge1xuICBjb2xvcjogIzNEQTJGRjtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2IHtcbiAgd2lkdGg6IDQyJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcuNHJlbTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICB6LWluZGV4OiA4MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyLmFjdGl2ZSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1pbiwgb3BhY2l0eSAwLjNzIGVhc2UtaW47XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkuc2lkZWJhci1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkuYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDMuNnJlbTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpLmJ1dHRvbnMgPiAub3V0bGluZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAycmVtIDMuNnJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyQTJCMkM7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuMTIpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC53aWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC53aWRlID4gbGkgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgY29sb3I6ICMyQTJCMkM7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogIzBFNjNFMztcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMi40cmVtO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gYS5vdXRsaW5lIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMxcHg7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiAuaWNvbnMtd3JhcHBlciA+IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiAuaWNvbnMtd3JhcHBlciA+IGEgPiBzdmcgcGF0aCB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IC5pY29ucy13cmFwcGVyID4gYSA+IHN2Zzpob3ZlciBwYXRoIHtcbiAgc3Ryb2tlOiAjMEU2M0UzO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLnNlcGFyYXRvciB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDQ0LCAwLjEyKTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24uYWN0aXZlOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uLmFjdGl2ZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbi5hY3RpdmUgPiBzcGFuIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyQztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdG9wOiAxLjJyZW07XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24gPiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyQztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBib3R0b206IDEuMnJlbTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMSk7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayA+IC5sZWZ0ID4gYSB7XG4gIGNvbG9yOiAjRkFGQUZBO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLmRhcmsgPiAubGVmdCA+IG5hdiA+IHVsID4gbGkgPiBhIHtcbiAgY29sb3I6ICNGQUZBRkE7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayA+IC5sZWZ0ID4gbmF2ID4gdWwgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLmRhcmsgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrIGJ1dHRvbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBjb2xvcjogIzJBMkIyQztcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrIGJ1dHRvbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOSk7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayBhLm91dGxpbmUsXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayBidXR0b24ub3V0bGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZBRkFGQTtcbiAgY29sb3I6ICNGQUZBRkE7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayBhLm91dGxpbmU6aG92ZXIsXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayBidXR0b24ub3V0bGluZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4yKTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlci5kYXJrID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIgPiBhID4gc3ZnIHBhdGgge1xuICBzdHJva2U6ICNGQUZBRkE7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIuZGFyayA+IC5idXR0b24tYXJlYSA+IC5pY29ucy13cmFwcGVyID4gYSA+IHN2Zzpob3ZlciBwYXRoIHtcbiAgc3Ryb2tlOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNSk7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24gPiBzcGFuLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b246OmJlZm9yZSwgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC53aWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IC5pY29ucy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IGEub3V0bGluZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzMwcHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpLnNpZGViYXItaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDFweCkge1xuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpID4gYSxcbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkuYnV0dG9ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjZyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JlZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjs7Ozs7Q0FBQTtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBREFGOztBQ0dBOzs7RUFHRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjs7QUNHQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RURBRjtFQ0dBOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURERjtFQ0lBOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VERkY7QUFDRjtBRXhDQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRjBDRjtBRXZDQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRnlDRjtBRXRDQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRndDRjtBRXJDQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBRnVDRjtBRXBDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZzQ0Y7O0FFcENBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FGdUNGOztBRXJDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUZ3Q0Y7O0FFdENBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRnlDRjs7QUV2Q0E7RUFDRSw2QkFBQTtFQUNB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QXhPSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJJek1RO0VKME1SLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBME9OO0FBdE9FO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlEQUFBO0FBd09KO0FBck9NO0VBQ0UsY0l0Tk07QUo2YmQ7QUFwT007RUFDRSxjSTFOTTtBSmdjZDtBQXBPUTtFQUNFLCtCQUFBO0FBc09WO0FBbE9NO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtBQW9PUjtBQWhPSztFQUNDLHlCSXhPUTtFSnlPUixjSTFPUTtBSjRjZDtBQWhPTTtFQUNFLDBDQUFBO0FBa09SO0FBOU5LOztFQUVDLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxjSXBQUTtBSm9kZDtBQTlOTTs7RUFDRSwwQ0FBQTtBQWlPUjtBQXpOVTtFQUNFLGVJaFFFO0FKMmRkO0FBdk5ZO0VBQ0UsZ0NBQUE7QUF5TmQ7QUFoTkk7RUFHRSx5QklqUlE7QUppZWQ7O0FBM01BO0VBRUk7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQTZNSjtFQTNNRTtJQUNFLFdBQUE7RUE2TUo7RUEzTUk7SUFDRSxhQUFBO0VBNk1OO0VBMU1FO0lBQ0UsYUFBQTtFQTRNSjtFQTFNRTtJQUNFLGVBQUE7RUE0TUo7QUFDRjtBQXpNQTtFQUNFO0lBQ0UsYUFBQTtFQTJNRjtFQXhNQTtJQUNFLGNBQUE7RUEwTUY7QUFDRjtBQXZNQTtFQUNFO0lBQ0Usd0JBQUE7RUF5TUY7QUFDRjtBQXRNQTtFQUNFOztJQUVFLG9CQUFBO0VBd01GO0FBQ0ZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSwgLnBlcnNvbiBwIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4uZm9udC1wMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5mb250LXAzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmZvbnQtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmZvbnQtZmlsdGVycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb250LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZm9udC1oMS1wb3N0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEwNyU7XG4gIH1cbiAgLmZvbnQtaDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5mb250LXAxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICAuZm9udC1wMS1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmZvbnQtcDEsIC5wZXJzb24gcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuLnBlcnNvbiB7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucGVyc29uIC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wZXJzb24gLmxlZnQgLm1ldGEge1xuICBtYXJnaW4tbGVmdDogMy4zcmVtO1xufVxuLnBlcnNvbiAubGVmdCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNnJlbTtcbiAgaGVpZ2h0OiAxNnJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucGVyc29uIGgxIHtcbiAgY29sb3I6ICMyQTJCMkM7XG4gIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcbn1cbi5wZXJzb24gcCB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuOCk7XG4gIG1heC13aWR0aDogNDJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9wZXJzb24vbXktcGVyc29uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7Ozs7O0NBQUE7QUFPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QURBRjs7QUNHQTs7O0VBR0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEQUY7RUNHQTs7O0lBR0Usd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEREY7RUNJQTs7O0lBR0Usd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFREZGO0FBQ0Y7QUV4Q0E7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7QUYwQ0Y7QUV2Q0E7RUFDRSxzQkFB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bi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyLFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmhlcm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsLFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oZXJvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIsXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaGVybyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5wb3N0ZXItYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI3MHB4LCAxZnIpKTtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgcm93LWdhcDogNS44cmVtO1xuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvcG9zdGVyX2Jhci9teS1wb3N0ZXJfYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7Ozs7O0NBQUE7QUFPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QURBRjs7QUNHQTs7O0VBR0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQUY7O0FDR0E7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREFGOztBQ0dBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VEQUY7RUNHQTs7O0lBR0Usd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEREY7RUNJQTs7O0lBR0Usd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFREZGO0FBQ0Y7QUV4Q0E7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7QUYwQ0Y7QUV2Q0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7QUZ5Q0Y7QUV0Q0E7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7QUZ3Q0Y7QUVyQ0E7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7QUZ1Q0Y7QUVwQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FGc0NGOztBRXBDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRnVDRjs7QUVyQ0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FGd0NGOztBRXRDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUZ5Q0Y7O0FFdkNBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRjBDRjs7QUV4Q0E7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUYyQ0Y7O0FFekNBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRjRDRjs7QUUxQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRjZDRjs7QUUzQ0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FGOENGOztBRTVDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUYrQ0Y7O0FFN0NBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBRmdERjs7QUU5Q0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUZpREY7O0FFL0NBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FGa0RGOztBRS9DQTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLDZCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUZrREY7RUVoREE7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0UsNEJBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLDZCQUFBO0lBQ0EsaUJBQUE7RUZrREY7RUVoREE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUZrREY7RUVoREE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VGa0RGO0VFaERBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFRmtERjtFRWhEQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUZrREY7RUVoREE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUZrREY7RUVoREE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUZrREY7QUFDRjtBQ3ZNQTs7Ozs7Q0FBQTtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUR3TUY7O0FDck1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEd01GOztBQ3JNQTs7O0VBR0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEd01GOztBQ3JNQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEd01GOztBQ3JNQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFRHdNRjtFQ3JNQTs7O0lBR0Usd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEdU1GO0VDcE1BOzs7SUFHRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEc01GO0FBQ0Y7QUc3UEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkNMWTtBSm9RZDs7QUc1UEE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUgrUEY7O0FBelFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBNFFKXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEsIGE6bGluaywgYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hc2lkZSwgbmF2LCBmb290ZXIsIGhlYWRlciwgc2VjdGlvbiwgbWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxudWwsIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW1nLCBzdmcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYWRkcmVzcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlLCBidXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUVDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhEOztBQU1BOzs7RUFJQyxzQkFBQTtBQUpEOztBQU9BO0VBRUkscUJBQUE7QUFMSjs7QUFRQTtFQUVJLHFCQ1ZVO0FESWQ7O0FBU0E7RUFFSSxxQkFBQTtBQVBKOztBQVVBO0VBRUMsY0FBQTtBQVJEOztBQVdBO0VBRUksa0JBQUE7RUFDSCxvQkFBQTtBQVREOztBQVlBO0VBRUMsZ0JBQUE7QUFWRDs7QUFhQTtFQUVDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFYRDs7QUFjQTtFQUVDLGVBQUE7RUFDQSxZQUFBO0FBWkQ7O0FBZUE7RUFFRSxrQkFBQTtBQWJGOztBQWdCQTtFQUVDLG9CQUFBO0VBQ0csa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFkSjs7QUFpQkE7RUFFQyxhQUFBO0FBZkQ7O0FBa0JBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBaEJKOztBQW1CQTtFQUVJLGFBQUE7QUFqQko7O0FBb0JBO0VBRUMsVUFBQTtFQUNBLFNBQUE7QUFsQkQ7O0FBcUJBO0VBRUMsZUFBQTtBQW5CRDs7QUFzQkE7RUFFQyxjQUFBO0FBcEJEXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZy9pbWFnZSA2NS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGFcclxuICBocmVmPVwiL21hdGVyaWFsL3Bvc3RlcnMvYW1lcmljYW4tYXJjaGl0ZWN0dXJlL2luZGV4Lmh0bWxcIlxyXG4gIHRpdGxlPVwiQW1lcmljYW4gQXJjaGl0ZWN0dXJlXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWNhcmQtY29udGFpbmVyXCI+XHJcbiAgICA8aW1nIHNyYz1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX199XCIgYWx0PVwiQW1lcmljYW4gQXJjaGl0ZWN0dXJlXCIgLz5cclxuICAgIDxidXR0b24gY2xhc3M9XCJmYXZvcml0ZS1idG5cIj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJoZWFydFwiXHJcbiAgICAgICAgICBkPVwiTTE2LjU0NzIgMy43NDkwMkMxMy41MDQxIDMuNzQ5MDIgMTIuMDA0MSA2Ljc0OTAyIDEyLjAwNDEgNi43NDkwMkMxMi4wMDQxIDYuNzQ5MDIgMTAuNTA0MSAzLjc0OTAyIDcuNDYwOTYgMy43NDkwMkM0Ljk4NzgzIDMuNzQ5MDIgMy4wMjkzOSA1LjgxODA5IDMuMDA0MDggOC4yODY5OUMyLjk1MjUyIDEzLjQxMTggNy4wNjk1NSAxNy4wNTY0IDExLjU4MjIgMjAuMTE5MkMxMS43MDY2IDIwLjIwMzggMTEuODUzNiAyMC4yNDkxIDEyLjAwNDEgMjAuMjQ5MUMxMi4xNTQ2IDIwLjI0OTEgMTIuMzAxNSAyMC4yMDM4IDEyLjQyNiAyMC4xMTkyQzE2LjkzODEgMTcuMDU2NCAyMS4wNTUyIDEzLjQxMTggMjEuMDA0MSA4LjI4Njk5QzIwLjk3ODggNS44MTgwOSAxOS4wMjAzIDMuNzQ5MDIgMTYuNTQ3MiAzLjc0OTAyWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTk1MTRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8Zm9vdGVyIGNsYXNzPVwicHJvZHVjdC1pbmZvXCI+XHJcbiAgICA8aDI+QW1lcmljYW4gQXJjaGl0ZWN0dXJlPC9oMj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LW1ldGFcIj5cclxuICAgICAgPHAgY2xhc3M9XCJhdXRob3JcIj5AYm9tYm/RgWxhdDwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPjxzcGFuPjMgNTAwPC9zcGFuPiDigr08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvb3Rlcj5cclxuPC9hPlxyXG5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1nL3JlZ2lzdGVyLWxhcmdlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1tZWRpdW0ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1nL3JlZ2lzdGVyLXNtYWxsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwibGVmdC1zaWRlXCI+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlXCI+XHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjAuMzk1NSAyMC4xMTM1TDQuNDM4NzIgMy44ODYyM00yMC4zOTU1IDMuODg2MjNMNC40Mzg3MiAyMC4xMTM1XCJcclxuICAgICAgICBzdHJva2U9XCIjRkFGQUZBXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5MTc3XCJcclxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICA8L2J1dHRvbj5cclxuICA8cGljdHVyZT5cclxuICAgIDxzb3VyY2VcclxuICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiAxMjAwcHgpXCJcclxuICAgICAgc3Jjc2V0PVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fX31cIlxyXG4gICAgLz5cclxuICAgIDxzb3VyY2VcclxuICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiA3NjhweClcIlxyXG4gICAgICBzcmNzZXQ9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19ffVwiXHJcbiAgICAvPlxyXG4gICAgPGltZyBzcmM9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19ffVwiIGFsdD1cInJlZ2lzdGVyIEltYWdlXCIgLz5cclxuICA8L3BpY3R1cmU+XHJcbiAgPHA+0JXRidGRINC90LUg0YEg0L3QsNC80Lg/IDxzcGFuIGNsYXNzPVwicmVnaXN0ZXJMaW5rXCI+0KDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMITwvc3Bhbj48L3A+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicmlnaHQtc2lkZVwiPlxyXG4gIDxmb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgPGgyPtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw8L2gyPlxyXG4gICAgPHVsIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCf0L7Rh9GC0LAg0LjQu9C4INC90LjQutC90LXQudC8PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7Rh9GC0LAg0LjQu9C4INC90LjQutC90LXQudC8XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBub3JtYWwgY3VzdG9tXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICDQktC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0L/QsNGA0L7Qu9GMXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIGNsYXNzPVwibG9naW5MaW5rIGJsYWNcIj7QktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtDwvc3Bhbj5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1nL2xvZ2luLWxhcmdlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9sb2dpbi1tZWRpdW0ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1nL2xvZ2luLXNtYWxsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwibGVmdC1zaWRlXCI+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlXCI+XHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjAuMzk1NSAyMC4xMTM1TDQuNDM4NzIgMy44ODYyM00yMC4zOTU1IDMuODg2MjNMNC40Mzg3MiAyMC4xMTM1XCJcclxuICAgICAgICBzdHJva2U9XCIjRkFGQUZBXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5MTc3XCJcclxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICA8L2J1dHRvbj5cclxuICA8cGljdHVyZT5cclxuICAgIDxzb3VyY2VcclxuICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiAxMjAwcHgpXCJcclxuICAgICAgc3Jjc2V0PVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fX31cIlxyXG4gICAgLz5cclxuICAgIDxzb3VyY2VcclxuICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiA3NjhweClcIlxyXG4gICAgICBzcmNzZXQ9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19ffVwiXHJcbiAgICAvPlxyXG4gICAgPGltZyBzcmM9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19ffVwiIGFsdD1cIkxvZ2luIEltYWdlXCIgLz5cclxuICA8L3BpY3R1cmU+XHJcbiAgPHA+0JXRidGRINC90LUg0YEg0L3QsNC80Lg/IDxzcGFuIGNsYXNzPVwicmVnaXN0ZXJMaW5rXCI+0KDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMITwvc3Bhbj48L3A+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicmlnaHQtc2lkZVwiPlxyXG4gIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwibG9naW5cIj5cclxuICAgIDxoMj7QktGF0L7QtDwvaDI+XHJcbiAgICA8dWwgY2xhc3M9XCJmaWVsZHNcIj5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+0J/QvtGH0YLQsCDQuNC70Lgg0L3QuNC60L3QtdC50Lw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPINC40LvQuCDQvdC40LrQvdC10LnQvFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+0J/QsNGA0L7Qu9GMPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbm9ybWFsIGN1c3RvbVwiIHR5cGU9XCJzdWJtaXRcIj7QktC+0LnRgtC4PC9idXR0b24+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZvcmdvdExpbmsgYmxhY1wiPtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/PC9zcGFuPlxyXG4gIDwvZm9ybT5cclxuICA8ZGl2IGNsYXNzPVwib3ItZ29vZ2xlXCI+XHJcbiAgICA8cD7QmNCb0Jg8L3A+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG91dGxpbmUgY3VzdG9tXCI+0JLQvtC50YLQuCDRh9C10YDQtdC3IEdvb2dsZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1sYXJnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItbWVkaXVtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1zbWFsbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiPlxyXG4gICAgPHN2Zz5cclxuICAgICAgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTIwLjM5NTUgMjAuMTEzNUw0LjQzODcyIDMuODg2MjNNMjAuMzk1NSAzLjg4NjIzTDQuNDM4NzIgMjAuMTEzNVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiI0ZBRkFGQVwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTE3N1wiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9idXR0b24+XHJcbiAgPHBpY3R1cmU+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogMTIwMHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX199XCJcclxuICAgIC8+XHJcbiAgICA8c291cmNlXHJcbiAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY4cHgpXCJcclxuICAgICAgc3Jjc2V0PVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fX31cIlxyXG4gICAgLz5cclxuICAgIDxpbWcgc3JjPVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fX31cIiBhbHQ9XCJyZWdpc3RlciBJbWFnZVwiIC8+XHJcbiAgPC9waWN0dXJlPlxyXG4gIDxwPtCj0LbQtSDRgSDQvdCw0LzQuD8gPHNwYW4gY2xhc3M9XCJsb2dpbkxpbmtcIj7QktGF0L7QtNC40YLQtSE8L3NwYW4+PC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJpZ2h0LXNpZGVcIj5cclxuICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInJlZ2lzdGVyXCI+XHJcbiAgICA8aDI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvaDI+XHJcbiAgICA8dWwgY2xhc3M9XCJmaWVsZHNcIj5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+0J3QuNC60L3QtdC50Lw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QuNC60L3QtdC50LxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPtCf0L7Rh9GC0LA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtGH0YLQsFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJ0ZXh0IHBhc3N3b3JkLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+0J/QsNGA0L7Qu9GMPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkMlwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkMiBpZD1cIlxyXG4gICAgICAgICAgICBwYXNzd29yZDJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBjdXN0b21cIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgINCX0LDRgNC10LPQtdGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xyXG4gICAgPC9idXR0b24+XHJcbiAgPC9mb3JtPlxyXG4gIDxkaXYgY2xhc3M9XCJvci1nb29nbGVcIj5cclxuICAgIDxwPtCY0JvQmDwvcD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gb3V0bGluZSBjdXN0b21cIj7QktC+0LnRgtC4INGH0LXRgNC10LcgR29vZ2xlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICA8YXJ0aWNsZT5cclxuICAgIDxwIGNsYXNzPVwibGFiZWxcIj7QmtC+0L3RgtCw0LrRgtGLPC9wPlxyXG4gICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwidmFsdWVcIj5hbGluYS5taWtoYXlsb3ZhLjAzQG1haWwucnU8L2E+XHJcbiAgPC9hcnRpY2xlPlxyXG4gIDxhcnRpY2xlPlxyXG4gICAgPHAgY2xhc3M9XCJsYWJlbFwiPtCe0YHQvdC+0LLQsNGC0LXQu9GM0L3QuNGG0LA8L3A+XHJcbiAgICA8cCBjbGFzcz1cInZhbHVlXCI+0JzQuNGF0LDQudC70L7QstCwINCQ0LvQuNC90LAg0KAzMzY2MjwvcD5cclxuICA8L2FydGljbGU+XHJcbiAgPGFydGljbGUgY2xhc3M9XCJsb25nXCI+XHJcbiAgICA8cCBjbGFzcz1cImxhYmVsXCI+0KHQvtGG0LjQsNC70YzQvdGL0LUg0YHQtdGC0Lg8L3A+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiXCIgY2xhc3M9XCJ2YWx1ZVwiPkluc3RhZ3JhbTwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cIlwiIGNsYXNzPVwidmFsdWVcIj5Wa29udGFrdGU8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJcIiBjbGFzcz1cInZhbHVlXCI+VGVsZWdyYW08L2E+PC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9hcnRpY2xlPlxyXG48L2Rpdj5cclxuPHN2Z1xyXG4gIHdpZHRoPVwiMTI0OVwiXHJcbiAgaGVpZ2h0PVwiMTgwXCJcclxuICB2aWV3Qm94PVwiMCAwIDEyNDkgMTgwXCJcclxuICBmaWxsPVwibm9uZVwiXHJcbiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbj5cclxuICA8cGF0aFxyXG4gICAgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICBkPVwiTTEuMzA2NTMgMTc5VjE3OS40NDVIMS43NTA5OEg0Mi4zMjU2SDQyLjc3VjE3OVY3MC40MDA0SDQ3LjA3NDdMODIuNDc3NSAxNzkuMTM4TDgyLjU3NzQgMTc5LjQ0NUg4Mi45MDAxSDEyMC45MzlIMTIxLjI2MkwxMjEuMzYxIDE3OS4xMzhMMTU2Ljc2NCA3MC40MDA0SDE2MS4wNjlWMTc5VjE3OS40NDVIMTYxLjUxM0gyMDIuMDg4SDIwMi41MzJWMTc5VjEuNDg2MzNWMS4wNDE4OEgyMDIuMDg4SDEzOS45NThIMTM5LjYzNEwxMzkuNTM1IDEuMzUwMTdMMTA0LjEzMiAxMTEuMzU0SDk5LjcwNzRMNjQuMzAzOSAxLjM1MDE3TDY0LjIwNDcgMS4wNDE4OEg2My44ODA4SDEuNzUwOThIMS4zMDY1M1YxLjQ4NjMzVjE3OVpNMjE4LjA3MiAxNzguODU2TDIxNy44NyAxNzkuNDQ1SDIxOC40OTJIMjYyLjg3MUgyNjMuMTk1TDI2My4yOTQgMTc5LjEzNkwyNzQuNjA2IDE0My45NDJIMzQyLjQyOEwzNTMuNzQgMTc5LjEzNkwzNTMuODM5IDE3OS40NDVIMzU0LjE2M0gzOTguNTQySDM5OS4xNjRMMzk4Ljk2MiAxNzguODU2TDMzOC4xIDEuMzQyMThMMzM3Ljk5NyAxLjA0MTg4SDMzNy42OEgyNzkuMzU0SDI3OS4wMzdMMjc4LjkzNCAxLjM0MjE4TDIxOC4wNzIgMTc4Ljg1NlpNNDM2LjI5NSAxNzlWMTc5LjQ0NUg0MzYuNzM5SDQ3Ny4zMTRINDc3Ljc1OFYxNzlWNDEuMjM3NEg1MjYuNzY0SDUyNy4yMDhWNDAuNzkzVjEuNDg2MzNWMS4wNDE4OEg1MjYuNzY0SDM4Ny4yODlIMzg2Ljg0NFYxLjQ4NjMzVjQwLjc5M1Y0MS4yMzc0SDM4Ny4yODlINDM2LjI5NVYxNzlaTTU0OS4xMDMgMTc5VjE3OS40NDVINTQ5LjU0N0g2NzEuMjcxSDY3MS43MTZWMTc5VjE0Mi4yMjlWMTQxLjc4NUg2NzEuMjcxSDU5MC41NjZWMTA4LjQzOUg2NjYuMTk5SDY2Ni42NDRWMTA3Ljk5NVY3Mi40OTE5VjcyLjA0NzRINjY2LjE5OUg1OTAuNTY2VjM4LjcwMTVINjcxLjI3MUg2NzEuNzE2VjM4LjI1NzFWMS40ODYzM1YxLjA0MTg4SDY3MS4yNzFINTQ5LjU0N0g1NDkuMTAzVjEuNDg2MzNWMTc5Wk03MDEuMTU5IDE3OVYxNzkuNDQ1SDcwMS42MDNINzQyLjE3OEg3NDIuNjIyVjE3OVYxMjIuMzg3SDc0Ny4wNUw3OTcuNjM1IDE3OS4yOTVMNzk3Ljc2OCAxNzkuNDQ1SDc5Ny45NjhIODQ4LjY4Nkg4NDkuNjk1TDg0OS4wMTQgMTc4LjdMNzk1LjA3NCAxMTkuNzQzQzgwMy42MDEgMTE4LjY0OCA4MTEuNTcyIDExNS45NTkgODE4Ljk4NSAxMTEuNjc2TDgxOC45OTQgMTExLjY3QzgzNS43MTcgMTAxLjQzMiA4NDQuMDU5IDg0Ljk1OTIgODQ0LjA1OSA2Mi4zNDgyQzg0NC4wNTkgNDMuOTk1OCA4MzguNjE3IDI5LjE2OTIgODI3LjcwMyAxNy45MTRDODE2Ljc5IDYuNjU5NzMgODAyLjYzOCAxLjA0MTg4IDc4NS4yODggMS4wNDE4OEg3MDEuNjAzSDcwMS4xNTlWMS40ODYzM1YxNzlaTTc5Ni44OCA3OC43ODQzTDc5Ni44NzkgNzguNzg0OUM3OTMuMjUxIDgyLjc0MzEgNzg4LjU1NSA4NC43MjcgNzgyLjc1MiA4NC43MjdINzQyLjYyMlYzOS45Njk0SDc4Mi43NTJDNzg4LjU0OSAzOS45Njk0IDc5My4yNDMgNDIuMDMzMiA3OTYuODczIDQ2LjE1ODRMNzk2Ljg4IDQ2LjE2NTVMNzk2Ljg4NiA0Ni4xNzIzQzgwMC42NzggNTAuMTI4NyA4MDIuNTk1IDU1LjUwMzEgODAyLjU5NSA2Mi4zNDgyQzgwMi41OTUgNjkuMTkyNiA4MDAuNjc4IDc0LjY1NjEgNzk2Ljg4IDc4Ljc4NDNaTTg3My41MjEgMTc5VjE3OS40NDVIODczLjk2Nkg5MTQuNTRIOTE0Ljk4NVYxNzlWMS40ODYzM1YxLjA0MTg4SDkxNC41NEg4NzMuOTY2SDg3My41MjFWMS40ODYzM1YxNzlaTTkzMC41NTQgMTc4Ljg1Nkw5MzAuMzUyIDE3OS40NDVIOTMwLjk3NEg5NzUuMzUzSDk3NS42NzdMOTc1Ljc3NiAxNzkuMTM2TDk4Ny4wODggMTQzLjk0MkgxMDU0LjkxTDEwNjYuMjIgMTc5LjEzNkwxMDY2LjMyIDE3OS40NDVIMTA2Ni42NUgxMTExLjAySDExMTEuNjVMMTExMS40NCAxNzguODU2TDEwNTAuNTggMS4zNDIxOEwxMDUwLjQ4IDEuMDQxODhIMTA1MC4xNkg5OTEuODM2SDk5MS41MTlMOTkxLjQxNiAxLjM0MjE4TDkzMC41NTQgMTc4Ljg1NlpNMTEyNy4xMSAxNzlWMTc5LjQ0NUgxMTI3LjU2SDEyNDguMDFIMTI0OC40NlYxNzlWMTM5LjY5M1YxMzkuMjQ5SDEyNDguMDFIMTE2OC41OFYxLjQ4NjMzVjEuMDQxODhIMTE2OC4xM0gxMTI3LjU2SDExMjcuMTFWMS40ODYzM1YxNzlaTTI4Ni4zMDMgMTA3LjU1TDMwNi4zMDYgNDUuMDQxM0gzMTAuNzI4TDMzMC43MzEgMTA3LjU1SDI4Ni4zMDNaTTEwNDMuMjEgMTA3LjU1SDk5OC43ODVMMTAxOC43OSA0NS4wNDEzSDEwMjMuMjFMMTA0My4yMSAxMDcuNTVaXCJcclxuICAgIGZpbGw9XCIjRkFGQUZBXCJcclxuICAgIHN0cm9rZT1cIiNGQUZBRkFcIlxyXG4gICAgc3Ryb2tlLXdpZHRoPVwiMC44ODg4ODlcIlxyXG4gIC8+XHJcbjwvc3ZnPlxyXG5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgPGEgaHJlZj1cIi9tYXRlcmlhbC9pbmRleC5odG1sXCI+TUFURVJJQUw8L2E+XHJcbiAgPG5hdj5cclxuICAgIDx1bCBjbGFzcz1cInNpZGViYXJcIj5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY2F0YWxvZy9pbmRleC5odG1sXCI+0JrQsNGC0LDQu9C+0LM8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCeINC90LDRgTwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvZmF2b3JpdGVzL2luZGV4Lmh0bWxcIj7QmNC30LHRgNCw0L3QvdC+0LU8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NhcnQvaW5kZXguaHRtbFwiPtCa0L7RgNC30LjQvdCwPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLWhpZGRlblwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY3JlYXRlL2luZGV4Lmh0bWxcIj7QlNC+0LHQsNCy0LjRgtGMINC/0L7RgdGC0LXRgDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwic2lkZWJhci1oaWRkZW4gYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbm9ybWFsIHNpZGViYXJMb2dpbkJ0blwiPtCS0L7QudGC0Lg8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG91dGxpbmUgc2lkZWJhclJlZ2lzdGVyQnRuXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDx1bCBjbGFzcz1cIndpZGVcIj5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY2F0YWxvZy9pbmRleC5odG1sXCI+0JrQsNGC0LDQu9C+0LM8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCeINC90LDRgTwvYT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9uYXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImJ1dHRvbi1hcmVhXCI+XHJcbiAgPGEgaHJlZj1cIi9tYXRlcmlhbC9jcmVhdGUvaW5kZXguaHRtbFwiIGNsYXNzPVwiYnV0dG9uIG91dGxpbmVcIlxyXG4gICAgPtCU0L7QsdCw0LLQuNGC0Ywg0L/QvtGB0YLQtdGAPC9hXHJcbiAgPlxyXG4gIDxkaXYgY2xhc3M9XCJpY29ucy13cmFwcGVyXCI+XHJcbiAgICA8YSBocmVmPVwiL21hdGVyaWFsL2Zhdm91cml0ZXMvaW5kZXguaHRtbFwiPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgY2xhc3M9XCJoZWFydFwiXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE2LjU0NzIgMy43NDkwMkMxMy41MDQxIDMuNzQ5MDIgMTIuMDA0MSA2Ljc0OTAyIDEyLjAwNDEgNi43NDkwMkMxMi4wMDQxIDYuNzQ5MDIgMTAuNTA0MSAzLjc0OTAyIDcuNDYwOTYgMy43NDkwMkM0Ljk4NzgzIDMuNzQ5MDIgMy4wMjkzOSA1LjgxODA5IDMuMDA0MDggOC4yODY5OUMyLjk1MjUyIDEzLjQxMTggNy4wNjk1NSAxNy4wNTY0IDExLjU4MjIgMjAuMTE5MkMxMS43MDY2IDIwLjIwMzggMTEuODUzNiAyMC4yNDkxIDEyLjAwNDEgMjAuMjQ5MUMxMi4xNTQ2IDIwLjI0OTEgMTIuMzAxNSAyMC4yMDM4IDEyLjQyNiAyMC4xMTkyQzE2LjkzODEgMTcuMDU2NCAyMS4wNTUyIDEzLjQxMTggMjEuMDA0MSA4LjI4Njk5QzIwLjk3ODggNS44MTgwOSAxOS4wMjAzIDMuNzQ5MDIgMTYuNTQ3MiAzLjc0OTAyWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTk1MTRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NhcnQvaW5kZXguaHRtbFwiPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgY2xhc3M9XCJjYXJ0XCJcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNOC4yNDY0IDIwLjI0OUM4LjY2MDYxIDIwLjI0OSA4Ljk5NjQgMTkuOTEzMiA4Ljk5NjQgMTkuNDk5QzguOTk2NCAxOS4wODQ4IDguNjYwNjEgMTguNzQ5IDguMjQ2NCAxOC43NDlDNy44MzIxOSAxOC43NDkgNy40OTY0IDE5LjA4NDggNy40OTY0IDE5LjQ5OUM3LjQ5NjQgMTkuOTEzMiA3LjgzMjE5IDIwLjI0OSA4LjI0NjQgMjAuMjQ5WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTk1MTRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xNy44MzQxIDIwLjI0OUMxOC4yNDgzIDIwLjI0OSAxOC41ODQxIDE5LjkxMzIgMTguNTg0MSAxOS40OTlDMTguNTg0MSAxOS4wODQ4IDE4LjI0ODMgMTguNzQ5IDE3LjgzNDEgMTguNzQ5QzE3LjQxOTkgMTguNzQ5IDE3LjA4NDEgMTkuMDg0OCAxNy4wODQxIDE5LjQ5OUMxNy4wODQxIDE5LjkxMzIgMTcuNDE5OSAyMC4yNDkgMTcuODM0MSAyMC4yNDlaXCJcclxuICAgICAgICAgIGZpbGw9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTUxNFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTIuMjQ2NCAzLjc0OTAySDUuMjQ2NEw3LjQ5NjQgMTYuNDk5SDE5LjQ5NjRcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNNy40OTY0IDEzLjVIMTkuMTg4OUMxOS4yNzU2IDEzLjUwMDEgMTkuMzU5NyAxMy40NzAxIDE5LjQyNjggMTMuNDE1MUMxOS40OTM5IDEzLjM2MDEgMTkuNTM5OCAxMy4yODM2IDE5LjU1NjkgMTMuMTk4NkwyMC45MDY5IDYuNDQ4NTlDMjAuOTE3OCA2LjM5NDE3IDIwLjkxNjQgNi4zMzggMjAuOTAzIDYuMjg0MTRDMjAuODg5NSA2LjIzMDI5IDIwLjg2NDMgNi4xODAwOSAyMC44MjkxIDYuMTM3MTdDMjAuNzkzOSA2LjA5NDI2IDIwLjc0OTYgNi4wNTk2OSAyMC42OTk0IDYuMDM1OTdDMjAuNjQ5MiA2LjAxMjI1IDIwLjU5NDQgNS45OTk5NiAyMC41Mzg5IDZINS45OTY0XCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTUxNFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG5cclxuICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBsb2dpbkJ0blwiPtCS0L7QudGC0Lg8L2J1dHRvbj5cclxuICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG91dGxpbmUgcmVnaXN0ZXJCdG5cIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9idXR0b24+XHJcbjwvZGl2PlxyXG48YnV0dG9uIGNsYXNzPVwibWVudS1idXR0b25cIj5cclxuICA8c3Bhbj48L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZy9jYXQxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gIDxpbWcgc3JjPVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fX31cIiBhbHQ9XCJwcm9maWxlXCIgLz5cclxuICA8ZGl2IGNsYXNzPVwibWV0YVwiPlxyXG4gICAgPGgxPtCQ0L3QtNGA0LXQuSDQnNC40YDQvtC90L7QsjwvaDE+XHJcbiAgICA8cD7Qo9C90LjQutCw0LvRjNC90YvQuSDQtNC40LfQsNC50L3QtdGAINC40Lcg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LPQsC4g0JPQvtGC0L7QsiDQuiDRgNCw0LHQvtGC0LUhPC9wPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImxpbmtzXCI+PC9kaXY+XHJcbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktYnV0dG9uLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktYnV0dG9uLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWZvcm0uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1mb3JtLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LW1pbmktY2FyZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LW1pbmktY2FyZC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1kaWFsb2dfcG9wdXAuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1kaWFsb2dfcG9wdXAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktZm9vdGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktZm9vdGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWhlYWRlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWhlYWRlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1wZXJzb24uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1wZXJzb24uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktcG9zdGVyX2Jhci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LXBvc3Rlcl9iYXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vbXktYnV0dG9uLnNjc3MnO1xyXG5cclxuLy9VSS3QutC+0LzQv9C+0L3QtdC90YIgXCLQmtC90L7Qv9C60LBcIlxyXG5cclxuLy8g0LIg0L/RgNC40L3RhtC40L/QtSDRjdGC0LjQvCDQvNC+0LbQvdC+INC90LUg0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0LCBtb2RlLCBpc0N1c3RvbSkge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuXHJcbiAgc2V0VGV4dChidG4sIHRleHQpO1xyXG4gIHNldE1vZGUoYnRuLCBtb2RlLCBpc0N1c3RvbSk7XHJcblxyXG4gIHJldHVybiBidG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUEodGV4dCwgbW9kZSwgaXNDdXN0b20sIGxpbmspIHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGEuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcblxyXG4gIHNldFRleHQoYSwgdGV4dCk7XHJcbiAgc2V0TW9kZShhLCBtb2RlLCBpc0N1c3RvbSk7XHJcbiAgc2V0TGluayhhLCBsaW5rKTtcclxuXHJcbiAgcmV0dXJuIGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRleHQoYnRuLCB0ZXh0KSB7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TW9kZShidG4sIG1vZGUsIGN1c3RvbSkge1xyXG4gIGJ0bi5jbGFzc0xpc3QuYWRkKG1vZGUpO1xyXG5cclxuICBpZiAoY3VzdG9tKSB7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMaW5rKGEsIGxpbmspIHtcclxuICBhLmhyZWYgPSBsaW5rO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlQnV0dG9uLFxyXG4gIGNyZWF0ZUEsXHJcbn07XHJcbiIsImltcG9ydCAnLi9teS1mb3JtLnNjc3MnXHJcbmltcG9ydCAnLi92YWxpZGF0aW9uLmpzJ1xyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlKGxhYmVsUCwgcGxhY2Vob2xkZXJQKXtcclxuLy8gICAgIGNvbnN0IGZvcm1tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbi8vICAgICBmb3JtbS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cCcpXHJcbi8vICAgICBjb25zdCBsYWJlbEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbi8vICAgICBmb3JtbS5hcHBlbmRDaGlsZChsYWJlbEgpXHJcbi8vICAgICBjb25zdCBpbnB1dEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbi8vICAgICBpbnB1dEgudHlwZSA9ICd0ZXh0JztcclxuLy8gICAgIGZvcm1tLmFwcGVuZENoaWxkKGlucHV0SClcclxuLy8gICAgIGNvbnN0IHNwYW5IID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbi8vICAgICBmb3JtbS5hcHBlbmRDaGlsZChzcGFuSClcclxuXHJcbi8vICAgICBzZXRUZXh0KGZvcm1tLCBsYWJlbFAsIHBsYWNlaG9sZGVyUCk7XHJcblxyXG4vLyAgICAgcmV0dXJuIGZvcm1tO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBzZXRUZXh0KGZvcm1tLCBsYWJlbFAsIHBsYWNlaG9sZGVyUCl7XHJcbi8vICAgICBjb25zdCBsYWJlbEggPSBmb3JtbS5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpXHJcbi8vICAgICBjb25zdCBpbnB1dEggPSBmb3JtbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXHJcbiAgICBcclxuLy8gICAgIGxhYmVsSC50ZXh0Q29udGVudCA9IGxhYmVsUDtcclxuLy8gICAgIGlucHV0SC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyUDtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQge1xyXG4vLyAgICAgY3JlYXRlXHJcbi8vIH0iLCJcclxuXHJcbmZ1bmN0aW9uIHNldHVwRm9ybVZhbGlkYXRpb24oKSB7XHJcbiAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJyk7XHJcblxyXG4gIGZvcm1zLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmICghY2hlY2tWYWxpZGl0eShmb3JtKSkge1xyXG4gICAgICAgIHNob3dDdXN0b21FcnJvcnMoZm9ybSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybS5zdWJtaXQoKTsgXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkaXR5KGZvcm0pe1xyXG5cclxufVxyXG4vLyAvLyDQn9C+0LrQsNC30LDRgtGMINC60LDRgdGC0L7QvNC90YvQtSDQvtGI0LjQsdC60Lgg0LIgc3BhbiDQtNC70Y8g0LLRgdC10YUg0L/QvtC70LXQuSDRgSBuYW1lXHJcbi8vIGZ1bmN0aW9uIHNob3dDdXN0b21FcnJvcnMoZm9ybSkge1xyXG4vLyAgIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbJyk7IC8vINCf0L7Qu9GPINGBIG5hbWVcclxuXHJcbi8vICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4vLyAgICAgY29uc3QgZXJyb3JTcGFuID0gZ2V0RXJyb3JTcGFuKGlucHV0KTtcclxuXHJcbi8vICAgICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbi8vICAgICAgIHNob3dFcnJvcihpbnB1dCwgZXJyb3JTcGFuKTtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIGNsZWFyRXJyb3IoZXJyb3JTcGFuKTtcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuLy8gLy8g0J/QvtC60LDQt9Cw0YLRjCDRgdC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LVcclxuLy8gZnVuY3Rpb24gc2hvd0Vycm9yKGlucHV0LCBlcnJvclNwYW4pIHtcclxuLy8gICBsZXQgbWVzc2FnZSA9ICcnO1xyXG5cclxuLy8gICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbi8vICAgICBtZXNzYWdlID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJztcclxuLy8gICB9IGVsc2UgaWYgKGlucHV0LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xyXG4vLyAgICAgbWVzc2FnZSA9ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90L7QtSDQt9C90LDRh9C10L3QuNC1JztcclxuLy8gICB9IGVsc2UgaWYgKGlucHV0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbi8vICAgICBtZXNzYWdlID0gYNCc0LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCAke2lucHV0Lm1pbkxlbmd0aH0g0YHQuNC80LLQvtC70L7Qsi4g0JLQstC10LTQtdC90L4gJHtpbnB1dC52YWx1ZS5sZW5ndGh9YDtcclxuLy8gICB9IGVsc2UgaWYgKGlucHV0LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xyXG4vLyAgICAgbWVzc2FnZSA9ICfQl9C90LDRh9C10L3QuNC1INC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0YTQvtGA0LzQsNGC0YMnO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuLy8gfVxyXG5cclxuLy8gLy8g0J7Rh9C40YHRgtC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LVcclxuLy8gZnVuY3Rpb24gY2xlYXJFcnJvcihlcnJvclNwYW4pIHtcclxuLy8gICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSAnJztcclxuLy8gfVxyXG5cclxuLy8gLy8g0J3QsNC50YLQuCDQuNC70Lgg0YHQvtC30LTQsNGC0Ywgc3BhbiDQtNC70Y8g0YHQvtC+0LHRidC10L3QuNGPINC+0LEg0L7RiNC40LHQutC1XHJcbi8vIGZ1bmN0aW9uIGdldEVycm9yU3BhbihpbnB1dCkge1xyXG4vLyAgIGxldCBlcnJvclNwYW4gPSBpbnB1dC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7XHJcbi8vICAgaWYgKCFlcnJvclNwYW4pIHtcclxuLy8gICAgIGVycm9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuLy8gICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XHJcbi8vICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVycm9yU3Bhbik7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBlcnJvclNwYW47XHJcbi8vIH1cclxuXHJcbi8vIC8vINCX0LDQv9GD0YHQuiDQstCw0LvQuNC00LDRhtC40Lgg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRi1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4vLyAgIHNldHVwRm9ybVZhbGlkYXRpb24oKTtcclxuLy8gfSk7XHJcbiIsImltcG9ydCAnLi9teS1taW5pLWNhcmQuc2Nzcyc7XHJcbmltcG9ydCBjYXJkSFRNTCBmcm9tICcuL2luZGV4Lmh0bWwnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBvc3Rlcikge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWNhcmQnKTtcclxuICBjYXJkLmlkID0gJ3Bvc3QtMTIzJztcclxuICBjYXJkLmlubmVySFRNTCA9IGNhcmRIVE1MO1xyXG5cclxuICB0dXJuT25GYXZCdXR0b24oY2FyZCk7XHJcbiAgaWYgKHBvc3Rlcil7XHJcbiAgICAgIHNldERhdGEoY2FyZCwgcG9zdGVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0dXJuT25GYXZCdXR0b24oY2FyZCkge1xyXG4gIGNvbnN0IGZhdiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlLWJ0bicpO1xyXG4gIGZhdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGZhdi5jbGFzc0xpc3QudG9nZ2xlKCdmYXYtYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhdGEoY2FyZCwgcG9zdGVyKSB7XHJcbiAgY29uc3QgbmFtZUh0bWwgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XHJcbiAgY29uc3QgYXV0aG9ySHRtbCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmF1dGhvcicpO1xyXG4gIGNvbnN0IHByaWNlSHRtbCA9IGNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlIHNwYW4nKTtcclxuICBjb25zdCBpbWdIdG1sID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuXHJcbiAgbmFtZUh0bWwudGV4dENvbnRlbnQgPSBwb3N0ZXIudGl0bGU7XHJcbiAgYXV0aG9ySHRtbC50ZXh0Q29udGVudCA9IHBvc3Rlci5hdXRob3I7XHJcbiAgcHJpY2VIdG1sLnRleHRDb250ZW50ID0gcG9zdGVyLnByaWNlO1xyXG4gIGltZ0h0bWwuc3JjID0gcG9zdGVyLmltYWdlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlLFxyXG59O1xyXG4iLCJpbXBvcnQgJy4vbXktZGlhbG9nX3BvcHVwLnNjc3MnO1xyXG5pbXBvcnQgbG9naW5IVE1MIGZyb20gJy4vbG9naW4uaHRtbCc7XHJcbmltcG9ydCByZWdpc3RlckhUTUwgZnJvbSAnLi9yZWdpc3Rlci5odG1sJztcclxuaW1wb3J0IGZvcmdvdEhUTUwgZnJvbSAnLi9mb3Jnb3QuaHRtbCc7XHJcblxyXG5pbXBvcnQgbXlGb3JtIGZyb20gJy4uLy4uL1VJL215LWZvcm0vbXktZm9ybSc7XHJcbmltcG9ydCBteUJ1dHRvbiBmcm9tICcuLi8uLi9VSS9teS1idXR0b24vbXktYnV0dG9uJztcclxuXHJcbi8vIGltcG9ydCBcIi4vdmFsaWRhdGlvbi5qc1wiO1xyXG5cclxuY29uc3QgY29udGVudE1hcCA9IG5ldyBNYXAoW1xyXG4gIFsnbG9naW4nLCBsb2dpbkhUTUxdLFxyXG4gIFsncmVnaXN0ZXInLCByZWdpc3RlckhUTUxdLFxyXG4gIFsnZm9yZ290JywgZm9yZ290SFRNTF0sXHJcbl0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gIGNvbnN0IHBvcHVwU3lzdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQocG9wdXBTeXN0ZW0pO1xyXG4gIH0pO1xyXG5cclxuICBjb250ZW50TWFwLmZvckVhY2goKGNvbnRlbnQsIHR5cGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3V2luZG93LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICBuZXdXaW5kb3cuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLXBvcHVwJywgdHlwZSk7XHJcbiAgICBwb3B1cFN5c3RlbS5hcHBlbmRDaGlsZChuZXdXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxuICBhZGRDbG9zZUxvZ2ljKHBvcHVwU3lzdGVtKTtcclxuICBzZXRMaW5rcyhwb3B1cFN5c3RlbSk7XHJcblxyXG4gIHJldHVybiBwb3B1cFN5c3RlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xvc2VMb2dpYyhwb3B1cFN5c3RlbSkge1xyXG4gIHBvcHVwU3lzdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGlhbG9nLXBvcHVwLmFjdGl2ZScpKSB7XHJcbiAgICAgIGNsb3NlQWxsKHBvcHVwU3lzdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcG9wdXBTeXN0ZW0ucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZVwiKS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2xvc2VBbGwocG9wdXBTeXN0ZW0pO1xyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBwb3B1cFN5c3RlbS5xdWVyeVNlbGVjdG9yQWxsKCcuZGlhbG9nLXBvcHVwJykuZm9yRWFjaCgoZGlhbG9nKSA9PiB7XHJcbiAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QnV0dG9uQXNPcGVuZXIocG9wdXBTeXN0ZW0sIHR5cGUsIGJ1dHRvbikge1xyXG4gIGlmIChidXR0b24pIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Qb3B1cChwb3B1cFN5c3RlbSwgdHlwZSkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBCdXR0b24gZm9yIHR5cGUgJHt0eXBlfSBub3QgZm91bmRgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExpbmtzKHBvcHVwU3lzdGVtKSB7XHJcbiAgWydyZWdpc3RlcicsICdsb2dpbicsICdmb3Jnb3QnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICBwb3B1cFN5c3RlbS5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0eXBlfUxpbmtgKS5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgIHNldExpbmtBc09wZW5lcihwb3B1cFN5c3RlbSwgdHlwZSwgbGluayk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TGlua0FzT3BlbmVyKHBvcHVwU3lzdGVtLCB0eXBlLCBsaW5rKSB7XHJcbiAgaWYgKGxpbmspIHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY2xvc2VBbGwocG9wdXBTeXN0ZW0pO1xyXG4gICAgICBvcGVuUG9wdXAocG9wdXBTeXN0ZW0sIHR5cGUpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYExpbmsgZm9yIHR5cGUgJHt0eXBlfSBub3QgZm91bmRgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Qb3B1cChwb3B1cFN5c3RlbSwgdHlwZSkge1xyXG4gIHBvcHVwU3lzdGVtLmNsYXNzTGlzdC5hZGQoJ3BvcC1hY3RpdmUnKTtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgcG9wdXBTeXN0ZW0ucXVlcnlTZWxlY3RvcihgLiR7dHlwZX1gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VBbGwocG9wdXBTeXN0ZW0pIHtcclxuICBwb3B1cFN5c3RlbS5jbGFzc0xpc3QucmVtb3ZlKCdwb3AtYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICBwb3B1cFN5c3RlbS5xdWVyeVNlbGVjdG9yQWxsKCcuZGlhbG9nLXBvcHVwLmFjdGl2ZScpLmZvckVhY2goKGRpYWxvZykgPT4ge1xyXG4gICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlLFxyXG4gIHNldEJ1dHRvbkFzT3BlbmVyLFxyXG59O1xyXG4iLCJpbXBvcnQgJy4vbXktZm9vdGVyLnNjc3MnO1xyXG5pbXBvcnQgZm9vdGVySFRNTCBmcm9tICcuL2luZGV4Lmh0bWwnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGZvb3Rlci5pZCA9ICdmb290ZXInO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBmb290ZXJIVE1MO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgaWYgKGZvb3Rlcikge1xyXG4gICAgICBjb25zdCBzdmdQYXRoID0gZm9vdGVyLnF1ZXJ5U2VsZWN0b3IoJ3N2ZyBwYXRoJyk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBzdmdQYXRoLnN0eWxlLmZpbGwgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3ZnUGF0aC5zdHlsZS5maWxsID0gJ3doaXRlJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwge1xyXG4gICAgICAgIHRocmVzaG9sZDogMC43XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGZvb3Rlcik7XHJcbiAgICB9IFxyXG4gIH0pO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGUsXHJcbn07XHJcbiIsImltcG9ydCAnLi9teS1oZWFkZXIuc2Nzcyc7XHJcbmltcG9ydCBoZWFkZXJIVE1MIGZyb20gJy4vaW5kZXguaHRtbCc7XHJcbmltcG9ydCBteURpYWxvZ19wb3B1cCBmcm9tICcuLi9kaWFsb2dfcG9wdXAvbXktZGlhbG9nX3BvcHVwJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcclxuICBoZWFkZXIuaW5uZXJIVE1MID0gaGVhZGVySFRNTDtcclxuXHJcbiAgY29uc3QgZGlhbG9ncyA9IG15RGlhbG9nX3BvcHVwLmNyZWF0ZSgpO1xyXG5cclxuICBjb25zdCBsb2dpbkJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubG9naW5CdG4nKTtcclxuICBjb25zdCByZWdpc3RlckJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXJCdG4nKTtcclxuICBjb25zdCBzaWRlYmFyTG9naW5CdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJMb2dpbkJ0bicpO1xyXG4gIGNvbnN0IHNpZGViYXJSZWdpc3RlckJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhclJlZ2lzdGVyQnRuJyk7XHJcbiAgLy8gY29uc3QgZm9yZ290QnRuID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5mb3Jnb3RCdG4nKTtcclxuXHJcbiAgbXlEaWFsb2dfcG9wdXAuc2V0QnV0dG9uQXNPcGVuZXIoZGlhbG9ncywgJ2xvZ2luJywgbG9naW5CdG4pO1xyXG4gIG15RGlhbG9nX3BvcHVwLnNldEJ1dHRvbkFzT3BlbmVyKGRpYWxvZ3MsICdyZWdpc3RlcicsIHJlZ2lzdGVyQnRuKTtcclxuICBteURpYWxvZ19wb3B1cC5zZXRCdXR0b25Bc09wZW5lcihkaWFsb2dzLCAnbG9naW4nLCBzaWRlYmFyTG9naW5CdG4pO1xyXG4gIG15RGlhbG9nX3BvcHVwLnNldEJ1dHRvbkFzT3BlbmVyKGRpYWxvZ3MsICdyZWdpc3RlcicsIHNpZGViYXJSZWdpc3RlckJ0bik7XHJcbiAgLy8gbXlEaWFsb2dfcG9wdXAuc2V0QXNPcGVuZXIoZGlhbG9ncywgJ2ZvcmdvdCcsIGZvcmdvdEJ0bik7XHJcblxyXG4gIGFkZFNpZGVCYXIoaGVhZGVyKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2lkZUJhcihoZWFkZXIpIHtcclxuICBjb25zdCBpY29uID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpO1xyXG4gIGNvbnN0IHNpZGViYXIgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlLFxyXG59O1xyXG4iLCJpbXBvcnQgJy4vbXktcGVyc29uLnNjc3MnXHJcbmltcG9ydCBwZXJzb25IVE1MIGZyb20gJy4vaW5kZXguaHRtbCdcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwaG90bywgbmFtZSwgZGVzY3JpcHRpb24sIG1haWwsIHdlYnNpdGUsIHRnKXtcclxuICAgIGNvbnN0IHBlcnNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKVxyXG4gICAgcGVyc29uLmlubmVySFRNTCA9IHBlcnNvbkhUTUw7XHJcbiAgICBwZXJzb24uY2xhc3NMaXN0LmFkZCgncGVyc29uJylcclxuXHJcbiAgICByZXR1cm4gcGVyc29uO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBjcmVhdGVcclxufSIsImltcG9ydCAnLi9teS1wb3N0ZXJfYmFyLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBvc3RlcnNfYXJyYXkpe1xyXG4gICAgdmFyIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxyXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ3Bvc3Rlci1iYXInKVxyXG4gICAgc2V0UG9zdGVycyhiYXIsIHBvc3RlcnNfYXJyYXkpXHJcblxyXG4gICAgcmV0dXJuIGJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UG9zdGVycyhiYXIsIHBvc3RlcnNfYXJyYXkpe1xyXG4gICAgcG9zdGVyc19hcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgIGJhci5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjcmVhdGVcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvbWF0ZXJpYWwvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwZXJzb25cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvcmVzZXQuc2Nzcyc7XHJcblxyXG5pbXBvcnQgbXlQZXJzb24gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9wZXJzb24vbXktcGVyc29uJztcclxuaW1wb3J0IG15UG9zdGVyQmFyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvcG9zdGVyX2Jhci9teS1wb3N0ZXJfYmFyJztcclxuaW1wb3J0IG15TWluaV9jYXJkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbXktbWluaV9jYXJkL215LW1pbmlfY2FyZCc7XHJcbmltcG9ydCBteUhlYWRlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXInXHJcbmltcG9ydCBteUZvb3RlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2Zvb3Rlci9teS1mb290ZXInXHJcblxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbmNvbnN0IHBvc3RlcnMgPSBbXHJcbiAgbXlNaW5pX2NhcmQuY3JlYXRlKCksXHJcbiAgbXlNaW5pX2NhcmQuY3JlYXRlKCksXHJcbiAgbXlNaW5pX2NhcmQuY3JlYXRlKCksXHJcbl07XHJcblxyXG5jb25zdCBwZXJzb24gPSBteVBlcnNvbi5jcmVhdGUoKTtcclxuYm9keS5hcHBlbmRDaGlsZChteUhlYWRlci5jcmVhdGUoKSlcclxuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxubWFpbi5hcHBlbmRDaGlsZChwZXJzb24pO1xyXG5tYWluLmFwcGVuZENoaWxkKG15UG9zdGVyQmFyLmNyZWF0ZShwb3N0ZXJzKSk7XHJcbmJvZHkuYXBwZW5kQ2hpbGQobXlGb290ZXIuY3JlYXRlKCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9