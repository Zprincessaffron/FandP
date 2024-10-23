import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import path for Navigation
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// Sample top review data
const topReviews = [
  {
    name: "John Doe",
    review: "Amazing quality! This product exceeded my expectations.",
    rating: 5,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    review: "Very happy with my purchase. Excellent customer service!",
    rating: 4,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Robert Brown",
    review: "Great value for money. Will definitely recommend.",
    rating: 5,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Emily Johnson",
    review: "Fast delivery and great quality product.",
    rating: 4,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Lee",
    review: "A must-have product for every kitchen!",
    rating: 5,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah Williams",
    review: "I'm very satisfied with the purchase.",
    rating: 5,
    image: "https://via.placeholder.com/100",
  },
];

const TopReviews = () => {
  return (
    <div className="py-8 bg-gray-50 px-5">
      <div className="mb-12">
        <h2 className="text-2xl font-medium uppercase tracking-widest">
          What Our Customer Says
        </h2>
        {/* Tagline added here */}
        <p className="text-sm font-normal tracking-wider mt-2 text-gray-400">
          Hear directly from our satisfied customers!
        </p>
      </div>

      <Swiper
        modules={[Navigation]} // Ensure Navigation is included in modules
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={(swiper) => {
          const slides = swiper.slides;
          slides.forEach((slide, index) => {
            // Reset all slides to scale down
            slide.style.transform = "scale(0.9)";
            slide.style.transition = "transform 0.3s ease"; // Add transition for smooth scaling
          });
          // Scale up the active slide
          const activeSlide = slides[swiper.activeIndex + 1];
          activeSlide.style.transform = "scale(1)";
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {topReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 rounded-lg bg-white flex flex-col items-center justify-center h-[220px] border border-[#1c1c1c45]">
              {/* Reviewer Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              {/* Review Content */}
              <p className="text-lg font-semibold mb-2 tracking-wider">{review.name}</p>
              <p className="text-gray-700 text-center mb-4 text-sm">{review.review}</p>
              {/* Rating (Stars) */}
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Navigation Buttons */}
        <div className="swiper-button-prev text-black h-5"></div>
        <div className="swiper-button-next text-black"></div>
      </Swiper>
    </div>
  );
};

export default TopReviews;
