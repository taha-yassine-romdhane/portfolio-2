'use client'

import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import GitHubCalendar from 'react-github-calendar'

const GitHubContributions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col items-center pb-10"
    >
      <h2 className="text-2xl font-bold pb-5">
        Days I <span className="text-primary">Code</span>
      </h2>
      
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center">
          <GitHubCalendar
            username="taha-yassine-romdhane"
            blockSize={11}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function GitHubSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="rounded-lg bg-white/5 p-6 space-y-4"
    >
      <div className="flex items-center gap-2 text-lg font-semibold">
        <FaGithub className="text-2xl" />
        <h2>GitHub Contributions</h2>
      </div>
      <GitHubContributions />
    </motion.div>
  )
}
