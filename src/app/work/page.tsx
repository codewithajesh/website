import { FC } from 'react';
import Head from 'next/head';
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
          <h1 className="text-3xl font-bold">My Projects</h1>
        </header>
        <section className="w-full">
          <h2 className="text-lg font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
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
                  <a href={`/projects/${project.id}`} className={`bmb-4 ${styles.readMore}`}>
                    Read More
                  </a>
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
