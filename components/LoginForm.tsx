import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    <div className="max-w-md w-full mx-auto p-6 shadow-lg rounded-lg bg-transparent dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-100 dark:text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-100 dark:border-gray-600"
          />
        </div>
        <div>
          <Label htmlFor="password" className="block text-sm font-medium text-gray-100 dark:text-gray-300">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-100 dark:border-gray-600"
          />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-100 text-white py-2 rounded-md">
          Log In
        </Button>
      </form>
      <p className='flex justify-center sm:text-xl text-gray-100 dark:text-gray-300 mt-4'>or</p>
      <div className="flex flex-col space-y-4 mt-4">
        <Button
          className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-2 rounded-md flex items-center justify-center space-x-2"
          onClick={() => console.log('Login with Google')}
        >
          <IconBrandGoogle className="h-5 w-5" />
          <span>Login with Google</span>
        </Button>
        <Button
          className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-2 rounded-md flex items-center justify-center space-x-2"
          onClick={() => console.log('Login with Github')}
        >
          <IconBrandGithub className="h-5 w-5" />
          <span>Login with Github</span>
        </Button>
      </div>
    </div>
  )
}
