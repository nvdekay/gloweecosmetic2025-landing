import React from "react";
import { formatPrice } from "../../data/products";

const LipstickCard = ({ lipstick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#E87BA8]/50">
      <div className="aspect-square overflow-hidden bg-gray-50 relative">
        <img
          src={lipstick.img}
          alt={`${lipstick.name} - ${lipstick.colorName} lipstick in ${lipstick.finish} finish`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 transition-colors duration-300 hover:bg-[#FFF5F9]">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              {lipstick.name}
            </h3>
            <p className="text-sm text-gray-600">{lipstick.colorName}</p>
          </div>
          <span className="text-xs bg-[#FFE9F2] text-[#E87BA8] px-2 py-1 rounded-full transition-all duration-300">
            {lipstick.finish}
          </span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div
            className="w-14 h-14 rounded-full border-2 border-white shadow-md transition-transform duration-500 hover:scale-110"
            style={{ backgroundColor: lipstick.swatch }}
            aria-label={`${lipstick.colorName} color swatch`}
          />
          <span className="text-lg font-bold text-[#E87BA8] transition-colors duration-300 hover:text-[#A4E4D1]">
            {formatPrice(lipstick.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LipstickCard;
