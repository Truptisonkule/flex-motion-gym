
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const TrainerCard = ({ name, title, image, delay }) => {
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
      className={`transition-all duration-700 ease-out group ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-20"
      }`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-gym-gray uppercase">{title}</p>
        </div>
        <ArrowRight className="text-yellow-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </div>
  );
};

const TrainersList = () => {
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

  const trainers = [
    {
      name: "Amitee Loiselle",
      title: "FITNESS COACH",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Liam Harpaul",
      title: "CROSSFIT COACH",
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Mark Anthony",
      title: "CROSSFIT COACH",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Ron Richardson",
      title: "BODY BUILDING",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section
      id="trainers"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gym-black to-gym-darkGray"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className={`text-yellow-400 uppercase font-bold mb-2 transition-opacity duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                OUR PROFESSIONAL TEAM
              </p>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-700 delay-100 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Meet Our <span className="text-gym-red">Trainers</span>
              </h2>
            </div>
            <p
              className={`text-lg text-gym-gray max-w-2xl transition-opacity duration-700 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              We are a team of experienced people, nutrition, sports and fitness passionate experts with talent and knowledge unsurpassed in the industry. Get to know us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              name={trainer.name}
              title={trainer.title}
              image={trainer.image}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersList;
