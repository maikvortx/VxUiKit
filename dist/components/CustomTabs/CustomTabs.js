"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomTabs;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Card = _interopRequireDefault(require("../../library/components/Card/Card"));

var _CardBody = _interopRequireDefault(require("../../library/components/Card/CardBody"));

var _CardHeader = _interopRequireDefault(require("../../library/components/Card/CardHeader"));

var _customTabsStyle = _interopRequireDefault(require("./customTabsStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_customTabsStyle.default);

function CustomTabs(props) {
  var _classNames;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(event, value) {
    setValue(value);
  };

  var classes = useStyles();
  var headerColor = props.headerColor,
      plainTabs = props.plainTabs,
      tabs = props.tabs,
      title = props.title,
      rtlActive = props.rtlActive;
  var cardTitle = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.cardTitle, true), _defineProperty(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    plain: plainTabs
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    color: headerColor,
    plain: plainTabs
  }, title !== undefined ? /*#__PURE__*/_react.default.createElement("div", {
    className: cardTitle
  }, title) : null, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    value: value,
    variant: "fullWidth",
    onChange: handleChange,
    textColor: "primary",
    indicatorColor: "primary",
    classes: {
      root: classes.tabsRoot,
      indicator: classes.displayNone
    }
  }, tabs.map(function (prop, key) {
    var icon = {};

    if (prop.tabIcon) {
      icon = {
        icon: typeof prop.tabIcon === "string" ? /*#__PURE__*/_react.default.createElement(_Icon.default, null, prop.tabIcon) : /*#__PURE__*/_react.default.createElement(prop.tabIcon, null)
      };
    }

    return /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({
      classes: {
        root: classes.tabRootButton,
        label: classes.tabLabel,
        selected: classes.tabSelected,
        wrapper: classes.tabWrapper
      },
      key: key,
      label: prop.tabName
    }, icon));
  }))), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, tabs.map(function (prop, key) {
    if (key === value) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: key
      }, prop.tabContent);
    }

    return null;
  })));
}

CustomTabs.propTypes = {
  headerColor: _propTypes.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: _propTypes.default.string,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    tabName: _propTypes.default.string.isRequired,
    tabIcon: _propTypes.default.object,
    tabContent: _propTypes.default.node.isRequired
  })),
  rtlActive: _propTypes.default.bool,
  plainTabs: _propTypes.default.bool
};