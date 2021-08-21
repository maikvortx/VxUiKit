"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiKit = require("../../assets/jss/ui-kit");

var customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  radioRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: _uiKit.primaryColor + "!important"
  },
  checkedIcon: {
    width: "26px",
    height: "26px",
    border: "1px solid rgba(0, 0, 0, .54)",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1), inset 0px 1px 1px rgba(0, 0, 0, 0.1)",
    color: _uiKit.whiteColor,
    backgroundColor: _uiKit.blueColor,
    borderRadius: "2px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "13px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "2px"
  },
  disabledCheckboxAndRadio: {
    "& $radioChecked": {
      border: "1px solid " + _uiKit.grayColor,
      color: _uiKit.grayColor
    },
    "& $checkedIcon": {
      backgroundColor: _uiKit.grayColor,
      opacity: "0.6"
    },
    "& $uncheckedIcon, $radioUnchecked": {
      opacity: "0.6",
      backgroundColor: _uiKit.grayLightColor
    }
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    fontSize: "16px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "16px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "16px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: _uiKit.dangerColor
  },
  radio: {
    color: _uiKit.primaryColor + "!important"
  },
  radioChecked: {
    width: "26px",
    height: "26px",
    border: "1px solid " + _uiKit.primaryColor,
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "12px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: _uiKit.grayColor,
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "#CCCCCC",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: _uiKit.primaryColor,
      "& > span:first-child": {
        borderColor: _uiKit.primaryColor
      }
    }
  },
  iconCheckboxChecked: {
    color: _uiKit.roseColor,
    "& > span:first-child": {
      borderColor: _uiKit.primaryColor
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: _uiKit.primaryColor + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#FFFFFF !important",
    border: "1px solid rgba(0, 0, 0, .54)"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(80, 80, 80)",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(203, 30, 37, 1) !important"
    },
    "& $switchIcon": {
      borderColor: "#cb1e25"
    }
  },
  switchRoot: {
    height: "48px"
  }
};
var _default = customCheckboxRadioSwitch;
exports.default = _default;