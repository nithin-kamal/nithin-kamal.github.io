"use client";
import React from "react";
import Section from "@/components/main/Section/Section";
import { data } from "../InfoConfig";
import SectionProvider from "@/components/About/SectionProvider";
import Intro from "@/components/About/Intro";
import { motion } from "framer-motion";

const About = () => {
  const imageVariants = {
    hidden: (custom: number) => ({
      x: 1500 * (-1) ** custom,
      scale: 0,
      opacity: 0,
    }),
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };
  return (
    <Section id="about" className="">
      <div className="flex-col center-container gap-3 z-[20] ">
        <Intro />
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200 lg:text-2xl text-center ">
          Learn more about my:
        </h3>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex flex-row place-items-center place-content-center gap-5 flex-wrap mt-4 overflow-hidden"
        >
          {data.sections.slice(1).map((section, index) => (
            <motion.div variants={imageVariants} key={index} custom={index}>
              <SectionProvider
                section={section}
                sectionTitle={data.sectionTitles[index + 1]}
              />
            </motion.div>
          ))}
          <motion.div variants={imageVariants} custom={data.sections.length}>
            <SectionProvider section="resume" sectionTitle="RESUME" />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
