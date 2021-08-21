"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomPagination;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Pagination = require("@material-ui/lab/Pagination");

var _paginationStyle = _interopRequireDefault(require("./paginationStyle"));

var _excluded = ["page", "type", "selected"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(_paginationStyle.default);

function CustomPagination(props) {
  var classes = useStyles();
  var color = props.color,
      pageCount = props.pageCount;

  var _usePagination = (0, _Pagination.usePagination)({
    count: pageCount
  }),
      items = _usePagination.items;

  return /*#__PURE__*/_react.default.createElement("ul", {
    className: classes.pagination
  }, items.map(function (_ref, index) {
    var _classNames;

    var page = _ref.page,
        type = _ref.type,
        selected = _ref.selected,
        item = _objectWithoutProperties(_ref, _excluded);

    var children = null;
    var paginationLink = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.paginationLink, true), _defineProperty(_classNames, classes[color], selected), _defineProperty(_classNames, classes.disabled, index.disabled), _classNames));

    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
      children = '…';
    } else if (type === 'page') {
      children = /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
        style: {
          fontWeight: selected ? 'bold' : undefined
        },
        className: paginationLink
      }, item, {
        variant: "outlined",
        shape: "rounded"
      }), page);
    } else {
      children = /*#__PURE__*/_react.default.createElement(_Button.default, _extends({}, item, {
        className: paginationLink,
        variant: "outlined",
        shape: "rounded"
      }), type === "next" ? '>' : type === "previous" ? '<' : null);
    }

    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: classes.paginationItem
    }, children);
  }));
}

CustomPagination.defaultProps = {
  color: "primary"
};
CustomPagination.propTypes = {
  pages: _propTypes.default.arrayOf(_propTypes.default.shape({
    active: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    text: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["<", ">", "..."])]).isRequired,
    onClick: _propTypes.default.func
  })).isRequired,
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger"])
};