'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Documents IA Scanner',
    description: 'An AI-powered document scanning and management system. Features OCR, automatic categorization, and smart search capabilities.',
    image: '/images/documents-ia-scanner.svg',
    tags: ['Next.js', 'Python', 'TensorFlow', 'MongoDB'],
    github: 'https://github.com/yourusername/documents-ia-scanner',
    demo: 'https://documents-ia-scanner.demo',
    featured: true
  },
  {
    title: 'PDF Manager',
    description: 'A web application for managing and organizing PDF documents with advanced search and annotation features.',
    image: '/images/pdf-manager.svg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/pdf-manager',
    demo: 'https://pdf-manager.demo',
    featured: true
  },
  {
    title: 'Task Dashboard',
    description: 'A modern task management dashboard with real-time updates and team collaboration features.',
    image: '/images/task-dashboard.svg',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    github: 'https://github.com/yourusername/task-dashboard',
    demo: 'https://task-dashboard.demo',
    featured: true
  },
  {
    title: 'Casalogy',
    description: 'An e-commerce platform for home decor and furniture with AR visualization features.',
    image: '/images/casalogy.svg',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/yourusername/casalogy',
    demo: 'https://casalogy.com',
    featured: false
  },
  {
    title: 'Hotel Reservation System',
    description: 'A comprehensive hotel booking and management system with real-time availability.',
    image: '/images/hotel-reservation.svg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/hotel-reservation',
    demo: 'https://hotel-reservation.demo',
    featured: false
  },
]

const MacbookFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-full">
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* Main Body */}
      <div className="relative">
        {/* Screen Frame */}
        <div className="bg-[#272729] rounded-[14px] p-[6px] shadow-xl">
          {/* Inner Bezel */}
          <div className="bg-[#050505] rounded-[10px] overflow-hidden">
            {/* Camera Housing */}
            <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[80px] h-[15px] bg-[#050505] rounded-b-[8px] z-20 flex items-center justify-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#272729] ring-[2px] ring-[#050505] relative">
                <div className="absolute inset-0 bg-[#050505] opacity-60"></div>
              </div>
            </div>
            {/* Screen Content */}
            <div className="relative rounded-lg overflow-hidden">
              {children}
              {/* Screen Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10"></div>
              <div className="absolute inset-0 bg-[#050505]/5"></div>
              {/* Screen Reflection */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-white/[0.05] to-transparent transform -skew-y-12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hinge Area */}
        <div className="relative h-[25px] bg-[#272729] mx-[20%] -mt-[1px] rounded-b-xl">
          {/* Hinge Details */}
          <div className="absolute bottom-0 inset-x-0">
            <div className="mx-auto w-[80%] h-[3px] bg-[#171717] rounded-t-sm"></div>
          </div>
          {/* Side Curves */}
          <div className="absolute bottom-0 left-0 w-[15px] h-[15px] bg-[#272729]"></div>
          <div className="absolute bottom-0 right-0 w-[15px] h-[15px] bg-[#272729]"></div>
          {/* Hinge Shadow */}
          <div className="absolute bottom-0 inset-x-0 h-[8px] bg-gradient-to-b from-black/0 to-black/20"></div>
        </div>

        {/* Base/Stand */}
        <div className="relative mx-[15%] h-[4px] -mt-[1px] z-10">
          {/* Base Top */}
          <div className="absolute inset-x-0 h-[4px] bg-[#272729] rounded-b-xl transform perspective-1000 rotateX-70">
            {/* Base Reflection */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Table Reflection */}
        <div className="absolute bottom-0 inset-x-[15%] h-[25px] bg-gradient-to-b from-black/20 to-transparent blur-sm"></div>
      </div>
    </div>
  </div>
)

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.featured
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all' 
                ? 'bg-primary/20 text-primary' 
                : 'bg-gray-800/50 text-gray-300'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'featured' 
                ? 'bg-primary/20 text-primary' 
                : 'bg-gray-800/50 text-gray-300'
            }`}
          >
            Featured
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="mb-4">
              <MacbookFrame>
                <div className="relative aspect-[16/10]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </MacbookFrame>
            </div>
            <div className="p-4 bg-[#171717] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-colors">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
