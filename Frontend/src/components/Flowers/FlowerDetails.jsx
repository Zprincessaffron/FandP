import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard";

const FlowerDetails = () => {
  // Active image state for the gallery
  const [activeImage, setActiveImage] = useState(
    "https://via.placeholder.com/500"
  );

  const images = [
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/500/FF0000",
    "https://via.placeholder.com/500/00FF00",
    "https://via.placeholder.com/500/0000FF",
  ];

  return (
    <>
      {/* <div className="fixed top-0 right-0 left-0 z-10"> */}
        <Navbar />
      {/* </div> */}
      {/* mt-[146px] px-5 py-5 */}
      <div className="">
        <div className="flex justify-between space-x-8 p-4">
          {/* Left: Image Gallery */}
          <div className="w-1/2 sticky top-0 self-start">
            <div className="w-full h-[450px]">
              <img
                src={activeImage}
                alt="Main product"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Thumbnail Images */}
            <div className="flex space-x-2 mt-4 justify-center">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover cursor-pointer ${
                    activeImage === image ? "border-2 border-yellow-500" : ""
                  }`}
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-1/2">
            {/* Product Title and Pricing */}
            <h1 className="text-xl font-semibold mb-2 uppercase tracking-widest">
              Love in the Moonlight
            </h1>
            <p className="text-yellow-600 mb-4 text-xs">
              ⭐⭐⭐⭐⭐ 229 ratings • 41 reviews
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xl font-medium">₹1,350.00</span>
              <span className="text-xl line-through text-gray-500">
                ₹1,599.00
              </span>
            </div>

            {/* Date and Time Selection */}
            <div className="border-t border-b py-4 space-y-4">
              <div>
                <h3 className="font-normal mb-2 tracking-widest text-sm">Select Date</h3>
                <div className="grid grid-cols-3 tracking-wider text-xs font-medium ">
                  <button className="border px-10 py-2">Today, 17 Oct</button>
                  <button className="border px-10 py-2">Tomorrow, 18 Oct</button>
                  <button className="border px-10 py-2">Select Date</button>
                </div>
              </div>
              <div>
                <h3 className="font-normal mb-2 tracking-widest text-sm">Select Time</h3>
                <select className="border w-full px-4 py-2 tracking-wider text-xs font-medium">
                  <option>Select Time Slot</option>
                  <option>9am - 1pm</option>
                  <option>11am - 3pm</option>
                  <option>1pm - 5pm</option>
                  <option>3pm - 7pm</option>
                  <option>5pm - 9pm</option>
                  <option>7pm - 11pm</option>
                </select>
              </div>
            </div>

            {/* Extra Gifts and Chocolates */}
            <div className="mt-5">
              <h3 className="font-normal mb-4 tracking-widest text-sm">Make it extra special</h3>
              <div className="flex space-x-4">
                <button className="border-b-2 border-yellow-500 pb-2 tracking-wider text-xs font-medium">
                  Gifts
                </button>
                <button className="pb-2 tracking-wider text-xs font-medium">Book</button>
              </div>

              {/* Gifts Section */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="border p-2 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/100" alt="Gift 1" />
                  <p className="tracking-wider text-xs mt-2">Birthday Placard</p>
                  <p className="tracking-wider text-xs text-center font-semibold">₹145</p>
                  <button className="w-full border mt-2 py-1 text-xs tracking-widest">ADD</button>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/100" alt="Gift 1" />
                  <p className="tracking-wider text-xs mt-2">Anniversary card</p>
                  <p className="tracking-wider text-xs text-center font-semibold">₹145</p>
                  <button className="w-full border mt-2 py-1 text-xs tracking-widest">ADD</button>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/100" alt="Gift 1" />
                  <p className="tracking-wider text-xs mt-2">Birthday Placard</p>
                  <p className="tracking-wider text-xs text-center font-semibold">₹145</p>
                  <button className="w-full border mt-2 py-1 text-xs tracking-widest">ADD</button>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/100" alt="Gift 1" />
                  <p className="tracking-wider text-xs mt-2">Anniversary card</p>
                  <p className="tracking-wider text-xs text-center font-semibold">₹145</p>
                  <button className="w-full border mt-2 py-1 text-xs tracking-widest">ADD</button>
                </div>
                {/* Add more gift items similarly */}
              </div>

              {/* Books Section */}
              <div className="grid grid-cols-4 gap-4 my-4">
              <div className="border p-2 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/100" alt="Gift 1" />
                  <p className="tracking-wider text-xs mt-2">Alchemist</p>
                  <p className="tracking-wider text-xs text-center font-semibold">₹145</p>
                  <button className="w-full border mt-2 py-1 text-xs tracking-widest">ADD</button>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/100" alt="Gift 1" />
                  <p className="tracking-wider text-xs mt-2">Atomic Habits</p>
                  <p className="tracking-wider text-xs text-center font-semibold">₹145</p>
                  <button className="w-full border mt-2 py-1 text-xs tracking-widest">ADD</button>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/100" alt="Gift 1" />
                  <p className="tracking-wider text-xs mt-2">Ikigai</p>
                  <p className="tracking-wider text-xs text-center font-semibold">₹145</p>
                  <button className="w-full border mt-2 py-1 text-xs tracking-widest">ADD</button>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/100" alt="Gift 1" />
                  <p className="tracking-wider text-xs mt-2">Ponniyin selvan</p>
                  <p className="tracking-wider text-xs text-center font-semibold">₹145</p>
                  <button className="w-full border mt-2 py-1 text-xs tracking-widest">ADD</button>
                </div>
              </div>

              {/* Description, Product Info Tabs */}
              <div className="border-t border-b py-4 space-y-4">
                <div className="flex space-x-4">
                  <button className="pb-2 border-b-2 border-yellow-500 tracking-widest text-sm">
                    Description
                  </button>
                  <button className="pb-2 tracking-widest text-sm">Product Info</button>
                  <button className="pb-2 tracking-widest text-sm">More Info</button>
                </div>
                <div className="mt-4 text-xs tracking-wider">
                  <p>
                    Exclusively crafted for timeless romance, celebrate love
                    with deep purple roses, purple alstroemeria and the
                    'Moonlight Garden' candle and diffuser, elegantly presented
                    in an English garden basket with gold and pink tissue
                    ribbons.
                  </p>
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="mt-4">
                <h3 className="font-normal tracking-widest">Reviews (41)</h3>
                <div className="mt-4">
                  <div className="border-b py-4">
                    <p className="font-normal tracking-wide text-sm">Abhinav</p>
                    <p className="text-gray-500 text-xs">
                      Chennai • 14-04-2024
                    </p>
                    <p className="mt-2 text-sm tracking-wider">
                      Great work by the delivery agent, they ensured everything
                      was perfect!
                    </p>
                  </div>
                  <div className="border-b py-4">
                    <p className="font-normal tracking-wide text-sm">Romansha</p>
                    <p className="text-gray-500 text-xs">
                        Chennai • 13-04-2024
                    </p>
                    <p className="mt-2 text-sm tracking-wider">
                        Delivery was on time, and everything went smoothly!
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="mt-4 text-[0.7rem] text-center uppercase tracking-widest text-yellow-500 border-b border-yellow-500 w-fit pb-1 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in mb-3">Load More</button>
                </div>

                <div className="flex justify-around gap-2">
                  <button className="w-1/2 mt-4 text-[0.7rem] text-center uppercase tracking-widest border border-black px-4 h-10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">Add ons</button>
                  <button className="mt-4 text-[0.7rem] text-center uppercase tracking-widest border border-black w-1/2 px-4 h-10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended For You Section */}
        <div className="mt-10">
          <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-12">Recommended For You</h2>
          <div className="grid grid-cols-3 gap-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>  
      </div>

      <Footer/>
    </>
  );
};

export default FlowerDetails;
