import React from 'react';

const occasions = [
  {
    id: 1,
    title: 'Birthday',
    image: 'https://via.placeholder.com/150/FFB3BA/FFFFFF?text=Birthday',
  },
  {
    id: 2,
    title: 'Anniversary',
    image: 'https://via.placeholder.com/150/FFDFBA/FFFFFF?text=Anniversary',
  },
  {
    id: 3,
    title: 'Graduation',
    image: 'https://via.placeholder.com/150/BAFFD6/FFFFFF?text=Graduation',
  },
  {
    id: 4,
    title: 'Thank You',
    image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Thank+You',
  },
  {
    id: 5,
    title: 'Get Well Soon',
    image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Get+Well+Soon',
  },
  {
    id: 6,
    title: 'Housewarming',
    image: 'https://via.placeholder.com/150/FFC300/FFFFFF?text=Housewarming',
  },
];

const Occasion = () => {
  return (
    <div className="pb-10 mb-20">
      <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-2">Shop by Occasions</h2>
      <p className='text-center text-sm font-normal tracking-wider mb-12 text-gray-400'>Surprise your Loved ones</p>
      <div className="grid grid-cols-3 gap-10 justify-center">
        {occasions.map((occasion) => (
          <div key={occasion.id} className="flex flex-col items-center border border-gray-200 shadow-lg m-4 rounded-sm">
            <img
              src={occasion.image}
              alt={occasion.title}
              style={{ width: '300px', height: '300px' }} // Set fixed size using inline styles
              className="object-cover mb-5 rounded-t-full mt-3 hover:rounded-full transition-all duration-300 ease-out shadow-lg"
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

export default Occasion;
