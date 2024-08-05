import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { IconBrandGithub, IconBrandGoogle, IconEye, IconEyeOff } from '@tabler/icons-react'
import { motion } from 'framer-motion'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Implement login logic here
    toast({
      title: 'Logging in',
      description: 'Please wait while we authenticate your credentials.',
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto p-8 shadow-2xl rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Welcome Back</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <Label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white pr-10"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
            >
              {showPassword ? <IconEyeOff className="h-5 w-5" /> : <IconEye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Log In
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            className="w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300 ease-in-out"
            onClick={() => console.log('Login with Google')}
          >
            <IconBrandGoogle className="h-5 w-5" />
            <span>Google</span>
          </Button>
          <Button
            className="w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300 ease-in-out"
            onClick={() => console.log('Login with Github')}
          >
            <IconBrandGithub className="h-5 w-5" />
            <span>Github</span>
          </Button>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        Not a member?{' '}
        <a href="/join" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
          Sign up now
        </a>
      </p>
    </motion.div>
  )
}