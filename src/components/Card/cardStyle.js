const cardStyle = {
  card: (props) => ({
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "4px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    border: "1px solid #C4C4C4",
    boxShadow: props.boxShadow || "1px 2px 2px 1px rgba(0, 0, 0, 0.25) ",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    '& :hover': {
      cursor: 'pointer',
      boxShadow: props.boxShadow || "1px 2px 2px 1px rgba(0, 0, 0, 0.25) ",
    }
  }),
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};

export default cardStyle;
