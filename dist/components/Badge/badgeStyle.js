"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiKit = require("../../material/ui-kit");

var badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: _uiKit.primaryColor
  },
  warning: {
    backgroundColor: _uiKit.warningColor
  },
  danger: {
    backgroundColor: _uiKit.dangerColor
  },
  success: {
    backgroundColor: _uiKit.successColor
  },
  info: {
    backgroundColor: _uiKit.infoColor
  },
  rose: {
    backgroundColor: _uiKit.roseColor
  },
  gray: {
    backgroundColor: "#6c757d"
  }
};
var _default = badgeStyle;
exports.default = _default;