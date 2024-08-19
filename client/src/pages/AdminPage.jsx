import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function AdminPage() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <Main />
    </div>
  );
}

export default AdminPage;
