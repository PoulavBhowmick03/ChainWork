"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { InfiniteMovingCardsDemo } from "./Testimonials";

export function Background() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <p className="z-10 text-center text-5xl font-medium font-mono tracking-tighter text-white mb-12">
        The new era of freelancing is here
      </p>
      <DotPattern
        className="absolute inset-0 text-white/[0.2]"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={0.5}
      />
      <div className="w-full max-w-7xl px-4 relative">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
}