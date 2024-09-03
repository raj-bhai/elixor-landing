"use client";

import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="relative w-screen md:w-full bg-black text-white py-16 px-4 flex flex-col items-center overflow-hidden">

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 w-full max-w-5xl">
        {/* First Pricing Box */}
        <div className="border-2 border-purple-500 p-8 rounded-lg bg-gradient-to-b from-purple-900 to-black text-center shadow-lg flex-1 mx-4">
          <h2 className="text-5xl font-bold text-white mb-4">$499</h2>
          <div className="h-[2px] bg-purple-500 mb-4"></div>
          <ul className="text-lg space-y-2 mb-8">
            <li>- 1 Month Cohort</li>
            <li>- 15 hours CALLS</li>
            <li>- Discord Community Access as Level 1</li>
          </ul>
          <button className="mt-4 py-3 px-6 rounded-full bg-green-600 hover:bg-green-700 text-white text-xl font-semibold">
            Get Access Now!
          </button>
        </div>

        {/* Second Pricing Box */}
        <div className="border-2 border-purple-500 p-8 rounded-lg bg-gradient-to-b from-purple-900 to-black text-center shadow-lg flex-1 mx-4">
          <h2 className="text-5xl font-bold text-white mb-4">$1,499</h2>
          <div className="h-[2px] bg-purple-500 mb-4"></div>
          <ul className="text-lg space-y-2 mb-8">
            <li>- 3 Month Cohort</li>
            <li>- 30 hours CALLS</li>
            <li>- Discord Community Access as Level 2</li>
            <li>- Live Recordings</li>
            <li>- PDF RESOURCES</li>
            <li>- Secret E-BOOK</li>
          </ul>
          <button className="mt-4 py-3 px-6 rounded-full bg-green-600 hover:bg-green-700 text-white text-xl font-semibold">
            Get Access Now!
          </button>
        </div>

        {/* Third Pricing Box */}
        <div className="border-2 border-purple-500 p-8 rounded-lg bg-gradient-to-b from-purple-900 to-black text-center shadow-lg flex-1 mx-4">
          <h2 className="text-5xl font-bold text-white mb-4">$14,999</h2>
          <div className="h-[2px] bg-purple-500 mb-4"></div>
          <ul className="text-lg space-y-2 mb-8">
            <li>- Build A Profitable YTA channel generating $1k-$5k/month within next 6 months</li>
            <li>- Everything in the $1499 Cohort</li>
          </ul>
          <button className="mt-4 py-3 px-6 rounded-full bg-green-600 hover:bg-green-700 text-white text-xl font-semibold">
            Get Access Now!
          </button>
        </div>
      </div>
    </section>
  );
}
