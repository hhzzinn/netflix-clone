import { useState, useEffect } from "react";
import { useTextInput } from "../../components/ui/TextInput";
import OpenColor from "open-color";
import styles from "./home.css";

// children 을 중괄호 안에서 가져오는 방법은 propsdrilling을 사용한 방법 react스러운 방법

// rrd => <Outlet/>
const Home = () => {
  const Text = useTextInput();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(Text.ref.current.value);
  };

  return (
    <div>
      <h1 className={styles.h1}>Home</h1>
      <form action="" onSubmit={onSubmit}>
        <Text.Component
          id={"text"}
          placeholder={"이메일을 입력하세요"}
          divCn={styles.input.div}
          inputCn={styles.input.input}
        />
        <button>시작하기</button>
      </form>
    </div>
  );
};

export default Home;
