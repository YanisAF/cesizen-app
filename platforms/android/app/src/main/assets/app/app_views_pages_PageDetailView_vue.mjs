export const __webpack_esm_id__ = "app_views_pages_PageDetailView_vue";
export const __webpack_esm_ids__ = ["app_views_pages_PageDetailView_vue"];
export const __webpack_esm_modules__ = {

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/AlertBanner.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var _utils_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/design.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'AlertBanner',
    props: {
        message: { type: String, required: true },
        type: { type: String, required: false, default: 'info' },
        visible: { type: Boolean, required: false, default: true }
    },
    setup(__props, { expose: __expose }) {
        __expose();
        const props = __props;
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            success: { bg: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.colors.successLight, color: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.colors.success, icon: '✓' },
            error: { bg: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.colors.errorLight, color: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.colors.error, icon: '✕' },
            warning: { bg: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.colors.warningLight, color: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.colors.warning, icon: '⚠' },
            info: { bg: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.colors.infoLight, color: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.colors.info, icon: 'ℹ' }
        }[props.type]));
        const iconText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => config.value.icon);
        const bannerStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            backgroundColor: config.value.bg,
            borderLeftWidth: 4,
            borderLeftColor: config.value.color,
            borderRadius: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.radius.sm,
            padding: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.spacing.md,
            marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.spacing.md
        }));
        const textStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            color: config.value.color,
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.typography.sizeMd,
            fontWeight: _utils_design__WEBPACK_IMPORTED_MODULE_1__.DSFR.typography.weightMedium
        }));
        const __returned__ = { props, config, iconText, bannerStyle, textStyle };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

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

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/pages/PageDetailView.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var _composables_useNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/composables/useNavigation.ts");
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/stores/auth.ts");
/* harmony import */ var _stores_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/stores/pages.ts");
/* harmony import */ var _utils_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/design.ts");
/* harmony import */ var _components_layout_AppBar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/components/layout/AppBar.vue");
/* harmony import */ var _components_common_DsfrButton_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/components/common/DsfrButton.vue");
/* harmony import */ var _components_common_AlertBanner_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/components/common/AlertBanner.vue");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'PageDetailView',
    props: {
        id: { type: [String, Number], required: true }
    },
    setup(__props, { expose: __expose }) {
        __expose();
        const { navigateTo } = (0,_composables_useNavigation__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
        const props = __props;
        const authStore = (0,_stores_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthStore)();
        const pageStore = (0,_stores_pages__WEBPACK_IMPORTED_MODULE_3__.usePageStore)();
        const page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => pageStore.currentPage);
        const isSaved = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => pageStore.isSaved(Number(props.id)));
        function toggleSave() {
            if (!authStore.isAuthenticated) {
                navigateTo('Login');
                return;
            }
            pageStore.toggleSave(Number(props.id));
        }
        function openLink(url) {
            try {
                const { Utils } = __webpack_require__("./node_modules/@nativescript/core/index.js");
                Utils.openUrl(url);
            }
            catch (_) { }
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => pageStore.fetchById(Number(props.id)));
        // --- STYLES ---
        const containerStyle = { backgroundColor: '#008000', paddingBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.lg };
        const heroContainer = { marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.md };
        const heroImageStyle = { width: '100%', height: 200, borderRadius: 8 };
        const heroPlaceholderStyle = {
            width: '100%',
            height: 160,
            backgroundColor: '#90EE90',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8
        };
        const heroIconStyle = { fontSize: 56, textAlignment: 'center', lineHeight: 10 };
        const headerStyle = { backgroundColor: '#FFFFFF', padding: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.lg, paddingTop: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.md, borderRadius: 8, marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.md };
        const categoryStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeSm,
            color: '#006400',
            fontWeight: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.weightBold,
            textTransform: 'uppercase',
            marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.xs,
            lineHeight: 10
        };
        const titleStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeXl,
            fontWeight: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.weightBold,
            color: '#004d00',
            lineHeight: 10
        };
        const saveBarStyle = {
            backgroundColor: '#FFFFFF',
            padding: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.md,
            borderBottomWidth: 1,
            borderBottomColor: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.colors.grey200,
            borderRadius: 8,
            marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.md
        };
        const sectionCardStyle = {
            backgroundColor: '#FFFFFF',
            padding: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.lg,
            marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm,
            borderRadius: 8
        };
        const sectionTitleStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeLg,
            fontWeight: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.weightBold,
            color: '#006400',
            marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm,
            borderLeftWidth: 4,
            borderLeftColor: '#00AA00',
            paddingLeft: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm,
            lineHeight: 10
        };
        const descriptionStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeMd,
            color: '#004d00',
            lineHeight: 10
        };
        const linkStyle = {
            fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeMd,
            color: '#006400',
            marginTop: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm,
            textDecoration: 'underline',
            lineHeight: 10
        };
        const loaderStyle = { margin: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing['2xl'] };
        const __returned__ = { navigateTo, props, authStore, pageStore, page, isSaved, toggleSave, openLink, containerStyle, heroContainer, heroImageStyle, heroPlaceholderStyle, heroIconStyle, headerStyle, categoryStyle, titleStyle, saveBarStyle, sectionCardStyle, sectionTitleStyle, descriptionStyle, linkStyle, loaderStyle, AppBar: _components_layout_AppBar_vue__WEBPACK_IMPORTED_MODULE_5__["default"], DsfrButton: _components_common_DsfrButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"], AlertBanner: _components_common_AlertBanner_vue__WEBPACK_IMPORTED_MODULE_7__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/AlertBanner.vue?vue&type=template&id=57709671&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_StackLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StackLayout");
    return ($props.visible)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StackLayout, {
            key: 0,
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.bannerStyle),
            accessibilityRole: "alert",
            accessibilityLabel: $props.message
        }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                    text: $setup.iconText + '  ' + $props.message,
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.textStyle),
                    textWrap: "true"
                }, null, 8 /* PROPS */, ["text", "style"])
            ]),
            _: 1 /* STABLE */
        }, 8 /* PROPS */, ["style", "accessibilityLabel"]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}


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

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/pages/PageDetailView.vue?vue&type=template&id=031ae8e6&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ActivityIndicator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityIndicator");
    const _component_Image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Image");
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_StackLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StackLayout");
    const _component_ScrollView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScrollView");
    const _component_GridLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GridLayout");
    const _component_Page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Page");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Page, { actionBarHidden: "true" }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GridLayout, { rows: "56, *" }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AppBar custom "),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppBar"], {
                        row: "0",
                        title: $setup.page?.title ?? 'Ressource',
                        showBack: "",
                        actionIcon: $setup.isSaved ? '🔖' : '☆',
                        actionLabel: $setup.isSaved ? 'Retirer des favoris' : 'Sauvegarder cette ressource',
                        onBack: _cache[0] || (_cache[0] = ($event) => ($setup.navigateTo('PageList'))),
                        onAction: $setup.toggleSave
                    }, null, 8 /* PROPS */, ["title", "actionIcon", "actionLabel"]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contenu principal "),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScrollView, { row: "1" }, {
                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.containerStyle }, {
                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Loader "),
                                    ($setup.pageStore.loading)
                                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityIndicator, {
                                            key: 0,
                                            busy: true,
                                            style: $setup.loaderStyle
                                        }))
                                        : ($setup.page)
                                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Hero image / placeholder "),
                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.heroContainer }, {
                                                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                        ($setup.page.imageUrl)
                                                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Image, {
                                                                key: 0,
                                                                src: $setup.page.imageUrl,
                                                                stretch: "aspectFill",
                                                                style: $setup.heroImageStyle,
                                                                accessibilityLabel: $setup.page.title
                                                            }, null, 8 /* PROPS */, ["src", "accessibilityLabel"]))
                                                            : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StackLayout, {
                                                                key: 1,
                                                                style: $setup.heroPlaceholderStyle
                                                            }, {
                                                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                                        text: "📄",
                                                                        style: $setup.heroIconStyle
                                                                    })
                                                                ]),
                                                                _: 1 /* STABLE */
                                                            }))
                                                    ]),
                                                    _: 1 /* STABLE */
                                                }),
                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Header "),
                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.headerStyle }, {
                                                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                            text: $setup.page.category.name,
                                                            style: $setup.categoryStyle
                                                        }, null, 8 /* PROPS */, ["text"]),
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                            text: $setup.page.title,
                                                            style: $setup.titleStyle,
                                                            textWrap: "true",
                                                            accessibilityRole: "header"
                                                        }, null, 8 /* PROPS */, ["text"])
                                                    ]),
                                                    _: 1 /* STABLE */
                                                }),
                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sauvegarde "),
                                                ($setup.authStore.isAuthenticated)
                                                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StackLayout, {
                                                        key: 0,
                                                        style: $setup.saveBarStyle
                                                    }, {
                                                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DsfrButton"], {
                                                                label: $setup.isSaved ? '🔖 Ressource sauvegardée' : '☆ Sauvegarder cette ressource',
                                                                variant: $setup.isSaved ? 'primary' : 'secondary',
                                                                fullWidth: "",
                                                                onTap: $setup.toggleSave
                                                            }, null, 8 /* PROPS */, ["label", "variant"])
                                                        ]),
                                                        _: 1 /* STABLE */
                                                    }))
                                                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contenu "),
                                                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.page.content, (section, i) => {
                                                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StackLayout, {
                                                        key: i,
                                                        style: $setup.sectionCardStyle
                                                    }, {
                                                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                                text: "Article",
                                                                style: $setup.sectionTitleStyle,
                                                                accessibilityRole: "header"
                                                            }),
                                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                                text: section.description,
                                                                style: $setup.descriptionStyle,
                                                                textWrap: "true"
                                                            }, null, 8 /* PROPS */, ["text"]),
                                                            (section.itemUrl)
                                                                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Label, {
                                                                    key: 0,
                                                                    text: '🔗  ' + section.itemUrl,
                                                                    style: $setup.linkStyle,
                                                                    onTap: ($event) => ($setup.openLink(section.itemUrl)),
                                                                    accessibilityRole: "link",
                                                                    accessibilityLabel: 'Ouvrir le lien : ' + section.name
                                                                }, null, 8 /* PROPS */, ["text", "onTap", "accessibilityLabel"]))
                                                                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                                                        ]),
                                                        _: 2 /* DYNAMIC */
                                                    }, 1024 /* DYNAMIC_SLOTS */));
                                                }), 128 /* KEYED_FRAGMENT */))
                                            ], 64 /* STABLE_FRAGMENT */))
                                            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Erreur "),
                                    ($setup.pageStore.error)
                                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AlertBanner"], {
                                            key: 2,
                                            message: $setup.pageStore.error,
                                            type: "error"
                                        }, null, 8 /* PROPS */, ["message"]))
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
    }));
}


