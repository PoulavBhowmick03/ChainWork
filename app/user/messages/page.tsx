'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const conversations = [
  { id: 1, name: 'Alice Johnson', lastMessage: 'Thanks for your proposal. Can we discuss further?', time: '2 hours ago' },
  { id: 2, name: 'Bob Smith', lastMessage: 'The project is progressing well. Lets schedule a call.', time: '1 day ago' },
  { id: 3, name: 'Carol Williams', lastMessage: 'Ive reviewed your work. It looks great!', time: '3 days ago' },
]

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null)
  const [message, setMessage] = useState('')

  return (
    <div className="container mx-auto py-8">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Messages
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {conversations.map((conv) => (
                  <li
                    key={conv.id}
                    className={`cursor-pointer p-2 rounded-md ${
                      selectedConversation === conv.id ? 'bg-secondary' : ''
                    }`}
                    onClick={() => setSelectedConversation(conv.id)}
                  >
                    <h3 className="font-semibold">{conv.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{conv.lastMessage}</p>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>
                {selectedConversation
                  ? conversations.find((c) => c.id === selectedConversation)?.name
                  : 'Select a conversation'}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              {selectedConversation ? (
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    {/* Message history would go here */}
                    <p className="text-gray-600 dark:text-gray-400">Message history...</p>
                  </div>
                  <div className="mt-4 flex">
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-grow mr-2"
                    />
                    <Button>Send</Button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">Select a conversation to start messaging</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}