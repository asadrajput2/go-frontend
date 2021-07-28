module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/create/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apiProvider.js":
/*!************************!*\
  !*** ./apiProvider.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst RETRY_COUNT = 5; // console.log(process.env.BASE_URL);\n\nasync function api(endpoint, method, data, optHeaders) {\n  const BASE_URL = \"http://localhost:8080/\";\n  const router = next_router__WEBPACK_IMPORTED_MODULE_0___default.a;\n  let token;\n  if (false) {}\n  const requestUrl = `${BASE_URL}${endpoint}`;\n  console.log(requestUrl);\n  const requestConfig = {\n    method,\n    // mode: \"cors\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    // credentials: \"include\",\n    body: JSON.stringify(data)\n  };\n\n  if (token) {\n    // console.log(\"token: \", token);\n    requestConfig.headers = _objectSpread(_objectSpread({}, requestConfig.headers), {}, {\n      Authorization: token\n    });\n  }\n\n  try {\n    const response = await fetch(requestUrl, requestConfig);\n    const results = await response.json();\n\n    if (results.error) {\n      console.log(\"error: \", results.error);\n\n      if (results.error.code === \"invalid token\") {\n        await localStorage.removeItem(\"token\");\n        router.push(\"/login\");\n      }\n    }\n\n    return results;\n  } catch (e) {\n    console.log(e);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGlQcm92aWRlci5qcz8wYWRmIl0sIm5hbWVzIjpbIlJFVFJZX0NPVU5UIiwiYXBpIiwiZW5kcG9pbnQiLCJtZXRob2QiLCJkYXRhIiwib3B0SGVhZGVycyIsIkJBU0VfVVJMIiwicHJvY2VzcyIsInJvdXRlciIsIlJvdXRlciIsInRva2VuIiwicmVxdWVzdFVybCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0Q29uZmlnIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHRzIiwianNvbiIsImVycm9yIiwiY29kZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxXQUFXLEdBQUcsQ0FBcEIsQyxDQUVBOztBQUVBLGVBQWVDLEdBQWYsQ0FBbUJDLFFBQW5CLEVBQTZCQyxNQUE3QixFQUFxQ0MsSUFBckMsRUFBMkNDLFVBQTNDLEVBQXVEO0FBQ3JELFFBQU1DLFFBQVEsR0FBR0Msd0JBQWpCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxrREFBZjtBQUNBLE1BQUlDLEtBQUo7QUFFQSxNQUFJLEtBQUosRUFDRUEsRUFBQTtBQUVGLFFBQU1DLFVBQVUsR0FBSSxHQUFFTCxRQUFTLEdBQUVKLFFBQVMsRUFBMUM7QUFFQVUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFDQSxRQUFNRyxhQUFhLEdBQUc7QUFDcEJYLFVBRG9CO0FBRXBCO0FBQ0FZLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBSFc7QUFNcEI7QUFDQUMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQVBjLEdBQXRCOztBQVVBLE1BQUlNLEtBQUosRUFBVztBQUNUO0FBQ0FJLGlCQUFhLENBQUNDLE9BQWQsbUNBQTZCRCxhQUFhLENBQUNDLE9BQTNDO0FBQW9ESSxtQkFBYSxFQUFFVDtBQUFuRTtBQUNEOztBQUVELE1BQUk7QUFDRixVQUFNVSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDVixVQUFELEVBQWFHLGFBQWIsQ0FBNUI7QUFDQSxVQUFNUSxPQUFPLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQXRCOztBQUVBLFFBQUlELE9BQU8sQ0FBQ0UsS0FBWixFQUFtQjtBQUNqQlosYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QlMsT0FBTyxDQUFDRSxLQUEvQjs7QUFDQSxVQUFJRixPQUFPLENBQUNFLEtBQVIsQ0FBY0MsSUFBZCxLQUF1QixlQUEzQixFQUE0QztBQUMxQyxjQUFNQyxZQUFZLENBQUNDLFVBQWIsQ0FBd0IsT0FBeEIsQ0FBTjtBQUNBbkIsY0FBTSxDQUFDb0IsSUFBUCxDQUFZLFFBQVo7QUFDRDtBQUNGOztBQUNELFdBQU9OLE9BQVA7QUFDRCxHQVpELENBWUUsT0FBT08sQ0FBUCxFQUFVO0FBQ1ZqQixXQUFPLENBQUNDLEdBQVIsQ0FBWWdCLENBQVo7QUFDRDtBQUNGOztBQUVjNUIsa0VBQWYiLCJmaWxlIjoiLi9hcGlQcm92aWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5jb25zdCBSRVRSWV9DT1VOVCA9IDU7XG5cbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkJBU0VfVVJMKTtcblxuYXN5bmMgZnVuY3Rpb24gYXBpKGVuZHBvaW50LCBtZXRob2QsIGRhdGEsIG9wdEhlYWRlcnMpIHtcbiAgY29uc3QgQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTDtcbiAgY29uc3Qgcm91dGVyID0gUm91dGVyO1xuICBsZXQgdG9rZW47XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2FsU3RvcmFnZSlcbiAgICB0b2tlbiA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke0JBU0VfVVJMfSR7ZW5kcG9pbnR9YDtcblxuICBjb25zb2xlLmxvZyhyZXF1ZXN0VXJsKTtcbiAgY29uc3QgcmVxdWVzdENvbmZpZyA9IHtcbiAgICBtZXRob2QsXG4gICAgLy8gbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICAvLyBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH07XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0b2tlbjogXCIsIHRva2VuKTtcbiAgICByZXF1ZXN0Q29uZmlnLmhlYWRlcnMgPSB7IC4uLnJlcXVlc3RDb25maWcuaGVhZGVycywgQXV0aG9yaXphdGlvbjogdG9rZW4gfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCByZXF1ZXN0Q29uZmlnKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3VsdHMuZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCByZXN1bHRzLmVycm9yKTtcbiAgICAgIGlmIChyZXN1bHRzLmVycm9yLmNvZGUgPT09IFwiaW52YWxpZCB0b2tlblwiKSB7XG4gICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apiProvider.js\n");

/***/ }),

