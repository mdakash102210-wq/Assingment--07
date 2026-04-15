import React from "react";
import { FcVideoCall } from "react-icons/fc";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdPhoneCallback } from "react-icons/md";

export default function Timelinedata({ btn, formatted }) {
  return (
    <div>
      <div className="trajesion border flex items-center p-5 rounded  gap-5 font-semibold my-5">
        <div className="img text-3xl">
          {btn.value == "calls" ? (
            <MdPhoneCallback />
          ) : btn.value == "text" ? (
            <IoDocumentTextOutline />
          ) : (
            <FcVideoCall />
          )}
        </div>
        <div className="text">
          <h1>
            <span className="text-xl font-bold">{btn.value}</span> With{" "}
            <span>{btn.name}</span>
          </h1>
          <p>{formatted}</p>
        </div>
      </div>
    </div>
  );
}
