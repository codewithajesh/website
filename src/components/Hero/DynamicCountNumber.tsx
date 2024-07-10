"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DynamicCountNumber = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [tools, setTools] = useState(0);

  useEffect(() => {
    const interval = 40;
    const maxExperience = 8;
    const maxProjects = 12;
    const maxTools = 40;

    const experienceTimer = setInterval(() => {
      setExperience((prev) => {
        if (prev < maxExperience) return prev + 1;
        clearInterval(experienceTimer);
        return prev;
      });
    }, interval);

    const projectsTimer = setInterval(() => {
      setProjects((prev) => {
        if (prev < maxProjects) return prev + 1;
        clearInterval(projectsTimer);
        return prev;
      });
    }, interval);

    const toolsTimer = setInterval(() => {
      setTools((prev) => {
        if (prev < maxTools) return prev + 1;
        clearInterval(toolsTimer);
        return prev;
      });
    }, interval);

    return () => {
      clearInterval(experienceTimer);
      clearInterval(projectsTimer);
      clearInterval(toolsTimer);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-red-500 to-black via-pink-500 p-8 rounded-lg text-white">
      {/* Dynamic Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          className="p-4 bg-gray-900 rounded-lg mb-4 sm:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold">{experience}+</h3>
          <p className="text-gray-300">Years of Experience</p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900 rounded-lg mb-4 sm:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold">{projects}+</h3>
          <p className="text-gray-300">Projects Completed</p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold">{tools}+</h3>
          <p className="text-gray-300">Tools & Frameworks</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicCountNumber;
