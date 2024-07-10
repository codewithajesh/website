"use client";
import React, { FC, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { blogs, Blog } from "../../data/blogs";
import styles from "./page.module.css";

interface HomeProps { }

const Home: FC<HomeProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const popularBlogs: Blog[] = [blogs[0], blogs[1], blogs[4]];
  const recentBlogs: Blog[] = [blogs[5], blogs[6], blogs[2]];

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter(
      (blog) => blog.category.toLowerCase() === selectedCategory?.toLowerCase()
    )
    : blogs;

  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

  return (
    <>
      <Head>
        <title>My Blog Website</title>
        <meta
          name="description"
          content="A blog website showcasing various articles on different topics."
        />
        <meta
          name="keywords"
          content="blog, articles, tech, lifestyle, tutorials"
        />
        <meta name="author" content="Ajesh Kumar Rana" />
      </Head>
      <main className={`container max-w-7xl p-4 ${styles.main}`}>
        <div className="bg-gradient-to-r from-red-500 to-black via-pink-500 animate-gradient-x text-white py-24 mb-8 text-center">
          <h1 className="text-5xl font-bold">My Blog Website</h1>
          <p className="mt-4 text-xl">
            Welcome to my blog, where I share my thoughts and insights.
          </p>
        </div>
        <div className="flex justify-center mb-8 space-x-4">
          <button
            className={`px-4 py-2 rounded-lg transition duration-300 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white ${selectedCategory === null ? "" : "hover:from-blue-400 hover:to-blue-500"
              }`}
            onClick={() => handleCategorySelect(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg transition duration-300 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white ${selectedCategory === category.toLowerCase()
                  ? ""
                  : "hover:from-blue-400 hover:to-blue-500"
                }`}
              onClick={() => handleCategorySelect(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <section className="w-full lg:w-3/4 mb-8 lg:mb-0">
            <div className="space-y-6">
              {filteredBlogs.map((blog: Blog) => (
                <article
                  key={blog.slug}
                  className={`border rounded-lg p-4 flex flex-col lg:flex-row shadow-md ${styles.blogCard}`}
                >
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className={`w-full lg:w-1/3 h-64 object-cover mb-4 lg:mb-0 lg:mr-4 rounded-lg ${styles.blogCardImage}`}
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                      <p className="text-gray-700 mb-2">{blog.description}</p>
                      <p className="text-gray-500 text-sm mb-4">
                        {blog.content[0]}
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="text-sm text-gray-500">
                        <p>
                          By {blog.author} on {blog.date}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      passHref
                      className={`mt-2 inline-block bg-gradient-to-r from-red-500 to-black via-pink-500 text-white text-xs hover:from-blue-400 hover:to-blue-500 px-4 py-2 rounded-lg transition duration-300 self-start ${styles.readMoreLink}`}
                    >
                      Read More
                    </Link>
                    <div className={`self-end mt-4 ${styles.arrowButton}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white hover:from-blue-400 hover:to-blue-500 cursor-pointer"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a.75.75 0 0 1 .75.75v9.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 1.06-1.06l3.72 3.72V3.75A.75.75 0 0 1 10 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <aside className="w-full lg:w-1/4 space-y-6">
            <section>
              <div className="mb-8">
                <h2 className={`text-lg font-semibold mb-4`}>About Author</h2>
                <div className={`flex items-center`}>
                  <img
                    src="/profile/profile.png"
                    alt="Author Avatar"
                    className={`w-16 h-16 rounded-full mr-4`}
                  />
                  <div>
                    <p className={`text-gray-700 text-sm`}>
                      Ajesh Kumar Rana is a senior data scientist with a passion for writing and sharing knowledge.
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-4">Popular Posts</h2>
              <div className="space-y-4">
                {popularBlogs.map((blog) => (
                  <Link
                    href={`/blog/${blog.slug}`}
                    key={blog.slug}
                    passHref
                    className={`flex items-center ${styles.blogListItem}`}
                  >
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className={`w-16 h-16 object-cover rounded-lg mr-4 ${styles.blogListItemImage}`}
                    />
                    <div>
                      <h3 className={`text-lg font-semibold ${styles.title}`}>
                        {blog.title}
                      </h3>
                      <p className={`text-gray-500 text-sm ${styles.author}`}>
                        By {blog.author} on {blog.date}
                      </p>
                      <p className={`text-gray-700 text-sm ${styles.description}`}>
                        {blog.description}
                      </p>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-blue-500 text-xs font-bold hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
              <div className="space-y-4">
                {recentBlogs.map((blog) => (
                  <Link
                    href={`/blog/${blog.slug}`}
                    key={blog.slug}
                    passHref
                    className={`flex items-center ${styles.blogListItem}`}
                  >
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className={`w-16 h-16 object-cover rounded-lg mr-4 ${styles.blogListItemImage}`}
                    />
                    <div>
                      <h3 className={`text-lg font-semibold ${styles.title}`}>
                        {blog.title}
                      </h3>
                      <p className={`text-gray-500 text-sm ${styles.author}`}>
                        By {blog.author} on {blog.date}
                      </p>
                      <p className={`text-gray-700 text-sm ${styles.description}`}>
                        {blog.description}
                      </p>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-blue-500 text-xs font-bold hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Home;
