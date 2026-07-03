"use client";
import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/Hero";
import Navigation from "../components/Navgiation";
import About from "../components/About";
import EasySteps from "../components/EasySteps";
import ContactUs from "../components/ContactUs";
import RegisterResturant from "../components/RegisterResturant";
import RegisterCaptin from "../components/RegisterCaptin";
import Clients from "../components/Clients";
import DownloadApp from "../components/DownloadApp";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      (contactRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start', });
    }
  }


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);







  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
        <div className="brand-loader" />
      </div>
    );
  }

  return (
    <div className="bg-cream">
      <Toaster position="top-right" reverseOrder={false} />
      <Navigation />
      <HeroSection scrollToContact={scrollToContact} />
      <About />
      <EasySteps />
      <RegisterResturant />
      <RegisterCaptin />
      <Clients />
      <DownloadApp />
      <ContactUs contactRef={contactRef} />
      <Footer />
    </div>
  );
}
