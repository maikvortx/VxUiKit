"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTable;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("./Styles");

var _Tables = _interopRequireDefault(require("../../../library/components/Tables/Tables"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SectionTable() {
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, null, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "tabela"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Tabela")), /*#__PURE__*/_react.default.createElement(_Tables.default, null))));
}