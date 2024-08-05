import { NavbarDemo } from "@/components/Navbar";
import DotPattern from '@/components/magicui/dot-pattern'
import { SellerOnboardingForm } from '@/components/SellerOnboardingForm'

export default function BecomeSellerPage() {
  return (
    <div>
      <NavbarDemo />

      <div className="container mx-auto  relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="z-10 container mx-auto py-8 max-w-md">
          <SellerOnboardingForm />
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
