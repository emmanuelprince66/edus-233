import React from "react";
import eduIcon from "@/assets/icons/eduIcon.svg";
import settingIcon from "@/assets/icons/settingIcon.svg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import profileIcon from "@/assets/icons/profileIcon.png";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="p-1 rounded-full horizontal_layout bg-primary_blue_4">
          <SchoolOutlinedIcon className="text-white text-[20px]" />
        </span>

        <p className="font-bold text-1xl text-primary_blue_4 font-Orbitron ">
          EduManager
        </p>
      </div>

      <div className="flex flex-col items-start gap-2">
        <p className="font-bold text-1xl text-primary_blue_4">
          Welcome Peculiar Schools
        </p>
        <p className="font-normal text-[10px] text-primary_blue_4">
          15 Sep, 2023 | 6:00 pm
        </p>
      </div>

      <div>
        <Input
          type="text"
          placeholder="Search"
          icon={
            <SearchRoundedIcon
              sx={{ color: "grey", fontSize: "15px" }}
              aria-label="Search"
            />
          }
        />
      </div>

      <div className="horizontal_layout  gap-5">
        <span>
          <Image src={profileIcon} />
        </span>

        <div className="flex items-center text-primary_blue_4 gap-3 cursor-pointer">
          <div className=" flex flex-col items-start gap-2">
            <p className="text-bold text-primary_blue_4 text-[14px]">
              School Admin
            </p>
            <p className="text-normal  text-[10px]">Emmanuel Adam</p>
          </div>
          <KeyboardArrowDownRoundedIcon />
        </div>

        <SettingsOutlinedIcon />
        <NotificationsOutlinedIcon />
      </div>
    </div>
  );
};

export default Topbar;
