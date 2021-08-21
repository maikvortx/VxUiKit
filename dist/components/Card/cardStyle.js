"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cardStyle = {
  card: function card(props) {
    return {
      marginBottom: "30px",
      marginTop: "30px",
      borderRadius: "4px",
      color: "rgba(0, 0, 0, 0.87)",
      backgroundColor: "#fff",
      width: props.width || "100%",
      border: "1px solid #C4C4C4",
      boxShadow: props.boxShadow || "unset",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: ".875rem",
      transition: "all 300ms linear"
    };
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  },
  clickable: {
    boxShadow: '1px 3px 4px 1px rgba(0, 0, 0, 0.25)',
    "&:hover,&:focus": {
      backgroundColor: 'rgb(245, 245, 245)',
      transition: 'all 0.3s ease 0s',
      cursor: 'pointer'
    }
  }
};
var _default = cardStyle;
exports.default = _default;