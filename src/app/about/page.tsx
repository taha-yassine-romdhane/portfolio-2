'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaHeart } from 'react-icons/fa'
import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Terminal Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/40 rounded-t-lg overflow-hidden"
      >
        <div className="bg-black/60 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-gray-400 ml-2 font-mono">about.tsx</span>
        </div>
        <div className="p-6 font-mono">
          <p className="text-green-400">$ whoami</p>
          <div className="mt-2 text-gray-300">
            <p>
              <span className="text-primary">const</span> developer = {'{'}
            </p>
            <p className="ml-4">
              name: <span className="text-green-400">"Taha Yassine Romdhane"</span>,
            </p>
            <p className="ml-4">
              role: <span className="text-green-400">"Full Stack Developer"</span>,
            </p>
            <p className="ml-4">
              location: <span className="text-green-400">"Sousse, Tunisia"</span>,
            </p>
            <p className="ml-4">
              currentlyAt: <span className="text-green-400">"TEK-UP"</span>,
            </p>
            <p className="ml-4">
              passions: [<span className="text-green-400">"Web Development"</span>, <span className="text-green-400">"Problem Solving"</span>, <span className="text-green-400">"Innovation"</span>]
            </p>
            <p>{'}'}</p>
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <FaGraduationCap className="text-primary" />
          <span>Education & Experience</span>
        </h2>
        
        <div className="relative border-l-2 border-primary/20 pl-8 ml-4 space-y-8">
          {/* Experience */}
          <div className="relative">
            <div className="absolute -left-[2.35rem] w-4 h-4 bg-primary rounded-full" />
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-black/20 p-6 rounded-lg border border-white/5 hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaBriefcase className="text-primary" />
                <h3 className="text-xl font-medium">Software Developer</h3>
              </div>
              <p className="text-gray-400 font-mono">TEK-UP • 2023 - Present</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Developed and maintained multiple full-stack applications using Next.js and TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Implemented modern UI/UX designs with Tailwind CSS and Framer Motion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Collaborated with cross-functional teams to deliver high-quality solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Education */}
          <div className="relative">
            <div className="absolute -left-[2.35rem] w-4 h-4 bg-primary rounded-full" />
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-black/20 p-6 rounded-lg border border-white/5 hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGraduationCap className="text-primary" />
                <h3 className="text-xl font-medium">TEK-UP University</h3>
              </div>
              <p className="text-gray-400 font-mono">Software Engineering • 2020 - 2023</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Specialized in full-stack development and cloud computing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Graduated with honors, completing several real-world projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Led team projects and participated in coding competitions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Hobbies Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Link href="/hobbies">
          <button className="inline-flex items-center gap-2 bg-[#0066FF]/10 text-[#0066FF] px-6 py-3 rounded-lg hover:bg-[#0066FF]/20 transition-colors text-sm">
            <FaHeart className="w-4 h-4" />
            <span>View My Hobbies</span>
          </button>
        </Link>
      </motion.div>

      {/* Personal Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-black/20 p-6 rounded-lg border border-white/5"
      >
        <h2 className="text-2xl font-semibold mb-4">Beyond Code</h2>
        <p className="text-gray-300 leading-relaxed">
          When I'm not coding, I'm passionate about staying up-to-date with the latest tech trends 
          and contributing to the developer community. I believe in writing clean, maintainable code 
          and creating intuitive user experiences. I'm always excited to take on new challenges and 
          learn from other developers.
        </p>
      </motion.div>
    </div>
  )
}
