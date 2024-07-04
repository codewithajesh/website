export interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    img: '/project/1.jpg',
    description: 'This is the description of the first project.',
    tools: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Project Two',
    img: '/project/2.jpg',
    description: 'This is the description of the second project.',
    tools: ['Python', 'Django', 'Bootstrap'],
  },
  {
    id: 3,
    title: 'Project Three',
    img: '/project/3.jpg',
    description: 'This is the description of the third project.',
    tools: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 4,
    title: 'Project Four',
    img: '/project/4.jpg',
    description: 'This is the description of the fourth project.',
    tools: ['Angular', 'TypeScript', 'SCSS'],
  },
  {
    id: 5,
    title: 'Project Five',
    img: '/project/5.jpg',
    description: 'This is the description of the fifth project.',
    tools: ['Java', 'Spring Boot', 'Thymeleaf'],
  },
  {
    id: 6,
    title: 'Project Six',
    img: '/project/6.jpg',
    description: 'This is the description of the sixth project.',
    tools: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 7,
    title: 'Project Seven',
    img: '/project/7.jpg',
    description: 'This is the description of the seventh project.',
    tools: ['Ruby', 'Rails', 'PostgreSQL'],
  },
  {
    id: 7,
    title: 'Project Seven',
    img: '/project/7.jpg',
    description: 'This is the description of the seventh project.',
    tools: ['Ruby', 'Rails', 'PostgreSQL'],
  },
];
