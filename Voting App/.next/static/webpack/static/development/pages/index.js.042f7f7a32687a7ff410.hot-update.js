webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Ethereum/voting.js":
/*!****************************!*\
  !*** ./Ethereum/voting.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./Ethereum/web3.js");


var compiledVoting = __webpack_require__(/*! ./build/Election.json */ "./Ethereum/build/Election.json");

var instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(compiledVoting["interface"]), '0x4BB008ae4f61200aD737443eD52d3294c43607b9');
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

})
//# sourceMappingURL=index.js.042f7f7a32687a7ff410.hot-update.js.map