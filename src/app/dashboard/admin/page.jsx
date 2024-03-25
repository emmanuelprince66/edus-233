import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";
import DashboardLayout from "@/components/ui/DashboardLayout";
export default function AdminDashboard() {
  return (
    <DashboardLayout sidebar={<Sidebar />} topbar={<Topbar />}>
      <div className="p-4">Welcome Admin</div>
    </DashboardLayout>
  );
}
