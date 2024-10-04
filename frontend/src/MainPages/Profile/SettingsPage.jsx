import React, { useState } from 'react';

const SettingsPage = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
      
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Settings</h1>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Appearance</h3>
            <div className="mt-2">
              <label className="block text-gray-700">Theme</label>
              <select
                value={theme}
                onChange={handleThemeChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Language</h3>
            <div className="mt-2">
              <label className="block text-gray-700">Preferred Language</label>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Notifications</h3>
            <div className="mt-2">
              <label className="block text-gray-700">Enable Notifications</label>
              <input
                type="checkbox"
                className="mt-1 block"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-700">Notification Sound</label>
              <input
                type="checkbox"
                className="mt-1 block"
              />
            </div>
          </div>
        </div>      
   
  );
};

export default SettingsPage;
