"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconWallet } from "@tabler/icons-react";

const MenuItem = ({ children, href, isActive }: { children: React.ReactNode; href: string; isActive: boolean }) => {
  return (
    <Link href={href}>
      <motion.li
        className={cn(
          "relative cursor-pointer text-white px-4 py-2 rounded-md transition-colors",
          isActive ? "bg-white bg-opacity-20" : "hover:bg-white hover:bg-opacity-10"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.li>
    </Link>
  );
};

const ConnectWalletButton = () => {
  return (
    <motion.button
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center space-x-2"
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
      whileTap={{ scale: 0.95 }}
    >
      <IconWallet size={20} />
      <span>Connect Wallet</span>
    </motion.button>
  );
};

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center pb-28">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState("home");

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className={cn(
        "fixed top-4 inset-x-0 max-w-3xl mx-auto z-50 rounded-full border border-white/[0.2] bg-black bg-opacity-50 shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-md",
        className
      )}
    >
      <ul className="flex justify-center items-center px-6 py-3">
        <MenuItem href="/" isActive={active === "home"}>Home</MenuItem>
        <MenuItem href="/join" isActive={active === "signup"}>Sign Up</MenuItem>
        <MenuItem href="/login" isActive={active === "login"}>Login</MenuItem>
        <ConnectWalletButton />
      </ul>
    </motion.nav>
  );
}