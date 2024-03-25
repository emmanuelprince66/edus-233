import React from "react";

const DashboardLayout = ({ sidebar, topbar, children }) => {
  return (
    <div class="grid grid-cols-6 gap-0">
      <div class="col-start-1 col-span-6">
        <header>{topbar}</header>
      </div>

      <div
        className="col-start-1 col-span-1 h-[91.9vh]  
        first-letter:
     
      "
      >
        <aside>{sidebar}</aside>
      </div>
      <div className="col-start-2 col-span-6 h-[91.9vh] bg-primary_blue_5">
        <aside>{children}</aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