/***/ "./pages/posts/create/index.jsx":
/*!**************************************!*\
  !*** ./pages/posts/create/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreatePost; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apiProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apiProvider */ \"./apiProvider.js\");\n/* harmony import */ var _utils_verifyAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/verifyAuth */ \"./utils/verifyAuth.js\");\n\nvar _jsxFileName = \"/home/asd/Work/Learning/next-frontend/pages/posts/create/index.jsx\";\n\n\n\n\nfunction CreatePost() {\n  // HOOKS\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(_utils_verifyAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"create-post\", \"protected\");\n  const {\n    0: postTitle,\n    1: setPostTitle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: postText,\n    1: setPostText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"); // FUNCTIONS\n\n  async function handleSubmit(e) {\n    e.preventDefault();\n    const response = await Object(_apiProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"article\", \"POST\", {\n      title: postTitle,\n      content: postText\n    }); // console.log(\"response: \", response);\n\n    if ((response === null || response === void 0 ? void 0 : response.message) === \"success\") {\n      router.push(\"/\");\n    } else {\n      setError(\"Error submitting the post! Please try again\");\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: () => e.preventDefault(),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          className: \"create-post-title\",\n          value: postTitle,\n          onChange: e => setPostTitle(e.target.value),\n          placeholder: \"Post title goes here\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          rows: \"6\",\n          value: postText,\n          className: \"create-post-text\",\n          onChange: e => setPostText(e.target.value),\n          placeholder: \"... and the rest here\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"-flex-row\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn signup-button post-btn\",\n            type: \"submit\",\n            onClick: handleSubmit,\n            children: \"Post\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9jcmVhdGUvaW5kZXguanN4PzE2YWQiXSwibmFtZXMiOlsiQ3JlYXRlUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUF1dGhlbnRpY2F0aW9uIiwicG9zdFRpdGxlIiwic2V0UG9zdFRpdGxlIiwidXNlU3RhdGUiLCJwb3N0VGV4dCIsInNldFBvc3RUZXh0IiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiYXBpIiwidGl0bGUiLCJjb250ZW50IiwibWVzc2FnZSIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQ25DO0FBRUEsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxtRUFBaUIsQ0FBQyxhQUFELEVBQWdCLFdBQWhCLENBQWpCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxFQUFELENBQWxDLENBUm1DLENBVW5DOztBQUNBLGlCQUFlSyxZQUFmLENBQTRCQyxDQUE1QixFQUErQjtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLDREQUFHLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0I7QUFDNUNDLFdBQUssRUFBRVosU0FEcUM7QUFFNUNhLGFBQU8sRUFBRVY7QUFGbUMsS0FBcEIsQ0FBMUIsQ0FINkIsQ0FRN0I7O0FBQ0EsUUFBSSxDQUFBTyxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRUksT0FBVixNQUFzQixTQUExQixFQUFxQztBQUNuQ2pCLFlBQU0sQ0FBQ2tCLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xULGNBQVEsQ0FBQyw2Q0FBRCxDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFLE1BQU1FLENBQUMsQ0FBQ0MsY0FBRixFQUF0QjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLG1CQUFTLEVBQUMsbUJBRlo7QUFHRSxlQUFLLEVBQUVULFNBSFQ7QUFJRSxrQkFBUSxFQUFHUSxDQUFELElBQU9QLFlBQVksQ0FBQ08sQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FKL0I7QUFLRSxxQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQ0UsY0FBSSxFQUFDLEdBRFA7QUFFRSxlQUFLLEVBQUVkLFFBRlQ7QUFHRSxtQkFBUyxFQUFDLGtCQUhaO0FBSUUsa0JBQVEsRUFBR0ssQ0FBRCxJQUFPSixXQUFXLENBQUNJLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBSjlCO0FBS0UscUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFlRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLHFCQUFTLEVBQUMsNEJBRFo7QUFFRSxnQkFBSSxFQUFDLFFBRlA7QUFHRSxtQkFBTyxFQUFFVixZQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvY3JlYXRlL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uLy4uL2FwaVByb3ZpZGVyXCI7XG5pbXBvcnQgdXNlQXV0aGVudGljYXRpb24gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3ZlcmlmeUF1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUG9zdCgpIHtcbiAgLy8gSE9PS1NcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlQXV0aGVudGljYXRpb24oXCJjcmVhdGUtcG9zdFwiLCBcInByb3RlY3RlZFwiKTtcblxuICBjb25zdCBbcG9zdFRpdGxlLCBzZXRQb3N0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwb3N0VGV4dCwgc2V0UG9zdFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gRlVOQ1RJT05TXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkoXCJhcnRpY2xlXCIsIFwiUE9TVFwiLCB7XG4gICAgICB0aXRsZTogcG9zdFRpdGxlLFxuICAgICAgY29udGVudDogcG9zdFRleHQsXG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuICAgIGlmIChyZXNwb25zZT8ubWVzc2FnZSA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoXCJFcnJvciBzdWJtaXR0aW5nIHRoZSBwb3N0ISBQbGVhc2UgdHJ5IGFnYWluXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlLXBvc3QtdGl0bGVcIlxuICAgICAgICAgICAgdmFsdWU9e3Bvc3RUaXRsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9zdFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdCB0aXRsZSBnb2VzIGhlcmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICByb3dzPVwiNlwiXG4gICAgICAgICAgICB2YWx1ZT17cG9zdFRleHR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGUtcG9zdC10ZXh0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9zdFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIuLi4gYW5kIHRoZSByZXN0IGhlcmVcIlxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLWZsZXgtcm93XCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gc2lnbnVwLWJ1dHRvbiBwb3N0LWJ0blwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBvc3RcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/create/index.jsx\n");

