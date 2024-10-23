import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const BestSelling = () => {
  return (
    <div className="py-10 px-5">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className=''>
        <h2 className="text-2xl font-medium uppercase tracking-widest mb-2">Best Selling Flowers and Plants</h2>
        <p className='text-sm font-normal tracking-wider mb-12 text-gray-400'>
          Buy and Surprise your Loved ones
        </p>
        </div>
        
        <button className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-fit px-4 h-10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">View All</button>
      </div>

      {/* Product Cards in a 4x4 grid */}
      <div className="grid grid-cols-3 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSelling;
