'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const proposals = [
  { id: 1, projectTitle: 'E-commerce Website Redesign', status: 'Pending', submittedDate: '2024-03-15', bidAmount: '$7500' },
  { id: 2, projectTitle: 'Mobile App Development', status: 'Accepted', submittedDate: '2024-03-10', bidAmount: '$12000' },
  { id: 3, projectTitle: 'Logo Design', status: 'Rejected', submittedDate: '2024-03-05', bidAmount: '$800' },
  // Add more proposals...
]

export default function Proposals() {
  return (
    <div className="container mx-auto py-8">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Proposals
      </motion.h1>

      <div className="space-y-6">
        {proposals.map((proposal, index) => (
          <motion.div
            key={proposal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{proposal.projectTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <Badge
                    variant={proposal.status === 'Accepted' ? 'secondary' : proposal.status === 'Rejected' ? 'destructive' : 'default' as const}
                  >
                    {proposal.status}
                  </Badge>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Submitted: {proposal.submittedDate}</span>
                </div>
                <p className="text-lg font-semibold">Bid Amount: {proposal.bidAmount}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
