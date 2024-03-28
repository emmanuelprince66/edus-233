"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Divider } from "@mui/material";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import imageUploadIcon from "@/assets/images/imgUploadIcon.png";
import { Button } from "../ui/button";
import AdminStepper from "./AdminStepper";
import SchoolInfoForm from "./SchoolInfoForm";
import ModalComponent from "../ui/ModalComponent";
import SchoolSession from "./SchoolSession";
const AdminContent = () => {
  const [schoolInfoModal, setSchoolInfoModal] = useState(false);
  const [schoolSessionModal, setSchoolSessionModal] = useState(false);
  const closeSchoolInfoModal = () => setSchoolInfoModal(false);
  const closeSchoolSessionModal = () => setSchoolSessionModal(false);

  return (
    <div className="rounded-lg flex flex-col items-start gap-4 bg-white w-full">
      <div className="bg-primary_blue_4 rounded-t-lg p-3 w-full">
        <div className="flex justify-between items-center pb-4">
          <p className="text-bold text-1xl text-white">Basic Account Set Up</p>
          <KeyboardArrowDownRoundedIcon className="text-white" />
        </div>

        <Divider sx={{ background: "lightgrey" }} />

        <div className="flex justify-between items-center">
          <form action="" encType="form/multipart">
            <div className="cursor-pointer flex flex-col items-center">
              <Image src={imageUploadIcon} className="w-20 h-20" />
              <input type="file" className="sr-only" />
              <p className="text-white my-1 font-1xl">Add School Icon</p>
            </div>
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

      <div className="w-full p-2 ">
        <AdminStepper
          setSchoolInfoModal={setSchoolInfoModal}
          setSchoolSessionModal={setSchoolSessionModal}
        />
      </div>

      {/* admin content modal */}

      {/* school info modal start */}
      <div className="w-full">
        <ModalComponent open={schoolInfoModal} close={closeSchoolInfoModal}>
          <SchoolInfoForm handleClose={closeSchoolInfoModal} />
        </ModalComponent>
      </div>

      {/* school info modal ends */}

      {/* session  & term starts */}
      <div className="w-full">
        <ModalComponent
          open={schoolSessionModal}
          close={closeSchoolSessionModal}
        >
          <SchoolSession handleClose={closeSchoolSessionModal} />
        </ModalComponent>
      </div>

      {/* session  & term ends */}
    </div>
  );
};

export default AdminContent;
