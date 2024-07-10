"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/Animated-3d-Card";
import HireMeButton from "../Hero/HireMeButton";
import { projects } from "../../data/project"; // Assuming the projects array is imported

gsap.registerPlugin(ScrollTrigger);

export function ProjectDetails() {
  useGSAP(() => {
    const cards = document.querySelectorAll(".card-container");

    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        scale: 0.9, // Initial scale
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Adjust the start position as per your preference
          end: "bottom 60%", // Adjust the end position as per your preference
          scrub: true,
        },
      });

      gsap.to(card, {
        scale: 1.05, // Zoom in scale
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Adjust the start position as per your preference
          end: "bottom 60%", // Adjust the end position as per your preference
          scrub: true,
        },
      });
    });
  }, [gsap]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Project Details</h2>
      <p className="section-description text-black dark:text-white text-lg mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam laboriosam ducimus qui! Laudantium odit maiores impedit, alias optio dolore non rem voluptatum, in at voluptatem ex earum fuga, iure ut.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter((project, index) => index === 0 || index === 2 || index === 4) // Filter to display 1st, 3rd, and 5th projects
          .map((project, index) => (
            <CardContainer key={project.slug} className="inter-var card-container">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-black text-sm max-w-full mb-4 dark:text-white"
                >
                  {project.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full relative overflow-hidden rounded-xl group-hover/card:shadow-xl"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-60 w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-b-xl">
                    <span className="text-xs font-medium text-white">
                      <Link href={`/projects/${project.slug}`}>See more →</Link>
                    </span>
                  </div>
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="60"
                  className="text-black text-sm max-w-full mt-4 dark:text-white"
                >
                  <p className="font-medium mb-2">Tools Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-200 text-sm rounded-md dark:bg-gray-700 dark:text-gray-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <HireMeButton />
      </div>
      <div className="flex justify-center mt-8">
        {/* Animated button with hover effect */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button asChild>
            <Link href="/about">See More</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
