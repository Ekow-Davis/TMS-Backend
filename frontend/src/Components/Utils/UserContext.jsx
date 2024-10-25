import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on app initialization
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        // Only parse if storedUser is a valid JSON string
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem('user'); // Clear invalid data if JSON parsing fails
      }
    }
  }, []);

  // Function to log in the user and update context + localStorage
  const updateUser = (userData) => {
    try {
      const userString = JSON.stringify(userData);
      localStorage.setItem('user', userString); // Store as a JSON string
      setUser(userData); // Update context
    } catch (error) {
      console.error("Error stringifying user data for localStorage:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
