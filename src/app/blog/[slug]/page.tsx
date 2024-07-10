// src/app/blog/[slug]/page.tsx

import { blogs } from '@/data/blogs';
import Link from 'next/link';
import Head from 'next/head';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogs.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    // Add other metadata as needed
  };
}

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const post = blogs.find((post) => post.slug === params.slug);

  if (!post) {
    return <p className="text-red-500">Post not found</p>;
  }

  const popularBlogs = [blogs[0], blogs[1], blogs[4]]; // First, second, and fifth blogs
  const recentBlogs = [blogs[5], blogs[6], blogs[2]]; // Sixth, seventh, and third blogs

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        {/* Add other SEO-related meta tags here */}
      </Head>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-4">By {post.author} on {post.date}</p>
            <img className="w-full h-auto mb-4" src={post.img} alt={post.title} />
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </main>
          <aside className="w-full lg:w-1/4 space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">About Author</h2>
              <div className="flex items-center">
                <img src="/profile/profile.png" alt="Author Avatar" className="w-16 h-16 rounded-full mr-4" />
                <p className="text-sm text-gray-700">
                  Ajesh Kumar Rana is a senior data scientist with a passion for writing and sharing knowledge.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Popular Blogs</h2>
              <ul>
                {popularBlogs.map((blog) => (
                  <li key={blog.slug} className="mb-4 flex items-center">
                    <img src={blog.img} alt={blog.title} className="w-16 h-16 object-cover mr-4 rounded-full" />
                    <div>
                      <h3 className="text-sm font-medium">{blog.title}</h3>
                      <p className="text-xs text-gray-600">{blog.author} - {blog.date}</p>
                      <p className="text-xs text-gray-700">{blog.description}</p>
                      <Link href={`/blog/${blog.slug}`} className="mt-2 text-blue-700 font-semibold text-xs transition duration-300 hover:underline">

                        <span style={{ textDecorationColor: "#3490dc", textDecorationThickness: "2px" }}>Read More</span>

                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Recent Blogs</h2>
              <ul>
                {recentBlogs.map((blog) => (
                  <li key={blog.slug} className="mb-4 flex items-center">
                    <img src={blog.img} alt={blog.title} className="w-16 h-16 object-cover mr-4 rounded-full" />
                    <div>
                      <h3 className="text-sm font-medium">{blog.title}</h3>
                      <p className="text-xs text-gray-600">{blog.author} - {blog.date}</p>
                      <Link href={`/blog/${blog.slug}`} className="mt-2 text-blue-700 font-semibold text-xs transition duration-300 hover:underline">

                        <span style={{ textDecorationColor: "#3490dc", textDecorationThickness: "2px" }}>Read More</span>

                      </Link>
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

export default BlogPost;
