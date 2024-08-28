import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/solid';

export default function LandingSection() {
  return (
    <section className="relative mt-[50px] bg-[#0e041f] w-screen h-auto flex flex-col items-center  text-white p-4">
      {/* Heading Section */}
      <div className="text-center pt-10 sm:w-[60%] w-[80%]">
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

      {/* Call to Action Button */}
      <div className="flex justify-center mt-12 ">
      <button
          className="bg-gradient-to-r from-[#A32CC4] to-[#600080] hover:from-[#B238D7] hover:to-[#7D1E99] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transition">
          YES! I WANT TO START
        </button>
      </div>
      <p className="text-center text-sm mt-2">
        Limited seats available, so book your slot before they run out.
      </p>

      {/* Footer Info Section */}
      <div className="flex w-full justify-around items-center mt-12 py-4 border-t border-purple-600">
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
