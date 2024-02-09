import React from "react";
import Section from "@/components/main/Section/Section";
import data from "../InfoConfig.json";
import SectionProvider from "@/components/About/SectionProvider";
import Intro from "@/components/About/Intro";

const About = () => {
  return (
    <Section id="about" className="">
      <div className="flex flex-col place-items-center place-content-center gap-3 h-full ">
        <Intro />
        <div className="flex flex-row place-items-center place-content-center gap-5 w-full justify-around flex-wrap mt-4">
          {data.sections.map((section, index) => (
            <SectionProvider key={index} section={section} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
