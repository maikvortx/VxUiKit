"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiKit = require("../../assets/jss/ui-kit");

var cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader: _uiKit.warningCardHeader,
  successCardHeader: _uiKit.successCardHeader,
  dangerCardHeader: _uiKit.dangerCardHeader,
  infoCardHeader: _uiKit.infoCardHeader,
  primaryCardHeader: _uiKit.primaryCardHeader
};
var _default = cardHeaderStyle;
exports.default = _default;