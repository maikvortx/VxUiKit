"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderLinks;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Modal = require("../../components/Modal/Modal");

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Button = _interopRequireDefault(require("../../library/components/CustomButtons/Button"));

var _headerLinksStyle = _interopRequireDefault(require("./headerLinksStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_headerLinksStyle.default);

function HeaderLinks(props) {
  var _useModal = (0, _Modal.useModal)(),
      setModal = _useModal.setModal,
      unSetModal = _useModal.unSetModal;

  var handleLogout = function handleLogout() {
    setModal({
      title: 'Clique no logout',
      subtitle: 'Você clicou no "SAIR" do header!',
      body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind',
      button: 'Fechar'
    });
  };

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_List.default, {
    className: classes.list
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: classes.login
  }, "Usu\xE1rio")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: handleLogout,
    color: "transparent",
    target: "_blank",
    className: classes.logout
  }, "(Sair)")));
}