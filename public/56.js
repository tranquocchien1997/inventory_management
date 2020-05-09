(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vehicle/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vehicle/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_panelTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/panelTable */ "./resources/js/components/common/panelTable.vue");
/* harmony import */ var _configs_panelTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/panelTable */ "./resources/js/components/configs/panelTable.js");
/* harmony import */ var _configs_MixinForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/MixinForm */ "./resources/js/components/configs/MixinForm.js");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_configs_MixinForm__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    PanelTable: _common_panelTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      configs: []
    };
  },
  created: function created() {
    var config = JSON.parse(JSON.stringify(_configs_panelTable__WEBPACK_IMPORTED_MODULE_1__["default"]));
    config.id = 'vehicle';

    if (this.trashMode) {
      config["delete"].api = API.DELETE_VEHICLE;
      config.restore.api = API.RESTORE_VEHICLE;
      config.list.api = API.TRASH_VEHICLE;
      config.list.path = PAGE.LIST_VEHICLE;
    } else {
      config.list.api = API.LIST_VEHICLE;
      config.softDelete.api = API.SOFT_DELETE_VEHICLE;
      config.update.path = PAGE.UPDATE_VEHICLE;
      config.create.path = PAGE.CREATE_VEHICLE;
      config.trash.path = PAGE.TRASH_VEHICLE;
    }

    config.titlePanel = 'Danh sách phương tiện vận chuyển';
    config.titleColumn = {
      transport_type: 'Hình thức vận chuyển',
      transport_vendor: 'Đối tác',
      code: 'Mã phương tiện',
      name: 'Tên phương tiện',
      updated_at: 'Ngày cập nhật',
      created_at: 'Ngày tạo',
      action: 'Thao tác'
    };
    this.configs = config;
  },
  methods: {
    parseResponse: function parseResponse(res) {
      var _this = this;

      return res.map(function (item) {
        item.created_at = _this.helper.formatDateTime(item.created_at);
        item.updated_at = _this.helper.formatDateTime(item.updated_at);
        return item;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vehicle/index.vue?vue&type=template&id=3b0b9874&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vehicle/index.vue?vue&type=template&id=3b0b9874& ***!
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
  return _c(
    "div",
    [
      _c("PanelTable", {
        attrs: { configs: _vm.configs, parsePayload: _vm.parseResponse }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/vehicle/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/vehicle/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3b0b9874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3b0b9874& */ "./resources/js/components/vehicle/index.vue?vue&type=template&id=3b0b9874&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/vehicle/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3b0b9874___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3b0b9874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vehicle/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vehicle/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/vehicle/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vehicle/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vehicle/index.vue?vue&type=template&id=3b0b9874&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/vehicle/index.vue?vue&type=template&id=3b0b9874& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b0b9874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3b0b9874& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vehicle/index.vue?vue&type=template&id=3b0b9874&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b0b9874___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b0b9874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);