import React from 'react';

const flowerTypes = [
  {
    id: 1,
    title: 'Roses',
    color: '#FFB3BA', // Light red/pink color for roses
  },
  {
    id: 2,
    title: 'Lilies',
    color: '#FFDFBA', // Light orange color for lilies
  },
  {
    id: 3,
    title: 'Tulips',
    color: '#BAFFD6', // Light green color for tulips
  },
  {
    id: 4,
    title: 'Orchids',
    color: '#33FF57', // Green color for orchids
  },
  {
    id: 5,
    title: 'Sunflowers',
    color: '#FFD700', // Yellow color for sunflowers
  },
];

const FlowerTypes = () => {
  return (
    <div className="py-10 mb-10">
      <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-2">Flower Types</h2>
      <p className='text-center text-sm font-normal tracking-wider mb-12 text-gray-400'>Discover the Everlasting Elegance of Flowers</p>
      <div className="flex justify-center space-x-20">
        {flowerTypes.map((flower) => (
          <div key={flower.id} className="flex flex-col items-center">
            <div
              style={{ backgroundColor: flower.color }}
              className="w-32 h-32 mb-5 rounded-2xl flex items-center justify-center"
            >
              {/* You can add optional text or icons here */}
            </div>
            <p className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-[90%] h-7 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in">
              {flower.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerTypes;