/***/ }),

/***/ "./utils/verifyAuth.js":
/*!*****************************!*\
  !*** ./utils/verifyAuth.js ***!
  \*****************************/
/*! exports provided: default, isAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useAuthentication; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAuthenticated\", function() { return isAuthenticated; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apiProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiProvider */ \"./apiProvider.js\");\n\n\n\nfunction useAuthentication(text, pageType) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  console.log(\"base url\", \"http://localhost:8080/\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    Object(_apiProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"verifyToken\", \"POST\").then(userVerification => {\n      // console.log(\"userVerification\", userVerification);\n      if (pageType === \"protected\" && (userVerification === null || userVerification === void 0 ? void 0 : userVerification.message) !== \"success\") {\n        router.push({\n          pathname: \"/login\",\n          query: {\n            text: true\n          }\n        });\n      } else {\n        // if logged user opens public page\n        if (pageType === \"public\" && (userVerification === null || userVerification === void 0 ? void 0 : userVerification.message) === \"success\") router.push(\"/\");\n      }\n    });\n  }, []);\n  return true;\n}\nasync function isAuthenticated() {\n  const userVerification = await Object(_apiProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"verifyToken\", \"POST\"); // console.log(\"userVerification\", userVerification);\n\n  return {\n    auth: (userVerification === null || userVerification === void 0 ? void 0 : userVerification.message) === \"success\"\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92ZXJpZnlBdXRoLmpzP2ZlODIiXSwibmFtZXMiOlsidXNlQXV0aGVudGljYXRpb24iLCJ0ZXh0IiwicGFnZVR5cGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsInVzZUVmZmVjdCIsImFwaSIsInRoZW4iLCJ1c2VyVmVyaWZpY2F0aW9uIiwibWVzc2FnZSIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsUUFBakMsRUFBMkM7QUFDeEQsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCQyx3QkFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLGdFQUFHLENBQUMsYUFBRCxFQUFnQixNQUFoQixDQUFILENBQTJCQyxJQUEzQixDQUFpQ0MsZ0JBQUQsSUFBc0I7QUFDcEQ7QUFDQSxVQUFJVCxRQUFRLEtBQUssV0FBYixJQUE0QixDQUFBUyxnQkFBZ0IsU0FBaEIsSUFBQUEsZ0JBQWdCLFdBQWhCLFlBQUFBLGdCQUFnQixDQUFFQyxPQUFsQixNQUE4QixTQUE5RCxFQUF5RTtBQUN2RVQsY0FBTSxDQUFDVSxJQUFQLENBQVk7QUFDVkMsa0JBQVEsRUFBRSxRQURBO0FBRVZDLGVBQUssRUFBRTtBQUFFZCxnQkFBSSxFQUFFO0FBQVI7QUFGRyxTQUFaO0FBSUQsT0FMRCxNQUtPO0FBQ0w7QUFDQSxZQUFJQyxRQUFRLEtBQUssUUFBYixJQUF5QixDQUFBUyxnQkFBZ0IsU0FBaEIsSUFBQUEsZ0JBQWdCLFdBQWhCLFlBQUFBLGdCQUFnQixDQUFFQyxPQUFsQixNQUE4QixTQUEzRCxFQUNFVCxNQUFNLENBQUNVLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDRixLQVpEO0FBYUQsR0FkUSxFQWNOLEVBZE0sQ0FBVDtBQWdCQSxTQUFPLElBQVA7QUFDRDtBQUVNLGVBQWVHLGVBQWYsR0FBaUM7QUFDdEMsUUFBTUwsZ0JBQWdCLEdBQUcsTUFBTUYsNERBQUcsQ0FBQyxhQUFELEVBQWdCLE1BQWhCLENBQWxDLENBRHNDLENBRXRDOztBQUNBLFNBQU87QUFDTFEsUUFBSSxFQUFFLENBQUFOLGdCQUFnQixTQUFoQixJQUFBQSxnQkFBZ0IsV0FBaEIsWUFBQUEsZ0JBQWdCLENBQUVDLE9BQWxCLE1BQThCO0FBRC9CLEdBQVA7QUFHRCIsImZpbGUiOiIuL3V0aWxzL3ZlcmlmeUF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpUHJvdmlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aGVudGljYXRpb24odGV4dCwgcGFnZVR5cGUpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc29sZS5sb2coXCJiYXNlIHVybFwiLCBwcm9jZXNzLmVudi5CQVNFX1VSTCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGkoXCJ2ZXJpZnlUb2tlblwiLCBcIlBPU1RcIikudGhlbigodXNlclZlcmlmaWNhdGlvbikgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ1c2VyVmVyaWZpY2F0aW9uXCIsIHVzZXJWZXJpZmljYXRpb24pO1xuICAgICAgaWYgKHBhZ2VUeXBlID09PSBcInByb3RlY3RlZFwiICYmIHVzZXJWZXJpZmljYXRpb24/Lm1lc3NhZ2UgIT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogXCIvbG9naW5cIixcbiAgICAgICAgICBxdWVyeTogeyB0ZXh0OiB0cnVlIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgbG9nZ2VkIHVzZXIgb3BlbnMgcHVibGljIHBhZ2VcbiAgICAgICAgaWYgKHBhZ2VUeXBlID09PSBcInB1YmxpY1wiICYmIHVzZXJWZXJpZmljYXRpb24/Lm1lc3NhZ2UgPT09IFwic3VjY2Vzc1wiKVxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuICBjb25zdCB1c2VyVmVyaWZpY2F0aW9uID0gYXdhaXQgYXBpKFwidmVyaWZ5VG9rZW5cIiwgXCJQT1NUXCIpO1xuICAvLyBjb25zb2xlLmxvZyhcInVzZXJWZXJpZmljYXRpb25cIiwgdXNlclZlcmlmaWNhdGlvbik7XG4gIHJldHVybiB7XG4gICAgYXV0aDogdXNlclZlcmlmaWNhdGlvbj8ubWVzc2FnZSA9PT0gXCJzdWNjZXNzXCIsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/verifyAuth.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });