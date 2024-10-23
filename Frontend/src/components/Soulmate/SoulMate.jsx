import React from 'react';

const soulmateOccasions = [
  {
    id: 1,
    title: 'For Him',
    image: 'https://via.placeholder.com/300/FFB3BA/FFFFFF?text=For+Him',
  },
  {
    id: 2,
    title: 'For Her',
    image: 'https://via.placeholder.com/300/FFDFBA/FFFFFF?text=For+Her',
  },
];

const SoulMate = () => {
  return (
    <div className="pb-10 ">
      <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-2">Shop for Your Soul Mate</h2>
      <p className='text-center text-sm font-normal tracking-wider mb-12 text-gray-400'>Gift Something Special</p>
      <div className="grid grid-cols-2 gap-10 justify-center">
        {soulmateOccasions.map((occasion) => (
          <div key={occasion.id} className="flex flex-col items-center border border-gray-200 shadow-lg m-4 rounded-sm">
            <img
              src={occasion.image}
              alt={occasion.title}
              style={{ width: '500px', height: '300px' }} // Set fixed size using inline styles
              className="object-cover mb-5 rounded-lg mt-3 hover:rounded-[50px] transition-all duration-300 ease-out shadow-lg"
            />
            <p className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-fit px-2 h-7 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">
              {occasion.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoulMate;
