import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/About/AboutSection";
import EyeshadowSection from "./components/Eyeshadow/EyeshadowSection";
import PencilSection from "./components/Pencil/PencilSection";
import LipstickSection from "./components/Lipstick/LipstickSection";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import FAQSection from "./components/FAQ/FAQSection";
import FindMoreSection from "./components/FindMore/FindMoreSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section
          id="home"
          className="relative bg-gradient-to-br from-pink-200 via-pink-100 to-white py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FontAwesomeIcon
                  icon={faShop}
                  className="text-pink-600 text-5xl"
                />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-pink-700">
                  Glowee
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover beauty that radiates from within. Premium cosmetics
                crafted for every shade, every style, every you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#eyeshadow"
                  className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Shop Now
                </a>
                <a
                  href="#about"
                  className="bg-white text-pink-700 border-2 border-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <EyeshadowSection />
        <PencilSection />
        <LipstickSection />
        <TestimonialsSection />
        <FAQSection />
        <FindMoreSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
