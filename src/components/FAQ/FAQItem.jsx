import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-3xl border transition-all duration-500 ${
        isOpen
          ? "bg-gradient-to-br from-pink-50 via-white to-rose-50 border-pink-200 shadow-lg shadow-pink-100/50"
          : "bg-white border-gray-100 shadow-md hover:shadow-pink-100/40"
      }`}
    >
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold transition-colors duration-300 text-lg md:text-xl ${
            isOpen
              ? "bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent"
              : "text-gray-800 hover:text-pink-600"
          }`}
        >
          {faq.question}
        </span>

        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white rotate-180"
              : "border-pink-200 text-pink-600 bg-pink-50 hover:bg-pink-100"
          }`}
        >
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="text-sm transition-transform duration-300"
          />
        </div>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 pb-5 px-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-2">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
