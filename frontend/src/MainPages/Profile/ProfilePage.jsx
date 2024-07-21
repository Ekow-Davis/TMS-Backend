import React, { useState, useEffect } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import Sidebar from '../../Components/Layout/Sidebar';
import PSidebar from './PSidebar';

const MessagePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [editedUserInfo, setEditedUserInfo] = useState({});

  useEffect(() => {
    fetch('/placeholder/userInfo.json')
      .then(response => response.json())
      .then(data => {
        setUserInfo(data);
        setEditedUserInfo(data);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserInfo({ ...editedUserInfo, [name]: value });
    setChangesMade(true);
  };

  const handleSaveChanges = () => {
    setUserInfo(editedUserInfo);
    setIsEditing(false);
    setChangesMade(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 bg-white">
    <div className="flex h-screen bg-gray-100">
      <PSidebar />
      <div className="flex-grow p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
          <div className="flex items-center mb-6">
            <div className="relative w-20 h-20 mr-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer"
                onClick={() => alert('Change Profile Picture')}
              >
                <PencilSquareIcon className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {userInfo.firstName} {userInfo.lastName}
              </h2>
              <p className="text-gray-500">{userInfo.city}, {userInfo.country}</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={editedUserInfo.firstName || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={editedUserInfo.lastName || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={editedUserInfo.emailAddress || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedUserInfo.phoneNumber || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={editedUserInfo.country || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-gray-700">City/State</label>
                <input
                  type="text"
                  name="city"
                  value={editedUserInfo.city || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-gray-700">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={editedUserInfo.postalCode || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-gray-700">Tax ID</label>
                <input
                  type="text"
                  name="taxId"
                  value={editedUserInfo.taxId || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={handleSaveChanges}
            className={`ml-4 bg-green-500 text-white px-4 py-2 rounded-md ${!changesMade && 'opacity-50 cursor-not-allowed'}`}
            disabled={!changesMade}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default MessagePage;
