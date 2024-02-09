import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { Image } from "@nextui-org/react";
import HeroText from "./HeroText";
import SectionLink from "../main/Section/SectionLink";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className=" flex flex-col h-full w-full">
      <div className="flex flex-col items-center justify-center w-full z-[20]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-row items-center relative justify-center px-20 m-2 mt-40 w-full z-[20]"
        >
          <HeroText />
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center"
          >
            <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={650}
              width={650}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center w-full px-40"
        >
          <motion.div
            variants={slideInFromRight(0.8)}
            className=" mt-4 w-full h-full justify-center flex items-center"
          >
            <SectionLink
              href="about"
              className="animate-bounce p-4 button-primary text-center text-2xl text-white cursor-pointer rounded-lg w-fit"
            >
              Explore
              <ArrowDownCircleIcon width={30} className="ml-2" />
            </SectionLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
