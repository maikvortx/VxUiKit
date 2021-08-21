"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionIlustrations;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Button = _interopRequireDefault(require("../../../library/components/Buttons/Button"));

var _exIlustracao = _interopRequireDefault(require("../../../assets/img/ex-ilustracao.png"));

var _stories = _interopRequireDefault(require("../../../assets/img/stories.png"));

var _exampleStyle = _interopRequireDefault(require("../../assets/jss/ui-kit/views/componentsSections/exampleStyle"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_exampleStyle.default);

function SectionIlustrations() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, {
    id: "illustrations"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h2", null, "Ilustra\xE7\xF5es")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Conceito/Ideia")), /*#__PURE__*/_react.default.createElement(_Styles.Text, {
    width: "inherit"
  }, "A utiliza\xE7\xE3o de ilustra\xE7\xF5es \xE9 algo mais recente nas interfaces, mas a ideia \xE9 que seja mais recorrente. As ilustra\xE7\xF5es s\xE3o usadas para atribuir um signifcado l\xFAdico a alguma a\xE7\xE3o do usu\xE1rio externo (Clientes) no sistema, fazendo assim que o processo fique mais \u201Cleve\u201D. Fora isso a utiliza\xE7\xE3o delas em outras pe\xE7as, como e-mails autom\xE1ticos dos sistemas, fazendo com que chame mais a aten\xE7\xE3o do usu\xE1rio ao conte\xFAdo do mesmo."), /*#__PURE__*/_react.default.createElement("img", {
    src: _exIlustracao.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Banco de ilustra\xE7\xF5es")), /*#__PURE__*/_react.default.createElement(_Styles.Text, {
    width: "inherit"
  }, "As ilustra\xE7\xF5es usadas s\xE3o de um banco gratuito at\xE9 pra uso comercial, disponibilizado pela  \u201CStories\u201D. Com diversas ilustra\xE7\xF5es com o intuito de servir para ilustrar interfaces e pe\xE7as digitais, na mesma existem diversos estilos, mas o atualmente usado \xE9 o \u201CBro\u201D."), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://stories.freepik.com/how-it-works",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _stories.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "Stories - by Freepik ", /*#__PURE__*/_react.default.createElement(_icons.ArrowRightRounded, null)))))));
}