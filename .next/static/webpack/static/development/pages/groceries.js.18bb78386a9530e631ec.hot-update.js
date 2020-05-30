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
    var json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return myGet(apiUrl, ctx);

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

function myGet(_x2, _x3) {
  return _myGet.apply(this, arguments);
}

function _myGet() {
  _myGet = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, ctx) {
    var _ctx$req;

    var cookie, resp, _ctx$res, json;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cookie = (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie;
            _context2.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
              headers: {
                cookie: cookie
              }
            });

          case 3:
            resp = _context2.sent;

            if (!(resp.status === 401 && !ctx.req)) {
              _context2.next = 7;
              break;
            }

            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/login');
            return _context2.abrupt("return");

          case 7:
            if (!(resp.status === 401 && ctx.req)) {
              _context2.next = 11;
              break;
            }

            ctx.res.writeHead(302, {
              Location: 'http://localhost:3000/login'
            });
            (_ctx$res = ctx.res) === null || _ctx$res === void 0 ? void 0 : _ctx$res.end();
            return _context2.abrupt("return");

          case 11:
            _context2.next = 13;
            return resp.json();

          case 13:
            json = _context2.sent;
            return _context2.abrupt("return", json);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _myGet.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ncm9jZXJpZXMudHN4Il0sIm5hbWVzIjpbImFwaVVybCIsIkdyb2NlcmllcyIsImdyb2NlcmllcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJteUdldCIsImpzb24iLCJ1cmwiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXNwIiwic3RhdHVzIiwiUm91dGVyIiwicmVwbGFjZSIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLHFDQUFmOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNqQyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsU0FBZixFQUEwQkcsU0FBMUIsRUFBcUMsQ0FBckMsQ0FETCxDQUZKLENBREo7QUFRSCxDQVREOztLQUFNSixTOztBQVdOQSxTQUFTLENBQUNLLGVBQVY7QUFBQSwrTEFBNEIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTEMsS0FBSyxDQUFDUixNQUFELEVBQVNPLEdBQVQsQ0FEQTs7QUFBQTtBQUNsQkUsZ0JBRGtCO0FBQUEsNkNBRWpCO0FBQUVQLHVCQUFTLEVBQUVPO0FBQWIsYUFGaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O1NBS2VELEs7Ozs7OzRMQUFmLGtCQUFxQkUsR0FBckIsRUFBa0NILEdBQWxDO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVUksa0JBRFYsZUFDbUJKLEdBQUcsQ0FBQ0ssR0FEdkIsNkNBQ21CLFNBQVNDLE9BQVQsQ0FBaUJGLE1BRHBDO0FBQUE7QUFBQSxtQkFHdUJHLHlEQUFLLENBQUNKLEdBQUQsRUFBTTtBQUMxQkcscUJBQU8sRUFBRTtBQUNMRixzQkFBTSxFQUFFQTtBQURIO0FBRGlCLGFBQU4sQ0FINUI7O0FBQUE7QUFHVUksZ0JBSFY7O0FBQUEsa0JBU09BLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixJQUF1QixDQUFDVCxHQUFHLENBQUNLLEdBVG5DO0FBQUE7QUFBQTtBQUFBOztBQVVRSyw4REFBTSxDQUFDQyxPQUFQLENBQWUsUUFBZjtBQVZSOztBQUFBO0FBQUEsa0JBY09ILElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixJQUF1QlQsR0FBRyxDQUFDSyxHQWRsQztBQUFBO0FBQUE7QUFBQTs7QUFlUUwsZUFBRyxDQUFDWSxHQUFKLENBQVFDLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDcEJDLHNCQUFRLEVBQUU7QUFEVSxhQUF2QjtBQUlBLHdCQUFBZCxHQUFHLENBQUNZLEdBQUosc0RBQVNHLEdBQVQ7QUFuQlI7O0FBQUE7QUFBQTtBQUFBLG1CQXVCdUJQLElBQUksQ0FBQ04sSUFBTCxFQXZCdkI7O0FBQUE7QUF1QlVBLGdCQXZCVjtBQUFBLDhDQXdCV0EsSUF4Qlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTRCZVIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdyb2Nlcmllcy5qcy4xOGJiNzgzODZhOTUzMGU2MzFlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQsIE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuLy9jb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9uZXh0LW1vbmdvZGItbmluZS5ub3cuc2gvYXBpL2RhaWx5JztcclxuY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JvY2VyaWVzJztcclxuXHJcbmNvbnN0IEdyb2NlcmllcyA9ICh7IGdyb2NlcmllcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEdyb2NlcmllcyBQYWdlXHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ3JvY2VyaWVzLCB1bmRlZmluZWQsIDIpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbkdyb2Nlcmllcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBteUdldChhcGlVcmwsIGN0eCk7XHJcbiAgICByZXR1cm4geyBncm9jZXJpZXM6IGpzb24gfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbXlHZXQodXJsOiBzdHJpbmcsIGN0eDogTmV4dFBhZ2VDb250ZXh0KSB7XHJcbiAgICBjb25zdCBjb29raWUgPSBjdHgucmVxPy5oZWFkZXJzLmNvb2tpZTtcclxuXHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBjb29raWU6IGNvb2tpZSFcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihyZXNwLnN0YXR1cyA9PT0gNDAxICYmICFjdHgucmVxKSB7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZihyZXNwLnN0YXR1cyA9PT0gNDAxICYmIGN0eC5yZXEpIHtcclxuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgICAgICBMb2NhdGlvbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGN0eC5yZXM/LmVuZCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb2NlcmllczsiXSwic291cmNlUm9vdCI6IiJ9