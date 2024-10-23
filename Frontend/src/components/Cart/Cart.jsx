import React from "react";
import Navbar from "../Navbar/Navbar";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"; // For increment/decrement buttons
import { CiHeart, CiTrash } from "react-icons/ci";

const Cart = () => {
  return (
    <>
      {/* <div className="fixed top-0 right-0 left-0 z-10"> */}
        <Navbar />
      {/* </div> */}
      {/* <div className="mt-[146px]"></div> */}

      <div className="py-5">
        <div>
          <h2 className="text-center uppercase font-medium tracking-widest text-[1.3rem]">
            Shopping Cart
          </h2>
        </div>

        {/* Cart Item Section */}
        <div className="px-5 py-4 space-y-6">
          {/* Cart Item */}
          <div className="flex items-center justify-between border p-6 rounded-md shadow-lg">
            {/* Left: Product Image */}
            <div className="flex">
              <div className="w-[150px] h-[150px] flex-shrink-0 relative">
                <img
                  src="https://via.placeholder.com/150"
                  alt="product"
                  className="object-cover w-full h-full"
                />
                {/* Heart Icon */}
                <div className="absolute -bottom-3 -left-3">
                  <button className="p-1 rounded-full border bg-white shadow transition">
                    <CiHeart className="text-gray-500" />
                  </button>
                </div>
                {/* Trash Icon */}
                <div className="absolute -bottom-3 -right-3">
                  <button className="p-1 rounded-full border bg-white shadow transition">
                    <CiTrash className="text-gray-500" />
                  </button>
                </div>
              </div>

              
              <div className="flex justify-between flex-col">
                <div className="ml-4">
                  <h3 className="text-md font-medium">Product Name</h3>
                </div>

                <div className="flex">
                  
                  <div className="w-[100px] h-[100px] ml-10 flex-shrink-0 relative">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="product"
                      className="object-cover w-full h-[80%] mb-1"
                    />

                    <div className="flex items-center justify-center flex-col">
                      <h3 className="text-[0.7rem] tracking-wide">
                        Birthday Card
                      </h3>
                      <p className="text-[0.6rem]">₹200</p>
                    </div>

                    {/* Trash Icon */}
                    <div className="absolute -top-3 -right-3">
                      <button className="p-[0.15rem] rounded-full border bg-white shadow transition">
                        <CiTrash className="text-gray-500" size={13} />
                      </button>
                    </div>
                  </div>

                  <div className="w-[100px] h-[100px] ml-10 flex-shrink-0 relative">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="product"
                      className="object-cover w-full h-[80%] mb-1"
                    />

                    <div className="flex items-center justify-center flex-col">
                      <h3 className="text-[0.7rem] tracking-wide">
                        Birthday Card
                      </h3>
                      <p className="text-[0.6rem]">₹200</p>
                    </div>

                    {/* Trash Icon */}
                    <div className="absolute -top-3 -right-3">
                      <button className="p-[0.15rem] rounded-full border bg-white shadow transition">
                        <CiTrash className="text-gray-500" size={13} />
                      </button>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>

            {/* Center: Delivery Message */}
            <div className="text-xs tracking-wider">
              <h3>
                On 25th Oct 2024 between 5pm - 9pm
              </h3>
            </div>

            {/* Right: Price, Quantity Controls */}
            <div className="flex items-center flex-col justify-between space-x-4 h-36">
              <div className="text-lg font-medium">₹500</div>
              <div className="flex items-center border px-2 py-1 rounded">
                <button className="text-xl">
                  <AiOutlineMinus />
                </button>
                <div className="px-4">1</div>
                <button className="text-xl">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>

          {/* Add more cart items as needed */}
          <div className="flex items-center justify-between border p-6 rounded-md shadow-lg">
            {/* Left: Product Image */}
            <div className="flex">
              <div className="w-[150px] h-[150px] flex-shrink-0 relative">
                <img
                  src="https://via.placeholder.com/150"
                  alt="product"
                  className="object-cover w-full h-full"
                />
                {/* Heart Icon */}
                <div className="absolute -bottom-3 -left-3">
                  <button className="p-1 rounded-full border bg-white shadow transition">
                    <CiHeart className="text-gray-500" />
                  </button>
                </div>
                {/* Trash Icon */}
                <div className="absolute -bottom-3 -right-3">
                  <button className="p-1 rounded-full border bg-white shadow transition">
                    <CiTrash className="text-gray-500" />
                  </button>
                </div>
              </div>

              
              <div className="flex justify-between flex-col">
                <div className="ml-4">
                  <h3 className="text-md font-medium">Product Name</h3>
                </div>

                <div className="flex">
                  
                  <div className="w-[100px] h-[100px] ml-10 flex-shrink-0 relative">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="product"
                      className="object-cover w-full h-[80%] mb-1"
                    />

                    <div className="flex items-center justify-center flex-col">
                      <h3 className="text-[0.7rem] tracking-wide">
                        Birthday Card
                      </h3>
                      <p className="text-[0.6rem]">₹200</p>
                    </div>

                    {/* Trash Icon */}
                    <div className="absolute -top-3 -right-3">
                      <button className="p-[0.15rem] rounded-full border bg-white shadow transition">
                        <CiTrash className="text-gray-500" size={13} />
                      </button>
                    </div>
                  </div>

                  <div className="w-[100px] h-[100px] ml-10 flex-shrink-0 relative">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="product"
                      className="object-cover w-full h-[80%] mb-1"
                    />

                    <div className="flex items-center justify-center flex-col">
                      <h3 className="text-[0.7rem] tracking-wide">
                        Birthday Card
                      </h3>
                      <p className="text-[0.6rem]">₹200</p>
                    </div>

                    {/* Trash Icon */}
                    <div className="absolute -top-3 -right-3">
                      <button className="p-[0.15rem] rounded-full border bg-white shadow transition">
                        <CiTrash className="text-gray-500" size={13} />
                      </button>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>

            {/* Center: Delivery Message */}
            <div className="text-xs tracking-wider">
              <h3>
                On 25th Oct 2024 between 5pm - 9pm
              </h3>
            </div>

            {/* Right: Price, Quantity Controls */}
            <div className="flex items-center flex-col justify-between space-x-4 h-36">
              <div className="text-lg font-medium">₹750</div>
              <div className="flex items-center border px-2 py-1 rounded">
                <button className="text-xl">
                  <AiOutlineMinus />
                </button>
                <div className="px-4">1</div>
                <button className="text-xl">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Summary / Checkout Button */}
        
        <div className="flex justify-between fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          
          <div className="uppercase text-xs tracking-widest space-y-2 flex items-center justify-center flex-col">
            <h3>Product : 2</h3>
            <h3>Add-ons : 4</h3>
          </div>

          <div className="space-y-5 flex items-center justify-center flex-col">
          <h3>Total : ₹1250</h3>
          <button className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-fit px-4 h-10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">
            Checkout
          </button>

          </div>
          
        </div>
        <div className="mb-[146px]"></div>
      </div>
    </>
  );
};

export default Cart;
