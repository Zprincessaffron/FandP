import React from 'react';

const features = [
  {
    id: 1,
    title: 'Flowers',
    image: 'https://via.placeholder.com/150/FFB3BA/FFFFFF?text=Flower', // Example image
  },
  {
    id: 2,
    title: 'Indoor Plants',
    image: 'https://via.placeholder.com/150/FFDFBA/FFFFFF?text=Indoor+Plants', // Example image
  },
  {
    id: 3,
    title: 'Outdoor Plants',
    image: 'https://via.placeholder.com/150/BAFFD6/FFFFFF?text=Outdoor+Plants', // Example image
  },
  {
    id: 4,
    title: 'Combos',
    image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Combos', // Example image
  },
  {
    id: 5,
    title: 'Gift',
    image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Gift', // Example image
  },
];

const Feature = () => {
  return (
    <div className="py-10 mb-20">
      <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-12">Our Features</h2>
      <div className="flex justify-center space-x-20 ">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center ">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-30 h-30 object-cover mb-5 rounded-2xl" // Adjust size as needed
            />
            <p className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-[90%] h-7 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-in hover:duration-300">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
