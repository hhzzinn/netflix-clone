import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import OpenColor from "open-color";

const icon = style({
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "transparent",
  border: "1px solid",
});

const styles = {
  container: style({
    position: "relative",
  }),
  hover: {
    container: recipe({
      base: {
        border: "1px solid",
        position: "absolute",
        // visibility: "hidden",
        opacity: 0.5,
        transform: "scale(.5)",
      },
      variants: {
        isHovering: {
          true: {
            borderColor: "tomato",
            visibility: "visible",
            opacity: 1,
            transform: "scale(1)",
            transition: "all .3s",
            backgroundColor: OpenColor.gray[8],
            color: OpenColor.gray[0],
          },
        },
      },
    }),
    icons: {
      wrap: style({
        display: "flex",
        justifyContent: "space-between",
      }),
      ul: style({
        display: "flex",
        columnGap: 10,
      }),
    },
    play: style({}),
    div: style({}),
    span: style({}),
    time: style({}),
  },
};

export default styles;
