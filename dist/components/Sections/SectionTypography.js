"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTypography;

var _react = _interopRequireDefault(require("react"));

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Small = _interopRequireDefault(require("../../../library/components/Typography/Small"));

var _GetApp = _interopRequireDefault(require("@material-ui/icons/GetApp"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components
function SectionTypography() {
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, null, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "typography"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Tipografia")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("span", {
    color: "#cb1e25"
  }, "Josefin Sans"), " - Font Family", /*#__PURE__*/_react.default.createElement("a", {
    href: "fonts/josefinsans.zip",
    download: true
  }, /*#__PURE__*/_react.default.createElement(_GetApp.default, null)))), /*#__PURE__*/_react.default.createElement(_Styles.Text, {
    width: "100"
  }, "Utilizada em t\xEDtulos, subt\xEDtulos e em bot\xF5es de maior destaque."), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h1", null, "H1 -T\xEDtulo"), /*#__PURE__*/_react.default.createElement("p", null, "Josefin Sans Regular - 48pt")), /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h2", null, "H2 -T\xEDtulo"), /*#__PURE__*/_react.default.createElement("p", null, "Josefin Sans Regular - 40pt")), /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "H3 -T\xEDtulo"), /*#__PURE__*/_react.default.createElement("p", null, "Josefin Sans Regular - 32pt")), /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h4", null, "H4 -T\xEDtulo"), /*#__PURE__*/_react.default.createElement("p", null, "Josefin Sans Regular - 24pt"))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 4
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
    fontWeight: 700
  }, "H1 -T\xEDtulo"), /*#__PURE__*/_react.default.createElement("p", null, "Josefin Sans Bold - 48pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    fontWeight: 700
  }, "H2 -T\xEDtulo"), /*#__PURE__*/_react.default.createElement("p", null, "Josefin Sans Bold - 40pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    fontWeight: 700
  }, "H3 -T\xEDtulo"), /*#__PURE__*/_react.default.createElement("p", null, "Josefin Sans Bold - 32pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", {
    fontWeight: 700
  }, "H4 -T\xEDtulo"), /*#__PURE__*/_react.default.createElement("p", null, "Josefin Sans Bold - 24pt"))))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans"
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("span", {
    color: "#cb1e25"
  }, "Open Sans"), " - Font Family", /*#__PURE__*/_react.default.createElement("a", {
    href: "fonts/Open_Sans.zip",
    download: true
  }, /*#__PURE__*/_react.default.createElement(_GetApp.default, null)))), /*#__PURE__*/_react.default.createElement(_Styles.Text, {
    width: "100"
  }, "Utilizada em textos corridos, ode ser utilizado em subtitulos (bold), em casos onde a Josefin n\xE3o se encaixa, como por exemplo as labels de inputs campos e quando estamos utilizando apenas a Josefin de titulo."), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "H1 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans - 48pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "H2 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans - 40pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "H3 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans - 32pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "H4 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans - 24pt"))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans",
    fontWeight: 600
  }, /*#__PURE__*/_react.default.createElement("h1", null, "H1 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans Semi-bold - 48pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans",
    fontWeight: 600
  }, /*#__PURE__*/_react.default.createElement("h2", null, "H2 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans Semi-bold - 40pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans",
    fontWeight: 600
  }, /*#__PURE__*/_react.default.createElement("h3", null, "H3 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans Semi-bold - 32pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans",
    fontWeight: 600
  }, /*#__PURE__*/_react.default.createElement("h4", null, "H4 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans Semi-bold - 24pt"))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans",
    fontWeight: 700
  }, /*#__PURE__*/_react.default.createElement("h1", null, "H1 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans Bold - 48pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans",
    fontWeight: 700
  }, /*#__PURE__*/_react.default.createElement("h2", null, "H2 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans Bold - 40pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans",
    fontWeight: 700
  }, /*#__PURE__*/_react.default.createElement("h3", null, "H3 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans Bold - 32pt")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Styles.Title, {
    fontFamily: "Open Sans",
    fontWeight: 700
  }, /*#__PURE__*/_react.default.createElement("h4", null, "H4 - T\xEDtulo")), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans Bold - 24pt")))))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 5
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Par\xE1grafo"))), /*#__PURE__*/_react.default.createElement(_Styles.Text, {
    width: '90%'
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 5
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h2", null, "Header with small subtitle ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Small.default, null, "Use ", '"Small"', " tag for the headers"))))))));
}