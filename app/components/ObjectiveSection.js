"use client"; // Ensure this is a client component

import CTAButton from "./CTAButton";
import useInView from "./useInView";

export default function ObjectiveSection() {
  const [subheadingRef, subheadingInView] = useInView({ threshold: 0.1 });
  const [headingRef, headingInView] = useInView({ threshold: 0.1 });
  const [descriptionRef, descriptionInView] = useInView({ threshold: 0.1 });
  const [bulletPointsRef, bulletPointsInView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative bg-gradient-to-r from-black via-purple to-black w-screen text-white py-16 px-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple via-transparent to-purple opacity-20"></div>
      
      <div className="relative font-sans max-w-4xl mx-auto text-center z-10">
        {/* Subheading */}
        <h3
          ref={subheadingRef}
          className={`text-pink-500 text-lg font-semibold tracking-wider mb-4 ${
            subheadingInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
          } transition-all duration-700 ease-out`}
        >
          MY OBJECTIVE HERE IS SIMPLE...
        </h3>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider leading-tight mb-8 ${
            headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'
          } transition-all duration-700 ease-out`}
        >
          Helping You Grow In Youtube Automation By Teaching You Everything...
          <span className="text-pink-500 underline">Plus</span> Give You The Complete Path And Guidance To Make Your First
          <span className="text-green-400"> $1000</span> From Youtube In Record Time.
        </h1>

        {/* Decorative Divider */}
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>

        {/* Description */}
        <p
          ref={descriptionRef}
          className={`text-lg sm:text-xl mb-8 text-left ${
            descriptionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
          } transition-all duration-700 ease-out`}
        >
          Here's just a mere fraction of the <span className="font-bold text-yellow-400">golden nuggets you'll discover</span> with our coaching program…
        </p>

        {/* Bullet Points */}
        <ul
          ref={bulletPointsRef}
          className={`text-left space-y-6 mb-8 ${
            bulletPointsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
          } transition-all duration-700 ease-out`}
        >
          <li className="text-lg sm:text-xl bg-gray-800 p-4 rounded-lg shadow-lg">
            <span className="font-bold text-pink-500">KEYS TO YTA SUCCESS</span> - Hours of coaching where you will learn all the secret ways to get successful in record time and build a money printing machine from your YouTube Automation Channel.
          </li>
          <li className="text-lg sm:text-xl bg-gray-800 p-4 rounded-lg shadow-lg animate-delay-200">
            <span className="font-bold text-yellow-400">Money Printing Systems</span> - Complete files and documents with strict guidelines to make sure your every piece of content is being created to go viral.
          </li>
          <li className="text-lg sm:text-xl bg-gray-800 p-4 rounded-lg shadow-lg animate-delay-400">
            <span className="font-bold text-green-400">THE SECRET ELIXZOR SAUCE</span> - The one and only way to start making money from your YouTube Channel from <span className="font-bold text-pink-500">DAY 1</span>.
          </li>
        </ul>

        {/* Call to Action Button */}
        <CTAButton text="YES! I WANT TO START" subtext="Limited seats available, so book your slot before they run out." />
      </div>
    </section>
  );
}
