import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SolarServices from './components/SolarServices';
import ElectricalServices from './components/ElectricalServices';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate 2-second loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <img src="/logo.png" alt="Loading..." className="w-24 mx-auto animate-pulse" />
          <p className="text-gray-600 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/electrical" element={<ElectricalServices />} />
        <Route path="/services/solar" element={<SolarServices />} />
      </Routes>
      <Footer />
      <WhatsAppButton/>
    </>
  );
};

export default App;
