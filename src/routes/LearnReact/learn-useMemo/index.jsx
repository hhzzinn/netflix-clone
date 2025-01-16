import { useCallback, useMemo, useRef, useState } from "react";

const LearnUseMemo = () => {
  // const 변수명 = useMemo()
  //   const 변수명 = useMemo(
  //     () => {},[] //()안에 콜백함수와 의존성을 넣어줘야 한다.
  //   );

  // 1. 초기값으로 사용하는 경우
  const initialState = useMemo(() => {
    return 0;
  }, []);

  const [state, setState] = useState(initialState);

  const stateMessage = useMemo(() => {
    if (state === 0) {
      return "상품을 담아주세요.";
    }
    if (state > 10) {
      return "10개 이상 구매할 수 없습니다.";
    }
    return null;
  }, [state]);

  //   const onSubmit = (e) => {
  //     e.preventDefault();

  //     if (state === 0) console.log(state, stateMessage, initialState);
  //   };
  const ref = useRef();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (stateMessage) {
        alert(stateMessage);
        setTimeout(() => {
          ref.current.showPicker();
        }, 500);
        return;
      }
      alert(`상품 ${state} 개를 주문하였습니다.`);
      state(0);
    },
    [state, stateMessage]
  );

  return (
    <div>
      <h1>useMemo</h1>
      <form action="" onSubmit={onSubmit}>
        <select
          name=""
          id=""
          onChange={(e) => setState(Number(e.target.value))}
          ref={ref}
        >
          <option value="">수량 선택</option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <button>주문하기</button>
      </form>
    </div>
  );
};

export default LearnUseMemo;
