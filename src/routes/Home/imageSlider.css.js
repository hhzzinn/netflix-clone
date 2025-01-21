import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const button = style({
  backgroundColor: OpenColor.gray[2],
  position: "absolute",
  top: "50%",
  transform: "translateY(-50)",
});

const styles = {
  container: style({}),
  isContainer: style({
    position: "relative",
  }),
  isWrap: style({
    display: "flex",
    border: "2px solid tomato",
  }),
  isImg: style({
    objectFit: "cover",
    border: "1px solid",
    // position: "absolute",
    // width: "100%",
    // height: "100%",
    transition: "all .3s",
  }),
  isPrev: style([
    button,
    {
      left: 0,
    },
  ]),
  isNext: style([
    button,
    {
      right: 0,
    },
  ]),
};

export default styles;
