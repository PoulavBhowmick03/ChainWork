'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
const portfolioItems = [
  { id: 1, title: 'E-commerce Website', description: 'Developed a full-stack e-commerce platform using React and Node.js.' },
  { id: 2, title: 'Mobile App', description: 'Created a cross-platform mobile app using React Native for a fitness tracking startup.' },
  { id: 3, title: 'Brand Identity', description: 'Designed a complete brand identity including logo, color scheme, and marketing materials.' },
]

export default function Profile() {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg shadow-lg mb-8">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Profile
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Showcase your skills, experience, and portfolio to attract more clients.
        </motion.p>
      </div>

      {/* ... (keep the existing profile editing sections) */}

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <Button className="mt-6">Add Portfolio Item</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

