"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H2 = exports.Tag = exports.Box = exports.Text = exports.Subtitle = exports.Title = exports.Container = exports.Section = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 70px 0;\n  background-color: ", ";\n"])), function (props) {
  return props.bgColor || "#FFFFFF";
});

exports.Section = Section;

var Container = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 30px;\n  align-items: center;\n  a {\n    color: #343434;\n    text-decoration: none;\n    & :hover {\n      color: #cb1e25;\n    }\n  }\n"])));

exports.Container = Container;

var Title = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  h1, h2, h3, h4 {\n  font-family: ", ";\n  font-weight: ", ";\n  min-height: 32px;\n  bottom: 10px;\n    span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.fontFamily || '"Josefin Sans", "Times New Roman", serif';
}, function (props) {
  return props.fontWeight || "400";
}, function (props) {
  return props.color || "#525252";
});

exports.Title = Title;

var Subtitle = _styledComponents.default.h3(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  min-height: 32px;\n  bottom: 10px;\n  margin: 32px 0;\n"])), function (props) {
  return props.color || "#525252";
});

exports.Subtitle = Subtitle;

var Text = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n  bottom: 10px;\n  margin: 32px 0;\n  line-height: 24px;\n  font-size: 16px;\n  width: ", ";\n  font-family: 'Open Sans', sans-serif;\n"])), function (props) {
  return props.color || "#525252";
}, function (props) {
  return props.width || '300px';
});

exports.Text = Text;

var Box = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: \"block\";\n  background-color: ", ";\n  width: 80px;\n  height: 80px;\n  border: 0.5px solid #C4C4C4;\n  border-radius: 4px 4px 0 0;\n"])), function (props) {
  return props.bgColor || "#525252";
});

exports.Box = Box;

var Tag = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: \"block\";\n  background-color: #F7F7F7;\n  width: 80px;\n  text-align: center;\n  padding: 5px 0;\n  margin-bottom: 15px;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n"])));

exports.Tag = Tag;

var H2 = _styledComponents.default.h2(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n"])), function (props) {
  return props.fontFamily || '"Josefin Sans", "Times New Roman", serif';
}, function (props) {
  return props.fontWeight || "500";
});

exports.H2 = H2;