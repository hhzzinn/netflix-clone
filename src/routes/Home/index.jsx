import { useEffect } from "react";
import { useTextInput } from "../../components/ui/TextInput";
import OpenColor from "open-color";
import styles from "./home.css";
import { anotherReasons } from "../../assets/fakebase";
import AnotherReasonItem from "./AnotherReasonItem";
import More from "./More";
import FAQ from "./FAQ";
import Start from "./Start";
import ImageSlider from "./ImageSlider";
import { useMyContext } from "../../contextApi/ContextProvider";
import UserHome from "./userHome";

// children 을 중괄호 안에서 가져오는 방법은 propsdrilling을 사용한 방법 react스러운 방법

// rrd => <Outlet/>
const Home = () => {
  const Text = useTextInput();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(Text.ref.current.value);
  };

  const { user } = useMyContext();

  if (user) {
    return <UserHome />;
  }

  return (
    <div className={styles.wrap}>
      <Start />
      <More />
      <ImageSlider />

      <div className={styles.Container.div}>
        <p className={styles.Container.p}>가입해야 하는 또 다른 이유</p>
        <ul className={styles.Container.ul}>
          {
            // 함수를 사용한다 = 호출 call or fire => ()까지 적어줌
            anotherReasons.map((reason) => {
              return <AnotherReasonItem key={reason.title} {...reason} />;
            })
          }
        </ul>
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
