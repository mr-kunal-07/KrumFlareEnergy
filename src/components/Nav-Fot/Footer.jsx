import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-4">KRUM FLARE ENERGY</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            At Krum Flare Energy, we are dedicated to providing affordable and sustainable solar and electrical services.
            Our rooftop systems help you save your electricity bill up to 100% and protect you from rising energy costs.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-4">Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-orange-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Solar Power Plant Projects</li>
            <li>Rooftop Solar (On/Off Grid)</li>
            <li>Solar Water Heaters & Street Lights</li>
            <li>Electrical Consultancy & Audits</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-4">Contact Information</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> Shop no. 7, Kasturi tower, Narayan Nagar, Manda, Titwala East 421605</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> 8355943434 | 9867240816</li>
            <li className="flex items-center gap-2"><FaEnvelope /> krumflareenergy@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Socials and Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">&copy; 2024 Krum Flare Energy. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-white"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-white"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-white"><FaInstagram /></a>
          <a href="#" className="text-orange-500 hover:text-white"><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
}
