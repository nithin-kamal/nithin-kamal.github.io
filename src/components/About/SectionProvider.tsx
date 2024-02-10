"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

interface Props {
  section: string;
  index: number;
  href?: string;
}
const SectionProvider = ({ section, index, href }: Props) => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      initial="hidden"
      variants={imageVariants}
      whileInView={"visible"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={"basis-1/4"}
    >
      <Button className="bg-gradient-to-r from-pink-500/50 to-violet-500/50">
        {section.toUpperCase()}
      </Button>
    </motion.div>
  );
};

export default SectionProvider;
