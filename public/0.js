(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CategoryComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      btn_title: 'Create',
      mode: 'new',
      category: {},
      categories: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var uri;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              uri = "".concat(pista_base_url, "/categories");

              _this.axios.get(uri).then(function (response) {
                console.log(response);
                _this.categories = response.data;
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    saveCategory: function saveCategory() {
      var _this2 = this;

      if (this.mode === 'new') {
        var uri = "".concat(pista_base_url, "/categories");
        this.axios.post(uri, this.category).then(function (response) {
          var categories = [].concat(_toConsumableArray(_this2.categories), [response.data.category]);
          _this2.categories = categories;
          console.log(_this2.categories);
        });
      } else {
        this.updateData();
      }
    },
    onEdit: function onEdit(category) {
      toastr.success('Have fun storming the castle!', 'Miracle Max Says');
      this.$set(this.category, 'id', category.id);
      this.$set(this.category, 'name', category.name);
      this.btn_title = 'Update';
      this.mode = 'editing';
    },
    cancelChange: function cancelChange() {
      this.category = {};
      this.btn_title = 'Create';
      this.mode = 'new';
    },
    deleteData: function deleteData(id) {
      var _this3 = this;

      var a = confirm('Are you sure?');
      if (!a) return;
      var uri = "".concat(pista_base_url, "/categories/").concat(id);
      this.axios["delete"](uri).then(function (response) {
        var categories = _this3.categories.filter(function (c) {
          return c.id !== id;
        }); // this.categories.splice(this.categories.indexOf(id), 1)


        _this3.categories = categories;
      });
    },
    updateData: function updateData() {
      var _this4 = this;

      var uri = "".concat(pista_base_url, "/categories/").concat(this.category.id);
      this.axios.put(uri, this.category).then(function (response) {
        var categories = _toConsumableArray(_this4.categories);

        var categoryInDB = _this4.categories.find(function (c) {
          return c.id === _this4.category.id;
        });

        var index = categories.indexOf(categoryInDB);
        categoryInDB.name = _this4.category.name;
        categories[index] = categoryInDB;
        _this4.categories = categories;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryComponent.vue?vue&type=template&id=3991b978&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CategoryComponent.vue?vue&type=template&id=3991b978& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c("h1", [_vm._v("Create Category")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveCategory($event)
            }
          }
        },
        [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.category.name,
                    expression: "category.name"
                  }
                ],
                staticClass: "form-control",
                attrs: { placeholder: "Category Name:", type: "text" },
                domProps: { value: _vm.category.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.category, "name", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("button", { staticClass: "btn btn-primary" }, [
                _vm._v(_vm._s(_vm.btn_title))
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.cancelChange()
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "table",
        {
          staticClass:
            "table table-striped table-bordered zero-configuration dataTable",
          attrs: { id: "category-table" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.categories, function(category) {
              return _c("tr", { key: category.id }, [
                _c("th", [_vm._v(_vm._s(category.id))]),
                _vm._v(" "),
                _c("th", [_vm._v(_vm._s(category.name))]),
                _vm._v(" "),
                _c("th", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.onEdit(category)
                        }
                      }
                    },
                    [_vm._v("Edit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.mode === "new",
                          expression: "mode === 'new'"
                        }
                      ],
                      staticClass: "btn btn-danger",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.deleteData(category.id)
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  )
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
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
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CategoryComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CategoryComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryComponent_vue_vue_type_template_id_3991b978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryComponent.vue?vue&type=template&id=3991b978& */ "./resources/js/components/CategoryComponent.vue?vue&type=template&id=3991b978&");
/* harmony import */ var _CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CategoryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryComponent_vue_vue_type_template_id_3991b978___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryComponent_vue_vue_type_template_id_3991b978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CategoryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CategoryComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CategoryComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CategoryComponent.vue?vue&type=template&id=3991b978&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/CategoryComponent.vue?vue&type=template&id=3991b978& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_3991b978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryComponent.vue?vue&type=template&id=3991b978& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryComponent.vue?vue&type=template&id=3991b978&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_3991b978___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_3991b978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);