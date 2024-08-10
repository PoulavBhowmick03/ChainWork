import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-background.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
          width={20}
          height={20}
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to ChainWork
        </motion.h1>
        <motion.p
          className="mt-6 text-xl max-w-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with top clients, showcase your skills, and grow your freelance career.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  )
}