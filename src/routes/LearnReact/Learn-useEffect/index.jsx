import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  // 리액트에서 useState등의 훅으로 변수를 선언할 대 컴포넌트 안의 상단에 선언한다.
  const [time, setTime] = useState(0); // second 초
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  // 중간쯤에 함수를 작성 또는 위의 선언된 변수 근처에서 작성
  const onStart = () => {
    setStart(true);
  };

  const onReset = () => {
    setTime(0);
    setStart(false);
  };

  const onStop = () => {
    setStart(false);
  };

  // 함수가 useState의 훅의 set함수를 사용하지 않는 함수를 만들면 인자값으로 변수를 받아오고 리액트 컴포넌트 바깥 아래부분에 작성 혹은 다른 파일에 만들어두고 불러와서 사용할 수 있음 결국은 codeSpliting이 매우 중요하다.

  useEffect(() => {
    if (start) {
      const counting = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      counting;

      return () => {
        clearInterval(counting); // 얘가 없으면 지 멋대로 막 늘어남
      };
    }
  }, [start]);

  useEffect;

  // []의존성을 추가한 뒤에 useEffect를 사용하면 해당 컴포넌트가 render에서 딱 한 번 실행한다.

  // [] 안에는 의존성을 넣어주는데 해당 변수가 업데이트 될 때마다 실행한다.

  return (
    <div>
      <h1>Use Effect</h1>
      <div>
        <p>{time} 초</p>
        <button onClick={onReset}>초기화</button>
        <button onClick={onStart}>시작</button>
        <button onClick={onStop}>stop</button>
      </div>
    </div>
  );
};

export default LearnUseEffect;
