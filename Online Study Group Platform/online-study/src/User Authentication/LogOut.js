import React from 'react';

const Logout = () => {
  const handleLogout = async () => {
    try {
      // Add logic to communicate with your backend for logout if needed
      // For example, send a request to invalidate the user session on the server

      // Handle successful logout
      console.log('Logout successful');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;