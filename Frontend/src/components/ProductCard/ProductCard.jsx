import React, { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const ProductCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open/close the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="relative border border-gray-200 shadow-lg overflow-hidden w-[90%] m-8">
        {/* Image container for zoom effect */}
        <div className="overflow-hidden">
          {/* Product Image */}
          <img
            src="https://via.placeholder.com/300x200" // Replace with your product image URL
            alt="Product"
            className="w-full h-64 object-cover bg-pink-300 transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Icons on the top right corner */}
        <div className="absolute top-0 right-0 flex flex-col space-y-1 px-1 py-1 bg-white rounded-bl-lg bg-opacity-60">
          <button className="p-1 rounded-full border border-gray-200 transition">
            <CiHeart className="text-gray-500" />
          </button>
          <button className="p-1 rounded-full border border-gray-200 transition">
            <IoBagHandleOutline className="text-gray-500" />
          </button>
          <button
            className="p-1 rounded-full border border-gray-200 transition"
            onClick={togglePopup} // Open the popup on click
          >
            <CiSearch className="text-gray-500" />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4 transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-lg font-semibold mb-1 text-gray-600 tracking-wider">
            Gorgeous Red Roses
          </h3>
          <div className="font-bold mb-2">
            <span className="text-gray-800 mr-2">₹1000</span>
            <span className="line-through text-gray-400 text-[0.7rem] font-normal mr-4">
              ₹2000
            </span>
            <span className="border border-green-400 px-2 py-1 text-[0.75rem] text-green-600 font-normal tracking-wider rounded-md">
              50% OFF
            </span>
          </div>

          <div className="flex items-center">
            {/* Example review stars */}
            <div className="bg-green-400 gap-1 px-1 flex items-center justify-center rounded-md text-white">
              <span className="flex items-center text-center text-[0.8rem]">
                <FaStar />
              </span>
              <span className="text-[0.8rem] mr-1">4.5</span>
            </div>
            <span className="ml-1 text-gray-400 text-[0.8rem]">
              (20 reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <>
          {/* Overlay to dull the background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={togglePopup}
          ></div>

          {/* Centered Popup */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-2 w-[90%] md:w-[70%] rounded-lg shadow-lg relative grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[90vh]">
              {/* Left side: Main Image with extra images below */}
              <div className="p-8">
                <img
                  src="https://via.placeholder.com/300x300" // Replace with main product image
                  alt="Product"
                  className="w-full h-[70%] object-cover mb-4"
                />
                {/* Extra images */}
                <div className="flex space-x-2">
                  <img
                    src="https://via.placeholder.com/100x100" // Replace with extra image
                    alt="Extra"
                    className="w-20 h-20 object-cover border"
                  />
                  <img
                    src="https://via.placeholder.com/100x100" // Replace with extra image
                    alt="Extra"
                    className="w-20 h-20 object-cover border"
                  />
                  <img
                    src="https://via.placeholder.com/100x100" // Replace with extra image
                    alt="Extra"
                    className="w-20 h-20 object-cover border"
                  />
                </div>
              </div>

              {/* Right side: Product Details */}
              <div className="flex justify-evenly flex-col pr-2">
                <div>
                  <h2 className="text-2xl mb-4">Gorgeous Red Roses</h2>
                  <p className="text-gray-600 mb-2">
                    This product is perfect for decorating your home and giving
                    your space a fresh floral touch.
                  </p>
                  <div className="font-bold mb-2">
                    <span className="text-gray-800 mr-2">₹1000</span>
                    <span className="line-through text-gray-400 text-[0.7rem] font-normal mr-4">
                      ₹2000
                    </span>
                    <span className="border border-green-400 px-2 py-1 text-[0.75rem] text-green-600 font-normal tracking-wider rounded-md">
                      50% OFF
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-400 gap-1 px-1 flex items-center justify-center rounded-md text-white">
                        <FaStar className="text-[0.8rem]" />
                        <span className="text-[0.8rem] mr-1">4.5</span>
                      </div>
                      <span className="ml-1 text-gray-400 text-[0.8rem]">
                        (20 reviews)
                      </span>
                    </div>

                    <div>
                      <button className="p-1 rounded-full border border-gray-200 transition">
                        <CiHeart className="text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Display Product Details */}
                  <div className="mb-4">
                    <p className="text-sm">
                      <strong>Flower Type: </strong>Red Roses
                    </p>
                    <p className="text-sm">
                      <strong>Color: </strong>Red
                    </p>
                    <p className="text-sm">
                      <strong>Count: </strong>24 Stems
                    </p>
                    <p className="text-sm">
                      <strong>Base: </strong>Glass Vase
                    </p>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-gray-500 mb-4">
                    * Colors may vary slightly due to photographic lighting. The
                    actual product may differ in appearance.
                  </p>
                </div>

                {/* Add to Cart Button */}
                <div className="flex justify-center">
                  <button className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-fit px-4 h-10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <div className="">
              <button
                className="absolute top-0 right-0 shadow-md text-[1c1c1c] hover:bg-black hover:text-white border-r-0 border-t-0 border border-l-[#1c1c1c71] border-b-[#1c1c1c71] p-1 rounded-tr-lg rounded-bl-lg"
                onClick={togglePopup}
              >
                <IoMdClose />
              </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
