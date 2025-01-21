import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";
import styles from "./CheckBox.css";

const CheckBox = ({ id, state, onClick, label, type }) => {
  return (
    <div className={styles.Container}>
      <button
        id={id}
        onClick={onClick}
        className={styles.button}
        type={type ?? "button"}
        // 앞의 변수가 없거나 또는 조건이 만족하지 않을 때 오른쪽의 코드를 실행 또는 보여주세요 조건 ?? 코드
      >
        {state ? <IoCheckbox className={styles.icon} /> : <IoCheckboxOutline />}
        {/* 왼쪽 조건에 만족할 경우에만 오른쪽을 실행 */}
      </button>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
