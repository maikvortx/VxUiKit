"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionButton;

var _react = _interopRequireDefault(require("react"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _GetApp = _interopRequireDefault(require("@material-ui/icons/GetApp"));

var _InsertDriveFile = _interopRequireDefault(require("@material-ui/icons/InsertDriveFile"));

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Button = _interopRequireDefault(require("../../../library/components/Buttons/Button"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/icons
// core components
function SectionButton() {
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, null, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "buttons"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Bot\xF5es")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Prim\xE1rio"))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    id: "Button"
  }, "Default")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    id: "Button",
    disabled: true
  }, "Disabled"))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Secund\xE1rio"))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "outlined",
    color: "outlined"
  }, "Default")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "outlined",
    color: "outlined",
    disabled: true
  }, "Disabled"))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Varia\xE7\xF5es de bot\xF5es"))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_GetApp.default, null), " Com \xEDcone")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_InsertDriveFile.default, null), " Download da tabela"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    variant: "outlined"
  }, "Anexar mais arquivos")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    round: true,
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_Favorite.default, null)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    simple: true
  }, "simple")))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Tamanho"))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "left"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "sm"
  }, "Small")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary"
  }, "Regular")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg"
  }, "Large"))))))));
}