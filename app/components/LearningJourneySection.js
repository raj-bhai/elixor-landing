import Image from 'next/image';

export default function LearningJourneySection() {
  return (
    <section className="bg-black font-sans text-white py-16 px-8 w-full">
      <div className="text-center mb-12">
        {/* Heading */}
        <h3 className="text-purple-500 text-lg font-semibold tracking-wider mb-2">
          YOUR JOURNEY WITH US...
        </h3>

        <h1 className="text-4xl font-bold uppercase tracking-wider leading-tight">
          Insider Look At Your Journey In Our One-On-One Coaching Program
        </h1>
      </div>

      {/* First Key Learning */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-16 lg:space-x-8">
        <div className="flex items-center space-x-4 lg:space-x-0 lg:w-1/3">
          <div className="text-9xl font-bold text-[#7E3A27]">
            <span>1<sup className="text-lg align-top">ST</sup></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-4xl text-gray-400">KEY</span>
            <span className="text-4xl">LEARNING</span>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/3 my-4 lg:my-0">
          <Image src="/images/key1.png" alt="Key 1" width={100} height={200} />
        </div>
        <ul className="lg:w-1/3 text-left text-lg space-y-2">
          <li>What is YTA</li>
          <li>Mythbusters</li>
          <li>Expectations</li>
        </ul>
      </div>

      {/* Second Key Learning */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
        <div className="flex items-center space-x-4 lg:space-x-0 lg:w-1/3">
          <div className="text-9xl font-bold text-[#7E3A27]">
            <span>2<sup className="text-lg align-top">ND</sup></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-4xl text-gray-400">KEY</span>
            <span className="text-4xl">UNDERSTANDING</span>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/3 my-4 lg:my-0">
          <Image src="/images/key2.png" alt="Key 2" width={100} height={200} />
        </div>
        <ul className="lg:w-1/3 text-left text-lg space-y-2">
          <li>Niche + Topics</li>
          <li>Content Creation</li>
          <li>Psychology Behind Content</li>
        </ul>
      </div>
    </section>
  );
}
