"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center justify-center mt-40 w-full z-[20]"
      >
        <Banner />
        <div className="h-full w-full">intro</div>
      </motion.div>
    </div>
  );
};

export default Intro;
