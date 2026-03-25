export const __webpack_esm_id__ = "app_views_pages_CategoriesView_vue";
export const __webpack_esm_ids__ = ["app_views_pages_CategoriesView_vue"];
export const __webpack_esm_modules__ = {

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'AppBar',
    props: {
        title: { type: String, required: true },
        showBack: { type: Boolean, required: false, default: false },
        actionIcon: { type: String, required: false },
        actionLabel: { type: String, required: false }
    },
    emits: ["action", "back"],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const emit = __emit;
        function goBack() { emit('back'); }
        const barStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            backgroundColor: '#008000',
            height: 66,
        }));
        const backImageStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            tintColor: '#FFFFFF',
            width: 24,
            height: 24,
            margin: 10
        }));
        const titleStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center'
        }));
        const actionStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            color: '#FFFFFF',
            fontSize: 20,
            backgroundColor: 'transparent',
            width: 40,
            padding: 0
        }));
        const __returned__ = { emit, goBack, barStyle, backImageStyle, titleStyle, actionStyle };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/pages/CategoriesView.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var _stores_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/stores/pages.ts");
/* harmony import */ var _utils_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/design.ts");
/* harmony import */ var _components_layout_AppBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/components/layout/AppBar.vue");
/* harmony import */ var _components_layout_BottomMenu_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/components/layout/BottomMenu.vue");
/* harmony import */ var _composables_useNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/composables/useNavigation.ts");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/core/ui/layouts/grid-layout/index.android.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'CategoriesView',
    setup(__props, { expose: __expose }) {
        __expose();
        const { navigateTo } = (0,_composables_useNavigation__WEBPACK_IMPORTED_MODULE_5__.useNavigation)();
        const pageStore = (0,_stores_pages__WEBPACK_IMPORTED_MODULE_1__.usePageStore)();
        function countForCategory(id) {
            return pageStore.filterByCategory(id).length;
        }
        function selectCategory(id) {
            navigateTo('PageList', { categoryId: id });
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
            await Promise.all([pageStore.fetchAll(), pageStore.fetchCategories()]);
        });
        // ======================
        // Styles
        // ======================
        const containerStyle = {
            backgroundColor: '#FFFFFF',
            padding: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.spacing.lg
        };
        const pageTitleStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.typography.size2xl,
            fontWeight: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.typography.weightBold,
            color: '#008000',
            marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.spacing.lg
        };
        const categoryCardStyle = {
            backgroundColor: '#008000',
            borderRadius: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.radius.md,
            padding: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.spacing.lg,
            marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.spacing.sm,
            borderLeftWidth: 4,
            borderLeftColor: '#FFFFFF'
        };
        const catNameStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.typography.sizeLg,
            fontWeight: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.typography.weightBold,
            color: '#FFFFFF'
        };
        const catCountStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.typography.sizeSm,
            fontWeight: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.typography.weightMedium,
            color: '#FFFFFF'
        };
        const arrowStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.typography.sizeXl,
            color: '#008000',
            textAlignment: 'right'
        };
        const emptyStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.typography.sizeMd,
            color: '#FFFFFF',
            textAlignment: 'center',
            margin: _utils_design__WEBPACK_IMPORTED_MODULE_2__.DSFR.spacing['2xl']
        };
        const __returned__ = { navigateTo, pageStore, countForCategory, selectCategory, containerStyle, pageTitleStyle, categoryCardStyle, catNameStyle, catCountStyle, arrowStyle, emptyStyle, AppBar: _components_layout_AppBar_vue__WEBPACK_IMPORTED_MODULE_3__["default"], BottomMenu: _components_layout_BottomMenu_vue__WEBPACK_IMPORTED_MODULE_4__["default"], get GridLayout() { return _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.GridLayout; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Image");
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
    const _component_GridLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GridLayout");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_GridLayout, {
        rows: "66",
        columns: "auto, *, auto",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.barStyle)
    }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Return button "),
            ($props.showBack)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Image, {
                    key: 0,
                    col: "0",
                    src: "~/assets/icons/back-redirection.png",
                    width: "24",
                    height: "24",
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.backImageStyle),
                    verticalAlignment: "center",
                    accessibilityRole: "button",
                    accessibilityLabel: "Retour",
                    onTap: $setup.goBack
                }, null, 8 /* PROPS */, ["style"]))
                : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Label, {
                    key: 1,
                    col: "0",
                    text: "",
                    width: "40"
                })),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Title "),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                col: "1",
                text: $props.title,
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.titleStyle),
                horizontalAlignment: "center",
                verticalAlignment: "center",
                accessibilityRole: "header"
            }, null, 8 /* PROPS */, ["text", "style"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Slot right action "),
            ($props.actionIcon)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Button, {
                    key: 2,
                    col: "2",
                    text: $props.actionIcon,
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.actionStyle),
                    accessibilityRole: "button",
                    accessibilityLabel: $props.actionLabel,
                    onTap: _cache[0] || (_cache[0] = ($event) => (_ctx.$emit('action')))
                }, null, 8 /* PROPS */, ["text", "style", "accessibilityLabel"]))
                : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Label, {
                    key: 3,
                    col: "2",
                    text: "",
                    width: "40"
                }))
        ]),
        _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style"]));
}


