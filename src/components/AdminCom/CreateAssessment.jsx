import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, MenuItem, Box } from "@mui/material";

const CreateAssessment = () => {
  return (
    <div className="w-full vertical_layout2">
      <div className="vertical_layout2 gap-1 my-3">
        <p className="text-gray-800 font-bold text-1xl"> Create Assessment</p>
        <p className="text-gray-300 text-[12px] ">Settings</p>
      </div>

      <div className=" w-full grid grid-cols-3 gap-3">
        <div className="vertical_layout2 gap-1">
          <p className="text-gray-500 text-[12px] ">Assessment Name</p>
          <Input placeholder="E.g Exam..." />
        </div>
        <div className="vertical_layout2 gap-1 ">
          <p className="text-gray-500 text-[12px] ">Assessment Percent</p>
          <div className="flex gap-0 items-center w-full">
            <Input placeholder="E.g 70" className="w-[170px] rounded-r-none" />
            <div className="p-[9.8px] w-[100%]  flex items-center justify-center border border-r-[2px]  text-gray-500 rounded-r-[5px]   ">
              %
            </div>
          </div>
        </div>

        <div className="vertical_layout2 gap-1">
          <p className="text-gray-500 text-[12px] ">Assessment Type</p>

          <Select
            className="edu"
            defaultValue=""
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
              <Box className="edu">Select Assessment Type</Box>
            </MenuItem>
            <MenuItem value="A" className="edu">
              Exam
            </MenuItem>
            <MenuItem value="B" className="edu">
              CA
            </MenuItem>
          </Select>
        </div>
      </div>

      {/* sub btn */}
      <div className=" w-full mt-5 ">
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
  );
};

export default CreateAssessment;
