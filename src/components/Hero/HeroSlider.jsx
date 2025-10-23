import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HeroSlider = () => {
  const images = [
    "/imgs/hero/hero-1.webp",
    "/imgs/hero/hero-2.webp",
    "/imgs/hero/hero-3.webp",
    "/imgs/hero/hero-4.webp",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual slide
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <section
      id="home"
      className="relative w-full h-[92vh] overflow-hidden bg-linear-0 from-[#FFD9E6] via-[#FFE9F2] to-white"
    >
      {/* Slides */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${img})` }}
          >
            {index === current && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40 backdrop-blur-sm px-6">
                {/* Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-[#FFC3DC] via-rose-400 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
                  Glowee
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed text-gray-100">
                  Unveil your inner radiance. Premium cosmetics designed to
                  enhance every tone, every moment, every you.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#eyeshadow"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold text-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <span className="relative z-10">Shop Now</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-rose-400 via-[#FFF5F9]0 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                  </a>

                  <a
                    href="#about"
                    className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold text-lg border-2 border-[#FFA8CD] text-white hover:text-[#FFE9F2] hover:bg-[#FFF5F9]0/20 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>

                {/* Decorative shimmer line */}
                <div className="mt-10 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#FFA8CD] to-transparent animate-pulse"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-pink-700 rounded-full p-3 shadow-md transition"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-pink-700 rounded-full p-3 shadow-md transition"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-pink-600" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
