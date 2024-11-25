'use client'

import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaNode, 
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaServer,
  FaTools
} from 'react-icons/fa'
import { 
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiVercel
} from 'react-icons/si'
import { BiData } from 'react-icons/bi'

const skills = [
  {
    category: 'Frontend Development',
    icon: <FaCode className="text-blue-400" />,
    description: 'Building responsive and interactive user interfaces with modern web technologies.',
    items: [
      { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#ffffff' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: '#06B6D4' },
    ]
  },
  {
    category: 'Backend Development',
    icon: <FaServer className="text-green-400" />,
    description: 'Developing robust server-side applications and APIs.',
    items: [
      { name: 'Node.js', icon: <FaNode />, level: 85, color: '#339933' },
      { name: 'Python', icon: <FaPython />, level: 80, color: '#3776AB' },
      { name: 'Prisma', icon: <SiPrisma />, level: 85, color: '#2D3748' },
    ]
  },
  {
    category: 'Database',
    icon: <BiData className="text-purple-400" />,
    description: 'Managing and optimizing database systems for scalable applications.',
    items: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, color: '#336791' },
      { name: 'SQL', icon: <FaDatabase />, level: 85, color: '#00758F' },
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: <FaTools className="text-yellow-400" />,
    description: 'Implementing CI/CD pipelines and managing cloud infrastructure.',
    items: [
      { name: 'Docker', icon: <FaDocker />, level: 75, color: '#2496ED' },
      { name: 'AWS', icon: <FaAws />, level: 70, color: '#FF9900' },
      { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
      { name: 'Vercel', icon: <SiVercel />, level: 85, color: '#ffffff' },
    ]
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="text-primary">Skills</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency in various technologies.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {skills.map((category) => (
          <motion.div 
            key={category.category}
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-semibold">{category.category}</h2>
                <p className="text-gray-400 text-sm mt-1">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/20 p-6 rounded-lg space-y-4 border border-white/5 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-black/20 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    <span className="absolute -right-2 -top-6 text-sm font-mono text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 p-6 bg-black/20 rounded-lg border border-white/5"
      >
        <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
        <p className="text-gray-400">
          I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
          Currently exploring AI/ML integration in web applications and advanced cloud architecture patterns.
        </p>
      </motion.div>
    </div>
  )
}
