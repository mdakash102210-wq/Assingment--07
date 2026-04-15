import React, { useContext } from "react";
import { useParams } from "react-router";
import UsedataHook from "./UsedataHook";
import { IoIosAlarm, IoMdAlarm } from "react-icons/io";
import { FaArchive, FaVideo } from "react-icons/fa";
import { MdDeleteSweep, MdOutlineDeleteSweep } from "react-icons/md";
import { ClockLoader } from "react-spinners";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsChatSquareTextFill } from "react-icons/bs";
import { UseContext } from "./UseContext";
import { toast } from "react-toastify";

export default function Detles() {
  let call = "calls";
  let text = "text";
  let video = "video";
  let { loader, OutData } = UsedataHook();
  let { id } = useParams();
  let expectdedData = OutData.find((data) => data.id == id);

  let { BtnCliData, setBtnCliData } = useContext(UseContext);

  function HendelBtn(ass, { expectdedData }) {
    const xData = { ...expectdedData };
    xData.value = ass;
    // console.log(name, expectdedData);
    let newarray = [...BtnCliData, xData];
    setBtnCliData(newarray);
    toast(`${expectdedData.name} is ${ass} `);
  }

  return loader ? (
    <div className="flex justify-center items-center h-[30vh]">
      <ClockLoader />
    </div>
  ) : (
    <div className=" container m-auto flex flex-col md:flex-row gap-5 items-center my-10">
      <div className="first flex-1 w-[100%]">
        <div className="p-3 border-2 border-sky-200 rounded-xl">
          <div className="img">
            <img
              className="h-20 m-auto rounded-full mb-1"
              src={expectdedData.picture}
              alt=""
              srcset=""
            />
          </div>
          <div className="text text-center space-y-1">
            <h1 className="font-bold text-xl">{expectdedData.name}</h1>
            <p className="font-semibold text-gray-500">
              {expectdedData.days_since_contact}d ago
            </p>
            <div>
              <p
                className={` ${expectdedData.status == "almost due" ? "bg-[#EFAD44]" : expectdedData.status == "on-track" ? "bg-[#244D3F]" : "bg-[#EF4444]"} text-white py-1 px-3 rounded capitalize font-semibold inline-block`}
              >
                {expectdedData.status}
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              {expectdedData.tags.map((tag, index) => (
                <p
                  key={index}
                  className="bg-green-100 text-green-500 py-1 px-3 rounded capitalize font-semibold line-clamp-1"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-2 my-4">
          <div className="snooze p-4 rounded-2xl shadow border-2 border-gray-300 flex gap-3 items-center justify-center font-bold">
            <IoIosAlarm />
            <h1>Snooze 2 weeks</h1>
          </div>
          <div className="snooze p-4 rounded-2xl border-2 border-gray-300 flex gap-3 items-center justify-center font-bold">
            <FaArchive />
            <h1>Archive</h1>
          </div>
          <div className="snooze p-4 rounded-2xl border-2 border-gray-300 flex gap-3 items-center justify-center font-bold text-red-500">
            <MdOutlineDeleteSweep />
            <h1>delete</h1>
          </div>
        </div>
      </div>
      <div className="end   flex-2">
        <div className="cardContainer grid-cols-3 grid gap-5">
          <div className="content border-2 border-gray-300 rounded-xl py-5 px-8 text-center">
            <h1 className="text-2xl font-bold">
              {expectdedData.days_since_contact}{" "}
            </h1>
            <p className="text-gray-500 font-semibold">Days Since Contact</p>
          </div>
          <div className="content border-2 border-gray-300 rounded-xl py-5 px-8 text-center">
            <h1 className="text-2xl font-bold">{expectdedData.goal} </h1>
            <p className="text-gray-500 font-semibold">Goal (days)</p>
          </div>
          <div className="content border-2 border-gray-300 rounded-xl py-5 px-8 text-center">
            <h1 className="text-2xl font-bold">
              {expectdedData.next_due_date}
            </h1>
            <p className="text-gray-500 font-semibold">Next Due</p>
          </div>
        </div>
        <div className="edit border-2 border-gray-300 my-5 rounded-2xl p-5 flex justify-between">
          <div className="text  space-y-2">
            <h1 className="font-bold text-2xl">Relationship Goal</h1>
            <p className="font-semibold">
              Connect every:{" "}
              <span className="font-bold">{expectdedData.goal} days</span>
            </p>
          </div>
          <div>
            <button className="btn">Edit</button>
          </div>
        </div>

        <div className="border-2 border-gray-300  rounded-2xl p-5">
          <h1 className="font-bold text-2xl my-5">Quick Check -In</h1>

          <div className="cardContainer grid-cols-3 grid gap-5">
            <div
              className="content bg-gray-200 rounded-xl py-5 px-8 text-center space-y-2 cursor-pointer"
              onClick={() => HendelBtn(call, { expectdedData })}
            >
              <h1 className="text-2xl font-bold flex flex-col items-center">
                <BiSolidPhoneCall />
              </h1>
              <p className="text-gray-500 font-semibold">Call</p>
            </div>
            <div
              className="content bg-gray-200 rounded-xl py-5 px-8 text-center space-y-2 cursor-pointer"
              onClick={() => HendelBtn(text, { expectdedData })}
            >
              <h1 className="text-2xl font-bold flex flex-col items-center">
                <BsChatSquareTextFill />
              </h1>
              <p className="text-gray-500 font-semibold">Text</p>
            </div>
            <div
              className="content bg-gray-200 rounded-xl py-5 px-8 text-center space-y-2 cursor-pointer"
              onClick={() => HendelBtn(video, { expectdedData })}
            >
              <h1 className="text-2xl font-bold flex flex-col items-center">
                <FaVideo />
              </h1>
              <p className="text-gray-500 font-semibold">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
