import React from "react";
import { fMenus } from "../../assets/fakebase";
import OpenColor from "open-color";
import { Button } from "../ui/Button";
import { IoLanguage } from "react-icons/io5";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: OpenColor.gray[9],
        color: OpenColor.gray[0],
        padding: 10,
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
        alignItems: "start",
        fontSize: ".75rem",
      }}
    >
      <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 10,
        }}
      >
        {fMenus.map((fMenu, index) => {
          return (
            <FooterItem
              key={fMenu.path}
              {...fMenu}
              // {}안에 ... 객체의 변수명을 적으면 복사하는 뜻이다.
              // 리액트 컴포넌트에 이렇게 하는 것은 복사한 객체의 전부를 전달해주다는 뜻이다.
            />
          );
        })}
      </ul>
      <Button
        style={{
          border: "1px solid",
        }}
      >
        <IoLanguage />
        한국어
      </Button>
      <p>넷플릭스 대한민국</p>
      <p>
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
        제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담) 대표:
        레지널드 숀 톰프슨 이메일 주소: korea@netflix.com 주소: 대한민국
        서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
        사업자등록번호: 165-87-00119 클라우드 호스팅: Amazon Web Services Inc.
        공정거래위원회 웹사이트
      </p>
    </footer>
  );
};

export default Footer;
