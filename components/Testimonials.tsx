"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    );
  }
  
  const testimonials = [
    {
      quote:
        "This platform has completely revolutionized the way I hire freelancers. The decentralized nature ensures transparency and security for both parties. I couldn't be happier with the results!",
      name: "Alice Johnson",
      title: "CEO, Tech Innovations",
    },
    {
      quote:
        "As a freelancer, this platform gives me the freedom and security I need. Payments are always timely and fair, and the system ensures that my work is properly recognized and rewarded.",
      name: "John Doe",
      title: "Freelance Developer",
    },
    {
      quote:
        "The decentralized approach is a game-changer. I love the fact that I can see where my money is going, and I feel much more secure hiring talent from around the world.",
      name: "Sarah Williams",
      title: "Project Manager, Creative Solutions",
    },
    {
      quote:
        "Being able to collaborate with other freelancers on big projects and share the total amount fairly is amazing. This platform makes it so easy to find work and get paid.",
      name: "Emily Clark",
      title: "Graphic Designer",
    },
    {
      quote:
        "Trust and transparency were always issues for me with traditional freelancing platforms. This decentralized platform has solved those problems, making my job as a client much easier.",
      name: "Michael Brown",
      title: "Entrepreneur",
    },
    {
      quote:
        "What I love most about this platform is the decentralized payment system. I no longer have to worry about payment delays or disputes. Everything is handled smoothly and efficiently.",
      name: "Jessica Lee",
      title: "Freelance Writer",
    },
    {
      quote:
        "Hiring freelancers from this platform has been a breeze. The interface is user-friendly, and the smart contract feature ensures that both parties adhere to the agreement.",
      name: "Robert Davis",
      title: "Marketing Director",
    },
    {
      quote:
        "This platform has brought a new level of trust and efficiency to the freelancing industry. As a freelancer, I feel valued and secure knowing that my work is protected by smart contracts.",
      name: "Laura Martin",
      title: "Freelance Web Developer",
    },
    {
      quote:
        "I appreciate the fairness and transparency of this decentralized freelancing platform. It has made finding reliable freelancers so much easier.",
      name: "David Thompson",
      title: "Business Owner",
    },
    {
      quote:
        "The decentralized nature of this platform ensures that my work is valued and paid for promptly. It's a game-changer for freelancers looking for reliable and fair opportunities.",
      name: "Samantha White",
      title: "Freelance Content Creator",
    },
  ];  