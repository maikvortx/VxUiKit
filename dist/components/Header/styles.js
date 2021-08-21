"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuDropDown = exports.Logout = exports.Login = exports.NavBarRightSide = exports.Slogan = exports.Bar = exports.Menu = exports.NavBarLeftSide = exports.NavBar = exports.HeaderApp = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderApp = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  & .Navbar__ToggleShow .bar1 {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n    transform: rotate(-45deg) translate(-5px, 5px);\n    width: 30px;\n  }\n\n  & .Navbar__ToggleShow .bar2 {\n    opacity: 0;\n  }\n\n  & .Navbar__ToggleShow .bar3 {\n    width: 30px;\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n    transform: rotate(45deg) translate(-6px, -7px);\n  }\n\n  & .Navbar__ToggleShow > .nav-items {\n    background-color: #ffffff;\n    color: #343434;\n    padding: 50px;\n    width: 20%;\n  }\n\n  & .Navbar__ToggleShow > .open-nav {\n    background-color: rgba(255, 255, 255, 1);\n    color: #343434;\n    z-index: 90;\n    width: 20%;\n    height: 100vh;\n    position: fixed;\n    box-shadow: 6px 6px 8px 0px rgba(52, 52, 52, 0.17);\n    top: 0;\n    padding-top: 60px;\n  }\n\n  & .Navbar__ToggleShow > .open-nav > .nav-sublinks {\n    color: #343434;\n    display: block;\n    padding: 15px;\n    font-weight: 500;\n    text-align: center;\n    & a {\n      text-decoration: none;\n      color: #343434;\n    }\n  }\n\n  & .Navbar__ToggleShow > .open-nav > .nav-sublinks:hover,\n  & .Navbar__ToggleShow > .open-nav > .nav-sublinks > a:hover {\n    color: #343434;\n    font-weight: 700;\n    cursor: pointer;\n  }\n  & .Navbar__ToggleShow > .open-nav > hr {\n    margin: 0 50px;\n    border-top: 2px solid #8e734a;\n    display: block;\n  }\n\n  @media only screen and (min-width: 550px) {\n    .Navbar__ToggleShow > .close-nav {\n      background-color: rgba(255, 255, 255, 1);\n      color: #343434;\n      z-index: 90;\n      width: 80%;\n      height: 100vh;\n      position: fixed;\n      opacity: 0;\n      right: 0;\n      box-shadow: 6px 6px 8px 0px rgba(52, 52, 52, 0.17);\n      top: 0;\n      padding-top: 80px;\n    }\n  }\n\n  @media only screen and (max-width: 500px) {\n    .Navbar__ToggleShow > .open-nav {\n      background-color: rgba(255, 255, 255, 1);\n      color: #343434;\n      z-index: 90;\n      width: 50%;\n    }\n  }\n\n  & .nav-sublinks {\n    display: none;\n  }\n\n  & hr {\n    display: none;\n  }\n\n  &.header-carteira {\n    display: none;\n  }\n"])));

exports.HeaderApp = HeaderApp;

var NavBar = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: rgba(255, 255, 255, 1);\n  display: flex;\n  color: #343434;\n  font-size: 13px;\n  align-items: center;\n  position: absolute;\n  z-index: 100;\n  width: 100%;\n  position: fixed;\n  box-shadow: 6px 6px 8px 0px rgba(52, 52, 52, 0.17);\n  top: 0;\n  justify-content: space-between;\n"])));

exports.NavBar = NavBar;

var NavBarLeftSide = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n\n  & #logo-vortx {\n    height: 30px;\n    padding: 10px;\n  }\n"])));

exports.NavBarLeftSide = NavBarLeftSide;

var Menu = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 25px;\n  margin: 12px 0 12px 10px;\n  padding-left: 20px;\n  border-left: 1px solid #EBEBF2;\n  cursor: pointer;\n"])));

exports.Menu = Menu;

var Bar = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 2px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n  width: ", ";\n"])), function (props) {
  return props.width;
});

exports.Bar = Bar;

var Slogan = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0;\n  margin-bottom: 0;\n  font-family: 'Josefin Sans';\n  & span {\n    font-size: 25px;\n    color: #8e734a;\n  }\n  @media only screen and (max-width: 500px) {\n    display: none;\n  }\n"])));

exports.Slogan = Slogan;

var NavBarRightSide = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  max-width: 350px;\n  align-items: baseline;\n  border-left: 1px solid #EBEBF2;\n  padding-left: 20px;\n  & a li {\n    list-style: none;\n  }\n"])));

exports.NavBarRightSide = NavBarRightSide;

var Login = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding-right: 10px;\n  margin-left: auto;\n  font-size: 15px;\n"])));

exports.Login = Login;

var Logout = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: #888888;\n  font-size: 12px;\n  padding-right: 30px;\n  padding-top: 2px;\n  &:hover {\n    color: #cb1e25;\n    cursor: pointer;\n  }\n"])));

exports.Logout = Logout;

var MenuDropDown = _styledComponents.default.nav(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  list-style-type: none;\n"])));

exports.MenuDropDown = MenuDropDown;