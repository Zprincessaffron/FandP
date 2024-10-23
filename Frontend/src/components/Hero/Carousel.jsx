import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      content: 'This is the content for slide 1.',
      color: '#FFB3BA', // Pastel color for Slide 1
    },
    {
      id: 2,
      title: 'Slide 2',
      content: 'This is the content for slide 2.',
      color: '#FFDFBA', // Pastel color for Slide 2
    },
    {
      id: 3,
      title: 'Slide 3',
      content: 'This is the content for slide 3.',
      color: '#BAFFD6', // Pastel color for Slide 3
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-[90%] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: slide.color }} // Set pastel background color
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">{slide.title}</h2>
            <p className="mt-2 text-lg">{slide.content}</p>
          </div>
        </div>
      ))}
      {/* Dotted Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-500 ease-in-out ${
              index === currentSlide 
                ? 'bg-white w-5' 
                : 'bg-gray-400'
            }`}
            style={{
              transitionDelay: `${index * 100}ms`, // Stagger the transition
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
