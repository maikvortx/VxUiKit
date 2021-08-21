"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tables;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableFooter = _interopRequireDefault(require("@material-ui/core/TableFooter"));

var _TableRows = _interopRequireDefault(require("./TableRows"));

var _Pagination = _interopRequireDefault(require("../Pagination/Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--- @material-ui/core components ---//
function createData(name, fundo, tipo, quantidade, status, valor) {
  return {
    name: name,
    fundo: fundo,
    tipo: tipo,
    quantidade: quantidade,
    status: status,
    valor: valor,
    history: [{
      date: '05/04/2020',
      dadoId: '11091700',
      valor: 3
    }, {
      date: '07/04/2020',
      dadoId: 'Dado 1',
      valor: 1
    }]
  };
}

var rows = [createData('Operação', 9999999999, 'DEB', 999999999999, "Em Análise", 3.99), createData('Fundo de investimento', 9999999999, 'CRI', 9999999999, "Aprovado", 4.99), createData('Certificado de Recebíveis do Agronegócio', 999999999999, 'CRA', 999999999, "Cancelado", 3.79), createData('Certificado de Recebíveis Imobiliário', 999999999999, 'NP', 999999999999, "Em Análise", 2.5), createData('Debêntures', 99999999999, 'CRI', 999999999999, "Aprovado", 1.5)];

function Tables(props) {
  return /*#__PURE__*/_react.default.createElement(_TableContainer.default, null, /*#__PURE__*/_react.default.createElement(_Table.default, {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Coluna 1"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, "Coluna 2"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "right"
  }, "Coluna 3"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "right"
  }, "Coluna 4"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, "Coluna 5"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, rows.map(function (row) {
    return /*#__PURE__*/_react.default.createElement(_TableRows.default, {
      key: row.name,
      row: row
    });
  })), /*#__PURE__*/_react.default.createElement(_TableFooter.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null))), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    pageCount: 20
  }));
}

Tables.propTypes = {
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