
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ClassBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollWidth <= clientWidth) return;

    const animateScroll = () => {
      if (!isAnimating || !container) return;

      const currentScroll = container.scrollLeft;
      const maxScroll = scrollWidth - clientWidth;
      
      if (currentScroll >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const interval = setInterval(animateScroll, 30);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleMouseEnter = () => setIsAnimating(false);
  const handleMouseLeave = () => setIsAnimating(true);

  const classTypes = [
    "BENCH PRESS",
    "DEAD LIFT",
    "PILATES",
    "DUMBBELL",
    "CARDIO",
    "FLEXIBILITY",
    "STRENGTH",
    "YOGA"
  ];

  return (
    <div 
      className="bg-yellow-400 text-black w-full overflow-hidden py-6 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-yellow-400 to-transparent z-10 flex items-center justify-start">
        <ChevronLeft size={24} className="text-black ml-2" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-yellow-400 to-transparent z-10 flex items-center justify-end">
        <ChevronRight size={24} className="text-black mr-2" />
      </div>
      
      <div 
        ref={containerRef}
        className="flex whitespace-nowrap overflow-hidden"
      >
        {[...classTypes, ...classTypes].map((type, index) => (
          <div 
            key={index}
            className="flex items-center px-8"
          >
            <span className="text-black text-xl md:text-2xl font-black">✧</span>
            <span className="px-4 text-xl md:text-2xl font-black tracking-widest">{type}</span>
            <span className="text-black text-xl md:text-2xl font-black">✧</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ClassCard = ({ title, image, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-lg aspect-square group cursor-pointer",
        "transition-all duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-4xl font-black text-white">{title}</h3>
      </div>
    </div>
  );
};

const ClassTypes = () => {
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

  const classes = [
    {
      title: "BOXING",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "CARDIO",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "FLEXIBILITY",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "STRENGTH",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "WORKOUT",
      image: "https://images.unsplash.com/photo-1517637382994-f02da38c6728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "ZUMBA",
      image: "https://images.unsplash.com/photo-1518310952931-b1de897abd5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section id="classes" ref={sectionRef}>
      <ClassBanner />
      
      <div className="py-24 bg-gym-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              JOIN OUR <span className="text-yellow-400">UPCOMING</span> <span className="block md:inline">CLASSES NOW!!</span>
            </h2>
            <p
              className={`text-lg text-gym-gray max-w-2xl mx-auto transition-opacity duration-700 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              We offer a variety of classes to help you achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem, index) => (
              <ClassCard
                key={index}
                title={classItem.title}
                image={classItem.image}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassTypes;
