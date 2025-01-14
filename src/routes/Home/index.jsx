import { useState } from "react";
import React from "react";
import { useTextInput } from "../../components/ui/TextInput";

// children 을 중괄호 안에서 가져오는 방법은 propsdrilling을 사용한 방법 react스러운 방법

// rrd => <Outlet/>
const Home = () => {
  const [text, setText] = useState("");
  const Text = useTextInput();

  return (
    <div>
      <h1>Home</h1>
      <Text.Input value={text} onChangeText={{ setText }} id="text" />
    </div>
  );
};

export default Home;
