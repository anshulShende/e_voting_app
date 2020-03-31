webpackHotUpdate("static\\development\\pages\\votingTable.js",{

/***/ "./pages/votingTable.js":
/*!******************************!*\
  !*** ./pages/votingTable.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Ethereum/voting */ "./Ethereum/voting.js");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_RequestVotingRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/RequestVotingRow */ "./Components/RequestVotingRow.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var VotingTable = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(VotingTable, _Component);

  var _super = _createSuper(VotingTable);

  function VotingTable() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VotingTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "newDoc", function (event) {
      event.preventDefault();
      window.location.assign("https://www.w3schools.com");
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderRow", function () {
      return _this.props.transactions.map(function (transaction, index) {
        return __jsx(_Components_RequestVotingRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: index,
          id: index,
          transaction: transaction
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(VotingTable, [{
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Header,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Body,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row;
      return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        route: "/".concat(this.props.locale)
      }, __jsx("a", null, "Homepage"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        floated: "right"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true,
        onClick: thi
      }, "  "))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"], {
        celled: true,
        textAlign: "center"
      }, __jsx(Header, null, __jsx(Row, null, __jsx(HeaderCell, null, "Id"), __jsx(HeaderCell, null, "Voter's Address"), __jsx(HeaderCell, null, "Transaction's Hash"), __jsx(HeaderCell, null, "Block's Number"), __jsx(HeaderCell, null, "Timestamp"))), __jsx(Body, null, this.renderRow())))));
    }
  }]);

  return VotingTable;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(VotingTable, "getInitialProps", function _callee(props) {
  var locale, numTransactions, transactions;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          locale = props.query.locale;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getNumberofTransactions().call());

        case 3:
          numTransactions = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(Array(parseInt(numTransactions)).fill().map(function (element, index) {
            return _Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__["default"].methods.transactions(index).call();
          })));

        case 6:
          transactions = _context.sent;
          return _context.abrupt("return", {
            transactions: transactions,
            numTransactions: numTransactions,
            locale: locale
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
});

/* harmony default export */ __webpack_exports__["default"] = (VotingTable);

/***/ })

})
//# sourceMappingURL=votingTable.js.9ec77ae75109989d255b.hot-update.js.map