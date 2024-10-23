import React, { useState, useContext, useEffect } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { UserContext } from '../../Components/Utils/UserContext';

const ProfileBody = () => {

  // const { user, loginUser } = useContext(UserContext);

  const user = localStorage.getItem('user')

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

  const handleSaveChanges = async () => {
    try {
      // Get the token from local storage
      const token = localStorage.getItem('token');
      
      // Create the PUT request to update user info
      const response = await fetch('https://yourapi.com/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Pass the token for authorization
        },
        body: JSON.stringify(editedUserInfo) // Send the edited user info as request body
      });
  
      // Handle the response from the server
      if (response.ok) {
        // Assuming the server returns the updated user data
        const updatedUserData = await response.json();
        
        // // Update context with the new user info
        // setUser(updatedUserData);
  
        // Update local storage with the new user info
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        
        // Update the state to reflect changes on UI
        setUserInfo(updatedUserData);
        setIsEditing(false);
        setChangesMade(false);
        
        alert('User information updated successfully!');
      }
      else {
        alert('Failed to update user information');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
      alert('An error occurred while updating the information');
    }
  };
  

  return (
    <>
    
      <h1 className="text-2xl text-center font-semibold mb-4">
            My Profile
          </h1>
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
                {userInfo.firstName} {userInfo.lastName}
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
                  name="firstName"
                  defaultValue={user.otherNames}
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
                  defaultValue={user.lastName}
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
                  defaultValue={user.email}
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
                  defaultValue={user.phoneNumber}
                  value={editedUserInfo.phoneNumber || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  disabled={!isEditing}
                />
              </div>
              {/* <div>
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
              </div> */}
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
  )
}

export default ProfileBody