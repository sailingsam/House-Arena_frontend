import React from "react";
import { Outlet } from "react-router-dom";
import Navheader from "./Components/NavHeader/Navheader";
import Footer from "./Components/Footer/Footer";

function Layout() {
  return (
    <>
      <Navheader />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
