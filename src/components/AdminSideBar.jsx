import React from "react";
import Link from "next/link";
import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { usePathname } from "next/navigation";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Button } from "./ui/button";
import Image from "next/image";

const AdminSideBar = () => {
  const pathname = usePathname();
  const sidebar = [
    {
      id: 1,
      nm: "Dashboard",
      url: "/dashboard/admin-dash/admin",
      icn: <PentagonOutlinedIcon />,
    },
    {
      id: 2,
      nm: "Students",
      url: "/dashboard/admin-dash/students",
      icn: <ContactMailOutlinedIcon />,
    },
    {
      id: 3,
      nm: "Academics",
      url: "/dashboard/admin-dash/academics",
      icn: <MenuBookOutlinedIcon />,
    },
    {
      id: 4,
      nm: "Communication",
      url: "/dashboard/admin-dash/communication",
      icn: <QuestionAnswerOutlinedIcon />,
    },
    {
      id: 5,
      nm: "Invoicing",
      url: "/dashboard/admin-dash/invoicing",
      icn: <MenuBookOutlinedIcon />,
    },
    {
      id: 6,
      nm: "Library",
      url: "/dashboard/admin-dash/library",
      icn: <MenuBookOutlinedIcon />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {sidebar?.map((bar) => {
        const isActive = pathname.startsWith(bar?.url);
        return (
          <Link href={bar?.url} key={bar?.id} className="w-full">
            <Button
              variant={isActive ? "default" : "secondary"}
              size="sm"
              className="flex items-center gap-3 justify-between min-w-[95%]"
            >
              <div className="flex gap-2 items-center">
                {bar?.icn}
                <p className="text-[13px]">{bar?.nm}</p>
              </div>

              <KeyboardArrowDownRoundedIcon />
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSideBar;
