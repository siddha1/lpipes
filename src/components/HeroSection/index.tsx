"use client";

import { PipesBackground } from "./PipesBackground";
import { TriptychText } from "./TriptychText";

const heroData = [
  { primary: "Liquidity Pipes", secondary: "Global Finance", delay: 0.6 },
  { primary: "Deploy Capital", secondary: "Machine Speed", delay: 1.0 },
  { primary: "Infrastructure", secondary: "Autonomous Systems", delay: 1.4 },
];

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-obsidian">
      <PipesBackground />

      {/* Minimal gradient - just enough for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(5, 7, 10, 0.4) 0%,
            rgba(5, 7, 10, 0.1) 25%,
            rgba(5, 7, 10, 0.0) 50%,
            rgba(5, 7, 10, 0.3) 85%,
            rgba(5, 7, 10, 0.8) 100%
          )`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center px-[8%] md:px-[8%] lg:px-[10%]">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {heroData.map((block, index) => (
            <TriptychText
              key={index}
              primary={block.primary}
              secondary={block.secondary}
              delay={block.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
