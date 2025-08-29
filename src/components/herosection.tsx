"use client";

import React from "react";
import TextType from "../blocks/TextAnimations/TextType/TextType";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[70vh] ${className}`}>
      <div className="text-center text-white">
        <TextType 
          text="Welcome to Project AngelWing"
          as="h1"
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          typingSpeed={70}
          deletingSpeed={50}
          showCursor={true}
          initialDelay={500}
          pauseDuration={300}
          loop={true}
          cursorCharacter={"/"}
        />
        
        <p className="text-lg md:text-xl mt-4 opacity-80 max-w-2xl mx-auto text-white">
          Transforming ideas into digital realities
        </p>
        
        <div className="mt-10">
          <a 
            href="#explore" 
            className="rounded-full border border-solid border-white bg-transparent text-white hover:bg-white/10 px-6 py-3 font-medium transition-colors"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}
