"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState ,useRef} from 'react';
import { HoverEffect } from "./ui/card-hover-effect";
export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after visible
        }
      },
      { threshold: 0.4 } // Trigger when 30% visible
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const projects = [
  {
    title: "International & Indian Language Support",
    description: "Understands customer calls in multiple languages—without missing a word."
  },
  {
    title: "Detects All Revenue Leaks",
    description: "Spots churn risk, repeat complaints, overcharging, missed follow-ups, and poor service signals."
  },
  {
    title: "Automatic Complaint Classification",
    description: "Instantly tags and organizes complaints into actionable categories—no manual effort needed."
  },
  {
    title: "100% Visibility on All Recorded Calls",
    description: "Reviews of all customer calls including Maintenance Reminders and Post Service Follow Up."
  },
  {
    title: "Customer Sentiment Score",
    description: "Measures how happy or frustrated each customer is, using voice tone and language cues."
  },
  {
    title: "Voice of Customer Dashboard",
    description: "One powerful dashboard to track negative & positive feedback, trends, and team performance."
  }
];
  return (
    <><section className="rounded-t-xl grid place-content-center gap-2 bg-[#439e9e] h-screen px-8 py-24 text-white">
          <FlipLink href="#">Unseen ,</FlipLink>
          <FlipLink href="#">Feedback
          </FlipLink>
          <FlipLink href="#">Vanishing
          </FlipLink>
          <FlipLink href="#">Clients !
          </FlipLink>
          <div className=" mt-10 flex flex-col"><span className="text-3xl font-bold">95% of customer calls at a vehicle dealership are never reviewed. That’s why customers leave silently.</span>
              </div>
      </section>
       <div ref={containerRef} className="bg-[#e9c0e9] h-fit mx-auto">
      <div className={`p-10 text-[#502274] flex flex-row  items-top gap-4 justify-around transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <span className="font-extrabold text-5xl transition-transform duration-500 hover:scale-105">
          What we offer?
        </span>
        <p className={`text-white font-bold text-2xl w-1/2 transform transition-transform duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          Customers are signaling churn, missed appointments, poor service, repeat issues — All revenue leak signals! RevenueGear captures 100% of customer voice & revenue leak signals so your team can act before the revenue goes away.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div></>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-2xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};