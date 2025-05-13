
import React, { useEffect, useRef, useState } from "react";
import { Dumbbell, Clock, Users, Heart } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
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
      className={`bg-gym-darkGray p-8 rounded-2xl transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-20"
      } hover-scale`}
    >
      <div className="bg-gym-red rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gym-gray">{description}</p>
    </div>
  );
};

const Features = () => {
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

  const features = [
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      description:
        "State-of-the-art fitness equipment designed for effective and safe workouts.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description:
        "Open 24/7 with flexible scheduling options to fit your busy lifestyle.",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description:
        "Certified professional trainers to guide and motivate you through your fitness journey.",
    },
    {
      icon: Heart,
      title: "Fitness Community",
      description:
        "Join our supportive community of fitness enthusiasts and make new friends.",
    },
  ];

  return (
    <section
      id="features"
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
            Why Choose <span className="text-gym-red">FLEXGYM</span>
          </h2>
          <p
            className={`text-lg text-gym-gray max-w-2xl mx-auto transition-opacity duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            We provide the perfect environment for your fitness success with
            top-notch equipment and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
