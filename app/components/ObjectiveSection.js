import CTAButton from "./CTAButton";

export default function ObjectiveSection() {
    return (
      <section className="bg-black w-screen text-white py-16 px-8">
        <div className=" font-sans max-w-4xl mx-auto text-center">
          {/* Subheading */}
          <h3 className="text-pink-500 text-lg font-semibold tracking-wider mb-4">
            MY OBJECTIVE HERE IS SIMPLE...
          </h3>
  
          {/* Main Heading */}
          <h1 className="text-4xl font-bold uppercase tracking-wider leading-tight mb-8">
            Helping You Grow In Youtube Automation By Teaching You Everything...Plus Give You The Complete Path And Guidance To Make Your First $1000 From Youtube In Record Time.
          </h1>
  
          {/* Description */}
          <p className="text-lg mb-8 text-left">
            Here's just a mere fraction of the <span className="font-bold">golden nuggets you'll discover</span> with our coaching program…
          </p>
  
          {/* Bullet Points */}
          <ul className="text-left space-y-4 mb-8">
            <li className="text-lg">
              <span className="font-bold">KEYS TO YTA SUCCESS</span> - Hours of coaching where you will learn all the secret ways to get successful in record time and build a money printing machine from your YouTube Automation Channel.
            </li>
            <li className="text-lg">
              <span className="font-bold">Money Printing Systems</span> - Complete files and documents with strict guidelines to make sure your every piece of content is being created to go viral.
            </li>
            <li className="text-lg">
              <span className="font-bold">THE SECRET ELIXZOR SAUCE</span> - The one and only way to start making money from your YouTube Channel from <span className="font-bold">DAY 1</span>.
            </li>
          </ul>
          
          <CTAButton text="YES! I WANT TO START" subtext="Limited seats available, so book your slot before they run out." />
        </div>
      </section>
    );
  }
  