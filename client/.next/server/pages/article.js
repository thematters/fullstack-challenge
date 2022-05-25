"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/article";
exports.ids = ["pages/article"];
exports.modules = {

/***/ "./src/graphql/mutations/article.ts":
/*!******************************************!*\
  !*** ./src/graphql/mutations/article.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_ARTICLE\": () => (/* binding */ ADD_ARTICLE),\n/* harmony export */   \"GET_ARTICLES\": () => (/* binding */ GET_ARTICLES),\n/* harmony export */   \"GET_ARTICLES_COUNT\": () => (/* binding */ GET_ARTICLES_COUNT),\n/* harmony export */   \"GET_ARTICLE_BY_ID\": () => (/* binding */ GET_ARTICLE_BY_ID)\n/* harmony export */ });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_ARTICLES = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`\nquery articles($limit: Int, $offset: Int) {\n  articles (limit: $limit, offset: $offset) {\n    _id\n\t  title\n    content\n  }\n}\n`;\nconst GET_ARTICLE_BY_ID = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`\nquery article($_id: String!) {\n  article (_id: $_id) {\n    _id\n    title\n    content\n  }\n}\n`;\nconst ADD_ARTICLE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`\n  mutation addArticle($title: String!, $content: String!) {\n    addArticle(title: $title, content: $content) {\n      _id\n      title\n      content\n    }\n  }\n`;\nconst GET_ARTICLES_COUNT = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`\nquery articlesCount {\n  articlesCount\n}\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9tdXRhdGlvbnMvYXJ0aWNsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFFdkIsTUFBTUMsWUFBWSxHQUFHRCxvREFBRyxDQUFDOzs7Ozs7OztBQVFoQyxDQUFDLENBQUM7QUFFSyxNQUFNRSxpQkFBaUIsR0FBR0Ysb0RBQUcsQ0FBQzs7Ozs7Ozs7QUFRckMsQ0FBQyxDQUFDO0FBR0ssTUFBTUcsV0FBVyxHQUFHSCxvREFBRyxDQUFDOzs7Ozs7OztBQVEvQixDQUFDLENBQUM7QUFFSyxNQUFNSSxrQkFBa0IsR0FBR0osb0RBQUcsQ0FBQzs7OztBQUl0QyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvZ3JhcGhxbC9tdXRhdGlvbnMvYXJ0aWNsZS50cz9jYzU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfQVJUSUNMRVMgPSBncWxgXG5xdWVyeSBhcnRpY2xlcygkbGltaXQ6IEludCwgJG9mZnNldDogSW50KSB7XG4gIGFydGljbGVzIChsaW1pdDogJGxpbWl0LCBvZmZzZXQ6ICRvZmZzZXQpIHtcbiAgICBfaWRcblx0ICB0aXRsZVxuICAgIGNvbnRlbnRcbiAgfVxufVxuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9BUlRJQ0xFX0JZX0lEID0gZ3FsYFxucXVlcnkgYXJ0aWNsZSgkX2lkOiBTdHJpbmchKSB7XG4gIGFydGljbGUgKF9pZDogJF9pZCkge1xuICAgIF9pZFxuICAgIHRpdGxlXG4gICAgY29udGVudFxuICB9XG59XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBBRERfQVJUSUNMRSA9IGdxbGBcbiAgbXV0YXRpb24gYWRkQXJ0aWNsZSgkdGl0bGU6IFN0cmluZyEsICRjb250ZW50OiBTdHJpbmchKSB7XG4gICAgYWRkQXJ0aWNsZSh0aXRsZTogJHRpdGxlLCBjb250ZW50OiAkY29udGVudCkge1xuICAgICAgX2lkXG4gICAgICB0aXRsZVxuICAgICAgY29udGVudFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9BUlRJQ0xFU19DT1VOVCA9IGdxbGBcbnF1ZXJ5IGFydGljbGVzQ291bnQge1xuICBhcnRpY2xlc0NvdW50XG59XG5gO1xuIl0sIm5hbWVzIjpbImdxbCIsIkdFVF9BUlRJQ0xFUyIsIkdFVF9BUlRJQ0xFX0JZX0lEIiwiQUREX0FSVElDTEUiLCJHRVRfQVJUSUNMRVNfQ09VTlQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/mutations/article.ts\n");

/***/ }),

