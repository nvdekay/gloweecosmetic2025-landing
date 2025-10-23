import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.name} profile photo`}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#FFD9E6]"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <div
            className="flex gap-1 mt-1"
            aria-label={`${testimonial.rating} out of 5 stars`}
          >
            {[...Array(testimonial.rating)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-yellow-400 text-sm"
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">"{testimonial.text}"</p>
    </div>
  );
}
