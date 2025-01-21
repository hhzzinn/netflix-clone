import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  Container: style({}),
  button: style({
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "transparent",
    },
  }),
  icon: style({
    color: OpenColor.blue[6],
  }),
  label: style({}),
};

export default styles;