/***/ },

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/pages/CategoriesView.vue?vue&type=template&id=7e5eb5e9&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_ActivityIndicator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityIndicator");
    const _component_StackLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StackLayout");
    const _component_ScrollView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScrollView");
    const _component_DockLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DockLayout");
    const _component_Page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Page");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Page, { actionBarHidden: "true" }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["GridLayout"], { rows: "auto, *" }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppBar"], {
                        row: "0",
                        title: "Catégories",
                        showBack: "",
                        onBack: _cache[0] || (_cache[0] = ($event) => ($setup.navigateTo('Home')))
                    }),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DockLayout, {
                        row: "1",
                        stretchLastChild: "true"
                    }, {
                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BottomMenu"], { dock: "bottom" }),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScrollView, null, {
                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.containerStyle }, {
                                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                text: "Explorer par catégorie",
                                                style: $setup.pageTitleStyle,
                                                accessibilityRole: "header"
                                            }),
                                            ($setup.pageStore.loading)
                                                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityIndicator, {
                                                    key: 0,
                                                    busy: true,
                                                    color: "#FFFFFF"
                                                }))
                                                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.pageStore.categories, (cat) => {
                                                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StackLayout, {
                                                    key: cat.id,
                                                    style: $setup.categoryCardStyle,
                                                    accessibilityRole: "button",
                                                    accessibilityLabel: 'Voir les ressources : ' + cat.name,
                                                    onTap: ($event) => ($setup.selectCategory(cat.id))
                                                }, {
                                                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["GridLayout"], { columns: "*, auto" }, {
                                                            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                                    col: "0",
                                                                    text: cat.name,
                                                                    style: $setup.catNameStyle
                                                                }, null, 8 /* PROPS */, ["text"]),
                                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                                    col: "1",
                                                                    text: $setup.countForCategory(cat.id) + ' ressource(s)',
                                                                    style: $setup.catCountStyle
                                                                }, null, 8 /* PROPS */, ["text"])
                                                            ]),
                                                            _: 2 /* DYNAMIC */
                                                        }, 1024 /* DYNAMIC_SLOTS */),
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                            text: "›",
                                                            style: $setup.arrowStyle
                                                        })
                                                    ]),
                                                    _: 2 /* DYNAMIC */
                                                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["accessibilityLabel", "onTap"]));
                                            }), 128 /* KEYED_FRAGMENT */)),
                                            ($setup.pageStore.categories.length === 0 && !$setup.pageStore.loading)
                                                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Label, {
                                                    key: 1,
                                                    text: "Aucune catégorie disponible.",
                                                    style: $setup.emptyStyle
                                                }))
                                                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                                        ]),
                                        _: 1 /* STABLE */
                                    })
                                ]),
                                _: 1 /* STABLE */
                            })
                        ]),
                        _: 1 /* STABLE */
                    })
                ]),
                _: 1 /* STABLE */
            })
        ]),
        _: 1 /* STABLE */
    }));
}


/***/ },

/***/ "./app/components/layout/AppBar.vue"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true");
/* harmony import */ var _AppBar_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/components/layout/AppBar.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppBar_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/components/layout/AppBar.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./app/views/pages/CategoriesView.vue"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoriesView_vue_vue_type_template_id_7e5eb5e9_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/views/pages/CategoriesView.vue?vue&type=template&id=7e5eb5e9&ts=true");
/* harmony import */ var _CategoriesView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/views/pages/CategoriesView.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CategoriesView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CategoriesView_vue_vue_type_template_id_7e5eb5e9_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/views/pages/CategoriesView.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./app/components/layout/AppBar.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=script&lang=ts&setup=true");
 

/***/ },

/***/ "./app/views/pages/CategoriesView.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CategoriesView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CategoriesView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/pages/CategoriesView.vue?vue&type=script&lang=ts&setup=true");
 

/***/ },

/***/ "./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true");


/***/ },

/***/ "./app/views/pages/CategoriesView.vue?vue&type=template&id=7e5eb5e9&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CategoriesView_vue_vue_type_template_id_7e5eb5e9_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CategoriesView_vue_vue_type_template_id_7e5eb5e9_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/pages/CategoriesView.vue?vue&type=template&id=7e5eb5e9&ts=true");


/***/ }

};

//# sourceMappingURL=file:///C:\Users\yaani\CESIZen\cesizen-app\platforms\android\app\src\main\assets\app/app_views_pages_CategoriesView_vue.mjs.map