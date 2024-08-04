"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import DotPattern from '@/components/magicui/dot-pattern'

export default function JoinPage() {
const router = useRouter();
    const [selectedRole, setSelectedRole] = useState<'user' | 'client' | null>(null)

    const handleSelectRole = (role: 'user' | 'client') => {
        setSelectedRole(role)
    }

    const handleSignUp = () => {
        if (selectedRole=="client") {
           router.push('/become-seller')
        } else if (selectedRole=="user") {
            router.push('/signup')
        }
        else {
            alert('Please select a role')
        }
    }

    return (
        <div>
            <Header />
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
            <h2 className='text-white text-3xl flex justify-center pt-6'>SignUp to DeFiverrr</h2>
            <div className="flex flex-col items-center justify-center">
            
                <p className="text-gray-600 dark:text-gray-400 mb-8">Select your role to get started</p>
                <div className="z-10 flex space-x-4 mb-8">
                    <motion.div
                        className={`flex items-center justify-center p-6 w-48 h-48 rounded-lg cursor-pointer ${selectedRole === 'user' ? 'bg-slate-400' : 'bg-white dark:bg-gray-800'
                            } shadow-md`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleSelectRole('user')}
                    >
                        <p className="text-xl font-semibold text-gray-800 dark:text-gray-300">Join as a User</p>
                    </motion.div>
                    <motion.div
                        className={`flex items-center justify-center p-6 w-48 h-48 rounded-lg cursor-pointer ${selectedRole === 'client' ? 'bg-slate-400' : 'bg-white dark:bg-gray-800'
                            } shadow-md`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleSelectRole('client')}
                    >
                        <p className="text-xl font-semibold text-gray-800 dark:text-gray-300">Join as a Client</p>
                    </motion.div>
                </div>
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
                    onClick={handleSignUp}
                >
                    SignUp
                </Button>
            </div>
            <DotPattern
        className="absolute inset-0 text-white/[0.2]"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={0.5}
      />
            </div>

        </div>
    )
}
