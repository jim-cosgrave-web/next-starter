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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



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
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Groceries Page", __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, JSON.stringify(groceries, undefined, 2)));
};

_c = Groceries;

Groceries.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _ctx$req;

    var cookie, resp, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cookie = (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(apiUrl, {
              headers: {
                cookie: cookie
              }
            });

          case 3:
            resp = _context.sent;

            if (resp.status === 401 && !ctx.req) {
              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/login');
            }

            if (resp.status === 401 && ctx.req) {
              ctx.res.writeHead(302, {
                Location: 'http://localhost:3000/login'
              });
              ctx.res.end();
            }

            _context.next = 8;
            return resp.json();

          case 8:
            json = _context.sent;
            return _context.abrupt("return", {
              groceries: json
            });

          case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ncm9jZXJpZXMudHN4Il0sIm5hbWVzIjpbImFwaVVybCIsIkdyb2NlcmllcyIsImdyb2NlcmllcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXNwIiwic3RhdHVzIiwiUm91dGVyIiwicmVwbGFjZSIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxxQ0FBZjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDakMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0MsSUFBSSxDQUFDQyxTQUFMLENBQWVGLFNBQWYsRUFBMEJHLFNBQTFCLEVBQXFDLENBQXJDLENBREwsQ0FGSixDQURKO0FBUUgsQ0FURDs7S0FBTUosUzs7QUFXTkEsU0FBUyxDQUFDSyxlQUFWO0FBQUEsK0xBQTRCLGlCQUFPQyxHQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkMsa0JBRGtCLGVBQ1RELEdBQUcsQ0FBQ0UsR0FESyw2Q0FDVCxTQUFTQyxPQUFULENBQWlCRixNQURSO0FBQUE7QUFBQSxtQkFHTEcseURBQUssQ0FBQ1gsTUFBRCxFQUFTO0FBQzdCVSxxQkFBTyxFQUFFO0FBQ0xGLHNCQUFNLEVBQUVBO0FBREg7QUFEb0IsYUFBVCxDQUhBOztBQUFBO0FBR2xCSSxnQkFIa0I7O0FBU3hCLGdCQUFHQSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBaEIsSUFBdUIsQ0FBQ04sR0FBRyxDQUFDRSxHQUEvQixFQUFvQztBQUNoQ0ssZ0VBQU0sQ0FBQ0MsT0FBUCxDQUFlLFFBQWY7QUFDSDs7QUFFRCxnQkFBR0gsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLElBQXVCTixHQUFHLENBQUNFLEdBQTlCLEVBQW1DO0FBQy9CRixpQkFBRyxDQUFDUyxHQUFKLENBQVFDLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDcEJDLHdCQUFRLEVBQUU7QUFEVSxlQUF2QjtBQUlBWCxpQkFBRyxDQUFDUyxHQUFKLENBQVFHLEdBQVI7QUFDSDs7QUFuQnVCO0FBQUEsbUJBcUJMUCxJQUFJLENBQUNRLElBQUwsRUFyQks7O0FBQUE7QUFxQmxCQSxnQkFyQmtCO0FBQUEsNkNBc0JqQjtBQUFFbEIsdUJBQVMsRUFBRWtCO0FBQWIsYUF0QmlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTBCZW5CLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxncm9jZXJpZXMuanMuNzYzN2VjYWJhMDZiMDQ2ZTI1MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuLy9jb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9uZXh0LW1vbmdvZGItbmluZS5ub3cuc2gvYXBpL2RhaWx5JztcclxuY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JvY2VyaWVzJztcclxuXHJcbmNvbnN0IEdyb2NlcmllcyA9ICh7IGdyb2NlcmllcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEdyb2NlcmllcyBQYWdlXHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ3JvY2VyaWVzLCB1bmRlZmluZWQsIDIpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbkdyb2Nlcmllcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IGN0eC5yZXE/LmhlYWRlcnMuY29va2llO1xyXG5cclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGNvb2tpZTogY29va2llIVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHJlc3Auc3RhdHVzID09PSA0MDEgJiYgIWN0eC5yZXEpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocmVzcC5zdGF0dXMgPT09IDQwMSAmJiBjdHgucmVxKSB7XHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgICAgICAgTG9jYXRpb246ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwLmpzb24oKTtcclxuICAgIHJldHVybiB7IGdyb2NlcmllczoganNvbiB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvY2VyaWVzOyJdLCJzb3VyY2VSb290IjoiIn0=