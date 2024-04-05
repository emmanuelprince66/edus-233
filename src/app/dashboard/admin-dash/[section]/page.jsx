"use client";

import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";
import DashboardLayout from "@/components/ui/DashboardLayout";
import { useRouter } from "next/navigation";
import AcademicsContent from "@/components/AdminCom/AcademicsContent";
import AdminContent from "@/components/AdminCom/AdminContent";
import CommunicationContent from "@/components/AdminCom/CommunicationContent";
import InvoicingContent from "@/components/AdminCom/InvoicingContent";
import LibraryContent from "@/components/AdminCom/LibraryContent";
import StudentContent from "@/components/AdminCom/StudentContent";
import Roles from "@/components/AdminCom/Roles";
import ListStaff from "@/components/AdminCom/ListStaff";

export default function AdminDashboard({ params }) {
  const { section } = params;

  let content;
  switch (section) {
    case "admin":
      content = <AdminContent />;
      break;
    case "academics":
      content = <AcademicsContent />;
      break;
    case "communication":
      content = <CommunicationContent />;
      break;
    case "invoicing":
      content = <InvoicingContent />;
      break;
    case "students":
      content = <StudentContent />;
      break;
    case "library":
      content = <LibraryContent />;
      break;
    case "roles":
      content = <Roles />;
      break;
    case "staff-list":
      content = <ListStaff />;
      break;
    // Handle other sections
    default:
      content = <p>Section not found</p>;
  }

  return (
    <DashboardLayout sidebar={<Sidebar />} topbar={<Topbar />}>
      <div className="p-5 flex items-start">{content}</div>
    </DashboardLayout>
  );
}
