(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{46:function(t,e,a){"use strict";a.r(e);function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var i={data:function(){return{btn_title:"Create",mode:"new",category:{},categories:[]}},mounted:function(){var t=this,e="".concat(pista_base_url,"/categories");this.axios.get(e).then((function(e){console.log(e),t.categories=e.data}))},methods:{saveCategory:function(){var t=this;if("new"===this.mode){var e="".concat(pista_base_url,"/categories");this.axios.post(e,this.category).then((function(e){var a=[].concat(n(t.categories),[e.data.category]);t.categories=a,console.log(t.categories)}))}else this.updateData()},onEdit:function(t){toastr.success("Have fun storming the castle!","Miracle Max Says"),this.$set(this.category,"id",t.id),this.$set(this.category,"name",t.name),this.btn_title="Update",this.mode="editing"},cancelChange:function(){this.category={},this.btn_title="Create",this.mode="new"},deleteData:function(t){var e=this;if(confirm("Are you sure?")){var a="".concat(pista_base_url,"/categories/").concat(t);this.axios.delete(a).then((function(a){var n=e.categories.filter((function(e){return e.id!==t}));e.categories=n}))}},updateData:function(){var t=this,e="".concat(pista_base_url,"/categories/").concat(this.category.id);this.axios.put(e,this.category).then((function(e){var a=n(t.categories),r=t.categories.find((function(e){return e.id===t.category.id})),i=a.indexOf(r);r.name=t.category.name,a[i]=r,t.categories=a}))}}},o=a(1),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Create Category")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.saveCategory(e)}}},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.category.name,expression:"category.name"}],staticClass:"form-control",attrs:{placeholder:"Category Name:",type:"text"},domProps:{value:t.category.name},on:{input:function(e){e.target.composing||t.$set(t.category,"name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary"},[t._v(t._s(t.btn_title))]),t._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.cancelChange()}}},[t._v("Cancel")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("table",{staticClass:"table table-striped table-bordered zero-configuration dataTable",attrs:{id:"category-table"}},[t._m(0),t._v(" "),a("tbody",t._l(t.categories,(function(e){return a("tr",{key:e.id},[a("th",[t._v(t._s(e.id))]),t._v(" "),a("th",[t._v(t._s(e.name))]),t._v(" "),a("th",[a("button",{staticClass:"btn btn-info",on:{click:function(a){return a.preventDefault(),t.onEdit(e)}}},[t._v("Edit")]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:"new"===t.mode,expression:"mode === 'new'"}],staticClass:"btn btn-danger",on:{click:function(a){return a.preventDefault(),t.deleteData(e.id)}}},[t._v("Delete")])])])})),0),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("ID")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tfoot",[e("tr",[e("th",[this._v("ID")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Action")])])])}],!1,null,null,null);e.default=s.exports}}]);