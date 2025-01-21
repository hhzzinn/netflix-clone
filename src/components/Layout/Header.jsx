import { useNavigate, useLocation } from "react-router-dom";
import { SiNetflix } from "react-icons/si";
import { IoLanguage } from "react-icons/io5";
import OpenColor from "open-color";
import { useEffect } from "react";
import { user } from "../../assets/fakebase";
import { Button } from "../ui/Button";
import { style } from "@vanilla-extract/css";
import styles from "./Header.css";

const Header = () => {
  const navi = useNavigate();
  const { pathname } = useLocation(); // useLocation로 위치정보를 가져옴
  // const location = useLocation()
  // const pathname = location.pathname  이 두줄의 코드를 {}로 한줄정리 한 것

  const onL = () => {
    navi("/login");
  };

  const onT = () => {
    navi("/");
  };

  // useEffect
  // 1. 보통 확인용으로 사용함
  // 클릭하거나 동작하지 않을 때에도 확인하고 싶을 때

  useEffect(() => {
    // 1. callback 함수
    console.log(pathname);
  }, [pathname]); //2. []dependency 의존성, []가 업뎃이 될 때마다 {}안을 보여줘라

  return (
    <header
      className={styles.header}
      // style={{
      //   borderBottom: `1px solid ${OpenColor.gray[7]}`, //borderColor 먹이는 두가지 방법 백틱 자바스크립트, borderColor
      //   // borderColor: OpenColor.gray[7],
      //   height: "auto",
      //   paddingRight: 10,
      // }}
    >
      <Button
        onClick={onT}
        className={styles.netflix}
        // className="h-10 px-2.5 text-2xl text-red-600" //tailwind css
      >
        <SiNetflix />
      </Button>
      <ul
        // className="flex gap-x-2.5"
        className={styles.ul}
      >
        <li>
          <Button className={styles.lang}>
            <IoLanguage />
            언어
          </Button>
        </li>
        {/* 조건 && 연산자 === 앞의 조건에 부합할 때 실행코드를 &&오른쪽에 적어줍니다. */}
        {/* 조건 ? : 연산자 === 앞의 조건에 부합할 때 실행할 코드는 ? 오른편에, 앞의 조건에 부합하지 않을 때 실행할 코드는 : 오른편에 적어줍니다. */}
        {(pathname !== "/login" ||
          (!user && pathname !== "/login") ||
          !user) && ( // && === ?:
          <li>
            <Button onClick={onL}>로그인</Button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
