import { faqs } from "../../assets/fakebase";
import { Link } from "react-router-dom";
import homeStyle from "./home.css";
import styles from "./faq.css";
import { useState, useEffect } from "react";

const FAQ = () => {
  const initialState = Array.from({ length: faqs.length }, () => {
    return false;
  });
  const [booleans, setBooleans] = useState(initialState);

  return (
    <div className={homeStyle.Container.div}>
      <p className={homeStyle.Container.p}>자주 묻는 질문</p>
      <ul className={homeStyle.Container.ul}>
        {faqs.map((faq, index) => {
          return (
            <FAQItem
              key={faq.q}
              {...faq}
              state={booleans[index]}
              onClick={() => {
                setBooleans((prev) => {
                  let copy = [...prev];
                  const foundindex = copy.findIndex((item) => {
                    if (item === true) {
                      return item;
                    }
                  });

                  if (foundindex >= 0 && foundindex !== index) {
                    copy[foundindex] = false;
                  }

                  copy[index] = !copy[index];
                  return copy;
                });
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;

const FAQItem = ({ q, a, path, pathText, state, onClick }) => {
  return (
    <li>
      <button className={styles.button} onClick={onClick}>
        <p className={styles.q}>{q}</p>
        <span className={styles.icon}>++</span>
      </button>

      <div className={styles.div({ state })}>
        <p>{a}</p>
        {path && pathText && (
          <Link to={path} className={styles.link}>
            {pathText}
          </Link>
        )}
      </div>
    </li>
  );
};
