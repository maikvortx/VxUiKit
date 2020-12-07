import {
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  infoBoxShadow,
  successColor,
  successBoxShadow,
  warningColor,
  warningBoxShadow,
  dangerColor,
  dangerBoxShadow,
  roseColor,
  roseBoxShadow
} from "../../assets/jss/ui-kit";

const customDropdownStyle = theme => ({
  disabled: {
    backgroundColor: '#F7F7F7',
    "&:before": {
      borderColor: "transparent !important",
    }
  },
  // dropdown: {
  //   borderRadius: "3px",
  //   border: "0",
  //   boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
  //   top: "100%",
  //   backgroundColor: 'red',
  //   zIndex: "1000",
  //   minWidth: "160px",
  //   padding: "5px 0",
  //   margin: "2px 0 0",
  //   fontSize: "14px",
  //   textAlign: "left",
  //   listStyle: "none",
  //   backgroundColor: "#fff",
  //   backgroundClip: "padding-box"
  // },
  // blackHover: {
  //   "&:hover": {
  //     boxShadow:
  //       "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
  //     backgroundColor: "#212121",
  //     color: "#fff"
  //   }
  // },
  // primaryHover: {
  //   "&:hover": {
  //     backgroundColor: primaryColor,
  //     color: "#FFFFFF",
  //     ...primaryBoxShadow
  //   }
  // },
  // infoHover: {
  //   "&:hover": {
  //     backgroundColor: infoColor,
  //     color: "#FFFFFF",
  //     ...infoBoxShadow
  //   }
  // },
  // successHover: {
  //   "&:hover": {
  //     backgroundColor: successColor,
  //     color: "#FFFFFF",
  //     ...successBoxShadow
  //   }
  // },
  // warningHover: {
  //   "&:hover": {
  //     backgroundColor: warningColor,
  //     color: "#FFFFFF",
  //     ...warningBoxShadow
  //   }
  // },
  // dangerHover: {
  //   "&:hover": {
  //     backgroundColor: dangerColor,
  //     color: "#FFFFFF",
  //     ...dangerBoxShadow
  //   }
  // },
});

export default customDropdownStyle;
