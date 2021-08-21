"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalProvider = exports.ModalContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _useModal2 = _interopRequireDefault(require("./useModal"));

var _Modal = _interopRequireDefault(require("./Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContext;
exports.ModalContext = ModalContext;

var _ModalContext = exports.ModalContext = ModalContext = /*#__PURE__*/_react.default.createContext(),
    Provider = _ModalContext.Provider;

var ModalProvider = function ModalProvider(_ref) {
  var children = _ref.children;

  var _useModal = (0, _useModal2.default)(),
      modal = _useModal.modal,
      handleModal = _useModal.handleModal,
      modalContent = _useModal.modalContent;

  return /*#__PURE__*/_react.default.createElement(Provider, {
    value: {
      modal: modal,
      handleModal: handleModal,
      modalContent: modalContent
    }
  }, /*#__PURE__*/_react.default.createElement(_Modal.default, null), children);
};

exports.ModalProvider = ModalProvider;