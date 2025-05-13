
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-extrabold text-gym-white">
            FLEX<span className="text-gym-red">GYM</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gym-white hover:text-gym-red transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gym-white hover:text-gym-red transition-colors"
            >
              Features
            </a>
            <a
              href="#memberships"
              className="text-gym-white hover:text-gym-red transition-colors"
            >
              Memberships
            </a>
            <a
              href="#trainers"
              className="text-gym-white hover:text-gym-red transition-colors"
            >
              Trainers
            </a>
            <a
              href="#schedule"
              className="text-gym-white hover:text-gym-red transition-colors"
            >
              Schedule
            </a>
            <Button className="bg-gym-red hover:bg-red-600 transition-colors ml-4">
              Join Now
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gym-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 nav-blur pt-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-6 items-center text-center">
                <a
                  href="#home"
                  className="text-xl text-gym-white hover:text-gym-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-xl text-gym-white hover:text-gym-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#memberships"
                  className="text-xl text-gym-white hover:text-gym-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Memberships
                </a>
                <a
                  href="#trainers"
                  className="text-xl text-gym-white hover:text-gym-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Trainers
                </a>
                <a
                  href="#schedule"
                  className="text-xl text-gym-white hover:text-gym-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule
                </a>
                <Button 
                  className="bg-gym-red hover:bg-red-600 transition-colors mt-4 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
