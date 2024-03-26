import React from "react";
import AdminSideBar from "../AdminSideBar";

const Sidebar = () => {
  return (
    <div className=" text-black border rounded-r-lg h-[88vh]  border-grey w-full p-2 ">
      <p className="items-start text-[10px] font-bold my-2 text-primary_blue_4">
        MAIN
      </p>
      {/* Side bar will be render based on the role of the  logged in user */}
      <AdminSideBar />
    </div>
  );
};

export default Sidebar;
