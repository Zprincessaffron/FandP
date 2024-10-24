import React from 'react';
import { FaDollarSign, FaTruck, FaBoxOpen, FaExclamationTriangle, FaStar } from 'react-icons/fa';
import { FaIndianRupeeSign, FaRupeeSign } from 'react-icons/fa6';

const DashboardOverview = () => {
  // Sample Data (this can be fetched from an API in a real-world scenario)
  const sampleSalesData = {
    totalSales: 5000,
    ordersInProgress: 10,
    newOrders: 5,
    lowStockProducts: 3,
    customerFeedback: [
      { product: 'Roses', rating: 5, comment: 'Beautiful flowers!' },
      { product: 'Tulips', rating: 4, comment: 'Loved them!' },
    ],
  };

  return (
    <section className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Sales */}
        <div className="bg-white p-6  shadow-lg flex items-center">
          <div className="p-4 bg-green-100 rounded-full">
            <FaIndianRupeeSign className="text-green-500 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-md tracking-wider font-medium">Total Sales</h3>
            <p className="text-xl font-medium">₹{sampleSalesData.totalSales}</p>
          </div>
        </div>

        {/* Orders in Progress */}
        <div className="bg-white p-6  shadow-lg flex items-center">
          <div className="p-4 bg-blue-100 rounded-full">
            <FaTruck className="text-blue-500 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-md tracking-wider font-medium">Orders in Progress</h3>
            <p className="text-xl font-medium">{sampleSalesData.ordersInProgress}</p>
          </div>
        </div>

        {/* New Orders */}
        <div className="bg-white p-6  shadow-lg flex items-center">
          <div className="p-4 bg-yellow-100 rounded-full">
            <FaBoxOpen className="text-yellow-500 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-md tracking-wider font-medium">New Orders</h3>
            <p className="text-xl font-medium">{sampleSalesData.newOrders}</p>
          </div>
        </div>

        {/* Low Stock Products */}
        <div className="bg-white p-6  shadow-lg flex items-center">
          <div className="p-4 bg-red-100 rounded-full">
            <FaExclamationTriangle className="text-red-500 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-md tracking-wider font-medium">Low Stock Products</h3>
            <p className="text-xl font-medium">{sampleSalesData.lowStockProducts}</p>
          </div>
        </div>

        {/* Customer Feedback */}
        <div className="bg-white p-6  shadow-lg flex items-center">
          <div className="p-4 bg-purple-100 rounded-full">
            <FaStar className="text-purple-500 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-md tracking-wider font-medium">Customer Feedback</h3>
            <p className="text-lg font-medium">{sampleSalesData.customerFeedback.length} reviews</p>
          </div>
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div className="mt-8 bg-white p-6  shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Customer Feedback</h3>
        <ul className="space-y-4">
          {sampleSalesData.customerFeedback.map((feedback, index) => (
            <li key={index} className="border-b pb-2">
              <strong>{feedback.product}</strong> - Rating: {feedback.rating}/5
              <p className="text-sm">{feedback.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DashboardOverview;
