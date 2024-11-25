'use client'

import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaDatabase
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss,
  SiPostgresql,
  SiMongodb
} from 'react-icons/si'
import Link from 'next/link'
import GitHubSection from '@/components/github/GitHubSection'

const socialLinks = [
  { href: 'https://github.com/yourusername', icon: <FaGithub size={20} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
  { href: 'https://twitter.com/yourusername', icon: <FaTwitter size={20} />, label: 'Twitter' },
]

const skills = [
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Neon', icon: <SiPostgresql className="text-[#00E699]" /> },
]

export default function Home() {
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
            <div className="flex-1 space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Taha Yassine Romdhane</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-text-secondary text-lg md:text-xl"
              >
                Full Stack Developer & Software Engineer
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-text-secondary"
              >
                Building modern web applications with a focus on user experience and performance.
                Based in Sousse, Tunisia.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 pt-4"
              >
                <Link 
                  href="/projects"
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  View Projects
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-2 border border-white/10 rounded-md hover:bg-white/5 transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  src="/images/avatar.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/5"></div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="p-4 rounded-lg bg-white/5 text-center">
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-text-secondary text-sm">Years Experience</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-text-secondary text-sm">Projects Completed</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-text-secondary text-sm">Happy Clients</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-text-secondary text-sm">Technologies</div>
            </div>
          </motion.div>

          {/* GitHub Contributions */}
          <GitHubSection />

          {/* Featured Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 pt-6"
          >
            {skills.map((skill) => (
              <span 
                key={skill.name}
                className="skill-tag code-text flex items-center gap-2"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
