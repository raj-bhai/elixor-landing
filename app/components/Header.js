"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        setVisible(false);
      } else if (scrollTop < lastScrollTop || scrollTop <= 100) {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#0e041f] h-[80px] py-2 text-white z-50 transition-transform duration-300 ease-in-out ${
        visible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      {/* Centered Header Image */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="Elixzor Logo"
          width={300}
          height={50}
          layout="intrinsic"
        />
      </div>

      {/* Pink Line that spans full width of the window */}
      <div className="absolute left-0 w-full h-[40px] flex flex-col items-end">
        <Image
          src="/images/line.png"
          alt="Decorative Pink Line"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </header>
  );
}
