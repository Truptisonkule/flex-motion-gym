
import React, { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ScheduleItem = ({ time, className, trainer, intensity, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  let intensityColor = "bg-green-500";
  if (intensity === "Medium") {
    intensityColor = "bg-yellow-500";
  } else if (intensity === "High") {
    intensityColor = "bg-gym-red";
  }

  return (
    <div
      ref={itemRef}
      className={`bg-gym-darkGray rounded-lg p-6 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      } hover:bg-gym-darkGray/70 hover-scale`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gym-red font-medium">{time}</p>
          <h4 className="text-xl font-bold mt-1">{className}</h4>
          <p className="text-gym-gray mt-1">{trainer}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className={`w-3 h-3 rounded-full ${intensityColor} mb-1`}></div>
          <p className="text-xs text-gym-gray">{intensity}</p>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
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

  const scheduleData = {
    monday: [
      {
        time: "06:00 - 07:00",
        className: "Morning HIIT",
        trainer: "Alex Johnson",
        intensity: "High",
      },
      {
        time: "10:00 - 11:00",
        className: "Yoga Flow",
        trainer: "Sarah Williams",
        intensity: "Low",
      },
      {
        time: "17:00 - 18:30",
        className: "CrossFit Challenge",
        trainer: "Mike Davis",
        intensity: "High",
      },
      {
        time: "19:00 - 20:00",
        className: "Body Pump",
        trainer: "Emma Thompson",
        intensity: "Medium",
      },
    ],
    wednesday: [
      {
        time: "06:00 - 07:00",
        className: "Cardio Kickboxing",
        trainer: "Mike Davis",
        intensity: "High",
      },
      {
        time: "11:00 - 12:00",
        className: "Pilates Core",
        trainer: "Emma Thompson",
        intensity: "Medium",
      },
      {
        time: "18:00 - 19:00",
        className: "Spin Class",
        trainer: "Alex Johnson",
        intensity: "High",
      },
      {
        time: "20:00 - 21:00",
        className: "Evening Yoga",
        trainer: "Sarah Williams",
        intensity: "Low",
      },
    ],
    friday: [
      {
        time: "07:00 - 08:00",
        className: "Boot Camp",
        trainer: "Alex Johnson",
        intensity: "High",
      },
      {
        time: "12:00 - 13:00",
        className: "Lunch Express HIIT",
        trainer: "Mike Davis",
        intensity: "Medium",
      },
      {
        time: "17:30 - 18:30",
        className: "Strength Circuit",
        trainer: "Emma Thompson",
        intensity: "Medium",
      },
      {
        time: "19:00 - 20:30",
        className: "Power Yoga",
        trainer: "Sarah Williams",
        intensity: "Medium",
      },
    ],
    weekend: [
      {
        time: "08:00 - 09:30",
        className: "Full Body Workout",
        trainer: "Alex Johnson",
        intensity: "High",
      },
      {
        time: "10:00 - 11:00",
        className: "Zumba Dance",
        trainer: "Emma Thompson",
        intensity: "Medium",
      },
      {
        time: "12:00 - 13:00",
        className: "Meditation & Stretch",
        trainer: "Sarah Williams",
        intensity: "Low",
      },
      {
        time: "16:00 - 17:30",
        className: "Advanced CrossFit",
        trainer: "Mike Davis",
        intensity: "High",
      },
    ],
  };

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gym-darkGray to-gym-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Class <span className="text-gym-red">Schedule</span>
          </h2>
          <p
            className={`text-lg text-gym-gray max-w-2xl mx-auto transition-opacity duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Find the perfect class that fits your schedule and fitness goals.
          </p>
        </div>

        <Tabs defaultValue="monday" className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-8">
            <TabsTrigger value="monday">Monday</TabsTrigger>
            <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
            <TabsTrigger value="friday">Friday</TabsTrigger>
            <TabsTrigger value="weekend">Weekend</TabsTrigger>
          </TabsList>
          
          <TabsContent value="monday">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scheduleData.monday.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  className={item.className}
                  trainer={item.trainer}
                  intensity={item.intensity}
                  delay={index * 100}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="wednesday">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scheduleData.wednesday.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  className={item.className}
                  trainer={item.trainer}
                  intensity={item.intensity}
                  delay={index * 100}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="friday">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scheduleData.friday.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  className={item.className}
                  trainer={item.trainer}
                  intensity={item.intensity}
                  delay={index * 100}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="weekend">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scheduleData.weekend.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  className={item.className}
                  trainer={item.trainer}
                  intensity={item.intensity}
                  delay={index * 100}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;
