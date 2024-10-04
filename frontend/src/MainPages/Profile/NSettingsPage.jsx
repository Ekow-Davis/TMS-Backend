import React, { useState } from 'react';


const NSettingsPage = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isBadgeEnabled, setIsBadgeEnabled] = useState(true);

  const handleNotificationsToggle = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const handleBadgeToggle = () => setIsBadgeEnabled(!isBadgeEnabled);

  return (
         
      <div className="flex-grow p-8">
        <div className="p-6">
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
        
  );
};

export default NSettingsPage;
