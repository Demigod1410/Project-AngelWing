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
          text={['Welcome to \n Project AngelWing']}
          as="h1"
          className="text-4xl md:text-6xl font-bold mb-6 text-white whitespace-pre-line"
          typingSpeed={70}
          deletingSpeed={50}
          showCursor={true}
          initialDelay={500}
          pauseDuration={300}
          loop={false}
          cursorCharacter={"_"}
        />
        
        <p className="text-lg md:text-xl mt-4 opacity-80 max-w-2xl mx-auto text-white">
          The Pinnacle of AeroSpace Innovation
        </p>
        
        
      </div>
    </div>
  );
}
