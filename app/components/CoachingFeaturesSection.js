"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function CoachingFeaturesSection() {
  return (
    <section className="relative w-screen sm:w-full bg-black text-white py-16 px-4 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-light-purple text-lg sm:text-xl font-semibold tracking-wider mb-2">
          EVERYTHING YOU GET...
        </h3>
        <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider leading-tight">
          ALL THE FEATURES AND PERKS OF OUR COACHING PROGRAM
        </h1>
      </div>

      <div className="flex flex-col space-y-12 sm:space-y-8">
        {/* First Section - Image on Right */}
        <div className="flex flex-col-reverse md:flex-row md:mr-16 lg:mr-32 items-start md:items-stretch justify-between">
          <div className="flex flex-col items-start space-y-4 md:w-[50%] p-4 md:border-t md:border-b md:border-l md:border-white rounded-l-lg md:h-[300px]">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-bold">ONE-ON-ONE Coaching</h2>
              <FaCheckCircle className="text-blue-500 text-xl" />
            </div>
            <ul className="list-disc list-inside text-md sm:text-lg">
              <li>Live calls</li>
              <li>Notes & PDFs</li>
              <li>Call Recordings</li>
            </ul>
          </div>
          <div className="w-full md:w-[50%] h-full md:h-[300px]">
            <Image
              src="/images/live-call.png"
              alt="One-on-One Coaching"
              width={650}
              height={300}
              className="rounded-r-lg object-cover"
            />
          </div>
        </div>

        {/* Second Section - Image on Left */}
        <div className="flex flex-col md:flex-row md:ml-16 lg:ml-32 items-start md:items-stretch justify-between">
          <div className="w-full md:w-[50%] h-full md:h-[300px]">
            <Image
              src="/images/discord.png"
              alt="Discord Community"
              width={650}
              height={300}
              className="rounded-l-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-start space-y-4 md:w-[50%] p-4 md:border-t md:border-b md:border-r md:border-white rounded-r-lg h-full md:h-[300px]">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-bold">Discord Community</h2>
              <FaCheckCircle className="text-blue-500 text-xl" />
            </div>
            <ul className="list-disc list-inside text-md sm:text-lg">
              <li>Community contests and competitions with group QnA</li>
              <li>Multiple perks and support</li>
            </ul>
          </div>
        </div>

        {/* Third Section - Image on Right */}
        <div className="flex flex-col-reverse md:flex-row md:mr-16 lg:mr-32 items-start md:items-stretch justify-between">
          <div className="flex flex-col items-start space-y-4 md:w-[50%] p-4 md:border-t md:border-b md:border-l md:border-white rounded-l-lg h-full md:h-[300px]">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-bold">GOLDEN Resources</h2>
              <FaCheckCircle className="text-blue-500 text-xl" />
            </div>
            <ul className="list-disc list-inside text-md sm:text-lg">
              <li>Multiple SOPs</li>
              <li>Guide to Success</li>
              <li>Secret keys in PDF Format</li>
            </ul>
          </div>
          <div className="w-full md:w-[50%] h-full md:h-[300px]">
            <Image
              src="/images/resources.png"
              alt="Golden Resources"
              width={650}
              height={300}
              className="rounded-r-lg object-cover"
            />
          </div>
        </div>

        {/* Fourth Section - Image on Left */}
        <div className="flex flex-col md:flex-row md:ml-16 lg:ml-32 items-start md:items-stretch justify-between">
          <div className="w-full md:w-[50%] h-full md:h-[300px]">
            <Image
              src="/images/whatsapp.png"
              alt="Personal WhatsApp No."
              width={650}
              height={300}
              className="rounded-l-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-start space-y-4 md:w-[50%] p-4 md:border-t md:border-b md:border-r md:border-white rounded-r-lg h-full  md:h-[300px]">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-bold">Personal WhatsApp No.</h2>
              <FaCheckCircle className="text-blue-500 text-xl" />
            </div>
            <ul className="list-disc list-inside text-md sm:text-lg">
              <li>1:1 connection</li>
              <li>Personal and custom support from me</li>
            </ul>
          </div>
        </div>

        {/* Fifth Section - Image on Right */}
        <div className="flex flex-col-reverse md:flex-row md:mr-16 lg:mr-32 items-start md:items-stretch justify-between">
          <div className="flex flex-col items-start space-y-4 md:w-[50%] p-4 md:border-t md:border-b md:border-l md:border-white rounded-l-lg h-full md:h-[300px]">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-bold">Networking Opportunities</h2>
              <FaCheckCircle className="text-blue-500 text-xl" />
            </div>
            <ul className="list-disc list-inside text-md sm:text-lg">
              <li>Network with high level YouTubers</li>
              <li>YTA consultants from all over the world with perfect teams</li>
            </ul>
          </div>
          <div className="w-full md:w-[50%] h-full md:h-[300px]">
            <Image
              src="/images/networking.png"
              alt="Networking Opportunities"
              width={650}
              height={300}
              className="rounded-r-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
