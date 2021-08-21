"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionNotifications;

var _react = _interopRequireDefault(require("react"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _SnackbarContent = _interopRequireDefault(require("../../../library/components/Snackbar/SnackbarContent"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/icons
// core components
function SectionNotifications() {
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, {
    id: "notifications"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Alertas"))), /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "INFO ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "info",
    icon: _Info.default
  }), /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "SUCCESS ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "success",
    icon: _Check.default
  }), /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "WARNING ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "warning",
    icon: _Warning.default
  }), /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "DANGER ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "danger",
    icon: _Info.default
  }));
}