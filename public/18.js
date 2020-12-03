(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_SideBarUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/SideBarUser */ "./resources/js/Shared/SideBarUser.vue");
/* harmony import */ var _Shared_FileInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/FileInput */ "./resources/js/Shared/FileInput.vue");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  name: "Register",
  components: {
    FileInput: _Shared_FileInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    SideBarUser: _Shared_SideBarUser__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    companiesProp: Array
  },
  data: function data() {
    return {
      sending: false,
      id: null,
      form: {
        companyName: this.companiesProp[0].companyName,
        phone: this.companiesProp[0].phone,
        address: this.companiesProp[0].address,
        avatar: null
      }
    };
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.sending = true;
      var data = new FormData();
      var baseUrl = "";
      data.append("companyName", this.form.companyName || "");
      data.append("phone", this.form.phone || "");
      data.append("address", this.form.address || "");
      data.append("avatar", this.form.avatar || "");
      this.$inertia.post("http://localhost:8000/updateCompanyProfile/".concat(this.id), data, {
        onSuccess: function onSuccess() {
          _this.flashMessage.info({
            message: "Votre profil a ete modifier avec success!"
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.id = this.companiesProp[0].user_id;
    console.log(this.companiesProp[0].user_id);
    console.log(_typeof(this.companiesProp));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=template&id=13f19180&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=template&id=13f19180& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("side-bar-user"),
      _vm._v(" "),
      _c("FlashMessage", { attrs: { position: "right top" } }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-8 offset-3",
              staticStyle: { "margin-top": "-7rem" }
            },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.handleSubmit($event)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "form-group mt-5" },
                    [
                      _c("file-input", {
                        attrs: { label: "avatar" },
                        model: {
                          value: _vm.form.avatar,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "avatar", $$v)
                          },
                          expression: "form.avatar"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "prenom" } }, [
                      _vm._v("Nom de l'entreprise :")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.companyName,
                          expression: "form.companyName"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Nom de l'entreprise"
                      },
                      domProps: { value: _vm.form.companyName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "companyName", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "prenom" } }, [
                      _vm._v("Téléphone :")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.phone,
                          expression: "form.phone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Téléphone" },
                      domProps: { value: _vm.form.phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "phone", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "address" } }, [
                      _vm._v("Adresse")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.address,
                          expression: "form.address"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "votre adresse" },
                      domProps: { value: _vm.form.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "address", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-round btn-outline-primary col-md-5 offset-4 mb-5",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Soumettre")]
                  )
                ]
              )
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/User/updateCompanyProfile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/User/updateCompanyProfile.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateCompanyProfile_vue_vue_type_template_id_13f19180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateCompanyProfile.vue?vue&type=template&id=13f19180& */ "./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=template&id=13f19180&");
/* harmony import */ var _updateCompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateCompanyProfile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _updateCompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _updateCompanyProfile_vue_vue_type_template_id_13f19180___WEBPACK_IMPORTED_MODULE_0__["render"],
  _updateCompanyProfile_vue_vue_type_template_id_13f19180___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/updateCompanyProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateCompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./updateCompanyProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateCompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=template&id=13f19180&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=template&id=13f19180& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updateCompanyProfile_vue_vue_type_template_id_13f19180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./updateCompanyProfile.vue?vue&type=template&id=13f19180& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/updateCompanyProfile.vue?vue&type=template&id=13f19180&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updateCompanyProfile_vue_vue_type_template_id_13f19180___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updateCompanyProfile_vue_vue_type_template_id_13f19180___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);