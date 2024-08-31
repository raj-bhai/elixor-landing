"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useTransform, useViewportScroll } from 'framer-motion';
import CTAButton from './CTAButton';
import { FaDollarSign, FaChartLine, FaTrophy } from 'react-icons/fa';
import Image from 'next/image';

export default function ResultsSection() {
  const slides = [
    {
      id: 1,
      title: "Achieved $5000+ Monthly Revenue",
      description: "How we helped a client achieve $5000+ monthly revenue in just 3 months.",
      icon: FaDollarSign,
    },
    {
      id: 2,
      title: "1 Million Subscribers in 6 Months",
      description: "Scaling from zero to 1 million subscribers with our YouTube automation techniques.",
      icon: FaChartLine,
    },
    {
      id: 3,
      title: "Turning a Hobby into a Six-Figure Career",
      description: "Turning a hobby into a full-time career with consistent six-figure earnings.",
      icon: FaTrophy,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  // Define the minimum and maximum scale values for the circles
  const minScale = 1;
  const maxScale = 1.5;

  // Use framer-motion's useTransform to map the scroll position to the scale value
  const scale = useTransform(scrollY, [0, 500], [minScale, maxScale]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      {
        threshold: 0.5, // Adjust this value to determine when the section is considered "in view"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black font-sans text-white py-16 px-8 w-full overflow-hidden"
    >
      {/* Left Background Half-Circle */}
      <motion.div
        className="fixed top-1/2 left-[-150px] transform -translate-y-1/2 transition-transform duration-1000 ease-in-out"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          scale,
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)', // Left half of the circle
        }}
      >
        <Image 
          src="/images/bg-circle.png"
          alt="Background Half Circle Left"
          width={300}
          height={300}
        />
      </motion.div>

      {/* Right Background Half-Circle */}
      <motion.div
        className="fixed top-1/2 right-[-150px] transform -translate-y-1/2 transition-transform duration-1000 ease-in-out"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          scale,
          clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)', // Right half of the circle
        }}
      >
        <Image 
          src="/images/bg-circle.png"
          alt="Background Half Circle Right"
          width={300}
          height={300}
          style={{ transform: 'scaleX(-1)' }} // Flip horizontally to mirror the left side
        />
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h3
          className="text-purple-500 text-lg font-semibold tracking-wider mb-2"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          OUR RESULTS
        </motion.h3>
        <motion.h1
          className="text-4xl font-bold uppercase tracking-wider leading-tight mb-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          Speaks For Itself
        </motion.h1>

        {/* Carousel */}
        <motion.div
          className="relative bg-gradient-to-b from-purple-900 to-black h-[350px] lg:h-[500px] rounded-lg mb-8 flex items-center justify-between overflow-hidden shadow-lg"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? slides.length - 1 : prevIndex - 1
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white text-3xl rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-md transition-colors"
          >
            &#9664;
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-8">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="text-7xl text-purple-400">
                {React.createElement(slides[currentIndex].icon)}
              </div>
              <h2 className="text-3xl font-bold">{slides[currentIndex].title}</h2>
              <p className="text-lg max-w-2xl">{slides[currentIndex].description}</p>
            </div>
          </div>

          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white text-3xl rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-md transition-colors"
          >
            &#9654;
          </button>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <CTAButton
            text="YES! I WANT TO START"
            subtext="Limited seats available, so book your slot before they run out."
          />
        </motion.div>
      </div>
    </section>
  );
}
