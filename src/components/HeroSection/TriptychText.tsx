"use client";

import { motion } from "framer-motion";
import { AnimatedArrow } from "./AnimatedArrow";

interface TriptychTextProps {
  primary: string;
  secondary: string;
  delay: number;
}

export function TriptychText({ primary, secondary, delay }: TriptychTextProps) {
  return (
    <div>
      {/* Primary Phrase (Serif) */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
        className="font-serif text-[40px] md:text-[56px] lg:text-[72px] font-light text-white tracking-[-0.02em] leading-[1.1] mb-2"
      >
        {primary}
      </motion.h2>

      {/* Arrow + Secondary Container */}
      <div className="flex items-center gap-3 md:gap-4">
        <AnimatedArrow delay={delay + 0.2} />

        {/* Secondary Phrase (Mono) - white */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + 0.3,
            ease: "easeOut",
          }}
          className="font-mono text-[14px] md:text-[16px] lg:text-[20px] font-medium text-white uppercase tracking-[0.08em]"
        >
          {secondary}
        </motion.span>
      </div>
    </div>
  );
}
