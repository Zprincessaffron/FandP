import React from 'react';

const inorout = [
  {
    id: 1,
    title: 'Indoor Plants',
    image: 'https://via.placeholder.com/300/FFB3BA/FFFFFF?text=Indoor+Plants',
  },
  {
    id: 2,
    title: 'Outdoor Plants',
    image: 'https://via.placeholder.com/300/FFDFBA/FFFFFF?text=Outdoor+Plants',
  },
];

const InOrOut = () => {
  return (
    <div className="pb-10 my-10">
      <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-2">Shop by Plant Category</h2>
      <p className='text-center text-sm font-normal tracking-wider mb-12 text-gray-400'>Explore Both the Indoor and Outdoor Plants</p>
      <div className="grid grid-cols-2 gap-10 justify-center">
        {inorout.map((io) => (
          <div key={io.id} className="flex flex-col items-center border border-gray-200 shadow-lg m-4 rounded-sm">
            <img
              src={io.image}
              alt={io.title}
              style={{ width: '500px', height: '300px' }} // Set fixed size using inline styles
              className="object-cover mb-5 rounded-lg mt-3 hover:rounded-[50px] transition-all duration-300 ease-out shadow-lg"
            />
            <p className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-fit px-2 h-7 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">
              {io.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InOrOut;
