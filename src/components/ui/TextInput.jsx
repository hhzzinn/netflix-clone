import { useRef, useCallback } from "react";

export const TextInput = ({
  inputRef,
  placeholder,
  id,
  style,
  divCn,
  inputCn,
}) => {
  return (
    <div className={divCn}>
      {/* <label htmlFor={id}>{placeholder}</label> */}
      <input
        type="text"
        id={id}
        ref={inputRef}
        placeholder={placeholder}
        style={{ ...style }}
        input={inputCn}
      />
    </div>
  );
};

// custom Hook 리액트의 훅을 나만의 스타일로 만들어서 사용
export const useTextInput = () => {
  const ref = useRef();
  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  const Component = useCallback(
    ({ placeholder, id, style, inputCn, divCn }) => {
      return (
        <TextInput
          id={id}
          ref={inputRef}
          placeholder={placeholder}
          divCn={divCn}
          inputCn={inputCn}
        />
      );
    },
    [ref]
  );

  return {
    ref,
    focus,
    Component,
  };
};
