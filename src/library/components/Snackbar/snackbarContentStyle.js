import {
  defaultFont,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  container,
  primaryColor
} from "../../assets/ui-kit";

const snackbarContentStyle = {
  root: {
    ...defaultFont,
    position: "relative",
    padding: "20px 15px",
    lineHeight: "21px",
    fontSize: "16px",
    fontWeight: "700",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "4px",
    maxWidth: "95%",
    margin: "auto",
    marginBottom: "20px",
    minWidth: "auto",
  },
  info: {
    backgroundColor: infoColor,
    color: "#ffffff",
    ...infoBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#ffffff",
    ...successBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#ffffff",
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#ffffff",
    ...dangerBoxShadow
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#ffffff",
    ...primaryBoxShadow
  },
  message: {
    padding: "0",
    textAlign: "center",
    display: "block",
    maxWidth: "89%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: {
    ...container,
    position: "relative"
  }
};

export default snackbarContentStyle;
