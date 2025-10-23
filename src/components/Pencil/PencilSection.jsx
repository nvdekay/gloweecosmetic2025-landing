import React from "react";
import PencilCard from "./PencilCard";
import { eyeliners } from "../../data/products";

const PencilSection = () => {
  return (
    <section id="eyeliner" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3">
            Eyeliner Pencils
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Precision eyeliner pencils that glide smoothly and stay put all day.
            Available in classic and bold shades.
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-4">
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
