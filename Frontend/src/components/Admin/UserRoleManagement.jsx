import React, { useState } from 'react';
import { FaUserShield, FaPlusCircle, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const UserRoleManagement = () => {
  // Sample shop owner data
  const [shopOwners, setShopOwners] = useState([
    { id: 1, name: 'John Doe', contact: 'john@example.com', location: 'Downtown', active: true },
    { id: 2, name: 'Jane Smith', contact: 'jane@example.com', location: 'Midtown', active: false },
  ]);

  // Toggle the active status of a shop owner
  const toggleStatus = (id) => {
    setShopOwners(
      shopOwners.map(owner =>
        owner.id === id ? { ...owner, active: !owner.active } : owner
      )
    );
  };

  return (
    <section className="p-6 ">

      {/* Shop Owner Accounts Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <FaUserShield className="mr-2" /> Shop Owner Accounts
        </h3>
        <div className="flex justify-between mb-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 flex items-center">
            <FaPlusCircle className="mr-2" /> Add Shop Owner
          </button>
        </div>

        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Store Location</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shopOwners.map(owner => (
              <tr key={owner.id} className="border-t">
                <td className="p-4">{owner.name}</td>
                <td className="p-4">{owner.contact}</td>
                <td className="p-4">{owner.location}</td>
                <td className="p-4 text-center">
                  {owner.active ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Disabled</span>
                  )}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => toggleStatus(owner.id)}
                    className={`py-2 px-4 rounded-lg shadow ${
                      owner.active
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    } flex items-center justify-center`}
                  >
                    {owner.active ? <FaToggleOff className="mr-2" /> : <FaToggleOn className="mr-2" />}
                    {owner.active ? 'Disable' : 'Enable'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserRoleManagement;
