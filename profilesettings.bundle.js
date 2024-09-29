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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

сори за !important 
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
}`, "",{"version":3,"sources":["webpack://./src/UI/my-button/my-button.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

.font-p3, form > ul > li > span.error-message, form > ul > li > input,
form > ul > li textarea {
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

.font-label, form > ul > li > label {
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
  .font-p3, form > ul > li > span.error-message, form > ul > li > input,
  form > ul > li textarea {
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
  .font-label, form > ul > li > label {
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

сори за !important 
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

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem;
}
form > ul {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  list-style: none;
}
form > ul > li {
  display: flex;
  flex-direction: column;
}
form > ul > li > label {
  color: rgba(42, 43, 44, 0.5);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}
form > ul > li > textarea {
  resize: none;
  min-height: 9rem;
}
form > ul > li > input,
form > ul > li textarea {
  padding: 1.3rem 1.6rem;
  border: 1px solid rgba(42, 43, 44, 0.1);
  background-color: rgba(42, 43, 44, 0.04);
  border-radius: 1rem;
  width: 100%;
}
form > ul > li > input.invalid,
form > ul > li textarea.invalid {
  border: 1px solid #e54e1f;
}
form > ul > li > input.success,
form > ul > li textarea.success {
  border-color: #6ead48;
}
form > ul > li > input:disabled,
form > ul > li textarea:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}
form > ul > li > input:hover,
form > ul > li textarea:hover {
  border: 0.1rem solid rgba(42, 43, 44, 0.6);
}
form > ul > li > input:focus,
form > ul > li textarea:focus {
  outline: 0.2rem solid rgba(37, 37, 213, 0.2);
  border: 0.1rem solid #0E63E3;
}
form > ul > li > span.error-message {
  font-size: 1.2rem;
  color: #e54e1f;
  margin-top: 1rem;
}

@media (max-width: 1023px) {
  form {
    gap: 1.8rem;
  }
  form > ul {
    gap: 1rem;
  }
  form > ul > li > input,
  form > ul > li textarea {
    padding: 1.2rem 1.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/UI/my-form/my-form.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

сори за !important 
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
}`, "",{"version":3,"sources":["webpack://./src/components/my-mini_card/my-mini-card.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACEhB;EAEC,YAAA;EACA,WAAA;EACA,YAAA;ADDD;;ACIA;;;EAIC,sBAAA;ADFD;;ACKA;EAEI,qBAAA;ADHJ;;ACMA;EAEI,qBAAA;ADJJ;;ACOA;EAEC,cAAA;ADLD;;ACQA;EAEI,kBAAA;EACH,oBAAA;ADND;;ACSA;EAEC,gBAAA;ADPD;;ACUA;EAEC,WAAA;EACA,YAAA;EACA,mBAAA;ADRD;;ACWA;EAEC,eAAA;EACA,YAAA;ADTD;;ACYA;EAEE,kBAAA;ADVF;;ACaA;EAEC,oBAAA;EACG,kBAAA;EACA,cAAA;EACA,6BAAA;ADXJ;;ACcA;EAEC,aAAA;ADZD;;ACeA;EAEI,qBAAA;EACA,gBAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;ADbJ;;ACgBA;EAEI,aAAA;ADdJ;;ACiBA;EAEC,UAAA;EACA,SAAA;ADfD;;ACkBA;EAEC,eAAA;ADhBD;;ACmBA;EAEC,cAAA;ADjBD;;AEhFA;EAEI,qBAJU;AFsFd;;AGvFA;;;;;;;CAAA;AAcA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AHoFF;;AGjFA;EACE,aAAA;EACA,sBAAA;AHoFF;;AGjFA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;AHoFF;;AGjFA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AHoFF;;AGjFA;EACE;IACE,kBAAA;IACA,mBAAA;EHoFF;EGjFA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EHmFF;EGhFA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EHkFF;AACF;AI9IA;EACE,SAAA;EACA,gBAAA;AJgJF;;AIhIA;EACE,4BAAA;EACA,gBAAA;EACA,+DAAA;AJmIF;AIhIA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;AJkIF;AI/HA;EACE,6BAAA;EACA,gBAAA;EACA,+DAAA;AJiIF;AI9HA;EACE,gCAAA;EACA,gBAAA;EACA,+DAAA;AJgIF;AI7HA;EACE,6BAAA;EACA,iBAAA;AJ+HF;;AI7HA;EACE,6BAAA;EACA,iBAAA;EACA,iBAAA;AJgIF;;AI9HA;EACE,sBAAA;EACA,iBAAA;AJiIF;;AI/HA;EACE,6BAAA;EACA,iBAAA;AJkIF;;AIhIA;EACE,6BAAA;EACA,iBAAA;AJmIF;;AIjIA;EACE,4BAAA;EACA,eAAA;AJoIF;;AIlIA;EACE,6BAAA;EACA,iBAAA;AJqIF;;AInIA;EACE,sBAAA;EACA,eAAA;EACA,iBAAA;AJsIF;;AIpIA;EACE,sBAAA;EACA,iBAAA;AJuIF;;AIrIA;EACE,sBAAA;EACA,iBAAA;AJwIF;;AItIA;EACE,sBAAA;EACA,iBAAA;AJyIF;;AIvIA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AJ0IF;;AIxIA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AJ2IF;;AIxIA;EACE;IACE,6BAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,6BAAA;IACA,iBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,6BAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,4BAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,6BAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EJ2IF;AACF;AGpSA;;;;;;;CAAA;AAcA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AHgSF;;AG7RA;EACE,aAAA;EACA,sBAAA;AHgSF;;AG7RA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;AHgSF;;AG7RA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AHgSF;;AG7RA;EACE;IACE,kBAAA;IACA,mBAAA;EHgSF;EG7RA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EH+RF;EG5RA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EH8RF;AACF;AKtVA;EACE,aAAA;EACA,sBAAA;EACA,yBCPY;AN+Vd;;AA/VA;EACE,gBAAA;AAkWF;AA/VI;EACE,6CAAA;EACA,WAAA;EACA,iBAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,qBEdQ;EFeR,kBAAA;AAiWN;AA/VM;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AAiWR;AA9VM;EACE,0CAAA;EACA,0BAAA;EACA,qBE3BM;EF6BN,YAAA;EACA,WAAA;EACA,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA+VR;AA7VQ;EACE,eAAA;AA+VV;AA5VQ;EACE,yBM7CI;EN8CJ,0BAAA;AA8VV;AA1VU;EACE,aMpDE;ANgZd;AAtVI;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AAwVN;AAtVM;EACE,aAAA;EACA,8BAAA;AAwVR;AAtVQ;EAEE,4BAAA;EACA,qBEvEI;AF8Zd;AApVQ;EAEE,cM5EI;EN6EJ,qBE7EI;AFkad;AAjVM;EACE,WAAA;EACA,eAAA;EACA,wCAAA;EACA,qBErFM;AFwad;AAhVM;EAEE,cM1FM;EN2FN,mCAAA;AAiVR;AA9UM;EACE,mCAAA;AAgVR;AA3UM;;;EAGE,cMxGO;ANqbf;AA1UM;EACE,WAAA;AA4UR;AAzUM;EACE,wCAAA;AA2UR","sourceRoot":""}]);
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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

