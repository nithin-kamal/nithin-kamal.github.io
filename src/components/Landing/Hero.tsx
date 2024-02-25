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
      <div className="flex flex-col items-center content-center gap-4 justify-center w-full z-[20] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row items-center relative justify-center md:px-20 w-full z-[20]"
        >
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex place-items-center place-content-center text-center"
          >
            <Image
              src="/logoW.png"
              alt="work icons"
              className={
                "max-h-[35vh] md:max-h-[50vh] w-auto h-auto place-items-center place-content-center pl-[30px] !opacity-40"
              }
            />
          </motion.div>
          <HeroText className="h-full w-full flex flex-col gap-5 place-items-center place-contents-center text-center  md:text-start md:mt-auto" />
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
              className="animate-bounce md:p-4 button-primary text-center text-lg md:text-2xl text-white cursor-pointer rounded-lg w-fit"
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
