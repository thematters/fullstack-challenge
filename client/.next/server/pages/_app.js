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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/graphql/client.ts":
/*!*******************************!*\
  !*** ./src/graphql/client.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"http://localhost:4000\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZEO0FBR3RELE1BQU1FLE1BQU0sR0FBRyxJQUFJRix3REFBWSxDQUFDO0lBQ3JDRyxHQUFHLEVBQUUsdUJBQXVCO0lBQzVCQyxLQUFLLEVBQUUsSUFBSUgseURBQWEsRUFBRTtDQUMzQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvZ3JhcGhxbC9jbGllbnQudHM/NmYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIixcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/client.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/connectors/injected */ \"wagmi/connectors/injected\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _graphql_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/client */ \"./src/graphql/client.ts\");\n\n\n\n\n\n\n\n\nconst infuraId = \"daf8891712ea43749c341aa507a8b3b5\";\nconst chains = wagmi__WEBPACK_IMPORTED_MODULE_6__.defaultChains;\n// const { chains, provider, webSocketProvider } = configureChains(defaultChains, [\n//     alchemyProvider({ alchemyId }),\n//     publicProvider(),\n//   ])\nconst walletClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.createClient)({\n    autoConnect: true,\n    connectors: [\n        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_2__.InjectedConnector({\n            chains,\n            options: {\n                name: \"MetaMask\",\n                shimDisconnect: true\n            }\n        }),\n        new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__.WalletConnectConnector({\n            chains,\n            options: {\n                qrcode: true\n            }\n        }), \n    ]\n});\nfunction BlogApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {\n        client: _graphql_client__WEBPACK_IMPORTED_MODULE_7__.client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n                client: walletClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/_app.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/_app.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/_app.tsx\",\n            lineNumber: 49,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/pages/_app.tsx\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQStCO0FBRStCO0FBQ1M7QUFDdEI7QUFDRDtBQUVhO0FBRWxCO0FBRTNDLE1BQU1RLFFBQVEsR0FBR0Msa0NBQWlDO0FBRWxELE1BQU1HLE1BQU0sR0FBR1AsZ0RBQWE7QUFHNUIsbUZBQW1GO0FBQ25GLHNDQUFzQztBQUN0Qyx3QkFBd0I7QUFDeEIsT0FBTztBQUVQLE1BQU1RLFlBQVksR0FBR1QsbURBQVksQ0FBQztJQUM5QlUsV0FBVyxFQUFFLElBQUk7SUFDakJDLFVBQVUsRUFBRTtRQUNWLElBQUlmLHdFQUFpQixDQUFDO1lBQ3BCWSxNQUFNO1lBQ05JLE9BQU8sRUFBRTtnQkFDUEMsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCQyxjQUFjLEVBQUUsSUFBSTthQUNyQjtTQUNGLENBQUM7UUFDRixJQUFJakIsa0ZBQXNCLENBQUM7WUFDekJXLE1BQU07WUFDTkksT0FBTyxFQUFFO2dCQUNQRyxNQUFNLEVBQUUsSUFBSTthQUNiO1NBQ0YsQ0FBQztLQUNIO0NBRUYsQ0FBQztBQUlXLFNBQVNDLE9BQU8sQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2xFLHFCQUNBLDhEQUFDbkIsMERBQWM7UUFBQ0ksTUFBTSxFQUFFQSxtREFBTTtrQkFDNUIsNEVBQUNMLDREQUFjO3NCQUNiLDRFQUFDSSwyQ0FBUTtnQkFBQ0MsTUFBTSxFQUFFTSxZQUFZOzBCQUM1Qiw0RUFBQ1EsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ25COzs7OztnQkFDSTs7Ozs7WUFDRixDQUNmO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2luamVjdGVkXCI7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy93YWxsZXRDb25uZWN0J1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBkZWZhdWx0Q2hhaW5zLCBQcm92aWRlciB9IGZyb20gJ3dhZ21pJ1xuXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vZ3JhcGhxbC9jbGllbnRcIjtcblxuY29uc3QgaW5mdXJhSWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTkZVUkFfSUQ7XG5cbmNvbnN0IGNoYWlucyA9IGRlZmF1bHRDaGFpbnM7XG5cblxuLy8gY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyLCB3ZWJTb2NrZXRQcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKGRlZmF1bHRDaGFpbnMsIFtcbi8vICAgICBhbGNoZW15UHJvdmlkZXIoeyBhbGNoZW15SWQgfSksXG4vLyAgICAgcHVibGljUHJvdmlkZXIoKSxcbi8vICAgXSlcblxuY29uc3Qgd2FsbGV0Q2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgICBjb25uZWN0b3JzOiBbXG4gICAgICBuZXcgSW5qZWN0ZWRDb25uZWN0b3Ioe1xuICAgICAgICBjaGFpbnMsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBuYW1lOiAnTWV0YU1hc2snLFxuICAgICAgICAgIHNoaW1EaXNjb25uZWN0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSksICAgICAgXG4gICAgICBuZXcgV2FsbGV0Q29ubmVjdENvbm5lY3Rvcih7XG4gICAgICAgIGNoYWlucyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHFyY29kZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgLy8gcHJvdmlkZXJcbiAgfSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgIDxQcm92aWRlciBjbGllbnQ9e3dhbGxldENsaWVudH0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSW5qZWN0ZWRDb25uZWN0b3IiLCJXYWxsZXRDb25uZWN0Q29ubmVjdG9yIiwiQ2hha3JhUHJvdmlkZXIiLCJBcG9sbG9Qcm92aWRlciIsImNyZWF0ZUNsaWVudCIsImRlZmF1bHRDaGFpbnMiLCJQcm92aWRlciIsImNsaWVudCIsImluZnVyYUlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lORlVSQV9JRCIsImNoYWlucyIsIndhbGxldENsaWVudCIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyIsIm9wdGlvbnMiLCJuYW1lIiwic2hpbURpc2Nvbm5lY3QiLCJxcmNvZGUiLCJCbG9nQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/injected":
/*!********************************************!*\
  !*** external "wagmi/connectors/injected" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/injected");

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/walletConnect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();