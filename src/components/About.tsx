
import React, { useEffect, useRef, useState } from "react";

const About = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gym-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-2 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            About <span className="text-gym-red">Us</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`transition-transform duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`} style={{transitionDelay: '200ms'}}>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Gym equipment" 
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className={`transition-transform duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`} style={{transitionDelay: '400ms'}}>
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Personal training" 
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className={`transition-transform duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`} style={{transitionDelay: '600ms'}}>
              <img 
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Gym workout" 
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          <div className={`transition-transform duration-700 ease-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`} style={{transitionDelay: '800ms'}}>
            <h3 className="text-3xl font-bold mb-6">
              From the moment you walk through the door <br />
              you know <span className="text-yellow-400">FlexGym</span> is a unique place
            </h3>
            
            <p className="text-gym-gray mb-6">
              When we created FlexGym, we knew we wanted to be more than just a simple gym. Having worked in traditional gyms in the past, we knew we needed to create a concept that would provide our members with the most effective tools for success. This meant we needed to offer a wide range of classes both for children and adults.
            </p>
            
            <p className="text-gym-gray mb-6">
              This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <h4 className="text-sm font-bold text-gym-gray mb-2">ENVIRONMENT</h4>
                <p className="text-xl font-bold">Clean and Airy</p>
              </div>
              <div className="text-center">
                <h4 className="text-sm font-bold text-gym-gray mb-2">CLASSES</h4>
                <p className="text-xl font-bold">Every Level</p>
              </div>
              <div className="text-center">
                <h4 className="text-sm font-bold text-gym-gray mb-2">PRICES</h4>
                <p className="text-xl font-bold">Affordable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
