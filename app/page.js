// app/page.js

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Image from "next/image";
import Services from "./../components/Services";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Banner Component */}
      <Banner />
      {/* Services Component */}
      {/* Team Component */}
      <Team />
      <Services />
      {/* Footer Component */}
      <Footer />
    </>
  );
}
