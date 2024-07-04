"use client"
import { FC } from 'react';
import { blogs } from '../../data/blogs';
import { Button } from '@/components/ui/button';
import styles from '../../app/blog/page.module.css'; // Import the CSS module
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogDetails: FC = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-4">Blog Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogs.slice(0, 4).map((blog) => (
              <article key={blog.id} className={`border rounded-lg ${styles.blogCard}`}>
                <div className="relative">
                  <Image
                    src={blog.img} // Assuming 'img' is the field for image URL in your blog data
                    alt={blog.title}
                    width={300}
                    height={200}
                    className={`w-full h-48 object-cover ${styles.blogImage}`}
                  />
                  <div className={styles.blogDetails}>
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                    <p className="text-sm">{blog.description}</p>
                  </div>
                </div>
                <div className={styles.blogContent}>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                      {blog.author}
                    </span>
                    <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                      {blog.date}
                    </span>
                  </div>
                  <Link href={`/blogs/${blog.id}`}>
                    <Button className={`mb-4 ${styles.readMore}`}>
                      Read More
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {/* Animated button with hover effect */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button asChild>
                <Link href="/blogs">

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

export default BlogDetails;
