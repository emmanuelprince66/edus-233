import React from "react";
import { Input } from "../ui/input";
import { Button } from "./button";
import { Copyright } from "@mui/icons-material";
import Image from "next/image";
import linear from "@/assets/images/linear.svg";
import startIcon from "@/assets/icons/startIcon.svg";
import Link from "next/link";
export default function LoginForm({ role, img }) {
  return (
    <>
      <div className="horizontal_layout w-full h-screen bg-primary_blue_3">
        <div className="hidden sm:flex w-full h-full gap-0 relative overflow-y-hidden max-h-full ">
          <Image src={img} className="object-cover w-full h-full " />
          <div className="absolute top-0 left-0 w-full ">
            <Image src={linear} className="object-cover w-full h-full " />
          </div>
        </div>

        <div className="vertical_layout justify-between w-full h-full relative">
          <div className="vertical_layout  py-10 ">
            <div className=" max-h-[100px] max-w-[100px]">
              <Image src={startIcon} className="object-contain w-full h-full" />
            </div>
            <p className="text-3xl tracking-wide font-bold pt-3 pb-5">
              Peculiar Schools
            </p>
            <Link href="dashboard/admin-dash/admin" className="text-red-500">
              Admin Dash
            </Link>

            <div className="vertical_layout text-center ">
              <p className="text-1xl font-bold tracking-wider">
                Log in as {role === "Admin" ? "an" : "a"} {role}
              </p>
            </div>
          </div>

          {/* form fields */}
          <form
            action=""
            className=" w-[90%] sm:w-[70%]  flex flex-col gap-5 items-start mb-5 "
          >
            <div className="w-full flex flex-col gap-2 items-start ">
              <p className="text-sm font-bold w-full">{role}'s ID</p>
              <Input type="text" placeholder="Enter Email/Username" />
            </div>
            <div className="w-full flex flex-col gap-2 items-start mb-4">
              <div className="flex items-center justify-between w-full">
                <p className="text-start font-bold ">Password</p>
                <span
                  className="text-blue-500
           cursor-pointer ml-1 font-bold text-sm
           "
                >
                  forget password?
                </span>
              </div>
              <Input type="password" placeholder="Enter Password" />
            </div>
            <Button variant="default" size="lg">
              Login
            </Button>

            <div className="horizontal_layout w-full">
              <p className="text-sm font-bold  pt-1 pb-4">
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
          </form>

          {/* form fields ends */}

          <div className=" bg-primary_blue_4 w-full text-white  py-1 horizontal_layout gap-2 absolute bottom-0">
            <Copyright />
            <p className="font-bold ">Powered by Edu Manager | v1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
}
