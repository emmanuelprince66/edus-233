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
      <p classNamae="text-gray-400 text-[10px]">Settings</p>

      <form action="" className="mt-4">
        <div className="w-full grid grid-cols-2 gap-4 ">
          <div className=" col-span-2 ">
            <p className="text-gray-800 text-[10px] mb-1">School Name</p>
            <Input type="text" placeholder="innertext" />
          </div>

          <div className=" flex-col flex items-start gap-1">
            <p className="text-gray-800 text-[10px] mb-1">Short Name</p>
            <Input type="text" placeholder="innertext" />
          </div>
          <div className="flex-col flex items-start gap-1">
            <p className="text-gray-800 text-[10px] mb-1">Phone Number</p>

            <Input type="text" placeholder="innertext" />
          </div>
          <div className=" col-span-2 ">
            <p className="text-gray-800 text-[10px] mb-1">School Address</p>
            <Input type="text" placeholder="Type your message here" />
          </div>
          <div className=" flex-col flex items-start gap-1">
            <p className="text-gray-800 text-[10px] mb-1">State/province</p>
            <Input type="text" placeholder="innertext" />
          </div>
          <div className="flex-col flex items-start gap-1">
            <p className="text-gray-800 text-[10px] mb-1">Country</p>

            <Input type="text" placeholder="innertext" />
          </div>
          <div className=" col-span-2 ">
            <p className="text-gray-800 text-[10px] mb-1">School Website</p>
            <Input type="text" placeholder="innertext" />
          </div>

          <div className=" col-span-2 ">
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

export default SchoolInfoForm;
