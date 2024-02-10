import React from "react";
import Section from "@/components/main/Section/Section";
import { data } from "../InfoConfig";
import SectionProvider from "@/components/About/SectionProvider";
import Intro from "@/components/About/Intro";

const About = () => {
  return (
    <Section id="about" className="">
      <div className="flex-col center-container gap-3 z-[20] ">
        <Intro />
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 lg:text-2xl text-center ">
          Learn more about my:
        </h3>
        <div className="flex flex-row place-items-center place-content-center  gap-5 w-full  flex-wrap mt-4">
          {data.sections.slice(1).map((section, index) => (
            <SectionProvider key={index} section={section} index={index} />
          ))}
          <SectionProvider section="resume" index={data.sections.length - 1} />
        </div>
      </div>
    </Section>
  );
};

export default About;
