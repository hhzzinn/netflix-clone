import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const imgUrl =
  "https://cdn.pixabay.com/photo/2025/01/07/16/54/woman-9317323_640.jpg";

const styles = {
  Container: style({
    padding: "200px 30px",
    backgroundImage: `url(${imgUrl})`, // url안에 그냥 이미지 주소 넣어도 좋지만 너무 길어지니 변수처리해서 불러와 준다.
    position: "relative",
    zIndex: 0,
    "::after": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.6)",
      zIndex: -1,
    },
  }),
  div: style({
    textAlign: "center",
  }),
  h1: style({
    fontWeight: 900,
    fontSize: "1.8rem",
  }),
  p: style({ margin: "10px 0" }),
  form: style({
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  }),
  input: style({
    backgroundColor: "rgba(255, 255, 255, .5)", // 투명도까지 조절하려면 a도 넣어야 된다.
    outline: "none",
    border: `1px solid ${OpenColor.green[6]}`,
    color: OpenColor.gray[0],
    borderRadius: 4,
  }),
  button: style({
    backgroundColor: OpenColor.red[7],
    transition: "all .3s",
    display: "flex",
    alignItems: "center",
    columnGap: 10,
    ":hover": {
      backgroundColor: OpenColor.red[7],
      opacity: 0.8,
    },
    ":active": {
      opacity: 0.6,
    },
  }),
  icon: style({}),
  buttonWrap: style({
    display: "flex",
    justifyContent: "center",
  }),
};

export default styles;
