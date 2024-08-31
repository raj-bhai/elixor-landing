"use client";

import Image from 'next/image';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';
import useInView from './useInView';

export default function ProgressSection() {
  // Use the custom useInView hook to trigger animations when the section enters the viewport
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="relative w-screen bg-black text-white py-16 px-8 flex flex-col items-center overflow-hidden">
      {/* Moving Purple Sphere */}
      {isInView && (
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-purple-800 rounded-full z-0"
          animate={{
            x: ["-20%", "120%"], // Move from left to right
            y: ["0%", "30%", "-20%"], // Move vertically slightly
          }}
          transition={{
            duration: 20, // Duration of one full cycle (left to right)
            repeat: Infinity, // Keep it looping
            ease: "linear",
          }}
        />
      )}

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center z-10 relative">
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-end space-y-16 lg:w-1/3 lg:mr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 3rd Month */}
          <div className="text-right">
            <h2 className="text-6xl font-bold text-[#7E3A27]">
              3<sup className="text-lg align-top">RD</sup>
            </h2>
            <p className="text-xl mt-2">MONTH</p>
            <p className="text-3xl font-semibold mt-2">EXPERT</p>
          </div>

          {/* 6th Month */}
          <div className="text-right">
            <h2 className="text-6xl font-bold text-[#7E3A27]">
              6<sup className="text-lg align-top">TH</sup>
            </h2>
            <p className="text-xl mt-2">MONTH</p>
            <p className="text-3xl font-semibold mt-2">MASTER</p>
          </div>

          {/* 12th Month */}
          <div className="text-right">
            <h2 className="text-6xl font-bold text-[#7E3A27]">
              12<sup className="text-lg align-top">TH</sup>
            </h2>
            <p className="text-xl mt-2">MONTH</p>
            <p className="text-3xl font-semibold mt-2">LEGENDARY</p>
          </div>
        </motion.div>

        {/* Middle Divider Line with Motion */}
        <motion.div
          className="flex flex-col items-center mx-8 lg:w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image 
            src="/images/divider-line.png"  // Make sure this path is correct
            alt="Divider Line"
            width={200}
            height={730}
            className="object-contain"
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-col items-start space-y-16 lg:w-1/3 lg:ml-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 3rd Month Details */}
          <div>
            <ul className="space-y-2 text-lg">
              <li>Engaging Audience</li>
              <li>$250-$500 INCOME</li>
              <li>Finalizing branding and style</li>
            </ul>
          </div>

          {/* 6th Month Details */}
          <div>
            <ul className="space-y-2 text-lg">
              <li>Plans for diversifying</li>
              <li>$1000+ INCOME</li>
              <li>Brand deals and more...</li>
            </ul>
          </div>

          {/* 12th Month Details */}
          <div>
            <ul className="space-y-2 text-lg">
              <li>Business</li>
              <li>$5000+ INCOME</li>
              <li>Multiple income sources + channels</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Call to Action Button with Motion */}
      <motion.div
        className="mt-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CTAButton
          text="YES! I WANT TO START"
          subtext="Limited seats available, so book your slot before they run out."
        />
      </motion.div>
    </section>
  );
}
