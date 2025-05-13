
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import Trainers from "@/components/Trainers";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  // Set page title on mount
  useEffect(() => {
    document.title = "FlexGym - Your Premium Fitness Experience";
  }, []);

  return (
    <div className="min-h-screen bg-gym-black text-white overflow-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Plans />
      <Trainers />
      <Schedule />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
