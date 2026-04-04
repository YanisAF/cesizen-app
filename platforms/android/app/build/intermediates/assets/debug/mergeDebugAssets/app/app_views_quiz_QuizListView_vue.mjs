export const __webpack_esm_id__ = "app_views_quiz_QuizListView_vue";
export const __webpack_esm_ids__ = ["app_views_quiz_QuizListView_vue"];
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

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/quiz/QuizListView.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var _composables_useNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/composables/useNavigation.ts");
/* harmony import */ var _stores_quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/stores/quiz.ts");
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/stores/auth.ts");
/* harmony import */ var _utils_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/design.ts");
/* harmony import */ var _components_layout_AppBar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/components/layout/AppBar.vue");
/* harmony import */ var _components_layout_BottomMenu_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/components/layout/BottomMenu.vue");
/* harmony import */ var _components_common_SearchBar_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/components/common/SearchBar.vue");
/* harmony import */ var _components_common_DsfrButton_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/components/common/DsfrButton.vue");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'QuizListView',
    setup(__props, { expose: __expose }) {
        __expose();
        const quizStore = (0,_stores_quiz__WEBPACK_IMPORTED_MODULE_2__.useQuizStore)();
        const authStore = (0,_stores_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthStore)();
        const { navigateTo } = (0,_composables_useNavigation__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
        // --- STATE ---
        const searchQuery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
        const currentPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        const pageSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(10);
        const pageSizes = [10, 20, 50];
        // --- FILTRAGE ---
        const filteredQuizzes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const list = quizStore.quizList ?? [];
            if (!searchQuery.value)
                return list;
            return quizStore.searchQuiz(searchQuery.value);
        });
        // --- PAGINATION ---
        const totalPages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Math.max(1, Math.ceil(filteredQuizzes.value.length / pageSize.value)));
        const paginatedQuizzes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const start = (currentPage.value - 1) * pageSize.value;
            return filteredQuizzes.value.slice(start, start + pageSize.value);
        });
        // --- WATCHERS ---
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([searchQuery, pageSize], () => (currentPage.value = 1));
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([filteredQuizzes, pageSize], () => {
            if (currentPage.value > totalPages.value)
                currentPage.value = totalPages.value;
        });
        // --- ACTIONS ---
        function onQuizTap(args) {
            const quiz = paginatedQuizzes.value[args.index];
            if (!quiz || quiz.id == null)
                return;
            navigateTo('QuizDetail', { id: quiz.id.toString() });
        }
        function setPageSize(size) {
            pageSize.value = size;
        }
        function nextPage() {
            if (currentPage.value < totalPages.value)
                currentPage.value++;
        }
        function prevPage() {
            if (currentPage.value > 1)
                currentPage.value--;
        }
        // --- FETCH DATA ---
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
            await quizStore.fetchAll();
        });
        // --- STYLES ---
        const containerStyle = { backgroundColor: '#008000' };
        const searchBarContainer = { backgroundColor: '#008000', padding: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.md };
        function pageSizeChip(active) {
            return {
                backgroundColor: active ? '#006400' : '#FFFFFF',
                color: active ? '#FFFFFF' : '#008000',
                borderRadius: 20,
                padding: '4 12',
                margin: '0 4'
            };
        }
        const cardStyle = { backgroundColor: '#FFFFFF', padding: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.lg, marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm, marginLeft: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm, marginRight: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm, borderRadius: 8 };
        const cardTitleStyle = { fontWeight: 'bold', color: '#008000', lineHeight: 10 };
        const countStyle = { fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeSm, color: '#006400', fontWeight: 'bold', backgroundColor: '#90EE90', borderRadius: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.radius.sm, padding: '2 8', textAlignment: 'center', lineHeight: 10 };
        const descStyle = { fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeSm, color: '#004d00', marginTop: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.xs, marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm, lineHeight: 10 };
        const ctaStyle = { fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeSm, color: '#006400', fontWeight: 'bold', lineHeight: 10 };
        const loaderStyle = { margin: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing['2xl'] };
        const emptyStyle = { textAlignment: 'center', margin: 20, color: '#004d00', fontWeight: 'bold', lineHeight: 10 };
        const visitorBannerStyle = { backgroundColor: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.colors.infoLight, padding: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.lg, margin: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.md, borderRadius: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.radius.md };
        const visitorBannerTextStyle = { fontSize: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.typography.sizeSm, color: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.colors.info, marginBottom: _utils_design__WEBPACK_IMPORTED_MODULE_4__.DSFR.spacing.sm, lineHeight: 10 };
        const __returned__ = { quizStore, authStore, navigateTo, searchQuery, currentPage, pageSize, pageSizes, filteredQuizzes, totalPages, paginatedQuizzes, onQuizTap, setPageSize, nextPage, prevPage, containerStyle, searchBarContainer, pageSizeChip, cardStyle, cardTitleStyle, countStyle, descStyle, ctaStyle, loaderStyle, emptyStyle, visitorBannerStyle, visitorBannerTextStyle, AppBar: _components_layout_AppBar_vue__WEBPACK_IMPORTED_MODULE_5__["default"], BottomMenu: _components_layout_BottomMenu_vue__WEBPACK_IMPORTED_MODULE_6__["default"], SearchBar: _components_common_SearchBar_vue__WEBPACK_IMPORTED_MODULE_7__["default"], DsfrButton: _components_common_DsfrButton_vue__WEBPACK_IMPORTED_MODULE_8__["default"] };
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

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/quiz/QuizListView.vue?vue&type=template&id=134812f6&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ActionBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActionBar");
    const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_StackLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StackLayout");
    const _component_GridLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GridLayout");
    const _component_ListView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListView");
    const _component_ActivityIndicator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityIndicator");
    const _component_DockLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DockLayout");
    const _component_Page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Page");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Page, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AppBar "),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ActionBar, null, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppBar"], {
                        title: "Quiz",
                        showBack: "",
                        onBack: _cache[0] || (_cache[0] = ($event) => ($setup.navigateTo('Home')))
                    })
                ]),
                _: 1 /* STABLE */
            }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DockLayout, { stretchLastChild: "true" }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Bottom Menu "),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BottomMenu"], { dock: "bottom" }),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Pagination "),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, {
                        dock: "bottom",
                        orientation: "horizontal",
                        horizontalAlignment: "center",
                        margin: "8",
                        spacing: "8"
                    }, {
                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
                                text: "« Prev",
                                isEnabled: $setup.currentPage > 1,
                                onTap: $setup.prevPage
                            }, null, 8 /* PROPS */, ["isEnabled"]),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                text: `Page ${$setup.currentPage} / ${$setup.totalPages}`,
                                verticalAlignment: "center"
                            }, null, 8 /* PROPS */, ["text"]),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
                                text: "Next »",
                                isEnabled: $setup.currentPage < $setup.totalPages,
                                onTap: $setup.nextPage
                            }, null, 8 /* PROPS */, ["isEnabled"])
                        ]),
                        _: 1 /* STABLE */
                    }),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contenu principal "),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GridLayout, {
                        rows: "auto, *",
                        style: $setup.containerStyle
                    }, {
                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" HEADER (fixe) "),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, {
                                row: "0",
                                style: $setup.searchBarContainer
                            }, {
                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SearchBar"], {
                                        modelValue: $setup.searchQuery,
                                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.searchQuery) = $event)),
                                        hint: "Rechercher un quiz…"
                                    }, null, 8 /* PROPS */, ["modelValue"]),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Page size "),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, {
                                        orientation: "horizontal",
                                        horizontalAlignment: "center",
                                        marginTop: "8"
                                    }, {
                                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.pageSizes, (size) => {
                                                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                    key: size,
                                                    text: `${size}`,
                                                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.pageSizeChip(size === $setup.pageSize)),
                                                    onTap: ($event) => ($setup.setPageSize(size))
                                                }, null, 8 /* PROPS */, ["text", "style", "onTap"]);
                                            }), 64 /* STABLE_FRAGMENT */))
                                        ]),
                                        _: 1 /* STABLE */
                                    })
                                ]),
                                _: 1 /* STABLE */
                            }),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LISTE "),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListView, {
                                row: "1",
                                items: $setup.paginatedQuizzes,
                                onItemTap: $setup.onQuizTap
                            }, {
                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ item }) => [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { style: $setup.cardStyle }, {
                                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GridLayout, { columns: "*, auto" }, {
                                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                        col: "0",
                                                        text: item.title,
                                                        style: $setup.cardTitleStyle,
                                                        textWrap: "true"
                                                    }, null, 8 /* PROPS */, ["text"]),
                                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                        col: "1",
                                                        text: (item.questionList?.length ?? 0) + ' Q',
                                                        style: $setup.countStyle
                                                    }, null, 8 /* PROPS */, ["text"])
                                                ]),
                                                _: 2 /* DYNAMIC */
                                            }, 1024 /* DYNAMIC_SLOTS */),
                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                text: item.description,
                                                style: $setup.descStyle,
                                                textWrap: "true",
                                                maxLines: "2"
                                            }, null, 8 /* PROPS */, ["text"]),
                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                text: "Commencer le quiz ›",
                                                style: $setup.ctaStyle
                                            })
                                        ]),
                                        _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */)
                                ]),
                                _: 1 /* STABLE */
                            }, 8 /* PROPS */, ["items"])
                        ]),
                        _: 1 /* STABLE */
                    }),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Loader "),
                    ($setup.quizStore.loading)
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityIndicator, {
                            key: 0,
                            busy: true,
                            style: $setup.loaderStyle
                        }))
                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Empty "),
                    (!$setup.quizStore.loading && $setup.filteredQuizzes.length === 0)
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Label, {
                            key: 1,
                            text: "Aucun quiz disponible.",
                            style: $setup.emptyStyle
                        }))
                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Bandeau visiteur "),
                    (!$setup.authStore.isAuthenticated)
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StackLayout, {
                            key: 2,
                            style: $setup.visitorBannerStyle
                        }, {
                            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                    text: "ℹ️  En tant que visiteur, vous pouvez réaliser les quiz mais vos résultats ne seront pas sauvegardés.",
                                    textWrap: "true",
                                    style: $setup.visitorBannerTextStyle
                                }),
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DsfrButton"], {
                                    label: "Créer un compte pour sauvegarder",
                                    variant: "secondary",
                                    fullWidth: "",
                                    onTap: _cache[2] || (_cache[2] = ($event) => ($setup.navigateTo('Register')))
                                })
                            ]),
                            _: 1 /* STABLE */
                        }))
                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
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

