(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_test_cookies_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/test/cookies.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/test/cookies.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cookies */ "./node_modules/vue-cookies/vue-cookies.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cookies__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CookieTest',
  methods: {
    getTest: function getTest() {
      if (vue_cookies__WEBPACK_IMPORTED_MODULE_0___default().isKey('test')) {
        alert(vue_cookies__WEBPACK_IMPORTED_MODULE_0___default().get('test'));
      } else {
        alert('값 없음');
      }
    },
    setTest: function setTest() {
      vue_cookies__WEBPACK_IMPORTED_MODULE_0___default().set('test', new Date());
    },
    resetTest: function resetTest() {
      vue_cookies__WEBPACK_IMPORTED_MODULE_0___default().remove('test');
      alert('삭제됨');
    },
    getTest2: function getTest2() {
      if (vue_cookies__WEBPACK_IMPORTED_MODULE_0___default().isKey('siu')) {
        alert(vue_cookies__WEBPACK_IMPORTED_MODULE_0___default().get('siu'));
      } else {
        alert('값 없음');
      }
    },
    setTest2: function setTest2() {
      vue_cookies__WEBPACK_IMPORTED_MODULE_0___default().set('siu', "i am siu");
    },
    resetTest2: function resetTest2() {
      vue_cookies__WEBPACK_IMPORTED_MODULE_0___default().remove('siu');
      alert('삭제됨');
    }
  }
});

/***/ }),

/***/ "./resources/js/components/test/cookies.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/test/cookies.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cookies_vue_vue_type_template_id_56b42e46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies.vue?vue&type=template&id=56b42e46& */ "./resources/js/components/test/cookies.vue?vue&type=template&id=56b42e46&");
/* harmony import */ var _cookies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookies.vue?vue&type=script&lang=js& */ "./resources/js/components/test/cookies.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _cookies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _cookies_vue_vue_type_template_id_56b42e46___WEBPACK_IMPORTED_MODULE_0__.render,
  _cookies_vue_vue_type_template_id_56b42e46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/test/cookies.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/test/cookies.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/test/cookies.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cookies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cookies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/test/cookies.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cookies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/test/cookies.vue?vue&type=template&id=56b42e46&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/test/cookies.vue?vue&type=template&id=56b42e46& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cookies_vue_vue_type_template_id_56b42e46___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cookies_vue_vue_type_template_id_56b42e46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cookies_vue_vue_type_template_id_56b42e46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cookies.vue?vue&type=template&id=56b42e46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/test/cookies.vue?vue&type=template&id=56b42e46&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/test/cookies.vue?vue&type=template&id=56b42e46&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/test/cookies.vue?vue&type=template&id=56b42e46& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("a", { on: { click: _vm.getTest } }, [_vm._v("get cookie")]),
    _c("br"),
    _vm._v(" "),
    _c("a", { on: { click: _vm.setTest } }, [_vm._v("set cookie")]),
    _c("br"),
    _vm._v(" "),
    _c("a", { on: { click: _vm.resetTest } }, [_vm._v("reset cookie")]),
    _c("br"),
    _vm._v(" "),
    _c("a", { on: { click: _vm.getTest2 } }, [_vm._v("get cookie2")]),
    _c("br"),
    _vm._v(" "),
    _c("a", { on: { click: _vm.setTest2 } }, [_vm._v("set cookie2")]),
    _c("br"),
    _vm._v(" "),
    _c("a", { on: { click: _vm.resetTest2 } }, [_vm._v("reset cookie2")]),
    _c("br")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);