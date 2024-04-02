import React from "react";
import { Button } from "../ui/button";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const CreateGrade = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="vertical_layout2 gap-1 mb-3">
          <p className="text-gray-800 font-bold text-1xl"> Grading </p>
          <p className="text-gray-300 text-[12px] ">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default CreateGrade;
