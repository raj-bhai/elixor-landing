import CTAButton from './CTAButton';

export default function LandingSection() {
  return (
    <section className="relative w-screen h-auto flex flex-col items-center text-white p-4 bg-purple">
      {/* Background Circle Image on the Left */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[55%] overflow-hidden z-0">
        <img 
          src="/images/bg-circle.png"  // Ensure this is the correct path to your image
          alt="Background Circle Left"
          className="h-[150%] object-cover opacity-100"  // Adjust height if needed
        />
      </div>

      {/* Background Circle Image on the Right */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[55%] overflow-hidden z-0">
        <img 
          src="/images/bg-circle.png"  // Ensure this is the correct path to your image
          alt="Background Circle Right"
          className="h-[150%] object-cover opacity-100"
          style={{ transform: 'scaleX(-1)' }}  // Flip the image horizontally
        />
      </div>

      {/* Heading Section */}
      <div className="relative z-10 text-center pt-6 sm:w-[80%] md:w-[70%] lg:w-[60%] w-[90%] font-sans">
        <h3 className="text-purple-400 text-2xl sm:text-3xl font-semibold tracking-wide">
          FINALLY...
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider mt-4 leading-tight">
          You Can Learn One-On-One From The Most Successful Team in YouTube Automation
        </h1>
      </div>

      {/* Video Placeholder */}
      <div className="relative z-10 flex justify-center items-center mt-8 sm:mt-12 w-full">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-[#000] rounded-lg shadow-xl overflow-hidden">
          <video className="w-full h-full object-cover" controls>
            <source src="/videos/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="relative z-10 mt-8 sm:mt-12">
        <CTAButton
          text="YES! I WANT TO START"
          subtext="Limited seats available, so book your slot before they run out."
        />
      </div>

      {/* Footer Info Section */}
      <div className="relative z-10 flex flex-col sm:flex-row w-full justify-around items-center mt-12 sm:mt-16 py-6 border-t border-purple-600 font-sans">
        <div className="text-center flex items-center mb-4 sm:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l4 4 8-8" />
          </svg>
          <p className="ml-3 text-lg sm:text-xl font-semibold">1:1 PERSONAL COACHING</p>
        </div>
        <div className="text-center flex items-center mb-4 sm:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l4 4 8-8" />
          </svg>
          <p className="ml-3 text-lg sm:text-xl font-semibold">GUARANTEED RESULTS</p>
        </div>
        <div className="text-center flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l4 4 8-8" />
          </svg>
          <p className="ml-3 text-lg sm:text-xl font-semibold">NO EXPERIENCE NEEDED</p>
        </div>
      </div>
    </section>
  );
}
