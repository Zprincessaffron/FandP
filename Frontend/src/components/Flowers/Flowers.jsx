import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import FlowerTypes from "./FlowerTypes";
import { AiOutlineDown } from "react-icons/ai";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import SpecialFlowers from "./SpecialFlowers";

const Flowers = () => {
  // State to handle dropdown visibility
  const [flowerTypeOpen, setFlowerTypeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [arrangementOpen, setArrangementOpen] = useState(false);
  const [stemsOpen, setStemsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-10">
        <Navbar />
      </div>
      <div className="mt-[146px]"></div>
      <Hero />
      <FlowerTypes />

      <div className="flex flex-col md:flex-row p-4">
        {/* Filter Section */}
        <div className="md:w-[25%] p-4 border mb-8 md:mb-0 sticky top-40 h-fit overflow-auto">
          <h2 className="text-xl font-medium tracking-widest uppercase mb-4">
            Filters
          </h2>
          <hr className="mb-5 border-t-1px border-[#1c1c1ce1]" />
          <div className="flex flex-col space-y-3">
            {/* Flower Type Filter */}
            <div>
              <h3
                className="text-md font-normal mb-2 cursor-pointer flex justify-between items-center tracking-wider hover:text-gray-700"
                onClick={() => setFlowerTypeOpen(!flowerTypeOpen)}
              >
                <span className="">Flower Type</span>
                <button className="flex items-center font-semibold">
                  <AiOutlineDown
                    className={`${
                      flowerTypeOpen
                        ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                        : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                    }`}
                  />
                </button>
              </h3>
              {flowerTypeOpen && (
                <div className="flex flex-col space-y-2 tracking-wider text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Roses
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Lilies
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Tulips
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Orchids
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Sunflowers
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
            <div>
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
                  <div className="w-8 h-8 rounded-full bg-red-500"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                  <div className="w-8 h-8 rounded-full bg-pink-500"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                </div>
              )}
            </div>
            <hr />

            {/* Arrangements Filter */}
            <div>
              <h3
                className="text-md font-normal mb-2 cursor-pointer flex justify-between items-center tracking-wider hover:text-gray-700"
                onClick={() => setArrangementOpen(!arrangementOpen)}
              >
                <span className="">Arrangements</span>
                <AiOutlineDown
                  className={`${
                    arrangementOpen
                      ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                      : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                  }`}
                />
              </h3>
              {arrangementOpen && (
                <div className="flex flex-col space-y-2 tracking-wider text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Bouquets
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Vase Arrangements
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Basket
                    Arrangements
                  </label>
                </div>
              )}
            </div>
            <hr />

            {/* Stems Filter */}
            <div>
              <h3
                className="text-md font-normal mb-2 cursor-pointer flex justify-between items-center tracking-wider hover:text-gray-700"
                onClick={() => setStemsOpen(!stemsOpen)}
              >
                <span className="">Stems</span>
                <AiOutlineDown
                  className={`${
                    stemsOpen
                      ? "ml-2 h-2 w-2 text-black rotate-180 transition-transform"
                      : "ml-2 h-2 w-2 text-black rotate-0 transition-transform"
                  }`}
                />
              </h3>
              {stemsOpen && (
                <div className="flex flex-col space-y-2 tracking-wider text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 6
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 12
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
        <SpecialFlowers/>
      </div>

      <Footer/>
    </>
  );
};

export default Flowers;
