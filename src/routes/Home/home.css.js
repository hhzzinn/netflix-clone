import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";
import { Container } from "postcss";

const styles = {
  wrap: style({
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  }),
  h1: style({
    fontSize: 100,
    fontWeight: 900,
    color: "tomato",
  }),
  input: {
    div: style({
      display: "flex",
      flexDirection: "column",
    }),
    input: style({
      outline: "none",
      backgroundColor: "transparent",
      border: `1px solid ${OpenColor.green[6]}`,
      color: OpenColor.gray[2],
      "::placeholder": { color: "tomato" },
    }),
  },
  Container: {
    div: style({
      padding: "0 30px",
    }),
    p: style({
      fontWeight: 600,
      marginBottom: 10,
      fontSize: "1.1rem",
    }),
    ul: style({
      display: "flex",
      flexDirection: "column",
      rowGap: 10,
    }),
  },
};

export default styles;
