import React from 'react';

const plantTypes = [
  {
    id: 1,
    title: 'Ferns',
    color: '#9ACD32', // Light green color for ferns
  },
  {
    id: 2,
    title: 'Succulents',
    color: '#98FF98', // Soft green color for succulents
  },
  {
    id: 3,
    title: 'Cacti',
    color: '#E1FFB1', // Pale green color for cacti
  },
  {
    id: 4,
    title: 'Bamboo',
    color: '#A3C1AD', // Light bamboo green color
  },
  {
    id: 5,
    title: 'Palm Trees',
    color: '#DEB887', // Light brown color for palm trees
  },
];

const PlantTypes = () => {
  return (
    <div className="py-10 mb-10">
      <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-2">Plant Types</h2>
      <p className='text-center text-sm font-normal tracking-wider mb-12 text-gray-400'>Discover a Variety of Plants</p>
      <div className="flex justify-center space-x-20">
        {plantTypes.map((plant) => (
          <div key={plant.id} className="flex flex-col items-center">
            <div
              style={{ backgroundColor: plant.color }}
              className="w-32 h-32 mb-5 rounded-2xl flex items-center justify-center"
            >
              {/* You can add optional text or icons here */}
            </div>
            <p className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-[90%] h-7 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in">
              {plant.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantTypes;