/***/ "./src/pages/article/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/article/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Artcile)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graphql_mutations_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphql/mutations/article */ \"./src/graphql/mutations/article.ts\");\n\n\n\n\n\nfunction Artcile(query) {\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    query = route.query;\n    console.log(query.id);\n    const { data , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_mutations_article__WEBPACK_IMPORTED_MODULE_4__.GET_ARTICLE_BY_ID, {\n        variables: {\n            _id: query.id\n        }\n    });\n    const title = data != null ? data.article[0].title : \"\";\n    const content = data != null ? data.article[0].content : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                my: 10,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                        href: \"/\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                my: 8,\n                                src: \"/images/zen.jpeg\"\n                            }, void 0, false, {\n                                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/article/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/article/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {\n                        borderColor: \"black\"\n                    }, void 0, false, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/article/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/article/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                maxW: \"1200px\",\n                width: \"100%\",\n                overflow: \"auto\",\n                marginX: \"auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        as: \"u\",\n                        fontSize: \"5xl\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/article/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 12\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        fontSize: \"3xl\",\n                        my: 10,\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/article/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/article/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZFO0FBQ3RDO0FBQ0U7QUFDMkI7QUFHckQsU0FBU1MsT0FBTyxDQUFDQyxLQUFVLEVBQUU7SUFDeEMsTUFBTUMsS0FBSyxHQUFHTCxzREFBUyxFQUFFO0lBQ3pCSSxLQUFLLEdBQUdDLEtBQUssQ0FBQ0QsS0FBSztJQUNuQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQ0ksRUFBRSxDQUFDO0lBQ3JCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUUsR0FBR1Qsd0RBQVEsQ0FBQ0MseUVBQWlCLEVBQUU7UUFDbERTLFNBQVMsRUFBRTtZQUNQQyxHQUFHLEVBQUVSLEtBQUssQ0FBQ0ksRUFBRTtTQUNoQjtLQUNKLENBQUM7SUFDRixNQUFNSyxLQUFLLEdBQUlKLElBQUksSUFBSSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRCxLQUFLLEdBQUcsRUFBRTtJQUN4RCxNQUFNRSxPQUFPLEdBQUdOLElBQUksSUFBSSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLEdBQUcsRUFBRTtJQUUzRCxxQkFDQTs7MEJBQ0ksOERBQUNsQixpREFBRztnQkFBQ21CLEVBQUUsRUFBRSxFQUFFOztrQ0FDWCw4REFBQ2pCLGtEQUFJO3dCQUFDa0IsSUFBSSxFQUFDLEdBQUc7OzRCQUFFLEdBQUM7MENBQUEsOERBQUNyQixtREFBSztnQ0FBQ29CLEVBQUUsRUFBRSxDQUFDO2dDQUFHRSxHQUFHLEVBQUMsa0JBQWtCOzs7OztvQ0FBRzs7Ozs7OzRCQUNsRDtrQ0FDSCw4REFBQ3BCLHFEQUFPO3dCQUFFcUIsV0FBVyxFQUFDLE9BQU87Ozs7OzRCQUFFOzs7Ozs7b0JBQzdCOzBCQUNOLDhEQUFDekIsdURBQVM7Z0JBQUMwQixJQUFJLEVBQUMsUUFBUTtnQkFBQ0MsS0FBSyxFQUFDLE1BQU07Z0JBQUNDLFFBQVEsRUFBQyxNQUFNO2dCQUFDQyxPQUFPLEVBQUMsTUFBTTs7a0NBQ2pFLDhEQUFDNUIsa0RBQUk7d0JBQUM2QixFQUFFLEVBQUMsR0FBRzt3QkFBQ0MsUUFBUSxFQUFDLEtBQUs7a0NBQUVaLEtBQUs7Ozs7OzRCQUFRO2tDQUV6Qyw4REFBQ2xCLGtEQUFJO3dCQUFDOEIsUUFBUSxFQUFDLEtBQUs7d0JBQUNULEVBQUUsRUFBRSxFQUFFO2tDQUFHRCxPQUFPOzs7Ozs0QkFBUTs7Ozs7O29CQUNyQzs7b0JBQ1IsQ0FDUDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL2FydGljbGUvaW5kZXgudHN4P2FjZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0LCBJbWFnZSwgQm94LCBEaXZpZGVyLCBMaW5rIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCB7IEdFVF9BUlRJQ0xFX0JZX0lEIH0gZnJvbSBcIi4uLy4uL2dyYXBocWwvbXV0YXRpb25zL2FydGljbGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRjaWxlKHF1ZXJ5OiBhbnkpIHtcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpXG4gICAgcXVlcnkgPSByb3V0ZS5xdWVyeVxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5LmlkKVxuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdXNlUXVlcnkoR0VUX0FSVElDTEVfQllfSUQsIHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBfaWQ6IHF1ZXJ5LmlkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHRpdGxlID0gIGRhdGEgIT0gbnVsbCA/IGRhdGEuYXJ0aWNsZVswXS50aXRsZSA6ICcnXG4gICAgY29uc3QgY29udGVudCA9IGRhdGEgIT0gbnVsbCA/IGRhdGEuYXJ0aWNsZVswXS5jb250ZW50IDogJydcbiAgICBcbiAgICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxCb3ggbXk9ezEwfT5cbiAgICAgICAgPExpbmsgaHJlZj0nLycgPiA8SW1hZ2UgbXk9ezh9ICBzcmM9XCIvaW1hZ2VzL3plbi5qcGVnXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPERpdmlkZXIgIGJvcmRlckNvbG9yPSdibGFjaycvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXPVwiMTIwMHB4XCIgd2lkdGg9XCIxMDAlXCIgb3ZlcmZsb3c9XCJhdXRvXCIgbWFyZ2luWD1cImF1dG9cIj5cbiAgICAgICAgICAgPFRleHQgYXM9J3UnIGZvbnRTaXplPSc1eGwnPnt0aXRsZX08L1RleHQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSczeGwnIG15PXsxMH0+e2NvbnRlbnR9PC9UZXh0PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiVGV4dCIsIkltYWdlIiwiQm94IiwiRGl2aWRlciIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsIkdFVF9BUlRJQ0xFX0JZX0lEIiwiQXJ0Y2lsZSIsInF1ZXJ5Iiwicm91dGUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwibG9hZGluZyIsInZhcmlhYmxlcyIsIl9pZCIsInRpdGxlIiwiYXJ0aWNsZSIsImNvbnRlbnQiLCJteSIsImhyZWYiLCJzcmMiLCJib3JkZXJDb2xvciIsIm1heFciLCJ3aWR0aCIsIm92ZXJmbG93IiwibWFyZ2luWCIsImFzIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/article/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/article/index.tsx"));
module.exports = __webpack_exports__;

})();