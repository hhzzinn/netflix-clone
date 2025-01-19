import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  button: style({
    width: "100%",
    backgroundColor: OpenColor.gray[8],
    display: "flex",
    justifyContent: "space-between",
  }),
  q: style({
    border: "1px solid",
    textAlign: "left",
  }),
  icon: style({}),
  div: style({}),
  p: style({}),
  link: style({}),
};

export default styles;
