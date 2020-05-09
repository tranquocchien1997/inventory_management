(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/transportVendor/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/transportVendor/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/form */ "./resources/js/components/common/form.vue");
/* harmony import */ var _configs_modules_TransportVendorConfigForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/modules/TransportVendorConfigForm */ "./resources/js/components/configs/modules/TransportVendorConfigForm.js");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Form: _common_form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      config: _configs_modules_TransportVendorConfigForm__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/transportVendor/create.vue?vue&type=template&id=081b83f6&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/transportVendor/create.vue?vue&type=template&id=081b83f6& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("Form", { attrs: { type: "create", config: _vm.config } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/configs/modules/TransportVendorConfigForm.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/configs/modules/TransportVendorConfigForm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configForm */ "./resources/js/components/configs/configForm.js");
/* harmony import */ var _TransportVendorModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransportVendorModel */ "./resources/js/components/configs/modules/TransportVendorModel.js");


var config = _configForm__WEBPACK_IMPORTED_MODULE_0__["default"];
config.id = 'transport_vendor';
config.title = 'Thông tin đối tác vận chuyển';
config.modelField = _TransportVendorModel__WEBPACK_IMPORTED_MODULE_1__["default"];
config.createApi = API.CREATE_TRANSPORT_VENDOR;
config.updateApi = API.UPDATE_TRANSPORT_VENDOR;
config.commonDataApi = API.GET_TRANSPORT_VENDOR;
config.referenceApi = API.REFERENCE_TRANSPORT_VENDOR;
config.listPath = PAGE.LIST_TRANSPORT_VENDOR;
config.updateNoti = "Cập nhật thông tin đối tác vận chuyển thành công!";
config.createNoti = "Tạo đối tác vận chuyển mới thành công!";
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./resources/js/components/configs/modules/TransportVendorModel.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/configs/modules/TransportVendorModel.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Tên đối tác',
  model: 'name',
  type: 'string'
}]);

/***/ }),

/***/ "./resources/js/components/transportVendor/create.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/transportVendor/create.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_081b83f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=081b83f6& */ "./resources/js/components/transportVendor/create.vue?vue&type=template&id=081b83f6&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/transportVendor/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_081b83f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_081b83f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/transportVendor/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/transportVendor/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/transportVendor/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/transportVendor/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/transportVendor/create.vue?vue&type=template&id=081b83f6&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/transportVendor/create.vue?vue&type=template&id=081b83f6& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_081b83f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=081b83f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/transportVendor/create.vue?vue&type=template&id=081b83f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_081b83f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_081b83f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);