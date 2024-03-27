import React from "react";

const DashboardLayout = ({ sidebar, topbar, children }) => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-6 gap-0">
        <div className="col-start-1 col-span-6">
          <header>{topbar}</header>
        </div>

        <div
          className="col-start-1 col-span-1 h-full 
        first-letter:
     
      "
        >
          <aside>{sidebar}</aside>
        </div>
        <div className="col-start-2 col-span-6 bg-primary_blue_5">
          <aside>{children}</aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
