(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/displayMessage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/displayMessage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_SideBarUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/SideBarUser */ "./resources/js/Shared/SideBarUser.vue");
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
  components: {
    SideBarUser: _Shared_SideBarUser__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["messages", "messageSend"],
  data: function data() {
    return {
      userSendMessage: null,
      datas: {},
      id: null,
      length: null,
      form: {
        message: null
      }
    };
  },
  mounted: function mounted() {
    this.datas = this.messages;

    for (var i = 0; i < this.datas.length; i++) {
      this.id = this.datas[i].sender_id;
      console.log(this.id);
      this.length = this.messages.length;
      console.log(this.length);
    }

    this.userSendMessage = this.messages[0].user.name;
    setTimeout(function () {
      console.log("recharger");
    }, 5000);
    $(".chat-input input").keyup(function (e) {
      if ($(this).val() == "") $(this).removeAttr("good");else $(this).attr("good", "");
    });
  },
  methods: {
    handleSubmit: function handleSubmit() {
      this.sending = true;
      var data = new FormData();
      data.append("message", this.form.message || "");
      data.append("id", this.id || "");
      this.$inertia.post("/sendMessage", data, {
        onSuccess: function onSuccess() {
          console.log("Send Success");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SideBarUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SideBarUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SideBarUser",
  mounted: function mounted() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[data-v-7447c510]::-webkit-scrollbar {\n  width: 4px;\n}\n[data-v-7447c510]::-webkit-scrollbar-thumb {\n  background-color: #4c4c6a;\n  border-radius: 2px;\n}\n.chatbox[data-v-7447c510] {\n  width: 400px;\n  height: 400px;\n  max-height: 400px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n}\n.chat-window[data-v-7447c510] {\n  flex: auto;\n  max-height: calc(100% - 60px);\n  background: #202027;\n  overflow: auto;\n}\n.chat-input[data-v-7447c510] {\n  flex: 0 0 auto;\n  height: 60px;\n  background: #40434e;\n  border-top: 1px solid #2671ff;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n}\n.chat-input input[data-v-7447c510] {\n  height: 59px;\n  line-height: 60px;\n  outline: 0 none;\n  border: none;\n  width: calc(100% - 160px);\n  color: white;\n  text-indent: 10px;\n  font-size: 12pt;\n  padding: 0;\n  background: #40434e;\n}\n.chat-input button[data-v-7447c510] {\n  float: right;\n  outline: 0 none;\n  border: none;\n  background: rgba(255, 255, 255, 0.25);\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  padding: 2px 0 0 0;\n  margin: 10px;\n  transition: all 0.15s ease-in-out;\n}\n.chat-input input[good] + button[data-v-7447c510] {\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);\n  background: #2671ff;\n}\n.chat-input input[good] + button[data-v-7447c510]:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.chat-input input[good] + button path[data-v-7447c510] {\n  fill: white;\n}\n.msg-container[data-v-7447c510] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding: 0;\n}\n.msg-box[data-v-7447c510] {\n  display: flex;\n  background: #5b5e6c;\n  padding: 10px 10px 0 10px;\n  border-radius: 0 6px 6px 0;\n  max-width: 80%;\n  width: auto;\n  float: left;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);\n}\n.user-img[data-v-7447c510] {\n  display: inline-block;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  background: #c1cfe9;\n  margin: 0 10px 10px 0;\n}\n.flr[data-v-7447c510] {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 50px);\n}\n.messages[data-v-7447c510] {\n  flex: 1 0 auto;\n}\n.msg[data-v-7447c510] {\n  display: inline-block;\n  font-size: 11pt;\n  line-height: 13pt;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0 0 4px 0;\n}\n.msg[data-v-7447c510]:first-of-type {\n  margin-top: 8px;\n}\n.timestamp[data-v-7447c510] {\n  color: rgba(0, 0, 0, 0.38);\n  font-size: 8pt;\n  margin-bottom: 10px;\n}\n.username[data-v-7447c510] {\n  margin-right: 3px;\n}\n.posttime[data-v-7447c510] {\n  margin-left: 3px;\n}\n.msg-self .msg-box[data-v-7447c510] {\n  border-radius: 6px 0 0 6px;\n  background: #2671ff;\n  float: right;\n}\n.msg-self .user-img[data-v-7447c510] {\n  margin: 0 0 10px 10px;\n}\n.msg-self .msg[data-v-7447c510] {\n  text-align: right;\n}\n.msg-self .timestamp[data-v-7447c510] {\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template/simple-sidebar)\n * Copyright 2013-2020 Start Bootstrap\n * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)\n */\n#wrapper[data-v-6e88fefb] {\n  overflow-x: hidden;\n}\n#sidebar-wrapper[data-v-6e88fefb] {\n  min-height: 100vh;\n  margin-left: -15rem;\n  transition: margin 0.25s ease-out;\n}\n#sidebar-wrapper .sidebar-heading[data-v-6e88fefb] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n#sidebar-wrapper .list-group[data-v-6e88fefb] {\n  width: 15rem;\n}\n#page-content-wrapper[data-v-6e88fefb] {\n  min-width: 100vw;\n}\n#wrapper.toggled #sidebar-wrapper[data-v-6e88fefb] {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n#sidebar-wrapper[data-v-6e88fefb] {\n    margin-left: 0;\n}\n#page-content-wrapper[data-v-6e88fefb] {\n    min-width: 0;\n    width: 100%;\n}\n#wrapper.toggled #sidebar-wrapper[data-v-6e88fefb] {\n    margin-left: -15rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/displayMessage.vue?vue&type=template&id=7447c510&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/displayMessage.vue?vue&type=template&id=7447c510&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("side-bar-user"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-8 offset-3",
          staticStyle: { "margin-top": "-30em" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("section", { staticClass: "chatbox" }, [
              _c("section", { staticClass: "chat-window" }, [
                _c(
                  "article",
                  {
                    staticClass: "msg-container msg-remote",
                    attrs: { id: "msg-0" }
                  },
                  [
                    _c("div", { staticClass: "msg-box" }, [
                      _c("img", {
                        staticClass: "user-img",
                        attrs: {
                          id: "user-0",
                          src:
                            "https://pro.propeller.in/assets/images/avatar-icon-40x40.png"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "flr" }, [
                        _c("div", { staticClass: "messages" }, [
                          _c(
                            "p",
                            { staticClass: "msg", attrs: { id: "msg-0" } },
                            [_vm._v(_vm._s(this.messages[0].message))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "timestamp" }, [
                          _c("span", { staticClass: "username" }, [
                            _vm._v(_vm._s(this.userSendMessage))
                          ]),
                          _vm._v("•"),
                          _c("span", { staticClass: "posttime" }, [
                            _vm._v("3 minutes ago")
                          ])
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "article",
                  {
                    staticClass: "msg-container msg-self",
                    attrs: { id: "msg-0" }
                  },
                  [
                    _c("div", { staticClass: "msg-box" }, [
                      _c("div", { staticClass: "flr" }, [
                        _c("div", { staticClass: "messages" }, [
                          _c(
                            "p",
                            { staticClass: "msg", attrs: { id: "msg-1" } },
                            [_vm._v(_vm._s(this.messageSend[0].message))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "msg", attrs: { id: "msg-1" } },
                            [_vm._v(_vm._s(this.messageSend[1].message))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "timestamp" }, [
                          _c("span", { staticClass: "username" }, [
                            _vm._v(_vm._s(this.messageSend[0].user.name))
                          ]),
                          _vm._v("•"),
                          _c("span", { staticClass: "posttime" }, [
                            _vm._v("2 minutes ago")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "user-img",
                        attrs: {
                          id: "user-0",
                          src:
                            "//gravatar.com/avatar/56234674574535734573000000000001?d=retro"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2)
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "chat-input",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.handleSubmit($event)
                    }
                  }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.message,
                        expression: "form.message"
                      }
                    ],
                    attrs: {
                      type: "text",
                      autocomplete: "on",
                      placeholder: "Type a message",
                      required: ""
                    },
                    domProps: { value: _vm.form.message },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "message", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("button", [
                    _c(
                      "svg",
                      {
                        staticStyle: { width: "24px", height: "24px" },
                        attrs: { viewBox: "0 0 24 24" }
                      },
                      [
                        _c("path", {
                          attrs: {
                            fill: "rgba(0,0,0,.38)",
                            d:
                              "M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z"
                          }
                        })
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "article",
      { staticClass: "msg-container msg-remote", attrs: { id: "msg-0" } },
      [
        _c("div", { staticClass: "msg-box" }, [
          _c("img", {
            staticClass: "user-img",
            attrs: {
              id: "user-0",
              src:
                "//gravatar.com/avatar/002464562345234523523568978962?d=retro"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "flr" }, [
            _c("div", { staticClass: "messages" }, [
              _c("p", { staticClass: "msg", attrs: { id: "msg-0" } }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                )
              ])
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "timestamp" }, [
              _c("span", { staticClass: "username" }, [_vm._v("Name")]),
              _vm._v("•"),
              _c("span", { staticClass: "posttime" }, [_vm._v("1 minute ago")])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "article",
      { staticClass: "msg-container msg-remote", attrs: { id: "msg-0" } },
      [
        _c("div", { staticClass: "msg-box" }, [
          _c("img", {
            staticClass: "user-img",
            attrs: {
              id: "user-0",
              src:
                "//gravatar.com/avatar/00034587632094500000000000000000?d=retro"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "flr" }, [
            _c("div", { staticClass: "messages" }, [
              _c("p", { staticClass: "msg", attrs: { id: "msg-0" } }, [
                _vm._v("Lorem ipsum dolor sit amet.")
              ])
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "timestamp" }, [
              _c("span", { staticClass: "username" }, [_vm._v("Name")]),
              _vm._v("•"),
              _c("span", { staticClass: "posttime" }, [_vm._v("Now")])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "article",
      { staticClass: "msg-container msg-self", attrs: { id: "msg-0" } },
      [
        _c("div", { staticClass: "msg-box" }, [
          _c("div", { staticClass: "flr" }, [
            _c("div", { staticClass: "messages" }, [
              _c("p", { staticClass: "msg", attrs: { id: "msg-1" } }, [
                _vm._v("Lorem ipsum")
              ])
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "timestamp" }, [
              _c("span", { staticClass: "username" }, [_vm._v("Name")]),
              _vm._v("•"),
              _c("span", { staticClass: "posttime" }, [_vm._v("Now")])
            ])
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "user-img",
            attrs: {
              id: "user-0",
              src:
                "//gravatar.com/avatar/56234674574535734573000000000001?d=retro"
            }
          })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SideBarUser.vue?vue&type=template&id=6e88fefb&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SideBarUser.vue?vue&type=template&id=6e88fefb&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "d-flex", attrs: { id: "wrapper" } }, [
      _c(
        "div",
        {
          staticClass: "bg-light border-right",
          attrs: { id: "sidebar-wrapper" }
        },
        [
          _c("div", { staticClass: "sidebar-heading" }, [
            _vm._v("Samba-store")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "list-group list-group-flush" },
            [
              _c(
                "inertia-link",
                {
                  staticClass:
                    "list-group-item list-group-item-action bg-light",
                  attrs: { href: "/home" }
                },
                [_vm._v("Dashboard")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "list-group-item list-group-item-action bg-light",
                  attrs: { href: "/message" }
                },
                [_vm._v("Messagerie")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "list-group-item list-group-item-action bg-light",
                  attrs: { href: "/userPost" }
                },
                [_vm._v("Poster une annonce")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "page-content-wrapper" } }, [
      _c(
        "nav",
        {
          staticClass:
            "navbar navbar-expand-lg navbar-light bg-light border-bottom"
        },
        [
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { id: "menu-toggle" } },
            [_vm._v("Menu")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "navbar-toggler",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
              }
            },
            [_c("span", { staticClass: "navbar-toggler-icon" })]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/User/displayMessage.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/User/displayMessage.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayMessage_vue_vue_type_template_id_7447c510_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMessage.vue?vue&type=template&id=7447c510&scoped=true& */ "./resources/js/Pages/User/displayMessage.vue?vue&type=template&id=7447c510&scoped=true&");
/* harmony import */ var _displayMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayMessage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/displayMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _displayMessage_vue_vue_type_style_index_0_id_7447c510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css& */ "./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _displayMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _displayMessage_vue_vue_type_template_id_7447c510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _displayMessage_vue_vue_type_template_id_7447c510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7447c510",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/displayMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/displayMessage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/User/displayMessage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./displayMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/displayMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_style_index_0_id_7447c510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/displayMessage.vue?vue&type=style&index=0&id=7447c510&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_style_index_0_id_7447c510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_style_index_0_id_7447c510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_style_index_0_id_7447c510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_style_index_0_id_7447c510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/User/displayMessage.vue?vue&type=template&id=7447c510&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/User/displayMessage.vue?vue&type=template&id=7447c510&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_template_id_7447c510_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./displayMessage.vue?vue&type=template&id=7447c510&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/displayMessage.vue?vue&type=template&id=7447c510&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_template_id_7447c510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_displayMessage_vue_vue_type_template_id_7447c510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/SideBarUser.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/SideBarUser.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBarUser_vue_vue_type_template_id_6e88fefb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBarUser.vue?vue&type=template&id=6e88fefb&scoped=true& */ "./resources/js/Shared/SideBarUser.vue?vue&type=template&id=6e88fefb&scoped=true&");
/* harmony import */ var _SideBarUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBarUser.vue?vue&type=script&lang=js& */ "./resources/js/Shared/SideBarUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SideBarUser_vue_vue_type_style_index_0_id_6e88fefb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css& */ "./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SideBarUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBarUser_vue_vue_type_template_id_6e88fefb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBarUser_vue_vue_type_template_id_6e88fefb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e88fefb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/SideBarUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/SideBarUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/SideBarUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBarUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SideBarUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_style_index_0_id_6e88fefb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SideBarUser.vue?vue&type=style&index=0&id=6e88fefb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_style_index_0_id_6e88fefb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_style_index_0_id_6e88fefb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_style_index_0_id_6e88fefb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_style_index_0_id_6e88fefb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Shared/SideBarUser.vue?vue&type=template&id=6e88fefb&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Shared/SideBarUser.vue?vue&type=template&id=6e88fefb&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_template_id_6e88fefb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBarUser.vue?vue&type=template&id=6e88fefb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SideBarUser.vue?vue&type=template&id=6e88fefb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_template_id_6e88fefb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarUser_vue_vue_type_template_id_6e88fefb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);