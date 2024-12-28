import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceOptionsData, mainServices } from '../../data/serviceOptions';

const ServicesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#1a237e] text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainServices.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            options={serviceOptionsData[service.id as keyof typeof serviceOptionsData]?.options}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;