"use client"; // Assuming this is for client-side rendering

import React, { useState, useRef, RefObject } from "react";
import Link from "next/link"; // Import Link component from Next.js
import Image from "next/image"; // Import Image component from Next.js
import ToggleMode from "./ToggleMode"; // Import ToggleMode component
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations
import {
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  HomeIcon,
  BriefcaseIcon,
  LucideAtom,
  MailIcon,
  UserIcon,
} from "lucide-react"; // Import icons from Lucide React
import useGsap from "../../hooks/NavbarDesign"; // Import custom hook useGsap from NavbarDesign


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close
  const logoRef = useRef<HTMLDivElement>(null); // Ref for the logo element
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu element
  const socialMediaRefs: RefObject<HTMLAnchorElement>[] = Array(5).fill(0).map(() => useRef<HTMLAnchorElement>(null)); // Refs array for social media icons

  // Custom hook for animations using GSAP and Framer Motion
  useGsap(
    [logoRef, menuRef, ...socialMediaRefs], // Elements to animate
    [
      { from: { opacity: 0, y: -20 }, to: { opacity: 1, y: 0, duration: 1 } }, // Animation definitions
      { from: { opacity: 0 }, to: { opacity: 1, duration: 1, delay: 0.5 } },
      { from: { opacity: 0 }, to: { opacity: 1, duration: 1, delay: 0.6 } },
      { from: { opacity: 0 }, to: { opacity: 1, duration: 1, delay: 0.7 } },
      { from: { opacity: 0 }, to: { opacity: 1, duration: 1, delay: 0.8 } },
    ]
  );

  // Function to toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Array of social media links with their respective URLs and icons
  const socialMediaLinks = [
    { href: "https://www.github.com", Icon: GithubIcon },
    { href: "https://www.linkedin.com", Icon: LinkedinIcon },
    { href: "https://www.facebook.com", Icon: FacebookIcon },
    { href: "https://www.twitter.com", Icon: TwitterIcon },
    { href: "https://www.instagram.com", Icon: InstagramIcon },


  ];

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16" aria-label="Main Navigation">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Conditional rendering of menu open/close icon */}
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex-shrink-0" ref={logoRef}>
              <Link href="/" className="flex items-center">
                <Image src="/logo/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
              </Link>
            </div>
            {/* Main navigation links */}
            <div className="hidden sm:block sm:ml-6" ref={menuRef}>
              <div className="flex space-x-4">
                <NavLink href="/" Icon={HomeIcon} label="Home" />
                <NavLink href="/about" Icon={UserIcon} label="About Us" />
                <NavLink href="/projects" Icon={BriefcaseIcon} label="Project" />
                <NavLink href="/blog" Icon={LucideAtom} label="Blog" />
                <NavLink href="/contact" Icon={MailIcon} label="Contact Us" />
              </div>
            </div>
          </div>
          {/* Social media icons and dark mode toggle */}
          <div className="flex items-center space-x-4 ml-auto">
            <div className="hidden sm:flex space-x-4">
              {/* Render social media icons */}
              {socialMediaLinks.map(({ href, Icon }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-6 h-6 mx-1"
                  whileTap={{ scale: 0.9 }}
                  ref={socialMediaRefs[index]}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            {/* Dark mode toggle */}
            <ToggleMode />
          </div>
        </nav>
      </div>

      {/* Mobile menu content */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Render mobile navigation links */}
            <NavLinkMobile href="/" label="Home" />
            <NavLinkMobile href="/about" label="About Us" />
            <NavLinkMobile href="/projects" label="Project" />
            <NavLinkMobile href="/blog" label="Blog" />
            <NavLinkMobile href="/contact" label="Contact Us" />
            {/* Render social media icons in mobile menu */}
            <div className="flex space-x-4 justify-center mt-4">
              {socialMediaLinks.map(({ href, Icon }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-6 h-6 mx-1"
                  whileTap={{ scale: 0.9 }}
                  ref={socialMediaRefs[index]}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Navigation link component with icon
const NavLink: React.FC<{ href: string; Icon: React.ElementType; label: string }> = ({ href, Icon, label }) => (
  <Link href={href} className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
    <Icon className="w-5 h-5 mr-2" /> {label}
  </Link>
);

// Mobile navigation link component
const NavLinkMobile: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <Link href={href} className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
    {label}
  </Link>
);

export default Navbar;
