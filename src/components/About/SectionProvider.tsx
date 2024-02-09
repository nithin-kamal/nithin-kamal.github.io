"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@nextui-org/react";

interface Props {
  section: string;
  index: number;
}
const SectionProvider = ({ section, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Button className="bg-gradient-to-r from-pink-500/50 to-violet-500/50">
        {section.toUpperCase()}
      </Button>
    </motion.div>
  );
};

export default SectionProvider;
