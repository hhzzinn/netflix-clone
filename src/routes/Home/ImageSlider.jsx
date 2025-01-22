// import { useState, useEffect, useMemo } from "react";
// import styles from "./imageSlider.css";
// import { imgs } from "../../assets/fakebase";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ImageSlider = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const height = useMemo(() => {
//     return (width / 16) * 9; //16:9
//   }, []);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const onPrev = () => {
//     setCurrentIndex((prev) => {
//       if (prev === 0) {
//         // 배열의 최대 index값을 return해 줘야 함
//         // 배열.length-1
//         return imgs.length - 1;
//       }
//       return prev - 1;
//     });
//   };
//   const onNext = () => {
//     setCurrentIndex((prev) => {
//       if (prev === imgs.length - 1) {
//         return 0;
//       }
//       return prev + 1;
//     });
//   };

//   useEffect(() => {}, [currentIndex, width]);

//   useEffect(() => {
//     const getWidth = () => {
//       setWidth(window.innerWidth);
//     };
//     getWidth();

//     window.addEventListener("resize", getWidth);
//     return () => {
//       window.removeEventListener("resize", getWidth);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         border: "1px solid",
//         padding: 100,
//       }}
//     >
//       <h1>ImageSlider</h1>
//       <Slider dots infinite speed={500} slidesToScroll={3} sliderToShow={3}>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//         <div>5</div>
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;

// // {/* <div className={styles.isContainer}>
// //         <div
// //           className={styles.isWrap}
// //           style={{ width, transform: `translateX(${currentIndex * width}px)` }}
// //         >
// //           {/* <img
// //             src={imgs[currentIndex].imgUrl}
// //             alt=""
// //             width={width}
// //             height={height}
// //             className={styles.isImg}
// //             style={{
// //               width, // width: width 변수의 이름은 값의 이름이 되고 변수의 값은 그 값의 값이 된다.
// //               height,
// //             }}
// //           /> */}
// //           {imgs.map((img, index) => {
// //             return (
// //               <img
// //                 key={img.title}
// //                 src={imgs[index].imgUrl}
// //                 alt=""
// //                 width={width}
// //                 height={height}
// //                 className={styles.isImg}
// //                 style={{
// //                   width,
// //                   height,
// //                 }}
// //               />
// //             );
// //           })}
// //         </div>
// //         <button onClick={onPrev} className={styles.isPrev}>
// //           prev
// //         </button>
// //         <button onClick={onNext} className={styles.isNext}>
// //           next
// //         </button>
// //       </div> */}

import React from "react";
import Slider from "react-slick";
import { useRef, useCallback } from "react";
import "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgs } from "../../assets/fakebase";
import { style } from "@vanilla-extract/css";
import styles from "./imageSlider.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const ImageSlider = () => {
  const ref = useRef(null);

  const Prev = useCallback(() => {
    const onClick = () => {
      ref.current?.slickPrev();
    };
    return (
      <button onClick={onClick} className={styles.prev}>
        <IoChevronBack />
      </button>
    );
  }, [ref]);

  const Next = useCallback(() => {
    const onClick = () => {
      ref.current?.slickNext();
    };
    return (
      <button onClick={onClick} className={styles.next}>
        <IoChevronForward />
      </button>
    );
  }, [ref]);

  return (
    <div
      style={{
        padding: 30,
      }}
      className={styles.item.container}
    >
      <h1>Slider</h1>
      <Slider
        // autoplay // boolean 타입의 속성 전달 => false 일때만 {} 안에 적어줌
        autoplaySpeed={2000} // autoplay와 autoplaySpeed를 적으면 자동으로 돌아감. 단위는 ms
        slidesToShow={3} // 한번에 보여주는 슬라이드 갯수
        slidesToScroll={2} // 한번에 이동하는 슬라이드 수
        prevArrow={<Prev />}
        nextArrow={<Next />}
        ref={ref}
      >
        {imgs.map((img, index) => {
          return <ImgItem key={img.title} {...img} />;
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;

const ImgItem = ({ imgUrl, title }) => {
  return (
    <div>
      <p className={styles.item.title}>{title}</p>
      <img
        src={imgUrl}
        alt={title}
        width={100}
        height={100}
        className={styles.item.img}
      />
    </div>
  );
};
