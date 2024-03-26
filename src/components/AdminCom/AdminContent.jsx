"use client";

import { useState } from "react";
import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Divider } from "@mui/material";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import { Button } from "../ui/button";
const AdminContent = () => {
  return (
    <div className="rounded-lg flex flex-col items-start gap-4 bg-white w-full">
      <div className="bg-primary_blue_4 rounded-lg p-3 w-full">
        <div className="flex justify-between items-center pb-4">
          <p className="text-bold text-1xl text-white">Basic Account Set Up</p>
          <KeyboardArrowDownRoundedIcon className="text-white" />
        </div>

        <Divider sx={{ background: "lightgrey" }} />

        <div className="flex justify-between items-center">
          <form action="" className="bg-white" encType="form/multipart">
            <label htmlFor="">
              <input type="file" className="sr-only" />
              Add School Logo
            </label>
          </form>

          <div className="flex flex-col items-end gap-3 mt-3">
            <p className="text-white text-bold mb-2">Welcome To Edu Manger</p>

            <p className="flex items-center gap-1 text-white text-[10px]">
              <span>
                <ErrorOutlinedIcon className="text-white text-[13px]" />
              </span>
              Your Account Setup is not complete Yet, Kindly ensure you complete
              the Set up one step at a time
            </p>

            <Button variant="ghost" className="text-[10px] mt-3 rounded-[5px]">
              Onboarding | 30% Complete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
