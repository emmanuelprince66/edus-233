import React from "react";
import { Button } from "../ui/button";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Switch } from "@mui/material";

const AddSchoolLevels = ({ handleClose }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between" onClick={handleClose}>
        <p className="text-bolder text-[20px] ">School Levels</p>

        <HighlightOffRoundedIcon className=" hover:text-primary_blue_4 text-gray-300 cursor-pointer " />
      </div>
      <p className="text-gray-400 text-[10px]">Settings</p>

      {/* content */}
      {/* content end */}

      <div className="vertical_layout gap-4 ">
        <div className="w-full flex justify-between items-center mt-4">
          <div className="flex gap-1 items-center">
            <Switch
              defaultChecked
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#001358",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                  },
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#001358",
                },
              }}
            />
            <p className=" text-gray-600 text-1xl">Nursery/Reception</p>
          </div>
          <div className="flex gap-1 items-center">
            <Switch
              defaultChecked
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#001358",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                  },
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#001358",
                },
              }}
            />
            <p className=" text-gray-600 text-1xl">Primary</p>
          </div>
          <div className="flex gap-1 items-center">
            <Switch
              defaultChecked
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#001358",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                  },
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#001358",
                },
              }}
            />
            <p className=" text-gray-600 text-1xl">Junior</p>
          </div>
          <div className="flex gap-1 items-center">
            <Switch
              defaultChecked
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#001358",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                  },
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#001358",
                },
              }}
            />
            <p className=" text-gray-600 text-1xl">Secondary</p>
          </div>
        </div>

        <div className="flex w-[60%] gap-3 mx-auto">
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
  );
};

export default AddSchoolLevels;
