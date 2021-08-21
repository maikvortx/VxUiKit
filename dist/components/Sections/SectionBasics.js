"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionBasics;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _FiberManualRecord = _interopRequireDefault(require("@material-ui/icons/FiberManualRecord"));

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Badge = _interopRequireDefault(require("../../../library/components/Badge/Badge"));

var _basicsStyle = _interopRequireDefault(require("../../assets/jss/ui-kit/views/componentsSections/basicsStyle"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_basicsStyle.default);

function SectionBasics() {
  var classes = useStyles();

  var _useState = (0, _react.useState)([24, 22]),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = (0, _react.useState)("b"),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedEnabled = _useState4[0],
      setSelectedEnabled = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      checkedA = _useState6[0],
      setCheckedA = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      checkedB = _useState8[0],
      setCheckedB = _useState8[1];

  var handleToggle = function handleToggle(value) {
    var currentIndex = checked.indexOf(value);

    var newChecked = _toConsumableArray(checked);

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return /*#__PURE__*/_react.default.createElement(_Styles.Section, null, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "checkRadios"
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Checkboxes")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      tabIndex: -1,
      onClick: function onClick() {
        return handleToggle(21);
      },
      checkedIcon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Unchecked"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      tabIndex: -1,
      onClick: function onClick() {
        return handleToggle(22);
      },
      checked: checked.indexOf(22) !== -1 ? true : false,
      checkedIcon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Checked"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    disabled: true,
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      tabIndex: -1,
      checkedIcon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    disabled: true,
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      tabIndex: -1,
      checked: checked.indexOf(24) !== -1 ? true : false,
      checkedIcon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Checked"
  }))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Radio Buttons")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
      checked: selectedEnabled === "a",
      onChange: function onChange() {
        return setSelectedEnabled("a");
      },
      value: "a",
      name: "radio button enabled",
      "aria-label": "A",
      icon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "First Radio"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
      checked: selectedEnabled === "b",
      onChange: function onChange() {
        return setSelectedEnabled("b");
      },
      value: "b",
      name: "radio button enabled",
      "aria-label": "B",
      icon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Second Radio"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    disabled: true,
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
      checked: false,
      value: "a",
      name: "radio button disabled",
      "aria-label": "B",
      icon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked Radio"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    disabled: true,
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
      checked: true,
      value: "b",
      name: "radio button disabled",
      "aria-label": "B",
      icon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Checked Radio"
  }))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Switches")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Switch.default, {
      checked: checkedA,
      onChange: function onChange(event) {
        return setCheckedA(event.target.checked);
      },
      value: "checkedA",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      }
    }),
    classes: {
      label: classes.label
    },
    label: "Toggle is on"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Switch.default, {
      checked: checkedB,
      onChange: function onChange(event) {
        return setCheckedB(event.target.checked);
      },
      value: "checkedB",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      }
    }),
    classes: {
      label: classes.label
    },
    label: "Toggle is off"
  }))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Badges")), /*#__PURE__*/_react.default.createElement(_Badge.default, null, "default"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "primary"
  }, "primary"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "info"
  }, "info"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "success"
  }, "success"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "warning"
  }, "warning"))))));
}