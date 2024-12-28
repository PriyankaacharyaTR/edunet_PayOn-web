import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/services/ServicesSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
    </div>
  );
};

export default Home;