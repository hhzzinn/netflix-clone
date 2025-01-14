import { useState, useEffect, useRef, useCallback } from "react";

// React ver 19 이상에서만 {} props drilling 에서 ref라는 속성 정달이 가능
const TextInput = ({ inputRef, value, onChangeText, id, placeholder }) => {
  const onChange = (e) => {
    onChangeText(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{placeholder}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        ref={inputRef}
        style={{
          color: "black",
        }}
      />
    </div>
  );
};

// 커스텀 훅 customHook
const useTextInput = () => {
  const ref = useRef();
  const Input = useCallback(
    ({ value, onChangeText, id, placeholder }) => {
      // props를 받는 컴포넌트가 속성으로 많은 개체들을 요구할 때 예)3개이상
      // 문자열이 아닐 때, 객체로 만들어서 복사 전달.
      const props = { value, onChangeText, id, placeholder };
      return <TextInput {...props} inputRef={ref} />;
    },
    [ref]
  );

  const focus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return {
    Input,
    focus,
    ref,
  };
};

export { TextInput, useTextInput };
