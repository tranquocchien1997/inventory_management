(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/form */ "./resources/js/components/common/form.vue");
/* harmony import */ var _configs_modules_ActionConfigForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/modules/ActionConfigForm */ "./resources/js/components/configs/modules/ActionConfigForm.js");
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
      config: _configs_modules_ActionConfigForm__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/create.vue?vue&type=template&id=e463d78c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/create.vue?vue&type=template&id=e463d78c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      type: _vm.data ? _vm.data.type : "create",
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

/***/ "./resources/js/components/action/create.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/action/create.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_e463d78c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=e463d78c& */ "./resources/js/components/action/create.vue?vue&type=template&id=e463d78c&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/action/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_e463d78c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_e463d78c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/action/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/action/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/action/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/action/create.vue?vue&type=template&id=e463d78c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/action/create.vue?vue&type=template&id=e463d78c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_e463d78c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=e463d78c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/create.vue?vue&type=template&id=e463d78c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_e463d78c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_e463d78c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/configs/modules/ActionConfigForm.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/configs/modules/ActionConfigForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configForm */ "./resources/js/components/configs/configForm.js");
/* harmony import */ var _ActionModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionModel */ "./resources/js/components/configs/modules/ActionModel.js");


var config = JSON.parse(JSON.stringify(_configForm__WEBPACK_IMPORTED_MODULE_0__["default"]));

function getDropdownField(item) {
  if (item.model == 'action_type_id' && reference.actionType) {
    return reference.actionType.map(function (item) {
      return {
        id: item.id,
        value: item.display_value
      };
    });
  } else if (item.model == 'contract_id' && reference.contract) {
    return reference.contract.map(function (item) {
      return {
        id: item.id,
        value: item.code
      };
    });
  } else if (item.model == 'creator_id' && reference.user) {
    return reference.user.map(function (item) {
      return {
        id: item.id,
        value: item.name
      };
    });
  } else if ((item.model == 'inventory_id' || item.model == 'inventory_receive_id') && reference.inventory) {
    return reference.inventory.map(function (item) {
      return {
        id: item.id,
        value: item.name
      };
    });
  } else if (item.model == 'notification_id' && reference.notification) {
    return reference.notification.map(function (item) {
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

config.id = 'action';
config.title = 'Thông tin phiếu kho';
config.modelField = _ActionModel__WEBPACK_IMPORTED_MODULE_1__["default"];
config.createApi = API.CREATE_ACTION;
config.updateApi = API.UPDATE_ACTION;
config.commonDataApi = API.GET_ACTION;
config.referenceApi = API.REFERENCE_ACTION;
config.listPath = PAGE.LIST_ACTION;
config.softDeleteApi = API.DELETE_ACTION;
config.updateNoti = "Cập nhật thông tin phiếu thành công!";
config.createNoti = "Tạo phiếu kho mới thành công!";
config.getDropdownField = getDropdownField;
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./resources/js/components/configs/modules/ActionModel.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/configs/modules/ActionModel.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Loại phiếu kho',
  model: 'action_type_id',
  type: 'dropdown',
  data: [],
  required: true
}, {
  title: 'Kho',
  model: 'inventory_id',
  type: 'dropdown',
  data: [],
  required: true
}, {
  title: 'Kho nhận (luân chuyển)',
  model: 'inventory_receive_id',
  type: 'dropdown',
  data: []
}, {
  title: 'Hợp đồng',
  model: 'contract_id',
  type: 'dropdown',
  data: []
}, {
  title: 'Thông báo',
  model: 'notification_id',
  type: 'dropdown',
  data: []
}, {
  title: 'Người tạo',
  model: 'creator_id',
  type: 'dropdown',
  alwayDisable: true,
  disable: true,
  data: [],
  defaultValue: USER
}, {
  title: 'Mã phiếu',
  model: 'code',
  type: 'string'
}, {
  title: 'Số hàng',
  model: 'quantity',
  type: 'number',
  required: true
}, {
  title: 'Số tiền',
  model: 'amount',
  type: 'currency'
}, {
  title: 'Trạng thái',
  model: 'status',
  type: 'dropdown',
  data: [],
  defaultValue: DEFAULT_STATUS_ID
}, {
  title: 'Ghi chú',
  model: 'note',
  type: 'textArea'
}]);

/***/ })

}]);