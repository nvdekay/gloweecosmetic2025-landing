import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function TestimonialCard({ testimonial }) {
  // Random avatar fallback (nếu không có avatar)
  const randomAvatar = `https://i.pravatar.cc/150?img=${Math.floor(
    Math.random() * 70 + 1
  )}`;

  return (
    <div className="bg-gradient-to-b from-white via-[#FFF7FB] to-[#FFE9F2] rounded-3xl shadow-md border border-pink-100 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={testimonial.avatar || randomAvatar}
          alt={`${testimonial.name} profile photo`}
          className="w-16 h-16 rounded-full object-cover border-2 border-pink-200 shadow-sm"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">
            {testimonial.name}
          </h3>
          <div
            className="flex gap-1 mt-1"
            aria-label={`${testimonial.rating} out of 5 stars`}
          >
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`${
                  index < testimonial.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                } text-sm transition-colors duration-300`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/60 rounded-2xl p-4 shadow-inner relative">
        <p className="text-gray-700 italic leading-relaxed">
          “{testimonial.text}”
        </p>
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/60 rotate-45 border-l border-b border-gray-100"></div>
      </div>

      <div className="mt-4 flex justify-end">
        <span className="text-sm text-pink-500 font-medium">
          — {testimonial.role || "Customer"}
        </span>
      </div>
    </div>
  );
}
