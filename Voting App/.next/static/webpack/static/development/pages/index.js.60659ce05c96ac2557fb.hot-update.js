webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Ethereum/voting */ "./Ethereum/voting.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_RequestRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/RequestRow */ "./Components/RequestRow.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var votingInstance = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(votingInstance, _Component);

  var _super = _createSuper(votingInstance);

  function votingInstance() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, votingInstance);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      message: '',
      Loading: false,
      errorMessage: '',
      addLoading: false,
      isButtonDisabled: false,
      popupContent: 'Click this button to add candidates'
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onAddCandidates", function _callee(event) {
      var accounts, res, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.state.isButtonDisabled) {
                _context.next = 29;
                break;
              }

              event.preventDefault();
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_web3__WEBPACK_IMPORTED_MODULE_15__["default"].eth.getAccounts());

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://localhost:5000/candidates/".concat(_this.props.locale)));

            case 7:
              res = _context.sent;
              console.log(res.data);
              console.log(accounts[0]);
              i = 0;

            case 11:
              if (!(i < res.data.length)) {
                _context.next = 26;
                break;
              }

              _context.prev = 12;

              _this.setState({
                addLoading: true,
                errorMessage: ''
              });

              _context.next = 16;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__["default"].methods.addCandidate(res.data[i].name, res.data[i].partyName).send({
                from: accounts[0]
              }));

            case 16:
              _routes__WEBPACK_IMPORTED_MODULE_12__["Router"].pushRoute("/".concat(_this.props.locale));
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](12);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 22:
              _this.setState({
                addLoading: false
              });

            case 23:
              i++;
              _context.next = 11;
              break;

            case 26:
              _this.setState({
                isButtonDisabled: true
              });

              _context.next = 30;
              break;

            case 29:
              _this.setState({
                popupContent: 'The Candidates have been added'
              });

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[12, 19]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onClick", function _callee2(event) {
      var largest, index, i, winningCandidate;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              largest = 0;

              for (i = 0; i < _this.props.number; i++) {
                if (_this.props.candidates[i].voteCount > largest) {
                  largest = _this.props.candidates[i].voteCount;
                  index = i;
                }
              }

              _context2.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__["default"].methods.candidates(index).call());

            case 5:
              winningCandidate = _context2.sent;
              console.log(winningCandidate);

              _this.setState({
                message: winningCandidate[0] + " belonging to the party " + winningCandidate[1] + " has won with " + winningCandidate[2] + " votes "
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(votingInstance, [{
    key: "renderRow",
    value: function renderRow() {
      return this.props.candidates.map(function (candidate, index) {
        return __jsx(_Components_RequestRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: index,
          id: index,
          candidate: candidate
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Body;
      return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, {
        floated: "left",
        width: 8
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        fluid: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, null, this.props.address), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Meta, null, "Election Address And Number of Candidates : ", this.props.number), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Description, null, "This the Address on which the Election Contract has been deployed")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, {
        floated: "right",
        width: 2
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        route: "/".concat(this.props.locale, "/votingTable")
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        primary: true
      }, "Voter's Info"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Popup"], {
        content: this.state.popupContent,
        on: "click",
        pinned: true,
        trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          primary: true,
          icon: "add circle",
          content: "Add Candidate",
          onClick: this.onAddCandidates,
          loading: this.state.addLoading
        })
      }), __jsx(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        route: "/".concat(this.props.locale, "/vote")
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        floated: "right",
        primary: true
      }, "Go to Vote"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"], {
        celled: true,
        textAlign: "center"
      }, __jsx(Header, null, __jsx(Row, null, __jsx(HeaderCell, null, "Candidate's ID"), __jsx(HeaderCell, null, "Candidate's Name"), __jsx(HeaderCell, null, "Candidate's Party"), __jsx(HeaderCell, null, "Count"))), __jsx(Body, null, this.renderRow())))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        primary: true,
        loading: this.state.Loading,
        onClick: this.onClick
      }, "Pick a Winner"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, __jsx("h3", null, this.state.message)))));
    }
  }]);

  return votingInstance;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(votingInstance, "getInitialProps", function _callee3(props) {
  var numCandidates, locale, candidates;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getNumCandidate().call());

        case 2:
          numCandidates = _context3.sent;
          locale = props.query.locale;
          _context3.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(Array(parseInt(numCandidates)).fill().map(function (element, index) {
            return _Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__["default"].methods.candidates(index).call();
          })));

        case 6:
          candidates = _context3.sent;
          return _context3.abrupt("return", {
            address: _Ethereum_voting__WEBPACK_IMPORTED_MODULE_10__["default"].options.address,
            number: numCandidates,
            candidates: candidates,
            locale: locale
          });

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
});

/* harmony default export */ __webpack_exports__["default"] = (votingInstance);

/***/ })

})
//# sourceMappingURL=index.js.60659ce05c96ac2557fb.hot-update.js.map