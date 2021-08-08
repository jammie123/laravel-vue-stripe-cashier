(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  data: function data() {
    return {
      cardElement: {},
      customer: {
        name: "",
        email: ""
      },
      paymentProcessing: false
    };
  },
  methods: {
    cartLineTotal: function cartLineTotal(item) {
      var amount = item.price * item.quantity;
      amount = amount;
      return amount.toLocaleString("cs-CZ", {
        style: "currency",
        currency: "CZK",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    },
    postOrder: function postOrder() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.customer.amount = _this.$store.state.cart.reduce(function (acc, item) {
                  return acc + item.price * item.quantity;
                }, 0);
                console.log(_this.customer.amount); // this.customer.cart = JSON.stringify(this.$store.state.cart);
                // let productIds = this.$store.state.cart.map(item=>item.id);
                // let quantity = this.$store.state.cart.map(item=>item.quantity);

                _this.customer.cart = JSON.stringify(_this.$store.state.cart);
                console.log(_this.customer.cart);
                axios.post("/api/orders", _this.customer).then(function (response) {
                  console.log(response);

                  _this.$store.dispatch("clearCart");

                  _this.$store.commit("updateOrder", response.data);

                  _this.$router.push({
                    name: "order.summary"
                  });
                })["catch"](function (error) {
                  console.error(error);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {
    cart: function cart() {
      return this.$store.state.cart;
    },
    cartQuantity: function cartQuantity() {
      return this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: function cartTotal() {
      var amount = this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
      return amount.toLocaleString("cs-CZ", {
        style: "currency",
        currency: "CZK",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mx-auto px-4" }, [
    _c("div", { staticClass: "lg:w-2/3 w-full mx-auto mt-8 overflow-auto" }, [
      _c(
        "table",
        { staticClass: "table-auto w-full text-left whitespace-no-wrap" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.cart, function(item, index) {
                return _c("tr", { key: item.id }, [
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(item.name) }
                  }),
                  _vm._v(" "),
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(item.quantity) }
                  }),
                  _vm._v(" "),
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(_vm.cartLineTotal(item)) }
                  }),
                  _vm._v(" "),
                  _c("td", { staticClass: "w-10 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "flex ml-auto text-sm text-black bg-yellow-400 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-500 rounded",
                        on: {
                          click: function($event) {
                            return _vm.$store.commit("removeFromCart", item)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Remove\n                        "
                        )
                      ]
                    )
                  ])
                ])
              }),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "p-4 font-bold" }, [_vm._v("Celkem")]),
                _vm._v(" "),
                _c("td", {
                  staticClass: "p-4 font-bold",
                  domProps: { textContent: _vm._s(_vm.cartQuantity) }
                }),
                _vm._v(" "),
                _c("td", {
                  staticClass: "p-4 font-bold",
                  domProps: { textContent: _vm._s(_vm.cartTotal) }
                }),
                _vm._v(" "),
                _c("td", { staticClass: "w-10 text-right" })
              ])
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "lg:w-2/3  w-full mx-auto mt-8" }, [
      _c(
        "div",
        { staticClass: "lg:flex flex-wrap flex-col lg:flex-row w-full mt-8" },
        [
          _c("div", { staticClass: "w-full py-4" }, [
            _c("div", { staticClass: "relative" }, [
              _c(
                "label",
                {
                  staticClass: "leading-7 text-sm text-gray-600",
                  attrs: { for: "name" }
                },
                [_vm._v("Jméno a Příjmení")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.customer.name,
                    expression: "customer.name"
                  }
                ],
                staticClass:
                  "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                attrs: {
                  type: "text",
                  id: "name",
                  name: "name",
                  disabled: _vm.paymentProcessing
                },
                domProps: { value: _vm.customer.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.customer, "name", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-full py-4" }, [
            _c("div", { staticClass: "relative" }, [
              _c(
                "label",
                {
                  staticClass: "leading-7 text-sm text-gray-600",
                  attrs: { for: "email" }
                },
                [_vm._v("Email")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.customer.email,
                    expression: "customer.email"
                  }
                ],
                staticClass:
                  "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                attrs: {
                  type: "email",
                  id: "email",
                  name: "email",
                  disabled: _vm.paymentProcessing
                },
                domProps: { value: _vm.customer.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.customer, "email", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-full mt-8" }, [
        _c("button", {
          staticClass:
            "flex mx-auto text-black bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg w-full text-center",
          attrs: { disabled: _vm.paymentProcessing },
          domProps: {
            textContent: _vm._s(
              _vm.paymentProcessing ? "Processing" : "Objednat"
            )
          },
          on: { click: _vm.postOrder }
        })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"
          },
          [_vm._v("\n                        Položka\n                    ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("\n                        Počet\n                    ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("\n                        Cena\n                    ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("\n                        Akce\n                    ")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue":
/*!************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=b4c63204& */ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*******************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=b4c63204& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);