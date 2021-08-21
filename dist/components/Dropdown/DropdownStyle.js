"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var DropdownStyle = function DropdownStyle(theme) {
  return {
    disabled: {
      backgroundColor: '#F7F7F7',
      "&:before": {
        borderColor: "transparent !important"
      }
    }
  };
};

var _default = DropdownStyle;
exports.default = _default;