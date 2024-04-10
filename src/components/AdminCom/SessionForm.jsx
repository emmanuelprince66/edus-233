"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

import { Input } from "../ui/input";

import DatePicker from "react-datepicker";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import "react-datepicker/dist/react-datepicker.css";

const SessionForm = ({ handleClose }) => {
  const [showSession, setshowSession] = useState(true);
  const [calenderDate, setCalenderDate] = useState(new Date());
  const [sessionStartDate, setSessionStartDate] = useState(new Date());
  const [sessionEndDate, setSessionEndDate] = useState(new Date());
  const [firstTermStartDate, setFirstTermStartDate] = useState(new Date());
  const [firstTermEndDate, setFirstTermEndDate] = useState(new Date());
  const [secondTermStartDate, setSecondTermStartDate] = useState(new Date());
  const [secondTermEndDate, setSecondTermEndDate] = useState(new Date());
  const [thirdTermStartDate, setThirdTermStartDate] = useState(new Date());
  const [thirdTermEndDate, setThirdTermEndDate] = useState(new Date());

  return (
    <div className="w-full flex flex-col items-start gap-2 max-h-[90vh] overflow-y-scroll">
      {/* <div className="flex gap-3 items-center my-3">
        <Button
          onClick={() => setshowSession(true)}
          className={`text-primary_blue_4 hover:bg-primary_blue-2 text-sm w-[100px] ${
            showSession
              ? "bg-primary_blue_2 border-b-[2px] border-primary_blue_4"
              : "bg-primary_blue_3"
          }`}
        >
          Session
        </Button>
        <Button
          onClick={() => setshowSession(false)}
          className={`text-primary_blue_4 hover:bg-primary_blue-2  text-sm w-[100px]  ${
            !showSession
              ? "bg-primary_blue_2 border-b-[2px] border-primary_blue_4"
              : "bg-primary_blue_3"
          }`}
        >
          Terms
        </Button>
      </div> */}

      <div className="flex justify-between">
        <p className="text-bolder text-[20px] ">Create Session</p>
      </div>
      <p className="text-gray-400 text-[10px]">Settings</p>
      <p className="text-gray-600 text-[10px]">Session Details</p>

      <form action="" className="w-full my-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="vertical_layout2 gap-2">
            <p className="text-gray-400 text-[10px]">Session Name</p>
            <Input type="text" placeholder="Enter Session Nae" />
          </div>
          <div className="vertical_layout2 gap-2 w-full ">
            <p className="text-gray-400 text-[10px]">Session Calender</p>

            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={calenderDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setCalenderDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Session Start Date</p>
            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={sessionStartDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setSessionStartDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Session End Date</p>
            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={sessionEndDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setSessionEndDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>

          <div className="col-span-2">
            <p className="text-bold text-sm">First Term</p>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Start Date</p>
            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={firstTermStartDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setFirstTermStartDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">End Date</p>
            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={firstTermEndDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setFirstTermEndDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-bold text-sm">Second Term</p>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Start Date</p>
            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={secondTermStartDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setSecondTermStartDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">End Date</p>
            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={secondTermEndDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setSecondTermEndDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-bold text-sm">Third Term</p>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Start Date</p>
            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={thirdTermStartDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setThirdTermStartDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">End Date</p>
            <div className=" p-3  rounded-sm border w-full border-gray-200  cursor-pointer flex justify-between items-center">
              <DatePicker
                selected={thirdTermEndDate}
                className="w-[48vh] cursor-pointer"
                onChange={(date) => setThirdTermEndDate(date)}
                dateFormat="dd/MM/yy"
              />

              <CalendarMonthRoundedIcon
                sx={{ color: "gray", fontSize: "15px", mr: "5px" }}
              />
            </div>
          </div>
          <div className=" col-span-2 my-3 ">
            <div className="flex max-w-[50%] mx-auto  gap-4">
              <Button
                variant="outline"
                className="border border-primary_blue_4"
                size="lg"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="default" size="lg">
                Update
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SessionForm;
