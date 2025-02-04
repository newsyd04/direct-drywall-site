import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
        {/* Company Name */}
        <h3 className="text-2xl font-bold tracking-wide">Direct Drywall INC</h3>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:directdrywall@gmail.com"
            className="text-gray-300 hover:text-white transition"
          >
            Email: sullydirectdrywall@yahoo.com
          </a>
          <a
            href="tel:+353669157436"
            className="text-gray-300 hover:text-white transition"
          >
            Phone/Fax: (617) 839-1654
          </a>
          <a
            href="tel:+353860689704"
            className="text-gray-300 hover:text-white transition"
          >
            Mobile: (617) 839-1654
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; 2025 Direct Drywall INC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
