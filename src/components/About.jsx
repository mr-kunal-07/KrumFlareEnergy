import React from "react";
import { Link } from "react-router-dom";
import heroImg from "/solar.png"; // Make sure this path matches your actual file location

export default function About() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 gap-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Save Your Electricity Bill<br className="hidden md:block" />
            <span className="text-orange-600">Up to 100%</span> with our Rooftop System
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Join Krum Flare Energy and power your home or business with clean, sustainable solar energy.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-orange-400 to-red-500 text-white text-lg font-semibold px-6 py-3 rounded-md shadow-md hover:from-orange-500 hover:to-red-600 transition"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="Krum Flare Energy Solar Panels"
            className="w-full rounded-xl max-w-lg md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

