export const __webpack_esm_id__ = "app_views_auth_RegisterView_vue";
export const __webpack_esm_ids__ = ["app_views_auth_RegisterView_vue"];
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

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/DsfrInput.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'DsfrInput',
    props: {
        modelValue: { type: String, required: true },
        label: { type: String, required: false },
        hint: { type: String, required: false },
        error: { type: String, required: false },
        secure: { type: Boolean, required: false, default: false },
        keyboardType: { type: String, required: false },
        disabled: { type: Boolean, required: false, default: false },
        required: { type: Boolean, required: false, default: false },
        multiline: { type: Boolean, required: false, default: false },
        height: { type: Number, required: false }
    },
    emits: ["update:modelValue", "blur"],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const props = __props;
        const emit = __emit;
        function onTextChange(args) {
            console.log('=== textChange ===');
            console.log('args type:', typeof args);
            console.log('args value:', args?.value);
            const val = args?.value ?? '';
            console.log('val emis:', val);
            emit('update:modelValue', val);
        }
        function onBlur() {
            emit('blur');
        }
        const __returned__ = { props, emit, onTextChange, onBlur };
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
            height: 56,
            width: '100%'
        }));
        const titleStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center'
        }));
        const backStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            color: '#FFFFFF',
            fontSize: 20,
            backgroundColor: 'transparent',
            width: 40,
            padding: 0
        }));
        const actionStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            color: '#FFFFFF',
            fontSize: 20,
            backgroundColor: 'transparent',
            width: 40,
            padding: 0
        }));
        const __returned__ = { emit, goBack, barStyle, titleStyle, backStyle, actionStyle };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/auth/RegisterView.vue?vue&type=script&setup=true&lang=ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var _composables_useNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/composables/useNavigation.ts");
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/stores/auth.ts");
/* harmony import */ var _utils_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/design.ts");
/* harmony import */ var _components_layout_AppBar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/components/layout/AppBar.vue");
/* harmony import */ var _components_common_DsfrInput_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/components/common/DsfrInput.vue");
/* harmony import */ var _components_common_DsfrButton_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/components/common/DsfrButton.vue");
/* harmony import */ var _components_common_AlertBanner_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/components/common/AlertBanner.vue");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'RegisterView',
    setup(__props, { expose: __expose }) {
        __expose();
        const { navigateTo } = (0,_composables_useNavigation__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
        const authStore = (0,_stores_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthStore)();
        // --------------------
        // STATE
        // --------------------
        const form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
            user_name: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirm: ''
        });
        const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
            user_name: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirm: ''
        });
        // --------------------
        // VALIDATORS (simples)
        // --------------------
        const validateUserName = () => {
            if (!form.user_name)
                return errors.user_name = 'Champ requis';
            if (form.user_name.length < 3)
                return errors.user_name = 'Trop court';
            if (form.user_name.length > 32)
                return errors.user_name = 'Trop long';
            errors.user_name = '';
        };
        const validateEmail = () => {
            if (!form.email)
                return errors.email = 'Champ requis';
            const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
            errors.email = ok ? '' : 'Email invalide';
        };
        const validatePhone = () => {
            if (!form.phone)
                return errors.phone = ''; // ✅ optionnel
            const ok = /^(\+33|0)[1-9](\d{2}){4}$/.test(form.phone.replace(/\s/g, ''));
            errors.phone = ok ? '' : 'Téléphone invalide';
        };
        const validatePassword = () => {
            if (!form.password)
                return errors.password = 'Champ requis';
            if (form.password.length < 6)
                return errors.password = 'Minimum 6 caractères';
            errors.password = '';
        };
        const validatePasswordConfirm = () => {
            if (!form.passwordConfirm)
                return errors.passwordConfirm = 'Champ requis';
            if (form.password !== form.passwordConfirm) {
                return errors.passwordConfirm = 'Les mots de passe ne correspondent pas';
            }
            errors.passwordConfirm = '';
        };
        // --------------------
        // GLOBAL VALIDATION
        // --------------------
        const validateAll = () => {
            validateUserName();
            validateEmail();
            validatePhone();
            validatePassword();
            validatePasswordConfirm();
        };
        const canSubmit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return (form.user_name &&
                form.email &&
                form.password &&
                form.passwordConfirm &&
                !Object.values(errors).some(e => e));
        });
        // --------------------
        // SUBMIT
        // --------------------
        const submit = async () => {
            validateAll();
            if (!canSubmit.value)
                return;
            authStore.clearError();
            try {
                await authStore.register({
                    user_name: form.user_name,
                    email: form.email,
                    phone: form.phone || undefined,
                    password: form.password
                });
                navigateTo('Home');
            }
            catch (e) {
                console.log(e);
            }
        };
        // --------------------
        // STYLES
        // --------------------
        const containerStyle = { backgroundColor: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.colors.background };
        const headerStyle = { backgroundColor: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.colors.blueFrance, padding: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.spacing.xl };
        const rfStyle = { color: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.colors.white, fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.typography.sizeSm, marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.spacing.xs };
        const pageTitleStyle = { color: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.colors.white, fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.typography.size2xl };
        const rgpdStyle = { color: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.colors.white, fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.typography.sizeSm, marginTop: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.spacing.sm };
        const formStyle = { backgroundColor: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.colors.white, padding: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.spacing.xl, margin: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.spacing.lg };
        const consentStyle = { backgroundColor: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.colors.infoLight, padding: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.spacing.md, marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.spacing.lg };
        const consentTextStyle = { fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_3__.DSFR.typography.sizeSm };
        const __returned__ = { navigateTo, authStore, form, errors, validateUserName, validateEmail, validatePhone, validatePassword, validatePasswordConfirm, validateAll, canSubmit, submit, containerStyle, headerStyle, rfStyle, pageTitleStyle, rgpdStyle, formStyle, consentStyle, consentTextStyle, AppBar: _components_layout_AppBar_vue__WEBPACK_IMPORTED_MODULE_4__["default"], DsfrInput: _components_common_DsfrInput_vue__WEBPACK_IMPORTED_MODULE_5__["default"], DsfrButton: _components_common_DsfrButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"], AlertBanner: _components_common_AlertBanner_vue__WEBPACK_IMPORTED_MODULE_7__["default"] };
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

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/DsfrInput.vue?vue&type=template&id=09a71b10&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_TextField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextField");
    const _component_StackLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StackLayout");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StackLayout, { marginBottom: "16" }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            ($props.label)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Label, {
                    key: 0,
                    text: $props.label + ($props.required ? ' *' : ''),
                    fontSize: "14",
                    fontWeight: "500",
                    color: "#1e1e1e",
                    marginBottom: "6"
                }, null, 8 /* PROPS */, ["text"]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextField, {
                text: $props.modelValue,
                hint: $props.hint || '',
                secure: $props.secure === true,
                editable: !$props.disabled,
                fontSize: "16",
                color: "#1e1e1e",
                backgroundColor: "#FFFFFF",
                borderWidth: "2",
                borderColor: $props.error ? '#ce0500' : '#6a6a6a',
                borderRadius: "4",
                padding: "10",
                accessibilityLabel: $props.label || $props.hint || '',
                onTextChange: $setup.onTextChange,
                onBlur: $setup.onBlur
            }, null, 8 /* PROPS */, ["text", "hint", "secure", "editable", "borderColor", "accessibilityLabel"]),
            ($props.error)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Label, {
                    key: 1,
                    text: $props.error,
                    fontSize: "13",
                    color: "#ce0500",
                    marginTop: "4",
                    accessibilityRole: "alert"
                }, null, 8 /* PROPS */, ["text"]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]),
        _: 1 /* STABLE */
    }));
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
    const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_GridLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GridLayout");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_GridLayout, {
        rows: "auto",
        columns: "auto, *, auto",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.barStyle)
    }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Return button "),
            ($props.showBack)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Button, {
                    key: 0,
                    col: "0",
                    text: "←",
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.backStyle),
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

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/auth/RegisterView.vue?vue&type=template&id=30c014bc&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ActionBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActionBar");
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_StackLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StackLayout");
    const _component_ScrollView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScrollView");
    const _component_Page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Page");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Page, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ActionBar, null, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppBar"], {
                        title: "Créer un compte",
                        showBack: "",
                        onBack: _cache[0] || (_cache[0] = ($event) => ($setup.navigateTo('Login')))
                    })
                ]),
                _: 1 /* STABLE */
            }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScrollView, null, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.containerStyle }, {
                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Header "),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.headerStyle }, {
                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                        text: "🇫🇷 République Française",
                                        style: $setup.rfStyle
                                    }),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                        text: "Créer un compte",
                                        style: $setup.pageTitleStyle
                                    }),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                        text: "Vos données sont protégées conformément au RGPD.",
                                        style: $setup.rgpdStyle,
                                        textWrap: ""
                                    })
                                ]),
                                _: 1 /* STABLE */
                            }),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Form "),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.formStyle }, {
                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                    ($setup.authStore.error)
                                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AlertBanner"], {
                                            key: 0,
                                            message: $setup.authStore.error,
                                            type: "error"
                                        }, null, 8 /* PROPS */, ["message"]))
                                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DsfrInput"], {
                                        modelValue: $setup.form.user_name,
                                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.form.user_name) = $event)),
                                        label: "Identifiant",
                                        hint: "3 à 32 caractères",
                                        error: $setup.errors.user_name,
                                        required: "",
                                        onBlur: $setup.validateUserName
                                    }, null, 8 /* PROPS */, ["modelValue", "error"]),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DsfrInput"], {
                                        modelValue: $setup.form.email,
                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (($setup.form.email) = $event)),
                                        label: "Email",
                                        hint: "exemple@domaine.fr",
                                        keyboardType: "email",
                                        error: $setup.errors.email,
                                        required: "",
                                        onBlur: $setup.validateEmail
                                    }, null, 8 /* PROPS */, ["modelValue", "error"]),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DsfrInput"], {
                                        modelValue: $setup.form.phone,
                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (($setup.form.phone) = $event)),
                                        label: "Téléphone (optionnel)",
                                        hint: "06 00 00 00 00",
                                        keyboardType: "phone",
                                        error: $setup.errors.phone,
                                        onBlur: $setup.validatePhone
                                    }, null, 8 /* PROPS */, ["modelValue", "error"]),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DsfrInput"], {
                                        modelValue: $setup.form.password,
                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (($setup.form.password) = $event)),
                                        label: "Mot de passe",
                                        hint: "Minimum 6 caractères",
                                        secure: true,
                                        error: $setup.errors.password,
                                        required: "",
                                        onBlur: $setup.validatePassword
                                    }, null, 8 /* PROPS */, ["modelValue", "error"]),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DsfrInput"], {
                                        modelValue: $setup.form.passwordConfirm,
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => (($setup.form.passwordConfirm) = $event)),
                                        label: "Confirmer le mot de passe",
                                        secure: true,
                                        error: $setup.errors.passwordConfirm,
                                        required: "",
                                        onBlur: $setup.validatePasswordConfirm
                                    }, null, 8 /* PROPS */, ["modelValue", "error"]),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RGPD "),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.consentStyle }, {
                                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                text: "En créant votre compte, vous acceptez notre politique de confidentialité.",
                                                textWrap: "",
                                                style: $setup.consentTextStyle
                                            })
                                        ]),
                                        _: 1 /* STABLE */
                                    }),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DsfrButton"], {
                                        label: $setup.authStore.loading ? 'Création…' : 'Créer mon compte',
                                        variant: "primary",
                                        fullWidth: "",
                                        loading: $setup.authStore.loading,
                                        disabled: $setup.authStore.loading || !$setup.canSubmit,
                                        onTap: $setup.submit
                                    }, null, 8 /* PROPS */, ["label", "loading", "disabled"])
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

