"use client";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen w-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
        <div className="p-4 max-w-7xl mx-auto relative z-50 w-full text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800">
            DIRECT DRYWALL INC
          </h1>
          <p className="mt-4 font-semibold text-lg text-gray-600 max-w-lg mx-auto">
            Crafting seamless drywall solutions <br /> on time, every time.
          </p>
          <a
            href="#contact-section"
            className="inline-block bg-blue-600 text-white px-8 py-4 mt-8 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition"
          >
            REQUEST A QUOTE
          </a>
        </div>

        {/* Scroll-down Icon */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50">
          <a
            href="#about-section"
            className="flex items-center justify-center w-12 h-12 bg-gray-200 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 transition"
          >
            <i className="fa-solid fa-arrow-down text-xl"></i>
          </a>
        </div>
      </div>

      {/* About Section */}
      <section
        id="about-section"
        className="min-h-screen bg-white flex flex-col items-center justify-center px-8"
      >
        <hr className="w-48 h-1 mx-auto my-6 bg-gray-200 border-0 rounded-sm" />
        <div className="py-8 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="leading-relaxed mb-6 mt-4 font-medium text-md text-gray-700 max-w-2xl mx-auto">
            At Direct Drywall Inc., we believe in more than just building walls—
            we deliver trust, safety, and reliability. Founded in [year], our
            company started with a single project and a vision: to provide
            unparalleled drywall services to businesses and homeowners across
            the country. Today, with a growing team of experts, we’ve become a
            trusted partner for projects of all sizes.
          </p>
          <p className="leading-relaxed mb-6 mt-4 font-medium text-md text-gray-700 max-w-2xl mx-auto">
            Our commitment to high-quality workmanship and timely delivery
            remains at the heart of everything we do. From initial consultation
            to the final coat of paint, we ensure every detail is handled with
            precision and care.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div
        id="contact-section"
        className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-8"
      >
        <hr className="w-48 h-1 mx-auto my-6 bg-gray-200 border-0 rounded-sm" />
        <section className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-lg mb-6">
          {/* Title */}
          <header className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg">
              We're here to help. Reach out to us anytime.
            </p>
          </header>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">25 KIMBERLY LANE, BRAINTREE, 02184, MA, USA</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-envelope text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                <p>
                  <a
                    href="mailto:directdrywall@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    directdrywall@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-globe text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Website</h3>
                <p>
                  <a
                    href="https://www.directdrywall.com"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.directdrywall.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-phone text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">(617) 506-1245</p>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-mobile text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Mobile</h3>
                <p className="text-gray-600">(617) 506-1245</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
