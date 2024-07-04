// components/AboutMe.tsx
"use client"
import React, { useState } from "react";
import Image from "next/image";
import skills from "../../data/skill";
import { Button } from '@/components/ui/button';  // Assuming Button component exists
import Link from "next/link";
import { motion } from "framer-motion";  // Import motion from Framer Motion

const ToolSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const skillsToShow = showAll ? skills : skills.slice(0, 18);

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Technical Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
            {skillsToShow.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }} // Scale up on hover
                whileTap={{ scale: 0.9 }} // Scale down on tap
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="mb-2"
                />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {/* Animated button with hover effect */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button asChild>
                <Link href="/about">
                  See More
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ToolSection;
