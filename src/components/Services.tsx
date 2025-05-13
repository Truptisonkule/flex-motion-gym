
import React, { useEffect, useRef, useState } from "react";
import { Clock, Dumbbell, Users, Video, User, Heart } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
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
      className={`border border-gray-800 p-8 rounded-lg transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-20"
      } hover:border-yellow-400 group`}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gym-darkGray group-hover:bg-yellow-400 transition-colors duration-300">
          <Icon size={32} className="text-white group-hover:text-black transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gym-gray text-center">{description}</p>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      icon: Clock,
      title: "Workout plans tailored to your needs",
      description:
        "Our expert trainers will create personalized workout plans based on your goals and fitness level.",
    },
    {
      icon: Video,
      title: "Access to the client's panel",
      description:
        "Get 24/7 access to your personal dashboard with workout history, progress tracking, and more.",
    },
    {
      icon: Users,
      title: "Social media integration",
      description:
        "Share your achievements and connect with other members through our social media integration.",
    },
    {
      icon: Heart,
      title: "Social media integration",
      description:
        "Join our online community to share your progress and get motivated by others.",
    },
    {
      icon: Dumbbell,
      title: "Battle tournaments",
      description:
        "Participate in friendly competition with other gym members to push your limits.",
    },
    {
      icon: User,
      title: "Individual trainings",
      description:
        "One-on-one sessions with our professional trainers focused on your specific needs.",
    },
    {
      icon: Users,
      title: "Playing fields for team sports",
      description:
        "Access to our indoor courts for basketball, volleyball, and other team activities.",
    },
    {
      icon: Clock,
      title: "Diverse member plans",
      description:
        "Choose from a variety of membership options to fit your schedule and budget.",
    },
  ];

  return (
    <section
      id="services"
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
            Not Only a <span className="text-yellow-400">Gym</span>
          </h2>
          <p
            className={`text-lg text-gym-gray max-w-2xl mx-auto transition-opacity duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            We have an indoor swimming pool, sauna zone, two indoor team courts.
            Check what else we offer for our members.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
