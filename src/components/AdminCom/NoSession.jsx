"use client";

import React from "react";
import { Button } from "../ui/button";
import noSession from "@/assets/images/noSession.svg";
import Image from "next/image";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const NoSession = ({ setShowCreateSessionForm, handleClose }) => {
  const handleShowCreateSession = () => {
    setShowCreateSessionForm((prev) => !prev);
  };
  return (
    <div className="w-full h-full ">
      <div className="flex justify-between" onClick={handleClose}>
        <p className="text-bolder text-[20px] ">School Session</p>

        <HighlightOffRoundedIcon className=" hover:text-primary_blue_4 text-gray-300 cursor-pointer " />
      </div>
      <p className="text-gray-400 text-[10px]">Settings</p>

      <div className="w-full flex justify-center items-center">
        <div className="vertical_layout gap-4 w-[40%]">
          <Image src={noSession} alt="no-session" />

          <p className="text-sm text-gray-400">There are no session</p>

          <Button
            onClick={handleShowCreateSession}
            variant="default"
            className="flex gap-2 items-center w-full text-sm"
          >
            <AddRoundedIcon />
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoSession;
