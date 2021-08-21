"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionExamples;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Button = _interopRequireDefault(require("../../../library/components/Buttons/Button"));

var _One = _interopRequireDefault(require("../../../assets/img/prototipos/One.png"));

var _boletador = _interopRequireDefault(require("../../../assets/img/prototipos/boletador.png"));

var _meetings = _interopRequireDefault(require("../../../assets/img/prototipos/meetings.png"));

var _informa = _interopRequireDefault(require("../../../assets/img/prototipos/informa.png"));

var _cadastro = _interopRequireDefault(require("../../../assets/img/prototipos/cadastro.png"));

var _exampleStyle = _interopRequireDefault(require("../../material/ui-kit/views/componentsSections/exampleStyle"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_exampleStyle.default);

function SectionExamples() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, {
    id: "prototipos"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h2", null, "Prot\xF3tipos")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.figma.com/file/RZJGrQjEZ8efvrQWfGEtDd/Vx-ONE-2020%2F2-%7C-Altera%C3%A7%C3%B5es",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _One.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "Ver V\xF3rtx One ", /*#__PURE__*/_react.default.createElement(_icons.ArrowRightRounded, null)))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.figma.com/file/yFKRSEP0ZeUWaDJJvYl5D4/Boletador-no-Figma",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _boletador.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "V\xF3rtx One - Boletador ", /*#__PURE__*/_react.default.createElement(_icons.ArrowRightRounded, null)))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.figma.com/file/hILlHmhOPSbnKi4KpCJFmV/Vx-Meetings-altera%C3%A7%C3%B5es",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _meetings.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "VxMeetings ", /*#__PURE__*/_react.default.createElement(_icons.ArrowRightRounded, null)))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.figma.com/file/NwUNxagGJZ4fqOj9Yvjdv1/Vx-Informa-Figma",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _informa.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "VxInforma+ ", /*#__PURE__*/_react.default.createElement(_icons.ArrowRightRounded, null)))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.figma.com/file/g8CW8zKZYF3JuAAqy741p7/Vx-Cadastro",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _cadastro.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "VxCadastro ", /*#__PURE__*/_react.default.createElement(_icons.ArrowRightRounded, null)))))));
}