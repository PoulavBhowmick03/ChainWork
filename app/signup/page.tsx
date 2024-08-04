"use client"
import Header from '@/components/Header'
import DotPattern from '@/components/magicui/dot-pattern'
import { SignUpForm } from '@/components/SignUpForm'

export default function SignUpPage() {
  return (
    <div>
      <Header />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="z-10 container mx-auto py-8 max-w-md">
          <h1 className="z-10 text-3xl font-bold mb-6 text-center">Sign Up</h1>
          <SignUpForm />


        </div>
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
  )
}
