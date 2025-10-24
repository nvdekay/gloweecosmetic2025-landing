import React from "react";
import FAQItem from "./FAQItem";
import { faqs } from "../../data/products";

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-16 bg-[#FFF5F9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl pb-2.5 md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-rose-400 to-mint-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
            Câu hỏi thường gặp
          </h2>
          <p className="text-lg text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
            “Tất cả những điều bạn cần biết về sản phẩm, đơn hàng và giao hàng —
            được giải đáp tận tình bởi đội ngũ{" "}
            <span className="text-pink-600 font-semibold">Glowee</span>.”
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
