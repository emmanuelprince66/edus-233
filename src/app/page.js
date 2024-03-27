"use client";

import Image from "next/image";
import homeImg from "../assets/images/home-img.png";
import startIcon from "../assets/icons/startIcon.svg";
import adminIcon from "../assets/icons/adminIcon.svg";
import studentIcon from "../assets/icons/studentIcon.svg";
import teacherIcon from "../assets/icons/teacherIcon.svg";
import parentIcon from "../assets/icons/parentIcon.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Copyright } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import linear from "../assets/images/linear.svg";

const buttons = [
  {
    id: 1,
    url: "/admin",
    text: "Log in as a School Admin",
    icn: adminIcon,
  },
  {
    id: 2,
    url: "/teacher",
    text: "Log in as a Teacher",
    icn: teacherIcon,
  },
  {
    id: 3,
    url: "/parent",
    text: "Log in as a Parent",
    icn: parentIcon,
  },
  {
    id: 4,
    url: "/student",
    text: "Log in as a Student",
    icn: studentIcon,
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <div className=" horizontal_layout w-full h-screen  bg-primary_blue_3">
      <div className="hidden sm:flex w-full h-full gap-0 relative overflow-y-hidden max-h-full">
        <Image src={homeImg} />
        <div className="absolute top-0 left-0 ">
          <Image src={linear} />
        </div>
      </div>
      <div className="w-full h-full vertical_layout justify-between">
        <div className="vertical_layout  w-full h-full ">
          <div className=" max-h-[100px] max-w-[100px]">
            <Image src={startIcon} className="object-contain w-full h-full" />
          </div>
          <p className="text-3xl tracking-wide font-bold pt-3 pb-5">
            Peculiar Schools
          </p>

          <div className="vertical_layout text-center pb-4">
            <h4 className="text-2xl font-bold tracking-wider mt- mt-2">
              Welcome
            </h4>
            <p className="font-semibold tracking-wide  text-base my-3">
              Welcome to Peculiar schools’ management <br />
              system powered by Academiah
            </p>
          </div>
          {/* buttons */}
          <div className="gap-4 w-full vertical_layout max-w-[80%] ">
            {buttons?.map((btn) => {
              return (
                <Link key={btn?.id} href={btn?.url} className="w-full">
                  <Button variant="default" size="lg" key={btn?.id}>
                    <span className="flex gap-3 items-center">
                      <Image src={btn?.icn} className="w-[24px] h-[24px]" />
                      <p className="text-sm sm:text-lg ">{btn?.text}</p>
                    </span>
                  </Button>
                </Link>
              );
            })}

            <p className="text-sm font-bold items-center pt-1 pb-4">
              Need help? Contact Us{" "}
              <span
                className="text-blue-500
           cursor-pointer ml-1
           "
              >
                here
              </span>
            </p>
          </div>
        </div>

        <div className=" bg-primary_blue_4 w-full text-white  py-1 horizontal_layout gap-2">
          <Copyright />
          <p className="font-bold ">Powered by Edu Manager | v1.0.0</p>
        </div>
      </div>
    </div>
  );
}
