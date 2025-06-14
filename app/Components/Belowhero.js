"use client"
import { useRef, useState, useEffect } from 'react';
import React from 'react'

const Belowhero = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.3,
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const whychooseus = [
        {
            title: "Unlock Hidden Insights",
            description: "Go beyond surface-level data. We reveal the 95% of unreviewed calls, exposing silent customer churn and missed revenue opportunities."
        },
        {
            title: "AI-Powered Precision",
            description: "Our advanced AI and machine learning models analyze every call with unparalleled accuracy, detecting subtle cues like sentiment, tone, and specific complaints that human ears often miss."
        },
        {
            title: "Multilingual Mastery",
            description: "Break down language barriers. RevenueGear understands customer calls in multiple international and Indian languages, ensuring no feedback is lost in translation."
        },
        {
            title: "Proactive Problem Solving",
            description: "Don't just react to issues – anticipate them. Our system identifies churn risks, repeat complaints, and service gaps *before* they escalate, allowing you to act swiftly."
        }
    ];

    return (
        <div className='bg-[#780016] h-screen '>
            <div
                ref={sectionRef}
                className={`flex flex-col mx-auto transition-opacity duration-[600ms] ease-out
        ${visible ? 'opacity-100 animate-bounceIn' : 'opacity-0'}
      `}
            >
                <div className="flex flex-col justify-center items-center my-10 gap-5">
                    <h2 className="font-semibold text-6xl text-[#e9c0e9]">Why Choose Us?</h2>
                    <span className="text-3xl font-medium text-white">
                        We're here for whatever you need
                    </span>
                </div>
            </div>

           <div className="flex flex-row mx-auto justify-center gap-8 mt-10">
  {whychooseus.map((item, index) => (
    <div
      key={index}
      className="relative overflow-hidden w-80 h-96 rounded-3xl cursor-pointer text-xl font-bold bg-[#e9c0e9]"
    >
      {/* This is the div that enables the hover effect over the entire card */}
      <div className="z-10 absolute w-full h-full peer"></div>

      {/* The first animated background circle (top-left) */}
      <div
        className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#f1d3f1] transition-all duration-500"
      ></div>

      {/* This is the div that contains the description and the second animated background circle.
          It is initially positioned far off-screen to prevent premature visibility.
          The `overflow-hidden` here ensures content inside doesn't spill out prematurely.
          Text color changed from red to black for better aesthetics with the background. */}
      <div
        className="absolute flex text-[#780016] text-lg text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-96 -right-96 w-36 h-44 rounded-full bg-[#f1d3f1] transition-all duration-500 p-4 overflow-hidden"
      >
        {item.description} {/* This now shows the full description on hover only */}
      </div>

      {/* This is the div that displays the content normally (the title) */}
      <div className="w-full h-full items-center justify-center flex uppercase text-2xl text-[#780016] p-4 text-center">
        {item.title} {/* This now shows the title normally */}
      </div>
    </div>
  ))}
</div>


        </div>
    )
}

export default Belowhero
