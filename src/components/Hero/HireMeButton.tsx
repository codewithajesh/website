// HireMe.tsx (located in the same folder as HeroSection)

import React from 'react';
import Link from 'next/link';

const HireMeButton = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <img src="/hire.png" alt="Hire Me" className="text-black animate-spin-slow" />
        <Link href="mailto:abcd@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-black">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMeButton;
