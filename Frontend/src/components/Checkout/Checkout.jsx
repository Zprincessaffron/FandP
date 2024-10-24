import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Checkout = () => {
  // Step state
  const [step, setStep] = useState(1);

  // Function to switch between steps
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen bg-white">
        {/* Sidebar with Steps */}
        <div className="w-full lg:w-1/4 bg-[#1c1c1c] text-white pt-[0.01rem] space-y-8 border-b border-t border-t-black ">
          <ul className="space-y-8">
            <li
              className={`flex items-center text-sm p-4 ${
                step == 1 ? "text-black bg-white" : "text-white bg-[#1c1c1c]"
              }`}
            >
              <div
                className={`px-[0.4rem] border rounded-full ${
                  step == 1 ? "border-black" : "border-white"
                }`}
              >
                <span>1</span>
              </div>
              <span className="ml-4 text-sm uppercase tracking-widest font-medium">
                Delivery Address
              </span>
            </li>

            <li
              className={`flex items-center text-sm p-4 ${
                step == 2 ? "text-black bg-white" : "text-white bg-[#1c1c1c]"
              }`}
            >
              <div
                className={`px-[0.4rem] border rounded-full ${
                  step == 2 ? "border-black" : "border-white"
                }`}
              >
                <span>2</span>
              </div>
              <span className="ml-4 text-md uppercase tracking-widest font-medium">
                Special Notes
              </span>
            </li>

            <li
              className={`flex items-center text-sm p-4 ${
                step == 3 ? "text-black bg-white" : "text-white bg-[#1c1c1c]"
              }`}
            >
              <div
                className={`px-[0.4rem] border rounded-full ${
                  step == 3 ? "border-black" : "border-white"
                }`}
              >
                <span>3</span>
              </div>
              <span className="ml-4 text-md uppercase tracking-widest font-medium">
                Payment & Order Summary
              </span>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-3/4 px-12 py-2 space-y-12">
          <div>
            <h1 className="text-3xl font-medium uppercase tracking-widest text-black mb-2">
              Checkout
            </h1>
            <h2 className="text-md font-normal tracking-wider text-black">
              Welcome <strong>Gokul</strong> , Let us know where to deliver
            </h2>
          </div>

          {/* Step 1: Delivery Address */}
          {step === 1 && (
            <form className="space-y-8 text-sm">
              <div className="flex space-x-4">
                <select className="border border-black p-3 rounded w-1/4 bg-transparent text-black">
                  <option>Title</option>
                  <option>Mr</option>
                  <option>Ms</option>
                  <option>Mrs</option>
                </select>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-black p-3 rounded w-3/4 bg-transparent text-black"
                />
              </div>
              <textarea
                placeholder="Full Address"
                className="border border-black p-3 rounded w-full bg-transparent text-black h-32"
              ></textarea>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Pincode"
                  className="border border-black p-3 rounded w-1/3 bg-transparent text-black"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-black p-3 rounded w-1/3 bg-transparent text-black"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-black p-3 rounded w-1/3 bg-transparent text-black"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={nextStep}
                  className="bg-white border border-black text-black p-3 text-md tracking-widest hover:bg-[#1c1c1c] hover:text-white w-1/4 transition duration-300"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Special Notes */}
          {step === 2 && (
            <form className="space-y-8 text-sm">
              <h2 className="text-xl font-normal tracking-wider uppercase text-black">
                Special Notes
              </h2>
              <textarea
                placeholder="Add any special instructions for delivery"
                className="border border-black p-3 rounded w-full bg-transparent text-black h-32"
              ></textarea>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="bg-white border border-black text-black p-3 text-md tracking-widest hover:bg-[#1c1c1c] hover:text-white w-1/4 transition duration-300"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-white border border-black text-black p-3 text-md tracking-widest hover:bg-[#1c1c1c] hover:text-white w-1/4 transition duration-300"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Payment & Order Summary */}
          {step === 3 && (
            <div className="space-y-8">
              <h2 className="text-xl font-normal tracking-wider uppercase text-black">
                Payment & Order Summary
              </h2>

              {/* Order Details */}
              <div className="border tracking-wider border-gray-300 p-4 space-y-4 ">
                <h3 className="font-normal text-lg text-black border-b pb-2">
                  Order Details
                </h3>

                {/* Product 1 */}
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="text-black font-medium">Product 1</p>
                    <p className="text-gray-500 text-sm">
                      Add-on: Alchemist Book
                    </p>
                  </div>
                  <p className="text-black font-medium">₹2000</p>
                </div>

                {/* Product 2 */}
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="text-black font-medium">Product 2</p>
                    <p className="text-gray-500 text-sm">Add-on: Gift Card</p>
                  </div>
                  <p className="text-black font-medium">₹5000</p>
                </div>

                {/* Add any other product details or add-ons in similar format */}

                {/* Total */}
                <div className="flex justify-between items-center pt-3">
                  <p className="text-black font-semibold text-lg">Total:</p>
                  <p className="text-black font-medium text-lg">₹7000</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="border border-gray-300 p-4 space-y-4 tracking-wider">
                <h3 className="font-normal text-lg text-black border-b pb-2">
                  Choose Payment Method
                </h3>
                <select className="border border-black p-3 rounded w-full text-sm bg-white text-black">
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>UPI</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between text-sm">
                <button
                  onClick={prevStep}
                  className="bg-white border border-black text-black p-3 text-md tracking-widest hover:bg-[#1c1c1c] hover:text-white w-1/4 transition duration-300"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-white border border-black text-black p-3 text-md tracking-widest hover:bg-[#1c1c1c] hover:text-white w-1/4 transition duration-300"
                >
                  Complete Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
