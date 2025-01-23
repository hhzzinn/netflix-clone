import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  form: style({
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    padding: 30,
    paddingTop: 90,
  }),
  login: style({
    backgroundColor: OpenColor.red[7],
    color: OpenColor.gray[0],
  }),
  forgot: style({
    backgroundColor: "transparent",
    ":hover": {
      textDecoration: "underline",
    },
  }),
  new: style({
    backgroundColor: "transparent",
    textAlign: "left",
    padding: 0,
    color: OpenColor.gray[5],
  }),
  span: style({
    color: OpenColor.gray[3],
    ":hover": {
      textDecoration: "underline",
    },
  }),
};

export default styles;
