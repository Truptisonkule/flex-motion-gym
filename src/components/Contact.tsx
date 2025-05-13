
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openingHours = [
    { day: "Monday", hours: "09:00 am - 10:00 pm" },
    { day: "Tuesday", hours: "08:00 am - 10:00 pm" },
    { day: "Wednesday", hours: "08:00 am - 10:00 pm" },
    { day: "Thursday", hours: "08:00 am - 10:00 pm" },
    { day: "Friday", hours: "08:00 am - 12:00 pm" },
    { day: "Saturday", hours: "09:00 am - 08:00 pm" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gym-darkGray"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
            <h3 className="text-2xl font-bold mb-6">FlexGym</h3>
            <p className="text-gym-gray mb-6">
              The longest running gym in the city. Owned and operated by a team of professional trainers with over 25 years of combined experience.
            </p>
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

          <div className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`} style={{transitionDelay: '200ms'}}>
            <h3 className="text-2xl font-bold mb-6">Opening Hours</h3>
            <div className="space-y-3">
              {openingHours.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className={item.day === "Sunday" ? "text-gym-red" : "text-white"}>{item.day}</span>
                  <span className="text-gym-gray">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`} style={{transitionDelay: '400ms'}}>
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gym-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gym-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gym-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition-colors">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
