import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Let's Talk
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or a question about our services? We’re here to help you spark your energy journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            className="bg-white p-10 rounded-2xl shadow-xl space-y-6 border border-orange-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
              <textarea
                rows="5"
                required
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:from-orange-500 hover:to-red-600 transition transform hover:scale-105 duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-8 text-gray-700">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-orange-500 text-2xl mt-1" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Our Office</h4>
                <p>Shop no. 7, Kasturi tower, Narayan </p>
                <p>Nagar, Manda, Titwala East 421605</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Call Us</h4>
                <p>8355943434 | 9867240816</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-orange-500 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Email</h4>
                <p>krumflareenergy@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">Business Hours</h4>
              <p>Mon - Sat: 9:00 AM – 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Optional Map */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg border border-orange-100">
          <iframe
            title="Krum Flare Energy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.778994275586!2d-97.2454325!3d33.2612268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dbab4f9cbeec1%3A0x859b7d971c97d64!2sKrum%2C%20TX%2076028!5e0!3m2!1sen!2sus!4v1623855608031!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
