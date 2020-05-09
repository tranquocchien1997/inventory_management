(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Input.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Input.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['item', 'model', 'data'],
  computed: {
    selectList: function selectList() {
      var arr = [];

      if (this.data) {
        arr = this.data;
        arr.unshift({
          id: null,
          value: null
        });
      }

      return arr;
    },
    modelFormat: function modelFormat() {
      if (this.model[this.item.model]) {
        return moment(this.model[this.item.model], 'YYYY/MM/DD').format('DD/MM/YYYY');
      }

      return null;
    }
  },
  updated: function updated() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/bBtn.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/bBtn.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title', 'onClick', 'color', 'className', 'link', 'icon', 'configStyle'],
  computed: {
    titleView: function titleView() {
      switch (this.title) {
        case "createTitle":
          return 'Tạo mới';

        case "cancelTitle":
          return "Quay về";

        case "updateTitle":
          return 'Cập nhật';

        case "cancelUpdateTitle":
          return "Huỷ cập nhật";

        default:
          return this.title;
      }
    }
  },
  methods: {
    handleClick: function handleClick() {
      if (this.link) {
        this.$router.push(this.link);
      } else if (this.onClick) {
        this.onClick();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/loading.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/loading.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['show']
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Input.vue?vue&type=template&id=e279115e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Input.vue?vue&type=template&id=e279115e& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.item.type == "currency"
        ? _c("b-numeric-formatted", {
            attrs: {
              disabled: _vm.item.disable,
              "class-name": "form-control",
              "null-placeholder": "-",
              placeholder: _vm.item.title,
              "org-placeholder": _vm.item.title,
              label: _vm.item.title,
              "decimal-number": 0,
              affix: "đ",
              is_prefix: false
            },
            model: {
              value: _vm.model[_vm.item.model],
              callback: function($$v) {
                _vm.$set(_vm.model, _vm.item.model, $$v)
              },
              expression: "model[item.model]"
            }
          })
        : _vm.item.type == "number"
        ? _c("b-numeric-formatted", {
            attrs: {
              disabled: _vm.item.disable,
              "class-name": "form-control",
              "null-placeholder": "-",
              placeholder: _vm.item.title,
              "org-placeholder": _vm.item.title,
              label: _vm.item.title,
              "decimal-number": 0
            },
            model: {
              value: _vm.model[_vm.item.model],
              callback: function($$v) {
                _vm.$set(_vm.model, _vm.item.model, $$v)
              },
              expression: "model[item.model]"
            }
          })
        : _vm.item.type == "date" && !_vm.item.disable
        ? _c("b-date-and-time", {
            attrs: {
              disabled: _vm.item.disable,
              label: _vm.item.title,
              "null-placeholder": "-",
              placeholder: _vm.item.title,
              "org-placeholder": _vm.item.title,
              "time-format": "DD/MM/YYYY",
              id: _vm.item.model
            },
            model: {
              value: _vm.model[_vm.item.model],
              callback: function($$v) {
                _vm.$set(_vm.model, _vm.item.model, $$v)
              },
              expression: "model[item.model]"
            }
          })
        : _vm.item.type == "date" && _vm.item.disable
        ? _c("b-text-field", {
            attrs: {
              disabled: _vm.item.disable,
              className: "form-control",
              "null-placeholder": "-",
              "org-placeholder": _vm.item.title,
              placeholder: _vm.item.title,
              label: _vm.item.title
            },
            model: {
              value: _vm.model[_vm.item.model],
              callback: function($$v) {
                _vm.$set(_vm.model, _vm.item.model, $$v)
              },
              expression: "model[item.model]"
            }
          })
        : _vm.item.type == "textArea"
        ? _c("b-textarea", {
            attrs: {
              disabled: _vm.item.disable,
              hasPreView: "true",
              label: _vm.item.title,
              placeholder: _vm.item.title,
              "org-placeholder": _vm.item.title,
              "class-name": "form-control",
              "null-placeholder": "-"
            },
            model: {
              value: _vm.model[_vm.item.model],
              callback: function($$v) {
                _vm.$set(_vm.model, _vm.item.model, $$v)
              },
              expression: "model[item.model]"
            }
          })
        : _vm.item.type == "dropdown"
        ? _c("b-select", {
            attrs: {
              disabled: _vm.item.disable,
              label: _vm.item.title,
              hasAllDefault: false,
              list: _vm.selectList,
              "item-text": "value",
              "item-val": "id",
              "org-placeholder": _vm.item.title,
              "null-placeholder": "-"
            },
            model: {
              value: _vm.model[_vm.item.model],
              callback: function($$v) {
                _vm.$set(_vm.model, _vm.item.model, $$v)
              },
              expression: "model[item.model]"
            }
          })
        : _vm.item.type == "string"
        ? _c("b-text-field", {
            attrs: {
              disabled: _vm.item.disable,
              className: "form-control",
              "null-placeholder": "-",
              "org-placeholder": _vm.item.title,
              placeholder: _vm.item.title,
              label: _vm.item.title
            },
            model: {
              value: _vm.model[_vm.item.model],
              callback: function($$v) {
                _vm.$set(_vm.model, _vm.item.model, $$v)
              },
              expression: "model[item.model]"
            }
          })
        : _vm.item.type == "checkbox"
        ? _c("b-check-box", {
            attrs: { disabled: _vm.item.disable, label: _vm.item.title },
            model: {
              value: _vm.model[_vm.item.model],
              callback: function($$v) {
                _vm.$set(_vm.model, _vm.item.model, $$v)
              },
              expression: "model[item.model]"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("ul", { staticClass: "validation" }, [_vm._v(_vm._s(_vm.item.error))])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/bBtn.vue?vue&type=template&id=c70daf7a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/bBtn.vue?vue&type=template&id=c70daf7a& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      class: "btn btn-" + _vm.color + " " + _vm.className,
      style: _vm.configStyle ? _vm.configStyle : "",
      attrs: { type: "button" },
      on: {
        click: function($event) {
          return _vm.handleClick()
        }
      }
    },
    [
      _vm.icon ? _c("i", { class: _vm.icon }) : _vm._e(),
      _vm._v("\n    " + _vm._s(_vm.titleView) + "\n")
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/loading.vue?vue&type=template&id=688edfba&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/loading.vue?vue&type=template&id=688edfba&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c("div", { staticClass: "overlay" }, [
        _c("i", { staticClass: "fas fa-3x fa-sync-alt fa-spin" })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/common/Input.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/common/Input.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_vue_vue_type_template_id_e279115e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=e279115e& */ "./resources/js/components/common/Input.vue?vue&type=template&id=e279115e&");
/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ "./resources/js/components/common/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Input_vue_vue_type_template_id_e279115e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Input_vue_vue_type_template_id_e279115e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/Input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/Input.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/common/Input.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/Input.vue?vue&type=template&id=e279115e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/common/Input.vue?vue&type=template&id=e279115e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_e279115e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=template&id=e279115e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Input.vue?vue&type=template&id=e279115e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_e279115e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_e279115e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common/bBtn.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/common/bBtn.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bBtn_vue_vue_type_template_id_c70daf7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bBtn.vue?vue&type=template&id=c70daf7a& */ "./resources/js/components/common/bBtn.vue?vue&type=template&id=c70daf7a&");
/* harmony import */ var _bBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bBtn.vue?vue&type=script&lang=js& */ "./resources/js/components/common/bBtn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bBtn_vue_vue_type_template_id_c70daf7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bBtn_vue_vue_type_template_id_c70daf7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/bBtn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/bBtn.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/common/bBtn.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./bBtn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/bBtn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/bBtn.vue?vue&type=template&id=c70daf7a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/common/bBtn.vue?vue&type=template&id=c70daf7a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bBtn_vue_vue_type_template_id_c70daf7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./bBtn.vue?vue&type=template&id=c70daf7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/bBtn.vue?vue&type=template&id=c70daf7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bBtn_vue_vue_type_template_id_c70daf7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bBtn_vue_vue_type_template_id_c70daf7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common/loading.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/common/loading.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_vue_vue_type_template_id_688edfba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=688edfba&scoped=true& */ "./resources/js/components/common/loading.vue?vue&type=template&id=688edfba&scoped=true&");
/* harmony import */ var _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=script&lang=js& */ "./resources/js/components/common/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loading_vue_vue_type_template_id_688edfba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loading_vue_vue_type_template_id_688edfba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "688edfba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/loading.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/common/loading.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/loading.vue?vue&type=template&id=688edfba&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/common/loading.vue?vue&type=template&id=688edfba&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_688edfba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=template&id=688edfba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/loading.vue?vue&type=template&id=688edfba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_688edfba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_688edfba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/configs/MixinForm.js":
/*!******************************************************!*\
  !*** ./resources/js/components/configs/MixinForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_bBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/bBtn */ "./resources/js/components/common/bBtn.vue");
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Input */ "./resources/js/components/common/Input.vue");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Helper */ "./resources/js/components/configs/Helper.js");
/* harmony import */ var _MixinHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MixinHelper */ "./resources/js/components/configs/MixinHelper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_MixinHelper__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    bBtn: _common_bBtn__WEBPACK_IMPORTED_MODULE_0__["default"],
    InputField: _common_Input__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: false,
      helper: _Helper__WEBPACK_IMPORTED_MODULE_2__,
      formEdit: true,
      showForm: true,
      token: $('meta[name="csrf-token"]').attr('content'),
      trashMode: this.$router.currentRoute.name.toLocaleLowerCase().includes('trash')
    };
  },
  computed: {
    moduleName: function moduleName() {
      return this.config.id;
    }
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      var _this = this;

      return PERMISSION_USER.find(function (item) {
        return item.module == _this.moduleId && item.method == permission;
      });
    },

    /**
     * GET RECORD BY ID
     */
    getRecordById: function getRecordById(id) {
      var _this2 = this;

      this.loadingArc();
      var requestApi = this.$http.get(this.getApiRecordById(id));
      return requestApi.then(function (success) {
        _this2.afterGetRecord(success);
      }, function (response) {});
    },

    /**
     * PREPARE DATA COMMON
     */
    prepareDataCommon: function prepareDataCommon() {
      var _this3 = this;

      this.beforeGetDataCommon();
      this.loadingArc();
      var _token = this.token;
      this.$nextTick(function () {
        return _this3.$http.post(_this3.commonDataApi, _objectSpread({
          _token: _token
        }, _this3.getParamsCommon())).then(function (success) {
          _this3.loadingDone();

          _this3.afterGetDataCommon(success);
        }, function (response) {
          _this3.getDataCommonFail(response);
        });
      });
    },

    /**
     * UPDATE
     */
    update: function update() {
      var _this4 = this;

      if (!this.validateUpdate()) return;
      this.beforeUpdate();
      this.loadingArc();
      this.model._token = this.token;
      this.$nextTick(function () {
        var requestApi = _this4.$http.post(_this4.updateApi, _this4.getPayloadUpdate());

        return requestApi.then(function (success) {
          _this4.loadingDone();

          _this4.updatedDone(success);

          _this4.updatedCompletely(success);

          _this4.afterUpdated(success);
        }, function (response) {
          if (response.status === 401) toastr.error('Permission Denied.');

          _this4.updateError(response);

          _this4.afterUpdated(response);
        }).then(function () {});
      });
    },

    /**
     * CREATE
     */
    create: function create() {
      var _this5 = this;

      if (!this.validateCreation()) return;
      this.beforeCreate();
      this.loadingArc();
      this.model._token = this.token;
      this.$nextTick(function () {
        var requestApi = _this5.$http.post(_this5.createApi, _this5.model, {});

        return requestApi.then(function (success) {
          _this5.loadingDone();

          _this5.createdDone(success);

          _this5.createdCompletely(success);

          _this5.afterCreated(success);
        }, function (response) {
          _this5.createError(response);

          _this5.afterCreated(response);
        }).then(function () {});
      });
    },

    /**
     *SOFT DELETE
     * @param id
     */
    softDeleteRecord: function softDeleteRecord(id) {
      var _this6 = this;

      this.beforeDelete();

      if (confirm("Bạn có thực sự muốn xoá không?")) {
        this.loadingArc();
        this.$nextTick(function () {
          var requestApi = _this6.$http.post(_this6.softDeleteApi, {
            id: id,
            _token: _this6.token
          });

          return requestApi.then(function (success) {
            _this6.loadingDone();

            _this6.deletedDone(success);

            _this6.deletedCompletely(success);

            _this6.afterDeleted(success);
          }, function (response) {
            _this6.loadingDone();

            _this6.deleteError(response);

            _this6.afterDeleted(response);
          }).then(function () {});
        });
      }
    },

    /**
     * DELETE
     * @param id
     */
    deleteRecord: function deleteRecord(id) {
      var _this7 = this;

      this.beforeDelete();

      if (confirm("Bạn có thực sự muốn xoá vĩnh viễn không?")) {
        this.loadingArc();
        this.$nextTick(function () {
          var requestApi = _this7.$http.post(_this7.deleteApi, {
            id: id,
            _token: _this7.token
          });

          return requestApi.then(function (success) {
            _this7.loadingDone();

            _this7.deletedDone(success);

            _this7.deletedCompletely(success);

            _this7.afterDeleted(success);
          }, function (response) {
            _this7.loadingDone();

            _this7.deleteError(response);

            _this7.afterDeleted(response);
          }).then(function () {});
        });
      }
    },

    /**
     * RESTORE
     * @param id
     */
    restoreRecord: function restoreRecord(id) {
      var _this8 = this;

      this.beforeRestore();

      if (confirm("Bạn có thực sự muốn phục hồi không?")) {
        this.loadingArc();
        this.$nextTick(function () {
          var requestApi = _this8.$http.post(_this8.restoreApi, {
            id: id,
            _token: _this8.token
          });

          return requestApi.then(function (success) {
            _this8.loadingDone();

            _this8.restoreDone(success);

            _this8.restoreCompletely(success);

            _this8.afterRestore(success);
          }, function (response) {
            _this8.loadingDone();

            _this8.restoreError(response);

            _this8.afterRestore(response);
          }).then(function () {});
        });
      }
    },

    /**
     * GET REFERENCE
     */
    getReference: function getReference() {
      var _this9 = this;

      this.beforeGetReference();
      this.loadingArc();
      var _token = this.token;
      this.$nextTick(function () {
        return _this9.$http.post(_this9.referenceApi, {
          _token: _this9.token
        }).then(function (success) {
          _this9.loadingDone();

          _this9.afterGetReference(success);
        }, function (response) {
          _this9.getDataCommonFail(response);
        });
      });
    },
    loadingArc: function loadingArc() {
      this.loading = true;
    },
    loadingDone: function loadingDone() {
      var _this10 = this;

      setTimeout(function () {
        _this10.loading = false;
      }, 1000);
    },
    /// REFERENCE
    beforeGetReference: function beforeGetReference() {},
    afterGetReference: function afterGetReference() {},
    /// CREATE
    validateCreation: function validateCreation() {
      return true;
    },
    createError: function createError(data) {},
    createdCompletely: function createdCompletely(data) {},
    createHasDuplicate: function createHasDuplicate(success) {},
    afterCreated: function afterCreated() {},
    beforeCreate: function beforeCreate() {},
    createdDone: function createdDone(success) {},
    /// GET DATA COMMON
    getParamsCommon: function getParamsCommon() {
      return {};
    },
    beforeGetDataCommon: function beforeGetDataCommon() {},
    afterGetDataCommon: function afterGetDataCommon(data) {},
    getDataCommonFail: function getDataCommonFail(data) {},
    /// GET RECORD BY ID
    getApiRecordById: function getApiRecordById(id) {
      return this.getRecordApi + '?id=' + id;
    },
    afterGetRecord: function afterGetRecord(success) {},
    ///// UPDATE
    validateUpdate: function validateUpdate() {
      return true;
    },
    getPayloadUpdate: function getPayloadUpdate() {
      return this.model;
    },
    beforeUpdate: function beforeUpdate() {},
    updateError: function updateError(data) {},
    updatedCompletely: function updatedCompletely(data) {},
    afterUpdated: function afterUpdated() {},
    updatedDone: function updatedDone(success) {},
    //// DELETE
    beforeDelete: function beforeDelete() {},
    deletedDone: function deletedDone(success) {},
    deletedCompletely: function deletedCompletely(success) {
      toastr.success('Xoá thành công!');
      this.prepareDataCommon();
    },
    afterDeleted: function afterDeleted(success) {},
    deleteError: function deleteError(response) {},
    //// RESTORE
    beforeRestore: function beforeRestore() {},
    restoreDone: function restoreDone() {},
    restoreCompletely: function restoreCompletely() {
      toastr.success('Phục hồi thành công!');
      this.prepareDataCommon();
    },
    afterRestore: function afterRestore() {},
    restoreError: function restoreError() {}
  }
});

