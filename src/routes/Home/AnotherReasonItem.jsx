import React from "react";
import styles from "./anotherReason.css";

const AnotherReasonItem = ({ title, desc, Icon }) => {
  return (
    <li>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
        <Icon className={styles.icon} />
      </div>
    </li>
  );
};

export default AnotherReasonItem;
