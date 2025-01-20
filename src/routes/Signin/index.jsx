import { useState, useCallback, useEffect, useMemo } from "react";
import { useMyContext } from "../../contextApi/ContextProvider";
import { users } from "../../assets/fakebase";
import Input from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navi = useNavigate();
  const { email } = useMyContext();
  const [value, setValue] = useState(email);
  const [pwd, setPwd] = useState("");

  const emailMessage = useMemo(() => {
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

  const pwdMessage = useMemo(() => {
    const length = pwd.length;
    if (length === 0) {
      return "비밀번호를 입력해주세요";
    }
    if (length <= 4) {
      return "너무 짧";
    }
    if (length === 0) {
      return "너무 깁니다";
    }
    return null;
  }, [pwd]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (emailMessage) {
        return alert(emailMessage);
      }
      if (pwdMessage) {
        return alert(pwdMessage);
      }

      const foundEmail = users.find((user) => {
        if (user.email === value) {
          return user;
        }
        return;
      });
      if (!found) {
      }
    },
    [emailMessage, pwdMessage, value, pwd, navi]
  );

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={onSubmit}>
        <Input
          id="email"
          placeholder={"이메일 주소"}
          setValue={setValue}
          value={value}
        />
        <Input
          id="pwd"
          placeholder={"비밀번호"}
          setValue={setPwd}
          value={pwd}
          type="password"
        />

        <button>로그인</button>
        <p>또는</p>
        <button>로그인 코드 사용하기</button>
        <button type="button">비밀번호를 잊으셨나요?</button>
        <div>
          <input type="checkbox" id="check1" />
          <label htmlFor="check1">로그인 정보 저장</label>
        </div>
        <button>
          Netflix 회원이 아닌가요? <span>지금 가입하세요</span>
        </button>
      </form>
    </div>
  );
};

export default Signin;
