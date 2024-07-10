"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { LinkedinIcon, GithubIcon, InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react'; // Import Lucide icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo in the left corner */}
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <Image src="/logo/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
        </Link>

        {/* Copyright text in the middle */}
        <div className="text-gray-400 text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

        {/* Social media links below the copyright text */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <motion.a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="w-6 h-6 mx-1"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="text-white" size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="w-6 h-6 mx-1"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon className="text-white" size={24} />
          </motion.a>

          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="w-6 h-6 mx-1"
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon className="text-white" size={24} />
          </motion.a>

          <motion.a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="w-6 h-6 mx-1"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon className="text-white" size={24} />
          </motion.a>


          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="w-6 h-6 mx-1"
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon className="text-white" size={24} />
          </motion.a>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
