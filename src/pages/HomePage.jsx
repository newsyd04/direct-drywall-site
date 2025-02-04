"use client";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuroraBackground } from "../components/AuroraBackground"; 
import { BackgroundGradientCard } from "../components/BackgroundGradientCard";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <AuroraBackground>
        <div className="h-screen w-full flex items-center justify-center  relative overflow-hidden">
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
      </AuroraBackground>

      {/* About Section */}
      <section
        id="about-section"
        className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-8"
      >
        <hr className="w-48 h-1 mx-auto my-6 bg-gray-200 border-0 rounded-sm" />
        <div className="py-8 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="leading-relaxed mb-6 mt-4 font-medium text-md text-gray-700 max-w-2xl mx-auto">
            At Direct Drywall, we have been delivering exceptional plaster finishes and drywall installations for over [years] years. Specializing in residential construction, we offer flexible services tailored to your needs—whether it's full plasterboard installations for new homes or ongoing work on projects like bedroom or kitchen renovations. Our commitment to quality craftsmanship and personalized customer service sets us apart, ensuring each project is completed to the highest standard with care and precision.
          </p>
          <p className="leading-relaxed mb-6 mt-4 font-medium text-md text-gray-700 max-w-2xl mx-auto">
            Our commitment to high-quality workmanship and timely delivery
            remains at the heart of everything we do. From initial consultation
            to the final coat of paint, we ensure every detail is handled with
            precision and care.
          </p>
          <BackgroundGradientCard>
            <div className="text-center">
              <img
                className="h-20 w-20 rounded-full border-4 border-white mx-auto my-4"
                src="https://placehold.co/600" 
                alt="Profile"
              />
              <h3 className="font-bold text-xl text-gray-800 mb-1">Michael O'Sullivan</h3>
              <div className="flex justify-center items-center text-gray-600">
                <svg
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                BRAINTREE, MA
              </div>
            </div>
          </BackgroundGradientCard>
        </div>
      </section>

      {/* Services Section */}
      <div
        id="services-section"
        className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-8"
      >
        <hr className="w-48 h-1 mx-auto my-6 bg-gray-200 border-0 rounded-sm" />
        <section className="w-full max-w-4xl p-8 mb-6">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-hammer text-blue-500 text-6xl mb-4"></i>
              <h3 className="font-bold text-lg">Drywall Installation</h3>
              <p className="text-gray-600 mt-2">We provide high-quality drywall installation for both residential and commercial projects.</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-tools text-blue-500 text-6xl mb-4"></i>
              <h3 className="font-bold text-lg">Drywall Repair</h3>
              <p className="text-gray-600 mt-2">Cracks, holes, and water damage? Our team specializes in seamless drywall repairs, ensuring your walls look as good as new.</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-paint-roller text-blue-500 text-6xl mb-4"></i>
              <h3 className="font-bold text-lg">Drywall Finishing</h3>
              <p className="text-gray-600 mt-2">Achieve smooth, professional walls with our expert drywall finishing services, including taping, mudding, and sanding.</p>
            </div>
          </div>
        </div>
      </section>
      </div>

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
                    sullydirectdrywall@yahoo.com
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
                <p className="text-gray-600">(617) 839-1654</p>
              </div>
            </div>

            {/* Mobile
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-mobile text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Mobile</h3>
                <p className="text-gray-600">(617) 839-1654</p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
