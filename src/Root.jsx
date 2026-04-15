import React, { useState } from "react";
import Nav from "./Element/Nav";
import { Outlet } from "react-router";
import Footer from "./Element/Footer";
import { UseContext } from "./Element/UseContext";
import { ToastContainer } from "react-toastify";

export default function Root() {
  let [DataContext, setDataContext] = useState([]);
  let [BtnCliData, setBtnCliData] = useState([]);

  return (
    <UseContext
      value={{ setDataContext, DataContext, BtnCliData, setBtnCliData }}
    >
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
      <ToastContainer position="top-left" />
    </UseContext>
  );
}
