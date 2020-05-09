(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/report/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/report/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs_MixinForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/MixinForm */ "./resources/js/components/configs/MixinForm.js");
/* harmony import */ var _common_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/loading */ "./resources/js/components/common/loading.vue");
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
  mixins: [_configs_MixinForm__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    Loading: _common_loading__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['type', 'config'],
  data: function data() {
    return {
      configModel: [],
      model: {},
      createApi: '',
      updateApi: '',
      commonDataApi: '',
      listPath: '',
      referenceApi: ''
    };
  },
  created: function created() {
    this.createApi = API.CREATE_REPORT;
    this.configModel = [{
      title: 'Loại báo cáo',
      model: 'type',
      type: 'dropdown',
      data: [],
      required: true
    }, {
      title: 'Từ ngày',
      model: 'from_date',
      type: 'date',
      required: true
    }, {
      title: 'Đến hết ngày',
      model: 'to_date',
      type: 'date'
    }];
  },
  mounted: function mounted() {
    this.model = this.getModelByConfigModel(this.configModel);
  },
  methods: {
    create: function create() {
      return;
      var route = this.$router.resolve({
        path: this.helper.parseFullPathToShortPath(API.CREATE_REPORT),
        query: this.model
      });
      window.open(route.href, '_blank');
    },
    getParamsCommon: function getParamsCommon() {
      return {
        id: this.$route.query.id
      };
    },
    afterGetDataCommon: function afterGetDataCommon(success) {
      var _this = this;

      var res = success.data.data;
      Object.keys(this.model).forEach(function (item) {
        _this.model[item] = res[item];
      });
    },
    validateCreation: function validateCreation() {
      return this.validateModel();
    },
    createdCompletely: function createdCompletely(response) {
      var res = response.data.data;

      if (res === true) {
        toastr.success(this.config.createNoti);
        this.$router.push(this.helper.parseFullPathToShortPath(this.listPath));
      } else {
        toastr.error(res.msg);
      }
    },
    validateUpdate: function validateUpdate() {
      return this.validateModel();
    },
    updatedCompletely: function updatedCompletely(success) {
      toastr.success(this.config.updateNoti);
      this.changeModeForm();
    },
    reloadReference: function reloadReference() {
      this.getReference();
    },
    afterGetReference: function afterGetReference(success) {
      reference = success.data.data;
      this.forceReRenderComponent();
    },
    getDropdownField: function getDropdownField(item) {
      if (item.model == 'type') {
        return [{
          id: 1,
          value: 'Theo dõi thực hiện hợp đồng'
        }, {
          id: 2,
          value: 'Chi tiết phải giao'
        }];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/report/index.vue?vue&type=template&id=4d7bc882&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/report/index.vue?vue&type=template&id=4d7bc882& ***!
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
    { staticClass: "card card-primary card-outline" },
    [
      _c("Loading", { attrs: { show: _vm.loading } }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.configModel, function(item) {
            return _c(
              "div",
              { staticClass: "col-md-4 form-group" },
              [
                item
                  ? _c("InputField", {
                      attrs: {
                        item: item,
                        model: _vm.model,
                        data: _vm.getDropdownField(item)
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm.formEdit
        ? _c(
            "div",
            { staticClass: "card-footer" },
            [
              _c("bBtn", {
                attrs: {
                  title: "createTitle",
                  color: "primary",
                  onClick: _vm.create
                }
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Tạo báo cáo")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/report/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/report/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4d7bc882___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4d7bc882& */ "./resources/js/components/report/index.vue?vue&type=template&id=4d7bc882&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/report/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4d7bc882___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4d7bc882___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/report/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/report/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/report/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/report/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/report/index.vue?vue&type=template&id=4d7bc882&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/report/index.vue?vue&type=template&id=4d7bc882& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d7bc882___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4d7bc882& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/report/index.vue?vue&type=template&id=4d7bc882&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d7bc882___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d7bc882___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);