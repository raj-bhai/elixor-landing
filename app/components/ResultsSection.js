import React from 'react';
import CTAButton from './CTAButton';

export default function ResultsSection() {
  return (
    <section className="bg-black font-sans text-white py-16 px-8 w-full">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-purple-500 text-lg font-semibold tracking-wider mb-2">
          OUR RESULTS
        </h3>
        <h1 className="text-4xl font-bold uppercase tracking-wider leading-tight mb-8">
          Speaks For Itself
        </h1>

        {/* Carousel Placeholder */}
        <div className="relative bg-gradient-to-b from-purple-800 to-black h-[300px] lg:h-[400px] rounded-lg mb-8 flex items-center justify-between px-4">
          <button className="text-white text-3xl">&#9664;</button> {/* Left arrow */}
          <div className="text-2xl text-white">Carousel Placeholder</div>
          <button className="text-white text-3xl">&#9654;</button> {/* Right arrow */}
        </div>

        {/* Call to Action Button */}
        <CTAButton text="YES! I WANT TO START" subtext="Limited seats available, so book your slot before they run out." />
      </div>
    </section>
  );
}
