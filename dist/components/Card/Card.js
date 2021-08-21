"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _cardStyle = _interopRequireDefault(require("./cardStyle"));

var _excluded = ["className", "children", "plain", "carousel", "clickable"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_cardStyle.default);

function Card(props) {
  var _classNames;

  var classes = useStyles(_objectSpread({}, props));

  var className = props.className,
      children = props.children,
      plain = props.plain,
      carousel = props.carousel,
      clickable = props.clickable,
      rest = _objectWithoutProperties(props, _excluded);

  var cardClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.card, true), _defineProperty(_classNames, classes.cardPlain, plain), _defineProperty(_classNames, classes.cardCarousel, carousel), _defineProperty(_classNames, classes.clickable, clickable), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: cardClasses
  }, rest), children);
}

Card.propTypes = {
  className: _propTypes.default.string,
  plain: _propTypes.default.bool,
  carousel: _propTypes.default.bool,
  clickable: _propTypes.default.bool,
  children: _propTypes.default.node
};