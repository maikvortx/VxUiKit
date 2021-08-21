"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTypography;

var _react = _interopRequireDefault(require("react"));

var _GridContainer = _interopRequireDefault(require("../../../library/components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("../../../library/components/Grid/GridItem"));

var _Button = _interopRequireDefault(require("../../../library/components/Buttons/Button"));

var _DatePickers = _interopRequireDefault(require("../../../library/components/DatePicker/DatePickers"));

var _icons = require("@material-ui/icons");

var _Styles = require("./Styles");

var _Card = _interopRequireDefault(require("../../../library/components/Card/Card"));

var _CardBody = _interopRequireDefault(require("../../../library/components/Card/CardBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components
// icons components
function SectionTypography() {
  return /*#__PURE__*/_react.default.createElement(_Styles.Section, null, /*#__PURE__*/_react.default.createElement(_Styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "icons"
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, "\xCDcones")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 5
  }, /*#__PURE__*/_react.default.createElement(_Styles.Text, null, "A ideia \xE9 utilizar da biblioteca inteira do \u2018Material Design\u2019, no caso os icones s\xE3o na vers\xE3o \u201Crounded\u201D. Podem ser utilizados como representa\xE7\xE3o visual de algo e at\xE9 como icones/bot\xF5es de a\xE7\xF5es. As divis\xF5es trazidas aqui s\xE3o as mais usadas do Material Design (Nem todas foram usadas dentro dos produtos da V\xF3rtx), para ver a lista completa s\xF3 ir na pr\xF3pria biblioteca:"), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://material-ui.com/pt/components/icons/",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "Ver mais \xEDcones ", /*#__PURE__*/_react.default.createElement(_icons.ArrowRightRounded, null)))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 7
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "A\xE7\xF5es"))), /*#__PURE__*/_react.default.createElement(_icons.AccessAlarmRounded, null), /*#__PURE__*/_react.default.createElement(_icons.GetAppRounded, null), /*#__PURE__*/_react.default.createElement(_icons.AddRounded, null), /*#__PURE__*/_react.default.createElement(_icons.AddCircleRounded, null), /*#__PURE__*/_react.default.createElement(_icons.AddBoxRounded, null), /*#__PURE__*/_react.default.createElement(_icons.DoneRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CheckRounded, null), /*#__PURE__*/_react.default.createElement(_icons.DoneAllRounded, null), /*#__PURE__*/_react.default.createElement(_icons.DoneOutlineRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CheckCircleRounded, null), /*#__PURE__*/_react.default.createElement(_icons.OfflinePinRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ShoppingCartRounded, null), /*#__PURE__*/_react.default.createElement(_icons.LibraryAddCheckRounded, null), /*#__PURE__*/_react.default.createElement(_icons.PlaylistAddRounded, null), /*#__PURE__*/_react.default.createElement(_icons.PlaylistAddCheckRounded, null), /*#__PURE__*/_react.default.createElement(_icons.AddToPhotosRounded, null)), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Navega\xE7\xE3o"))), /*#__PURE__*/_react.default.createElement(_icons.ArrowBackRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ArrowDownwardRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ArrowForwardRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ArrowUpwardRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ChevronLeftRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ChevronRightRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ExpandLessRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ExpandMoreRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ArrowLeftRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ArrowRightRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ArrowDropUpRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ArrowDropDownRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ArrowDropDownCircleRounded, null), /*#__PURE__*/_react.default.createElement(_icons.FirstPageRounded, null), /*#__PURE__*/_react.default.createElement(_icons.LastPageRounded, null), /*#__PURE__*/_react.default.createElement(_icons.UnfoldLessRounded, null), /*#__PURE__*/_react.default.createElement(_icons.UnfoldMoreRounded, null), /*#__PURE__*/_react.default.createElement(_icons.SubdirectoryArrowLeftRounded, null), /*#__PURE__*/_react.default.createElement(_icons.SubdirectoryArrowRightRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CloseRounded, null), /*#__PURE__*/_react.default.createElement(_icons.FullscreenExitRounded, null), /*#__PURE__*/_react.default.createElement(_icons.FullscreenRounded, null), /*#__PURE__*/_react.default.createElement(_icons.MoreHorizRounded, null), /*#__PURE__*/_react.default.createElement(_icons.MoreVertRounded, null), /*#__PURE__*/_react.default.createElement(_icons.MenuRounded, null), /*#__PURE__*/_react.default.createElement(_icons.AppsRounded, null)), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Arquivos"))), /*#__PURE__*/_react.default.createElement(_icons.CloudRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CloudQueueRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CloudDownloadRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CloudDoneRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CloudOffRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CloudCircleRounded, null), /*#__PURE__*/_react.default.createElement(_icons.FileCopyRounded, null), /*#__PURE__*/_react.default.createElement(_icons.DescriptionRounded, null), /*#__PURE__*/_react.default.createElement(_icons.InsertDriveFileRounded, null), /*#__PURE__*/_react.default.createElement(_icons.AttachmentRounded, null), /*#__PURE__*/_react.default.createElement(_icons.BackupRounded, null), /*#__PURE__*/_react.default.createElement(_icons.FolderRounded, null), /*#__PURE__*/_react.default.createElement(_icons.FolderSharedRounded, null), /*#__PURE__*/_react.default.createElement(_icons.FolderOpenRounded, null), /*#__PURE__*/_react.default.createElement(_icons.CreateNewFolderRounded, null)), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Alertas"))), /*#__PURE__*/_react.default.createElement(_icons.WarningRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ErrorRounded, null), /*#__PURE__*/_react.default.createElement(_icons.ErrorOutlineRounded, null), /*#__PURE__*/_react.default.createElement(_icons.AddAlertRounded, null), /*#__PURE__*/_react.default.createElement(_icons.NotificationImportantRounded, null))))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_Styles.Title, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Exemplos de utiliza\xE7\xE3o"))), /*#__PURE__*/_react.default.createElement(_Styles.Text, null, "Usar em bot\xF5es e campos para ilustrar a a\xE7\xE3o que o mesmo faz. Exemplo:")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_Styles.Text, null, "Usar em bot\xF5es e campos para ilustrar a a\xE7\xE3o que o mesmo faz. Exemplo:"), /*#__PURE__*/_react.default.createElement(_DatePickers.default, {
    id: "regular",
    labelText: "Regular",
    variant: "outlined",
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_icons.GetAppRounded, null), " Com \xEDcone")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_Styles.Text, null, "Exemplo em cards (VxInforma). Exemplo:"), /*#__PURE__*/_react.default.createElement(_Card.default, {
    width: '50%'
  }, /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement("h5", null, "Vencidas"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", null, "12"), /*#__PURE__*/_react.default.createElement(_icons.WarningRounded, {
    style: {
      fontSize: "60",
      color: "#cb1e25"
    }
  })))))))));
}

;