.font-p2, dialog .dialog-popup .right-side .blac, dialog .dialog-popup .left-side span, dialog .dialog-popup .left-side p {
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

.font-label, dialog .dialog-popup .right-side .or-google p {
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
  .font-p2, dialog .dialog-popup .right-side .blac, dialog .dialog-popup .left-side span, dialog .dialog-popup .left-side p {
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
  .font-label, dialog .dialog-popup .right-side .or-google p {
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

сори за !important 
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

dialog {
  background-color: rgba(97, 97, 97, 0.5);
  position: fixed;
  inset: 0;
  z-index: 101;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  justify-content: center;
  transition: all 0.5s ease;
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-items: center;
  backdrop-filter: blur(15px);
  width: 100%;
  height: auto;
  border: 0;
  padding: 5rem 1rem;
}
dialog .dialog-popup {
  width: 100%;
  max-width: 96rem;
  background-color: #FAFAFA;
  position: relative;
  border-radius: 1rem;
  display: none;
  min-height: 54rem;
  grid-template-columns: repeat(2, 1fr);
}
dialog .dialog-popup .left-side {
  background-size: cover;
  background-position: center;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
}
dialog .dialog-popup .left-side img {
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
dialog .dialog-popup .left-side p {
  color: #FAFAFA;
  position: absolute;
  margin: 4rem;
}
dialog .dialog-popup .left-side span {
  transition: 200ms;
  cursor: pointer;
  text-decoration: underline;
  color: #FAFAFA;
}
dialog .dialog-popup .left-side span:hover {
  color: rgba(250, 250, 250, 0.6);
}
dialog .dialog-popup .password-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
}
dialog .dialog-popup .right-side {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
dialog .dialog-popup .right-side .blac {
  color: #2A2B2C;
  align-self: flex-end;
  transition: 200ms;
  cursor: pointer;
  text-decoration: underline;
  margin-top: -0.5rem;
}
dialog .dialog-popup .right-side .blac:hover {
  color: rgba(42, 43, 44, 0.6);
}
dialog .dialog-popup .right-side .or-google {
  width: 100%;
  display: flex;
  flex-direction: column;
}
dialog .dialog-popup .right-side .or-google p {
  align-self: center;
  color: rgba(42, 43, 44, 0.5);
  margin-bottom: 1.5rem;
}
dialog .active {
  display: grid;
}

.pop-active {
  opacity: 1;
  pointer-events: all;
}

.register {
  min-height: 41rem;
}

@media (max-width: 730px) {
  .dialog-popup {
    grid-template-columns: 1fr !important;
  }
  .left-side {
    height: 35rem !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/modules/dialog_popup/my-dialog_popup.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

сори за !important 
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
}`, "",{"version":3,"sources":["webpack://./src/modules/footer/my-footer.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/h1_and_p/my-h1_and_p.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/h1_and_p/my-h1_and_p.scss ***!
  \****************************************************************************************************************************/
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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

.font-p1, html > body > main > section.h1p > .wrap > p {
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
  .font-p1, html > body > main > section.h1p > .wrap > p {
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

сори за !important 
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

html > body > main > section.h1p {
  width: 100%;
  padding-top: 5.4rem;
  padding-bottom: 4rem;
}
html > body > main > section.h1p > .wrap {
  max-width: 80rem;
  display: flex;
  flex-direction: column;
}
html > body > main > section.h1p > .wrap > h1 {
  color: #2A2B2C;
}
html > body > main > section.h1p > .wrap > p {
  margin-top: 1.45rem;
  color: rgba(42, 43, 44, 0.8);
}

@media (max-width: 1023px) {
  html > body > main > section.h1p {
    padding-top: 3.8rem;
    padding-bottom: 2.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/modules/h1_and_p/my-h1_and_p.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

сори за !important 
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
}`, "",{"version":3,"sources":["webpack://./src/modules/header/my-header.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

сори за !important 
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

html > body > main > section.poster-bar {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  column-gap: 2rem;
  row-gap: 5.8rem;
  margin-bottom: 8rem;
}`, "",{"version":3,"sources":["webpack://./src/modules/poster_bar/my-poster_bar.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACEhB;EAEC,YAAA;EACA,WAAA;EACA,YAAA;ADDD;;ACIA;;;EAIC,sBAAA;ADFD;;ACKA;EAEI,qBAAA;ADHJ;;ACMA;EAEI,qBAAA;ADJJ;;ACOA;EAEC,cAAA;ADLD;;ACQA;EAEI,kBAAA;EACH,oBAAA;ADND;;ACSA;EAEC,gBAAA;ADPD;;ACUA;EAEC,WAAA;EACA,YAAA;EACA,mBAAA;ADRD;;ACWA;EAEC,eAAA;EACA,YAAA;ADTD;;ACYA;EAEE,kBAAA;ADVF;;ACaA;EAEC,oBAAA;EACG,kBAAA;EACA,cAAA;EACA,6BAAA;ADXJ;;ACcA;EAEC,aAAA;ADZD;;ACeA;EAEI,qBAAA;EACA,gBAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;ADbJ;;ACgBA;EAEI,aAAA;ADdJ;;ACiBA;EAEC,UAAA;EACA,SAAA;ADfD;;ACkBA;EAEC,eAAA;ADhBD;;ACmBA;EAEC,cAAA;ADjBD;;AEhFA;EAEI,qBAJU;AFsFd;;AGvFA;;;;;;;CAAA;AAcA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AHoFF;;AGjFA;EACE,aAAA;EACA,sBAAA;AHoFF;;AGjFA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;AHoFF;;AGjFA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AHoFF;;AGjFA;EACE;IACE,kBAAA;IACA,mBAAA;EHoFF;EGjFA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EHmFF;EGhFA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EHkFF;AACF;AI9IA;EACE,SAAA;EACA,gBAAA;AJgJF;;AIhIA;EACE,4BAAA;EACA,gBAAA;EACA,+DAAA;AJmIF;AIhIA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;AJkIF;AI/HA;EACE,6BAAA;EACA,gBAAA;EACA,+DAAA;AJiIF;AI9HA;EACE,gCAAA;EACA,gBAAA;EACA,+DAAA;AJgIF;AI7HA;EACE,6BAAA;EACA,iBAAA;AJ+HF;;AI7HA;EACE,6BAAA;EACA,iBAAA;EACA,iBAAA;AJgIF;;AI9HA;EACE,sBAAA;EACA,iBAAA;AJiIF;;AI/HA;EACE,6BAAA;EACA,iBAAA;AJkIF;;AIhIA;EACE,6BAAA;EACA,iBAAA;AJmIF;;AIjIA;EACE,4BAAA;EACA,eAAA;AJoIF;;AIlIA;EACE,6BAAA;EACA,iBAAA;AJqIF;;AInIA;EACE,sBAAA;EACA,eAAA;EACA,iBAAA;AJsIF;;AIpIA;EACE,sBAAA;EACA,iBAAA;AJuIF;;AIrIA;EACE,sBAAA;EACA,iBAAA;AJwIF;;AItIA;EACE,sBAAA;EACA,iBAAA;AJyIF;;AIvIA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AJ0IF;;AIxIA;EACE,sBAAA;EACA,iBAAA;EACA,yBAAA;AJ2IF;;AIxIA;EACE;IACE,6BAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,6BAAA;IACA,iBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,6BAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,4BAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,6BAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EJ2IF;EIzIA;IACE,sBAAA;IACA,iBAAA;IACA,yBAAA;EJ2IF;AACF;AGpSA;;;;;;;CAAA;AAcA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AHgSF;;AG7RA;EACE,aAAA;EACA,sBAAA;AHgSF;;AG7RA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;AHgSF;;AG7RA;;EAEE,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AHgSF;;AG7RA;EACE;IACE,kBAAA;IACA,mBAAA;EHgSF;EG7RA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;EH+RF;EG5RA;;IAEE,wBAAA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;EH8RF;AACF;AKtVA;EACE,aAAA;EACA,sBAAA;EACA,yBCPY;AN+Vd;;AA/VA;EACI,WAAA;EACA,aAAA;EACA,4DAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;AAkWJ","sourceRoot":""}]);
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
* {
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
}

a {
  transition: 0.2s ease;
}

/*
Здесь всё, что касается зависимостей от ширины экрана:
1. Паддинги у body;
2. Отступы между компонентами;
3. Класс элемента изображения в полную ширину экрана для мобилы.

сори за !important 
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
html {
  /* 10px */
  font-size: 62.5%;
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

сори за !important 
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
}`, "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/other.scss","webpack://./src/styles/screens.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
        <input type="text" placeholder="Почта или никнейм" required />
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
        <input type="text" name="name" placeholder="Имя или никнейм" required />
        <span class="error-message"></span>
      </li>
      <li class="text">
        <label for="password">Пароль</label>
        <input type="password" name="password" placeholder="Пароль" required />
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
        <input type="text" placeholder="Никнейм" required />
        <span class="error-message"></span>
      </li>
      <li class="text">
        <label for="name">Почта</label>
        <input type="email" placeholder="Почта" required />
        <span class="error-message"></span>
      </li>
      <li class="text password-wrap">
        <div class="text">
          <label for="password">Пароль</label>
          <input type="password" placeholder="Пароль" required />
          <span class="error-message"></span>
        </div>
        <div class="text">
          <label for="password">Пароль</label>
          <input type="password" placeholder="Пароль" required />
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

/***/ "./src/modules/h1_and_p/index.html":
/*!*****************************************!*\
  !*** ./src/modules/h1_and_p/index.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="wrap">
    <h1>Заголовок</h1>
    <p>Текст под заголовком</p>
</div>`;
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

/***/ "./src/modules/h1_and_p/my-h1_and_p.scss":
/*!***********************************************!*\
  !*** ./src/modules/h1_and_p/my-h1_and_p.scss ***!
  \***********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_h1_and_p_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./my-h1_and_p.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/h1_and_p/my-h1_and_p.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_h1_and_p_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_h1_and_p_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_h1_and_p_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_h1_and_p_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  document.body.classList.add('no-scroll');
  popupSystem.querySelector(`.${type}`).classList.add('active');
}

function closeAll(popupSystem) {
  popupSystem.classList.remove('pop-active');
  document.body.classList.remove('no-scroll');
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

/***/ "./src/modules/h1_and_p/my-h1_and_p.js":
/*!*********************************************!*\
  !*** ./src/modules/h1_and_p/my-h1_and_p.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_h1_and_p_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-h1_and_p.scss */ "./src/modules/h1_and_p/my-h1_and_p.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/modules/h1_and_p/index.html");



function create(h1text, ptext){
    const component = document.createElement('section');
    component.classList.add('h1p');
    component.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1__["default"];

    setText(component, h1text, ptext);
    return component;
}

function setText(component, h1text, ptext){
    const h1_ = component.querySelector('h1');
    const p_ = component.querySelector('p');
    if (h1_ && h1text) h1_.textContent = h1text;
    if (p_ && ptext) p_.textContent = ptext; else p_.remove();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    create
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

  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !icon.contains(event.target)) {
      sidebar.style.display = 'none';
      document.body.classList.remove('no-scroll');
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
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
/******/ 			"profilesettings": 0
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
/*!********************************************!*\
  !*** ./src/pages/profilesettings/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/common.scss */ "./src/styles/common.scss");
/* harmony import */ var _modules_header_my_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/header/my-header */ "./src/modules/header/my-header.js");
/* harmony import */ var _modules_h1_and_p_my_h1_and_p__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/h1_and_p/my-h1_and_p */ "./src/modules/h1_and_p/my-h1_and_p.js");
/* harmony import */ var _modules_poster_bar_my_poster_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/poster_bar/my-poster_bar */ "./src/modules/poster_bar/my-poster_bar.js");
/* harmony import */ var _modules_footer_my_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/footer/my-footer */ "./src/modules/footer/my-footer.js");
/* harmony import */ var _components_my_mini_card_my_mini_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/my-mini_card/my-mini_card */ "./src/components/my-mini_card/my-mini_card.js");
/* harmony import */ var _UI_my_button_my_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/my-button/my-button */ "./src/UI/my-button/my-button.js");









// import myButton from "../../UI/my-button/my-button";



const body = document.querySelector('body');

body.appendChild(_modules_header_my_header__WEBPACK_IMPORTED_MODULE_1__["default"].create())
body.appendChild(_modules_h1_and_p_my_h1_and_p__WEBPACK_IMPORTED_MODULE_2__["default"].create('Изменение профиля', 'Добавляемая вами информация видна всем, кто может просматривать ваш профиль.'))
body.appendChild(_modules_footer_my_footer__WEBPACK_IMPORTED_MODULE_4__["default"].create())



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZXNldHRpbmdzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBVQUEwVSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sc0JBQXNCO0FBQ3B6RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWF2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc1VBQXNVLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sc0JBQXNCO0FBQ3QyRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2J2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3VkFBd1YsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sUUFBUSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLHVCQUF1QjtBQUMxbEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNjdkM7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsK0pBQXFEO0FBQ2pHLDRDQUE0QyxtS0FBdUQ7QUFDbkcsNENBQTRDLGlLQUFzRDtBQUNsRyw0Q0FBNEMsdUtBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3VkFBd1YsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdB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O0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0VUFBNFUsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sc0JBQXNCO0FBQy96RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGJ2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ1ZBQWdWLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sc0JBQXNCO0FBQ25nRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVl2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0VUFBNFUsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxzQkFBc0I7QUFDamtKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsa0J2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBcUQ7QUFDakcsNENBQTRDLG1LQUF1RDtBQUNuRyw0Q0FBNEMsaUtBQXNEO0FBQ2xHLDRDQUE0Qyx1S0FBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvVkFBb1YsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyx1QkFBdUI7QUFDcjVGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxWHZDO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLCtKQUFxRDtBQUNqRyw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QyxpS0FBc0Q7QUFDbEcsNENBQTRDLHVLQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0UkFBNFIsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFX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Q0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ2xDO0FBQ3NEO0FBQ007QUFDTTtBQUNaO0FBQ3REO0FBQ3FFO0FBQ2pCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpRUFBUTtBQUN6QixpQkFBaUIscUVBQVU7QUFDM0IsaUJBQWlCLGlFQUFRO0FBQ3pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktYnV0dG9uL215LWJ1dHRvbi5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9VSS9teS1mb3JtL215LWZvcm0uc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvY29tcG9uZW50cy9teS1taW5pX2NhcmQvbXktbWluaS1jYXJkLnNjc3MiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cC5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2Zvb3Rlci9teS1mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9oMV9hbmRfcC9teS1oMV9hbmRfcC5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9wb3N0ZXJfYmFyL215LXBvc3Rlcl9iYXIuc2NzcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvY29tcG9uZW50cy9teS1taW5pX2NhcmQvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9kaWFsb2dfcG9wdXAvZm9yZ290Lmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL3JlZ2lzdGVyLmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZm9vdGVyL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvaDFfYW5kX3AvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9oZWFkZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktYnV0dG9uL215LWJ1dHRvbi5zY3NzPzBjZTEiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5zY3NzPzc2ODYiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL2NvbXBvbmVudHMvbXktbWluaV9jYXJkL215LW1pbmktY2FyZC5zY3NzPzVjMzYiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cC5zY3NzPzVkMzYiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZm9vdGVyL215LWZvb3Rlci5zY3NzP2JhMDAiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvaDFfYW5kX3AvbXktaDFfYW5kX3Auc2Nzcz9mMjg2Iiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXIuc2Nzcz83YWNmIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL3Bvc3Rlcl9iYXIvbXktcG9zdGVyX2Jhci5zY3NzPzI0ZjUiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzcz8xYzQxIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWJ1dHRvbi9teS1idXR0b24uanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL1VJL215LWZvcm0vbXktZm9ybS5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvVUkvbXktZm9ybS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9jb21wb25lbnRzL215LW1pbmlfY2FyZC9teS1taW5pX2NhcmQuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvZGlhbG9nX3BvcHVwL215LWRpYWxvZ19wb3B1cC5qcyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvLi9zcmMvbW9kdWxlcy9mb290ZXIvbXktZm9vdGVyLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2gxX2FuZF9wL215LWgxX2FuZF9wLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS8uL3NyYy9tb2R1bGVzL2hlYWRlci9teS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL21vZHVsZXMvcG9zdGVyX2Jhci9teS1wb3N0ZXJfYmFyLmpzIiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rdXJzb3ZheWEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va3Vyc292YXlhL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2t1cnNvdmF5YS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va3Vyc292YXlhLy4vc3JjL3BhZ2VzL3Byb2ZpbGVzZXR0aW5ncy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEsIGE6bGluaywgYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hc2lkZSwgbmF2LCBmb290ZXIsIGhlYWRlciwgc2VjdGlvbiwgbWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxudWwsIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW1nLCBzdmcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYWRkcmVzcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlLCBidXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiwgLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiwgLmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTYzRTM7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDAuOXJlbSAyLjFyZW0gMXJlbSAyLjFyZW07XG4gIGNvbG9yOiAjRkFGQUZBO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNEQTJGRjtcbiAgYm9yZGVyLXJhZGl1czogMC4zMzMzMzMzMzMzcmVtO1xufVxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0RkM2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyQztcbiAgb3BhY2l0eTogNDAlO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDM3LCAzNywgMjEzLCAwLjIpO1xufVxuLmJ1dHRvbi5vdXRsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgY29sb3I6ICMwRTYzRTM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwRTYzRTM7XG4gIHBhZGRpbmc6IGNhbGMoMC45cmVtIC0gMXB4KSBjYWxjKDIuMXJlbSAtIDFweCkgY2FsYygxcmVtIC0gMXB4KSBjYWxjKDIuMXJlbSAtIDFweCk7XG59XG4uYnV0dG9uLm91dGxpbmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWZiO1xufVxuLmJ1dHRvbi5vdXRsaW5lOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQ0ZTk7XG59XG4uYnV0dG9uLm91dGxpbmU6ZGlzYWJsZWQge1xuICBib3JkZXItY29sb3I6ICMyQTJCMkM7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYnV0dG9uLm91dGxpbmU6Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgzNywgMzcsIDIxMywgMC4yKTtcbn1cbi5idXR0b24uY3VzdG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNC44OHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLmJ1dHRvbi5jdXN0b20ge1xuICAgIGhlaWdodDogNHJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1VJL215LWJ1dHRvbi9teS1idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL290aGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNFaEI7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURERDs7QUNJQTs7O0VBSUMsc0JBQUE7QURGRDs7QUNLQTtFQUVJLHFCQUFBO0FESEo7O0FDTUE7RUFFSSxxQkFBQTtBREpKOztBQ09BO0VBRUMsY0FBQTtBRExEOztBQ1FBO0VBRUksa0JBQUE7RUFDSCxvQkFBQTtBRE5EOztBQ1NBO0VBRUMsZ0JBQUE7QURQRDs7QUNVQTtFQUVDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURSRDs7QUNXQTtFQUVDLGVBQUE7RUFDQSxZQUFBO0FEVEQ7O0FDWUE7RUFFRSxrQkFBQTtBRFZGOztBQ2FBO0VBRUMsb0JBQUE7RUFDRyxrQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBRFhKOztBQ2NBO0VBRUMsYUFBQTtBRFpEOztBQ2VBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEYko7O0FDZ0JBO0VBRUksYUFBQTtBRGRKOztBQ2lCQTtFQUVDLFVBQUE7RUFDQSxTQUFBO0FEZkQ7O0FDa0JBO0VBRUMsZUFBQTtBRGhCRDs7QUNtQkE7RUFFQyxjQUFBO0FEakJEOztBRWhGQTtFQUVJLHFCQUpVO0FGc0ZkOztBR3ZGQTs7Ozs7OztDQUFBO0FBY0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBSG9GRjs7QUdqRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUhvRkY7O0FHakZBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBSG9GRjs7QUdqRkE7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtB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QTtFQUNBLGNNTlk7RU5PWixZQUFBO0VBQ0EscUJFVFk7RUZVWixlQUFBO0VBQ0EscUJBQUE7QUFnV0Y7QUE5VkU7RUFDRSx5Qk1QaUI7RU5RakIsOEJBQUE7QUFnV0o7QUE3VkU7RUFDRSx5Qk1YbUI7RU5ZbkIsa0JBQUE7QUErVko7QUE1VkU7RUFDRSx5Qk1mbUI7RU5nQm5CLFlBQUE7RUFDQSxtQkFBQTtBQThWSjtBQTNWRTtFQUNFLHlDQUFBO0FBNlZKO0FBMVZFO0VBQ0UseUJNakNVO0VOa0NWLGNNcENXO0VOcUNYLHlCQUFBO0VBQ0Esa0ZBQUE7QUE0Vko7QUF6Vkk7RUFDRSx5QkFBQTtBQTJWTjtBQXhWSTtFQUNFLHlCQUFBO0FBMFZOO0FBdlZJO0VBQ0UscUJNakRRO0VOa0RSLG1CQUFBO0FBeVZOO0FBdFZJO0VBQ0UseUNBQUE7QUF3Vk47QUFwVkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBc1ZKOztBQWxWQTtFQUNFO0lBQ0UsWUFBQTtFQXFWRjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYXNpZGUsIG5hdiwgZm9vdGVyLCBoZWFkZXIsIHNlY3Rpb24sIG1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbnVsLCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmltZywgc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmFkZHJlc3Mge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0OmFjdGl2ZSwgYnV0dG9uOmZvY3VzLCBidXR0b246YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmEge1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cblxu0YHQvtGA0Lgg0LfQsCAhaW1wb3J0YW50IFxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMsIGZvcm0gPiB1bCA+IGxpID4gc3Bhbi5lcnJvci1tZXNzYWdlLCBmb3JtID4gdWwgPiBsaSA+IGlucHV0LFxuZm9ybSA+IHVsID4gbGkgdGV4dGFyZWEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwsIGZvcm0gPiB1bCA+IGxpID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICB9XG4gIC5mb250LXAyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMsIGZvcm0gPiB1bCA+IGxpID4gc3Bhbi5lcnJvci1tZXNzYWdlLCBmb3JtID4gdWwgPiBsaSA+IGlucHV0LFxuICBmb3JtID4gdWwgPiBsaSB0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsLCBmb3JtID4gdWwgPiBsaSA+IGxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDIuNXJlbTtcbn1cbmZvcm0gPiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS40cmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuZm9ybSA+IHVsID4gbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9ybSA+IHVsID4gbGkgPiBsYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuNSk7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmZvcm0gPiB1bCA+IGxpID4gdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDlyZW07XG59XG5mb3JtID4gdWwgPiBsaSA+IGlucHV0LFxuZm9ybSA+IHVsID4gbGkgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAxLjNyZW0gMS42cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgNDQsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC4wNCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9ybSA+IHVsID4gbGkgPiBpbnB1dC5pbnZhbGlkLFxuZm9ybSA+IHVsID4gbGkgdGV4dGFyZWEuaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNTRlMWY7XG59XG5mb3JtID4gdWwgPiBsaSA+IGlucHV0LnN1Y2Nlc3MsXG5mb3JtID4gdWwgPiBsaSB0ZXh0YXJlYS5zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmVhZDQ4O1xufVxuZm9ybSA+IHVsID4gbGkgPiBpbnB1dDpkaXNhYmxlZCxcbmZvcm0gPiB1bCA+IGxpIHRleHRhcmVhOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbmZvcm0gPiB1bCA+IGxpID4gaW5wdXQ6aG92ZXIsXG5mb3JtID4gdWwgPiBsaSB0ZXh0YXJlYTpob3ZlciB7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoNDIsIDQzLCA0NCwgMC42KTtcbn1cbmZvcm0gPiB1bCA+IGxpID4gaW5wdXQ6Zm9jdXMsXG5mb3JtID4gdWwgPiBsaSB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDAuMnJlbSBzb2xpZCByZ2JhKDM3LCAzNywgMjEzLCAwLjIpO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMEU2M0UzO1xufVxuZm9ybSA+IHVsID4gbGkgPiBzcGFuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICNlNTRlMWY7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgZm9ybSB7XG4gICAgZ2FwOiAxLjhyZW07XG4gIH1cbiAgZm9ybSA+IHVsIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbiAgZm9ybSA+IHVsID4gbGkgPiBpbnB1dCxcbiAgZm9ybSA+IHVsID4gbGkgdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9VSS9teS1mb3JtL215LWZvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL290aGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNFaEI7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURERDs7QUNJQTs7O0VBSUMsc0JBQUE7QURGRDs7QUNLQTtFQUVJLHFCQUFBO0FESEo7O0FDTUE7RUFFSSxxQkFBQTtBREpKOztBQ09BO0VBRUMsY0FBQTtBRExE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QUE7QUFpV1Y7QUE5VlE7O0VBQ0UscUJBQUE7QUFpV1Y7QUE5VlE7O0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQWlXVjtBQTlWUTs7RUFDRSwwQ0FBQTtBQWlXVjtBQS9WUTs7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0FBa1dWO0FBOVZNO0VBRUUsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUErVlI7O0FBelZBO0VBQ0U7SUFDRSxXQUFBO0VBNFZGO0VBMVZFO0lBQ0UsU0FBQTtFQTRWSjtFQXhWQTs7SUFFRSxzQkFBQTtFQTBWRjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYXNpZGUsIG5hdiwgZm9vdGVyLCBoZWFkZXIsIHNlY3Rpb24sIG1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbnVsLCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmltZywgc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmFkZHJlc3Mge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0OmFjdGl2ZSwgYnV0dG9uOmZvY3VzLCBidXR0b246YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmEge1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cblxu0YHQvtGA0Lgg0LfQsCAhaW1wb3J0YW50IFxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmksIC5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IGgyLCAucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiAucHJvZHVjdC1tZXRhID4gcC5wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMywgLnByb2R1Y3QtY2FyZCA+IGEgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gLnByb2R1Y3QtbWV0YSA+IHAuYXV0aG9yIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmZvbnQtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmZvbnQtZmlsdGVycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb250LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZm9udC1oMS1wb3N0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEwNyU7XG4gIH1cbiAgLmZvbnQtaDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5mb250LXAxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgfVxuICAuZm9udC1wMS1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmZvbnQtcDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzLCAucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiAucHJvZHVjdC1tZXRhID4gcC5hdXRob3Ige1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cblxu0YHQvtGA0Lgg0LfQsCAhaW1wb3J0YW50IFxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3QtY2FyZCA+IGEgPiAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMkEyQjJDLCAjMWIxYjFiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0JTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gLnByb2R1Y3QtY2FyZC1jb250YWluZXIgPiAuZmF2b3JpdGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBoZWlnaHQ6IDRyZW07XG4gIHdpZHRoOiA0cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzJBMkIyQztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyID4gLmZhdm9yaXRlLWJ0biA+IHN2ZyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gLnByb2R1Y3QtY2FyZC1jb250YWluZXIgPiAuZmF2b3JpdGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyID4gLmZhdm9yaXRlLWJ0bi5mYXYtYWN0aXZlIHN2ZyBwYXRoIHtcbiAgZmlsbDogIzJBMkIyQztcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyB7XG4gIHBhZGRpbmctdG9wOiAxLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS40cmVtO1xufVxuLnByb2R1Y3QtY2FyZCA+IGEgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gLnByb2R1Y3QtbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLmF1dGhvciB7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuNSk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5wcm9kdWN0LW1ldGEgPiBwLnByaWNlIHtcbiAgY29sb3I6ICMyQTJCMkM7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5zZXBhcmF0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjA3cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4ucHJvZHVjdC1jYXJkID4gYSA+IGZvb3Rlci5wcm9kdWN0LWluZm8gPiBoMiB7XG4gIGNvbG9yOiAjMkEyQjJDO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IHAge1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhOmhvdmVyID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IGgyLFxuLnByb2R1Y3QtY2FyZCA+IGE6aG92ZXIgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gLnByb2R1Y3QtbWV0YSA+IHAuYXV0aG9yLFxuLnByb2R1Y3QtY2FyZCA+IGE6aG92ZXIgPiBmb290ZXIucHJvZHVjdC1pbmZvID4gLnByb2R1Y3QtbWV0YSA+IHAucHJpY2Uge1xuICBjb2xvcjogIzBFNjNFMztcbn1cbi5wcm9kdWN0LWNhcmQgPiBhOmhvdmVyID4gLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzJTtcbn1cbi5wcm9kdWN0LWNhcmQgPiBhOmhvdmVyID4gZm9vdGVyLnByb2R1Y3QtaW5mbyA+IC5zZXBhcmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCA5OSwgMjI3LCAwLjUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbXktbWluaV9jYXJkL215LW1pbmktY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvb3RoZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JlZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0VoQjtFQUVDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBREREOztBQ0lBOzs7RUFJQyxzQkFBQTtBREZEOztBQ0tBO0VBRUkscUJBQUE7QURISjs7QUNNQTtFQUVJLHFCQUFBO0FESko7O0FDT0E7RUFFQyxjQUFBO0FETEQ7O0FDUUE7RUFFSSxrQkFBQTtFQUNILG9CQUFBO0FETkQ7O0FDU0E7RUFFQyxnQkFBQTtBRFBEOztBQ1VBO0VBRUMsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRFJEOztBQ1dBO0VBRUMsZUFBQTtFQUNBLFlBQUE7QURURDs7QUNZQTtF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QXRWSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQXdWTjtBQXRWTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQXdWUjtBQXRWUTtFQUVFLDRCQUFBO0VBQ0EscUJFdkVJO0FGOFpkO0FBcFZRO0VBRUUsY001RUk7RU42RUoscUJFN0VJO0FGa2FkO0FBalZNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCRXJGTTtBRndhZDtBQWhWTTtFQUVFLGNNMUZNO0VOMkZOLG1DQUFBO0FBaVZSO0FBOVVNO0VBQ0UsbUNBQUE7QUFnVlI7QUEzVU07OztFQUdFLGNNeEdPO0FOcWJmO0FBMVVNO0VBQ0UsV0FBQTtBQTRVUjtBQXpVTTtFQUNFLHdDQUFBO0FBMlVSXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYXNpZGUsIG5hdiwgZm9vdGVyLCBoZWFkZXIsIHNlY3Rpb24sIG1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbnVsLCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmltZywgc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmFkZHJlc3Mge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0OmFjdGl2ZSwgYnV0dG9uOmZvY3VzLCBidXR0b246YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmEge1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cblxu0YHQvtGA0Lgg0LfQsCAhaW1wb3J0YW50IFxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuaHRtbCB7XG4gIC8qIDEwcHggKi9cbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIEV4dHJhYm9sZFwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiA0LjJyZW07XG59XG5cbi5mb250LWgxLXBvc3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMTA3JTtcbn1cblxuLmZvbnQtaDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5mb250LWgyLW1pbmkge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmZvbnQtcDEtaGVybyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1wMS1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmZvbnQtcDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyLCBkaWFsb2cgLmRpYWxvZy1wb3B1cCAucmlnaHQtc2lkZSAuYmxhYywgZGlhbG9nIC5kaWFsb2ctcG9wdXAgLmxlZnQtc2lkZSBzcGFuLCBkaWFsb2cgLmRpYWxvZy1wb3B1cCAubGVmdC1zaWRlIHAge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCwgZGlhbG9nIC5kaWFsb2ctcG9wdXAgLnJpZ2h0LXNpZGUgLm9yLWdvb2dsZSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuZm9udC1oMS1wb3N0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEwNyU7XG4gIH1cbiAgLmZvbnQtaDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG4gIC5mb250LXAxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgfVxuICAuZm9udC1wMS1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmZvbnQtcDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiwgZGlhbG9nIC5kaWFsb2ctcG9wdXAgLnJpZ2h0LXNpZGUgLmJsYWMsIGRpYWxvZyAuZGlhbG9nLXBvcHVwIC5sZWZ0LXNpZGUgc3BhbiwgZGlhbG9nIC5kaWFsb2ctcG9wdXAgLmxlZnQtc2lkZSBwIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCwgZGlhbG9nIC5kaWFsb2ctcG9wdXAgLnJpZ2h0LXNpZGUgLm9yLWdvb2dsZSBwIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgOTcsIDk3LCAwLjUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAxMDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNXJlbSAxcmVtO1xufVxuZGlhbG9nIC5kaWFsb2ctcG9wdXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5NnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xuICBtaW4taGVpZ2h0OiA1NHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbn1cbmRpYWxvZyAuZGlhbG9nLXBvcHVwIC5sZWZ0LXNpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaWFsb2cgLmRpYWxvZy1wb3B1cCAubGVmdC1zaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5kaWFsb2cgLmRpYWxvZy1wb3B1cCAubGVmdC1zaWRlIHAge1xuICBjb2xvcjogI0ZBRkFGQTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDRyZW07XG59XG5kaWFsb2cgLmRpYWxvZy1wb3B1cCAubGVmdC1zaWRlIHNwYW4ge1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICNGQUZBRkE7XG59XG5kaWFsb2cgLmRpYWxvZy1wb3B1cCAubGVmdC1zaWRlIHNwYW46aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjYpO1xufVxuZGlhbG9nIC5kaWFsb2ctcG9wdXAgLnBhc3N3b3JkLXdyYXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5kaWFsb2cgLmRpYWxvZy1wb3B1cCAucmlnaHQtc2lkZSB7XG4gIHBhZGRpbmc6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmRpYWxvZyAuZGlhbG9nLXBvcHVwIC5yaWdodC1zaWRlIC5ibGFjIHtcbiAgY29sb3I6ICMyQTJCMkM7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLXRvcDogLTAuNXJlbTtcbn1cbmRpYWxvZyAuZGlhbG9nLXBvcHVwIC5yaWdodC1zaWRlIC5ibGFjOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC42KTtcbn1cbmRpYWxvZyAuZGlhbG9nLXBvcHVwIC5yaWdodC1zaWRlIC5vci1nb29nbGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmRpYWxvZyAuZGlhbG9nLXBvcHVwIC5yaWdodC1zaWRlIC5vci1nb29nbGUgcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCA0NCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuZGlhbG9nIC5hY3RpdmUge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ucG9wLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5yZWdpc3RlciB7XG4gIG1pbi1oZWlnaHQ6IDQxcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzMwcHgpIHtcbiAgLmRpYWxvZy1wb3B1cCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxuICAubGVmdC1zaWRlIHtcbiAgICBoZWlnaHQ6IDM1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2RpYWxvZ19wb3B1cC9teS1kaWFsb2dfcG9wdXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL290aGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNFaEI7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURERDs7QUNJQTs7O0VBSUMs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YXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSwgYTpsaW5rLCBhOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmFzaWRlLCBuYXYsIGZvb3RlciwgaGVhZGVyLCBzZWN0aW9uLCBtYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG51bCwgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5pbWcsIHN2ZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5hZGRyZXNzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0OmZvY3VzLCBpbnB1dDphY3RpdmUsIGJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxubGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG5cbtGB0L7RgNC4INC30LAgIWltcG9ydGFudCBcbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmh0bWwge1xuICAvKiAxMHB4ICovXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBFeHRyYWJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogNC4ycmVtO1xufVxuXG4uZm9udC1oMS1wb3N0ZXIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEwNyU7XG59XG5cbi5mb250LWgxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xufVxuXG4uZm9udC1oMi1taW5pIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5mb250LXAxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtcDEtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5mb250LXAxLCBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSAudmFsdWUge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyLCBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSAubGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxLCBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSAudmFsdWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiwgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCA+IGFydGljbGUgLmxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmZvbnQtcDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuZm9udC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cblxu0YHQvtGA0Lgg0LfQsCAhaW1wb3J0YW50IFxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyQztcbiAgcGFkZGluZy10b3A6IDVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gZGl2LnRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA5JTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlID4gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSA+IHVsID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlID4gYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNSk7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSAubGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBkaXYudG9wID4gYXJ0aWNsZSAudmFsdWUge1xuICBjb2xvcjogI0ZBRkFGQTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlLmxvbmcge1xuICB3aWR0aDogMzUlO1xufVxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIgPiBzdmcgPiBwYXRoIHtcbiAgZmlsbDogI0ZBRkFGQTtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiBmaWxsIDFzIGN1YmljLWJlemllcigwLjcsIDAsIDAuNywgMC43KTtcbn1cbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IHN2Zzpob3ZlciBwYXRoIHtcbiAgZmlsbDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3Age1xuICAgIG1heC13aWR0aDogNTRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciA+IGRpdi50b3AgPiBhcnRpY2xlLmxvbmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzVyZW07XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyID4gc3ZnID4gcGF0aCB7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvZm9vdGVyL215LWZvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvb3RoZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JlZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0VoQjtFQUVDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBREREOztBQ0lBOzs7RUFJQyxzQkFBQTtBREZEOztBQ0tBO0VBRUkscUJBQUE7QURISjs7QUNNQTtFQUVJLHFCQUFBO0FESko7O0FDT0E7RUFFQyxjQUFBO0FETEQ7O0FDUUE7RUFFSSxrQkFBQTtFQUNILG9CQUFBO0FETkQ7O0FDU0E7RUFFQyxnQkFBQTtBRFBEOztBQ1VBO0VBRUMsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRFJEOztBQ1dBO0VBRUMsZUFBQTtFQUNBLFlBQUE7QURURDs7QUNZQTtFQUVFLGtCQUFBO0FEVkY7O0FDYUE7RUFFQyxvQkFBQTtFQUNHLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FEWEo7O0FDY0E7RUFFQyxhQUFBO0FEWkQ7O0FDZUE7RUFFSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURiSjs7QUNnQkE7RUFFSSxhQUFBO0FEZEo7O0FDaUJBO0VBRUMsVUFBQTtFQUNBLFNBQUE7QURmRDs7QUNrQkE7RUFFQyxlQUFBO0FEaEJEOztBQ21CQTtFQUVDLGNBQUE7QURqQkQ7O0FFaEZBO0VBRUkscUJBSlU7QUZzRmQ7O0FHdkZBOzs7Ozs7O0NBQUE7QUFjQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FIb0ZGOztBR2pG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QUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFSDhSRjtBQUNGO0FLdFZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDUFk7QU4rVmQ7O0FBL1ZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Qk1MWTtFTk1aLGlCQUFBO0VBQ0Esb0JBQUE7QUFrV0Y7QUFoV0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWtXSjtBQS9WTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWlXUjtBQS9WUTtFQUNFLCtCQUFBO0FBaVdWO0FBN1ZNO0VBQ0UsK0JBQUE7QUErVlI7QUE1Vk07RUFFRSwrQkFBQTtFQUNBLHFCQUFBO0FBNlZSO0FBMVZNO0VBRUUsY010Q007QU5pWWQ7QUF2Vkk7RUFDRSxVQUFBO0FBeVZOO0FBclZFO0VBQ0UsV0FBQTtBQXVWSjtBQXJWSTtFQUNFLGFNbkRRO0VOb0RSLFlBQUE7RUFDQSxrREFBQTtBQXVWTjtBQW5WTTtFQUNFLHNCQUFBO0FBcVZSOztBQTlVQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQWlWRjtFQS9VRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQWlWSjtFQTlVQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBZ1ZGO0FBQ0ZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEsIGE6bGluaywgYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hc2lkZSwgbmF2LCBmb290ZXIsIGhlYWRlciwgc2VjdGlvbiwgbWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxudWwsIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW1nLCBzdmcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYWRkcmVzcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlLCBidXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSwgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oMXAgPiAud3JhcCA+IHAge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9udC1maWx0ZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5mb250LWgxLXBvc3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTA3JTtcbiAgfVxuICAuZm9udC1oMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmZvbnQtcDEtaGVybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICB9XG4gIC5mb250LXAxLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuZm9udC1wMSwgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oMXAgPiAud3JhcCA+IHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZvbnQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmZvbnQtZmlsdGVycyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmZvbnQtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG5cbtGB0L7RgNC4INC30LAgIWltcG9ydGFudCBcbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmgxcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNS40cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uaDFwID4gLndyYXAge1xuICBtYXgtd2lkdGg6IDgwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oMXAgPiAud3JhcCA+IGgxIHtcbiAgY29sb3I6ICMyQTJCMkM7XG59XG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmgxcCA+IC53cmFwID4gcCB7XG4gIG1hcmdpbi10b3A6IDEuNDVyZW07XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuOCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5oMXAge1xuICAgIHBhZGRpbmctdG9wOiAzLjhyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvaDFfYW5kX3AvbXktaDFfYW5kX3Auc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL290aGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2NyZWVucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNFaEI7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURERDs7QUNJQTs7O0VBSUMsc0JBQUE7QURGRDs7QUNLQTtFQUVJLHFCQUFBO0FESEo7O0FDTUE7RUFFSSxxQkFBQTtBREpKOztBQ09BO0VBRUMsY0FBQTtBRExEOztBQ1FBO0VBRUksa0JBQUE7RUFDSCxvQkFBQTtBRE5EOztBQ1NBO0VBRUMsZ0JBQUE7QURQRDs7QUNVQTtFQUVDLFdBQUE7RUFDQSxZQUFB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SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUoySUY7RUl6SUE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUoySUY7QUFDRjtBR3BTQTs7Ozs7OztDQUFBO0FBY0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBSGdTRjs7QUc3UkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUhnU0Y7O0FHN1JBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBSGdTRjs7QUc3UkE7O0VBRUUsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBSGdTRjs7QUc3UkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUhnU0Y7RUc3UkE7O0lBRUUsd0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VIK1JGO0VHNVJBOztJQUVFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUg4UkY7QUFDRjtBS3RWQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQ1BZO0FOK1ZkOztBQS9WQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBa1dGO0FBaFdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFrV0o7QUFoV0k7RUFDRSxjTVpRO0FOOFdkO0FBL1ZJO0VBRUUsbUJBQUE7RUFDQSw0QkFBQTtBQWdXTjs7QUEzVkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esc0JBQUE7RUE4VkY7QUFDRlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250L1RUSG92ZXMtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSwgYTpsaW5rLCBhOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmFzaWRlLCBuYXYsIGZvb3RlciwgaGVhZGVyLCBzZWN0aW9uLCBtYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG51bCwgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5pbWcsIHN2ZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5hZGRyZXNzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0OmZvY3VzLCBpbnB1dDphY3RpdmUsIGJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxubGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4vKlxu0JfQtNC10YHRjCDQstGB0ZEsINGH0YLQviDQutCw0YHQsNC10YLRgdGPINC30LDQstC40YHQuNC80L7RgdGC0LXQuSDQvtGCINGI0LjRgNC40L3RiyDRjdC60YDQsNC90LA6XG4xLiDQn9Cw0LTQtNC40L3Qs9C4INGDIGJvZHk7XG4yLiDQntGC0YHRgtGD0L/RiyDQvNC10LbQtNGDINC60L7QvNC/0L7QvdC10L3RgtCw0LzQuDtcbjMuINCa0LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0L7Qu9C90YPRjiDRiNC40YDQuNC90YMg0Y3QutGA0LDQvdCwINC00LvRjyDQvNC+0LHQuNC70YsuXG5cbtGB0L7RgNC4INC30LAgIWltcG9ydGFudCBcbiovXG5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbmh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlcixcbiAgaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbmh0bWwge1xuICAvKiAxMHB4ICovXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBFeHRyYWJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogNC4ycmVtO1xufVxuXG4uZm9udC1oMS1wb3N0ZXIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEwNyU7XG59XG5cbi5mb250LWgxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xufVxuXG4uZm9udC1oMi1taW5pIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5mb250LXAxLWhlcm8ge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtcDEtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5mb250LXAxLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5mb250LXAyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvbnQtcDMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1idXR0b24sIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwud2lkZSA+IGxpID4gYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgfVxuICAuZm9udC1wMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5mb250LXAzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZvbnQtYnV0dG9uLCBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUgPiBsaSA+IGEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuZm9udC1maWx0ZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9udC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi8qXG7Ql9C00LXRgdGMINCy0YHRkSwg0YfRgtC+INC60LDRgdCw0LXRgtGB0Y8g0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5INC+0YIg0YjQuNGA0LjQvdGLINGN0LrRgNCw0L3QsDpcbjEuINCf0LDQtNC00LjQvdCz0Lgg0YMgYm9keTtcbjIuINCe0YLRgdGC0YPQv9GLINC80LXQttC00YMg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4O1xuMy4g0JrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QvtC70L3Rg9GOINGI0LjRgNC40L3RgyDRjdC60YDQsNC90LAg0LTQu9GPINC80L7QsdC40LvRiy5cblxu0YHQvtGA0Lgg0LfQsCAhaW1wb3J0YW50IFxuKi9cbmJvZHkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLmdhbGxlcnksXG5odG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbn1cblxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuaHRtbCA+IGJvZHkgPiBmb290ZXIjZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDcycHgpO1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG4gIG1hcmdpbi1yaWdodDogLTM2cHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIGh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5tYWlsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyLFxuICBodG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMS43cmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gc29saWQgcmdiYSg0MiwgNDMsIDQ0LCAwLjIpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IGEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBFeHRyYWJvbGRcIjtcbiAgY29sb3I6ICMwRTYzRTM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IGE6aG92ZXIge1xuICBjb2xvcjogIzNEQTJGRjtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2IHtcbiAgd2lkdGg6IDQyJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYuNXJlbTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICB6LWluZGV4OiA4MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyLmFjdGl2ZSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1pbiwgb3BhY2l0eSAwLjNzIGVhc2UtaW47XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkuc2lkZWJhci1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkuYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDMuNnJlbTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpLmJ1dHRvbnMgPiAub3V0bGluZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyID4gbGkgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAycmVtIDMuNnJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyQTJCMkM7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MywgNDQsIDAuMTIpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC53aWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC53aWRlID4gbGkgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgY29sb3I6ICMyQTJCMkM7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLndpZGUgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogIzBFNjNFMztcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMi40cmVtO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gYS5vdXRsaW5lIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLmljb25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMxcHg7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiAuaWNvbnMtd3JhcHBlciA+IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiAuaWNvbnMtd3JhcHBlciA+IGEgPiBzdmcgcGF0aCB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSA+IC5pY29ucy13cmFwcGVyID4gYSA+IHN2Zzpob3ZlciBwYXRoIHtcbiAgc3Ryb2tlOiAjMEU2M0UzO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmJ1dHRvbi1hcmVhID4gLnNlcGFyYXRvciB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDMsIDQ0LCAwLjEyKTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbi5hY3RpdmU6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XG59XG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubWVudS1idXR0b24uYWN0aXZlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uLmFjdGl2ZSA+IHNwYW4ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0b3A6IDEuMnJlbTtcbn1cbmh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbiA+IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyQjJDO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLm1lbnUtYnV0dG9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQTJCMkM7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJvdHRvbTogMS4ycmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwud2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiAuaWNvbnMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAuYnV0dG9uLWFyZWEgPiBhLm91dGxpbmUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczMHB4KSB7XG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5idXR0b24tYXJlYSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaS5zaWRlYmFyLWhpZGRlbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAxcHgpIHtcbiAgaHRtbCA+IGJvZHkgPiBoZWFkZXIjaGVhZGVyID4gLmxlZnQgPiBuYXYgPiB1bC5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIgPiAubGVmdCA+IG5hdiA+IHVsLnNpZGViYXIgPiBsaSA+IGEsXG4gIGh0bWwgPiBib2R5ID4gaGVhZGVyI2hlYWRlciA+IC5sZWZ0ID4gbmF2ID4gdWwuc2lkZWJhciA+IGxpLmJ1dHRvbnMge1xuICAgIHBhZGRpbmctbGVmdDogMS42cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9oZWFkZXIvbXktaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9vdGhlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDRWhCO0VBRUMsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEREQ7O0FDSUE7OztFQUlDLHNCQUFBO0FERkQ7O0FDS0E7RUFFSSxxQkFBQTtBREhKOztBQ01BO0VBRUkscUJBQUE7QURKSjs7QUNPQTtFQUVDLGNBQUE7QURMRDs7QUNRQTtFQUVJLGtCQUFBO0VBQ0gsb0JBQUE7QURORDs7QUNTQTtFQUVDLGdCQUFBO0FEUEQ7O0FDVUE7RUFFQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEUkQ7O0FDV0E7RUFFQyxlQUFBO0VBQ0EsWUFBQTtBRFREOztBQ1lBO0VBRUUsa0JBQUE7QURWRjs7QUNhQTtFQUVDLG9CQUFBO0VBQ0csa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QURYSjs7QUNjQTtFQUVDLGFBQUE7QURaRDs7QUNlQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRGJKOztBQ2dCQTtFQUVJ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bUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFnVU47O0FBM1RBO0VBRUk7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQTZUSjtFQTNURTtJQUNFLFdBQUE7RUE2VEo7RUEzVEk7SUFDRSxhQUFBO0VBNlROO0VBMVRFO0lBQ0UsYUFBQTtFQTRUSjtFQTFURTtJQUNFLGVBQUE7RUE0VEo7QUFDRjtBQXpUQTtFQUNFO0lBQ0UsYUFBQTtFQTJURjtFQXhUQTtJQUNFLGNBQUE7RUEwVEY7QUFDRjtBQXZUQTtFQUNFO0lBQ0Usd0JBQUE7RUF5VEY7QUFDRjtBQXRUQTtFQUNFOztJQUdFLG9CQUFBO0VBdVRGO0FBQ0ZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEsIGE6bGluaywgYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hc2lkZSwgbmF2LCBmb290ZXIsIGhlYWRlciwgc2VjdGlvbiwgbWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxudWwsIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW1nLCBzdmcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYWRkcmVzcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlLCBidXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5wb3N0ZXItYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI3MHB4LCAxZnIpKTtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgcm93LWdhcDogNS44cmVtO1xuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvcG9zdGVyX2Jhci9teS1wb3N0ZXJfYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9vdGhlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDRWhCO0VBRUMsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEREQ7O0FD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LGlCQUFBO0VKMklGO0VJeklBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VKMklGO0VJeklBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtFSjJJRjtFSXpJQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUoySUY7RUl6SUE7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VKMklGO0VJeklBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VKMklGO0VJeklBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VKMklGO0FBQ0Y7QUdwU0E7Ozs7Ozs7Q0FBQTtBQWNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUhnU0Y7O0FHN1JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FIZ1NGOztBRzdSQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUhnU0Y7O0FHN1JBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUhnU0Y7O0FHN1JBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VIZ1NGO0VHN1JBOztJQUVFLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFSCtSRjtFRzVSQTs7SUFFRSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VIOFJGO0FBQ0Y7QUt0VkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkNQWTtBTitWZDs7QUEvVkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFrV0pcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnQvVFRIb3Zlcy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udC9UVEhvdmVzLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEsIGE6bGluaywgYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hc2lkZSwgbmF2LCBmb290ZXIsIGhlYWRlciwgc2VjdGlvbiwgbWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxudWwsIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW1nLCBzdmcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYWRkcmVzcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlLCBidXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5odG1sIHtcbiAgLyogMTBweCAqL1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgRXh0cmFib2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuaDEge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDQuMnJlbTtcbn1cblxuLmZvbnQtaDEtcG9zdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDclO1xufVxuXG4uZm9udC1oMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmZvbnQtaDItbWluaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZm9udC1wMS1oZXJvIHtcbiAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBMaWdodFwiO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXAxLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZm9udC1wMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmZvbnQtcDIge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZm9udC1wMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb250LWZpbHRlcnMge1xuICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXMgTWVkaXVtXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmZvbnQtaDEtcG9zdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDclO1xuICB9XG4gIC5mb250LWgxLWhlcm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3ZlcyBNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuZm9udC1wMS1oZXJvIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIExpZ2h0XCI7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbiAgLmZvbnQtcDEtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzIE1lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5mb250LXAxIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIH1cbiAgLmZvbnQtcDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuZm9udC1wMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb250LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiVFRIb3Zlc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5mb250LWZpbHRlcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRUSG92ZXNcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5mb250LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJUVEhvdmVzXCI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuLypcbtCX0LTQtdGB0Ywg0LLRgdGRLCDRh9GC0L4g0LrQsNGB0LDQtdGC0YHRjyDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10Lkg0L7RgiDRiNC40YDQuNC90Ysg0Y3QutGA0LDQvdCwOlxuMS4g0J/QsNC00LTQuNC90LPQuCDRgyBib2R5O1xuMi4g0J7RgtGB0YLRg9C/0Ysg0LzQtdC20LTRgyDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lg7XG4zLiDQmtC70LDRgdGBINGN0LvQtdC80LXQvdGC0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9C+0LvQvdGD0Y4g0YjQuNGA0LjQvdGDINGN0LrRgNCw0L3QsCDQtNC70Y8g0LzQvtCx0LjQu9GLLlxuXG7RgdC+0YDQuCDQt9CwICFpbXBvcnRhbnQgXG4qL1xuYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24uZ2FsbGVyeSxcbmh0bWwgPiBib2R5ID4gbWFpbiA+IHNlY3Rpb24ubWFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA3MnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zNnB4O1xufVxuXG5odG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG5odG1sID4gYm9keSA+IGZvb3RlciNmb290ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgNzJweCk7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgaHRtbCA+IGJvZHkgPiBtYWluID4gc2VjdGlvbi5nYWxsZXJ5LFxuICBodG1sID4gYm9keSA+IG1haW4gPiBzZWN0aW9uLm1haWwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgfVxuICBodG1sID4gYm9keSA+IGhlYWRlciNoZWFkZXIsXG4gIGh0bWwgPiBib2R5ID4gZm9vdGVyI2Zvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9vdGhlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NjcmVlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDRWhCO0VBRUMsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEREQ7O0FDSUE7OztFQUlDLHNCQUFBO0FERkQ7O0FDS0E7RUFFSSxxQkFBQTtBREhKOztBQ01BO0VBRUkscUJBQUE7QURKSjs7QUNPQTtFQUVDLGNBQUE7QURMRDs7QUNRQTtFQUVJLGtCQUFBO0VBQ0gsb0JBQUE7QURORDs7QUNTQTtFQUVDLGdCQUFBO0FEUEQ7O0FDVUE7RUFFQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEUkQ7O0FDV0E7RUFFQyxlQUFBO0VBQ0EsWUFBQTtBRFREOztBQ1lBO0VBRUUsa0JBQUE7QURWRjs7QUNhQTtFQUVDLG9CQUFBO0VBQ0csa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QURYSjs7QUNjQTtFQUVDLGFBQUE7QURaRDs7QUNlQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRGJKOztBQ2dCQTtFQUVJLGFBQUE7QURkSjs7QUNpQkE7RUFFQyxVQUFBO0VBQ0EsU0FBQTtBRGZEOztBQ2tCQTtFQUVDLGVBQUE7QURoQkQ7O0FDbUJBO0VBRUMsY0FBQTtBRGpCRDs7QUVoRkE7RUFFSSxxQkFKVTtBRnNGZDs7QUd2RkE7Ozs7Ozs7Q0FBQTtBQWNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUhvRkY7O0FHakZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FIb0ZGOztBR2pGQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUhvRkY7O0FHakZBOztFQUVFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VB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LyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2UgNjUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBjb2RlID0gYDxhXHJcbiAgaHJlZj1cIi9tYXRlcmlhbC9wb3N0ZXJzL2FtZXJpY2FuLWFyY2hpdGVjdHVyZS9pbmRleC5odG1sXCJcclxuICB0aXRsZT1cIkFtZXJpY2FuIEFyY2hpdGVjdHVyZVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1jYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgPGltZyBzcmM9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiIGFsdD1cIkFtZXJpY2FuIEFyY2hpdGVjdHVyZVwiIC8+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZmF2b3JpdGUtYnRuXCI+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiaGVhcnRcIlxyXG4gICAgICAgICAgZD1cIk0xNi41NDcyIDMuNzQ5MDJDMTMuNTA0MSAzLjc0OTAyIDEyLjAwNDEgNi43NDkwMiAxMi4wMDQxIDYuNzQ5MDJDMTIuMDA0MSA2Ljc0OTAyIDEwLjUwNDEgMy43NDkwMiA3LjQ2MDk2IDMuNzQ5MDJDNC45ODc4MyAzLjc0OTAyIDMuMDI5MzkgNS44MTgwOSAzLjAwNDA4IDguMjg2OTlDMi45NTI1MiAxMy40MTE4IDcuMDY5NTUgMTcuMDU2NCAxMS41ODIyIDIwLjExOTJDMTEuNzA2NiAyMC4yMDM4IDExLjg1MzYgMjAuMjQ5MSAxMi4wMDQxIDIwLjI0OTFDMTIuMTU0NiAyMC4yNDkxIDEyLjMwMTUgMjAuMjAzOCAxMi40MjYgMjAuMTE5MkMxNi45MzgxIDE3LjA1NjQgMjEuMDU1MiAxMy40MTE4IDIxLjAwNDEgOC4yODY5OUMyMC45Nzg4IDUuODE4MDkgMTkuMDIwMyAzLjc0OTAyIDE2LjU0NzIgMy43NDkwMlpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGZvb3RlciBjbGFzcz1cInByb2R1Y3QtaW5mb1wiPlxyXG4gICAgPGgyPkFtZXJpY2FuIEFyY2hpdGVjdHVyZTwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1tZXRhXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwiYXV0aG9yXCI+QGJvbWJv0YFsYXQ8L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj48c3Bhbj4zIDUwMDwvc3Bhbj4g4oK9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb290ZXI+XHJcbjwvYT5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1sYXJnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItbWVkaXVtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1zbWFsbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxyXG4gIDxwaWN0dXJlPlxyXG4gICAgPHNvdXJjZVxyXG4gICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDEyMDBweClcIlxyXG4gICAgICBzcmNzZXQ9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiXHJcbiAgICAvPlxyXG4gICAgPHNvdXJjZVxyXG4gICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDc2OHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX199XCJcclxuICAgIC8+XHJcbiAgICA8aW1nIHNyYz1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX199XCIgYWx0PVwicmVnaXN0ZXIgSW1hZ2VcIiAvPlxyXG4gIDwvcGljdHVyZT5cclxuICA8cD7QldGJ0ZEg0L3QtSDRgSDQvdCw0LzQuD8gPHNwYW4gY2xhc3M9XCJyZWdpc3RlckxpbmtcIj7QoNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0YwhPC9zcGFuPjwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyaWdodC1zaWRlXCI+XHJcbiAgPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICA8aDI+0JfQsNCx0YvQu9C4INC/0LDRgNC+0LvRjDwvaDI+XHJcbiAgICA8dWwgY2xhc3M9XCJmaWVsZHNcIj5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+0J/QvtGH0YLQsCDQuNC70Lgg0L3QuNC60L3QtdC50Lw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0J/QvtGH0YLQsCDQuNC70Lgg0L3QuNC60L3QtdC50LxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBjdXN0b21cIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgINCS0L7RgdGB0YLQsNC90L7QstC40YLRjCDQv9Cw0YDQvtC70YxcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJsb2dpbkxpbmsgYmxhY1wiPtCS0LXRgNC90YPRgtGM0YHRjyDQvdCw0LfQsNC0PC9zcGFuPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+XHJcbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvbG9naW4tbGFyZ2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1nL2xvZ2luLW1lZGl1bS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvbG9naW4tc21hbGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJsZWZ0LXNpZGVcIj5cclxuICA8cGljdHVyZT5cclxuICAgIDxzb3VyY2VcclxuICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiAxMjAwcHgpXCJcclxuICAgICAgc3Jjc2V0PVwiJHtfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fX31cIlxyXG4gICAgLz5cclxuICAgIDxzb3VyY2VcclxuICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiA3NjhweClcIlxyXG4gICAgICBzcmNzZXQ9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19ffVwiXHJcbiAgICAvPlxyXG4gICAgPGltZyBzcmM9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19ffVwiIGFsdD1cIkxvZ2luIEltYWdlXCIgLz5cclxuICA8L3BpY3R1cmU+XHJcbiAgPHA+0JXRidGRINC90LUg0YEg0L3QsNC80Lg/IDxzcGFuIGNsYXNzPVwicmVnaXN0ZXJMaW5rXCI+0KDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMITwvc3Bhbj48L3A+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicmlnaHQtc2lkZVwiPlxyXG4gIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwibG9naW5cIj5cclxuICAgIDxoMj7QktGF0L7QtDwvaDI+XHJcbiAgICA8dWwgY2xhc3M9XCJmaWVsZHNcIj5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+0J/QvtGH0YLQsCDQuNC70Lgg0L3QuNC60L3QtdC50Lw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCLQmNC80Y8g0LjQu9C4INC90LjQutC90LXQudC8XCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbm9ybWFsIGN1c3RvbVwiIHR5cGU9XCJzdWJtaXRcIj7QktC+0LnRgtC4PC9idXR0b24+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZvcmdvdExpbmsgYmxhY1wiPtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/PC9zcGFuPlxyXG4gIDwvZm9ybT5cclxuICA8ZGl2IGNsYXNzPVwib3ItZ29vZ2xlXCI+XHJcbiAgICA8cD7QmNCb0Jg8L3A+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG91dGxpbmUgY3VzdG9tXCI+0JLQvtC50YLQuCDRh9C10YDQtdC3IEdvb2dsZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1sYXJnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWcvcmVnaXN0ZXItbWVkaXVtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltZy9yZWdpc3Rlci1zbWFsbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxyXG4gIDxwaWN0dXJlPlxyXG4gICAgPHNvdXJjZVxyXG4gICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDEyMDBweClcIlxyXG4gICAgICBzcmNzZXQ9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiXHJcbiAgICAvPlxyXG4gICAgPHNvdXJjZVxyXG4gICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDc2OHB4KVwiXHJcbiAgICAgIHNyY3NldD1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX199XCJcclxuICAgIC8+XHJcbiAgICA8aW1nIHNyYz1cIiR7X19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX199XCIgYWx0PVwicmVnaXN0ZXIgSW1hZ2VcIiAvPlxyXG4gIDwvcGljdHVyZT5cclxuICA8cD7Qo9C20LUg0YEg0L3QsNC80Lg/IDxzcGFuIGNsYXNzPVwibG9naW5MaW5rXCI+0JLRhdC+0LTQuNGC0LUhPC9zcGFuPjwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyaWdodC1zaWRlXCI+XHJcbiAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJyZWdpc3RlclwiPlxyXG4gICAgPGgyPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2gyPlxyXG4gICAgPHVsIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCd0LjQutC90LXQudC8PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCd0LjQutC90LXQudC8XCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCf0L7Rh9GC0LA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cItCf0L7Rh9GC0LBcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwidGV4dCBwYXNzd29yZC13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG5vcm1hbCBjdXN0b21cIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgINCX0LDRgNC10LPQtdGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xyXG4gICAgPC9idXR0b24+XHJcbiAgPC9mb3JtPlxyXG4gIDxkaXYgY2xhc3M9XCJvci1nb29nbGVcIj5cclxuICAgIDxwPtCY0JvQmDwvcD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gb3V0bGluZSBjdXN0b21cIj7QktC+0LnRgtC4INGH0LXRgNC10LcgR29vZ2xlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICA8YXJ0aWNsZT5cclxuICAgIDxwIGNsYXNzPVwibGFiZWxcIj7QmtC+0L3RgtCw0LrRgtGLPC9wPlxyXG4gICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwidmFsdWVcIj5hbGluYS5taWtoYXlsb3ZhLjAzQG1haWwucnU8L2E+XHJcbiAgPC9hcnRpY2xlPlxyXG4gIDxhcnRpY2xlPlxyXG4gICAgPHAgY2xhc3M9XCJsYWJlbFwiPtCe0YHQvdC+0LLQsNGC0LXQu9GM0L3QuNGG0LA8L3A+XHJcbiAgICA8cCBjbGFzcz1cInZhbHVlXCI+0JzQuNGF0LDQudC70L7QstCwINCQ0LvQuNC90LAg0KAzMzY2MjwvcD5cclxuICA8L2FydGljbGU+XHJcbiAgPGFydGljbGUgY2xhc3M9XCJsb25nXCI+XHJcbiAgICA8cCBjbGFzcz1cImxhYmVsXCI+0KHQvtGG0LjQsNC70YzQvdGL0LUg0YHQtdGC0Lg8L3A+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiXCIgY2xhc3M9XCJ2YWx1ZVwiPkluc3RhZ3JhbTwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cIlwiIGNsYXNzPVwidmFsdWVcIj5Wa29udGFrdGU8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJcIiBjbGFzcz1cInZhbHVlXCI+VGVsZWdyYW08L2E+PC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9hcnRpY2xlPlxyXG48L2Rpdj5cclxuPHN2Z1xyXG4gIHdpZHRoPVwiMTI0OVwiXHJcbiAgaGVpZ2h0PVwiMTgwXCJcclxuICB2aWV3Qm94PVwiMCAwIDEyNDkgMTgwXCJcclxuICBmaWxsPVwibm9uZVwiXHJcbiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbj5cclxuICA8cGF0aFxyXG4gICAgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICBkPVwiTTEuMzA2NTMgMTc5VjE3OS40NDVIMS43NTA5OEg0Mi4zMjU2SDQyLjc3VjE3OVY3MC40MDA0SDQ3LjA3NDdMODIuNDc3NSAxNzkuMTM4TDgyLjU3NzQgMTc5LjQ0NUg4Mi45MDAxSDEyMC45MzlIMTIxLjI2MkwxMjEuMzYxIDE3OS4xMzhMMTU2Ljc2NCA3MC40MDA0SDE2MS4wNjlWMTc5VjE3OS40NDVIMTYxLjUxM0gyMDIuMDg4SDIwMi41MzJWMTc5VjEuNDg2MzNWMS4wNDE4OEgyMDIuMDg4SDEzOS45NThIMTM5LjYzNEwxMzkuNTM1IDEuMzUwMTdMMTA0LjEzMiAxMTEuMzU0SDk5LjcwNzRMNjQuMzAzOSAxLjM1MDE3TDY0LjIwNDcgMS4wNDE4OEg2My44ODA4SDEuNzUwOThIMS4zMDY1M1YxLjQ4NjMzVjE3OVpNMjE4LjA3MiAxNzguODU2TDIxNy44NyAxNzkuNDQ1SDIxOC40OTJIMjYyLjg3MUgyNjMuMTk1TDI2My4yOTQgMTc5LjEzNkwyNzQuNjA2IDE0My45NDJIMzQyLjQyOEwzNTMuNzQgMTc5LjEzNkwzNTMuODM5IDE3OS40NDVIMzU0LjE2M0gzOTguNTQySDM5OS4xNjRMMzk4Ljk2MiAxNzguODU2TDMzOC4xIDEuMzQyMThMMzM3Ljk5NyAxLjA0MTg4SDMzNy42OEgyNzkuMzU0SDI3OS4wMzdMMjc4LjkzNCAxLjM0MjE4TDIxOC4wNzIgMTc4Ljg1NlpNNDM2LjI5NSAxNzlWMTc5LjQ0NUg0MzYuNzM5SDQ3Ny4zMTRINDc3Ljc1OFYxNzlWNDEuMjM3NEg1MjYuNzY0SDUyNy4yMDhWNDAuNzkzVjEuNDg2MzNWMS4wNDE4OEg1MjYuNzY0SDM4Ny4yODlIMzg2Ljg0NFYxLjQ4NjMzVjQwLjc5M1Y0MS4yMzc0SDM4Ny4yODlINDM2LjI5NVYxNzlaTTU0OS4xMDMgMTc5VjE3OS40NDVINTQ5LjU0N0g2NzEuMjcxSDY3MS43MTZWMTc5VjE0Mi4yMjlWMTQxLjc4NUg2NzEuMjcxSDU5MC41NjZWMTA4LjQzOUg2NjYuMTk5SDY2Ni42NDRWMTA3Ljk5NVY3Mi40OTE5VjcyLjA0NzRINjY2LjE5OUg1OTAuNTY2VjM4LjcwMTVINjcxLjI3MUg2NzEuNzE2VjM4LjI1NzFWMS40ODYzM1YxLjA0MTg4SDY3MS4yNzFINTQ5LjU0N0g1NDkuMTAzVjEuNDg2MzNWMTc5Wk03MDEuMTU5IDE3OVYxNzkuNDQ1SDcwMS42MDNINzQyLjE3OEg3NDIuNjIyVjE3OVYxMjIuMzg3SDc0Ny4wNUw3OTcuNjM1IDE3OS4yOTVMNzk3Ljc2OCAxNzkuNDQ1SDc5Ny45NjhIODQ4LjY4Nkg4NDkuNjk1TDg0OS4wMTQgMTc4LjdMNzk1LjA3NCAxMTkuNzQzQzgwMy42MDEgMTE4LjY0OCA4MTEuNTcyIDExNS45NTkgODE4Ljk4NSAxMTEuNjc2TDgxOC45OTQgMTExLjY3QzgzNS43MTcgMTAxLjQzMiA4NDQuMDU5IDg0Ljk1OTIgODQ0LjA1OSA2Mi4zNDgyQzg0NC4wNTkgNDMuOTk1OCA4MzguNjE3IDI5LjE2OTIgODI3LjcwMyAxNy45MTRDODE2Ljc5IDYuNjU5NzMgODAyLjYzOCAxLjA0MTg4IDc4NS4yODggMS4wNDE4OEg3MDEuNjAzSDcwMS4xNTlWMS40ODYzM1YxNzlaTTc5Ni44OCA3OC43ODQzTDc5Ni44NzkgNzguNzg0OUM3OTMuMjUxIDgyLjc0MzEgNzg4LjU1NSA4NC43MjcgNzgyLjc1MiA4NC43MjdINzQyLjYyMlYzOS45Njk0SDc4Mi43NTJDNzg4LjU0OSAzOS45Njk0IDc5My4yNDMgNDIuMDMzMiA3OTYuODczIDQ2LjE1ODRMNzk2Ljg4IDQ2LjE2NTVMNzk2Ljg4NiA0Ni4xNzIzQzgwMC42NzggNTAuMTI4NyA4MDIuNTk1IDU1LjUwMzEgODAyLjU5NSA2Mi4zNDgyQzgwMi41OTUgNjkuMTkyNiA4MDAuNjc4IDc0LjY1NjEgNzk2Ljg4IDc4Ljc4NDNaTTg3My41MjEgMTc5VjE3OS40NDVIODczLjk2Nkg5MTQuNTRIOTE0Ljk4NVYxNzlWMS40ODYzM1YxLjA0MTg4SDkxNC41NEg4NzMuOTY2SDg3My41MjFWMS40ODYzM1YxNzlaTTkzMC41NTQgMTc4Ljg1Nkw5MzAuMzUyIDE3OS40NDVIOTMwLjk3NEg5NzUuMzUzSDk3NS42NzdMOTc1Ljc3NiAxNzkuMTM2TDk4Ny4wODggMTQzLjk0MkgxMDU0LjkxTDEwNjYuMjIgMTc5LjEzNkwxMDY2LjMyIDE3OS40NDVIMTA2Ni42NUgxMTExLjAySDExMTEuNjVMMTExMS40NCAxNzguODU2TDEwNTAuNTggMS4zNDIxOEwxMDUwLjQ4IDEuMDQxODhIMTA1MC4xNkg5OTEuODM2SDk5MS41MTlMOTkxLjQxNiAxLjM0MjE4TDkzMC41NTQgMTc4Ljg1NlpNMTEyNy4xMSAxNzlWMTc5LjQ0NUgxMTI3LjU2SDEyNDguMDFIMTI0OC40NlYxNzlWMTM5LjY5M1YxMzkuMjQ5SDEyNDguMDFIMTE2OC41OFYxLjQ4NjMzVjEuMDQxODhIMTE2OC4xM0gxMTI3LjU2SDExMjcuMTFWMS40ODYzM1YxNzlaTTI4Ni4zMDMgMTA3LjU1TDMwNi4zMDYgNDUuMDQxM0gzMTAuNzI4TDMzMC43MzEgMTA3LjU1SDI4Ni4zMDNaTTEwNDMuMjEgMTA3LjU1SDk5OC43ODVMMTAxOC43OSA0NS4wNDEzSDEwMjMuMjFMMTA0My4yMSAxMDcuNTVaXCJcclxuICAgIGZpbGw9XCIjRkFGQUZBXCJcclxuICAgIHN0cm9rZT1cIiNGQUZBRkFcIlxyXG4gICAgc3Ryb2tlLXdpZHRoPVwiMC44ODg4ODlcIlxyXG4gIC8+XHJcbjwvc3ZnPlxyXG5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJ3cmFwXCI+XHJcbiAgICA8aDE+0JfQsNCz0L7Qu9C+0LLQvtC6PC9oMT5cclxuICAgIDxwPtCi0LXQutGB0YIg0L/QvtC0INC30LDQs9C+0LvQvtCy0LrQvtC8PC9wPlxyXG48L2Rpdj5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gYDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgPGEgaHJlZj1cIi9tYXRlcmlhbC9pbmRleC5odG1sXCI+TUFURVJJQUw8L2E+XHJcbiAgPG5hdj5cclxuICAgIDx1bCBjbGFzcz1cInNpZGViYXJcIj5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY2F0YWxvZy9pbmRleC5odG1sXCI+0JrQsNGC0LDQu9C+0LM8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCeINC90LDRgTwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvZmF2b3JpdGVzL2luZGV4Lmh0bWxcIj7QmNC30LHRgNCw0L3QvdC+0LU8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiL21hdGVyaWFsL2NhcnQvaW5kZXguaHRtbFwiPtCa0L7RgNC30LjQvdCwPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLWhpZGRlblwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY3JlYXRlL2luZGV4Lmh0bWxcIj7QlNC+0LHQsNCy0LjRgtGMINC/0L7RgdGC0LXRgDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwic2lkZWJhci1oaWRkZW4gYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbm9ybWFsIHNpZGViYXJMb2dpbkJ0blwiPtCS0L7QudGC0Lg8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIG91dGxpbmUgc2lkZWJhclJlZ2lzdGVyQnRuXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDx1bCBjbGFzcz1cIndpZGVcIj5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbWF0ZXJpYWwvY2F0YWxvZy9pbmRleC5odG1sXCI+0JrQsNGC0LDQu9C+0LM8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCeINC90LDRgTwvYT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9uYXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImJ1dHRvbi1hcmVhXCI+XHJcbiAgPGEgaHJlZj1cIi9tYXRlcmlhbC9jcmVhdGUvaW5kZXguaHRtbFwiIGNsYXNzPVwiYnV0dG9uIG91dGxpbmVcIlxyXG4gICAgPtCU0L7QsdCw0LLQuNGC0Ywg0L/QvtGB0YLQtdGAPC9hXHJcbiAgPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiaWNvbnMtd3JhcHBlclwiPlxyXG4gICAgPGEgaHJlZj1cIi9tYXRlcmlhbC9mYXZvdXJpdGVzL2luZGV4Lmh0bWxcIj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIGNsYXNzPVwiaGVhcnRcIlxyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xNi41NDcyIDMuNzQ5MDJDMTMuNTA0MSAzLjc0OTAyIDEyLjAwNDEgNi43NDkwMiAxMi4wMDQxIDYuNzQ5MDJDMTIuMDA0MSA2Ljc0OTAyIDEwLjUwNDEgMy43NDkwMiA3LjQ2MDk2IDMuNzQ5MDJDNC45ODc4MyAzLjc0OTAyIDMuMDI5MzkgNS44MTgwOSAzLjAwNDA4IDguMjg2OTlDMi45NTI1MiAxMy40MTE4IDcuMDY5NTUgMTcuMDU2NCAxMS41ODIyIDIwLjExOTJDMTEuNzA2NiAyMC4yMDM4IDExLjg1MzYgMjAuMjQ5MSAxMi4wMDQxIDIwLjI0OTFDMTIuMTU0NiAyMC4yNDkxIDEyLjMwMTUgMjAuMjAzOCAxMi40MjYgMjAuMTE5MkMxNi45MzgxIDE3LjA1NjQgMjEuMDU1MiAxMy40MTE4IDIxLjAwNDEgOC4yODY5OUMyMC45Nzg4IDUuODE4MDkgMTkuMDIwMyAzLjc0OTAyIDE2LjU0NzIgMy43NDkwMlpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgaHJlZj1cIi9tYXRlcmlhbC9jYXJ0L2luZGV4Lmh0bWxcIj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIGNsYXNzPVwiY2FydFwiXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTguMjQ2NCAyMC4yNDlDOC42NjA2MSAyMC4yNDkgOC45OTY0IDE5LjkxMzIgOC45OTY0IDE5LjQ5OUM4Ljk5NjQgMTkuMDg0OCA4LjY2MDYxIDE4Ljc0OSA4LjI0NjQgMTguNzQ5QzcuODMyMTkgMTguNzQ5IDcuNDk2NCAxOS4wODQ4IDcuNDk2NCAxOS40OTlDNy40OTY0IDE5LjkxMzIgNy44MzIxOSAyMC4yNDkgOC4yNDY0IDIwLjI0OVpcIlxyXG4gICAgICAgICAgZmlsbD1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjE5NTE0XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTcuODM0MSAyMC4yNDlDMTguMjQ4MyAyMC4yNDkgMTguNTg0MSAxOS45MTMyIDE4LjU4NDEgMTkuNDk5QzE4LjU4NDEgMTkuMDg0OCAxOC4yNDgzIDE4Ljc0OSAxNy44MzQxIDE4Ljc0OUMxNy40MTk5IDE4Ljc0OSAxNy4wODQxIDE5LjA4NDggMTcuMDg0MSAxOS40OTlDMTcuMDg0MSAxOS45MTMyIDE3LjQxOTkgMjAuMjQ5IDE3LjgzNDEgMjAuMjQ5WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzJBMkIyQ1wiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTk1MTRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0yLjI0NjQgMy43NDkwMkg1LjI0NjRMNy40OTY0IDE2LjQ5OUgxOS40OTY0XCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMyQTJCMkNcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4xOTUxNFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTcuNDk2NCAxMy41SDE5LjE4ODlDMTkuMjc1NiAxMy41MDAxIDE5LjM1OTcgMTMuNDcwMSAxOS40MjY4IDEzLjQxNTFDMTkuNDkzOSAxMy4zNjAxIDE5LjUzOTggMTMuMjgzNiAxOS41NTY5IDEzLjE5ODZMMjAuOTA2OSA2LjQ0ODU5QzIwLjkxNzggNi4zOTQxNyAyMC45MTY0IDYuMzM4IDIwLjkwMyA2LjI4NDE0QzIwLjg4OTUgNi4yMzAyOSAyMC44NjQzIDYuMTgwMDkgMjAuODI5MSA2LjEzNzE3QzIwLjc5MzkgNi4wOTQyNiAyMC43NDk2IDYuMDU5NjkgMjAuNjk5NCA2LjAzNTk3QzIwLjY0OTIgNi4wMTIyNSAyMC41OTQ0IDUuOTk5OTYgMjAuNTM4OSA2SDUuOTk2NFwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMkEyQjJDXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMTk1MTRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBub3JtYWwgbG9naW5CdG5cIj7QktC+0LnRgtC4PC9idXR0b24+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBvdXRsaW5lIHJlZ2lzdGVyQnRuXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnV0dG9uXCI+XHJcbiAgPHNwYW4+PC9zcGFuPlxyXG48L2J1dHRvbj5cclxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1idXR0b24uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1idXR0b24uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktZm9ybS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWZvcm0uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktbWluaS1jYXJkLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktbWluaS1jYXJkLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWRpYWxvZ19wb3B1cC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWRpYWxvZ19wb3B1cC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1mb290ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktaDFfYW5kX3Auc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1oMV9hbmRfcC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1oZWFkZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1oZWFkZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktcG9zdGVyX2Jhci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LXBvc3Rlcl9iYXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbW9uLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbW9uLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9teS1idXR0b24uc2Nzcyc7XHJcblxyXG4vL1VJLdC60L7QvNC/0L7QvdC10L3RgiBcItCa0L3QvtC/0LrQsFwiXHJcblxyXG4vLyDQsiDQv9GA0LjQvdGG0LjQv9C1INGN0YLQuNC8INC80L7QttC90L4g0L3QtSDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y9cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIG1vZGUsIGlzQ3VzdG9tKSB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG5cclxuICBzZXRUZXh0KGJ0biwgdGV4dCk7XHJcbiAgc2V0TW9kZShidG4sIG1vZGUsIGlzQ3VzdG9tKTtcclxuXHJcbiAgcmV0dXJuIGJ0bjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQSh0ZXh0LCBtb2RlLCBpc0N1c3RvbSwgbGluaykge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgYS5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuXHJcbiAgc2V0VGV4dChhLCB0ZXh0KTtcclxuICBzZXRNb2RlKGEsIG1vZGUsIGlzQ3VzdG9tKTtcclxuICBzZXRMaW5rKGEsIGxpbmspO1xyXG5cclxuICByZXR1cm4gYTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGV4dChidG4sIHRleHQpIHtcclxuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRNb2RlKGJ0biwgbW9kZSwgY3VzdG9tKSB7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQobW9kZSk7XHJcblxyXG4gIGlmIChjdXN0b20pIHtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjdXN0b20nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExpbmsoYSwgbGluaykge1xyXG4gIGEuaHJlZiA9IGxpbms7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGVCdXR0b24sXHJcbiAgY3JlYXRlQSxcclxufTtcclxuIiwiaW1wb3J0ICcuL215LWZvcm0uc2NzcydcclxuaW1wb3J0ICcuL3ZhbGlkYXRpb24uanMnXHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGUobGFiZWxQLCBwbGFjZWhvbGRlclApe1xyXG4vLyAgICAgY29uc3QgZm9ybW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuLy8gICAgIGZvcm1tLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwJylcclxuLy8gICAgIGNvbnN0IGxhYmVsSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuLy8gICAgIGZvcm1tLmFwcGVuZENoaWxkKGxhYmVsSClcclxuLy8gICAgIGNvbnN0IGlucHV0SCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuLy8gICAgIGlucHV0SC50eXBlID0gJ3RleHQnO1xyXG4vLyAgICAgZm9ybW0uYXBwZW5kQ2hpbGQoaW5wdXRIKVxyXG4vLyAgICAgY29uc3Qgc3BhbkggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuLy8gICAgIGZvcm1tLmFwcGVuZENoaWxkKHNwYW5IKVxyXG5cclxuLy8gICAgIHNldFRleHQoZm9ybW0sIGxhYmVsUCwgcGxhY2Vob2xkZXJQKTtcclxuXHJcbi8vICAgICByZXR1cm4gZm9ybW07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNldFRleHQoZm9ybW0sIGxhYmVsUCwgcGxhY2Vob2xkZXJQKXtcclxuLy8gICAgIGNvbnN0IGxhYmVsSCA9IGZvcm1tLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJylcclxuLy8gICAgIGNvbnN0IGlucHV0SCA9IGZvcm1tLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcclxuICAgIFxyXG4vLyAgICAgbGFiZWxILnRleHRDb250ZW50ID0gbGFiZWxQO1xyXG4vLyAgICAgaW5wdXRILnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJQO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB7XHJcbi8vICAgICBjcmVhdGVcclxuLy8gfSIsIlxyXG5cclxuZnVuY3Rpb24gc2V0dXBGb3JtVmFsaWRhdGlvbigpIHtcclxuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcclxuXHJcbiAgZm9ybXMuZm9yRWFjaChmb3JtID0+IHtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKCFjaGVja1ZhbGlkaXR5KGZvcm0pKSB7XHJcbiAgICAgICAgc2hvd0N1c3RvbUVycm9ycyhmb3JtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtLnN1Ym1pdCgpOyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRpdHkoZm9ybSl7XHJcblxyXG59XHJcbi8vIC8vINCf0L7QutCw0LfQsNGC0Ywg0LrQsNGB0YLQvtC80L3Ri9C1INC+0YjQuNCx0LrQuCDQsiBzcGFuINC00LvRjyDQstGB0LXRhSDQv9C+0LvQtdC5INGBIG5hbWVcclxuLy8gZnVuY3Rpb24gc2hvd0N1c3RvbUVycm9ycyhmb3JtKSB7XHJcbi8vICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFsnKTsgLy8g0J/QvtC70Y8g0YEgbmFtZVxyXG5cclxuLy8gICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbi8vICAgICBjb25zdCBlcnJvclNwYW4gPSBnZXRFcnJvclNwYW4oaW5wdXQpO1xyXG5cclxuLy8gICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuLy8gICAgICAgc2hvd0Vycm9yKGlucHV0LCBlcnJvclNwYW4pO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgY2xlYXJFcnJvcihlcnJvclNwYW4pO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQn9C+0LrQsNC30LDRgtGMINGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVxyXG4vLyBmdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIGVycm9yU3Bhbikge1xyXG4vLyAgIGxldCBtZXNzYWdlID0gJyc7XHJcblxyXG4vLyAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuLy8gICAgIG1lc3NhZ2UgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XHJcbi8vICAgICBtZXNzYWdlID0gJ9CS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3QvtC1INC30L3QsNGH0LXQvdC40LUnO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuLy8gICAgIG1lc3NhZ2UgPSBg0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwICR7aW5wdXQubWluTGVuZ3RofSDRgdC40LzQstC+0LvQvtCyLiDQktCy0LXQtNC10L3QviAke2lucHV0LnZhbHVlLmxlbmd0aH1gO1xyXG4vLyAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XHJcbi8vICAgICBtZXNzYWdlID0gJ9CX0L3QsNGH0LXQvdC40LUg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDRhNC+0YDQvNCw0YLRgyc7XHJcbi8vICAgfVxyXG5cclxuLy8gICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQntGH0LjRgdGC0LjRgtGMINGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVxyXG4vLyBmdW5jdGlvbiBjbGVhckVycm9yKGVycm9yU3Bhbikge1xyXG4vLyAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9ICcnO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDQndCw0LnRgtC4INC40LvQuCDRgdC+0LfQtNCw0YLRjCBzcGFuINC00LvRjyDRgdC+0L7QsdGJ0LXQvdC40Y8g0L7QsSDQvtGI0LjQsdC60LVcclxuLy8gZnVuY3Rpb24gZ2V0RXJyb3JTcGFuKGlucHV0KSB7XHJcbi8vICAgbGV0IGVycm9yU3BhbiA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcclxuLy8gICBpZiAoIWVycm9yU3Bhbikge1xyXG4vLyAgICAgZXJyb3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcclxuLy8gICAgIGlucHV0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JTcGFuKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIGVycm9yU3BhbjtcclxuLy8gfVxyXG5cclxuLy8gLy8g0JfQsNC/0YPRgdC6INCy0LDQu9C40LTQsNGG0LjQuCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbi8vICAgc2V0dXBGb3JtVmFsaWRhdGlvbigpO1xyXG4vLyB9KTtcclxuIiwiaW1wb3J0ICcuL215LW1pbmktY2FyZC5zY3NzJztcclxuaW1wb3J0IGNhcmRIVE1MIGZyb20gJy4vaW5kZXguaHRtbCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocG9zdGVyKSB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtY2FyZCcpO1xyXG4gIGNhcmQuaWQgPSAncG9zdC0xMjMnO1xyXG4gIGNhcmQuaW5uZXJIVE1MID0gY2FyZEhUTUw7XHJcblxyXG4gIHR1cm5PbkZhdkJ1dHRvbihjYXJkKTtcclxuICBpZiAocG9zdGVyKXtcclxuICAgICAgc2V0RGF0YShjYXJkLCBwb3N0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR1cm5PbkZhdkJ1dHRvbihjYXJkKSB7XHJcbiAgY29uc3QgZmF2ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtYnRuJyk7XHJcbiAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZmF2LmNsYXNzTGlzdC50b2dnbGUoJ2Zhdi1hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0YShjYXJkLCBwb3N0ZXIpIHtcclxuICBjb25zdCBuYW1lSHRtbCA9IGNhcmQucXVlcnlTZWxlY3RvcignaDInKTtcclxuICBjb25zdCBhdXRob3JIdG1sID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYXV0aG9yJyk7XHJcbiAgY29uc3QgcHJpY2VIdG1sID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2Ugc3BhbicpO1xyXG4gIGNvbnN0IGltZ0h0bWwgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG5cclxuICBuYW1lSHRtbC50ZXh0Q29udGVudCA9IHBvc3Rlci50aXRsZTtcclxuICBhdXRob3JIdG1sLnRleHRDb250ZW50ID0gcG9zdGVyLmF1dGhvcjtcclxuICBwcmljZUh0bWwudGV4dENvbnRlbnQgPSBwb3N0ZXIucHJpY2U7XHJcbiAgaW1nSHRtbC5zcmMgPSBwb3N0ZXIuaW1hZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGUsXHJcbn07XHJcbiIsImltcG9ydCAnLi9teS1kaWFsb2dfcG9wdXAuc2Nzcyc7XHJcbmltcG9ydCBsb2dpbkhUTUwgZnJvbSAnLi9sb2dpbi5odG1sJztcclxuaW1wb3J0IHJlZ2lzdGVySFRNTCBmcm9tICcuL3JlZ2lzdGVyLmh0bWwnO1xyXG5pbXBvcnQgZm9yZ290SFRNTCBmcm9tICcuL2ZvcmdvdC5odG1sJztcclxuXHJcbmltcG9ydCBteUZvcm0gZnJvbSAnLi4vLi4vVUkvbXktZm9ybS9teS1mb3JtJztcclxuaW1wb3J0IG15QnV0dG9uIGZyb20gJy4uLy4uL1VJL215LWJ1dHRvbi9teS1idXR0b24nO1xyXG5cclxuLy8gaW1wb3J0IFwiLi92YWxpZGF0aW9uLmpzXCI7XHJcblxyXG5jb25zdCBjb250ZW50TWFwID0gbmV3IE1hcChbXHJcbiAgWydsb2dpbicsIGxvZ2luSFRNTF0sXHJcbiAgWydyZWdpc3RlcicsIHJlZ2lzdGVySFRNTF0sXHJcbiAgWydmb3Jnb3QnLCBmb3Jnb3RIVE1MXSxcclxuXSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgY29uc3QgcG9wdXBTeXN0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChwb3B1cFN5c3RlbSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRlbnRNYXAuZm9yRWFjaCgoY29udGVudCwgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdXaW5kb3cuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIG5ld1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctcG9wdXAnLCB0eXBlKTtcclxuICAgIHBvcHVwU3lzdGVtLmFwcGVuZENoaWxkKG5ld1dpbmRvdyk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZENsb3NlTG9naWMocG9wdXBTeXN0ZW0pO1xyXG4gIHNldExpbmtzKHBvcHVwU3lzdGVtKTtcclxuXHJcbiAgcmV0dXJuIHBvcHVwU3lzdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbG9zZUxvZ2ljKHBvcHVwU3lzdGVtKSB7XHJcbiAgcG9wdXBTeXN0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kaWFsb2ctcG9wdXAuYWN0aXZlJykpIHtcclxuICAgICAgY2xvc2VBbGwocG9wdXBTeXN0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBwb3B1cFN5c3RlbS5xdWVyeVNlbGVjdG9yQWxsKCcuZGlhbG9nLXBvcHVwJykuZm9yRWFjaCgoZGlhbG9nKSA9PiB7XHJcbiAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QnV0dG9uQXNPcGVuZXIocG9wdXBTeXN0ZW0sIHR5cGUsIGJ1dHRvbikge1xyXG4gIGlmIChidXR0b24pIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Qb3B1cChwb3B1cFN5c3RlbSwgdHlwZSkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBCdXR0b24gZm9yIHR5cGUgJHt0eXBlfSBub3QgZm91bmRgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExpbmtzKHBvcHVwU3lzdGVtKSB7XHJcbiAgWydyZWdpc3RlcicsICdsb2dpbicsICdmb3Jnb3QnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICBwb3B1cFN5c3RlbS5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0eXBlfUxpbmtgKS5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgIHNldExpbmtBc09wZW5lcihwb3B1cFN5c3RlbSwgdHlwZSwgbGluayk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TGlua0FzT3BlbmVyKHBvcHVwU3lzdGVtLCB0eXBlLCBsaW5rKSB7XHJcbiAgaWYgKGxpbmspIHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY2xvc2VBbGwocG9wdXBTeXN0ZW0pO1xyXG4gICAgICBvcGVuUG9wdXAocG9wdXBTeXN0ZW0sIHR5cGUpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYExpbmsgZm9yIHR5cGUgJHt0eXBlfSBub3QgZm91bmRgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Qb3B1cChwb3B1cFN5c3RlbSwgdHlwZSkge1xyXG4gIHBvcHVwU3lzdGVtLmNsYXNzTGlzdC5hZGQoJ3BvcC1hY3RpdmUnKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gIHBvcHVwU3lzdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlQWxsKHBvcHVwU3lzdGVtKSB7XHJcbiAgcG9wdXBTeXN0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncG9wLWFjdGl2ZScpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgcG9wdXBTeXN0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmRpYWxvZy1wb3B1cC5hY3RpdmUnKS5mb3JFYWNoKChkaWFsb2cpID0+IHtcclxuICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZSxcclxuICBzZXRCdXR0b25Bc09wZW5lcixcclxufTtcclxuIiwiaW1wb3J0ICcuL215LWZvb3Rlci5zY3NzJztcclxuaW1wb3J0IGZvb3RlckhUTUwgZnJvbSAnLi9pbmRleC5odG1sJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcclxuICBmb290ZXIuaW5uZXJIVE1MID0gZm9vdGVySFRNTDtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGlmIChmb290ZXIpIHtcclxuICAgICAgY29uc3Qgc3ZnUGF0aCA9IGZvb3Rlci5xdWVyeVNlbGVjdG9yKCdzdmcgcGF0aCcpO1xyXG4gIFxyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgc3ZnUGF0aC5zdHlsZS5maWxsID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN2Z1BhdGguc3R5bGUuZmlsbCA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuN1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShmb290ZXIpO1xyXG4gICAgfSBcclxuICB9KTtcclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlLFxyXG59O1xyXG4iLCJpbXBvcnQgXCIuL215LWgxX2FuZF9wLnNjc3NcIjtcclxuaW1wb3J0IGgxcEhUTUwgZnJvbSAnLi9pbmRleC5odG1sJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShoMXRleHQsIHB0ZXh0KXtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdoMXAnKTtcclxuICAgIGNvbXBvbmVudC5pbm5lckhUTUwgPSBoMXBIVE1MO1xyXG5cclxuICAgIHNldFRleHQoY29tcG9uZW50LCBoMXRleHQsIHB0ZXh0KTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRleHQoY29tcG9uZW50LCBoMXRleHQsIHB0ZXh0KXtcclxuICAgIGNvbnN0IGgxXyA9IGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG4gICAgY29uc3QgcF8gPSBjb21wb25lbnQucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgaWYgKGgxXyAmJiBoMXRleHQpIGgxXy50ZXh0Q29udGVudCA9IGgxdGV4dDtcclxuICAgIGlmIChwXyAmJiBwdGV4dCkgcF8udGV4dENvbnRlbnQgPSBwdGV4dDsgZWxzZSBwXy5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY3JlYXRlXHJcbn07XHJcbiIsImltcG9ydCAnLi9teS1oZWFkZXIuc2Nzcyc7XHJcbmltcG9ydCBoZWFkZXJIVE1MIGZyb20gJy4vaW5kZXguaHRtbCc7XHJcbmltcG9ydCBteURpYWxvZ19wb3B1cCBmcm9tICcuLi9kaWFsb2dfcG9wdXAvbXktZGlhbG9nX3BvcHVwJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcclxuICBoZWFkZXIuaW5uZXJIVE1MID0gaGVhZGVySFRNTDtcclxuXHJcbiAgY29uc3QgZGlhbG9ncyA9IG15RGlhbG9nX3BvcHVwLmNyZWF0ZSgpO1xyXG5cclxuICBjb25zdCBsb2dpbkJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubG9naW5CdG4nKTtcclxuICBjb25zdCByZWdpc3RlckJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXJCdG4nKTtcclxuICBjb25zdCBzaWRlYmFyTG9naW5CdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJMb2dpbkJ0bicpO1xyXG4gIGNvbnN0IHNpZGViYXJSZWdpc3RlckJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhclJlZ2lzdGVyQnRuJyk7XHJcbiAgLy8gY29uc3QgZm9yZ290QnRuID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5mb3Jnb3RCdG4nKTtcclxuXHJcbiAgbXlEaWFsb2dfcG9wdXAuc2V0QnV0dG9uQXNPcGVuZXIoZGlhbG9ncywgJ2xvZ2luJywgbG9naW5CdG4pO1xyXG4gIG15RGlhbG9nX3BvcHVwLnNldEJ1dHRvbkFzT3BlbmVyKGRpYWxvZ3MsICdyZWdpc3RlcicsIHJlZ2lzdGVyQnRuKTtcclxuICBteURpYWxvZ19wb3B1cC5zZXRCdXR0b25Bc09wZW5lcihkaWFsb2dzLCAnbG9naW4nLCBzaWRlYmFyTG9naW5CdG4pO1xyXG4gIG15RGlhbG9nX3BvcHVwLnNldEJ1dHRvbkFzT3BlbmVyKGRpYWxvZ3MsICdyZWdpc3RlcicsIHNpZGViYXJSZWdpc3RlckJ0bik7XHJcbiAgLy8gbXlEaWFsb2dfcG9wdXAuc2V0QXNPcGVuZXIoZGlhbG9ncywgJ2ZvcmdvdCcsIGZvcmdvdEJ0bik7XHJcblxyXG4gIGFkZFNpZGVCYXIoaGVhZGVyKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2lkZUJhcihoZWFkZXIpIHtcclxuICBjb25zdCBpY29uID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpO1xyXG4gIGNvbnN0IHNpZGViYXIgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKCFzaWRlYmFyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWljb24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGUsXHJcbn07XHJcbiIsImltcG9ydCAnLi9teS1wb3N0ZXJfYmFyLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBvc3RlcnNfYXJyYXkpe1xyXG4gICAgdmFyIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxyXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ3Bvc3Rlci1iYXInKVxyXG4gICAgc2V0UG9zdGVycyhiYXIsIHBvc3RlcnNfYXJyYXkpXHJcblxyXG4gICAgcmV0dXJuIGJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UG9zdGVycyhiYXIsIHBvc3RlcnNfYXJyYXkpe1xyXG4gICAgcG9zdGVyc19hcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgIGJhci5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjcmVhdGVcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvbWF0ZXJpYWwvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwcm9maWxlc2V0dGluZ3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG5pbXBvcnQgbXlIZWFkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvaGVhZGVyL215LWhlYWRlclwiO1xyXG5pbXBvcnQgbXlIMV9hbmRfcCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9oMV9hbmRfcC9teS1oMV9hbmRfcFwiO1xyXG5pbXBvcnQgbXlQb3N0ZXJfYmFyIGZyb20gXCIuLi8uLi9tb2R1bGVzL3Bvc3Rlcl9iYXIvbXktcG9zdGVyX2JhclwiO1xyXG5pbXBvcnQgbXlGb290ZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvZm9vdGVyL215LWZvb3RlclwiO1xyXG5cclxuaW1wb3J0IG15TWluaV9jYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL215LW1pbmlfY2FyZC9teS1taW5pX2NhcmRcIjtcclxuaW1wb3J0IG15QnV0dG9uIGZyb20gXCIuLi8uLi9VSS9teS1idXR0b24vbXktYnV0dG9uXCI7XHJcbi8vIGltcG9ydCBteUJ1dHRvbiBmcm9tIFwiLi4vLi4vVUkvbXktYnV0dG9uL215LWJ1dHRvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuYm9keS5hcHBlbmRDaGlsZChteUhlYWRlci5jcmVhdGUoKSlcclxuYm9keS5hcHBlbmRDaGlsZChteUgxX2FuZF9wLmNyZWF0ZSgn0JjQt9C80LXQvdC10L3QuNC1INC/0YDQvtGE0LjQu9GPJywgJ9CU0L7QsdCw0LLQu9GP0LXQvNCw0Y8g0LLQsNC80Lgg0LjQvdGE0L7RgNC80LDRhtC40Y8g0LLQuNC00L3QsCDQstGB0LXQvCwg0LrRgtC+INC80L7QttC10YIg0L/RgNC+0YHQvNCw0YLRgNC40LLQsNGC0Ywg0LLQsNGIINC/0YDQvtGE0LjQu9GMLicpKVxyXG5ib2R5LmFwcGVuZENoaWxkKG15Rm9vdGVyLmNyZWF0ZSgpKVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==