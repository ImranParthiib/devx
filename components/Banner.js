import React from "react";

const Banner = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-8 lg:px-16">
      <div className="absolute top-32 left-4 right-4  lg:top-40 lg:left-12 flex items-center justify-start space-x-2 text-[10px]  ">
        <span className="block w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></span>
        <p className="">UNLOCK MONTH FREE TRIAL 🚀!</p>
      </div>

      {/* Main Title and Logo */}
      <div className="text-center mt-16 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Build Fast With
        </h1>
        <div className="inline-block py-2 px-4 sm:px-6 border border-slate-500 rounded-lg text-base sm:text-lg lg:text-xl mt-4 bg-gradient-to-r from-rose-900 via-pink-400 to-blue-500 text-white font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-green-500 hover:via-teal-600 hover:to-blue-600">
          TEAM
        </div>
      </div>

      {/* Big NEXT 3D Block Title */}
      <div className="mt-6 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-blue-500">
          DEVX
        </h2>
      </div>

      {/* Ticket Button */}
      <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg transition-colors duration-300">
          GET YOUR BOOKING →
        </button>
        <p className="text-xs sm:text-sm mt-2">IN PERSON & VIRTUAL 🧑🏻‍💻</p>
      </div>
    </section>
  );
};

export default Banner;
