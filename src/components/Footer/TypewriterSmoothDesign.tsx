import React from 'react';
import { TypewriterEffectSmooth } from "../ui/Animated-Typewritter"; // Ensure the correct path
import Link from 'next/link';

export default function TypewriterSmoothDesign() {
  const words = [
    { text: "Transforming" },
    { text: "Ideas" },
    { text: "into" },
    { text: "Reality with" },
    { text: "Ajesh Rana.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[30rem]">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
        <Link href="/contact">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white text-white text-sm">
            Contact
          </button>
        </Link>
        <Link href="/blog">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Blog
          </button>
        </Link>
      </div>
    </div>
  );
}
