import React from "react";
import Link from "next/link";
import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { usePathname } from "next/navigation";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Button } from "./ui/button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import Collapse from "@mui/material/Collapse";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Open_Sans } from "next/font/google";

const AdminSideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
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

    {
      id: 7,
      nm: "Staff and Roles",
      url: "/dashboard/admin-dash/staff-list",
      url2: "/dashboard/admin-dash/roles",
      icn: <PeopleAltRoundedIcon />,
    },
    {
      id: 8,
      nm: "Knowledge Base",
      url: "/k-base",
      icn: <FeedbackRoundedIcon />,
    },
    {
      id: 9,
      nm: "Log Out",
      url: "/k-base",
      icn: <LogoutRoundedIcon />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {sidebar?.map((bar, index) => {
        const isActive = pathname.startsWith(bar?.url);

        if (index === 6) {
          return (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <Button
                variant={isActive ? "default" : "secondary"}
                size="sm"
                className="flex items-center gap-3 justify-between min-w-[95%]"
                onClick={handleClick}
              >
                <div className="flex gap-2 items-center">
                  {bar?.icn}
                  <p className="text-[13px]">{bar?.nm}</p>
                </div>
                {open ? <ExpandLess /> : <ExpandMore />}
              </Button>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link href={bar?.url}>
                    <span className="flex gap-2 ml-8 items-center mt-3 hover:text-primary_blue_4">
                      <AddRoundedIcon sx={{ fontSize: "14px" }} />
                      <p className="text-[13px]">Staff</p>
                    </span>
                  </Link>
                  <Link href={bar?.url2}>
                    <span className="flex gap-2 ml-8 items-center mt-3 hover:text-primary_blue_4">
                      <AddRoundedIcon sx={{ fontSize: "14px" }} />
                      <p className="text-[13px]">Custom Roles</p>
                    </span>
                  </Link>
                </List>
              </Collapse>

              <Divider variant="middle" sx={{ mt: "2rem" }} />
            </List>
          );
        }

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
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSideBar;
