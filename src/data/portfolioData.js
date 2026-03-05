import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaAws,
} from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiRedis,
  SiRocksdb,
  SiTerraform,
  SiKubernetes,
  SiApachekafka,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'

// ===== PERSONAL INFO =====
// Update these with your own details
export const personalInfo = {
  name: 'Mrudhulraj Natarajan',
  title: 'AI Developer + Backend Engineer',
  tagline: 'I build exceptional digital experiences that live on the internet.',
  description:
    'A passionate developer with experience in building web applications with modern technologies. I love turning complex problems into simple, beautiful, and intuitive solutions.',
  email: 'mrudhuln@uci.edu',
  location: 'Irvine, USA',
  resumeUrl: '#', // Link to your resume PDF
  socialLinks: {
    github: 'https://github.com/Mrudhulraj',
    linkedin: 'https://www.linkedin.com/in/mrudhulraj-natarajan/',
  },
}

// ===== ABOUT SECTION =====
export const aboutData = {
  image: '', // Add path to your photo
  bio: [
    "Hello! I'm an AI Research Engineer/Developer who enjoys developing optimized backend-applications. My interests lies in the intersection of AI and Systems.",
    "My experience primarily focuses on Agentic AI, LLM-inference-optimization,Distributed Edge Systems and K8s. "
  ],
  highlights: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Curiosity', value: '∞' },
  ],
}

// ===== PROJECTS =====
// Add your own projects here
export const projectsData = [
  {
    id: 1,
    title: 'Distributed File Storage System',
    description:
      'A Distributed File System using a B-Tree metadata store for hierarchical namespace management and a FUSE filesystem interface for POSIX compliant file operations. Guranteed Data Consistency and Replication of Data across Nodes. Amplified write upto 655x using client-side buffering',
    image: '', // Add project screenshot path
    tags: ['Golang', 'Grpc', 'ChunkServers'],
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
        { name: 'Golang', icon: FaGolang, level: 90 },
        { name: 'Python', icon: FaPython, level: 80 },
        { name: 'Django', icon: SiDjango, level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 70 },
        { name: 'Redis', icon: SiRedis, level: 80 },
        { name: 'RocksDB', icon: SiRocksdb, level: 80 },
      ],
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90 },
        // { name: 'GRPC', icon: FaGrpc, level: 90 },  
        { name: 'Docker', icon: FaDocker, level: 85 },
        { name: 'Kubernetes', icon: SiKubernetes, level: 85 },
        { name: 'Kafka', icon: SiApachekafka, level: 70 },
        { name: 'AWS', icon: FaAws, level: 80 },
        { name: 'Azure', icon: VscAzure, level: 80 },
        { name: 'Terraform', icon: SiTerraform, level: 75 },
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