/***/ "./app/components/common/DsfrInput.vue"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DsfrInput_vue_vue_type_template_id_09a71b10_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/components/common/DsfrInput.vue?vue&type=template&id=09a71b10&ts=true");
/* harmony import */ var _DsfrInput_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/components/common/DsfrInput.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DsfrInput_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DsfrInput_vue_vue_type_template_id_09a71b10_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/components/common/DsfrInput.vue"]])
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

/***/ "./app/views/auth/RegisterView.vue"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterView_vue_vue_type_template_id_30c014bc_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/views/auth/RegisterView.vue?vue&type=template&id=30c014bc&ts=true");
/* harmony import */ var _RegisterView_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/views/auth/RegisterView.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RegisterView_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegisterView_vue_vue_type_template_id_30c014bc_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/views/auth/RegisterView.vue"]])
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

/***/ "./app/components/common/DsfrInput.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DsfrInput_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DsfrInput_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/DsfrInput.vue?vue&type=script&lang=ts&setup=true");
 

/***/ },

/***/ "./app/components/layout/AppBar.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=script&lang=ts&setup=true");
 

/***/ },

/***/ "./app/views/auth/RegisterView.vue?vue&type=script&setup=true&lang=ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterView_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterView_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/auth/RegisterView.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./app/components/common/AlertBanner.vue?vue&type=template&id=57709671&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertBanner_vue_vue_type_template_id_57709671_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertBanner_vue_vue_type_template_id_57709671_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/AlertBanner.vue?vue&type=template&id=57709671&ts=true");


/***/ },

/***/ "./app/components/common/DsfrInput.vue?vue&type=template&id=09a71b10&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DsfrInput_vue_vue_type_template_id_09a71b10_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DsfrInput_vue_vue_type_template_id_09a71b10_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/common/DsfrInput.vue?vue&type=template&id=09a71b10&ts=true");


/***/ },

/***/ "./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true");


/***/ },

/***/ "./app/views/auth/RegisterView.vue?vue&type=template&id=30c014bc&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterView_vue_vue_type_template_id_30c014bc_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterView_vue_vue_type_template_id_30c014bc_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/auth/RegisterView.vue?vue&type=template&id=30c014bc&ts=true");


/***/ }

};

//# sourceMappingURL=file:///C:\Users\yaani\CESIZen\cesizen-app\platforms\android\app\src\main\assets\app/app_views_auth_RegisterView_vue.mjs.map