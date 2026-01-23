"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function PipesBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ y }}
    >
      <div
        className="hero-background w-full h-full"
        style={{
          backgroundImage: "url('/pipes.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 70%",
        }}
      />
    </motion.div>
  );
}
