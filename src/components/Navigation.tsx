
import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
        isScrolled ? "nav-blur py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-extrabold text-gym-white">
            FLEX<span className="text-yellow-400">GYM</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gym-white hover:text-yellow-400 transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-gym-white hover:text-yellow-400 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#classes"
              className="text-gym-white hover:text-yellow-400 transition-colors"
            >
              CLASSES
            </a>
            <a
              href="#services"
              className="text-gym-white hover:text-yellow-400 transition-colors"
            >
              SERVICES
            </a>
            <a
              href="#trainers"
              className="text-gym-white hover:text-yellow-400 transition-colors"
            >
              TRAINERS
            </a>
            <a
              href="#contact"
              className="text-gym-white hover:text-yellow-400 transition-colors"
            >
              CONTACT
            </a>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-yellow-400 transition-colors">
              <Search size={20} />
            </button>
            <div className="relative">
              <button className="text-white hover:text-yellow-400 transition-colors">
                <ShoppingCart size={20} />
              </button>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              Join Now
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <div className="flex space-x-4 mr-4">
              <button className="text-white hover:text-yellow-400 transition-colors">
                <Search size={20} />
              </button>
              <div className="relative">
                <button className="text-white hover:text-yellow-400 transition-colors">
                  <ShoppingCart size={20} />
                </button>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gym-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && isMobile && (
          <div className="md:hidden fixed inset-0 z-50 nav-blur pt-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-6 items-center text-center">
                <a
                  href="#home"
                  className="text-xl text-gym-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#about"
                  className="text-xl text-gym-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </a>
                <a
                  href="#classes"
                  className="text-xl text-gym-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  CLASSES
                </a>
                <a
                  href="#services"
                  className="text-xl text-gym-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SERVICES
                </a>
                <a
                  href="#trainers"
                  className="text-xl text-gym-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  TRAINERS
                </a>
                <a
                  href="#contact"
                  className="text-xl text-gym-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </a>
                <Button 
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold mt-4 w-full"
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
