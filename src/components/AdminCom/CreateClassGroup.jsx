"use client";

import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox, Select, MenuItem, Box } from "@mui/material";

const CreateClassGroup = ({ handleShowCreateClassGroup }) => {
  const [showSubGroup, setShowSubGroup] = useState(false);
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1 vertical_layout2 gap-1">
          <p className="text-[12px] text-gray-500">
            Group's Name<sup>*</sup>
          </p>
          <Input type="text" placeholder="Inner text" />
        </div>
        <div className="col-span-1 ">
          <div className="col-span-1 vertical_layout2 gap-1">
            <p className="text-[12px] text-gray-500">Description</p>
            <Input type="text" placeholder="Inner text" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex gap-2 items-center">
            <Checkbox
              value={showSubGroup}
              onChange={() => setShowSubGroup((prev) => !prev)}
              sx={{
                width: "32px",
                height: "32px",
                color: "#001358",
                "&.Mui-checked": {
                  color: "#001358",
                },
              }}
            />
            <p>Add Sub Group</p>
          </div>
        </div>
        {showSubGroup && (
          <div className="col-span-2 vertical_layout2 gap-1 mb-3 ">
            <p className="text-[12px] text-gray-500">Select Base Group</p>

            <Select
              className="edu"
              sx={{
                width: "100%",
                height: "50px",
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
                <Box className="edu">Select gender</Box>
              </MenuItem>
              <MenuItem value="A" className="edu">
                A
              </MenuItem>
              <MenuItem value="B" className="edu">
                C
              </MenuItem>
            </Select>
          </div>
        )}
      </div>

      {/* btn */}
      <div className="w-full flex justify-end">
        <Button
          // onClick={handleShowCreateSessionForm}
          variant="default"
          className="flex gap-2 items-center w-full max-w-[30%] text-sm"
        >
          <AddRoundedIcon />
          Assign Class
        </Button>
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
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateClassGroup;
