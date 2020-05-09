(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deliveryTransport/update.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/deliveryTransport/update.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/form */ "./resources/js/components/common/form.vue");
/* harmony import */ var _configs_modules_DeliveryTransportConfigForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/modules/DeliveryTransportConfigForm */ "./resources/js/components/configs/modules/DeliveryTransportConfigForm.js");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode', 'setData', 'data'],
  components: {
    Form: _common_form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      config: _configs_modules_DeliveryTransportConfigForm__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deliveryTransport/update.vue?vue&type=template&id=75b06c4e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/deliveryTransport/update.vue?vue&type=template&id=75b06c4e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      type: _vm.data ? _vm.data.type : "update",
      config: _vm.getConfig,
      mode: _vm.mode,
      setData: _vm.setData,
      data: _vm.data
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/configs/modules/DeliveryTransportConfigForm.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/configs/modules/DeliveryTransportConfigForm.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configForm */ "./resources/js/components/configs/configForm.js");
/* harmony import */ var _DeliveryTransportModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliveryTransportModel */ "./resources/js/components/configs/modules/DeliveryTransportModel.js");


var config = JSON.parse(JSON.stringify(_DeliveryTransportModel__WEBPACK_IMPORTED_MODULE_1__["default"]));

function getDropdownField(item) {
  if (item.model == 'action_id' && reference.action) {
    return reference.action.map(function (item) {
      return {
        id: item.id,
        value: item.code
      };
    });
  } else if (item.model == 'delivery_id' && reference.delivery) {
    return reference.delivery.map(function (item) {
      return {
        id: item.id,
        value: item.code
      };
    });
  } else if (item.model == 'transport_id' && reference.transport) {
    return reference.transport.map(function (item) {
      return {
        id: item.id,
        value: item.code
      };
    });
  } else if (item.model == 'status' && reference.status) {
    return reference.status.map(function (item) {
      return {
        id: item.id,
        value: item.display_value
      };
    });
  }
}

config.id = 'delivery_transport';
config.title = 'Thông tin vận chuyển';
config.modelField = _DeliveryTransportModel__WEBPACK_IMPORTED_MODULE_1__["default"];
config.createApi = API.CREATE_DELIVERY_TRANSPORT;
config.updateApi = API.UPDATE_DELIVERY_TRANSPORT;
config.commonDataApi = API.GET_DELIVERY_TRANSPORT;
config.referenceApi = API.REFERENCE_DELIVERY_TRANSPORT; // config.listPath = PAGE.LIST_DELIVERY_TRANSPORT

config.softDeleteApi = API.DELETE_DELIVERY_TRANSPORT;
config.updateNoti = "Cập nhật thành công!";
config.createNoti = "Tạo mới thành công!";
config.getDropdownField = getDropdownField;
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./resources/js/components/configs/modules/DeliveryTransportModel.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/configs/modules/DeliveryTransportModel.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Phiếu kho',
  model: 'action_id',
  type: 'dropdown',
  data: [],
  required: true
}, {
  title: 'Vận chuyển',
  model: 'delivery_id',
  type: 'dropdown',
  data: [],
  required: true
}, {
  title: 'Đơn vị vận chuyển',
  model: 'transport_id',
  type: 'dropdown',
  data: [],
  required: true
}, {
  title: 'Trạng thái',
  model: 'status',
  type: 'dropdown',
  data: [],
  defaultValue: DEFAULT_STATUS_ID
}, {
  title: 'Số hàng dự kiến',
  model: 'amount',
  type: 'number'
}, {
  title: 'Số hàng đã giao',
  model: 'amount_finish',
  type: 'number'
}, {
  title: 'Ghi chú',
  model: 'note',
  type: 'textArea'
}, {
  title: 'Nơi xuất phá',
  model: 'departure',
  type: 'string'
}, {
  title: 'Ngày xuất phát',
  model: 'date_start',
  type: 'date'
}, {
  title: 'Đích đến',
  model: 'destination',
  type: 'string'
}, {
  title: 'Ngày đến đích',
  model: 'date_end',
  type: 'date'
}]);

/***/ }),

/***/ "./resources/js/components/deliveryTransport/update.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/deliveryTransport/update.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_vue_vue_type_template_id_75b06c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.vue?vue&type=template&id=75b06c4e& */ "./resources/js/components/deliveryTransport/update.vue?vue&type=template&id=75b06c4e&");
/* harmony import */ var _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.vue?vue&type=script&lang=js& */ "./resources/js/components/deliveryTransport/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_vue_vue_type_template_id_75b06c4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _update_vue_vue_type_template_id_75b06c4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/deliveryTransport/update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/deliveryTransport/update.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/deliveryTransport/update.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deliveryTransport/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/deliveryTransport/update.vue?vue&type=template&id=75b06c4e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/deliveryTransport/update.vue?vue&type=template&id=75b06c4e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_75b06c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=template&id=75b06c4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deliveryTransport/update.vue?vue&type=template&id=75b06c4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_75b06c4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_75b06c4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);