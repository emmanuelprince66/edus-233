import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const SchoolInfoForm = ({ handleClose }) => {
  return (
    <div className="w-full flex-col items-start gap-2 ">
      <div className="flex justify-between" onClick={handleClose}>
        <p className="text-bolder text-[20px] ">School Information</p>

        <HighlightOffRoundedIcon className=" hover:text-primary_blue_4 text-gray-300 cursor-pointer " />
      </div>
      <p className="text-gray-400 text-[10px]">Settings</p>

      <form action="" className="mt-4">
        <div className="w-full grid grid-cols-2 gap-4 ">
          <div className=" col-span-2 ">
            <div className="flex items-center justify-between mb-1">
              <p className="text-gray-800 text-[10px]">School Name</p>
              <p className="text-gray-800 text-[10px]">Description</p>
            </div>
            <Input type="text" placeholder="innertext" />
          </div>

          <div className=" flex-col flex items-start gap-1">
            <div className="flex items-center justify-between w-full">
              <p className="text-gray-800 text-[10px]">Short Name</p>
              <p className="text-gray-800 text-[10px]">Description</p>
            </div>
            <Input type="text" placeholder="innertext" />
          </div>
          <div className="flex-col flex items-start gap-1">
            <div className="flex items-center justify-between w-full">
              <p className="text-gray-800 text-[10px]">Phone Number</p>
              <p className="text-gray-800 text-[10px]">Description</p>
            </div>

            <Input type="text" placeholder="innertext" />
          </div>
          <div className=" col-span-2 ">
            <div className="flex items-center justify-between mb-1">
              <p className="text-gray-800 text-[10px]">School Address</p>
              <p className="text-gray-800 text-[10px]">Description</p>
            </div>
            <Input type="text" placeholder="Type your message here" />
          </div>
          <div className=" flex-col flex items-start gap-1">
            <div className="flex items-center justify-between w-full">
              <p className="text-gray-800 text-[10px]">State/province</p>
              <p className="text-gray-800 text-[10px]">Description</p>
            </div>
            <Input type="text" placeholder="innertext" />
          </div>
          <div className="flex-col flex items-start gap-1">
            <div className="flex items-center justify-between w-full">
              <p className="text-gray-800 text-[10px]">School Webisite</p>
              <p className="text-gray-800 text-[10px]">Description</p>
            </div>

            <Input type="text" placeholder="innertext" />
          </div>
          <div className=" col-span-2 ">
            <div className="flex items-center justify-between mb-1">
              <p className="text-gray-800 text-[10px]">School Name</p>
              <p className="text-gray-800 text-[10px]">Description</p>
            </div>
            <Input type="text" placeholder="innertext" />
          </div>

          <div className=" col-span-2 ">
            <div className="flex max-w-[50%] mx-auto  gap-4">
              <Button
                variant="outline"
                className="border border-primary_blue_4"
                size="lg"
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

export default SchoolInfoForm;
