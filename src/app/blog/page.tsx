// components/BlogPage.tsx
import { FC } from 'react';
import Head from 'next/head';
import { blogs } from '../../data/blogs';
import styles from './page.module.css'; // Import your CSS module

const BlogPage: FC = () => {
  const recentBlogs = blogs.slice(0, 5); // Adjust the number of recent blogs as needed
  const popularBlogs = blogs.slice(5, 10); // Adjust the number of popular blogs as needed

  return (
    <>
      <Head>
        <title>My Blog Website</title>
        <meta name="description" content="A blog website showcasing various articles on different topics." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="blog, articles, tech, lifestyle, tutorials" />
        <meta name="author" content="Ajesh Kumar Rana" />
      </Head>
      <main className="container max-w-7xl p-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">My Blog Website</h1>
        </header>
        <div className="flex flex-col lg:flex-row gap-6">
          <section className={`w-full lg:w-3/4 mb-8 lg:mb-0 ${styles.blogsSection}`}>
            <h2 className="text-lg font-semibold mb-4">Blogs</h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${styles.blogGrid}`}>
              {blogs.map((blog) => (
                <article key={blog.id} className={`border rounded-lg p-4 ${styles.blogCard}`}>
                  <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
                  <h3 className="text-lg font-bold mt-4">{blog.title}</h3>
                  <p className="text-gray-600 text-sm">{blog.description}</p>
                  <p className="text-gray-500 text-xs">
                    By {blog.author} on {blog.date}
                  </p>
                  <a href={`/blogs/${blog.id}`} className={`mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 ${styles.readMore}`}>
                    Read More
                  </a>
                </article>
              ))}
            </div>
          </section>
          <aside className={`w-full lg:w-1/4 space-y-8 ${styles.asideSection}`}>
            <div>
              <h2 className="text-lg font-semibold mb-4">Popular Blogs</h2>
              <ul>
                {popularBlogs.map((blog) => (
                  <li key={blog.id} className={`mb-4 flex items-center ${styles.blogListItem}`}>
                    <img src={blog.img} alt={blog.title} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <h3 className="text-base font-semibold">{blog.title}</h3>
                      <p className="text-gray-500 text-xs">
                        By {blog.description}
                      </p>
                      <p className="text-gray-500 text-xs">
                        By {blog.author} on {blog.date}
                      </p>
                      <a href={`/blogs/${blog.id}`} className={`block mt-2 text-blue-500 transition duration-300 ${styles.readMore}`}>
                        Read More
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Recent Blogs</h2>
              <ul>
                {recentBlogs.map((blog) => (
                  <li key={blog.id} className={`mb-4 flex items-center ${styles.blogListItem}`}>
                    <img src={blog.img} alt={blog.title} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <h3 className="text-base font-semibold">{blog.title}</h3>
                      <p className="text-gray-500 text-xs">
                        By {blog.description}
                      </p>
                      <p className="text-gray-500 text-xs">
                        By {blog.author} on {blog.date}
                      </p>
                      <a href={`/blogs/${blog.id}`} className={`block mt-2 text-blue-500 transition duration-300 ${styles.readMore}`}>
                        Read More
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
