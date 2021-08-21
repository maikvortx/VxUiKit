"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatHelper = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormatHelper = /*#__PURE__*/function () {
  function FormatHelper() {
    _classCallCheck(this, FormatHelper);
  }

  _createClass(FormatHelper, null, [{
    key: "isWeekday",
    value: function isWeekday(date) {
      var day = date.getDay();
      return day !== 0 && day !== 6;
    }
  }, {
    key: "formatCurrencyValue",
    value: function formatCurrencyValue(value, maximumDigits, minimumDigits) {
      var formatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: minimumDigits || 2,
        maximumFractionDigits: maximumDigits || 2
      });
      var formatedValue = formatter.format(value);
      return formatedValue;
    }
  }]);

  return FormatHelper;
}();

exports.FormatHelper = FormatHelper;