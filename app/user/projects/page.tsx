'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'

const projects = [
  { id: 1, title: 'E-commerce Website Redesign', budget: '$5000 - $10000', skills: ['React', 'Node.js', 'MongoDB'], deadline: '2 weeks' },
  { id: 2, title: 'Mobile App Development', budget: '$8000 - $15000', skills: ['React Native', 'Firebase'], deadline: '1 month' },
  { id: 3, title: 'Logo Design', budget: '$500 - $1000', skills: ['Illustrator', 'Photoshop'], deadline: '1 week' },
  // Add more projects...
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSkill, setFilterSkill] = useState('')

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterSkill === '' || project.skills.includes(filterSkill))
  )

  const allSkills = [...new Set(projects.flatMap(p => p.skills))]

  return (
    <div className="container mx-auto py-8">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-lg shadow-lg mb-8">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Available Projects
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find your next opportunity and start working on exciting projects.
        </motion.p>
      </div>

      <div className="mb-6 flex flex-wrap gap-4">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
        <Select
          value={filterSkill}
          onValueChange={setFilterSkill}
        >
          <option value="">All Skills</option>
          {allSkills.map(skill => (
            <option key={skill} value={skill}>{skill}</option>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-lg font-semibold mb-2">{project.budget}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Deadline: {project.deadline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                <Button className="w-full mt-auto">Submit Proposal</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

