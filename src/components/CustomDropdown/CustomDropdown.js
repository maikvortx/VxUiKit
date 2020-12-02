import React, {useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import {FormControl, Select, MenuItem, ListItemText, InputLabel, TextField, Checkbox, Chip} from '@material-ui/core';

// core components
import styles from "./customDropdownStyle";

const useStyles = makeStyles(styles);

export default function CustomDropdown(props) {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    variant
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = param => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  const classes = useStyles();
  let icon = null;
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  switch (typeof buttonIcon) {
    case "object":
      icon = <props.buttonIcon className={classes.buttonIcon} />;
      break;
    case "string":
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
        <InputLabel id={id} htmlFor={id}>{labelText}</InputLabel>
        <Select
          labelId="BuscaStatus"
          multiple
          // value={statusBoleta}
          // onChange={handleSelect}
          label={labelText}
          autoWidth
          {...inputProps}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
                width: 300,
              }
            }
          }}
          renderValue={(selected) => selected.map(value => (
            value.status)).join(', ')
          }
        >
          {/* {status.length ? status.map(eachOption => {
            const valueOptions = statusBoleta.map(eachValue => eachValue.status);
            const isChecked = valueOptions.includes(eachOption.status); */}
            {/* return ( */}
              {/* <MenuItem key={eachOption.status} value={eachOption}>
                <Checkbox checked={isChecked} />
                <ListItemText primary={eachOption.status} />
              </MenuItem> */}
            {/* ); */}
          {/* }): undefined} */}
        </Select>
      </FormControl>
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf([
    "black",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  // function that retuns the selected item
  onClick: PropTypes.func
};
