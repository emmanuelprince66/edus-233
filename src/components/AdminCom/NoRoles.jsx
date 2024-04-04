"use client";

import React from "react";
import { Button } from "../ui/button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import Image from "next/image";
import noSession from "@/assets/images/noSession.svg";

const NoRoles = ({ handleOpen }) => {
  return (
    <div className="w-full h-full bg-white min-h-[80vh] p-4">
      <div className="flex justify-between items-center">
        <p className=" text-2xl text-bold">Custom Roles</p>

        <Button
          onClick={handleOpen}
          variant="default"
          className="flex gap-2 items-center w-[20%] text-sm"
        >
          <AddRoundedIcon />
          Create
        </Button>
      </div>

      <div className="w-full flex justify-center items-center mt-5">
        <div className="vertical_layout gap-4 w-[40%]">
          <Image src={noSession} alt="no-session" />

          <p className="text-sm text-gray-400">There are no session</p>

          <Button
            onClick={handleOpen}
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

export default NoRoles;
