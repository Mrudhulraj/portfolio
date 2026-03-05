import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaAws,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si'

// ===== PERSONAL INFO =====
// Update these with your own details
export const personalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  tagline: 'I build exceptional digital experiences that live on the internet.',
  description:
    'A passionate developer with experience in building web applications with modern technologies. I love turning complex problems into simple, beautiful, and intuitive solutions.',
  email: 'your.email@example.com',
  location: 'Your City, Country',
  resumeUrl: '#', // Link to your resume PDF
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
}

// ===== ABOUT SECTION =====
export const aboutData = {
  image: '', // Add path to your photo
  bio: [
    "Hello! I'm a software developer who enjoys creating things that live on the internet. My interest in web development started back when I first tried customizing a website — turns out that taught me a lot about HTML & CSS!",
    "Fast-forward to today, and I've had the privilege of working at various companies, building products that reach thousands of users. My main focus these days is building accessible, inclusive products and digital experiences.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.",
  ],
  highlights: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Coffee Cups', value: '∞' },
  ],
}

// ===== PROJECTS =====
// Add your own projects here
export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance.',
    image: '', // Add project screenshot path
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team workspaces. Helps teams stay organized and productive.',
    image: '',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'DnD'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A beautiful weather application that shows real-time weather data, forecasts, and interactive maps. Features location-based weather and saved locations.',
    image: '',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'REST API Service',
    description:
      'A scalable RESTful API with authentication, rate limiting, and comprehensive documentation. Built following industry best practices and design patterns.',
    image: '',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    category: 'backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React and Vite. Features smooth animations, dark theme, and an elegant design.',
    image: '',
    tags: ['React', 'Vite', 'CSS3'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Chat Application',
    description:
      'A real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with WebSocket for instant communication.',
    image: '',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

// ===== SKILLS =====
export const skillsData = {
  categories: [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 90 },
        { name: 'JavaScript', icon: SiJavascript, level: 85 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'Next.js', icon: SiNextdotjs, level: 75 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85 },
        { name: 'Python', icon: FaPython, level: 75 },
        { name: 'MongoDB', icon: SiMongodb, level: 80 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 70 },
      ],
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90 },
        { name: 'Docker', icon: FaDocker, level: 70 },
        { name: 'AWS', icon: FaAws, level: 65 },
        { name: 'Figma', icon: FaFigma, level: 75 },
      ],
    },
  ],
}

// ===== NAVIGATION =====
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]
