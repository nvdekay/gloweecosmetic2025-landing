import React from "react";
import { formatPrice } from "../../data/products";

const LipstickCard = ({ lipstick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={lipstick.img}
          alt={`${lipstick.name} - ${lipstick.colorName} lipstick in ${lipstick.finish} finish`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              {lipstick.name}
            </h3>
            <p className="text-sm text-gray-600">{lipstick.colorName}</p>
          </div>
          <span className="text-xs bg-pink-100 text-[E87BA8] px-2 py-1 rounded-full">
            {lipstick.finish}
          </span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div
            className="w-14 h-14 rounded-full border-2 border-white shadow-md"
            style={{ backgroundColor: lipstick.swatch }}
            aria-label={`${lipstick.colorName} color swatch`}
          />
          <span className="text-lg font-bold text-[E87BA8]">
            {formatPrice(lipstick.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LipstickCard;
