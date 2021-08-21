"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiKit = require("../../material/ui-kit");

var buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: _uiKit.primaryColor,
    color: "#FFFFFF",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    border: "none",
    position: "relative",
    padding: "15px 50px",
    margin: ".3125rem 1px",
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "\"Josefin Sans\", \"Times New Roman\", serif",
    textTransform: "initial",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: _uiKit.primaryDarkColor,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: _uiKit.primaryColor,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    "&:hover,&:focus": {
      backgroundColor: _uiKit.primaryDarkColor,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
    }
  },
  outlined: {
    backgroundColor: "#FFFFFF",
    color: _uiKit.primaryColor,
    border: "1px solid ".concat(_uiKit.primaryColor),
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    "&:hover,&:focus": {
      color: _uiKit.primaryColor,
      backgroundColor: 'transparent',
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25) inset 0px 2px 4px 2px rgba(50, 50, 50, 0.25)"
    },
    "& svg": {
      color: _uiKit.primaryColor
    }
  },
  info: {
    backgroundColor: _uiKit.infoColor,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    "&:hover,&:focus": {
      backgroundColor: _uiKit.infoColor,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
    }
  },
  success: {
    backgroundColor: _uiKit.successColor,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    "&:hover,&:focus": {
      backgroundColor: _uiKit.successColor,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
    }
  },
  warning: {
    backgroundColor: _uiKit.warningColor,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    "&:hover,&:focus": {
      backgroundColor: _uiKit.warningColor,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
    }
  },
  danger: {
    backgroundColor: _uiKit.dangerColor,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    "&:hover,&:focus": {
      backgroundColor: _uiKit.dangerColor,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: _uiKit.grayColor
    }
  },
  simple: {
    padding: 0,
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: _uiKit.primaryColor
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: _uiKit.infoColor
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: _uiKit.successColor
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: _uiKit.warningColor
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: _uiKit.roseColor
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: _uiKit.dangerColor
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    backgroundColor: '#C4C4C4',
    pointerEvents: "none",
    boxShadow: "none",
    "&$outlined": {
      color: '#C4C4C4',
      backgroundColor: '#f5f5f5',
      border: '2px solid #C4C4C4'
    }
  },
  lg: {
    padding: "1.75rem 6.25rem",
    fontSize: "1.2rem",
    lineHeight: "1.333333",
    borderRadius: "0.3rem",
    "&$simple": {
      padding: "1.75rem 0"
    }
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
var _default = buttonStyle;
exports.default = _default;