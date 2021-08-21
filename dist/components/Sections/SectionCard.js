"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionCard;

var _react = _interopRequireDefault(require("react"));

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Card = _interopRequireDefault(require("../../../library/components/Card/Card"));

var _CardBody = _interopRequireDefault(require("../../../library/components/Card/CardBody"));

var _Modal = require("../../../library/components/Modal/Modal");

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components
function SectionCard() {
  var _useModal = (0, _Modal.useModal)(),
      setModal = _useModal.setModal;

  var handleModal = function handleModal() {
    setModal({
      title: 'Card COM clique',
      subtitle: 'Você clicou no card com clique!',
      body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind',
      button: 'Fechar'
    });
  };

  return /*#__PURE__*/_react.default.createElement(_Styles.Section, {
    bgColor: "#F7F7F7",
    id: "card"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    bgColor: "#F7F7F7"
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    onClick: handleModal,
    boxShadow: '1px 3px 4px 1px rgba(0, 0, 0, 0.25)',
    clickable: true
  }, /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Card COM clique")), /*#__PURE__*/_react.default.createElement(_Styles.Text, {
    width: 100
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    bgColor: "#F7F7F7"
  }, /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "Card SEM clique")), /*#__PURE__*/_react.default.createElement(_Styles.Text, {
    width: 100
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))));
}