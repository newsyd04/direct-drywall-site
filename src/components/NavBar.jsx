import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-black">
      <div className="container mx-auto px-6 lg:px-32 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold flex flex-row items-center">
          <div>
            <img className="w-24 pr-2 md:w-28 md:pr-4" src={logo} alt="School Logo" />
          </div>
          <div>
            <a to="/">
              Direct Drywall
            </a>
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="flex space-x-6 text-lg text-gray-600 items-center">
          <li className="hidden md:block">
            <a href="#about-section" className="transition">
              About Us
            </a>
          </li>
          <li className="hidden md:block">
            <a href="#services-section" className="transition">
              Our Services
            </a>
          </li>
          <li className="p-2 bg-blue-500 rounded-md">
            <a href="#contact-section"  className="transition text-base text-white font-extrabold">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
