import React from 'react';

const PSidebar = () => {
  return (
    <div className="w-64 h-full bg-white p-4 shadow-md">
      <ul>
        <li className="mb-4">
          <a href="/profile" className="text-blue-500">My Profile</a>
        </li>
        <li className="mb-4">
          <a href="/security">Security</a>
        </li>
        <li className="mb-4">
          <a href="/organizations">Organizations</a>
        </li>
        <li className="mb-4">
          <a href="/account-details">Account Details</a>
        </li>
        <li className="mb-4">
          <a href="/notifications">Notifications</a>
        </li>
        <li className="mb-4">
          <a href="/export-data">Export Data</a>
        </li>
        <li className="mb-4 text-red-500">
          <a href="/delete-account">Delete Account</a>
        </li>
      </ul>
    </div>
  );
};

export default PSidebar;
