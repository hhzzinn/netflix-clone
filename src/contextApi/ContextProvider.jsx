import { useState, useEffect, useContext, createContext } from "react";

// 초기값 useState => 초기값

const initialState = {
  email: "gudwlsdl2529@gmail.com",
  onChangeEmail: () => {},
  user: {
    email: "",
    uid: "",
  },
  onUserLogin: () => {
    onUserLogout: () => {};
  },
};

const Context = createContext(initialState);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "gudwlsdl2529@gmail.com",
    uid: "tester1",
  });
  const onUserLogin = (email, uid) => {
    setUser({ email, uid });
  };

  const onUserLogout = () => {
    setUser(null);
  };

  const [email, setEmail] = useState(initialState.email);

  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  };

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <Context.Provider
      value={{
        email,
        onChangeEmail,
        user,
        onUserLogin,
        onUserLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// 리액트 훅과 비슷한 작명법
// use시작하는 새로운 훅을 커스텀 훅이라고 부름, Custom Hook
const useMyContext = () => {
  return useContext(Context);
};

export { Context, ContextProvider, useMyContext };
