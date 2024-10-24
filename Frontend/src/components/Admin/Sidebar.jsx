import React, { useState } from 'react';
import { FaTachometerAlt, FaBox, FaUsers, FaPhone, FaChartBar, FaUserFriends, FaBell } from 'react-icons/fa';

const Sidebar = ({ setActiveSection }) => {
  const [activeSection, setActive] = useState('Overview');

  const menuItems = [
    { name: 'Overview', icon: <FaTachometerAlt />, label: 'Dashboard Overview' },
    { name: 'Products', icon: <FaBox />, label: 'Product Management' },
    { name: 'Customers', icon: <FaUsers />, label: 'Customer Management' },
    { name: 'Telecallers', icon: <FaPhone />, label: 'Telecaller Management' },
    { name: 'Reports', icon: <FaChartBar />, label: 'Reports and Analytics' },
    { name: 'Users', icon: <FaUserFriends />, label: 'User and Role Management' },
    { name: 'Notifications', icon: <FaBell />, label: 'Notifications and Alerts' },
  ];

  const handleSectionChange = (name) => {
    setActive(name);
    setActiveSection(name);
  };

  return (
    <>
    <div className="w-[20%] h-screen bg-white text-black flex flex-col fixed top-0 left-0 bottom-0">
      <div className="py-6 px-4 text-lg font-medium uppercase tracking-widest border-black border text-black">Admin Dashboard</div>
      <nav className="flex-grow flex flex-col justify-between h-full">
        <ul className="flex flex-col justify-around h-[100%] text-sm tracking-wider">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`flex items-center uppercase w-full text-left py-3 px-4 group 
                ${activeSection === item.name ? 'bg-black text-white' : 'hover:bg-gray-600 hover:text-gray-300'}`}
                onClick={() => handleSectionChange(item.name)}
              >
                <div className="flex items-center justify-center">
                  <div className={`transition-all duration-300 ${activeSection === item.name ? 'text-white' : ''}`}>
                    {item.icon}
                  </div>
                  <span className={`ml-2 ${activeSection === item.name ? 'opacity-100' : ''}`}>
                    {item.label}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    </>
    
  );
};

export default Sidebar;
