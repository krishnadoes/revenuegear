"use client"
import React from 'react'
import { useState,useRef  ,useEffect} from 'react'
const Frq = () => {

     const [animate, setAnimate] = useState(false);
  const headingRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);
    const questions = [
        {
            "question": "What kind of businesses can benefit most from RevenueGear?",
            "answer": "RevenueGear is specifically designed for vehicle dealerships and service centers that handle a high volume of customer calls for inquiries, complaints, feedback, and service follow-ups. If you want to ensure no customer voice goes unheard and maximize retention, RevenueGear is for you."
        },
        {
            "question": "How does RevenueGear's AI improve customer satisfaction?",
            "answer": "Our AI analyzes 100% of customer calls, identifying sentiments, pain points, and unaddressed issues that typically go unnoticed. This allows your team to proactively resolve problems, personalize interactions, and improve service quality based on genuine customer feedback, leading to higher satisfaction and loyalty."
        },
        {
            "question": "Can RevenueGear detect specific issues like overcharging or missed follow-ups?",
            "answer": "Absolutely. RevenueGear's AI is trained to detect various 'revenue leaks' and service issues, including churn risk, repeat complaints, instances of overcharging, missed follow-ups, and other poor service signals, providing actionable insights for immediate correction."
        },
        {
            "question": "Is RevenueGear compatible with multiple languages, including Indian languages?",
            "answer": "Yes, RevenueGear offers extensive International & Indian Language Support. Our system understands customer calls in multiple languages, ensuring that vital feedback is captured and analyzed accurately without missing a word, regardless of the language spoken."
        },
        {
            "question": "How does RevenueGear provide '100% Visibility on All Recorded Calls'?",
            "answer": "RevenueGear integrates with your call recording systems to review every single customer call, including routine interactions like maintenance reminders and post-service follow-ups. This comprehensive review ensures you have complete insight into all customer interactions, identifying trends and individual issues."
        },
        {
            "question": "What is the 'Voice of Customer Dashboard'?",
            "answer": "The Voice of Customer Dashboard is a powerful, intuitive interface that consolidates all customer feedback. It allows you to track negative and positive feedback, monitor emerging trends, and evaluate your team's performance, providing a holistic view of customer sentiment and operational efficiency."
        }
    ]


  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]); // Use a ref for each content div to measure its height

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
        <div className='bg-[#f3f3f1] h-fit'>

            <div className="flex flex-col justify-center items-center p-10" ref={headingRef}>
      <h2 className={`text-6xl font-bold text-white ${animate ? 'animate-flipIn' : ''}`}>
        Demystifying <span className="text-[#2665d6]">RevenueGear.</span>
      </h2>
    

               <div>
      <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="transition-all duration-200 border border-gray-200 shadow-lg rounded-xl"
            style={{ backgroundColor: openIndex === index ? '#2665d6' : 'white' }}
          >
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className={`flex text-lg font-semibold ${openIndex === index ? 'text-white' : 'text-black'}`}>
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 transition-transform duration-200 ${openIndex === index ? 'rotate-180 text-white' : 'text-gray-400'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              ref={el => contentRefs.current[index] = el} // Assign ref to the div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0',
                opacity: openIndex === index ? '1' : '0',
                paddingBottom: openIndex === index ? '1.25rem' : '0', // Add padding when open (sm:pb-6 = 1.5rem, px-4 pb-5 = 1.25rem)
                paddingLeft: openIndex === index ? '1rem' : '0', // px-4 = 1rem
                paddingRight: openIndex === index ? '1rem' : '0', // px-4 = 1rem
              }}
            >
              <p className={`${openIndex === index ? 'text-white' : 'text-gray-700'}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
        </div>
    )
}

export default Frq