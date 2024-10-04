import React, { useState } from 'react';
import ProfileBody from './ProfileBody';
import ExportDataPage from './ExportDataPage';
import NotificationSettingsPage from './NSettingsPage';
import SecurityPage from './SecurityPage';
import SettingsPage from './SettingsPage';
import Sidebar from '../../Components/Layout/Sidebar';

const tabs = [
  { name: 'Profile', component: <ProfileBody /> },
  { name: 'Security', component: <SecurityPage /> },
  { name: 'Notification Settings', component: <NotificationSettingsPage /> },
  { name: 'Export Data', component: <ExportDataPage /> },
  { name: 'Settings', component: <SettingsPage /> },
];

const ProfilePage = () => {
  // Set ProfileBody as the default active tab by initializing with 0 (Profile)
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab clicks
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-y-auto p-4 bg-white">
        <div>
          <h1 className="text-3xl my-3 text-custom-heading font-bold mb-6">
            Profile Settings
          </h1>
        </div>
        <div className="flex flex-col rounded-lg pt-4 bg-gray-100">
          <div className="flex justify-center mb-4">
            {/* Scrollable Tab Bar */}
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide w-full justify-center">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`cursor-pointer p-2 transition-all duration-200 whitespace-nowrap text-center ${
                    activeTab === index
                      ? 'bg-custom-purple text-white font-bold underline'
                      : 'bg-white text-gray-600 hover:text-gray-800'
                  } rounded-full px-4 py-2`}
                >
                  {tab.name}
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Page Content */}
          <div className="bg-white p-6 m-6 rounded-lg shadow-md transition-all duration-200">
            {tabs[activeTab].component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
