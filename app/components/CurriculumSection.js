"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import useInView from "./useInView";
import { FaCheckCircle } from "react-icons/fa"; // Add icons for visual appeal

export default function CurriculumSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const bulletPoints = [
    "Module 1: What is YouTube Automation [YTA]",
    "Module 2: Misconceptions & mythbusters about YTA",
    "Module 3: Expectations from YTA",
    "Module 4: Finding Niche",
    "Module 5: Topic and title",
    "Module 6: Video production [Script, Voice over, Video editing and Thumbnail designing]",
    "Module 7: Uploading + SEO",
    "Module 8: Monetisation with prerequisite guidelines",
    "Module 9: Finding and nurturing Team",
    "Module 10: Managing and monitoring",
    "Module 11: Tips to achieve consistent growth",
    "Module 12: Secret hacks NO ONE TALKS ABOUT",
    "Module 13: Shortcuts to Success",
    "Module 14: ITERATING, ITERATING, ITERATING",
    "Module 15: Create, Multiply & Preserve Success",
  ];

  return (
    <section ref={ref} className="relative w-screen sm:w-screen bg-black text-white py-16 px-4 sm:px-32 flex flex-col items-center overflow-hidden">
      {/* Background Circle Image on the Left */}
      <div
        className=" absolute top-1/4 sm:top-1/3 transform -translate-y-1/2 overflow-hidden z-0 transition-transform duration-300"
        style={{ left: `calc(-45%)` }}
      >
        <img 
          src="/images/bg-circle.png"
          alt="Background Circle Left"
          className="sm:h-[150%] object-cover opacity-50"
        />
      </div>

      {/* Background Circle Image on the Right */}
      <div
        className="absolute sm:top-1/3 top-2/3 transform -translate-y-1/2 overflow-hidden z-0 transition-transform duration-300"
        style={{ right: `calc(-45%)` }}
      >
        <img 
          src="/images/bg-circle.png"
          alt="Background Circle Right"
          className="h-[150%] object-cover opacity-50 "
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      {/* Cohort Curriculum Section with Animation */}
      {inView && (
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-sans text-light-purple sm:text-3xl font-bold uppercase tracking-wider leading-tight">
            COHORT CURRICULUM
          </h2>
        </motion.div>
      )}

      {/* First Part of the Section */}
      <div className="text-left font-sans w-full sm:w-[80%] lg:w-[70%] space-y-4 mb-6 z-10">
        {bulletPoints.slice(0, 9).map((point, index) => (
          <motion.div
            key={index}
            className="flex items-center text-lg sm:text-xl bg-opacity-10 bg-light-purple py-2 px-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FaCheckCircle className="text-light-purple mr-2 flex-shrink-0" style={{ fontSize: '1.5em' }} />
            <span className="flex-1">{point}</span>
          </motion.div>
        ))}
      </div>

      {/* Second Part of the Section */}
      <div className="text-left w-full sm:w-[80%] lg:w-[70%] space-y-4 mb-6 z-10">
        {bulletPoints.slice(9).map((point, index) => (
          <motion.div
            key={index + 9}
            className="flex items-center text-lg sm:text-xl bg-opacity-10 bg-light-purple py-2 px-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (index + 9) * 0.1 }}
          >
            <FaCheckCircle className="text-light-purple mr-2 flex-shrink-0" style={{ fontSize: '1.5em' }} />
            <span className="flex-1">{point}</span>
          </motion.div>
        ))}
      </div>

      {/* Image and CTA Button Section */}
      <div className="relative w-full sm:w-[60%] lg:w-[50%] flex flex-col items-center mb-1 z-10">
        <Image
          src="/images/youtube-gift.png" 
          alt="YouTube Awards"
          width={600}
          height={250}
          className="object-contain"
        />
      </div>

      {/* Call to Action Button */}
      <CTAButton
        text="YES! I WANT TO START"
        subtext="Limited seats available, so book your slot before they run out."
        className="z-10"
      />
    </section>
  );
}
