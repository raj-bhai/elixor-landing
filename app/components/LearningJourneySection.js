import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function LearningJourneySection() {
  return (
    <section className="bg-black font-sans text-white py-8 sm:py-16 px-4 sm:px-8 w-screen sm:w-full">
      <div className="text-center mb-8 sm:mb-12">
        {/* Heading */}
        <h3 className="text-light-purple text-md sm:text-lg font-semibold tracking-wider mb-2">
          YOUR JOURNEY WITH US...
        </h3>

        <h1 className="text-2xl sm:text-4xl font-bold uppercase tracking-wider leading-tight">
          Insider Look At Your Journey In Our One-On-One Coaching Program
        </h1>
      </div>

      {/* Key Learnings */}
      <div className="space-y-12 sm:space-y-16">
        {/* First Key Learning */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col items-center lg:items-end lg:w-1/3 text-center lg:text-right mb-6 lg:mb-0">
            <div className="text-7xl sm:text-9xl font-bold text-[#7E3A27]">
              <span>1<sup className="text-lg align-top">ST</sup></span>
            </div>
            <div className="flex flex-col text-center lg:text-right mt-2 sm:mt-4">
              <span className="text-2xl sm:text-4xl text-gray-400">KEY</span>
              <span className="text-2xl sm:text-4xl">LEARNING</span>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/6 my-4 lg:my-0 lg:mr-2">
            <Image src="/images/key1.png" alt="Key 1" width={80} height={120} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2 lg:space-y-1">
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> What is YTA
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Mythbusters
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Expectations
            </li>
          </ul>
        </div>

        {/* Second Key Learning */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col items-center lg:items-end lg:w-1/3 text-center lg:text-right mb-6 lg:mb-0">
            <div className="text-7xl sm:text-9xl font-bold text-[#7E3A27]">
              <span>2<sup className="text-lg align-top">ND</sup></span>
            </div>
            <div className="flex flex-col text-center lg:text-right mt-2 sm:mt-4">
              <span className="text-2xl sm:text-4xl text-gray-400">KEY</span>
              <span className="text-2xl sm:text-4xl">UNDERSTANDING</span>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/6 my-4 lg:my-0 lg:mr-2">
            <Image src="/images/key2.png" alt="Key 2" width={80} height={120} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2 lg:space-y-1">
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Niche + Topics
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Content Creation
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Psychology Behind Content
            </li>
          </ul>
        </div>

        {/* Third Key Learning */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col items-center lg:items-end lg:w-1/3 text-center lg:text-right mb-6 lg:mb-0">
            <div className="text-7xl sm:text-9xl font-bold text-[#7E3A27]">
              <span>3<sup className="text-lg align-top">RD</sup></span>
            </div>
            <div className="flex flex-col text-center lg:text-right mt-2 sm:mt-4">
              <span className="text-2xl sm:text-4xl text-gray-400">KEY</span>
              <span className="text-2xl sm:text-4xl">GROWING</span>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/6 my-4 lg:my-0 lg:mr-2">
            <Image src="/images/key3.png" alt="Key 3" width={80} height={120} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2 lg:space-y-1">
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Monetisation
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Setup Adsense
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Delegation
            </li>
          </ul>
        </div>

        {/* Fourth Key Learning */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col items-center lg:items-end lg:w-1/3 text-center lg:text-right mb-6 lg:mb-0">
            <div className="text-7xl sm:text-9xl font-bold text-[#7E3A27]">
              <span>4<sup className="text-lg align-top">TH</sup></span>
            </div>
            <div className="flex flex-col text-center lg:text-right mt-2 sm:mt-4">
              <span className="text-2xl sm:text-4xl text-gray-400">KEY</span>
              <span className="text-2xl sm:text-4xl">SCALING</span>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/6 my-4 lg:my-0 lg:mr-2">
            <Image src="/images/key4.png" alt="Key 4" width={80} height={120} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2 lg:space-y-1">
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Finding Gems
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Management
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> SOPs
            </li>
          </ul>
        </div>

        {/* Fifth Key Learning */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col items-center lg:items-end lg:w-1/3 text-center lg:text-right mb-6 lg:mb-0">
            <div className="text-7xl sm:text-9xl font-bold text-[#7E3A27]">
              <span>5<sup className="text-lg align-top">TH</sup></span>
            </div>
            <div className="flex flex-col text-center lg:text-right mt-2 sm:mt-4">
              <span className="text-2xl sm:text-4xl text-gray-400">KEY</span>
              <span className="text-2xl sm:text-4xl">MASTERING</span>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/6 my-4 lg:my-0 lg:mr-2">
            <Image src="/images/key5.png" alt="Key 5" width={80} height={120} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2 lg:space-y-1">
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Businesses
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Multiple Channels
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" /> Softwares And Automation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
