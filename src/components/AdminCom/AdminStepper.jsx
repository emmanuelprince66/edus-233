"use client";

import React from "react";
import { useState } from "react";
import Stepper from "./Stepper";
import { Button } from "../ui/button";
const AdminStepper = ({ closeSchoolInfoModal, setSchoolInfoModal }) => {
  const [btnStatus, setBtnStatus] = useState(false);

  return (
    <div className="flex justify-between w-full h-full">
      <Stepper btnStatus={btnStatus} />

      {/* form buttons */}
      <div className="flex flex-col gap-[2rem] w-[80%]">
        <div
          className={`items-center  justify-between flex p-2 rounded-sm ${
            btnStatus
              ? "  bg-primary_blue_2 border-none "
              : " bg-white border border-gray-100 "
          }   `}
        >
          <div className="flex flex-col items-start gap-2">
            <p className="text-[12px]">School Profile</p>
            <p className="text-[15px] text-bold">Update School Info</p>
          </div>

          <div>
            <Button
              onClick={() => setSchoolInfoModal(true)}
              variant={btnStatus ? "default" : "outline"}
              className="w-[8rem]"
            >
              {btnStatus ? "Edit" : "Add"}
            </Button>
          </div>
        </div>
        {/*  */}
        <div
          className={`items-center  justify-between flex p-2 rounded-sm ${
            btnStatus
              ? "  bg-primary_blue_2 border-none "
              : " bg-white border border-gray-100 "
          }   `}
        >
          <div className="flex flex-col items-start gap-2">
            <p className="text-[12px]">Academic Session/Term</p>
            <p className="text-[15px] text-bold">Add active Session and Term</p>
          </div>

          <div>
            <Button
              variant={btnStatus ? "default" : "outline"}
              className="w-[8rem]"
            >
              {btnStatus ? "Edit" : "Add"}
            </Button>
          </div>
        </div>
        {/*  */}
        <div
          className={`items-center  justify-between flex p-2 rounded-sm ${
            btnStatus
              ? "  bg-primary_blue_2 border-none "
              : " bg-white border border-gray-100 "
          }   `}
        >
          <div className="flex flex-col items-start gap-2">
            <p className="text-[12px]">School Level</p>
            <p className="text-[15px] text-bold">Add School Levels</p>
          </div>

          <div>
            <Button
              variant={btnStatus ? "default" : "outline"}
              className="w-[8rem]"
            >
              {btnStatus ? "Edit" : "Add"}
            </Button>
          </div>
        </div>
        {/*  */}
        <div
          className={`items-center  justify-between flex p-2 rounded-sm ${
            btnStatus
              ? "  bg-primary_blue_2 border-none "
              : " bg-white border border-gray-100 "
          }   `}
        >
          <div className="flex flex-col items-start gap-2">
            <p className="text-[12px]">Grade</p>
            <p className="text-[15px] text-bold">Set Grade Level</p>
          </div>

          <div>
            <Button
              variant={btnStatus ? "default" : "outline"}
              className="w-[8rem]"
            >
              {btnStatus ? "Edit" : "Add"}
            </Button>
          </div>
        </div>
        {/*  */}
        <div
          className={`items-center  justify-between flex p-2 rounded-sm ${
            btnStatus
              ? "  bg-primary_blue_2 border-none "
              : " bg-white border border-gray-100 "
          }   `}
        >
          <div className="flex flex-col items-start gap-2">
            <p className="text-[12px]">Academic Session /Term</p>
            <p className="text-[15px] text-bold">Add active Session and Term</p>
          </div>

          <div>
            <Button
              variant={btnStatus ? "default" : "outline"}
              className="w-[8rem]"
            >
              {btnStatus ? "Edit" : "Add"}
            </Button>
          </div>
        </div>
        {/*  */}
      </div>
      {/* form button end */}
    </div>
  );
};

export default AdminStepper;
