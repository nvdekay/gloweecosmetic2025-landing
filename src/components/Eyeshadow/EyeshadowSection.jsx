import React from "react";
import PaletteCard from "./PaletteCard";
import { products } from "../../data/products";

const EyeshadowSection = () => {
  return (
    <section id="eyeshadow" className="mt-12 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 pb-2.5
                       bg-gradient-to-r from-[#FF8DC7] via-[#E87BA8] to-[#B56DFF] 
                       bg-clip-text text-transparent tracking-wide drop-shadow-sm mt-16"
          >
            Bộ sưu tập sản phẩm
          </h2>

          <p
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed 
                       font-light italic"
          >
            Thỏa sức thể hiện phong cách của bạn với những bảng màu{" "}
            <span className="text-[#E87BA8] font-semibold not-italic">
              sống động & đa dạng{" "}
            </span>
            — từ phong cách nhẹ nhàng đến cá tính nổi bật.
          </p>

          <div className="mt-6 w-32 h-[3px] bg-gradient-to-r from-[#FFB6D5] via-[#E87BA8] to-[#B56DFF] mx-auto rounded-full"></div>
        </div>

        {/* Lưới bảng màu */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
                     animate-fadeIn"
        >
          {products.map((palette) => (
            <PaletteCard key={palette.id} palette={palette} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EyeshadowSection;
