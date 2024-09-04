"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import useInView from './useInView'; // Import your custom hook

export default function FeaturesSection() {
  const [ref, isInView] = useInView({ once: true, threshold: 0.3 }); // Use your custom hook

  return (
    <section ref={ref} className="relative w-screen bg-black text-white py-16 px-8 flex justify-center items-center">
      <div className="text-center max-w-4xl mx-auto relative">
        {/* Subheading with Motion */}
        <motion.h3
          className="text-light-purple text-lg font-semibold tracking-wider mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          EVERYTHING YOU GET...
        </motion.h3>

        {/* Main Heading with Motion */}
        <motion.h1
          className="text-4xl font-bold uppercase tracking-wider leading-tight mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          All The Features And Perks Of Our Coaching Program
        </motion.h1>

        {/* Background Half-Circle Image with Subtle Scaling Motion */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[20%] z-0 w-full max-w-md"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={isInView ? { scale: 1, opacity: 0.8 } : { scale: 0.8, opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image 
            src="/images/bg-circle.png"  // Update the path to your half-circle image
            alt="Half Circle Background"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            quality={100}
            className="opacity-60"
          />
        </motion.div>

        {/* Features List Container with Motion */}
        <motion.div
          className="relative mx-auto p-8 bg-gradient-to-r from-[#270238] via-[#0b0119] to-[#270238] rounded-lg shadow-lg max-w-xl border border-white border-opacity-30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-black opacity-50 rounded-lg"></div>
          <ul className="relative z-10 text-left space-y-4 text-lg font-bold">
            <li>- ONE-ON-ONE Coaching</li>
            <li>- Lifetime access to recordings and coaching notes</li>
            <li>- Like minded discord community</li>
            <li>- Resources & SOPs</li>
            <li>- Personal WhatsApp number</li>
            <li>- Group QnA sessions</li>
            <li>- Networks and connections</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
