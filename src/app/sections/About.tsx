"use client";
import React from "react";
import Section from "@/components/main/Section/Section";
import { data } from "../InfoConfig";
import SectionProvider from "@/components/About/SectionProvider";
import Intro from "@/components/About/Intro";

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
      transition: { delay: 0.1, duration: 0.1 },
    },
  };
  return (
    <Section id="about" className="">
      <div className="flex-col center-container gap-3 z-[20] ">
        <Intro />
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200 lg:text-2xl text-center ">
          Learn more about my:
        </h3>
        <div className="flex flex-row place-items-center place-content-center gap-5 flex-wrap mt-4 overflow-hidden 
        ">
          {data.sections.slice(1).map((section, index) => (
            <div key={index}>
              <SectionProvider
                section={section}
                sectionTitle={data.sectionTitles[index + 1]}
              />
            </div>
          ))}
          <div>
            <SectionProvider section="resume" sectionTitle="RESUME" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
