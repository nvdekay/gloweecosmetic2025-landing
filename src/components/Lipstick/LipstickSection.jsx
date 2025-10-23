import React from "react";
import LipstickCard from "./LipstickCard";
import { lipsticks } from "../../data/products";

const LipstickSection = () => {
  return (
    <section id="lipstick" className="py-12 md:py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[E87BA8] mb-3">
            Lipstick Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Luxurious lipsticks in stunning shades with long-lasting formulas.
            From matte to glossy finishes, find your perfect pout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lipsticks.map((lipstick) => (
            <LipstickCard key={lipstick.id} lipstick={lipstick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LipstickSection;
