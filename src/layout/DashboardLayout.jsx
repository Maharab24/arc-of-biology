import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import Footer from '../components/Footer';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <DashboardNavbar />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;