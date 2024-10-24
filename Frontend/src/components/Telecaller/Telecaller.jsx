import React, { useState } from "react";
import Footer from "../Footer/Footer";

const TelecallerDashboard = () => {
  const [activeSection, setActiveSection] = useState("Pending Orders");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState({});

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleConfirmOrder = (order) => {
    alert(`Order ${order} confirmed!`);
    // Logic to confirm the order (e.g., API call)
  };

  const handleStatusChange = (order, status) => {
    setOrderStatus({ ...orderStatus, [order]: status });
    alert(`Order ${order} status changed to ${status}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <>
      <div className="bg-white min-h-screen text-black font-sans">
        {/* Navbar */}
        <nav className="border-b border-gray-300">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left side links */}
            <div className="flex space-x-8">
              <button
                className={`text-sm py-6 px-4 tracking-widest uppercase font-normal transition-colors ${
                  activeSection === "Pending Orders"
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                } px-3 py-2`}
                onClick={() => handleSectionClick("Pending Orders")}
              >
                Pending Orders
              </button>

              <button
                className={`text-sm py-6 px-4 tracking-widest uppercase font-normal transition-colors ${
                  activeSection === "Confirmed Orders"
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                } px-3 py-2`}
                onClick={() => handleSectionClick("Confirmed Orders")}
              >
                Confirmed Orders
              </button>
            </div>

            {/* Centered company logo */}
            <div className="flex items-center justify-center">
              <h1 className="tracking-widest text-lg uppercase border border-black px-3 py-2">
                Florist
              </h1>
            </div>

            {/* Right side links */}
            <div className="flex space-x-8">
              <button
                className={`text-sm py-6 px-4 tracking-widest uppercase font-normal transition-colors ${
                  activeSection === "Delivery History"
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                } px-3 py-2`}
                onClick={() => handleSectionClick("Delivery History")}
              >
                Delivery History
              </button>
              <button
                className={`text-sm py-6 px-4 tracking-widest uppercase font-normal transition-colors ${
                  activeSection === "Sign Out"
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                } px-3 py-2`}
              >
                Sign Out
              </button>
            </div>
          </div>
        </nav>

        {/* Content Section */}
        <div className="container mx-auto py-12 px-4 md:px-8">
          <div className="p-8">
            {/* Pending Orders */}
            {activeSection === "Pending Orders" && (
              <div>
                <h1 className="text-2xl uppercase font-medium tracking-widest mb-6 border-b pb-4">
                  Pending Orders
                </h1>
                <ul className="space-y-6">
                  {["#12345", "#12346"].map((order, index) => (
                    <li
                      key={index}
                      className="p-6 border border-gray-200 shadow-md transition-shadow bg-white"
                    >
                      <div className="flex justify-between items-center tracking-wider">
                        <div>
                          <h3 className="text-lg font-medium">Order {order}</h3>
                          <p className="text-gray-500 text-[0.6rem] mb-2">
                            Date: 01/10/2024
                          </p>
                          <p className="text-gray-500">Total: ₹2500</p>
                          <p className="text-gray-500">Customer: John Doe</p>
                          <p className="text-gray-500">
                            Delivery Address: XYZ Street
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() => handleViewDetails(order)}
                            className="px-6 py-2 border border-black text-black text-xs tracking-widest hover:bg-black hover:text-white transition-colors"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleConfirmOrder(order)}
                            className="ml-4 px-6 py-2 border border-green-500 text-green-600 text-xs tracking-widest hover:bg-green-500 hover:text-white transition-colors"
                          >
                            Confirm Order
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Confirmed Orders */}
            {activeSection === "Confirmed Orders" && (
              <div>
                <h1 className="text-2xl uppercase font-medium tracking-widest mb-6 border-b pb-4">
                  Confirmed Orders
                </h1>
                <ul className="space-y-6">
                  {["#12347", "#12348"].map((order, index) => (
                    <li
                      key={index}
                      className="p-6 border border-gray-200 shadow-md transition-shadow bg-white"
                    >
                      <div className="flex justify-between items-center tracking-wider">
                        <div>
                          <h3 className="text-lg font-medium">Order {order}</h3>
                          <p className="text-gray-500 text-[0.6rem] mb-2">
                            Date: 05/10/2024
                          </p>
                          <p className="text-gray-500">Total: ₹3500</p>
                          <p className="text-gray-500">Customer: Jane Smith</p>
                          <p className="text-gray-500">
                            Delivery Address: ABC Avenue
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() => handleViewDetails(order)}
                            className="px-6 py-2 border border-black text-black text-xs tracking-widest hover:bg-black hover:text-white transition-colors"
                          >
                            View Details
                          </button>
                          <select
                            className="ml-4 px-6 py-2 border border-black text-xs tracking-widest bg-white"
                            value={orderStatus[order] || "Shipped"}
                            onChange={(e) =>
                              handleStatusChange(order, e.target.value)
                            }
                          >
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Delivery History */}
            {activeSection === "Delivery History" && (
              <div>
                <h1 className="text-2xl uppercase font-medium tracking-widest mb-6 border-b pb-4">
                  Delivery History
                </h1>
                <ul className="space-y-6">
                  {["#12349", "#12350"].map((order, index) => (
                    <li
                      key={index}
                      className="p-6 border border-gray-200 shadow-md transition-shadow bg-white"
                    >
                      <div className="flex justify-between items-center tracking-wider">
                        <div>
                          <h3 className="text-lg font-medium">Order {order}</h3>
                          <p className="text-gray-500 text-[0.6rem] mb-2">
                            Date: 10/10/2024
                          </p>
                          <p className="text-gray-500">Total: ₹4000</p>
                          <p className="text-gray-500">Customer: Alice Brown</p>
                          <p className="text-gray-500">
                            Delivery Address: DEF Street
                          </p>
                        </div>
                        <button
                          onClick={() => handleViewDetails(order)}
                          className="px-6 py-2 border border-black text-black text-xs tracking-widest hover:bg-black hover:text-white transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Order Details Modal */}
        {isModalOpen && selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full">
              <h2 className="text-xl font-semibold mb-4">
                Order Details - {selectedOrder}
              </h2>
              <p>Order details and items will be displayed here...</p>
              <button
                onClick={handleCloseModal}
                className="mt-4 px-6 py-2 border border-black text-black text-xs tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default TelecallerDashboard;