/***/ }),

/***/ "./resources/js/components/configs/MixinHelper.js":
/*!********************************************************!*\
  !*** ./resources/js/components/configs/MixinHelper.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getCurrentScreenWidth: function getCurrentScreenWidth() {
      return $(document).width();
    },
    isMobile: function isMobile() {
      return this.getCurrentScreenWidth() < 450;
    },
    parseResponse: function parseResponse(res) {
      return res;
    },
    getReferenceById: function getReferenceById(id, item) {
      return reference[item].find(function (item) {
        return item.id === id;
      });
    },
    getModelByConfigModel: function getModelByConfigModel(config) {
      var model = {};
      config.forEach(function (item) {
        if (item.model) {
          if (item.defaultValue) {
            model[item.model] = item.defaultValue;
          } else {
            model[item.model] = null;
          }
        }
      });
      return model;
    },
    validateModel: function validateModel() {
      var allConfig = [],
          model = this.model,
          config = this.configModel;
      config.forEach(function (item) {
        item.value = model[item.model];
        item.error = null;
        allConfig.push(item);
      });
      var validateRequired = this.validateRequired(allConfig);
      this.configModel = this.validateCustom(validateRequired);
      this.forceReRenderComponent();
      return !this.checkHasValidateError(validateRequired);
    },
    validateRequired: function validateRequired(config) {
      var arr = [];
      config.forEach(function (item) {
        if (item.required && (!item.value || item.value.length == 0)) {
          item.error = 'Vui lòng nhập ' + item.title.toLocaleLowerCase();
        }

        arr.push(item);
      });
      return arr;
    },
    validateLength: function validateLength() {},
    validateCustom: function validateCustom(model) {
      return model;
    },
    checkHasValidateError: function checkHasValidateError(validate) {
      var status = false;

      for (var i = 0; i < validate.length; i++) {
        if (validate[i].error && validate[i].error.length > 0) {
          status = true;
          toastr.error("Tạo kho hàng mới không thành công!");
          break;
        }
      }

      return status;
    },
    changeModeForm: function changeModeForm() {
      var config = this.configModel,
          newStatus = [];
      var status = !this.formEdit;
      config.forEach(function (item) {
        if (!item.alwayDisable) {
          item.disable = !status;
        }

        newStatus.push(item);
      });
      this.formEdit = status;
      this.configModel = newStatus;
      this.forceReRenderComponent();
    },
    forceReRenderComponent: function forceReRenderComponent() {
      var _this = this;

      this.showForm = false;
      this.$nextTick(function () {
        _this.showForm = true;
      });
    },
    formatDateSubmit: function formatDateSubmit() {
      var _this2 = this;

      var formatFrom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'DD/MM/YYYY';
      var formatTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
      this.configModel.forEach(function (item) {
        if (item.type == 'date' && _this2.model[item.model] && _this2.model[item.model].length > 0) {
          // console.log(this.model[item.model])
          _this2.model[item.model] = moment(_this2.model[item.model], formatFrom).format(formatTo);
        }
      });
    }
  }
});

/***/ })

}]);