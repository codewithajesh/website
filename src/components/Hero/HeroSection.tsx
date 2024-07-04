// pages/index.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming Button component in Shadcn UI
import { ContactRound, Download } from 'lucide-react';
import HireMe from './HireMeButton';
import DynamicChange from './DynamicCountNumber';
import { FlipWords } from "../ui/Animated-Flip-Words"; // Import FlipWords component
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const HeroSection = () => {
  const words = ["Senior Data Scientist", "Web Developer", "Data Science & AI Trainer"];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
      {/* Profile Picture on the left */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mb-6 sm:mb-0 sm:mr-8 order-2 sm:order-1">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/profile/profile.png"
            alt="Profile Picture"
            width={600}
            height={520}
            className=" object-cover"
          />
        </motion.div>
      </div>

      {/* Content (heading, subheading, paragraph, buttons) on the right */}
      <div className="w-full sm:w-1/2 text-center sm:text-left order-1 sm:order-2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 relative overflow-hidden">
          <span className="text-white-500">Hi, I'm Ajesh Rana</span>
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Hi, I'm Ajesh Rana
          </span>
        </h1>
        <div className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
          <FlipWords words={words} />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I specialize in data science, creating innovative solutions that leverage data to drive business success. Explore my projects to see how I can help you achieve your goals.
        </p>
        {/* Dynamic Change component */}
        <DynamicChange />
        <br />
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Button asChild>
            <Link href="/file/resume.pdf" target="_blank" download>
              <Download className="animate-bounce" /> Resume
            </Link>
          </Button>
          <Button asChild>
            <Link href="mailto:ajesh.rana@edgetelecom.org" target="_blank">
              <ContactRound className="animate-in" /> Contact
            </Link>
          </Button>
        </div>

      </div>

      {/* HireMe component */}
      <HireMe />
    </section>
  );
};

export default HeroSection;
