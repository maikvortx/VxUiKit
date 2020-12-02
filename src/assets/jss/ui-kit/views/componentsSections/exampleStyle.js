import { containerFluid } from "../../../../../assets/jss/ui-kit";

import imagesStyle from "../../../../../assets/jss/ui-kit/imagesStyles";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
