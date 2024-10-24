import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineDown,
  AiOutlineSearch,
} from "react-icons/ai";
import { GiPlantWatering } from "react-icons/gi";
import { PiFlowerTulipLight } from "react-icons/pi";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isFlowersDropdownOpen, setFlowersDropdownOpen] = useState(false);
  const [isPlantsDropdownOpen, setPlantsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleFlowersDropdown = () => {
    setFlowersDropdownOpen(!isFlowersDropdownOpen);
  };

  const togglePlantsDropdown = () => {
    setPlantsDropdownOpen(!isPlantsDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };


  return (
    <div>
      {/* Main Navbar */}
      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="tracking-widest uppercase border border-black px-3 py-2">
            Florist
          </h1>
        </div>

        {/* Center Section: Menu Items */}
        <div className="hidden md:flex space-x-8 text-[0.7rem] tracking-wider">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Flowers
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Plants
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Wedding
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Anniversary
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Birthday
          </a>

          {/* Dropdown Menu: Collection */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-600 hover:text-gray-900 font-semibold"
            >
              Collection
              <AiOutlineDown
                className={`${
                  isDropdownOpen
                    ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                    : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                }`}
              />
            </button>

            {/* Dropdown Items */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-7 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Roses Collection</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Tulips Collection</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Orchids Collection</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Indoor Plants</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Succulents</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-6">
          <AiOutlineHeart className="h-6 w-6 text-gray-600 hover:text-gray-900" />

          {/* Shopping Cart with Badge */}
          <div className="relative">
            <AiOutlineShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-black text-white text-[0.6rem] font-normal rounded-full flex items-center justify-center">
              {/* Replace this number with your cart value */}3
            </span>
          </div>

           {/* Profile Icon with Dropdown */}
           <div className="relative">
            <AiOutlineUser
              className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={toggleProfileDropdown} // Toggle on click
            />
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                <ul className="py-2 text-sm tracking-wider">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Profile</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">My Orders</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Order History</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Sign Out</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sub Navbar */}
      <div className="bg-white p-4 flex items-center justify-between shadow-md tracking-wider">
        {/* Left Section: Categories Dropdowns */}
        <div className="relative flex items-center space-x-4 text-sm">
          {/* Flowers Dropdown */}
          <div className="relative">
            <button
              onClick={toggleFlowersDropdown}
              className="flex items-center text-gray-600 hover:text-gray-900 font-semibold"
            >
              <PiFlowerTulipLight className="h-5 w-5 mr-1" />
              Flowers
              <AiOutlineDown
                className={`${
                  isFlowersDropdownOpen
                    ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                    : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                }`}
              />
            </button>

            {/* Flowers Dropdown Items */}
            {isFlowersDropdownOpen && (
              <div className="absolute left-0 top-7 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Roses</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Tulips</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Plants Dropdown */}
          <div className="relative">
            <button
              onClick={togglePlantsDropdown}
              className="flex items-center text-gray-600 hover:text-gray-900 font-semibold"
            >
              <GiPlantWatering className="h-5 w-5 mr-1" />
              Plants
              <AiOutlineDown
                className={`${
                  isPlantsDropdownOpen
                    ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                    : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                }`}
              />
            </button>

            {/* Plants Dropdown Items */}
            {isPlantsDropdownOpen && (
              <div className="absolute left-0 top-7 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Indoor Plants</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Outdoor Plants</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Succulents</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex flex-grow mx-4 items-center justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-black w-[30rem]" // Increased width and padding
            />
            <button className="text-black absolute right-2 top-3">
              <AiOutlineSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Section: Contact Number */}
        <div className="text-gray-600 text-sm">
          <p>Contact: (+91) 12345-67890</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
