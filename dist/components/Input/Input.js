"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _InputStyle = _interopRequireDefault(require("./InputStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_InputStyle.default);

function Input(props) {
  var _classNames, _classNames2, _classNames4;

  var classes = useStyles();
  var formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      value = props.value,
      placeholder = props.placeholder,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      disabled = props.disabled,
      error = props.error,
      helperText = props.helperText,
      white = props.white,
      inputRootCustomClasses = props.inputRootCustomClasses,
      success = props.success;
  var labelClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, " " + classes.labelRootError, error), _defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.underlineError, error), _defineProperty(_classNames2, classes.underlineSuccess, success && !error), _defineProperty(_classNames2, classes.underline, true), _defineProperty(_classNames2, classes.whiteUnderline, white), _classNames2));
  var marginTop = (0, _classnames.default)(_defineProperty({}, inputRootCustomClasses, inputRootCustomClasses !== undefined));
  var inputClasses = (0, _classnames.default)((_classNames4 = {}, _defineProperty(_classNames4, classes.input, true), _defineProperty(_classNames4, classes.whiteInput, white), _classNames4));
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = (0, _classnames.default)(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    variant: "outlined",
    style: {
      width: '100%'
    }
  }, labelText !== undefined ? /*#__PURE__*/_react.default.createElement(_InputLabel.default, _extends({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, /*#__PURE__*/_react.default.createElement(_OutlinedInput.default, _extends({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    value: value,
    placeholder: placeholder,
    error: error,
    disabled: disabled,
    helperText: helperText,
    id: id,
    labelWidth: labelText ? 80 : null
  }, inputProps)), /*#__PURE__*/_react.default.createElement(_FormHelperText.default, {
    id: "component-error-text",
    style: {
      color: '#cb1e25'
    }
  }, helperText));
}

Input.propTypes = {
  labelText: _propTypes.default.node,
  labelProps: _propTypes.default.object,
  id: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  formControlProps: _propTypes.default.object,
  inputRootCustomClasses: _propTypes.default.string,
  error: _propTypes.default.bool,
  success: _propTypes.default.bool,
  white: _propTypes.default.bool
};