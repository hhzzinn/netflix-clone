import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import OpenColor from "open-color";

const Layout = () => {
  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: OpenColor.gray[9],
          color: OpenColor.gray[0],
          minHeight: "100vh",
          paddingTop: 62,
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
