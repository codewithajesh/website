"use client"
import { FC } from 'react';
import { projects } from '../../data/project';
import { Button } from '@/components/ui/button';
import styles from '../../app/work/page.module.css'; // Import the CSS module
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectDetails: FC = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-4">Project Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.slice(0, 4).map((project) => (
              <article key={project.id} className={`border rounded-lg ${styles.projectCard}`}>
                <div className="relative">
                  <img src={project.img} alt={project.title} className={`w-full h-48 object-cover ${styles.projectImage}`} />
                  <div className={styles.projectDetails}>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a href={`/projects/${project.id}`} className={`mb-4 ${styles.readMore}`}>
                    Read More
                  </a>
                </div>
              </article>
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
        </section>
      </main>

    </>
  );
};

export default ProjectDetails;
