import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/solid';
import CTAButton from './CTAButton';

export default function LandingSection() {
  return (
    <section className="relative bg-purple w-screen h-auto flex flex-col items-center  text-white p-4">
      {/* Heading Section */}
      <div className="text-center pt-10 sm:w-[60%] font-sans w-[80%]">
        <h3 className="text-purple-400 text-2xl tracking-wider">FINALLY...</h3>
        <h1 className="text-4xl font-bold uppercase tracking-widest mt-2">
          You can learn one-on-one from the most successful team in Youtube Automation
        </h1>
      </div>

      {/* Video Placeholder */}
      <div className="flex justify-center items-center mt-8 ">
        <div className=" w-full h-[400px] bg-[#000] ">
          <video className="w-full h-full" controls>
            {/* Placeholder video source */}
            <source src="/videos/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute right-[5%] top-[50%] transform translate-y-[-50%]">
          {/* <Image src="/images/rocket.png" alt="Rocket Icon" width={80} height={100} /> */}
        </div>
      </div>
      <CTAButton text="YES! I WANT TO START" subtext="Limited seats available, so book your slot before they run out." />
      {/* Footer Info Section */}
      <div className="flex w-full font-sans justify-around items-center mt-12 py-4 border-t border-purple-600">
        <div className="text-center flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l4 4 8-8" />
          </svg>
          <p className="  ">1:1 PERSONAL COACHING</p>
        </div>
        <div className="text-center flex items-center ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l4 4 8-8" />
          </svg>
          <p className="mt-2">GUARANTEED RESULTS</p>
        </div>
        <div className="text-center flex items-center ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l4 4 8-8" />
          </svg>
          <p className="mt-2">NO EXPERIENCE NEEDED</p>
        </div>
      </div>
    </section>
  );
}
