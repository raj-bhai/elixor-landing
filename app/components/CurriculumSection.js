"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";

export default function CurriculumSection() {
  return (
    <section className="relative w-screen sm:w-full bg-black text-white py-16 px-4 sm:px-8 flex flex-col items-center overflow-hidden">
      {/* Cohort Curriculum Section */}
      <div className="text-center mb-12">
        <h1 className="text-purple-500 text-lg sm:text-xl font-semibold tracking-wider mb-2">
          COHORT CURRICULUM
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider leading-tight">
          ELIXZOR
        </h2>
      </div>

      <div className="text-left w-full sm:w-[80%] lg:w-[70%] space-y-4 mb-12">
        <p className="text-lg sm:text-xl">
          Module 1: What is YouTube Automation [YTA]
        </p>
        <p className="text-lg sm:text-xl">
          Module 2: Misconceptions & mythbusters about YTA
        </p>
        <p className="text-lg sm:text-xl">
          Module 3: Expectations from YTA
        </p>
        <p className="text-lg sm:text-xl">
          Module 4: Finding Niche
        </p>
        <p className="text-lg sm:text-xl">
          Module 5: Topic and title
        </p>
        <p className="text-lg sm:text-xl">
          Module 6: Video production [Script, Voice over, Video editing and Thumbnail designing]
        </p>
        <p className="text-lg sm:text-xl">
          Module 7: Uploading + SEO
        </p>
        <p className="text-lg sm:text-xl">
          Module 8: Monetisation with prerequisite guidelines
        </p>
        <p className="text-lg sm:text-xl">
          Module 9: Finding and nurturing Team
        </p>
      </div>

      {/* Second Part of the Section */}
      <div className="text-left w-full sm:w-[80%] lg:w-[70%] space-y-4 mb-12">
        <p className="text-lg sm:text-xl">
          Module 10: Managing and monitoring
        </p>
        <p className="text-lg sm:text-xl">
          Module 11: Tips to achieve consistent growth
        </p>
        <p className="text-lg sm:text-xl">
          Module 12: Secret hacks NO ONE TALKS ABOUT
        </p>
        <p className="text-lg sm:text-xl">
          Module 13: Shortcuts to Success
        </p>
        <p className="text-lg sm:text-xl">
          Module 14: ITERATING, ITERATING, ITERATING
        </p>
        <p className="text-lg sm:text-xl">
          Module 15: Create, Multiply & Preserve Success
        </p>
      </div>

      {/* Image and CTA Button Section */}
      <div className="relative w-full sm:w-[60%] lg:w-[50%] flex flex-col items-center mb-12">
        <Image
          src="/images/youtube-gift.png" // Ensure this path is correct
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
      />
    </section>
  );
}
