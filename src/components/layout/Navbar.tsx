'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

const navItems = [
  { path: '/', label: 'Home', icon: <FaHome size={16} /> },
  { path: '/about', label: 'About', icon: <FaUser size={16} /> },
  { path: '/skills', label: 'Skills', icon: <FaCode size={16} /> },
  { path: '/projects', label: 'Projects', icon: <FaBriefcase size={16} /> },
  { path: '/contact', label: 'Contact', icon: <FaEnvelope size={16} /> },
]

const socialLinks = [
  { href: 'https://github.com/yourusername', icon: <FaGithub size={16} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin size={16} />, label: 'LinkedIn' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-16 bg-background border-b border-white/5 backdrop-blur-md z-50"
    >
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          TR
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 rounded-md flex items-center gap-2 text-sm transition-colors ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                {item.icon}
                <span className="hidden sm:block">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/5 rounded-md -z-10"
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
