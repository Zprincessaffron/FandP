import React from 'react';
import { FaEnvelope, FaPhone, FaHistory, FaStar, FaReply } from 'react-icons/fa';

const CustomerManagement = () => {
  // Sample customer data with more details
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      orderHistory: [
        { orderId: 101, product: 'Red Rose', date: '2024-09-01' },
        { orderId: 102, product: 'Aloe Vera', date: '2024-10-10' },
      ],
      feedback: [
        { product: 'Red Rose', rating: 5, comment: 'Beautiful and fresh!' },
        { product: 'Aloe Vera', rating: 3, comment: 'Good but slightly damaged' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '987-654-3210',
      orderHistory: [
        { orderId: 201, product: 'Sunflower', date: '2024-08-15' },
      ],
      feedback: [
        { product: 'Sunflower', rating: 4, comment: 'Bright and fresh!' },
      ],
    },
  ];

  return (
    <section className="p-6">

      {/* Customer List Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Customer List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customers.map(customer => (
            <div key={customer.id} className="bg-white p-4  shadow-md">
              <h4 className="text-lg font-bold mb-2">{customer.name}</h4>
              <p><FaEnvelope className="inline mr-2" /> {customer.email}</p>
              <p><FaPhone className="inline mr-2" /> {customer.phone}</p>

              {/* Order History */}
              <h5 className="font-semibold mt-4 mb-2">Order History</h5>
              <ul className="ml-4 list-disc">
                {customer.orderHistory.map(order => (
                  <li key={order.orderId} className="text-sm">
                    {order.product} - {order.date}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Customer Feedback</h3>
        <div className="space-y-6">
          {customers.map(customer => (
            <div key={customer.id} className="bg-white p-4  shadow-lg">
              <h4 className="text-lg font-bold mb-2">{customer.name}</h4>
              {customer.feedback.map((feedback, index) => (
                <div key={index} className="mt-4">
                  <p className="font-semibold">{feedback.product}</p>
                  <p className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" /> {feedback.rating} Stars
                  </p>
                  <p className="italic">"{feedback.comment}"</p>

                  {/* Feedback Response */}
                  <div className="mt-2">
                    <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded shadow-md hover:bg-blue-600">
                      <FaReply className="mr-2" /> Respond
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerManagement;
