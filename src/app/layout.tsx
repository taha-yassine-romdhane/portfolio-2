import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Taha Yassine Romdhane - Full Stack Developer',
  description: 'Portfolio of Taha Yassine Romdhane - Full Stack Developer and Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body className={`${firaCode.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 pl-20">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
