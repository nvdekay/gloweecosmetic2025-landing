import React from "react";
import LipstickCard from "./LipstickCard";
import { lipsticks } from "../../data/products";

const LipstickSection = () => {
  return (
    <section id="lipstick" className="py-16 bg-white relative overflow-hidden">
      {/* Decorative mint gradient blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#A4E4D1]/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E87BA8]/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#E87BA8] mb-4 drop-shadow-sm tracking-wide">
            Lipstick Collection
          </h2>
          <p className="text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Elevate your beauty with our{" "}
            <span className="text-[#E87BA8] font-medium">
              luxurious lipsticks
            </span>{" "}
            — crafted in{" "}
            <span className="text-[#A4E4D1] font-medium">stunning shades</span>{" "}
            that last beautifully from day to night.
          </p>
        </div>

        {/* Lipstick Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lipsticks.map((lipstick) => (
            <LipstickCard key={lipstick.id} lipstick={lipstick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LipstickSection;
