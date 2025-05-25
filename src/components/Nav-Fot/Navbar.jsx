import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <Link
            to="/"
          >
            <img
              src="/logo.png"
              alt="Krum Flare Energy"
              className="h-17 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center  space-x-12">
            <Link to="/" className="text-gray-800 font-bold hover:text-orange-600">
              HOME
            </Link>
            <Link to="/about" className="text-gray-800 font-bold hover:text-orange-600">
              ABOUT US
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center cursor-pointer text-gray-800 font-bold hover:text-orange-600"
              >
                SERVICES <MdKeyboardArrowDown className="ml-1" />
              </button>
              <div className={`absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-200 ${servicesOpen ? "block" : "hidden"}`}>
                <Link
                  to="/services/solar"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                >
                  SOLAR SERVICES
                </Link>
                <Link
                  to="/services/electrical"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                >
                  ELECTRICAL SERVICES
                </Link>
              </div>

            </div>

            <Link to="/projects" className="text-gray-800 font-bold hover:text-orange-600">
              OUR PROJECTS
            </Link>
            <Link to="/contact" className="text-gray-800 font-bold hover:text-orange-600">
              CONTACT US
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md font-semibold shadow hover:from-orange-500 hover:to-red-600 transition"
            >
              Get a Quote!
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white font-bold shadow-md px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-800" onClick={toggleMenu}>
            HOME
          </Link>
          <Link to="/about" className="block text-gray-800" onClick={toggleMenu}>
            ABOUT US
          </Link>
          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center w-full text-gray-800"
            >
              SERVICES <MdKeyboardArrowDown className="ml-1" />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/services/solar"
                  onClick={() => {
                    toggleMenu();
                    setServicesOpen(false);
                  }}
                  className="block text-gray-800 font-semibold"
                >
                  SOLAR SERVICES
                </Link>
                <Link
                  to="/services/electrical"
                  onClick={() => {
                    toggleMenu();
                    setServicesOpen(false);
                  }}
                  className="block text-gray-800 font-semibold"
                >
                  ELECTRICAL SERVICES
                </Link>
              </div>
            )}

          </div>
          <Link to="/projects" className="block text-gray-800" onClick={toggleMenu}>
            OUR PROJECTS
          </Link>
          <Link to="/contact" className="block text-gray-800" onClick={toggleMenu}>
            CONTACT US
          </Link>
          {/* CTA for Mobile */}
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block bg-gradient-to-r from-orange-400 to-red-500 text-white text-center px-4 py-2 rounded-md font-semibold shadow hover:from-orange-500 hover:to-red-600 transition"
          >
            Get a Quote!
          </Link>
        </div>
      )}
    </nav>
  );
}
