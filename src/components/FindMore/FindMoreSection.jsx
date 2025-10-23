import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "../ButtonLink";

const FindMoreSection = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-blue-950 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop & Connect With Us
          </h2>
          <p className="text-lg text-cyan-900 max-w-2xl mx-auto">
            Find us on your favorite platforms! Shop our full collection, see
            the latest looks, and join our beauty community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Shopee */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faShoppingBag}
                className="text-pink-600 text-3xl"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              Shop on Shopee
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Browse our complete collection and enjoy exclusive deals!
            </p>
            <ButtonLink
              href="https://shopee.vn/gloweecosmetic"
              variant="social"
              ariaLabel="Visit our Shopee store"
              className="w-full"
            >
              Visit Store
            </ButtonLink>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-pink-600 text-3xl"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              Follow on Facebook
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Get beauty tips, tutorials, and new product updates!
            </p>
            <ButtonLink
              href="https://facebook.com/"
              variant="social"
              ariaLabel="Follow us on Facebook"
              className="w-full"
            >
              Follow Us
            </ButtonLink>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-pink-600 text-3xl"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              Join us on Instagram
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              See stunning looks and share your Glowee moments!
            </p>
            <ButtonLink
              href="https://instagram.com/"
              variant="social"
              ariaLabel="Follow us on Instagram"
              className="w-full"
            >
              Follow Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindMoreSection;
