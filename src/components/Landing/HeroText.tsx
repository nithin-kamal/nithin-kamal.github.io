import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import data from "@/app/InfoConfig.json";

type Props = {};

const HeroText = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [data.title],
    loop: true,
    deleteSpeed: 0,
    delaySpeed: 2000,
  });
  return (
    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-3xl md:text-8xl font-bold text-white max-w-[600px] w-auto h-auto"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Nithin Kamal{" "}
        </span>
      </motion.div>
      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-xl md:text-3xl text-gray-400 my-5 max-2-[600px]"
      >
        {text}
        <Cursor cursorColor="white" />
      </motion.p>
    </div>
  );
};

export default HeroText;
