"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionInputs;

var _react = _interopRequireDefault(require("react"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _icons = require("@material-ui/icons");

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Input = _interopRequireDefault(require("../../../library/components/Input/Input"));

var _Styles = require("./Styles");

var _Dropdown = _interopRequireDefault(require("../../../library/components/Dropdown/Dropdown"));

var _DatePickers = _interopRequireDefault(require("../../../library/components/DatePicker/DatePickers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
function SectionInputs() {
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, null, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "inputs"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Inputs")), /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Formul\xE1rio"))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Label"), /*#__PURE__*/_react.default.createElement(_Input.default, {
    id: "regular",
    labelText: "Regular",
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Label"), /*#__PURE__*/_react.default.createElement(_Input.default, {
    value: "Erro",
    id: "error",
    error: true,
    helperText: "*Mensagem de erro.",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.Error, null))
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Label"), /*#__PURE__*/_react.default.createElement(_Input.default, {
    labelText: "Desabilitado",
    id: "desabilitado",
    disabled: true,
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Label"), /*#__PURE__*/_react.default.createElement(_Input.default, {
    placeholder: "Pesquisar",
    id: "input-pesquisar",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      startAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.Search, null))
    }
  }))), /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Filtro"))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_DatePickers.default, {
    id: "regular",
    labelText: "Regular",
    variant: "outlined",
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    id: "Filtro",
    labelText: "Filtro",
    variant: "outlined",
    inputProps: {
      placeholder: "Filtro"
    },
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    id: "regular",
    labelText: "Regular",
    variant: "outlined",
    checkbox: true,
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    id: "regular",
    labelText: "Regular",
    variant: "outlined",
    disabled: true,
    inputProps: {
      placeholder: "Regular"
    },
    fullWidth: true,
    formControlProps: {
      fullWidth: true
    }
  }))))));
}