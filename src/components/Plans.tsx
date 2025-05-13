
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PlanCard = ({ title, price, features, isPopular, delay }) => {
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
      className={`bg-gym-darkGray rounded-2xl p-8 relative transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-20"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 right-4 bg-gym-red text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gym-gray">/month</span>
      </div>
      <hr className="border-gray-700 mb-6" />
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-gym-red mr-2 mt-1 flex-shrink-0" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          isPopular
            ? "bg-gym-red hover:bg-red-600"
            : "bg-transparent hover:bg-white/10 border border-white"
        }`}
      >
        Choose Plan
      </Button>
    </div>
  );
};

const Plans = () => {
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

  const plans = [
    {
      title: "Basic",
      price: 29,
      features: [
        "Access to gym floor",
        "Basic equipment usage",
        "Locker access",
        "Standard operating hours",
      ],
      isPopular: false,
    },
    {
      title: "Premium",
      price: 59,
      features: [
        "Full gym access",
        "Group fitness classes",
        "Personal trainer (1 session/month)",
        "Access to all amenities",
        "24/7 gym access",
      ],
      isPopular: true,
    },
    {
      title: "Elite",
      price: 99,
      features: [
        "All Premium features",
        "Unlimited fitness classes",
        "Personal trainer (4 sessions/month)",
        "Nutrition consultation",
        "Member exclusive events",
        "Premium locker service",
      ],
      isPopular: false,
    },
  ];

  return (
    <section
      id="memberships"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gym-black to-gym-darkGray"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Membership <span className="text-gym-red">Plans</span>
          </h2>
          <p
            className={`text-lg text-gym-gray max-w-2xl mx-auto transition-opacity duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Choose the perfect membership option that suits your fitness goals and
            budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
