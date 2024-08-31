import Image from 'next/image';

export default function LearningJourneySection() {
  return (
    <section className="bg-black font-sans text-white py-8 sm:py-16 px-4 sm:px-8 w-full">
      <div className="text-center mb-8 sm:mb-12">
        {/* Heading */}
        <h3 className="text-purple-500 text-md sm:text-lg font-semibold tracking-wider mb-2">
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
          <div className="flex justify-center items-center lg:w-1/3 my-4 lg:my-0">
            <Image src="/images/key1.png" alt="Key 1" width={120} height={240} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2">
            <li>What is YTA</li>
            <li>Mythbusters</li>
            <li>Expectations</li>
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
          <div className="flex justify-center items-center lg:w-1/3 my-4 lg:my-0">
            <Image src="/images/key2.png" alt="Key 2" width={120} height={240} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2">
            <li>Niche + Topics</li>
            <li>Content Creation</li>
            <li>Psychology Behind Content</li>
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
          <div className="flex justify-center items-center lg:w-1/3 my-4 lg:my-0">
            <Image src="/images/key3.png" alt="Key 3" width={120} height={240} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2">
            <li>Monetisation</li>
            <li>Setup Adsense</li>
            <li>Delegation</li>
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
          <div className="flex justify-center items-center lg:w-1/3 my-4 lg:my-0">
            <Image src="/images/key4.png" alt="Key 4" width={120} height={240} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2">
            <li>Finding Gems</li>
            <li>Management</li>
            <li>SOPs</li>
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
          <div className="flex justify-center items-center lg:w-1/3 my-4 lg:my-0">
            <Image src="/images/key5.png" alt="Key 5" width={120} height={240} />
          </div>
          <ul className="lg:w-1/3 text-center lg:text-left text-md sm:text-lg space-y-2">
            <li>Businesses</li>
            <li>Multiple Channels</li>
            <li>Softwares And Automation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
