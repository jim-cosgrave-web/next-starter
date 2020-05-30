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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);



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
    var resp, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(apiUrl);

          case 2:
            resp = _context.sent;
            _context.next = 5;
            return resp.json();

          case 5:
            json = _context.sent;
            return _context.abrupt("return", {
              groceries: json
            });

          case 7:
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ncm9jZXJpZXMudHN4Il0sIm5hbWVzIjpbImFwaVVybCIsIkdyb2NlcmllcyIsImdyb2NlcmllcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlc3AiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLHFDQUFmOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNqQyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsU0FBZixFQUEwQkcsU0FBMUIsRUFBcUMsQ0FBckMsQ0FETCxDQUZKLENBREo7QUFRSCxDQVREOztLQUFNSixTOztBQVdOQSxTQUFTLENBQUNLLGVBQVY7QUFBQSwrTEFBNEIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTEMseURBQUssQ0FBQ1IsTUFBRCxDQURBOztBQUFBO0FBQ2xCUyxnQkFEa0I7QUFBQTtBQUFBLG1CQUVMQSxJQUFJLENBQUNDLElBQUwsRUFGSzs7QUFBQTtBQUVsQkEsZ0JBRmtCO0FBQUEsNkNBR2pCO0FBQUVSLHVCQUFTLEVBQUVRO0FBQWIsYUFIaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2VULHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxncm9jZXJpZXMuanMuODM5Mjg0NzFhYzQwYTIwMDM4MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XHJcblxyXG4vL2NvbnN0IGFwaVVybCA9ICdodHRwczovL25leHQtbW9uZ29kYi1uaW5lLm5vdy5zaC9hcGkvZGFpbHknO1xyXG5jb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncm9jZXJpZXMnO1xyXG5cclxuY29uc3QgR3JvY2VyaWVzID0gKHsgZ3JvY2VyaWVzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgR3JvY2VyaWVzIFBhZ2VcclxuICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShncm9jZXJpZXMsIHVuZGVmaW5lZCwgMil9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuR3JvY2VyaWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGFwaVVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbiAgICByZXR1cm4geyBncm9jZXJpZXM6IGpzb24gfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb2NlcmllczsiXSwic291cmNlUm9vdCI6IiJ9