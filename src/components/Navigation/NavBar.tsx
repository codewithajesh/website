"use client"
import React, { useState, useRef, RefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ToggleMode from './ToggleMode';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react'; // Import Lucide icons
import { HomeIcon, BriefcaseIcon, LucideAtom, MailIcon, UserIcon } from 'lucide-react'; // Import Lucide icons for additional links
import useGsap from '../../hooks/NavbarDesign';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null); // Correct type for logoRef
  const menuRef = useRef<HTMLDivElement>(null);
  const socialMediaRefs = [
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
  ] as RefObject<HTMLAnchorElement>[]; // Correct type for socialMediaRefs

  useGsap(
    [logoRef, menuRef, ...socialMediaRefs],
    [
      { from: { opacity: 0, y: -20 }, to: { opacity: 1, y: 0, duration: 1 } },
      { from: { opacity: 0 }, to: { opacity: 1, duration: 1, delay: 0.5 } },
      { from: { opacity: 0 }, to: { opacity: 1, duration: 1, delay: 0.6 } },
      { from: { opacity: 0 }, to: { opacity: 1, duration: 1, delay: 0.7 } },
      { from: { opacity: 0 }, to: { opacity: 1, duration: 1, delay: 0.8 } }
    ]
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Image src="/toggle/menu.svg" className="block h-6 w-6" alt="Menu Icon" width={24} height={24} />
              ) : (
                <Image src="/toggle/cross-mark.svg" className="block h-6 w-6" alt="Close Icon" width={24} height={24} />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0" ref={logoRef}>
              <Link href="/" className="flex items-center">
                <Image src="/logo/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6" ref={menuRef}>
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <HomeIcon className="w-5 h-5 mr-2" /> Home
                </Link>
                <Link href="/about" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <UserIcon className="w-5 h-5 mr-2" /> About Us
                </Link>
                <Link href="/work" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <BriefcaseIcon className="w-5 h-5 mr-2" /> Work
                </Link>
                <Link href="/blog" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <LucideAtom className="w-5 h-5 mr-2" /> Blog
                </Link>
                <Link href="/contact" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <MailIcon className="w-5 h-5 mr-2" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <div className="hidden sm:flex space-x-4">
              <motion.a // Use motion.a for clickable links
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-6 h-6 mx-1"
                whileTap={{ scale: 0.9 }}
                ref={socialMediaRefs[1]}
              >
                <InstagramIcon className="w-6 h-6" />
              </motion.a>
              <motion.a // Use motion.a for clickable links
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-6 h-6 mx-1"
                whileTap={{ scale: 0.9 }}
                ref={socialMediaRefs[2]}
              >
                <LinkedinIcon className="w-6 h-6" />
              </motion.a>
              <motion.a // Use motion.a for clickable links
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-6 h-6 mx-1"
                whileTap={{ scale: 0.9 }}
                ref={socialMediaRefs[3]}
              >
                <TwitterIcon className="w-6 h-6" />
              </motion.a>
              <motion.a // Use motion.a for clickable links
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-6 h-6 mx-1"
                whileTap={{ scale: 0.9 }}
                ref={socialMediaRefs[4]}
              >
                <FacebookIcon className="w-6 h-6" />
              </motion.a>
              <motion.a // Use motion.a for clickable links
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-6 h-6 mx-1"
                whileTap={{ scale: 0.9 }}
                ref={socialMediaRefs[0]}
              >
                <GithubIcon className="w-6 h-6" />
              </motion.a>
            </div>
            <ToggleMode />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium items-center">
              <HomeIcon className="w-5 h-5 mr-2" /> Home
            </Link>
            <Link href="/about" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium items-center">
              <UserIcon className="w-5 h-5 mr-2" /> About Us
            </Link>
            <Link href="/work" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2" /> Work
            </Link>
            <Link href="/blog" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium items-center">
              <LucideAtom className="w-5 h-5 mr-2" /> Blog
            </Link>
            <Link href="/contact" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium items-center">
              <MailIcon className="w-5 h-5 mr-2" /> Contact Us
            </Link>
            <div className="flex items-center space-x-4 mt-4">
              <motion.a // Use motion.a for clickable links
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-6 h-6"
                whileTap={{ scale: 0.9 }}
                ref={socialMediaRefs[0]}
              >
                <GithubIcon className="w-6 h-6" />
              </motion.a>
              <motion.a // Use motion.a for clickable links
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-6 h-6 mx-1"
                whileTap={{ scale: 0.9 }}
                ref={socialMediaRefs[1]}
              >
                <InstagramIcon className="w-6 h-6" />
              </motion.a>
              <motion.a // Use motion.a for clickable links
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-6 h-6 mx-1"
                whileTap={{ scale: 0.9 }}
                ref={socialMediaRefs[2]}
              >
                <LinkedinIcon className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
