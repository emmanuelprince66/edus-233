import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import profile from "@/assets/images/profile.svg";
import { Input } from "../ui/input";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const EditStaffProfile = () => {
  const [calenderDate, setCalenderDate] = useState(null);
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="w-full p-3 max-h-[90vh] overflow-y-scroll">
      <form action="" className="vertical_layout">
        <Image src={profile} className="w-[80px] h-[80px]" />

        <div className="grid grid-cols-2 gap-2 w-full ">
          <p className="col-span-2 font-bold text-1xl my-4">
            Personal Information
          </p>

          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Full Name</p>
            <Input placeholder="Emmanuel Ochigbo" />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">
              Date Of Birth
            </p>
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
                        borderColor: "#e2e8f0", // Set the border color on focus here
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
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">
              Phone Number
            </p>
            <Input placeholder="08168465551" />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">
              Email Address
            </p>
            <Input placeholder="meloskyemmanuel@gmial.com" />
          </div>
          <div className="col-span-2 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Address</p>
            <Input type="textarea" placeholder="Futa north gate" />
          </div>

          <p className="col-span-2 font-bold text-1xl my-4">Work Information</p>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Staff ID</p>
            <Input placeholder="iD.." />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Description</p>
            <Input placeholder="description" />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">
              Qualification
            </p>
            <Input placeholder="Btech...." />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Start Date</p>
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
                        borderColor: "#e2e8f0", // Set the border color on focus here
                      },
                    },
                  }}
                  defaultValue={startDate}
                  disableFuture
                  onChange={setStartDate}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Class</p>
            <Input placeholder="Basic 3 A" />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Subject</p>
            <Input placeholder="English" />
          </div>
          <p className="col-span-2 font-bold text-1xl my-4">
            Next of Kin Information
          </p>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Full Name</p>
            <Input placeholder="John Jude" />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">
              Phone Number
            </p>
            <Input placeholder="0816677666" />
          </div>
          <div className="col-span-2 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Address</p>
            <Input type="textarea" placeholder="Futa south gate" />
          </div>

          <p className="col-span-2 font-bold text-1xl my-4">
            Salary Information
          </p>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Amount</p>
            <Input placeholder="500000" />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">
              Acount Number
            </p>
            <Input placeholder="06677666" />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">
              Account Name
            </p>
            <Input placeholder="John Jude" />
          </div>
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[10px] text-gray-400 font-normal">Bank Name</p>
            <Input placeholder="GT ACCESS" />
          </div>

          <div className=" col-span-2 mt-5 ">
            <div className=" max-w-[30%] mx-auto">
              <Button variant="default" size="lg">
                Edit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditStaffProfile;
