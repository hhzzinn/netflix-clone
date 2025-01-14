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
        className="bg-gray-900 text-gray-100 h-screen"
        style={{
          backgroundColor: OpenColor.gray[9],
          color: OpenColor.gray[0],
          height: "100vh",
          paddingTop: 70,
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
