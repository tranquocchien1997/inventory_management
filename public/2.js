(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs_MixinForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/MixinForm */ "./resources/js/components/configs/MixinForm.js");
/* harmony import */ var _common_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/loading */ "./resources/js/components/common/loading.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  mixins: [_configs_MixinForm__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    Loading: _common_loading__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['type', 'config', 'mode', 'setData', 'data'],
  data: function data() {
    return {
      configModel: [],
      model: {},
      createApi: '',
      updateApi: '',
      softDeleteApi: '',
      commonDataApi: '',
      listPath: '',
      updatePath: '',
      referenceApi: '',
      id: null,
      typeView: null,
      moduleId: this.config.id
    };
  },
  created: function created() {
    var config = this.config;
    this.createApi = config.createApi;
    this.commonDataApi = config.commonDataApi;
    this.referenceApi = config.referenceApi;
    this.softDeleteApi = config.softDeleteApi;
    this.listPath = config.listPath;
    this.updatePath = config.updatePath;
    this.configModel = JSON.parse(JSON.stringify(config.modelField));
    this.typeView = this.type;
    this.model = this.getModelByConfigModel(this.configModel);

    if (this.data && this.data.id) {
      this.id = this.data.id;
    }
  },
  computed: {
    isGeneral: function isGeneral() {
      return this.mode == 'general';
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.reloadReference();

    if (this.typeView == 'update' && this.$route.query.id || this.id && this.isGeneral) {
      this.prepareDataCommon();
      this.changeModeForm();
    } else {
      this.loadingArc();
      setTimeout(function () {
        _this.loadingDone();
      }, 100);
    }

    if (this.isGeneral && this.data) {
      this.model = _objectSpread({}, this.model, {}, this.data.model);
    }
  },
  methods: {
    getParamsCommon: function getParamsCommon() {
      return {
        id: this.id ? this.id : this.$route.query.id
      };
    },
    afterGetDataCommon: function afterGetDataCommon(success) {
      var _this2 = this;

      var res = success.data.data;

      if (res) {
        Object.keys(this.model).forEach(function (item) {
          _this2.model[item] = res[item];
        });
      }

      if (this.isGeneral && this.data) {
        this.model = _objectSpread({}, this.model, {}, this.data.model);
      }

      this.formatDateSubmit('YYYY-MM-DD HH:mm:ss', 'DD/MM/YYYY');
    },
    validateCreation: function validateCreation() {
      return this.validateModel();
    },
    createdCompletely: function createdCompletely(response) {
      var res = response.data;

      if (res.status == 0) {
        toastr.success(this.config.createNoti);

        if (this.listPath) {
          this.$router.push(this.helper.parseFullPathToShortPath(this.listPath));
        } else {
          this.typeView = 'update';
          this.id = res.data;

          if (this.setData) {
            this.setData(_objectSpread({
              idForm: this.config.id,
              id: this.id,
              action: 'create'
            }, this.data));
          }

          this.prepareDataCommon();
          this.changeModeForm();
        }
      } else {
        toastr.error(res.data.msg);
      }
    },
    validateUpdate: function validateUpdate() {
      return this.validateModel();
    },
    updatedCompletely: function updatedCompletely(success) {
      var res = success.data;

      if (res.status != 0) {
        return toastr.error(res.data.msg);
      }

      toastr.success(this.config.updateNoti);

      if (this.setData) {
        this.setData(_objectSpread({
          idForm: this.config.id,
          id: this.id,
          action: 'update'
        }, this.data));
      }

      this.afterGetDataCommon(success);
      this.changeModeForm();
    },
    reloadReference: function reloadReference() {
      this.getReference();
    },
    afterGetReference: function afterGetReference(success) {
      reference = _objectSpread({}, reference, {}, success.data.data);

      if (this.setData) {
        this.setData(_objectSpread({
          idForm: this.config.id,
          id: this.id,
          action: 'loadReference'
        }, this.data));
      }

      this.forceReRenderComponent();
    },
    beforeUpdate: function beforeUpdate() {
      this.updateApi = this.config.updateApi + '?id=' + this.getParamsCommon().id;
      this.formatDateSubmit();
    },
    beforeCreate: function beforeCreate() {
      this.formatDateSubmit();
    },
    deleteData: function deleteData() {
      if (this.id) {
        this.softDeleteRecord(this.id);
      } else {
        this.deletedCompletely();
      }
    },
    deletedCompletely: function deletedCompletely() {
      toastr.success('Xoá thành công!');

      if (this.setData) {
        this.setData(_objectSpread({
          idForm: this.config.id,
          id: this.id,
          action: 'delete'
        }, this.data));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/form.vue?vue&type=template&id=f6030526&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/form.vue?vue&type=template&id=f6030526& ***!
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
  return (_vm.hasPermission("detail") && _vm.type != "create") ||
    (_vm.hasPermission("create") && _vm.type == "create")
    ? _c(
        "div",
        { staticClass: "card card-primary card-outline" },
        [
          _c("Loading", { attrs: { show: _vm.loading } }),
          _vm._v(" "),
          _c("div", { staticClass: "card-header" }, [
            _c("h3", { staticClass: "card-title" }, [
              _vm._v(_vm._s(_vm.config.title))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-tools" },
              [
                _vm.formEdit
                  ? _c("bBtn", {
                      attrs: {
                        title: "",
                        color: "primary",
                        className: "btn-default float-right btn-sm",
                        icon: "fa fa-sync",
                        onClick: _vm.reloadReference,
                        configStyle: "margin-left: 10px"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.typeView == "update" && _vm.hasPermission("edit")
                  ? _c("bBtn", {
                      attrs: {
                        title: _vm.formEdit
                          ? "cancelUpdateTitle"
                          : "updateTitle",
                        color: _vm.formEdit ? "default" : "primary",
                        className: "float-right btn-sm",
                        icon: "fa fa-edit",
                        onClick: _vm.changeModeForm,
                        configStyle: "margin-left: 10px"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.isGeneral
                  ? _c("bBtn", {
                      attrs: {
                        title: "Xoá",
                        color: "danger",
                        className: "float-right btn-sm",
                        configStyle: "margin-left: 10px",
                        icon: "fa fa-trash",
                        onClick: _vm.deleteData
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.isGeneral
                  ? _c(
                      "div",
                      { staticClass: "float-right" },
                      [
                        _vm.typeView == "create"
                          ? _c("bBtn", {
                              attrs: {
                                className: "float-right btn-sm",
                                configStyle: "margin-left: 10px",
                                title: "createTitle",
                                color: "primary",
                                onClick: _vm.create
                              }
                            })
                          : _vm.formEdit
                          ? _c("bBtn", {
                              attrs: {
                                title: "updateTitle",
                                className: "float-right btn-sm",
                                configStyle: "margin-left: 10px",
                                color: "primary",
                                onClick: _vm.update
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.updatePath && _vm.id
                          ? _c("bBtn", {
                              attrs: {
                                className: "float-right btn-sm",
                                configStyle: "margin-left: 10px",
                                title: "Chi tiết",
                                color: "warning",
                                onClick: function() {
                                  _vm.$router.push({
                                    path: _vm.helper.parseFullPathToShortPath(
                                      _vm.updatePath
                                    ),
                                    query: { id: _vm.id }
                                  })
                                }
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm.showForm
            ? _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.configModel, function(item) {
                    return _c(
                      "div",
                      {
                        class:
                          item.type == "textArea"
                            ? "col-md-6 form-group"
                            : "col-md-3 form-group"
                      },
                      [
                        item
                          ? _c("InputField", {
                              attrs: {
                                item: item,
                                model: _vm.model,
                                data: _vm.config.getDropdownField(item)
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.formEdit && !_vm.isGeneral && _vm.hasPermission("edit")
            ? _c(
                "div",
                { staticClass: "card-footer" },
                [
                  _vm.typeView == "create"
                    ? _c("bBtn", {
                        attrs: {
                          title: "createTitle",
                          color: "primary",
                          onClick: _vm.create
                        }
                      })
                    : _c("bBtn", {
                        attrs: {
                          title: "updateTitle",
                          color: "primary",
                          onClick: _vm.update
                        }
                      }),
                  _vm._v(" "),
                  _vm.listPath
                    ? _c("bBtn", {
                        attrs: {
                          title: "cancelTitle",
                          color: "primary",
                          className: "btn-default float-right",
                          link: _vm.helper.parseFullPathToShortPath(
                            _vm.listPath
                          )
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/common/form.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/common/form.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_f6030526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=f6030526& */ "./resources/js/components/common/form.vue?vue&type=template&id=f6030526&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/common/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_f6030526___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_f6030526___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/common/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/form.vue?vue&type=template&id=f6030526&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/common/form.vue?vue&type=template&id=f6030526& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f6030526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=f6030526& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/form.vue?vue&type=template&id=f6030526&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f6030526___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f6030526___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/configs/configForm.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/configs/configForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  id: '',
  title: '',
  modelField: [],
  createApi: '',
  updateApi: '',
  referenceApi: '',
  commonDataApi: '',
  listPath: '',
  updatePath: '',
  updateNoti: '',
  createNoti: '',
  getDropdownField: function getDropdownField() {
    return;
  }
});

/***/ })

}]);