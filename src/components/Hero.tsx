
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 z-20">
        <div className="flex flex-col items-center text-center">
          <h5 
            className={`text-lg md:text-xl text-gym-white/90 mb-3 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            BEST GYM OF THE CITY FOR FITNESS
          </h5>
          
          <h1 
            className={`text-5xl md:text-7xl font-extrabold mb-6 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-white">TRAIN WITH </span>
            <span className="text-gym-red">BEST</span><br />
            <span className="text-yellow-400 font-black">GYM EXPERIENCE</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-gym-white/80 max-w-2xl mb-10 transition-opacity duration-700 delay-200 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Transform your physique and boost your confidence with our expert trainers and state-of-the-art equipment.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-700 delay-400 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg hover-scale"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gym-white text-gym-white hover:bg-white/10 px-8 py-6 text-lg hover-scale"
            >
              View Membership
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#features" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gym-white animate-bounce-subtle z-20"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
