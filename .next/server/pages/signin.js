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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3auth_web3auth_wagmi_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3auth/web3auth-wagmi-connector */ \"@web3auth/web3auth-wagmi-connector\");\n/* harmony import */ var _web3auth_web3auth_wagmi_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3auth_web3auth_wagmi_connector__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_3__]);\nwagmi__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)({\n        connector: new _web3auth_web3auth_wagmi_connector__WEBPACK_IMPORTED_MODULE_1__.Web3AuthConnector({\n            options: {\n                enableLogging: true,\n                clientId: \"BI4kN7k1MO01yKT79Jn5lzLAwzmGk_aZKCrBu9ZYrzXzh7_VPeptODagd_8H-Ny807694kLt3r59bkge7n1PYWY\",\n                network: \"testnet\",\n                chainId: \"0x1\"\n            }\n        })\n    });\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account  } = await connectAsync();\n        const userData = {\n            address: account,\n            chain: \"0x1\",\n            network: \"evm\"\n        };\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"/api/auth/request-message\", userData, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const message = data.message;\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\n         * instead of using signIn(..., redirect: \"/user\")\n         * we get the url from callback and push it to the router to avoid page refreshing\n         */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"/Users/ashishmishra/oracle.git/web3/moralis-web3auth/pages/signin.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(),\n                children: \"Authenticate via Web3Auth\"\n            }, void 0, false, {\n                fileName: \"/Users/ashishmishra/oracle.git/web3/moralis-web3auth/pages/signin.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ashishmishra/oracle.git/web3/moralis-web3auth/pages/signin.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFDOUI7QUFDcUM7QUFDdEM7QUFDZDtBQUV6QixTQUFTUSxTQUFTO0lBQ2QsTUFBTSxFQUFFQyxhQUFZLEVBQUUsR0FBR04saURBQVVBLENBQUM7UUFDaENPLFdBQVcsSUFBSVYsaUZBQWlCQSxDQUFDO1lBQzdCVyxTQUFTO2dCQUNMQyxlQUFlLElBQUk7Z0JBQ25CQyxVQUFVO2dCQUNWQyxTQUFTO2dCQUNUQyxTQUFTO1lBQ2I7UUFDSjtJQUNKO0lBQ0EsTUFBTSxFQUFFQyxnQkFBZSxFQUFFLEdBQUdYLG9EQUFhQTtJQUN6QyxNQUFNLEVBQUVZLFlBQVcsRUFBRSxHQUFHZixpREFBVUE7SUFDbEMsTUFBTSxFQUFFZ0IsaUJBQWdCLEVBQUUsR0FBR2QscURBQWNBO0lBQzNDLE1BQU0sRUFBRWUsS0FBSSxFQUFFLEdBQUdiLHNEQUFTQTtJQUUxQixNQUFNYyxhQUFhLFVBQVk7UUFDM0IsSUFBSUgsYUFBYTtZQUNiLE1BQU1EO1FBQ1YsQ0FBQztRQUVELE1BQU0sRUFBRUssUUFBTyxFQUFFLEdBQUcsTUFBTVo7UUFFMUIsTUFBTWEsV0FBVztZQUFFQyxTQUFTRjtZQUFTRyxPQUFPO1lBQU9WLFNBQVM7UUFBTTtRQUVsRSxNQUFNLEVBQUVXLEtBQUksRUFBRSxHQUFHLE1BQU1sQixpREFBVSxDQUFDLDZCQUE2QmUsVUFBVTtZQUNyRUssU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7UUFDSjtRQUVBLE1BQU1DLFVBQVVILEtBQUtHLE9BQU87UUFFNUIsTUFBTUMsWUFBWSxNQUFNWCxpQkFBaUI7WUFBRVU7UUFBUTtRQUVuRCw2REFBNkQ7UUFDN0QsTUFBTSxFQUFFRSxJQUFHLEVBQUUsR0FBRyxNQUFNN0IsdURBQU1BLENBQUMsZUFBZTtZQUN4QzJCO1lBQ0FDO1lBQ0FFLFVBQVUsS0FBSztZQUNmQyxhQUFhO1FBQ2pCO1FBQ0E7OztTQUdDLEdBQ0RiLEtBQUtXO0lBQ1Q7SUFFQSxxQkFDSSw4REFBQ0c7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNaEI7MEJBQWM7Ozs7Ozs7Ozs7OztBQUdqRDtBQUVBLGlFQUFlWixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9yYWxpcy13ZWIzYXV0aC8uL3BhZ2VzL3NpZ25pbi5qc3g/MDUzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWIzQXV0aENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzYXV0aC93ZWIzYXV0aC13YWdtaS1jb25uZWN0b3InXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgICBjb25zdCB7IGNvbm5lY3RBc3luYyB9ID0gdXNlQ29ubmVjdCh7XG4gICAgICAgIGNvbm5lY3RvcjogbmV3IFdlYjNBdXRoQ29ubmVjdG9yKHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVMb2dnaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWVudElkOiAnQkk0a043azFNTzAxeUtUNzlKbjVsekxBd3ptR2tfYVpLQ3JCdTlaWXJ6WHpoN19WUGVwdE9EYWdkXzhILU55ODA3Njk0a0x0M3I1OWJrZ2U3bjFQWVdZJywgLy8gR2V0IHlvdXIgb3duIGNsaWVudCBpZCBmcm9tIGh0dHBzOi8vZGFzaGJvYXJkLndlYjNhdXRoLmlvXG4gICAgICAgICAgICAgICAgbmV0d29yazogJ3Rlc3RuZXQnLCAvLyB3ZWIzYXV0aCBuZXR3b3JrXG4gICAgICAgICAgICAgICAgY2hhaW5JZDogJzB4MScsIC8vIGNoYWluSWQgdGhhdCB5b3Ugd2FudCB0byBjb25uZWN0IHdpdGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3QgeyBkaXNjb25uZWN0QXN5bmMgfSA9IHVzZURpc2Nvbm5lY3QoKVxuICAgIGNvbnN0IHsgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKVxuICAgIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKVxuICAgIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGhhbmRsZUF1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgZGlzY29ubmVjdEFzeW5jKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKClcblxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgYWRkcmVzczogYWNjb3VudCwgY2hhaW46ICcweDEnLCBuZXR3b3JrOiAnZXZtJyB9XG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2F1dGgvcmVxdWVzdC1tZXNzYWdlJywgdXNlckRhdGEsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlXG5cbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbk1lc3NhZ2VBc3luYyh7IG1lc3NhZ2UgfSlcblxuICAgICAgICAvLyByZWRpcmVjdCB1c2VyIGFmdGVyIHN1Y2Nlc3MgYXV0aGVudGljYXRpb24gdG8gJy91c2VyJyBwYWdlXG4gICAgICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrVXJsOiAnL3VzZXInLFxuICAgICAgICB9KVxuICAgICAgICAvKipcbiAgICAgICAgICogaW5zdGVhZCBvZiB1c2luZyBzaWduSW4oLi4uLCByZWRpcmVjdDogXCIvdXNlclwiKVxuICAgICAgICAgKiB3ZSBnZXQgdGhlIHVybCBmcm9tIGNhbGxiYWNrIGFuZCBwdXNoIGl0IHRvIHRoZSByb3V0ZXIgdG8gYXZvaWQgcGFnZSByZWZyZXNoaW5nXG4gICAgICAgICAqL1xuICAgICAgICBwdXNoKHVybClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoKCl9PkF1dGhlbnRpY2F0ZSB2aWEgV2ViM0F1dGg8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW4iXSwibmFtZXMiOlsiV2ViM0F1dGhDb25uZWN0b3IiLCJzaWduSW4iLCJ1c2VBY2NvdW50IiwidXNlQ29ubmVjdCIsInVzZVNpZ25NZXNzYWdlIiwidXNlRGlzY29ubmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiU2lnbkluIiwiY29ubmVjdEFzeW5jIiwiY29ubmVjdG9yIiwib3B0aW9ucyIsImVuYWJsZUxvZ2dpbmciLCJjbGllbnRJZCIsIm5ldHdvcmsiLCJjaGFpbklkIiwiZGlzY29ubmVjdEFzeW5jIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwicHVzaCIsImhhbmRsZUF1dGgiLCJhY2NvdW50IiwidXNlckRhdGEiLCJhZGRyZXNzIiwiY2hhaW4iLCJkYXRhIiwicG9zdCIsImhlYWRlcnMiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwidXJsIiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsImRpdiIsImgzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n");

/***/ }),

/***/ "@web3auth/web3auth-wagmi-connector":
/*!*****************************************************!*\
  !*** external "@web3auth/web3auth-wagmi-connector" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@web3auth/web3auth-wagmi-connector");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.jsx"));
module.exports = __webpack_exports__;

})();