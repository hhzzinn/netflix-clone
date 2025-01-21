import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  header: style({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0, .2)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10000,
    backdropFilter: "blur(2px)",
  }),
  ul: style({
    display: "flex",
    columnGap: 10,
    alignItems: "center",
  }),
  netflix: style({
    fontSize: 30,
    color: OpenColor.red[8],
    padding: "20px 10px",
    height: "auto",
  }),
  lang: style({
    border: "1px solid",
    fontSize: ".75rem",
    backgroundColor: "transparent",
  }),
  login: style({
    padding: "5px 10px",
    backgroundColor: OpenColor.red[7],
    fontSize: "0.75rem",
    borderRadius: 4,
  }),
};

export default styles;
