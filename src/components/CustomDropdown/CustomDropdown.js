import React, {useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {FormControl, Select, InputLabel, MenuItem, FormHelperText, Checkbox, ListItemText } from '@material-ui/core';

// core components
import styles from "./customDropdownStyle";

const useStyles = makeStyles(styles);

const optionsData = [
  {
    value: 'opcao1',
    label: 'Opção 1',
  },
  {
    value: 'opcao2',
    label: 'Opção 2',
  },
  {
    value: 'opcao3',
    label: 'Opção 3',
  },
  {
    value: 'opcao4',
    label: 'Opção 4',
  },
];
export default function CustomDropdown(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    inputProps,
    disabled,
    success,
    error,
    white,
    helperText,
    checkbox,
    variant
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });

  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }

  const [optionSelected, setOptionSelected] = useState([]);

  const handleSelect = (event) => {
    setOptionSelected(event.target.value);
  };

  return (
    <FormControl variant="outlined" margin="dense" style={{width: '100%'}}>
      <InputLabel
        id={id}
        htmlFor={id} 
        className={classes.labelRoot + " " + labelClasses}
      >{labelText}</InputLabel>
      <Select
        classes={{
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        labelId="BuscaStatus"
        multiple
        value={optionSelected}
        onChange={handleSelect}
        disabled={disabled}
        label={labelText}
        error={error}
        variant={variant}
        {...inputProps}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300,
            }
          }
        }}
        renderValue={(selected) => selected.map(value => (
          value.label)).join(', ')
        }
      >
        {optionsData.map((option) => (
          <MenuItem key={option.value} value={option}>
            {checkbox ? <Checkbox color="primary" checked={optionSelected.indexOf(option) > -1} /> : null}
            <ListItemText primary={option.label}/>
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
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
