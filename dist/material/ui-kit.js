"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardSubtitle = exports.cardLink = exports.cardTitle = exports.title = exports.defaultBoxShadow = exports.cardHeader = exports.cardActions = exports.roseCardHeader = exports.primaryCardHeader = exports.infoCardHeader = exports.dangerCardHeader = exports.successCardHeader = exports.warningCardHeader = exports.roseBoxShadow = exports.dangerBoxShadow = exports.warningBoxShadow = exports.successBoxShadow = exports.infoBoxShadow = exports.primaryBoxShadow = exports.greenDarkColor = exports.greenColor = exports.greenLightColor = exports.blueColor = exports.orangeColor = exports.yellowColor = exports.grayColor = exports.grayLightColor = exports.roseColor = exports.infoColor = exports.successColor = exports.dangerColor = exports.warningColor = exports.blackColor = exports.whiteColor = exports.beigeColor = exports.goldLightColor = exports.goldColor = exports.primaryDarkColor = exports.primaryLightColor = exports.primaryColor = exports.defaultFont = exports.card = exports.boxShadow = exports.containerFluid = exports.container = exports.transition = exports.drawerWidth = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ---- Variables - Styles that are used on more than one component ---- //
var drawerWidth = 260;
exports.drawerWidth = drawerWidth;
var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
exports.transition = transition;
var containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
exports.containerFluid = containerFluid;

var container = _objectSpread(_objectSpread({}, containerFluid), {}, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

exports.container = container;
var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
exports.boxShadow = boxShadow;
var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
exports.card = card;
var defaultFont = {
  fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
}; // Cores primárias

exports.defaultFont = defaultFont;
var primaryColor = "#cb1e25";
exports.primaryColor = primaryColor;
var primaryLightColor = "#C12C2C";
exports.primaryLightColor = primaryLightColor;
var primaryDarkColor = "#8B0D09";
exports.primaryDarkColor = primaryDarkColor;
var goldColor = "#8E734A";
exports.goldColor = goldColor;
var goldLightColor = "#C99846";
exports.goldLightColor = goldLightColor;
var beigeColor = "#F4F2ED";
exports.beigeColor = beigeColor;
var whiteColor = "#ffffff";
exports.whiteColor = whiteColor;
var blackColor = "#000000"; //Cores Secundárias

exports.blackColor = blackColor;
var warningColor = "#ff9800";
exports.warningColor = warningColor;
var dangerColor = "#C12C2C";
exports.dangerColor = dangerColor;
var successColor = "#4caf50";
exports.successColor = successColor;
var infoColor = "#00acc1";
exports.infoColor = infoColor;
var roseColor = "#B84D80";
exports.roseColor = roseColor;
var grayLightColor = "#F7F7F7";
exports.grayLightColor = grayLightColor;
var grayColor = "#999999";
exports.grayColor = grayColor;
var blueColor = "#3D6582";
exports.blueColor = blueColor;
var yellowColor = "#F7A700";
exports.yellowColor = yellowColor;
var orangeColor = "#E04A13";
exports.orangeColor = orangeColor;
var greenLightColor = "#1BAA46";
exports.greenLightColor = greenLightColor;
var greenColor = "#469639";
exports.greenColor = greenColor;
var greenDarkColor = "#225E03";
exports.greenDarkColor = greenDarkColor;
var primaryBoxShadow = {
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25);"
};
exports.primaryBoxShadow = primaryBoxShadow;
var infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
exports.infoBoxShadow = infoBoxShadow;
var successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
exports.successBoxShadow = successBoxShadow;
var warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
exports.warningBoxShadow = warningBoxShadow;
var dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
exports.dangerBoxShadow = dangerBoxShadow;
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};
exports.roseBoxShadow = roseBoxShadow;

var warningCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);

exports.warningCardHeader = warningCardHeader;

var successCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);

exports.successCardHeader = successCardHeader;

var dangerCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);

exports.dangerCardHeader = dangerCardHeader;

var infoCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);

exports.infoCardHeader = infoCardHeader;

var primaryCardHeader = _objectSpread({
  color: "#fff",
  backgroundColor: "#CB1E25"
}, primaryBoxShadow);

exports.primaryCardHeader = primaryCardHeader;

var roseCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

exports.roseCardHeader = roseCardHeader;

var cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

exports.cardActions = cardActions;
var cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
exports.cardHeader = cardHeader;
var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
exports.defaultBoxShadow = defaultBoxShadow;
var title = {
  color: "#525252",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: "\"Josefin Sans\", \"Times New Roman\", serif"
};
exports.title = title;

var cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: ".625rem"
});

exports.cardTitle = cardTitle;
var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
exports.cardLink = cardLink;
var cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};
exports.cardSubtitle = cardSubtitle;