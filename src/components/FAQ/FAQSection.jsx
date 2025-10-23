import React from "react";
import FAQItem from "./FAQItem";
import { faqs } from "../../data/products";

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-16 bg-glowee-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-glowee-[E87BA8] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about ordering, shipping, and our
            products.
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
