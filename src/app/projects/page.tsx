import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { projects } from '../../data/project';
import styles from './page.module.css'; // Import the CSS module

const ProjectPage: FC = () => {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="A project showcase website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="projects, tech, showcase, portfolio" />
        <meta name="author" content="Ajesh Kumar Rana" />
      </Head>
      <main className="container max-w-7xl p-4">
        <header className="text-center mb-8">
          <div className="bg-gradient-to-r from-red-500 to-black via-pink-500 animate-gradient-x text-white py-24 mb-8 text-center">
            <h1 className="text-5xl font-bold">My Project Website</h1>
            <p className="mt-4 text-xl">
              Welcome to my projects, where I share my latest completion and ongoing project details.
            </p>
          </div>
        </header>
        <section className="w-full">
          {/* <h2 className="text-lg font-semibold mb-4">Projects</h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <article key={project.slug} className={`border rounded-lg ${styles.projectCard}`}>
                <div className="relative">
                  <img src={project.img} alt={project.title} className={`w-full h-48 object-cover ${styles.projectImage}`} />
                  <div className={styles.projectDetails}>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tools && project.tools.map((tool, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className={`mb-4 bg-gradient-to-r from-red-500 to-black via-pink-500 ${styles.readMore}`}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectPage;
