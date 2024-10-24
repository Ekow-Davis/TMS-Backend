import React, { useState, useContext, useEffect } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { UserContext } from '../../Components/Utils/UserContext';

const ProfileBody = () => {
  // Get user from UserContext
  const { user, setUser } = useContext(UserContext); // Destructure to access user and setUser
  
  // State for handling edit mode and storing user info
  const [userInfo, setUserInfo] = useState(user || {}); // Start with context user data
  const [isEditing, setIsEditing] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [editedUserInfo, setEditedUserInfo] = useState(user || {}); // Editable copy of user info

  // Set initial user data from context (or localStorage on page load)
  useEffect(() => {
    if (user) {
      setUserInfo(user);
      setEditedUserInfo(user);
    }
  }, [user]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserInfo({ ...editedUserInfo, [name]: value });
    setChangesMade(true); // Detect if any changes were made
  };

  // Save changes and update context + localStorage
  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(editedUserInfo), // Send updated user data
      });

      if (response.ok) {
        const updatedUserData = await response.json(); // Get updated user data
        setUser(updatedUserData); // Update context
        localStorage.setItem('user', JSON.stringify(updatedUserData)); // Update localStorage
        setUserInfo(updatedUserData); // Reflect changes on the UI
        setIsEditing(false);
        setChangesMade(false); // Reset the edit state
        alert('User information updated successfully!');
      } else {
        alert('Failed to update user information');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
      alert('An error occurred while updating the information');
    }
  };

  return (
    <>
      <h1 className="text-2xl text-center font-semibold mb-4">My Profile</h1>
      <div className="flex text-center justify-center items-center mb-6">
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
            {userInfo.otherNames} {userInfo.lastName}
          </h2>
          <p className="text-gray-500">{userInfo.email}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="otherNames"
              value={editedUserInfo.otherNames || ''}
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
              name="email"
              value={editedUserInfo.email || ''}
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
    </>
  );
};

export default ProfileBody;
