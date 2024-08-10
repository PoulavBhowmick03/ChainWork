/* eslint-disable react/no-unescaped-entities */
"use client"
import HeroSection from '@/app/user/components/HeroSection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  { title: 'Find Projects', description: 'Browse thousands of projects tailored to your skills.' },
  { title: 'Secure Payments', description: 'Get paid on time, every time with our secure payment system.' },
  { title: 'Build Your Portfolio', description: 'Showcase your work and attract more clients.' },
  { title: 'Grow Your Network', description: 'Connect with clients and other freelancers worldwide.' },
]

const gigs = [
  { title: 'Web Development', description: 'Build modern websites using React.', budget: '$500', id: 1 },
  { title: 'Graphic Design', description: 'Create stunning graphics and logos.', budget: '$300', id: 2 },
  { title: 'Content Writing', description: 'Write engaging articles and blog posts.', budget: '$200', id: 3 },
  { title: 'SEO Optimization', description: 'Improve your website’s visibility on search engines.', budget: '$400', id: 4 },
]

export default function User() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGigs = gigs.filter(gig => 
    gig.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <HeroSection />

      <div className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-extrabold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose ChainWork?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Search for Gigs</h2>
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search for gigs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg p-2 w-1/2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGigs.length > 0 ? (
              filteredGigs.map(gig => (
                <Card key={gig.id} className="h-full">
                  <CardHeader>
                    <CardTitle>{gig.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{gig.description}</p>
                    <p className="font-bold mt-2">Budget: {gig.budget}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center col-span-full">No gigs found.</p>
            )}
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">What Our Freelancers Say</h2>
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p>"ChainWork has transformed the way I find clients!"</p>
              <p className="font-bold mt-2">- Alex, Web Developer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p>"I love the secure payment system!"</p>
              <p className="font-bold mt-2">- Jamie, Graphic Designer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p>"Building my portfolio has never been easier!"</p>
              <p className="font-bold mt-2">- Sam, Content Writer</p>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ChainWork. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}