/***/ },

/***/ "./app/components/common/AlertBanner.vue"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertBanner_vue_vue_type_template_id_57709671_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/components/common/AlertBanner.vue?vue&type=template&id=57709671&ts=true");
/* harmony import */ var _AlertBanner_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/components/common/AlertBanner.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AlertBanner_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AlertBanner_vue_vue_type_template_id_57709671_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/components/common/AlertBanner.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./app/views/pages/PageDetailView.vue"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageDetailView_vue_vue_type_template_id_031ae8e6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/views/pages/PageDetailView.vue?vue&type=template&id=031ae8e6&ts=true");
/* harmony import */ var _PageDetailView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/views/pages/PageDetailView.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PageDetailView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PageDetailView_vue_vue_type_template_id_031ae8e6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/views/pages/PageDetailView.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./app/components/common/AlertBanner.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertBanner_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertBanner_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/AlertBanner.vue?vue&type=script&lang=ts&setup=true");
 

/***/ },

/***/ "./app/components/layout/AppBar.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=script&lang=ts&setup=true");
 

/***/ },

/***/ "./app/views/pages/PageDetailView.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageDetailView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageDetailView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/pages/PageDetailView.vue?vue&type=script&lang=ts&setup=true");
 

/***/ },

/***/ "./app/components/common/AlertBanner.vue?vue&type=template&id=57709671&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertBanner_vue_vue_type_template_id_57709671_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertBanner_vue_vue_type_template_id_57709671_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/AlertBanner.vue?vue&type=template&id=57709671&ts=true");


/***/ },

/***/ "./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true");


/***/ },

/***/ "./app/views/pages/PageDetailView.vue?vue&type=template&id=031ae8e6&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageDetailView_vue_vue_type_template_id_031ae8e6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageDetailView_vue_vue_type_template_id_031ae8e6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/pages/PageDetailView.vue?vue&type=template&id=031ae8e6&ts=true");


/***/ }

};

//# sourceMappingURL=file:///C:\Users\yaani\CESIZen\cesizen-app\platforms\android\app\src\main\assets\app/app_views_pages_PageDetailView_vue.mjs.map