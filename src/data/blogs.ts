// data/blogs.ts
export interface Blog {
  slug: string; // Unique slug for each blog post
  title: string;
  img: string;
  description: string;
  author: string;
  date: string;
  category: string;
  authorAvatar: string;
  content: string;  // Detailed content for each blog
}

export const blogs: Blog[] = [
  {
    slug: 'second-blog-post',
    title: 'Second Blog Post',
    img: '/project/2.jpg',
    description: 'This is the description of the second blog post ailed content for the second blog post. It can include multiple paragraphs This is the detailed content for th.',
    author: 'Author 2',
    date: '2024-07-02',
    category: 'Networking',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the second blog post. It can include multiple paragraphs This is the detailed content for the second blog post. It can include multiple paragraphsThis is the detailed content for the second blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog2-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog2-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'firstblogpobbbst',
    title: 'Good Morning',
    img: '/project/1.jpg',
    description: 'This is the description of the first blog post.',
    author: 'Author 1',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the first blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog1-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'second-blog-post',
    title: 'Second Blog Post',
    img: '/project/2.jpg',
    description: 'This is the description of the second blog post.',
    author: 'Author 2',
    date: '2024-07-02',
    category: 'Networking',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the second blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog2-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog2-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'first-bloghvhvhvhv-post',
    title: 'First Blog Post',
    img: '/project/1.jpg',
    description: 'This is the description of the first blog post.',
    author: 'Author 1',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the first blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog1-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'second-blgvgvgvgog-post',
    title: 'Second Blog Post',
    img: '/project/2.jpg',
    description: 'This is the description of the second blog post.',
    author: 'Author 2',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the second blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog2-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog2-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'first-blovgvgvgvgg-post',
    title: 'First Blog Post',
    img: '/project/1.jpg',
    description: 'This is the description of the first blog post.',
    author: 'Author 1',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the first blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog1-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'second-blgvgvgvog-post',
    title: 'Second Blog Post',
    img: '/project/2.jpg',
    description: 'This is the description of the second blog post.',
    author: 'Author 2',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the second blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog2-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog2-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'first-blog-gcgvcgvpost',
    title: 'First Blog Post',
    img: '/project/1.jpg',
    description: 'This is the description of the first blog post.',
    author: 'Author 1',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the first blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog1-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'second-blvgvgvgog-post',
    title: 'Second Blog Post',
    img: '/project/2.jpg',
    description: 'This is the description of the second blog post.',
    author: 'Author 2',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the second blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog2-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog2-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'first-blogcgvgvg-post',
    title: 'First Blog Post',
    img: '/project/1.jpg',
    description: 'This is the description of the first blog post.',
    author: 'Author 1',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the first blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog1-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'second-blgcgcgog-post',
    title: 'Second Blog Post',
    img: '/project/2.jpg',
    description: 'This is the description of the second blog post.',
    author: 'Author 2',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the second blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog2-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog2-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  {
    slug: 'first-blovcvcgg-post',
    title: 'First Blog Post',
    img: '/project/1.jpg',
    description: 'This is the description of the first blog post.',
    author: 'Author 1',
    date: '2024-07-02',
    category: 'Data Science / AI',
    authorAvatar: '/profile/profile.png',
    content: `
      <p>This is the detailed content for the first blog post. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/blog1-img1.jpg" alt="Blog Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/blog1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black via-pink-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
  },
  // Add more blogs similarly
];
