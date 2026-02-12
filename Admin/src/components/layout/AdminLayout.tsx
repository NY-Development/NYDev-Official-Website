import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1623] text-slate-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {isSidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation"
        />
      )}
      <div className="flex flex-col min-h-screen lg:ml-64">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 px-5 py-6 sm:px-6 lg:px-10 bg-[#0f1623]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
