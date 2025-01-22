import { style } from "@vanilla-extract/css";
import homeStyle from "./home.css";
import OpenColor from "open-color";

const top = 25;
const styles = {
  container: style([homeStyle.Container.div, {}]),
  content: style({
    position: "relative",
    padding: 20,
    marginTop: top,
    borderRadius: 10,
    transition: "all .3s",
    backgroundColor: OpenColor.gray[8],

    ":hover": {
      transform: "scale(1.05)",
      backgroundColor: OpenColor.gray[7],
    },
  }),
  wrap: style({
    // fontWeight: 600,
  }),
  title: style({
    fontSize: "1.1rem",
    fontWeight: 600,
  }),
  desc: style({
    fontWeight: 600,
  }),
  button: style({
    marginTop: 20,
    backgroundColor: OpenColor.gray[7],
    transition: "all .3s",
    ":hover": {
      backgroundColor: OpenColor.gray[6],
    },
  }),
  icon: style({
    position: "absolute",
    top: `-${top}px`,
    fontSize: 40,
  }),
};

export default styles;
