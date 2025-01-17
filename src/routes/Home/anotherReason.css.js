import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const flex = style({
  display: "flex",
  flexDirection: "column",
});

const styles = {
  container: style([
    flex,
    {
      borderRadius: 10,
      padding: "30px 20px",
      rowGap: 10,
      alignItems: "flex-end",
      backgroundColor: OpenColor.gray[8],
      ":hover": {
        backgroundColor: OpenColor.gray[7],
      },
    },
  ]),
  title: style({
    fontSize: "1.1rem",
    fontWeight: "bold",
  }),
  desc: style({
    color: OpenColor.gray[4],
  }),
  icon: style({
    fontSize: 40,

    // display: "flex",
  }),
  wrap: [
    flex,
    {
      rowGap: 10,
      width: "100%",
    },
  ],
};

export default styles;
