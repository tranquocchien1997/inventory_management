(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/transport/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/transport/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/form */ "./resources/js/components/common/form.vue");
/* harmony import */ var _configs_modules_TransportConfigForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/modules/TransportConfigForm */ "./resources/js/components/configs/modules/TransportConfigForm.js");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode', 'setData'],
  components: {
    Form: _common_form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      config: _configs_modules_TransportConfigForm__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  computed: {
    getConfig: function getConfig() {
      if (this.mode == 'general') {
        this.config.listPath = null;
      }

      return this.config;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/transport/create.vue?vue&type=template&id=5a2dd026&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/transport/create.vue?vue&type=template&id=5a2dd026& ***!
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
  return _c("Form", {
    attrs: {
      type: "create",
      config: _vm.getConfig,
      mode: _vm.mode,
      setData: _vm.setData
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/configs/modules/TransportConfigForm.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/configs/modules/TransportConfigForm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configForm */ "./resources/js/components/configs/configForm.js");
/* harmony import */ var _TransportModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransportModel */ "./resources/js/components/configs/modules/TransportModel.js");


var config = _configForm__WEBPACK_IMPORTED_MODULE_0__["default"];

function getDropdownField(item) {
  if (item.model == 'transport_type_id') {
    return reference.transportType.map(function (item) {
      return {
        id: item.id,
        value: item.display_value
      };
    });
  } else if (item.model == 'driver_id') {
    return reference.driver.map(function (item) {
      return {
        id: item.id,
        value: item.name
      };
    });
  } else if (item.model == 'vehicle_id') {
    return reference.vehicle.map(function (item) {
      return {
        id: item.id,
        value: item.name
      };
    });
  } else if (item.model == 'transport_vendor_id') {
    return reference.transportVendor.map(function (item) {
      return {
        id: item.id,
        value: item.name
      };
    });
  }
}

config.id = 'transport';
config.title = 'Thông tin đơn vị vận chuyển';
config.modelField = _TransportModel__WEBPACK_IMPORTED_MODULE_1__["default"];
config.createApi = API.CREATE_TRANSPORT;
config.updateApi = API.UPDATE_TRANSPORT;
config.commonDataApi = API.GET_TRANSPORT;
config.referenceApi = API.REFERENCE_TRANSPORT;
config.listPath = PAGE.LIST_TRANSPORT;
config.updateNoti = "Cập nhật thông tin đơn vị vận chuyển thành công!";
config.createNoti = "Tạo đơn vị vận chuyển mới thành công!";
config.getDropdownField = getDropdownField;
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./resources/js/components/configs/modules/TransportModel.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/configs/modules/TransportModel.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Loại vận chuyển',
  model: 'transport_type_id',
  type: 'dropdown',
  data: []
}, {
  title: 'Mã đơn vị',
  model: 'code',
  type: 'string'
}, {
  title: 'Người vận chuyển',
  model: 'driver_id',
  type: 'dropdown',
  data: []
}, {
  title: 'Phương tiện vận chuyển',
  model: 'vehicle_id',
  type: 'dropdown',
  data: []
}, {
  title: 'Đối tác vận chuyển',
  model: 'transport_vendor_id',
  type: 'dropdown',
  data: []
}]);

/***/ }),

/***/ "./resources/js/components/transport/create.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/transport/create.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_5a2dd026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=5a2dd026& */ "./resources/js/components/transport/create.vue?vue&type=template&id=5a2dd026&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/transport/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_5a2dd026___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_5a2dd026___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/transport/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/transport/create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/transport/create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/transport/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/transport/create.vue?vue&type=template&id=5a2dd026&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/transport/create.vue?vue&type=template&id=5a2dd026& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5a2dd026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=5a2dd026& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/transport/create.vue?vue&type=template&id=5a2dd026&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5a2dd026___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5a2dd026___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);