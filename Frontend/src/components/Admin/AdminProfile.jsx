// Profile.js
import React from 'react';

const AdminProfile = () => {
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Profile Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Role:</strong> {userData.role}</p>
      {/* Add more user data as necessary */}
    </div>
  );
};

export default AdminProfile;
