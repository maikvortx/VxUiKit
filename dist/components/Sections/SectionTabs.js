"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTabs;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _CustomTabs = _interopRequireDefault(require("../../../library/components/CustomTabs/CustomTabs"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)();

function SectionTabs() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, null, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "nav-tabs"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Abas")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_CustomTabs.default, {
    plainTabs: true,
    headerColor: "#f5f5f5",
    tabs: [{
      tabName: "Aba 1",
      tabContent: /*#__PURE__*/_react.default.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Aba 2",
      tabContent: /*#__PURE__*/_react.default.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "Aba 3",
      tabContent: /*#__PURE__*/_react.default.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }]
  }))))));
}