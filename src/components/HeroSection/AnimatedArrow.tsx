"use client";

import { motion } from "framer-motion";

interface AnimatedArrowProps {
  delay: number;
}

export function AnimatedArrow({ delay }: AnimatedArrowProps) {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <motion.path
        d="M7 7 L7 17 L17 17"
        stroke="#00E6CC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.5,
          delay: delay + 0.1,
          ease: "easeOut",
        }}
      />
      <motion.path
        d="M12 17 L17 17 L17 12"
        stroke="#00E6CC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.3,
          delay: delay + 0.4,
          ease: "easeOut",
        }}
      />
    </motion.svg>
  );
}
