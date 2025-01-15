import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const LearnUseRef = () => {
  // 코드가 길어질 지언정 속도개선에 효과적임
  // 상수는 2번 실행하지만 얘는 한번만 실행하기 때문
  const initialState = useMemo(() => {
    return 0;
  }, []);
  // useState에 초기값을 넣을 때 많이 씀

  // 예시

  const [state, setState] = useState(initialState);
  const counting = () => {
    setState((prev) => prev + 1);
  };

  // ref = reference js = document.querySelector() // 리액트에서 document를 쓰지 않고 접근하는 방법
  const pRef = useRef();

  const checkP = () => {
    if (pRef.current) {
      console.log(pRef.current.innerText);
      pRef.current.innerText = "123123123";
    }
  };

  const inputRef = useRef();
  const checkInput = () => {
    console.log(inputRef.current.value);
  };

  const focusInput = () => [inputRef.current.focus()];

  useEffect(() => {
    console.log(state, pRef.current?.innerText);
  });

  return (
    <div>
      <h1>useRef</h1>
      <p ref={pRef}>{state}</p>
      <button onClick={counting}>++</button>
      <button onClick={checkP}>Check P Tag</button>

      <input type="text" ref={inputRef} />
      <button onClick={checkInput}>Check Input</button>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default LearnUseRef;
