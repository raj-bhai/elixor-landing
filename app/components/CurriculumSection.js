"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import useInView from "./useInView";

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
    <section ref={ref} className="relative w-screen sm:w-full bg-black text-white py-16 px-4 sm:px-8 flex flex-col items-center overflow-hidden">
      {/* Subtle Moving Circular Background */}
      {inView && (
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-purple to-purple rounded-full z-0 opacity-50"
          animate={{
            x: ["-20%", "120%"],
            y: ["0%", "30%", "-20%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Cohort Curriculum Section with Animation */}
      {inView && (
        <motion.div
          className="text-center mb-8" // Reduced the bottom margin
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider leading-tight">
            COHORT CURRICULUM
          </h2>
        </motion.div>
      )}

      <div className="text-left w-full sm:w-[80%] lg:w-[70%] space-y-4 mb-6 z-10">
        {bulletPoints.slice(0, 9).map((point, index) => (
          <motion.p
            key={index}
            className="text-lg sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {point}
          </motion.p>
        ))}
      </div>

      {/* Second Part of the Section */}
      <div className="text-left w-full sm:w-[80%] lg:w-[70%] space-y-4 mb-6 z-10">
        {bulletPoints.slice(9).map((point, index) => (
          <motion.p
            key={index + 9}
            className="text-lg sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (index + 9) * 0.1 }}
          >
            {point}
          </motion.p>
        ))}
      </div>

      {/* Image and CTA Button Section */}
      <div className="relative w-full sm:w-[60%] lg:w-[50%] flex flex-col items-center mb-4 z-10">
        <Image
          src="/images/youtube-gift.png" 
          alt="YouTube Awards"
          width={600}
          height={300}
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
