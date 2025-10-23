import React from "react";
import { formatPrice } from "../../data/products";

const PencilCard = ({ pencil }) => {
  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Ảnh sản phẩm */}
      <div className="aspect-[1/1] overflow-hidden bg-gray-50">
        <img
          src={pencil.img || "/placeholder.png"}
          onError={(e) => (e.target.src = "/placeholder.png")}
          alt={`${pencil.name} - ${pencil.colorName} eyeliner pencil`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nội dung */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1">
          {pencil.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{pencil.colorName}</p>

        <div className="flex items-center justify-between mb-3">
          <div
            className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-sm"
            style={{ backgroundColor: pencil.swatch }}
            aria-label={`Color: ${pencil.colorName}`}
          />
          <span className="text-lg font-bold text-pink-600">
            {formatPrice(pencil.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PencilCard;
