import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../Components/Utils/UserContext';
import NavBar from '../AdComponent/Layout/NavBar';

const AdProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({
    lastName: '',
    otherNames: '',
    email: '',
    phoneNumber: '',
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [changesMade, setChangesMade] = useState(false);

  // Load user data from context or localStorage
  useEffect(() => {
    if (user) {
      setUserInfo({
        lastName: user.lastName,
        otherNames: user.otherNames,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setChangesMade(true);
  };

  // Handle saving updated profile data
  const handleSaveChanges = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8000/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser); // Update the context
        localStorage.setItem('user', JSON.stringify(updatedUser)); // Update local storage
        setIsEditing(false);
        setChangesMade(false);
        alert('Profile updated successfully');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  // Handle password change request
  const handlePasswordChange = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8000/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        alert('Password updated successfully');
        setPassword('');
        setConfirmPassword('');
      } else {
        alert('Failed to update password');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Error updating password');
    }
  };

  return (
    <>
      <div className="top-container">
        {/* Navbar */}
        <NavBar />

        {/* Profile Heading */}
        <section className="status">
          <div className="header">
            <h4>Hello Administrator {user?.lastName}, {user?.otherNames}</h4>
          </div>
        </section>
      </div>

      {/* Profile Main Body */}
      <div className="p-6">
        {/* Profile Info Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Profile Information</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-gray-700">Other Names</label>
              <input
                type="text"
                name="otherNames"
                value={userInfo.otherNames}
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
                value={userInfo.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Edit and Save Buttons */}
          <div className="mt-6">
            {isEditing ? (
              <button
                onClick={handleSaveChanges}
                className={`bg-green-500 text-white px-4 py-2 rounded-md ${!changesMade && 'opacity-50 cursor-not-allowed'}`}
                disabled={!changesMade}
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Password Change Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handlePasswordChange}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdProfile;
