webpackHotUpdate("static\\development\\pages\\vote.js",{

/***/ "./pages/vote.js":
/*!***********************!*\
  !*** ./pages/vote.js ***!
  \***********************/
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
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Ethereum_voting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Ethereum/voting */ "./Ethereum/voting.js");
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var votingPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(votingPage, _Component);

  var _super = _createSuper(votingPage);

  function votingPage() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, votingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      id: 0,
      Loading: false,
      errorMessage: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderCandidates", function () {
      var items = _this.props.candidates.map(function (candidate, index) {
        return {
          header: candidate.name,
          meta: index,
          description: candidate.partyName
        };
      });

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Group, {
        textAlign: "center",
        centered: true,
        items: items
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onSubmit", function _callee(event) {
      var accounts, transaction, timestamp, unix_t, date, hours, minutes, seconds, time, bN, tH, bH, sA;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts());

            case 3:
              accounts = _context.sent;

              _this.setState({
                Loading: true,
                errorMessage: ''
              });

              _context.prev = 5;
              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_voting__WEBPACK_IMPORTED_MODULE_12__["default"].methods.vote(_this.state.id).send({
                from: accounts[0]
              }));

            case 8:
              transaction = _context.sent;
              _context.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getBlock(transaction.blockNumber));

            case 11:
              timestamp = _context.sent;
              unix_t = timestamp.timestamp;
              date = new Date(unix_t * 1000);
              hours = date.getHours();
              minutes = "0" + date.getMinutes();
              seconds = "0" + date.getSeconds();
              time = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
              bN = transaction.blockNumber.toString();
              tH = transaction.transactionHash;
              bH = transaction.blockHash;
              sA = transaction.from;
              _context.next = 24;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_voting__WEBPACK_IMPORTED_MODULE_12__["default"].methods.addTransactions(sA, tH, bH, bN, time).send({
                from: accounts[0]
              }));

            case 24:
              _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/".concat(_this.props.locale, "/votingTable"));
              _context.next = 30;
              break;

            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](5);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 30:
              _this.setState({
                Loading: false,
                id: ''
              });

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[5, 27]], Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(votingPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/".concat(this.props.locale)
      }, __jsx("a", null, "Homepage")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, this.renderCandidates())), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        value: this.state.id,
        onChange: function onChange(event) {
          return _this2.setState({
            id: event.target.value
          });
        },
        fluid: true
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        primary: true,
        loading: this.state.Loading,
        onClick: this.onSubmit
      }, "Vote")))));
    }
  }]);

  return votingPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(votingPage, "getInitialProps", function _callee2(props) {
  var locale, numCandidates, candidates;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          locale = pro;
          _context2.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_voting__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getNumCandidate().call());

        case 3:
          numCandidates = _context2.sent;
          _context2.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(Array(parseInt(numCandidates)).fill().map(function (element, index) {
            return _Ethereum_voting__WEBPACK_IMPORTED_MODULE_12__["default"].methods.candidates(index).call();
          })));

        case 6:
          candidates = _context2.sent;
          return _context2.abrupt("return", {
            numCandidates: numCandidates,
            candidates: candidates,
            locale: locale
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
});

/* harmony default export */ __webpack_exports__["default"] = (votingPage);

/***/ })

})
//# sourceMappingURL=vote.js.34202f68c062943a5d58.hot-update.js.map