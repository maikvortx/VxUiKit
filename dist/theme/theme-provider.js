"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _globalStyle = _interopRequireDefault(require("./globalStyle"));

var _MuiTheme = _interopRequireDefault(require("./MuiTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: _MuiTheme.default
  }, /*#__PURE__*/_react.default.createElement(_globalStyle.default, null), children);
};

ThemeProvider.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired
};
var _default = ThemeProvider;
exports.default = _default;