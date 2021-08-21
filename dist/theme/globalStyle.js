"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _DC5_0_ = _interopRequireDefault(require("./fonts/rockness/399DC5_0_0.woff"));

var _DC5_0_2 = _interopRequireDefault(require("./fonts/rockness/399DC5_0_0.ttf"));

var _DC5_0_3 = _interopRequireDefault(require("./fonts/rockness/399DC5_0_0.svg"));

var _DC5_0_4 = _interopRequireDefault(require("./fonts/rockness/399DC5_0_0.eot"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'Rockness';\n    src: url(", ");\n    src:\n        url(", ") format('embedded-opentype'),\n        url(", ") format('woff'),\n        url(", ") format('truetype'),\n        url(", ") format('svg');\n  }\n  body {\n    color: #343434;\n    background-color: #F4F2ED;\n    margin: 0;\n  }\n  h1, h2, h3, h4 {\n    font-family: \"Josefin Sans\", \"Times New Roman\", serif;\n  }\n  h1 {\n    font-size: 48px;\n  }\n  h2 {\n    font-size: 40px;\n  }\n  h3 {\n    font-size: 32px;\n  }\n  h4 {\n    font-size: 24px;\n  }\n  p {\n    font-size: 16px;\n    margin: 0;\n    font-weight: 500;\n    line-height: 30px;\n    font-family: 'Open Sans', sans-serif;\n  }\n  .manuscrito {\n    font-family: 'Rockness', cursive;\n  }\n\n  .MuiListItem-button:hover {\n    background-color: ##C12C2C33 !important;\n  }\n  .MuiListItem-root.Mui-selected {\n    background-color: #ECB2B1 !important;\n  }\n  .MuiPaper-elevation2 {\n    box-shadow: none !important;\n  }\n\n  .MuiInputBase-input{\n    border: none !important;\n  }\n  #detail-painel .MuiTableRow-root:hover {\n    box-shadow: none !important;\n    cursor: pointer;\n  }\n  .MTableToolbar-root-33 {\n    padding: 0 !important;\n  }\n  .MuiTypography-h6 {\n    font-family: 'Josefin Sans', sans-serif !important;\n    font-size: 21px;\n    font-weight: 700;\n  }\n  .MuiTypography-body1 {\n    font-size: 14px !important;\n    font-family: 'Open Sans', sans-serif !important;\n  }\n"])), _DC5_0_.default, _DC5_0_4.default, _DC5_0_.default, _DC5_0_2.default, _DC5_0_3.default);
var _default = GlobalStyle;
exports.default = _default;