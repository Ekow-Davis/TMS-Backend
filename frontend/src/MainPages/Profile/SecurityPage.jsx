import React, { useState } from 'react';

const SecurityPage = () => {
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSavePassword = async () => {
    const token = localStorage.getItem('token'); // Retrieve token if needed for authentication

    try {
      const response = await fetch('http://localhost:8000/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        setSuccessMessage('Password updated successfully.');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage('Failed to update password.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setSuccessMessage('');
      setErrorMessage('An error occurred while updating the password.');
    }
  };

  return (
    <div className="flex-grow p-8">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Security</h1>

        {/* Password Update Section */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Change Password</h3>
          <div className="mt-2">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <button
              onClick={handleSavePassword}
              className="mt-4 bg-custom-purple hover:bg-custom-hover-teal text-white py-2 px-4 rounded"
            >
              Save Password
            </button>

            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
