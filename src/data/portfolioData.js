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
  tagline: 'I am a problem solver interested in the field of AI Infra Management and Distributed Systems',
  description:
    'A passionate developer with experience in building web applications with modern technologies. I love turning complex problems into simple, beautiful, and intuitive solutions.',
  email: 'mrudhuln@uci.edu',
  location: 'Irvine, USA',
  resumeUrl: 'https://drive.google.com/file/d/1N0xI4oxA2PulJ8pPwL0aJdX7SXyVFv78/view?usp=sharing', // Link to your resume PDF
  socialLinks: {
    github: 'https://github.com/Mrudhulraj',
    linkedin: 'https://www.linkedin.com/in/mrudhulraj-natarajan/',
  },
}

// ===== ABOUT SECTION =====
export const aboutData = {
  image: '/portfolio.jpeg', // Add path to your photo
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
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Assisted ec2 Instance Orchestrator with K8s',
    description:
      'A custom Kubernetes Operator to create ec2 Instances and mantain them from manifest files generated with help of an AI chatbot',
    image: '',
    tags: ['Python','Golang','OpenAI SDK','AWS SDK', 'Kubernetes','Cobra CLI'],
    category: 'AI+Kubernetes',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Go Kafka',
    description:
      'A simple Apache Kafka inspired framework to ensure coordinated communication between K8 services',
    image: '',
    tags: ['Golang', 'Kubernetes', 'Confluent SDK'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  }
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

// ===== RESEARCH =====
// export const researchData = [
//   {
//     title: 'Sample Research Project',
//     description: 'A brief description of your research project, publication, or paper. You can include the main idea, your role, and any results or impact.',
//     link: '#', // Link to paper, preprint, or project page
//   },
//   // Add more research items as needed
// ]

// ===== OPEN SOURCE CONTRIBUTIONS =====
export const openSourceData = [
  {
    project: 'LLM-D-Inf-Sim',
    description: 'Refactored the llm-d simulator’s Kubernetes manifests to correctly populate Vllm Engine configuration fields, enabling environment-aware validation of state-aware routing policies.',
    link: 'https://github.com/llm-d/llm-d-inference-sim', // Link to repo or PR
  },
  // Add more open source contributions as needed
]
