"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function PipesBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ y }}
    >
      <div
        className="hero-background w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/pipes.png')",
          animation: "kenburns 35s ease-in-out infinite alternate",
          filter: "saturate(0.85) brightness(0.9)",
        }}
      />
    </motion.div>
  );
}
