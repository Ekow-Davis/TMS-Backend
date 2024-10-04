import React, { useState } from 'react';

const SecurityPage = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handle2FAToggle = () => setIs2FAEnabled(!is2FAEnabled);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRecoveryEmailChange = (e) => setRecoveryEmail(e.target.value);

  return (
          
      <div className="flex-grow p-8">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Security</h1>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Two-Factor Authentication (2FA)</h3>
            <div className="mt-2">
              <label className="block text-gray-700">Enable 2FA</label>
              <input
                type="checkbox"
                checked={is2FAEnabled}
                onChange={handle2FAToggle}
                className="mt-1 block"
              />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Password</h3>
            <div className="mt-2">
              <label className="block text-gray-700">Change Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Recovery Email</h3>
            <div className="mt-2">
              <label className="block text-gray-700">Add Recovery Email</label>
              <input
                type="email"
                value={recoveryEmail}
                onChange={handleRecoveryEmailChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SecurityPage;
