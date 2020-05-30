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

    var cookie, resp, _ctx$res, json;

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
              (_ctx$res = ctx.res) === null || _ctx$res === void 0 ? void 0 : _ctx$res.end();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ncm9jZXJpZXMudHN4Il0sIm5hbWVzIjpbImFwaVVybCIsIkdyb2NlcmllcyIsImdyb2NlcmllcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXNwIiwic3RhdHVzIiwiUm91dGVyIiwicmVwbGFjZSIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxxQ0FBZjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDakMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0MsSUFBSSxDQUFDQyxTQUFMLENBQWVGLFNBQWYsRUFBMEJHLFNBQTFCLEVBQXFDLENBQXJDLENBREwsQ0FGSixDQURKO0FBUUgsQ0FURDs7S0FBTUosUzs7QUFXTkEsU0FBUyxDQUFDSyxlQUFWO0FBQUEsK0xBQTRCLGlCQUFPQyxHQUFQO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJDLGtCQURrQixlQUNURCxHQUFHLENBQUNFLEdBREssNkNBQ1QsU0FBU0MsT0FBVCxDQUFpQkYsTUFEUjtBQUFBO0FBQUEsbUJBR0xHLHlEQUFLLENBQUNYLE1BQUQsRUFBUztBQUM3QlUscUJBQU8sRUFBRTtBQUNMRixzQkFBTSxFQUFFQTtBQURIO0FBRG9CLGFBQVQsQ0FIQTs7QUFBQTtBQUdsQkksZ0JBSGtCOztBQVN4QixnQkFBR0EsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLElBQXVCLENBQUNOLEdBQUcsQ0FBQ0UsR0FBL0IsRUFBb0M7QUFDaENLLGdFQUFNLENBQUNDLE9BQVAsQ0FBZSxRQUFmO0FBQ0g7O0FBRUQsZ0JBQUdILElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixJQUF1Qk4sR0FBRyxDQUFDRSxHQUE5QixFQUFtQztBQUMvQkYsaUJBQUcsQ0FBQ1MsR0FBSixDQUFRQyxTQUFSLENBQWtCLEdBQWxCLEVBQXVCO0FBQ3BCQyx3QkFBUSxFQUFFO0FBRFUsZUFBdkI7QUFJQSwwQkFBQVgsR0FBRyxDQUFDUyxHQUFKLHNEQUFTRyxHQUFUO0FBQ0g7O0FBbkJ1QjtBQUFBLG1CQXFCTFAsSUFBSSxDQUFDUSxJQUFMLEVBckJLOztBQUFBO0FBcUJsQkEsZ0JBckJrQjtBQUFBLDZDQXNCakI7QUFBRWxCLHVCQUFTLEVBQUVrQjtBQUFiLGFBdEJpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEwQmVuQix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZ3JvY2VyaWVzLmpzLjNmNmNhMGI5NmNhYTAwNDBjN2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vbmV4dC1tb25nb2RiLW5pbmUubm93LnNoL2FwaS9kYWlseSc7XHJcbmNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyb2Nlcmllcyc7XHJcblxyXG5jb25zdCBHcm9jZXJpZXMgPSAoeyBncm9jZXJpZXMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBHcm9jZXJpZXMgUGFnZVxyXG4gICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGdyb2NlcmllcywgdW5kZWZpbmVkLCAyKX1cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5Hcm9jZXJpZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBjb29raWUgPSBjdHgucmVxPy5oZWFkZXJzLmNvb2tpZTtcclxuXHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBjb29raWU6IGNvb2tpZSFcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihyZXNwLnN0YXR1cyA9PT0gNDAxICYmICFjdHgucmVxKSB7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHJlc3Auc3RhdHVzID09PSA0MDEgJiYgY3R4LnJlcSkge1xyXG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwge1xyXG4gICAgICAgICAgIExvY2F0aW9uOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJyBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY3R4LnJlcz8uZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgZ3JvY2VyaWVzOiBqc29uIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcm9jZXJpZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==