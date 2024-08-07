"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const { scrollYProgress } = useScroll();
  const cardLength = content.length;

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
        const newActiveCard = Math.floor(scrollPercentage * cardLength);
        setActiveCard(Math.min(newActiveCard, cardLength - 1));
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [cardLength]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <div className="relative">
      {content.map((item, index) => (
        <motion.div
          key={item.title + index}
          className="h-screen w-full flex items-center justify-center sticky top-0"
          style={{
            backgroundColor: backgroundColors[index % backgroundColors.length],
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3, y: activeCard === index ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3, y: activeCard === index ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-slate-300 max-w-xl"
              >
                {item.description}
              </motion.p>
            </div>
            <div
              style={{ background: backgroundGradient }}
              className={cn(
                "w-full lg:w-1/2 h-60 lg:h-96 rounded-lg overflow-hidden shadow-2xl",
                contentClassName
              )}
            >
              {item.content ?? null}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
