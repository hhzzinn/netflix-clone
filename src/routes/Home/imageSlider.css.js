import { style } from "@vanilla-extract/css";
import { openSans } from "../../assets/fakebase";

const button = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
});

const styles = {
  item: {
    container: style({
      position: "relative",
      transition: "all .3s",
      ":hover": {
        transform: "scale(1.03)",
        "::after": {
          content: "",
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
      },
    }),
    wrap: style({}),
    title: style({
      position: "absolute",
      zIndex: 1,
      bottom: 20,
      width: "100%",
      textAlign: "center",
      fontFamily: openSans,
    }),
    img: style({
      objectFit: "cover",
      width: "100%",
      borderRadius: 10,
      position: "relative",
    }),
  },
  prev: style([
    button,
    {
      right: "100%",
    },
  ]),
  next: style([
    button,
    {
      left: "100%",
    },
  ]),
};

export default styles;
