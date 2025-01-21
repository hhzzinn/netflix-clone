import styles from "../Layout/Header.css";
// props Drilling
// 다른 곳에서 아래의 컴포넌트를 불러 쓸 때 전달해주는 값.

// size = 'sm' \'lg'\ 'xl'
const Button = ({ onClick, type, children, style, className }) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={className ? `${styles}` : styles}
      // style={{
      //   padding: "5px 10px",
      //   borderRadius: 4,
      //   // fontSize: size === 'sm' ? 12 :size === 'lg' ? 20 : xl 이렇게 크기등 나만의 스타일을 저장해서 사용 가능하다.
      //   display: "flex",
      //   alignItems: "center",
      //   // fontSize, // === fontSize :fontSize
      //   ...style, // 바깥에서 스타일을 적용하는 ...style은 항상 맨 밑에 놓아야한다.
      //   // ...변수명 복사하기 객체를 복사할 때에는 {} 안에 ..., 배열을 복사할 때는 []안에 ...
      // }}
    >
      {/* 조건 ?? 연산자 <==> 조건 && 연산자 */}
      {/* 앞의 조건이 부합하지 않을 때 실행하는 코드를 "?? 오른편에 작성" */}
      {children ?? "Button"}
    </button>
  );
};

// 핸드폰 버튼 => 2,3 가지
// 1. 클릭했을 때 투명도 변함
// 2. 클릭시 색깔이 조금 진하게 변함
// 3. 아무 변화 없음

export { Button };
