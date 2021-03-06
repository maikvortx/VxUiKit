"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePickers;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@material-ui/icons");

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

require("react-datepicker/dist/react-datepicker.css");

var _formatExtension = require("../../helpers/format-extension");

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("./styles");

var _dateFns = require("date-fns");

var _pt = _interopRequireDefault(require("date-fns/locale/pt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _reactDatepicker.registerLocale)('pt-BR', _pt.default);

function DatePickers() {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      dataInicio = _useState2[0],
      setDataInicio = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      dataFim = _useState4[0],
      setDataFim = _useState4[1];

  var handleChangeDates = function handleChangeDates(dates) {
    var _dates = _slicedToArray(dates, 2),
        start = _dates[0],
        end = _dates[1];

    setDataInicio(start);
    setDataFim(end ? (0, _dateFns.endOfDay)(end) : undefined);
  };

  var inputValue = (0, _moment.default)("".concat(dataInicio)).format('DD/MM/YYYY') + ' - ' + (0, _moment.default)("".concat(dataFim)).format('DD/MM/YYYY');

  var handleClearDatePicker = function handleClearDatePicker() {
    setDataInicio();
    setDataFim();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.DatePickerContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.DatePickerContent, null, /*#__PURE__*/_react.default.createElement(_icons.Event, null), ' ', /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    locale: "pt-BR",
    selected: dataInicio,
    onChange: handleChangeDates,
    dateFormat: "dd/MM/yy",
    placeholderText: "de 00/00/00 at\xE9 00/00/00",
    className: "datePicker",
    startDate: dataInicio,
    endDate: dataFim,
    selectsRange: true,
    shouldCloseOnSelect: false,
    monthsShown: 2,
    openToDate: new Date(),
    value: !dataFim ? new Date() : inputValue,
    filterDate: _formatExtension.FormatHelper.isWeekday
  }), dataInicio ? /*#__PURE__*/_react.default.createElement(_icons.Close, {
    onClick: handleClearDatePicker
  }) : ""), /*#__PURE__*/_react.default.createElement("p", null, " Filtro per\xEDodo")));
}