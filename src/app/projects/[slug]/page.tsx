// src/app/projects/[slug]/page.tsx
import { projects } from '@/data/project';
import Link from 'next/link';
import Head from 'next/head';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    // Add other metadata as needed
  };
}

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return <p className="text-red-500">Project not found</p>;
  }

  // Fetch recent projects excluding the current one
  const recentProjects = projects.filter((otherProject) => otherProject.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
        {/* Add other SEO-related meta tags here */}
      </Head>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-500 mb-4">Completed on {project.date}</p>
            <img className="w-full h-auto mb-4" src={project.img} alt={project.title} />
            <div className="prose" dangerouslySetInnerHTML={{ __html: project.content }}></div>
            <h2 className="text-lg font-semibold mt-8">Tools Used</h2>
            <ul className="list-disc pl-5">
              {project.tools.map((tool, index) => (
                <li key={index} className="text-gray-700">{tool}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/projects">
                <span className="text-blue-500 underline cursor-pointer">
                  Go back to Projects
                </span>
              </Link>
            </div>
          </main>
          <aside className="w-full lg:w-1/4 space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Recent Projects</h2>
              <ul>
                {recentProjects.map((recentProject) => (
                  <li key={recentProject.slug} className="mb-4">
                    <div className="flex items-center space-x-4">
                      <img src={recentProject.img} alt={recentProject.title} className="w-12 h-12 rounded-full" />
                      <div>
                        <h3 className="text-sm font-medium">{recentProject.title}</h3>
                        <p className="text-xs text-gray-500">{recentProject.description}</p>
                        <Link href={`/projects/${recentProject.slug}`}>
                          <span className=" text-blue-500 underline text-xs cursor-pointer">Read More</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
