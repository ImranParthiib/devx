import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Imran Parthib",
    role: "KAMLA",
    imageUrl: "/images/imranParthib.png",
  },
  {
    name: "Towhidul Islam",
    role: "CTO",
    imageUrl: "/images/towhidulIslam.jpg",
  },
  {
    name: "Rakibul Islam Anas",
    role: "Lead Developer",
    imageUrl: "/images/rakibulAnas.jfif",
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 uppercase tracking-widest text-blue-300">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative p-8 bg-white text-gray-900 shadow-2xl rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Glowing border around image */}
              <div className="relative mx-auto mb-6 w-[150px] h-[150px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="relative z-10 rounded-full"
                />
              </div>

              {/* Team Member Info */}
              <h3 className="text-3xl font-semibold mb-2 group-hover:text-purple-600 transition duration-300">
                {member.name}
              </h3>
              <p className="text-xl font-medium text-gray-700 mb-4">
                {member.role}
              </p>

              {/* Background Decorative Circle */}
              <div className="absolute -top-5 right-5 bg-purple-600 w-16 h-16 rounded-full opacity-50 blur-3xl transform rotate-45"></div>
              <div className="absolute bottom-0 left-0 bg-blue-600 w-24 h-24 rounded-full opacity-50 blur-2xl transform rotate-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
