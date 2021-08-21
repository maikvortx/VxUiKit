"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableRows;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

var _formatExtension = require("../../helpers/format-extension");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)();

function TableRows(props) {
  var row = props.row;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, {
    className: classes.root,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    component: "th",
    scope: "row",
    width: "20%"
  }, row.name), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left",
    width: "5%"
  }, row.tipo), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "right",
    width: "15%"
  }, "R$ ", _formatExtension.FormatHelper.formatCurrencyValue(row.fundo)), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "right",
    width: "15%"
  }, "R$ ", _formatExtension.FormatHelper.formatCurrencyValue(row.quantidade)), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left",
    width: "10%"
  }, row.status), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    width: "5%"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? /*#__PURE__*/_react.default.createElement(_KeyboardArrowUp.default, null) : /*#__PURE__*/_react.default.createElement(_KeyboardArrowDown.default, null)))), /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    style: {
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 6
  }, /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    margin: 1
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Hist\xF3ria"), /*#__PURE__*/_react.default.createElement(_Table.default, {
    size: "small",
    "aria-label": "purchases"
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Data"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Fundo"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "right"
  }, "Quantidade"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "right"
  }, "Valor"))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, row.history.map(function (historyRow) {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: historyRow.date
    }, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      component: "th",
      scope: "row"
    }, historyRow.date), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, historyRow.dadoId), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      align: "right"
    }, historyRow.valor), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      align: "right"
    }, "R$ ", _formatExtension.FormatHelper.formatCurrencyValue(Math.round(historyRow.valor * row.valor * 100) / 100)));
  }))))))));
}

TableRows.propTypes = {
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