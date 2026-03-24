import * as __WEBPACK_EXTERNAL_MODULE__package_json_d1babe55__ from "~/package.json";
export const __webpack_esm_id__ = "bundle";
export const __webpack_esm_ids__ = ["bundle"];
export const __webpack_esm_modules__ = {

/***/ "./app/app.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/App.vue");



const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.createPinia)();
const app = (0,nativescript_vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.use(pinia);
app.start();


/***/ },

/***/ "./node_modules/@nativescript/webpack/dist/loaders/apply-css-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/css2json-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-7.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/App.vue?vue&type=style&index=0&id=2e015f16&scoped=true&lang=css"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".container[data-v-2e015f16]"],"declarations":[{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"flex-direction","value":"column"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"height","value":"100vh"},{"type":"declaration","property":"font-family","value":"Arial, sans-serif"}]},{"type":"rule","selectors":["h1[data-v-2e015f16]"],"declarations":[{"type":"declaration","property":"color","value":"#42b883"}]},{"type":"rule","selectors":["button[data-v-2e015f16]"],"declarations":[{"type":"declaration","property":"margin-top","value":"20px"},{"type":"declaration","property":"padding","value":"10px 20px"},{"type":"declaration","property":"border","value":"none"},{"type":"declaration","property":"background","value":"#35495e"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"cursor","value":"pointer"},{"type":"declaration","property":"border-radius","value":"5px"}]},{"type":"rule","selectors":["button[data-v-2e015f16]:hover"],"declarations":[{"type":"declaration","property":"background","value":"#42b883"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "C:\\Users\\yaani\\CESIZen\\cesizen-app\\app\\App.vue")


/***/ },

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/App.vue?vue&type=script&setup=true&lang=js"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");


// état réactif

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'App',
  setup(__props, { expose: __expose }) {
  __expose();

const title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Bienvenue 👋')
const message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Ceci est une vue simple en Vue 3')
const count = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0)

// fonction
function increment() {
  count.value++
}

const __returned__ = { title, message, count, increment, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ },

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/App.vue?vue&type=template&id=2e015f16&scoped=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");


const _hoisted_1 = { class: "container" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.title), 1 /* TEXT */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.message), 1 /* TEXT */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", { onClick: $setup.increment }, " Compteur : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.count), 1 /* TEXT */)
  ]))
}

/***/ },

/***/ "./app/App.vue"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_2e015f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/App.vue?vue&type=template&id=2e015f16&scoped=true");
/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/App.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_2e015f16_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/App.vue?vue&type=style&index=0&id=2e015f16&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_2e015f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2e015f16"],['__file',"app/App.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./app/App.vue?vue&type=style&index=0&id=2e015f16&scoped=true&lang=css"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_apply_css_loader_index_js_node_modules_nativescript_webpack_dist_loaders_css2json_loader_index_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_7_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_2e015f16_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_apply_css_loader_index_js_node_modules_nativescript_webpack_dist_loaders_css2json_loader_index_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_7_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_2e015f16_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/apply-css-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/css2json-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-7.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/App.vue?vue&type=style&index=0&id=2e015f16&scoped=true&lang=css");
 

/***/ },

/***/ "./app/App.vue?vue&type=script&setup=true&lang=js"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/App.vue?vue&type=script&setup=true&lang=js");
 

/***/ },

/***/ "./app/App.vue?vue&type=template&id=2e015f16&scoped=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_2e015f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_2e015f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/App.vue?vue&type=template&id=2e015f16&scoped=true");


/***/ },

/***/ "~/package.json"
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__package_json_d1babe55__;

/***/ }

};
;

// load runtime
import { __webpack_require__ } from "./runtime.mjs";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))

import * as __webpack_chunk_1__ from "./vendor.mjs";
__webpack_require__.C(__webpack_chunk_1__);
import * as __webpack_chunk_2__ from "./bundle.mjs";
__webpack_require__.C(__webpack_chunk_2__);
__webpack_exec__("./node_modules/@nativescript/core/globals/index.js");
__webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js");
__webpack_exec__("./app/app.ts");
__webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js");
var __webpack_exports__ = __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js");

//# sourceMappingURL=file:///C:\Users\yaani\CESIZen\cesizen-app\platforms\android\app\src\main\assets\app/bundle.mjs.map