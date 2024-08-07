"use client"
import { NavbarDemo } from "@/components/Navbar";
import { LoginForm } from '@/components/LoginForm'
import DotPattern from '@/components/magicui/dot-pattern'

export default function LoginPage() {
  return (
    <div>
      <NavbarDemo />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="z-10 container mx-auto py-8 max-w-md">
          <LoginForm />
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
