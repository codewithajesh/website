"use client";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '../../data/blogs';

gsap.registerPlugin(ScrollTrigger);

const BlogDetails = () => {
  const blogRef = useRef<HTMLDivElement | null>(null);
  const selectedIndices = [1, 3, 5, 8, 9, 11, 13]; // Indices of the blogs you want to display
  const selectedBlogs = selectedIndices.map(index => blogs[index]).filter(blog => blog); // Filter out undefined values

  useGSAP(() => {
    if (blogRef.current) {
      const cards = blogRef.current.querySelectorAll('.blog-card');

      cards.forEach(card => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        });

        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
          scale: 1.05,
        });
      });
    }
  }, [blogRef]);

  return (
    <div ref={blogRef} className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Blog Details</h2>
      <p className="section-description text-gray-600 dark:text-white text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto sapiente asperiores sequi iste? Aperiam, id? Cum, sit? Unde alias, natus commodi delectus impedit dolorem provident non qui rerum aperiam?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedBlogs.slice(0, 6).map((blog) => (
          <div key={blog.slug} className="blog-card bg-white dark:bg-black dark:text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-64 overflow-hidden">
              <Image src={blog.img} alt={blog.title} layout="fill" objectFit="cover" className="transform hover:scale-110 transition-transform duration-300 ease-in-out" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>
              <div className="flex items-center">
                <Image src={blog.authorAvatar} alt={blog.author} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <p className="text-sm font-medium">{blog.author}</p>
                  <p className="text-xs text-gray-500">{blog.date}</p>
                </div>
              </div>
              <Link href={`/blog/${blog.slug}`} className="text-blue-500 text-xs font-bold hover:underline mt-4 block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
