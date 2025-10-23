import React from "react";
import PaletteCard from "./PaletteCard";
import { eyeshadows } from "../../data/products";

const EyeshadowSection = () => {
  return (
    <section id="eyeshadow" className="mt-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[E87BA8] mb-3">
            Eyeshadow Palettes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our stunning collection of highly-pigmented eyeshadow
            palettes. From everyday neutrals to bold statement looks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eyeshadows.map((palette) => (
            <PaletteCard key={palette.id} palette={palette} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EyeshadowSection;
