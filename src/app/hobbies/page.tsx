'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaArrowLeft, 
  FaPizzaSlice, 
  FaHamburger, 
  FaCookie, 
  FaCoffee, 
  FaServer, 
  FaLaptopCode, 
  FaNetworkWired, 
  FaMicrochip,
  FaDragon,
  FaChessKnight,
  FaCrosshairs,
  FaGamepad
} from 'react-icons/fa';

interface Hobby {
  title: string;
  description: string;
  details: string[];
  icon: string;
  icons?: JSX.Element[];
}

export default function Hobbies() {
  const hobbies: Hobby[] = [
    {
      title: 'Gaming',
      description: 'Passionate about video games and gaming culture.',
      details: [
        'RPG/MMORPG',
        'Strategy/Chess',
        'FPS/Action',
        'Game Dev'
      ],
      icon: '🎮',
      icons: [
        <FaDragon key="rpg" className="text-[#0066FF] text-lg" />,
        <FaChessKnight key="strategy" className="text-[#0066FF] text-lg" />,
        <FaCrosshairs key="fps" className="text-[#0066FF] text-lg" />,
        <FaGamepad key="dev" className="text-[#0066FF] text-lg" />
      ]
    },
    {
      title: 'Cooking',
      description: 'Exploring culinary arts and creating delicious dishes.',
      details: [
        'Fast Food',
        'Desserts',
        'Coffee',
        'Pizza'
      ],
      icon: '👨‍🍳',
      icons: [
        <FaHamburger key="burger" className="text-[#0066FF] text-lg" />,
        <FaCookie key="cookie" className="text-[#0066FF] text-lg" />,
        <FaCoffee key="coffee" className="text-[#0066FF] text-lg" />,
        <FaPizzaSlice key="pizza" className="text-[#0066FF] text-lg" />
      ]
    },
    {
      title: 'Automation',
      description: 'Creating scripts and tools to make life easier.',
      details: [
        'DevOps',
        'Coding',
        'Networks',
        'Systems'
      ],
      icon: '⚡',
      icons: [
        <FaServer key="server" className="text-[#0066FF] text-lg" />,
        <FaLaptopCode key="code" className="text-[#0066FF] text-lg" />,
        <FaNetworkWired key="network" className="text-[#0066FF] text-lg" />,
        <FaMicrochip key="chip" className="text-[#0066FF] text-lg" />
      ]
    }
  ];

  const KeyboardButton = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <motion.div
      className={`relative bg-black/40 rounded-lg p-3 border border-white/10 hover:border-[#0066FF]/50 
        hover:bg-[#0066FF]/5 transition-all group cursor-pointer ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
    >
      <div className="absolute inset-x-0 bottom-0 h-1 bg-black/20 rounded-b" />
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      <div className="max-w-4xl mx-auto p-4">
        <Link href="/about">
          <button className="inline-flex items-center gap-2 bg-[#0066FF]/10 text-[#0066FF] px-4 py-2 rounded-lg hover:bg-[#0066FF]/20 transition-colors text-xs mb-6">
            <FaArrowLeft className="w-3 h-3" />
            <span>Back to About</span>
          </button>
        </Link>

        <div className="border border-[#0066FF]/20 rounded-lg p-4 mb-6 bg-black/40">
          <h1 className="text-lg mb-2 text-white">Hobbies & Interests</h1>
          <p className="text-gray-400 text-sm">
            A glimpse into what I'm passionate about
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-lg p-4 hover:border-[#0066FF]/20 transition-all bg-black/40 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{hobby.icon}</span>
                  <h2 className="font-medium text-white">{hobby.title}</h2>
                </div>
                <p className="text-gray-400 text-sm mb-4">{hobby.description}</p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {hobby.details.map((detail, i) => (
                    <KeyboardButton key={i}>
                      <div className="text-center">
                        <div className="text-xs text-gray-400 group-hover:text-[#0066FF] transition-colors flex items-center justify-center gap-2">
                          {hobby.icons ? <span className="text-xl">{hobby.icons[i]}</span> : null}
                          <span>{detail}</span>
                        </div>
                      </div>
                    </KeyboardButton>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-xs text-gray-400 mt-6">
          Always learning and exploring new interests
        </div>
      </div>
    </div>
  );
}
