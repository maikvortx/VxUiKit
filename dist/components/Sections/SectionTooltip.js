"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTooltip;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Button = _interopRequireDefault(require("../../../library/components/Buttons/Button"));

var _SectionTooltipsStyle = _interopRequireDefault(require("./SectionTooltipsStyle"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_SectionTooltipsStyle.default);

function SectionTooltip() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, {
    id: "tooltip"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Tooltip")), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "tooltip-top",
    title: "Tooltip on top",
    placement: "top",
    arrow: true,
    classes: classes
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "On top")), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "tooltip-bottom",
    title: "Tooltip on bottom",
    placement: "bottom",
    arrow: true,
    classes: classes
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "On bottom")), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "tooltip-right",
    title: "Tooltip on right",
    placement: "right",
    arrow: true,
    classes: classes
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "On right")), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "tooltip-left",
    title: "Tooltip on left",
    placement: "left",
    arrow: true,
    classes: classes
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "On left"))))));
}