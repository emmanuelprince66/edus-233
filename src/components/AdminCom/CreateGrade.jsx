import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, MenuItem, Box } from "@mui/material";

import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const CreateGrade = () => {
  return (
    <div className="w-full vertical_layout2 ">
      <div className="flex justify-between items-center">
        <div className="vertical_layout2 gap-1 mb-3">
          <p className="text-gray-800 font-bold text-1xl"> Grading </p>
          <p className="text-gray-300 text-[12px] ">Settings</p>
        </div>
      </div>

      {/* we need to discuss for the assessment , grade name , status */}

      <div className=" grid grid-cols-2 gap-3 my-4 max-h-[70vh] overflow-y-scroll">
        <div className="vertical_layout2 gap-1  col-span-2">
          <p className="text-gray-700 text-[12px] ">Grade Name</p>
          <Input
            placeholder="E.g Primary.."
            className="w-[250px] rounded-r-none"
          />
        </div>
        <div className="vertical_layout2 gap-1 col-span-2">
          <p className="text-gray-700 text-[12px] ">Assessment Type</p>
          <Select
            sx={{
              width: "100%",
              height: "40px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#001358",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#001358",
              },
            }}
            displayEmpty
          >
            <MenuItem value="" disabled>
              <Box className="edu text-[10px]">Select Assessment</Box>
            </MenuItem>
            <MenuItem value="A" className="edu">
              Playgroup Assessment
            </MenuItem>
            <MenuItem value="B" className="edu">
              Nursery Assessment
            </MenuItem>
          </Select>
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade A</p>
          <div className="flex gap-0  items-center">
            <Input placeholder="A" className="rounded-r-none w-full" disabled />
            <Input className="w-full rounded-none " placeholder="From" />
            <Input className="w-full rounded-none " placeholder="To" />
          </div>
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade Remark</p>
          <Input className="w-full  " type="text" placeholder="E.g Excellent" />
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade B</p>
          <div className="flex gap-0  items-center">
            <Input placeholder="B" className="rounded-r-none w-full" disabled />
            <Input className="w-full rounded-none " placeholder="From" />
            <Input className="w-full rounded-none " placeholder="To" />
          </div>
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade Remark</p>
          <Input className="w-full  " type="text" placeholder="E.g Very Good" />
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade C</p>
          <div className="flex gap-0  items-center">
            <Input placeholder="C" className="rounded-r-none w-full" disabled />
            <Input className="w-full rounded-none " placeholder="From" />
            <Input className="w-full rounded-none " placeholder="To" />
          </div>
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade Remark</p>

          <Input className="w-full  " type="text" placeholder=" Good" />
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade D</p>
          <div className="flex gap-0  items-center">
            <Input placeholder="D" className="rounded-r-none w-full" disabled />
            <Input className="w-full rounded-none " placeholder="From" />
            <Input className="w-full rounded-none " placeholder="To" />
          </div>
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade Remark</p>

          <Input className="w-full  " type="text" placeholder="E.g Poor" />
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade E</p>
          <div className="flex gap-0  items-center">
            <Input placeholder="E" className="rounded-r-none w-full" disabled />
            <Input className="w-full rounded-none " placeholder="From" />
            <Input className="w-full rounded-none " placeholder="To" />
          </div>
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade Remark</p>

          <Input className="w-full  " type="text" placeholder="E.g Very Poor" />
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade F</p>
          <div className="flex gap-0  items-center">
            <Input placeholder="F" className="rounded-r-none w-full" disabled />
            <Input className="w-full rounded-none " placeholder="From" />
            <Input className="w-full rounded-none " placeholder="To" />
          </div>
        </div>
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-700 text-[12px] ">Grade Remark</p>
          <Input className="w-full  " type="text" placeholder="E.g Fail" />
        </div>

        {/* sub btn */}
        <div className=" w-full mt-5 col-span-2">
          <div className="flex max-w-[50%] mx-auto  gap-4">
            <Button
              variant="outline"
              className="border border-primary_blue_4"
              size="lg"
              // onClick={handleClose}
            >
              Cancel
            </Button>
            <Button variant="default" size="lg">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGrade;
