"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionPagination;

var _react = _interopRequireDefault(require("react"));

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Pagination = _interopRequireDefault(require("../../../library/components/Pagination/Pagination"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components
function SectionPagination() {
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, null, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "pagination"
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Pagina\xE7\xE3o")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    pageCount: 7
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    pageCount: 20
  })))))));
}