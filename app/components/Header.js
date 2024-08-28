import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0e041f] h-[80px] py-2 text-white z-50">
      {/* Centered Header Image */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="Elixzor Logo"
          width={300}
          height={50}
          layout="intrinsic"  // Keeps the logo's intrinsic size
        />
      </div>

      {/* Pink Line that spans full width of the window */}
      <div className="absolute left-0 w-full h-[40px] flex flex-col items-end">  {/* Set the height you want */}
        <Image
          src="/images/line.png"
          alt="Decorative Pink Line"
          layout="fill"  // Makes the image fill its container
          objectFit="cover"  // Ensures the image scales correctly without distorting
        />
      </div>
    </header>
  );
}
