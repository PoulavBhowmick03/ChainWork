"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MenuItem = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <motion.li
      ref={ref}
      className="relative cursor-pointer text-white px-4 py-2 overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white rounded-md opacity-0"
        initial={false}
        animate={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        style={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
          x: { duration: 0.15 },
          y: { duration: 0.15 },
        }}
      />
    </motion.li>
  );
};

const ConnectWalletButton = () => {
  return (
    <motion.button
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Connect Wallet
    </motion.button>
  );
};

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      className={cn(
        "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 rounded-full border border-white/[0.2] bg-black bg-opacity-50 shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm",
        className
      )}
    >
      <ul className="flex justify-between items-center px-6 py-3">
        <Link href="/"><MenuItem onClick={() => setActive("home")}>Home</MenuItem></Link>
        <Link href="/join"><MenuItem onClick={() => setActive("signup")}>Sign Up</MenuItem></Link>
        <Link href="/login"><MenuItem onClick={() => setActive("login")}>Login</MenuItem></Link>
        <ConnectWalletButton />
      </ul>
    </nav>
  );
}