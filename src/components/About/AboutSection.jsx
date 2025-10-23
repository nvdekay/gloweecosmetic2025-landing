import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
              Welcome to Glowee
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Glowee is your destination for high-quality, affordable cosmetics
              that celebrate your natural beauty. We believe everyone deserves
              to feel confident and radiant.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Our carefully curated collection features vibrant eyeshadow
              palettes, precision eyeliners, and luxurious lipsticks—all crafted
              with love and designed to enhance your unique glow.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Join thousands of beauty enthusiasts who trust Glowee for their
              everyday makeup needs. Let's glow together!
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/about.jpg"
                alt="Glowee cosmetics collection featuring colorful makeup palettes and products arranged beautifully"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-sm font-medium">100% Cruelty-Free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
