import React, { useState } from 'react';
import { FaChartLine, FaClipboardList, FaTruck } from 'react-icons/fa';

const ReportsAnalytics = () => {
  // Sample state for selected date range, categories, etc.
  const [dateRange, setDateRange] = useState('monthly');
  const [productCategory, setProductCategory] = useState('flowers');

  return (
    <section className="p-6">

      {/* Sales Reports Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <FaChartLine className="mr-2" /> Sales Reports
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4  shadow-lg">
            <h4 className="text-lg font-bold mb-2">Filter By</h4>
            <label className="block mb-2">
              Date Range:
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="block w-full p-2 mt-1 border rounded"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </label>
            <label className="block mb-2">
              Product Category:
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="block w-full p-2 mt-1 border rounded"
              >
                <option value="flowers">Flowers</option>
                <option value="plants">Plants</option>
              </select>
            </label>
            <button className="mt-4 w-full bg-blue-500 text-white py-2  shadow hover:bg-blue-600">
              Generate Sales Report
            </button>
          </div>

          {/* Mock sales report */}
          <div className="bg-white p-4  shadow-lg">
            <h4 className="text-lg font-bold mb-2">Sales Report Overview</h4>
            <p>Date Range: {dateRange}</p>
            <p>Product Category: {productCategory}</p>
            <p>Total Sales: $12,000</p>
            <p>Total Orders: 150</p>
          </div>
        </div>
      </div>

      {/* Inventory Reports Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <FaClipboardList className="mr-2" /> Inventory Reports
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4  shadow-lg">
            <h4 className="text-lg font-bold mb-2">Filter By</h4>
            <label className="block mb-2">
              Product Category:
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="block w-full p-2 mt-1 border rounded"
              >
                <option value="flowers">Flowers</option>
                <option value="plants">Plants</option>
              </select>
            </label>
            <button className="mt-4 w-full bg-green-500 text-white py-2  shadow hover:bg-green-600">
              Generate Inventory Report
            </button>
          </div>

          {/* Mock inventory report */}
          <div className="bg-white p-4  shadow-lg">
            <h4 className="text-lg font-bold mb-2">Inventory Report Overview</h4>
            <p>Product Category: {productCategory}</p>
            <p>Stock Level: 200 items</p>
            <p>Low Stock Products: 5</p>
          </div>
        </div>
      </div>

      {/* Delivery Reports Section */}
      <div>
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <FaTruck className="mr-2" /> Delivery Reports
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4  shadow-lg">
            <h4 className="text-lg font-bold mb-2">Filter By</h4>
            <label className="block mb-2">
              Date Range:
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="block w-full p-2 mt-1 border rounded"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </label>
            <button className="mt-4 w-full bg-orange-500 text-white py-2  shadow hover:bg-orange-600">
              Generate Delivery Report
            </button>
          </div>

          {/* Mock delivery report */}
          <div className="bg-white p-4  shadow-lg">
            <h4 className="text-lg font-bold mb-2">Delivery Report Overview</h4>
            <p>Date Range: {dateRange}</p>
            <p>Success Rate: 95%</p>
            <p>Failed Deliveries: 10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAnalytics;
