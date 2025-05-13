
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const TestimonialCard = ({ quote, name, age, achievement, image }) => {
  return (
    <div className="bg-gym-darkGray p-8 rounded-2xl h-full flex flex-col">
      <div className="mb-6">
        <Quote className="text-gym-red" size={32} />
      </div>
      <p className="text-lg mb-8 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gym-gray">
            {age}, {achievement}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
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

  const testimonials = [
    {
      quote:
        "FLEXGYM completely transformed my fitness journey. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained confidence!",
      name: "Jessica M.",
      age: "32",
      achievement: "Lost 30 lbs",
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      quote:
        "The community at FLEXGYM is what keeps me coming back. Everyone is so supportive and the facilities are top-notch. Best gym experience I've ever had!",
      name: "Marcus W.",
      age: "28",
      achievement: "Gained 15 lbs muscle",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      quote:
        "As a busy professional, I appreciate the 24/7 access and variety of classes. The trainers create personalized plans that fit my schedule perfectly.",
      name: "Anna L.",
      age: "35",
      achievement: "Marathon Runner",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      quote:
        "I was intimidated by gyms before joining FLEXGYM. The staff made me feel welcome from day one, and now I can't imagine my life without my daily workout!",
      name: "Tyler R.",
      age: "24",
      achievement: "First bodybuilding competition",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section
      id="testimonials"
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
            Success <span className="text-gym-red">Stories</span>
          </h2>
          <p
            className={`text-lg text-gym-gray max-w-2xl mx-auto transition-opacity duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Hear from our members who have achieved their fitness goals with us.
          </p>
        </div>

        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    age={testimonial.age}
                    achievement={testimonial.achievement}
                    image={testimonial.image}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
