import React, { useState } from 'react';
import { FaPhone, FaClipboardList, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const TelecallerManagement = () => {
  const [telecallers, setTelecallers] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      callsMade: 50,
      confirmedOrders: 30,
      pendingOrders: 10,
      callLogs: [
        { id: 101, customer: 'John Doe', status: 'Confirmed', notes: 'Order confirmed.' },
        { id: 102, customer: 'Jane Smith', status: 'Pending', notes: 'Follow-up needed.' },
      ],
    },
    {
      id: 2,
      name: 'Bob Brown',
      callsMade: 40,
      confirmedOrders: 25,
      pendingOrders: 8,
      callLogs: [
        { id: 201, customer: 'Sam Wilson', status: 'Confirmed', notes: 'Order confirmed.' },
        { id: 202, customer: 'Emily White', status: 'Pending', notes: 'Requested callback.' },
      ],
    },
  ]);

  const addTelecaller = () => {
    setTelecallers([...telecallers, { id: Date.now(), name: 'New Telecaller', callsMade: 0, confirmedOrders: 0, pendingOrders: 0, callLogs: [] }]);
  };

  return (
    <section className="p-6">

      {/* Telecaller Performance Overview */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Telecaller Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {telecallers.map(telecaller => (
            <div key={telecaller.id} className="bg-white p-4 shadow-lg">
              <h4 className="text-lg font-bold mb-2">{telecaller.name}</h4>
              <p><FaPhone className="inline mr-2" /> Calls Made: {telecaller.callsMade}</p>
              <p><FaCheckCircle className="inline mr-2 text-green-500" /> Confirmed Orders: {telecaller.confirmedOrders}</p>
              <p><FaTimesCircle className="inline mr-2 text-red-500" /> Pending Orders: {telecaller.pendingOrders}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call Logs and Follow-Up */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Call Logs and Follow-Up</h3>
        <div className="space-y-6">
          {telecallers.map(telecaller => (
            <div key={telecaller.id} className="bg-white p-4  shadow-lg">
              <h4 className="text-lg font-bold mb-2">{telecaller.name}'s Call Logs</h4>
              {telecaller.callLogs.length === 0 ? (
                <p>No call logs available.</p>
              ) : (
                <ul className="ml-4 list-disc">
                  {telecaller.callLogs.map(log => (
                    <li key={log.id} className="text-sm">
                      <p className="font-semibold">Customer: {log.customer}</p>
                      <p>Status: <span className={`font-semibold ${log.status === 'Confirmed' ? 'text-green-500' : 'text-yellow-500'}`}>{log.status}</span></p>
                      <p>Notes: {log.notes}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Telecaller Button */}
      <div className="mt-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          onClick={addTelecaller}
        >
          Add Telecaller
        </button>
      </div>
    </section>
  );
};

export default TelecallerManagement;
