import React from "react";
import { useState } from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Button } from "../ui/button";

import ShowGradeData from "./ShowGradeData";
import Assesment from "./Assesment";

const GradeListing = ({ handleClose }) => {
  const [showGrade, setShowGrade] = useState(true);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center my-3">
          <Button
            onClick={() => setShowGrade(true)}
            className={`text-primary_blue_4 hover:bg-primary_blue-2 text-sm w-[100px] ${
              showGrade
                ? "bg-primary_blue_2 border-b-[2px] border-primary_blue_4"
                : "bg-primary_blue_3"
            }`}
          >
            Grading
          </Button>
          <Button
            onClick={() => setShowGrade(false)}
            className={`text-primary_blue_4 hover:bg-primary_blue-2  text-sm w-[100px]  ${
              !showGrade
                ? "bg-primary_blue_2 border-b-[2px] border-primary_blue_4"
                : "bg-primary_blue_3"
            }`}
          >
            Assesment
          </Button>
        </div>

        <HighlightOffRoundedIcon
          onClick={handleClose}
          className=" hover:text-primary_blue_4 text-gray-300 cursor-pointer "
        />
      </div>
      {showGrade ? <ShowGradeData /> : <Assesment />}
    </div>
  );
};

export default GradeListing;
