(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/inventory/update.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/inventory/update.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/form */ "./resources/js/components/common/form.vue");
/* harmony import */ var _configs_modules_InventoryConfigForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/modules/InventoryConfigForm */ "./resources/js/components/configs/modules/InventoryConfigForm.js");
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
      config: _configs_modules_InventoryConfigForm__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/inventory/update.vue?vue&type=template&id=95d2ddb2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/inventory/update.vue?vue&type=template&id=95d2ddb2& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("Form", { attrs: { type: "update", config: _vm.config } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/configs/modules/InventoryConfigForm.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/configs/modules/InventoryConfigForm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configForm */ "./resources/js/components/configs/configForm.js");
/* harmony import */ var _InventoryModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryModel */ "./resources/js/components/configs/modules/InventoryModel.js");


var config = _configForm__WEBPACK_IMPORTED_MODULE_0__["default"];

function getDropdownField(item) {
  if (item.model == 'user_id') {
    return reference.users.map(function (item) {
      return {
        id: item.id,
        value: item.name
      };
    });
  } else if (item.model == 'type') {
    return reference.inventoryType.map(function (item) {
      return {
        id: item.id,
        value: item.display_value
      };
    });
  }
}

config.id = 'inventory';
config.title = 'Thông tin kho';
config.modelField = _InventoryModel__WEBPACK_IMPORTED_MODULE_1__["default"];
config.createApi = API.CREATE_INVENTORY;
config.updateApi = API.UPDATE_INVENTORY;
config.commonDataApi = API.GET_INVENTORY;
config.referenceApi = API.REFERENCE_INVENTORY;
config.listPath = PAGE.LIST_INVENTORY;
config.updateNoti = "Cập nhật thông tin kho hàng thành công!";
config.createNoti = "Tạo kho hàng mới thành công!", config.getDropdownField = getDropdownField;
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./resources/js/components/configs/modules/InventoryModel.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/configs/modules/InventoryModel.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Người phụ trách',
  model: 'user_id',
  type: 'dropdown',
  data: []
}, {
  title: 'Loại kho',
  model: 'type',
  type: 'dropdown',
  data: [],
  required: true
}, // {},
{
  title: 'Mã kho',
  model: 'code',
  type: 'string',
  required: true
}, {
  title: 'Tên kho',
  model: 'name',
  type: 'string',
  required: true
}, // {
//     title: 'Tồn kho khả dụng',
//     model: 'quantity',
//     type: 'number',
//     required: true
// },
// {
//     title: 'Tồn kho hiện tại',
//     model: 'current_quantity',
//     type: 'number',
//     required: true
// },
{
  title: 'Địa chỉ',
  model: 'address',
  type: 'string'
}, {
  title: 'Mô tả',
  model: 'description',
  type: 'textArea'
}]);

/***/ }),

/***/ "./resources/js/components/inventory/update.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/inventory/update.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_vue_vue_type_template_id_95d2ddb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.vue?vue&type=template&id=95d2ddb2& */ "./resources/js/components/inventory/update.vue?vue&type=template&id=95d2ddb2&");
/* harmony import */ var _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.vue?vue&type=script&lang=js& */ "./resources/js/components/inventory/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_vue_vue_type_template_id_95d2ddb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _update_vue_vue_type_template_id_95d2ddb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/inventory/update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/inventory/update.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/inventory/update.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/inventory/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/inventory/update.vue?vue&type=template&id=95d2ddb2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/inventory/update.vue?vue&type=template&id=95d2ddb2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_95d2ddb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=template&id=95d2ddb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/inventory/update.vue?vue&type=template&id=95d2ddb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_95d2ddb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_95d2ddb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);