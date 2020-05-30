webpackHotUpdate("static\\development\\pages\\groceries.js",{

/***/ "./pages/groceries.tsx":
/*!*****************************!*\
  !*** ./pages/groceries.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_myGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/myGet */ "./util/myGet.ts");



var _this = undefined,
    _jsxFileName = "C:\\Dev\\Sandbox\\next\\next-starter\\pages\\groceries.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 //const apiUrl = 'https://next-mongodb-nine.now.sh/api/daily';

var apiUrl = 'http://localhost:3000/api/groceries';

var Groceries = function Groceries(_ref) {
  var groceries = _ref.groceries;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Groceries Page", __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, JSON.stringify(groceries, undefined, 2)));
};

_c = Groceries;

Groceries.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_util_myGet__WEBPACK_IMPORTED_MODULE_3__["myGet"])(apiUrl, ctx);

          case 2:
            json = _context.sent;
            return _context.abrupt("return", {
              groceries: json
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Groceries);

var _c;

$RefreshReg$(_c, "Groceries");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./util/myGet.ts":
/*!***********************!*\
  !*** ./util/myGet.ts ***!
  \***********************/
/*! exports provided: myGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myGet", function() { return myGet; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function myGet(_x, _x2) {
  return _myGet.apply(this, arguments);
}

function _myGet() {
  _myGet = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, ctx) {
    var _ctx$req;

    var cookie, resp, _ctx$res, json;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cookie = (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
              headers: {
                cookie: cookie
              }
            });

          case 3:
            resp = _context.sent;

            if (!(resp.status === 401 && !ctx.req)) {
              _context.next = 7;
              break;
            }

            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/login');
            return _context.abrupt("return");

          case 7:
            if (!(resp.status === 401 && ctx.req)) {
              _context.next = 11;
              break;
            }

            ctx.res.writeHead(302, {
              Location: 'http://localhost:3000/login'
            });
            (_ctx$res = ctx.res) === null || _ctx$res === void 0 ? void 0 : _ctx$res.end();
            return _context.abrupt("return");

          case 11:
            _context.next = 13;
            return resp.json();

          case 13:
            json = _context.sent;
            return _context.abrupt("return", json);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _myGet.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ncm9jZXJpZXMudHN4Iiwid2VicGFjazovLy8uL3V0aWwvbXlHZXQudHMiXSwibmFtZXMiOlsiYXBpVXJsIiwiR3JvY2VyaWVzIiwiZ3JvY2VyaWVzIiwiSlNPTiIsInN0cmluZ2lmeSIsInVuZGVmaW5lZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm15R2V0IiwianNvbiIsInVybCIsImNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJmZXRjaCIsInJlc3AiLCJzdGF0dXMiLCJSb3V0ZXIiLCJyZXBsYWNlIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLHFDQUFmOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNqQyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsU0FBZixFQUEwQkcsU0FBMUIsRUFBcUMsQ0FBckMsQ0FETCxDQUZKLENBREo7QUFRSCxDQVREOztLQUFNSixTOztBQVdOQSxTQUFTLENBQUNLLGVBQVY7QUFBQSwrTEFBNEIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTEMseURBQUssQ0FBQ1IsTUFBRCxFQUFTTyxHQUFULENBREE7O0FBQUE7QUFDbEJFLGdCQURrQjtBQUFBLDZDQUVqQjtBQUFFUCx1QkFBUyxFQUFFTztBQUFiLGFBRmlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlUix3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFFTyxTQUFlTyxLQUF0QjtBQUFBO0FBQUE7Ozs0TEFBTyxpQkFBcUJFLEdBQXJCLEVBQWtDSCxHQUFsQztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dJLGtCQURILGVBQ1lKLEdBQUcsQ0FBQ0ssR0FEaEIsNkNBQ1ksU0FBU0MsT0FBVCxDQUFpQkYsTUFEN0I7QUFBQTtBQUFBLG1CQUdnQkcseURBQUssQ0FBQ0osR0FBRCxFQUFNO0FBQzFCRyxxQkFBTyxFQUFFO0FBQ0xGLHNCQUFNLEVBQUVBO0FBREg7QUFEaUIsYUFBTixDQUhyQjs7QUFBQTtBQUdHSSxnQkFISDs7QUFBQSxrQkFTQUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLElBQXVCLENBQUNULEdBQUcsQ0FBQ0ssR0FUNUI7QUFBQTtBQUFBO0FBQUE7O0FBVUNLLDhEQUFNLENBQUNDLE9BQVAsQ0FBZSxRQUFmO0FBVkQ7O0FBQUE7QUFBQSxrQkFjQUgsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLElBQXVCVCxHQUFHLENBQUNLLEdBZDNCO0FBQUE7QUFBQTtBQUFBOztBQWVDTCxlQUFHLENBQUNZLEdBQUosQ0FBUUMsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUNwQkMsc0JBQVEsRUFBRTtBQURVLGFBQXZCO0FBSUEsd0JBQUFkLEdBQUcsQ0FBQ1ksR0FBSixzREFBU0csR0FBVDtBQW5CRDs7QUFBQTtBQUFBO0FBQUEsbUJBdUJnQlAsSUFBSSxDQUFDTixJQUFMLEVBdkJoQjs7QUFBQTtBQXVCR0EsZ0JBdkJIO0FBQUEsNkNBd0JJQSxJQXhCSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxncm9jZXJpZXMuanMuMjI2OTkwYWNjMTA2Yzg4NmYxMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQsIE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IG15R2V0IH0gZnJvbSAnLi4vdXRpbC9teUdldCc7XHJcblxyXG4vL2NvbnN0IGFwaVVybCA9ICdodHRwczovL25leHQtbW9uZ29kYi1uaW5lLm5vdy5zaC9hcGkvZGFpbHknO1xyXG5jb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncm9jZXJpZXMnO1xyXG5cclxuY29uc3QgR3JvY2VyaWVzID0gKHsgZ3JvY2VyaWVzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgR3JvY2VyaWVzIFBhZ2VcclxuICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShncm9jZXJpZXMsIHVuZGVmaW5lZCwgMil9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuR3JvY2VyaWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IG15R2V0KGFwaVVybCwgY3R4KTtcclxuICAgIHJldHVybiB7IGdyb2NlcmllczoganNvbiB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcm9jZXJpZXM7IiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbXlHZXQodXJsOiBzdHJpbmcsIGN0eDogTmV4dFBhZ2VDb250ZXh0KSB7XHJcbiAgICBjb25zdCBjb29raWUgPSBjdHgucmVxPy5oZWFkZXJzLmNvb2tpZTtcclxuXHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBjb29raWU6IGNvb2tpZSFcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihyZXNwLnN0YXR1cyA9PT0gNDAxICYmICFjdHgucmVxKSB7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZihyZXNwLnN0YXR1cyA9PT0gNDAxICYmIGN0eC5yZXEpIHtcclxuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgICAgICBMb2NhdGlvbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGN0eC5yZXM/LmVuZCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9