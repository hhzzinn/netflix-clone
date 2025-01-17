import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  button: style({
    width: "100%",
    backgroundColor: OpenColor.gray[8],
  }),
  q: style({}),
  icon: style({}),
  div: style({}),
  p: style({}),
  link: style({}),
};

export default styles;
