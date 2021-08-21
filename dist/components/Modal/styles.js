"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalButton = exports.ModalBody = exports.ModalHeader = exports.ModalCloseBtn = exports.ModalContent = exports.ModalContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  display: block;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(22, 22, 22, 0.4);\n"])));

exports.ModalContainer = ModalContainer;

var ModalContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border: 1px solid #c12c2c;\n  background-color: #fefefe;\n  border-radius: 4px;\n  background-color: #fefefe solid;\n  height: auto;\n  width: ", ";\n  padding: 20px;\n  margin: 200px auto;\n  @media only screen and (max-width: 500px) {\n    width: 80%;\n  }\n"])), function (props) {
  return props.width || '50%';
});

exports.ModalContent = ModalContent;

var ModalCloseBtn = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: #343434;\n  float: right;\n  font-size: 49px;\n  font-weight: 300;\n  &:hover {\n    color: #cb1e25;\n    cursor: pointer;\n  }\n"])));

exports.ModalCloseBtn = ModalCloseBtn;

var ModalHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 30px;\n  border-bottom: 1px solid #c4c4c4;\n  padding-bottom: 20px;\n  & h3 {\n    padding-bottom: 20px;\n    margin-bottom: 10px;\n    position: relative;\n    :before {\n      content : \"\";\n      position: absolute;\n      left    : 0;\n      bottom  : 0;\n      height  : 1px;\n      width   : 10%; \n      border-bottom: 3px solid #CB1E25;\n    }\n  }\n"])));

exports.ModalHeader = ModalHeader;

var ModalBody = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 30px;\n"])));

exports.ModalBody = ModalBody;

var ModalButton = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 30px 0;\n  margin: 0 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  & button:disabled {\n    background-color: #d4d3d6;\n  }\n"])));

exports.ModalButton = ModalButton;