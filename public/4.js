(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Products/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Products/Show.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    formatCurrency: function formatCurrency(amount) {
      return amount.toLocaleString("cs-CZ", {
        style: "currency",
        currency: "CZK",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    } // getThumbnail(product) {
    //     console.log(JSON.parse(product.image));
    //     if (product.image != null) {
    //         return "../images/" + JSON.parse(product.image);
    //     }
    // }

  },
  computed: {
    products: function products() {
      return this.$store.state.products;
    },
    images: function images() {
      var _this = this;

      var _this$products$find = this.products.find(function (product) {
        return product.slug === _this.$route.params.slug;
      }),
          image = _this$products$find.image;

      console.log(image);
      var parsedImages = JSON.parse(image);
      return parsedImages.map(function (item) {
        return "../images/" + item;
      });
    },
    product: function product() {
      var _this2 = this;

      return this.products.find(function (product) {
        return product.slug === _this2.$route.params.slug;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1& ***!
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
  return _vm.product
    ? _c(
        "section",
        { staticClass: "text-gray-700 body-font overflow-hidden" },
        [
          _c("div", { staticClass: "container mx-auto px-2" }, [
            _c("div", { staticClass: "lg:w-5/5 mx-auto flex flex-wrap" }, [
              _c(
                "ul",
                {
                  staticClass:
                    "grid gap-2 grid-flow-col auto-cols-max overflow-auto mx-auto w-full"
                },
                _vm._l(_vm.images, function(item) {
                  return _c("div", { key: item }, [
                    _c("img", {
                      staticClass: "w-full h-80 object-cover",
                      attrs: { alt: "ecommerce", src: item }
                    })
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "lg:w-1/2 ml-auto mr-auto w-full lg:pl-10 lg:py-6 mt-6 lg:mt-8"
                },
                [
                  _c("h1", {
                    staticClass:
                      "text-gray-900 text-4xl title-font font-medium mb-2",
                    domProps: { textContent: _vm._s(_vm.product.name) }
                  }),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "leading-relaxed text-xl",
                    domProps: { innerHTML: _vm._s(_vm.product.description) }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-col" }, [
                    _c("span", {
                      staticClass:
                        "title-font font-medium text-3xl text-gray-900 py-8",
                      domProps: {
                        textContent: _vm._s(
                          _vm.formatCurrency(_vm.product.price)
                        )
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "flex mt-4 text-center text-black bg-yellow-300 border-0 text-2xl py-4 px-6 focus:outline-none hover:bg-yellow-400 rounded-1xl",
                        on: {
                          click: function($event) {
                            return _vm.$store.commit("addToCart", _vm.product)
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "w-full text-center" }, [
                          _vm._v("Přidat do košíku")
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/routes/Products/Show.vue":
/*!***********************************************!*\
  !*** ./resources/js/routes/Products/Show.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=26de46c1& */ "./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/routes/Products/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Products/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Products/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/routes/Products/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Products/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1&":
/*!******************************************************************************!*\
  !*** ./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=26de46c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);