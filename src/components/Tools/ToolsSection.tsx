"use client";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import skills from '../../data/skill'; // Importing skills data
import { Button } from '@/components/ui/button'; // Assuming Button component exists
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (skillsRef.current) {
      const cards = skillsRef.current.querySelectorAll('.skill-card');

      cards.forEach(card => {
        gsap.from(card, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        });

        gsap.to(card, {
          scale: 1.05,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        });
      });

      // Animate the paragraph tag
      gsap.from(skillsRef.current.querySelector('.section-description'), {
        opacity: 0,
        y: 50,
        duration: 0.6,
        scrollTrigger: {
          trigger: skillsRef.current.querySelector('.section-description'),
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: true,
        },
      });
    }
  }, [skillsRef]);

  return (
    <div ref={skillsRef} className="max-w-7xl mx-auto px-4 py-8 mt-8">
      <h2 className="text-3xl font-bold mb-6">Technical Skill Details</h2>
      <p className="section-description text-gray-600 dark:text-white text-lg mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime distinctio, quibusdam mollitia excepturi laborum maiores repudiandae ea voluptas dolore, ut earum nulla atque molestias, quisquam reprehenderit debitis dicta rem!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card flex flex-col items-center">
            <Image
              src={skill.image}
              alt={skill.name}
              width={80}
              height={80}
              className="mb-2"
            />
            {/* <p className="text-sm text-gray-600">{skill.name}</p> */}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {/* Animated button with hover effect */}
        <Button>
          <Link href="/about">
            See More
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AnimatedSkillsSection;
