import { PiPopcorn } from "react-icons/pi";
import styles from "./more.css";

const More = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.icon}>
          <PiPopcorn />
        </span>
        <div className={styles.wrap}>
          <p className={styles.title}>5,500원이면 만날 수 있는 넷플릭스.</p>
          <p className={styles.desc}>
            가장 경제적인 광고형 멤버십을 이용해 보세요.
          </p>
        </div>
        <button className={styles.button}>자세히 알아보기</button>
      </div>
    </div>
  );
};

export default More;
