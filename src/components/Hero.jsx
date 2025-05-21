import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <video src="./bg1.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
            </div>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

            {/* Text Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Save Your Electricity Bill Up to 100%
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-xl">
                    Join Krum Flare Energy and power your future with rooftop solar systems and expert electrical solutions.
                </p>
                <Link
                    to="/contact"
                    className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:from-orange-500 hover:to-red-600 transition"
                >
                    Get Free Consultation
                </Link>
            </div>
        </section>
    );
}
