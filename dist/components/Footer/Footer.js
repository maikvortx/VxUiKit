"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _footerStyle = _interopRequireDefault(require("./footerStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_footerStyle.default);

function Footer(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var whiteFont = props.whiteFont;
  var footerClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.footer, true), _defineProperty(_classNames, classes.footerWhiteFont, whiteFont), _classNames));
  var aClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.a, true), _defineProperty(_classNames2, classes.footerWhiteFont, whiteFont), _classNames2));
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: footerClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.left
  }, /*#__PURE__*/_react.default.createElement(_core.List, {
    className: classes.list
  }, /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://vortx.com.br",
    className: classes.block,
    target: "_blank"
  }, "V\xF3rtx"))))));
}

Footer.propTypes = {
  whiteFont: _propTypes.default.bool
};