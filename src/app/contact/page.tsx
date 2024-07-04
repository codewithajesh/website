"use client"
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimatedContactDetails from '../contact/AnimatedContactDetails'; // Assuming correct path to AnimatedContactDetails
import { contactDetails } from '../../data/contact'; // Assuming correct path to contactDetails
import { FlipWords } from "../../components/ui/Animated-Flip-Words"; // Import FlipWords component

// Define the structure of contactDetails using TypeScript interfaces
interface ContactDetails {
  phone: string;
  email: string;
  address: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string; // Adjusted to expect string for icon name
  }[];
}

const ContactPage: React.FC = () => {
  const words = ["Touch", "Contact"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <Head>
        <title>Contact Us - Ajesh Kumar Rana</title>
        <meta
          name="description"
          content="Contact Ajesh Kumar Rana - Senior Data Scientist and Web Developer. Get in touch via phone, email, or social media."
        />
      </Head>

      <div className="w-full max-w-4xl px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Form Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg mb-8 md:mb-0 md:mr-8"
        >
          <div className="flex items-center justify-center mb-8">
            <img
              src="/profile/profile.png"
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Get in
              <div className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
                <FlipWords words={words} />
              </div>
            </motion.h1>
          </div>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <motion.textarea
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white bg-white dark:bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
              />
            </div>

            <div className="flex items-center justify-between">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Contact Details */}
        <div className="w-full max-w-md">
          <AnimatedContactDetails contactDetails={contactDetails} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
