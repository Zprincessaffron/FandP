import React from 'react'

const specialFlowers = [
  {
    id: 1,
    title: 'Bouquets',
    image: 'https://via.placeholder.com/150/FFB3BA/FFFFFF?text=Bouquets',
  },
  {
    id: 2,
    title: 'Vase',
    image: 'https://via.placeholder.com/150/FFDFBA/FFFFFF?text=Vase',
  },
  {
    id: 3,
    title: 'Basket',
    image: 'https://via.placeholder.com/150/BAFFD6/FFFFFF?text=Basket',
  }
];

const SpecialFlowers = () => {
  return (
    <div className="pb-10 my-10">
      <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-2">Shop By Special Flowers</h2>
      <p className='text-center text-sm font-normal tracking-wider mb-12 text-gray-400'>Flowers With Different Arrangements</p>
      <div className="grid grid-cols-3 gap-10 justify-center">
        {specialFlowers.map((specialFlower) => (
          <div key={specialFlower.id} className="flex flex-col items-center border border-gray-200 shadow-lg m-4 rounded-sm">
            <img
              src={specialFlower.image}
              alt={specialFlower.title}
              style={{ width: '300px', height: '300px' }} // Set fixed size using inline styles
              className="object-cover mb-5 rounded-t-full mt-3 hover:rounded-full transition-all duration-300 ease-out shadow-lg"
            />
            <p className="text-[0.7rem] text-center uppercase tracking-widest border border-black w-fit px-2 h-7 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">
              {specialFlower.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialFlowers;
