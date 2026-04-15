import React, { useContext } from "react";
import { UseContext } from "../Element/UseContext";
import { MdPhoneCallback } from "react-icons/md";
import { FcVideoCall } from "react-icons/fc";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";
import Timelinedata from "../Element/Timelinedata";

export default function TimeLine() {
  let [filterdata, setfilterdata] = useState([]);
  let [btrue, settrue] = useState(true);

  let { BtnCliData, setBtnCliData } = useContext(UseContext);

  function DropDown(abc) {
    let Newdata = BtnCliData.filter((btns) => btns.value === abc);
    setfilterdata(Newdata);
    settrue(false);
  }

  let date = new Date();
  let formatted = date.toLocaleDateString("en-US", {
    weekday: "short", // Wed
    month: "short", // Apr
    day: "2-digit", // 15
    year: "numeric", // 2026
  });

  let show = BtnCliData.length <= 0;
  console.log(show);

  return (
    <div>
      {show ? (
        <h1 className="flex justify-center my-10 text-3xl text-center font-bold">
          No call text or video history is available
        </h1>
      ) : (
        <div className="container m-auto my-10">
          <div className="text">
            <h1 className=" text-4xl font-bold pb-3">TimeLine</h1>
            <div className="dropdown">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 w-50 bg-green-500 text-white font-semibold  border-3 border-red-500"
                >
                  TimeLine ⬇️
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-green-300 text-black font-semibold rounded-box z-1 w-52 space-y-0 p-2 shadow-sm"
                >
                  <li onClick={() => DropDown("calls")}>
                    <a>Call</a>
                  </li>
                  <li onClick={() => DropDown("text")}>
                    <a>Text</a>
                  </li>
                  <li onClick={() => DropDown("video")}>
                    <a>Video</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {btrue
            ? BtnCliData.map((btn, index) => (
                <Timelinedata key={index} btn={btn} formatted={formatted} />
              ))
            : filterdata.map((btn, index) => (
                <Timelinedata key={index} btn={btn} formatted={formatted} />
              ))}
        </div>
      )}
    </div>
  );
}
