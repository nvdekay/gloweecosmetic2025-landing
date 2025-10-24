import React from "react";
import PencilCard from "./PencilCard";
import { eyeliners } from "../../data/products";

const PencilSection = () => {
  return (
    <section id="eyeliner" className="py-12 md:py-16 bg-[#FFF5F9]">
      {/* Ánh sáng trang trí mờ phía sau */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-400/30 blur-[180px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Header text */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 pb-2.5
                       bg-gradient-to-r from-[#FF8DC7] via-[#D278FF] to-[#8B5CF6]
                       bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(255,136,200,0.4)]"
          >
            Eyeliner Pencils
          </h2>

          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Define your gaze with
            <span className="text-[#ECA3E8] font-medium not-italic">
              {" "}
              precision & style
            </span>
            . Glides effortlessly, lasts flawlessly, and empowers your look.
          </p>

          <div className="mt-6 w-28 h-[3px] bg-gradient-to-r from-[#FFB6D5] via-[#E87BA8] to-[#B56DFF] mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Eyeliner list */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
          <div
            className="flex gap-6 md:grid md:grid-cols-3 lg:grid-cols-4 
                       transition-all animate-fadeIn"
          >
            {eyeliners.map((pencil) => (
              <PencilCard key={pencil.id} pencil={pencil} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PencilSection;
