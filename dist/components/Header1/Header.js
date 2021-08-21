"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _headerStyle = _interopRequireDefault(require("./headerStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_headerStyle.default);

function Header(props) {
  var _classNames;

  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mobileOpen = _useState2[0],
      setMobileOpen = _useState2[1];

  (0, _react.useEffect)(function () {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var headerColorChange = function headerColorChange() {
    var color = props.color,
        changeColorOnScroll = props.changeColorOnScroll;
    var windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  var color = props.color,
      rightLinks = props.rightLinks,
      leftLinks = props.leftLinks,
      brand = props.brand,
      fixed = props.fixed,
      absolute = props.absolute;
  var appBarClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.appBar, true), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.absolute, absolute), _defineProperty(_classNames, classes.fixed, fixed), _classNames));

  var brandComponent = /*#__PURE__*/_react.default.createElement("a", {
    href: '/'
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "logo-vortx",
    className: classes.logo,
    src: "https://cdn.vortx.com.br/images/logo-expanded-dourado.svg",
    alt: "Logo V\xF3rtx",
    title: "V\xF3rtx | Inova\xE7\xE3o e transpar\xEAncia em servi\xE7os fiduci\xE1rios"
  }));

  return /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    className: appBarClasses
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: classes.container
  }, leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.flex
  }, leftLinks !== undefined ? /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    smDown: true,
    implementation: "css"
  }, leftLinks) : brandComponent), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    smDown: true,
    implementation: "css"
  }, rightLinks), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    mdUp: true
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, null)))), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    mdUp: true,
    implementation: "js"
  }, /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appResponsive
  }, leftLinks, rightLinks))));
}

Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  rightLinks: _propTypes.default.node,
  leftLinks: _propTypes.default.node,
  brand: _propTypes.default.string,
  fixed: _propTypes.default.bool,
  absolute: _propTypes.default.bool,
  changeColorOnScroll: _propTypes.default.shape({
    height: _propTypes.default.number.isRequired,
    color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};