"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Small;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _typographyStyle = _interopRequireDefault(require("./typographyStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_typographyStyle.default);

function Small(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.smallText
  }, children);
}

Small.propTypes = {
  children: _propTypes.default.node
};