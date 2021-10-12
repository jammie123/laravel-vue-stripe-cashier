(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    cartLineTotal: function cartLineTotal(item) {
      var amount = item.price * item.pivot.quantity;
      return amount.toLocaleString("cs-CZ", {
        style: "currency",
        currency: "CZK",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    }
  },
  computed: {
    order: function order() {
      // console.log(this.$store.state.order);
      return this.$store.state.order;
    },
    orderQuantity: function orderQuantity() {
      // console.log(this.$store.state.order);
      var order = this.$store.state.order;
      return order.cart.reduce(function (accum, item) {
        return accum + item.quantity;
      }, 0);
    },
    orderTotal: function orderTotal() {
      var order = this.$store.state.order;
      return order.cart.reduce(function (accum, item) {
        return accum + item.price;
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mx-auto" }, [
    _c(
      "div",
      {
        staticClass:
          "w-full mx-auto mt-8 overflow-auto items-center flex flex-col align-middle justify-center h-half"
      },
      [
        _c(
          "h1",
          { staticClass: "text-gray-900 text-3xl title-font font-medium mb-4" },
          [_vm._v("\n            Děkujeme za Vaši objednávku\n        ")]
        ),
        _vm._v(" "),
        _c("h2", {
          staticClass: "text-2xl mb-8 title-font text-gray-500",
          domProps: {
            textContent: _vm._s(
              "Detaily budou zaslané na Váš email " + _vm.order.email
            )
          }
        }),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "table-auto w-1/2 text-left whitespace-no-wrap" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.order.cart, function(item) {
                  return _c("tr", { key: item.id }, [
                    _c("td", {
                      staticClass: "p-4",
                      domProps: { textContent: _vm._s(item.name) }
                    }),
                    _vm._v(" "),
                    _c("td", {
                      staticClass: "p-4",
                      domProps: { textContent: _vm._s(item.price) }
                    })
                  ])
                }),
                _vm._v(" "),
                _c("tr", [
                  _c("td", { staticClass: "p-4 font-bold" }, [
                    _vm._v("Celkem")
                  ]),
                  _vm._v(" "),
                  _c("td", {
                    staticClass: "p-4 font-bold",
                    domProps: { textContent: _vm._s(_vm.orderTotal) }
                  })
                ])
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass:
              "flex mx-auto text-black w-1/2 bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg text-center justify-center mt-12",
            attrs: { to: { name: "home.index" } }
          },
          [_vm._v("Zpátky na hlavní stranu")]
        )
      ],
      1
    )
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
          [
            _vm._v(
              "\n                        Název zboží\n                    "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br"
          },
          [_vm._v("\n                        Cena\n                    ")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/routes/Order/Summary.vue":
/*!***********************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=3f7e591e& */ "./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Summary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&":
/*!******************************************************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Summary.vue?vue&type=template&id=3f7e591e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);