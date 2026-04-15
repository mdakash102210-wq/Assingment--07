import React from "react";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime, IoMdTimer } from "react-icons/io";
import { NavLink } from "react-router";

export default function Nav() {
  return (
    <div className="shadow">
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center py-2 my-2 container m-auto ">
        <div className="first">
          <h1 className="font-bold text-2xl">
            Keen <span className="font-semibold">Keeper</span>
          </h1>
        </div>
        <div className="end">
          <ul className="flex gap-5">
            <li className=" ">
              <NavLink to={"/"} className="flex gap-2 items-center btn  ">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className=" ">
              <NavLink
                to={"timeline"}
                className="flex gap-2 items-center btn  "
              >
                <IoMdTimer />
                Timeline
              </NavLink>
            </li>
            <li className=" ">
              <NavLink to={"stats"} className="flex gap-2 items-center btn  ">
                <ImStatsDots />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
