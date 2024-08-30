import Image from 'next/image';
import CTAButton from './CTAButton';

export default function AdvancedJourneySection() {
  return (
    <section className="bg-black font-sans text-white py-16 px-8 w-full">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* First Key Growing */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 lg:space-x-8">
          <div className="flex items-center space-x-4 lg:space-x-0 lg:w-1/3">
            <div className="text-9xl font-bold text-[#7E3A27]">
              <span>3<sup className="text-lg align-top">RD</sup></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-4xl text-gray-400">KEY</span>
              <span className="text-4xl">GROWING</span>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/3 my-4 lg:my-0">
            <Image src="/images/key3.png" alt="Key 3" width={100} height={200} />
          </div>
          <ul className="lg:w-1/3 text-left text-lg space-y-2">
            <li>Monetisation</li>
            <li>Setup Adsense</li>
            <li>Delegation</li>
          </ul>
        </div>

        {/* Second Key Scaling */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 lg:space-x-8">
          <div className="flex items-center space-x-4 lg:space-x-0 lg:w-1/3">
            <div className="text-9xl font-bold text-[#7E3A27]">
              <span>4<sup className="text-lg align-top">TH</sup></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-4xl text-gray-400">KEY</span>
              <span className="text-4xl">SCALING</span>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/3 my-4 lg:my-0">
            <Image src="/images/key4.png" alt="Key 4" width={100} height={200} />
          </div>
          <ul className="lg:w-1/3 text-left text-lg space-y-2">
            <li>Finding Gems</li>
            <li>Management</li>
            <li>SOPs</li>
          </ul>
        </div>

        {/* Third Key Mastering */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
          <div className="flex items-center space-x-4 lg:space-x-0 lg:w-1/3">
            <div className="text-9xl font-bold text-[#7E3A27]">
              <span>5<sup className="text-lg align-top">TH</sup></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-4xl text-gray-400">KEY</span>
              <span className="text-4xl">MASTERING</span>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/3 my-4 lg:my-0">
            <Image src="/images/key5.png" alt="Key 5" width={100} height={200} />
          </div>
          <ul className="lg:w-1/3 text-left text-lg space-y-2">
            <li>Businesses</li>
            <li>Multiple Channels</li>
            <li>Softwares And Automation</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Button */}
      <CTAButton text="YES! I WANT TO START" subtext="Limited seats available, so book your slot before they run out." />
    </section>
  );
}
