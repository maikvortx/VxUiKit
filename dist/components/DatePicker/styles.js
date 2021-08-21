"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerContent = exports.DatePickerContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DatePickerContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: flex-start;\n  }\n  & select,\n   input[type='text'],\n   input[type='number'],\n   textarea {\n    background: transparent;\n    outline: none;\n    padding: 10px;\n    margin: 0;\n  }\n  & .datePicker {\n    max-width: 250px;\n  }\n  & .MuiSvgIcon-root {\n    color: #A5A4BF;\n  }\n  & p {\n    background: white;\n    width: 143px;\n    padding-left: 6px;\n    transform: translate(-10px, -57px) scale(0.75);\n    color: #0000008a;\n    font-family: 'Open Sans', sans-serif;\n  }\n"])));

exports.DatePickerContainer = DatePickerContainer;

var DatePickerContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: transparent;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  outline: none;\n  border: 1px solid #e6e7e7 !important;\n  border-radius: 4px !important;\n  margin: 0;\n\n  & input[type='text'] {\n    border: none;\n    padding: 8px;\n  }\n  & .datePicker {\n    border: none;\n  }\n  & .MuiSvgIcon-root{\n    color: #A5A4BF;\n  }\n  & .react-datepicker {\n  display: flex;\n  }\n\n"])));

exports.DatePickerContent = DatePickerContent;