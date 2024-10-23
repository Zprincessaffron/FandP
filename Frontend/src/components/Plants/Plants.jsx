import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { AiOutlineDown } from "react-icons/ai";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import PlantTypes from "./PlantTypes";
import InOrOut from "./InOrOut";

const Plants = () => {
  // State to handle dropdown visibility
  const [plantTypeOpen, setPlantTypeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  // const [colorOpen, setColorOpen] = useState(false);
  const [sunlightOpen, setSunlightOpen] = useState(false);
  const [wateringOpen, setWateringOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-10">
        <Navbar />
      </div>
      <div className="mt-[146px]">
        {" "}
        <Hero />
      </div>
      <PlantTypes />

      <div className="flex flex-col md:flex-row p-4">
        {/* Filter Section */}
        <div className="md:w-[25%] p-4 border mb-8 md:mb-0 sticky top-40 h-fit overflow-auto">
          <h2 className="text-xl font-medium tracking-widest uppercase mb-4">
            Filters
          </h2>
          <hr className="mb-5 border-t-1px border-[#1c1c1ce1]" />
          <div className="flex flex-col space-y-3">
            {/* Plant Type Filter */}
            <div>
              <h3
                className="text-md font-normal mb-2 cursor-pointer flex justify-between items-center tracking-wider hover:text-gray-700"
                onClick={() => setPlantTypeOpen(!plantTypeOpen)}
              >
                <span className="">Plant Type</span>
                <button className="flex items-center font-semibold">
                  <AiOutlineDown
                    className={`${
                      plantTypeOpen
                        ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                        : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                    }`}
                  />
                </button>
              </h3>
              {plantTypeOpen && (
                <div className="flex flex-col space-y-2 tracking-wider text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Succulents
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Ferns
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Cacti
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Flowering Plants
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Trees
                  </label>
                </div>
              )}
            </div>
            <hr />

            {/* Price Filter */}
            <div>
              <h3
                className="text-md font-normal mb-2 cursor-pointer flex justify-between items-center tracking-wider hover:text-gray-700"
                onClick={() => setPriceOpen(!priceOpen)}
              >
                <span className="">Price</span>
                <AiOutlineDown
                  className={`${
                    priceOpen
                      ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                      : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                  }`}
                />
              </h3>
              {priceOpen && (
                <>
                  <input type="range" min="0" max="5000" className="w-full" />
                  <div className="text-sm mt-2 tracking-wider">₹0 - ₹5000</div>
                </>
              )}
            </div>
            <hr />

            {/* Color Filter */}
            {/* <div>
        <h3
          className="text-md font-normal mb-2 cursor-pointer flex justify-between items-center tracking-wider hover:text-gray-700"
          onClick={() => setColorOpen(!colorOpen)}
        >
          <span className="">Color</span>
          <AiOutlineDown
            className={`${
              colorOpen
                ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
            }`}
          />
        </h3>
        {colorOpen && (
          <div className="flex space-x-2 tracking-wider">
            <div className="w-8 h-8 rounded-full bg-green-500"></div>
            <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
            <div className="w-8 h-8 rounded-full bg-red-500"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500"></div>
          </div>
        )}
      </div>
      <hr /> */}

            {/* Sunlight Requirement Filter */}
            <div>
              <h3
                className="text-md font-normal mb-2 cursor-pointer flex justify-between items-center tracking-wider hover:text-gray-700"
                onClick={() => setSunlightOpen(!sunlightOpen)}
              >
                <span className="">Sunlight Requirement</span>
                <AiOutlineDown
                  className={`${
                    sunlightOpen
                      ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                      : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                  }`}
                />
              </h3>
              {sunlightOpen && (
                <div className="flex flex-col space-y-2 tracking-wider text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Full Sun
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Partial Sun
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Shade
                  </label>
                </div>
              )}
            </div>
            <hr />

            {/* Watering Frequency Filter */}
            <div>
              <h3
                className="text-md font-normal mb-2 cursor-pointer flex justify-between items-center tracking-wider hover:text-gray-700"
                onClick={() => setWateringOpen(!wateringOpen)}
              >
                <span className="">Watering Frequency</span>
                <AiOutlineDown
                  className={`${
                    wateringOpen
                      ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                      : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                  }`}
                />
              </h3>
              {wateringOpen && (
                <div className="flex flex-col space-y-2 tracking-wider text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Daily
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Twice a week
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Weekly
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Card Section */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-3 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex justify-center">
            <button className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-fit px-4 h-10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">
              View All
            </button>
          </div>
        </div>
      </div>

      <div>
        <InOrOut/>
      </div>

      <Footer />
    </>
  );
};

export default Plants;
