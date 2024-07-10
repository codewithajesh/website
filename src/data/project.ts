// data/projects.ts
export interface Project {
  slug: string; // Unique slug for each project
  title: string;
  img: string;
  description: string;
  date: string;
  content: string; // Detailed content for each project
  tools: string[]; // List of tools used in the project
}

export const projects: Project[] = [
  {
    slug: 'banking-propensity-model',
    title: 'Banking Propensity Model',
    img: '/project/2.jpg',
    description: 'This is the description of the Banking Propensity Model project.',
    date: '2024-07-02',
    content: `
      <p>This is the detailed content for the Banking Propensity Model project. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/project2-img1.jpg" alt="Project Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/project2-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
    tools: ['Python', 'Machine Learning', 'Banking', "NLP"],
  },
  {
    slug: 'chatbot-application-llm',
    title: 'Chatbot Application (LLM)',
    img: '/project/1.jpg',
    description: 'This is the description of the Chatbot Application (LLM) project.',
    date: '2024-07-02',
    content: `
      <p>This is the detailed content for the Chatbot Application (LLM) project. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/project1-img1.jpg" alt="Project Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/project1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
    tools: ['Python', 'Natural Language Processing', 'AI'],
  },
  {
    slug: 'chatbot-application-llm',
    title: 'Chatbot Application (LLM)',
    img: '/project/1.jpg',
    description: 'This is the description of the Chatbot Application (LLM) project.',
    date: '2024-07-02',
    content: `
      <p>This is the detailed content for the Chatbot Application (LLM) project. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/project1-img1.jpg" alt="Project Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/project1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
    tools: ['Python', 'Natural Language Processing', 'AI'],
  },
  {
    slug: 'chatbot-application-llm',
    title: 'Chatbot Application (LLM)',
    img: '/project/1.jpg',
    description: 'This is the description of the Chatbot Application (LLM) project.',
    date: '2024-07-02',
    content: `
      <p>This is the detailed content for the Chatbot Application (LLM) project. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/project1-img1.jpg" alt="Project Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/project1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
    tools: ['Python', 'Natural Language Processing', 'AI'],
  },
  {
    slug: 'chatbot-application-llm',
    title: 'Chatbot Application (LLM)',
    img: '/project/1.jpg',
    description: 'This is the description of the Chatbot Application (LLM) project.',
    date: '2024-07-02',
    content: `
      <p>This is the detailed content for the Chatbot Application (LLM) project. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/project1-img1.jpg" alt="Project Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/project1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
    tools: ['Python', 'Natural Language Processing', 'AI'],
  },
  {
    slug: 'chatbot-application-llm',
    title: 'Chatbot Application (LLM)',
    img: '/project/1.jpg',
    description: 'This is the description of the Chatbot Application (LLM) project.',
    date: '2024-07-02',
    content: `
      <p>This is the detailed content for the Chatbot Application (LLM) project. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/project1-img1.jpg" alt="Project Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/project1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
    tools: ['Python', 'Natural Language Processing', 'AI'],
  },
  {
    slug: 'chatbot-application-llm',
    title: 'Chatbot Application (LLM)',
    img: '/project/1.jpg',
    description: 'This is the description of the Chatbot Application (LLM) project.',
    date: '2024-07-02',
    content: `
      <p>This is the detailed content for the Chatbot Application (LLM) project. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/project1-img1.jpg" alt="Project Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/project1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
    tools: ['Python', 'Natural Language Processing', 'AI'],
  },
  {
    slug: 'chatbot-application-llm',
    title: 'Chatbot Application (LLM)',
    img: '/project/1.jpg',
    description: 'This is the description of the Chatbot Application (LLM) project.',
    date: '2024-07-02',
    content: `
      <p>This is the detailed content for the Chatbot Application (LLM) project. It can include multiple paragraphs.</p>
      <p>Here's an example of another paragraph with some additional content.</p>
      <img src="/images/project1-img1.jpg" alt="Project Image 1" />
      <p>Here is some more content, including an image above.</p>
      <video controls>
        <source src="/videos/project1-video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Here is some more content, including a video above.</p>
      <a href="/files/sample-download.pdf" download class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">Download Sample PDF</a>
    `,
    tools: ['Python', 'Natural Language Processing', 'AI'],
  },
  // Add more projects similarly...
];