/***/ "./app/views/quiz/QuizListView.vue"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizListView_vue_vue_type_template_id_134812f6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/views/quiz/QuizListView.vue?vue&type=template&id=134812f6&ts=true");
/* harmony import */ var _QuizListView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/views/quiz/QuizListView.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_QuizListView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuizListView_vue_vue_type_template_id_134812f6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/views/quiz/QuizListView.vue"]])
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

/***/ "./app/views/quiz/QuizListView.vue?vue&type=script&lang=ts&setup=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListView_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/quiz/QuizListView.vue?vue&type=script&lang=ts&setup=true");
 

/***/ },

/***/ "./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBar_vue_vue_type_template_id_63aa425a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/components/layout/AppBar.vue?vue&type=template&id=63aa425a&ts=true");


/***/ },

/***/ "./app/views/quiz/QuizListView.vue?vue&type=template&id=134812f6&ts=true"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListView_vue_vue_type_template_id_134812f6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_0_node_modules_nativescript_webpack_dist_loaders_native_class_downlevel_loader_index_js_node_modules_nativescript_webpack_dist_loaders_native_class_strip_loader_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizListView_vue_vue_type_template_id_134812f6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[0]!./node_modules/@nativescript/webpack/dist/loaders/native-class-downlevel-loader/index.js!./node_modules/@nativescript/webpack/dist/loaders/native-class-strip-loader/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/views/quiz/QuizListView.vue?vue&type=template&id=134812f6&ts=true");


/***/ }

};

//# sourceMappingURL=file:///C:\Users\yaani\CESIZen\cesizen-app\platforms\android\app\src\main\assets\app/app_views_quiz_QuizListView_vue.mjs.map