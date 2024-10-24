import React, { useState } from 'react';
import { FaUserCircle, FaCog } from 'react-icons/fa'; // Importing icons for profile and settings
import Sidebar from './Sidebar';
import DashboardOverview from './DashboardOverview';
import ProductManagement from './ProductManagement';
import CustomerManagement from './CustomerManagement';
import TelecallerManagement from './TelecallerManagement';
import ReportsAnalytics from './ReportsAnalytics';
import UserRoleManagement from './UserRoleManagement';
import NotificationsAlerts from './NotificationsAlerts';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'Overview':
        return <DashboardOverview />;
      case 'Products':
        return <ProductManagement />;
      case 'Customers':
        return <CustomerManagement />;
      case 'Telecallers':
        return <TelecallerManagement />;
      case 'Reports':
        return <ReportsAnalytics />;
      case 'Users':
        return <UserRoleManagement />;
      case 'Notifications':
        return <NotificationsAlerts />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex min-h-screen ml-[20%]">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <div className="flex-grow">
        {/* Header with profile and settings icons */}
        <header className="bg-white px-6 py-[1.13rem] flex justify-between sticky top-0 right-0">
          <div>
            {""}
          </div>

          <div className="flex items-center">
            <h1 className="tracking-widest uppercase border border-black px-3 py-2">
              Florist
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 cursor-pointer">
              <FaUserCircle className="text-2xl" title="Profile" />
              <span className="text-md">Profile</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <FaCog className="text-xl" title="Settings" />
              <span className="text-md">Settings</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 bg-gray-100 h-full">
          <h1 className="text-2xl font-medium uppercase tracking-wider mb-4">{activeSection}</h1>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
