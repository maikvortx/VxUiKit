"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionModal;

var _react = _interopRequireDefault(require("react"));

var _LibraryBooks = _interopRequireDefault(require("@material-ui/icons/LibraryBooks"));

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Button = _interopRequireDefault(require("../../../library/components/Buttons/Button"));

var _Modal = require("../../../library/components/Modal/Modal");

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
function SectionModal() {
  var _useModal = (0, _Modal.useModal)(),
      setModal = _useModal.setModal;

  var handleModal = function handleModal() {
    setModal({
      title: 'Título',
      subtitle: 'Sub-título',
      body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind',
      button: 'Botão'
    });
  };

  return /*#__PURE__*/_react.default.createElement(_Styles.Section, {
    id: "modal"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 5
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Modal")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    block: true,
    onClick: handleModal
  }, /*#__PURE__*/_react.default.createElement(_LibraryBooks.default, null), "Cl\xE1ssico")))))));
}