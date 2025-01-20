// 1. useState, useCallback 불러오기
import { useState, useCallback, useMemo, useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import styles from "./Start.css";
import Input from "../../components/ui/Input";
import { users } from "../../assets/fakebase";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../contextApi/ContextProvider";

const Start = () => {
  const navi = useNavigate();
  const { onChangeEmail } = useMyContext(); // Custom Hook

  // 2. value란 이름의 state를 useState를 사용해서 선언
  const [value, setValue] = useState("");

  const message = useMemo(() => {
    if (value.length === 0) {
      return "이메일을 입력해주세요.";
    }
    if (!value.includes("@")) {
      return "@를 포함해주세요";
    }

    const split = value.split("@");

    // split[0] = 이메일 주소
    // split[1] = @뒤의 주소
    if (!split[1].includes(".")) {
      return "이메일 주소를 확인해주세요";
    }

    const split2 = split[1].split(".");

    if (split2[1].length === 0) {
      return "이메일 주소의 마지막 자리를 확인해주세요.";
    }

    return null;
  }, [value]);

  // 3. Input 컴포넌트로 value, setValue 전달하고 Input 컴포넌트에서 인자값으로  value, setValue 받기

  // 4. onSubmit 이란 이름으로 useCallback 함수 만들고 인자값으로 e받아와서 새로고침 방지하고 value값 출력하기.
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 1. value 길이가 0, 아무것도 입력되지 않으면 경고
      if (value.length === 0) {
        return alert("이메일을 입력해주세요.");
      }

      // 2. '@'가 입력되지 않으면 경고

      if (message) {
        return alert("message");
      }

      const found = users.find((user) => {
        if (user.email === value) {
          return user;
        }
      });

      // if (!found) {
      //   return navi("/signup");
      // }

      // navi("/login");
      onChangeEmail(value);
      navi(found ? "/login" : "/signup");
    },
    [value, message, navi, onChangeEmail]
  );
  useEffect(() => {
    const str = "gudwlsdl2529@gmail.com";

    const split = str.split("@");
    console.log(split);
  }, []);

  // 5. form과 연결하기 form의 onSubmit 속성에 위의 함수 넣기
  return (
    <div className={styles.Container}>
      <div className={styles.div}>
        <h1 className={styles.h1}>영화, 시리즈 등을 무제한으로</h1>
        <p className={styles.p}>5,500원으로 ~</p>
        <p></p>
      </div>
      <form action="" className={styles.form} onSubmit={onSubmit}>
        {/* <Input className={styles.input} /> */}
        <Input
          id={"email"}
          placeholder={"이메일 주소"}
          value={value}
          setValue={setValue}
        />
        <div className={styles.buttonWrap}>
          <button className={styles.button}>
            시작하기
            <span className={styles.icon}>
              <IoChevronForward />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Start;
