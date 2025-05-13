
import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gym-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              FLEX<span className="text-yellow-400">GYM</span>
            </h3>
            <p className="text-gym-gray mb-6">
              We're more than just a gym – we're a community dedicated to helping
              you achieve your fitness goals and transform your life.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gym-darkGray flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gym-darkGray flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gym-darkGray flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li className="group flex items-center">
                <ArrowRight size={14} className="mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <a
                  href="#home"
                  className="text-gym-gray group-hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight size={14} className="mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <a
                  href="#about"
                  className="text-gym-gray group-hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight size={14} className="mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <a
                  href="#classes"
                  className="text-gym-gray group-hover:text-white transition-colors"
                >
                  Classes
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight size={14} className="mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <a
                  href="#services"
                  className="text-gym-gray group-hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight size={14} className="mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <a
                  href="#trainers"
                  className="text-gym-gray group-hover:text-white transition-colors"
                >
                  Trainers
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight size={14} className="mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <a
                  href="#contact"
                  className="text-gym-gray group-hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gym-gray">
                  123 Fitness Street, Muscle City, MC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-yellow-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gym-gray">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-yellow-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gym-gray">info@flexgym.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gym-gray mb-4">
              Subscribe to get special offers, free giveaways, and fitness tips.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-gym-darkGray text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gym-gray">
            © {new Date().getFullYear()} FlexGym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
