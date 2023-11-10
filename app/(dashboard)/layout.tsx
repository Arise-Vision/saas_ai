import React from "react";

import Navbar from "@/components/navbar";
import  Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode} ) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-800">
        <Sidebar />
      </div>
      <div className="h-full md:ml-72 bg-gray-100">
        <Navbar />
        {children}
      </div>
    </div>
  )
};

export default DashboardLayout;