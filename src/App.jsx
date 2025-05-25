import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Nav-Fot/Footer';
import Navbar from './components/Nav-Fot/Navbar';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import ElectricalServices from './components/Services/ElectricalServices';
import SolarServices from './components/Services/SolarServices';
import WhatsAppButton from './components/WhatsAppButton';


const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

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
          <img src="/logo.png" alt="Loading..." className="w-32 mx-auto animate-pulse" />
          <p className="text-gray-600 mt-3 text-xl">Loading...</p>
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
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
