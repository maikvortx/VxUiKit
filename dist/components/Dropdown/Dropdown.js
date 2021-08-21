"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _DropdownStyle = _interopRequireDefault(require("./DropdownStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_DropdownStyle.default);
var optionsData = [{
  value: 'opcao1',
  label: 'Opção 1'
}, {
  value: 'opcao2',
  label: 'Opção 2'
}, {
  value: 'opcao3',
  label: 'Opção 3'
}, {
  value: 'opcao4',
  label: 'Opção 4'
}];

function Dropdown(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      inputProps = props.inputProps,
      disabled = props.disabled,
      success = props.success,
      error = props.error,
      white = props.white,
      helperText = props.helperText,
      checkbox = props.checkbox,
      variant = props.variant;
  var labelClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, " " + classes.labelRootError, error), _defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.underlineError, error), _defineProperty(_classNames2, classes.underlineSuccess, success && !error), _defineProperty(_classNames2, classes.underline, true), _defineProperty(_classNames2, classes.whiteUnderline, white), _classNames2));
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = (0, _classnames.default)(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      optionSelected = _useState2[0],
      setOptionSelected = _useState2[1];

  var handleSelect = function handleSelect(event) {
    setOptionSelected(event.target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    variant: "outlined",
    margin: "dense",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    id: id,
    htmlFor: id,
    className: classes.labelRoot + " " + labelClasses
  }, labelText), /*#__PURE__*/_react.default.createElement(_core.Select, _extends({
    classes: {
      disabled: classes.disabled,
      underline: underlineClasses
    },
    labelId: "BuscaStatus",
    multiple: true,
    value: optionSelected,
    onChange: handleSelect,
    disabled: disabled,
    label: labelText,
    error: error,
    variant: variant
  }, inputProps, {
    MenuProps: {
      PaperProps: {
        style: {
          maxHeight: 300
        }
      }
    },
    renderValue: function renderValue(selected) {
      return selected.map(function (value) {
        return value.label;
      }).join(', ');
    }
  }), optionsData.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
      key: option.value,
      value: option
    }, checkbox ? /*#__PURE__*/_react.default.createElement(_core.Checkbox, {
      color: "primary",
      checked: optionSelected.indexOf(option) > -1
    }) : null, /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
      primary: option.label
    }));
  })), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, null, helperText));
}

Dropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
Dropdown.propTypes = {
  hoverColor: _propTypes.default.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: _propTypes.default.node,
  buttonIcon: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  dropdownList: _propTypes.default.array,
  buttonProps: _propTypes.default.object,
  dropup: _propTypes.default.bool,
  dropdownHeader: _propTypes.default.node,
  rtlActive: _propTypes.default.bool,
  caret: _propTypes.default.bool,
  left: _propTypes.default.bool,
  noLiPadding: _propTypes.default.bool,
  // function that retuns the selected item
  onClick: _propTypes.default.func
};