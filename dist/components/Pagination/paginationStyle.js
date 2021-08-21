"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiKit = require("../../assets/jss/ui-kit");

var paginationStyle = {
  pagination: {
    display: "inline-block",
    paddingLeft: "0",
    margin: "0 0 20px 0",
    borderRadius: "4px",
    width: "100%",
    textAlign: "right"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginLeft: "0"
    },
    letterSpacing: "unset",
    border: "1px solid",
    borderRadius: "4px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "35px",
    height: "35px",
    minHeight: "auto",
    lineHeight: "35px",
    fontWeight: "400",
    fontSize: "14px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: _uiKit.grayColor
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: "#eee",
      borderColor: "#ddd"
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: _uiKit.primaryColor,
      borderColor: _uiKit.primaryColor,
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  info: {
    backgroundColor: _uiKit.primaryColor,
    borderColor: _uiKit.primaryColor,
    color: "#FFFFFF",
    "& + $paginationLink": {
      borderColor: _uiKit.primaryColor
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: "#777",
      cursor: "not-allowed",
      backgroundColor: "#fff",
      borderColor: "#ddd"
    }
  }
};
var _default = paginationStyle;
exports.default = _default;