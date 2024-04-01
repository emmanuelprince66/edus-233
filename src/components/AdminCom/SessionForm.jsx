"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Input } from "../ui/input";

const SessionForm = ({ handleClose }) => {
  const [showSession, setshowSession] = useState(true);
  const [calenderDate, setCalenderDate] = useState(null);
  const [sessionStartDate, setSessionStartDate] = useState(null);
  const [sessionEndDate, setSessionEndDate] = useState(null);
  const [firstTermStartDate, setFirstTermStartDate] = useState(null);
  const [firstTermEndDate, setFirstTermEndDate] = useState(null);
  const [secondTermStartDate, setSecondTermStartDate] = useState(null);
  const [secondTermEndDate, setSecondTermEndDate] = useState(null);
  const [thirdTermStartDate, setThirdTermStartDate] = useState(null);
  const [thirdTermEndDate, setThirdTermEndDate] = useState(null);

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
            <Input type="text" placeholder="Enter Session Name" />
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Session Calender</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={calenderDate}
                  disableFuture
                  onChange={setCalenderDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Session Start Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={sessionStartDate}
                  disableFuture
                  onChange={setSessionStartDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Session End Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={sessionEndDate}
                  disableFuture
                  onChange={setSessionEndDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>

          <div className="col-span-2">
            <p className="text-bold text-sm">First Term</p>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Start Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={firstTermStartDate}
                  disableFuture
                  onChange={setFirstTermStartDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">End Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={firstTermEndDate}
                  disableFuture
                  onChange={setFirstTermEndDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className="col-span-2">
            <p className="text-bold text-sm">Second Term</p>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Start Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={secondTermStartDate}
                  disableFuture
                  onChange={setSecondTermStartDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">End Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={secondTermEndDate}
                  disableFuture
                  onChange={setSecondTermEndDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className="col-span-2">
            <p className="text-bold text-sm">Third Term</p>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">Start Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={thirdTermStartDate}
                  disableFuture
                  onChange={setThirdTermStartDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className="vertical_layout2 gap-2 w-full">
            <p className="text-gray-400 text-[10px]">End Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem sx={{ width: "100%" }}>
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: "Poppins",
                      maxHeight: "2.5rem",
                      "& fieldset": {
                        borderColor: "#e2e8f0", // Set the desired border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "#e2e8f0", // Set the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001358", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={thirdTermEndDate}
                  disableFuture
                  onChange={setThirdTermEndDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
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
