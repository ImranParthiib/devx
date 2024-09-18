"use client";

import React, { useState } from "react";
import { Code, Smartphone, Paintbrush } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ease-in-out transform ${
        isHovered ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-pink-400 to-indigo-600 opacity-0 transition-opacity duration-300 ease-in-out"
        style={{ opacity: isHovered ? 0.2 : 0 }}
      />
      <div className="flex justify-center mb-6">
        <Icon className="w-16 h-16 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-indigo-100">{description}</p>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mb-16 transform rotate-45" />
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Our Stellar Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard
            icon={Code}
            title="Web Development"
            description="We craft responsive and scalable web applications using cutting-edge technologies, ensuring a seamless user experience across all devices."
          />
          <ServiceCard
            icon={Smartphone}
            title="Mobile Development"
            description="Our expert team builds native and cross-platform mobile applications that provide intuitive interfaces and robust functionality."
          />
          <ServiceCard
            icon={Paintbrush}
            title="UI/UX Design"
            description="We create visually stunning and user-centric designs that not only look great but also enhance user engagement and satisfaction."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
