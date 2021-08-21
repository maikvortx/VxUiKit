"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiKit = require("../../material/ui-kit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var snackbarContentStyle = {
  root: _objectSpread(_objectSpread({}, _uiKit.defaultFont), {}, {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "21px",
    fontSize: "16px",
    fontWeight: "700",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "4px",
    maxWidth: "95%",
    margin: "auto",
    marginBottom: "20px",
    minWidth: "auto"
  }),
  info: _objectSpread({
    backgroundColor: _uiKit.infoColor,
    color: "#ffffff"
  }, _uiKit.infoBoxShadow),
  success: _objectSpread({
    backgroundColor: _uiKit.successColor,
    color: "#ffffff"
  }, _uiKit.successBoxShadow),
  warning: _objectSpread({
    backgroundColor: _uiKit.warningColor,
    color: "#ffffff"
  }, _uiKit.warningBoxShadow),
  danger: _objectSpread({
    backgroundColor: _uiKit.dangerColor,
    color: "#ffffff"
  }, _uiKit.dangerBoxShadow),
  primary: _objectSpread({
    backgroundColor: _uiKit.primaryColor,
    color: "#ffffff"
  }, _uiKit.primaryBoxShadow),
  message: {
    padding: "0",
    textAlign: "center",
    display: "block",
    maxWidth: "89%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: _objectSpread(_objectSpread({}, _uiKit.container), {}, {
    position: "relative"
  })
};
var _default = snackbarContentStyle;
exports.default = _default;