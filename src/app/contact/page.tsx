'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      <div className="max-w-2xl mx-auto p-4 bg-black/40 rounded-lg border border-white/5">
        <div className="border border-[#0066FF]/20 rounded-lg p-4 mb-6">
          <h1 className="text-lg mb-2 text-white">Get in Touch</h1>
          <p className="text-gray-400 text-sm">
            Hi, how can I help you today?
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
             className="text-[#0066FF] hover:opacity-80">
            <FaGithub className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-[#0066FF] hover:opacity-80">
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a href="mailto:your@email.com" className="text-[#0066FF] hover:opacity-80">
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1 text-sm">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/50 border border-white/10 rounded p-2 text-sm focus:outline-none focus:border-[#0066FF] text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1 text-sm">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/50 border border-white/10 rounded p-2 text-sm focus:outline-none focus:border-[#0066FF] text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1 text-sm">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-black/50 border border-white/10 rounded p-2 h-24 text-sm focus:outline-none focus:border-[#0066FF] resize-none text-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0066FF] text-white rounded p-2 text-sm hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-[#0066FF] text-xs">Message sent successfully!</p>
          )}

          {status === 'error' && (
            <p className="text-red-500 text-xs">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
