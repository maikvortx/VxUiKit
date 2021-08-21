import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "../../assets/ui-kit";

const InputStyle = {
  disabled: {
    backgroundColor: '#F7F7F7',
    "&:before": {
      borderColor: "transparent !important",
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor,
    },
    "& svg": {
      color: '#cb1e25',
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  },
  labelRootError: {
    color: dangerColor + " !important"
  },
  labelRootSuccess: {
    color: successColor + " !important"
  },
  formControl: {
    margin: "0 0 17px 0",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  input: {
    color: "#323232",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#C4C4C4"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  }
};

export default InputStyle;
