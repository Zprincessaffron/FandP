import React, { useState } from "react";
import Footer from "../Footer/Footer";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("Profile Information");

  const handleSectionClick = (section) => {
    setActiveSection(section);
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
                  activeSection === "Profile Information"
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                } px-3 py-2`}
                onClick={() => handleSectionClick("Profile Information")}
              >
                Profile Information
              </button>

              <button
                className={`text-sm  py-6 px-4 tracking-widest uppercase font-normal transition-colors ${
                  activeSection === "My Orders"
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                } px-3 py-2`}
                onClick={() => handleSectionClick("My Orders")}
              >
                My Orders
              </button>
            </div>

            {/* Centered company logo */}
            <div className="flex items-center">
              <h1 className="tracking-widest text-lg uppercase border border-black px-3 py-2">
                Florist
              </h1>
            </div>

            {/* Right side links */}
            <div className="flex space-x-8">
              <button
                className={`text-sm  py-6 px-4 tracking-widest uppercase font-normal transition-colors ${
                  activeSection === "Order History"
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                } px-3 py-2`}
                onClick={() => handleSectionClick("Order History")}
              >
                Order History
              </button>
              <button
                className={`text-sm  py-6 px-4 tracking-widest uppercase font-normal transition-colors ${
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
            {/* Profile Information */}
            {activeSection === "Profile Information" && (
              <div>
                <h1 className="text-2xl uppercase font-medium tracking-widest mb-6 border-b pb-4">
                  Profile Information
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm tracking-wider">
                  <div>
                    <label className="block text-sm font-normal tracking-wider mb-2 text-md">
                      Name
                    </label>
                    <input
                      type="text"
                      value="John Doe"
                      className="block w-full px-4 py-3 border rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal tracking-wider mb-2 text-md">
                      Email
                    </label>
                    <input
                      type="email"
                      value="johndoe@example.com"
                      className="block w-full px-4 py-3 border rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal tracking-wider mb-2 text-md">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value="+1234567890"
                      className="block w-full px-4 py-3 border rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}

            {/* My Orders */}
            {activeSection === "My Orders" && (
              <div>
                <h1 className="text-2xl uppercase font-medium tracking-widest mb-6 border-b pb-4">
                  My Orders
                </h1>
                <ul className="space-y-6">
                  {["#12345", "#12346"].map((order, index) => (
                    <li
                      key={index}
                      className="p-6 border border-gray-200 shadow-md  transition-shadow bg-white"
                    >
                      <div className="flex justify-between items-center tracking-wider">
                        <div>
                          <h3 className="text-lg  font-medium">Order {order}</h3>
                          <p className="text-gray-500 text-[0.6rem] mb-2">
                            Date: 01/10/2024
                          </p>
                          <p className="text-gray-500">Total: ₹2500</p>
                        </div>
                        <button className="px-6 py-2 border border-black text-black text-xs tracking-widest hover:bg-black hover:text-white transition-colors">
                          View Details
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Order History */}
            {activeSection === "Order History" && (
              <div>
                <h1 className="text-2xl uppercase font-medium tracking-widest mb-6 border-b pb-4">
                  Order History
                </h1>
                <ul className="space-y-6">
                  {["#12345", "#12346"].map((order, index) => (
                    <li
                      key={index}
                      className="p-6 border border-gray-200 shadow-md  transition-shadow bg-white"
                    >
                      <div className="flex justify-between items-center tracking-wider">
                        <div>
                          <h3 className="text-lg  font-medium">Order {order}</h3>
                          <p className="text-gray-500 text-[0.6rem] mb-2">
                            Date: 20/10/2024
                          </p>
                          <p className="text-gray-500">Total: ₹2000</p>
                        </div>
                        <button className="px-6 py-2 border border-black text-black text-xs tracking-widest hover:bg-black hover:text-white transition-colors">
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
      </div>

      <Footer />
    </>
  );
};

export default Profile;
