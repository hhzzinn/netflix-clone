import { useState, useEffect } from "react";
import inputStyles from "./input.css";

// const Input = ({ className }) => {
//   return <input className={className} />;
// };

const Input = ({ id, placeholder, value, setValue, type }) => {
  //   const [value, setValue] = useState("");
  const [isFocused, setisFocused] = useState(false);

  const onFocus = () => {
    setisFocused(true);
  };

  const onBlur = () => {
    if (value.length > 0) {
      return setisFocused(true);
    }
    setisFocused(false);

    setisFocused(false);
  };

  useEffect(() => {
    console.log(value);
    if (value.length > 0) {
      setisFocused(true);
    }
  }, [value]);

  return (
    <div className={inputStyles.container}>
      <label htmlFor={id} className={inputStyles.label({ isFocused })}>
        {placeholder}
      </label>
      <input
        className={inputStyles.inputStyles}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type ?? "email"} // type이 없을 때에만 뒤 email을 보여줘
        id={id}
      />
    </div>
  );
};

export default Input;
