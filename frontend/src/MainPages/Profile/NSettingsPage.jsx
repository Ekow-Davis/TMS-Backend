import React, { useState } from 'react';
import Sidebar from '../../Components/Layout/Sidebar';
import PSidebar from './PSidebar';

const NSettingsPage = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isBadgeEnabled, setIsBadgeEnabled] = useState(true);

  const handleNotificationsToggle = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const handleBadgeToggle = () => setIsBadgeEnabled(!isBadgeEnabled);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 bg-white">
    <div className="flex h-screen bg-gray-100">
      <PSidebar />
      <div className="flex-grow p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Notification Settings</h3>
            <div className="mt-2">
              <label className="block text-gray-700">Enable Notifications</label>
              <input
                type="checkbox"
                checked={isNotificationsEnabled}
                onChange={handleNotificationsToggle}
                className="mt-1 block"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-700">Enable Notification Counter Badge</label>
              <input
                type="checkbox"
                checked={isBadgeEnabled}
                onChange={handleBadgeToggle}
                className="mt-1 block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default NSettingsPage;
