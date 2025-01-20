"use client";

import { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { testimonials } from '@/data'

import SectionTitle from '../SectionTitle'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };


  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const deltaX = touchStartX.current - touchEndX.current;

    // Swipe threshold to determine direction
    if (deltaX > 50) {
      nextSlide(); // Swipe left
    } else if (deltaX < -50) {
      prevSlide(); // Swipe right
    }

    // Reset touch references
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="container mx-auto px-6 py-20 overflow-hidden"
    >
      <SectionTitle title="Testimonials" />

      <div
        className="relative flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Wrapper */}
        <div
          className="flex w-full lg:w-3/4 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-2"
              style={{ flexBasis: "100%" }}
            >
              <div className="bg-gray-800 border-2 border-amber-400 p-8 rounded-lg">
                <p className="text-white text-lg italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <h3 className="text-yellow-400 font-semibold text-xl mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 mb-4">{testimonial.title}</p>
                <a
                  href={testimonial.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline"
                >
                  View Source
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full text-gray-800 hover:bg-yellow-500 focus:outline-none"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full text-gray-800 hover:bg-yellow-500 focus:outline-none"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-yellow-400" : "bg-gray-500"
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
