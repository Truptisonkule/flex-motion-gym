
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import ClassTypes from "@/components/ClassTypes";
import TrainersList from "@/components/TrainersList";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
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
      <About />
      <Features />
      <ClassTypes />
      <Plans />
      <TrainersList />
      <Services />
      <Schedule />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
