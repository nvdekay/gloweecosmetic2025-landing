import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/products";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl pb-2 md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-rose-400 to-teal-400 bg-clip-text text-transparent drop-shadow-md tracking-tight">
            Cảm nhận từ khách hàng
          </h2>
          <p className="text-lg text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
            “Đừng chỉ nghe chúng tôi nói — hãy xem cách các tín đồ làm đẹp đang
            say mê <span className="text-pink-600 font-semibold">Glowee</span>{" "}
            như thế nào nhé!”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
