import React from "react";
import { formatPrice } from "../../data/products";

const PaletteCard = ({ palette }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={palette.thumbnail}
          alt={`${palette.name} eyeshadow palette with beautiful color combinations`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{palette.name}</h3>

        <div className="flex gap-2 mb-3">
          {palette.swatches.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: color }}
              aria-label={`Color swatch ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[E87BA8]">
            {formatPrice(palette.price)}
          </span>
          <span className="text-sm text-gray-500">
            {palette.swatches.length} shades
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaletteCard;
