"use client";

import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const SocialIcon = ({ Icon, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      className="group relative p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-pink-500 rounded-full transition-all duration-300 ease-out group-hover:scale-110"
        style={{ opacity: isHovered ? 0.2 : 0 }}
      />
      <Icon className="w-6 h-6 text-gray-300 transition-all duration-300 ease-out group-hover:text-pink-500 group-hover:scale-110" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              DEVX
            </h2>
            <p className="text-gray-400 leading-relaxed">
              DEVX is a cutting-edge company delivering exceptional services in
              web development, mobile app creation, and UI/UX design. We
              transform ideas into digital realities.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300 hover:text-pink-500 transition duration-300">
                <Mail className="mr-2 h-5 w-5 text-pink-500" />
                contact@devx.com
              </p>
              <p className="flex items-center text-gray-300 hover:text-pink-500 transition duration-300">
                <Phone className="mr-2 h-5 w-5 text-pink-500" />
                +1 (123) 456-7890
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold text-pink-500">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-300  hover:text-pink-500 transition duration-300 transform hover:translate-x-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-pink-500">
              Subscribe to our Newsletter
            </h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500 transition duration-300"
              />
              <button
                type="submit"
                className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white font-semibold hover:from-pink-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-12">
          <SocialIcon Icon={Facebook} href="#" />
          <SocialIcon Icon={Twitter} href="#" />
          <SocialIcon Icon={Linkedin} href="#" />
        </div>

        {/* Copyright Notice */}
        <p className="mt-12 text-center text-gray-500">
          &copy; {new Date().getFullYear()} DEVX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
