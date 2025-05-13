
import React, { useEffect, useRef, useState } from "react";
import { 
  Instagram, 
  Facebook, 
  Twitter 
} from "lucide-react";

const TrainerCard = ({ name, specialty, image, socials, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-out">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gym-red mb-4">{specialty}</p>
          
          <div className={`flex space-x-4 transition-all duration-500 ease-out ${isHovered ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            {socials.instagram && (
              <a href={socials.instagram} className="text-white hover:text-gym-red transition-colors">
                <Instagram size={20} />
              </a>
            )}
            {socials.facebook && (
              <a href={socials.facebook} className="text-white hover:text-gym-red transition-colors">
                <Facebook size={20} />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} className="text-white hover:text-gym-red transition-colors">
                <Twitter size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Trainers = () => {
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
      name: "Alex Johnson",
      specialty: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1597347429650-d5d0320bd07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      socials: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Williams",
      specialty: "Yoga & Flexibility",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f63d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      socials: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Mike Davis",
      specialty: "CrossFit Champion",
      image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      socials: {
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Emma Thompson",
      specialty: "Nutrition Specialist",
      image: "https://images.unsplash.com/photo-1501904826597-ee2f7416a194?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      socials: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section
      id="trainers"
      ref={sectionRef}
      className="py-24 bg-gym-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Meet Our <span className="text-gym-red">Trainers</span>
          </h2>
          <p
            className={`text-lg text-gym-gray max-w-2xl mx-auto transition-opacity duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Our certified professionals are here to help you reach your fitness goals
            with personalized guidance and motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              name={trainer.name}
              specialty={trainer.specialty}
              image={trainer.image}
              socials={trainer.socials}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
