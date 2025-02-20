import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-4 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Logo on the far left */}
        <img 
          src="/hero.png" 
          alt="Company Logo" 
          className="w-11 h-9 object-contain"
        />

        {/* Social Media Links in the Center */}
        <div className="flex gap-3 mt-2 md:mt-0">
          <a
            href="https://www.facebook.com/JaGedoBuilders"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex justify-center items-center rounded-full bg-blue-600 text-white text-base hover:scale-110 transition-all"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/susrecomm/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white text-base hover:scale-110 transition-all"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/88956859/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex justify-center items-center rounded-full bg-blue-700 text-white text-base hover:scale-110 transition-all"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Email on the far right */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-0">
        <a href="tel:+12345677890" className="text-blue-600 hover:underline mt-2 md:mt-0">
        <img src="phone.png" alt="Phone Icon" className="inline-block w-6 h-6" />
          </a>
           <a href="mailto:info@susrecomm.com" className="text-blue-600 hover:underline mt-2 md:mt-0">
          <img src="message.png" alt="Email Icon" className="inline-block w-6 h-6" />
            </a>
        </div>

         
      </div>
    </footer>
  );
};

export default Footer;
