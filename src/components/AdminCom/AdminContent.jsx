"use client";

import { useState } from "react";
import React from "react";
import { Box, Modal } from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Divider } from "@mui/material";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import imageUploadIcon from "@/assets/images/imgUploadIcon.png";
import { Button } from "../ui/button";
import AdminStepper from "./AdminStepper";
import SchoolInfoForm from "./SchoolInfoForm";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
const AdminContent = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "745px",
    bgcolor: "background.paper",
    p: 3,
  };
  const [schoolInfoModal, setSchoolInfoModal] = useState(false);
  const closeSchoolInfoModal = () => setSchoolInfoModal(false);

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
          closeSchoolInfoModal={closeSchoolInfoModal}
        />
      </div>

      {/* admin content modal */}

      {/* school info modal start */}
      <div className="w-full">
        <Modal
          open={schoolInfoModal}
          onClose={closeSchoolInfoModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{
            sx: {
              border: "none", // Remove the border
              boxShadow: "none", // Remove the box shadow
            },
          }}
        >
          <Box sx={style}>
            <div
              className="flex justify-between"
              onClick={closeSchoolInfoModal}
            >
              <p className="text-bolder text-[20px] ">School Information</p>

              <HighlightOffRoundedIcon className=" hover:text-primary_blue_4 text-gray-300 cursor-pointer " />
            </div>
            <SchoolInfoForm
              setSchoolInfoModal={setSchoolInfoModal}
              schoolInfoModal={schoolInfoModal}
            />
          </Box>
        </Modal>
      </div>

      {/* school info modal ends */}
    </div>
  );
};

export default AdminContent;
