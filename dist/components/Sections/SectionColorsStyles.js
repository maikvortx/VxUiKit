"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: \"block\";\n  background-color: ", ";\n  width: 80px;\n  height: 80px;\n  border: 0.5px solid #C4C4C4;\n  border-radius: 4px 4px 0 0;\n"])), function (props) {
  return props.bgColor || "#525252";
});

exports.Box = Box;

var Tag = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: \"block\";\n  background-color: #F7F7F7;\n  width: 80px;\n  text-align: center;\n  padding: 5px 0;\n  margin-bottom: 15px;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n"])));

exports.Tag = Tag;