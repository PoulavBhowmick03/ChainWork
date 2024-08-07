"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { StarIcon, SearchIcon } from 'lucide-react';
import { StickyScroll } from "@/app/client/components/ui/stickyScroll";
import Image from "next/image";

const Overview = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stickyScrollContent = [
    {
      title: "Find Expert Freelancers",
      description: "Access a global pool of talented professionals for your projects. Our platform connects you with skilled freelancers across various domains, ensuring you find the perfect match for your needs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/freelancers-collage.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-md"
            alt="Freelancers collage"
          />
        </div>
      ),
    },
    {
      title: "Secure Payments",
      description: "Our blockchain-based payment system ensures secure and transparent transactions. Escrow services protect both clients and freelancers, releasing payments only when work is completed satisfactorily.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Smart Contracts",
      description: "Leverage the power of blockchain with our smart contract system. Automate payments, set milestones, and ensure all parties adhere to agreed-upon terms without the need for intermediaries.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Decentralized Reputation System",
      description: "Our innovative reputation system is built on blockchain, ensuring tamper-proof and verifiable ratings. This transparency helps you make informed decisions when choosing freelancers or clients.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-12 ">
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="py-20 ">
        <div className="">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Our Platform?</h2>
          <StickyScroll content={stickyScrollContent} />
        </div>
      </div>
      <QuickStats />
      <TopRatedFreelancers />
      <FeaturedProjects />
    </div>
  );
};

const HeroSection = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: (query: string) => void }) => (
  <section className="bg-transparent text-white py-20 h-screen">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h1 
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Revolutionize Your Freelancing Experience
      </motion.h1>
      <motion.p 
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Connect with top talent, secure payments, and smart contracts - all on our decentralized platform
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex max-w-md mx-auto">
          <Input 
            placeholder="What service are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none  text-gray-800"
          />
          <Button className="rounded-l-none bg-yellow-500 hover:bg-yellow-600 text-gray-800">
            <SearchIcon className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const QuickStats = () => (
  <section className="py-20  text-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Active Projects", value: "1,234+" },
          { title: "Total Freelancers", value: "50,000+" },
          { title: "Client Satisfaction", value: "4.8/5" },
          { title: "Secure Transactions", value: "100%" },
        ].map((stat, index) => (
          <Card key={index} className="bg-gray-800 border-none">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const TopRatedFreelancers = () => (
  <section className="py-20 ">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Top Rated Freelancers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Alice Johnson", skill: "Blockchain Developer", rating: 4.9, jobs: 47 },
          { name: "Bob Smith", skill: "Smart Contract Auditor", rating: 4.8, jobs: 32 },
          { name: "Carol Williams", skill: "DApp Designer", rating: 4.9, jobs: 25 },
        ].map((freelancer, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`/avatar-${index + 1}.jpg`} />
                  <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{freelancer.name}</h3>
                  <p className="text-sm text-gray-600">{freelancer.skill}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-semibold">{freelancer.rating}</span>
                  <span className="text-gray-600 ml-2">({freelancer.jobs} jobs)</span>
                </div>
                <Badge className="bg-green-500">Top Rated</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProjects = () => (
  <section className="py-20 ">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "DeFi Platform Development", budget: "10-15 ETH", proposals: 18 },
          { title: "NFT Marketplace Design", budget: "5-8 ETH", proposals: 24 },
          { title: "Smart Contract Audit", budget: "3-5 ETH", proposals: 12 },
        ].map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">Budget: {project.budget}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{project.proposals} proposals</span>
                <Button variant="outline">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Overview;