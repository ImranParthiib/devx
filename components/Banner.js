// components/Banner.js

import React from "react";

const Banner = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center relative">
      {/* Date and Location Info */}
      <div className="absolute top-16 left-16 flex items-center space-x-2 text-lg">
        <span className="block w-3 h-3 bg-blue-500 rounded-full"></span>
        <p>UNLOCK MONTH FREE TRIAL 🚀!</p>
      </div>

      {/* Main Title and Logo */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Build Fast With</h1>
        <div className="inline-block py-2 px-6 border border-slate-500 rounded-lg text-xl mt-4 bg-gradient-to-r from-rose-900 via--400 to-blue-500 text-white  font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-green-500 hover:via-teal-600 hover:to-blue-600">
          TEAM
        </div>
      </div>

      {/* Big NEXT 3D Block Title */}
      <div className="mt-6">
        <h2 className="text-7xl md:text-[150px] font-extrabold text-blue-500">
          DEVX
        </h2>
      </div>

      {/* Ticket Button */}
      <div className="absolute top-16 right-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg">
          GET YOUR BOOKING →
        </button>
        <p className="text-sm mt-2  text-center">IN PERSON & VIRTUAL🧑🏻‍💻</p>
      </div>
    </section>
  );
};

export default Banner;
