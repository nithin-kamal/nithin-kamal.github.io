"use client";
import React from "react";
import { data, SkillType } from "../InfoConfig";
import Section from "@/components/main/Section/Section";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import SubTitle from "@/components/Skills/SubTitle";

const Skills = () => {
  return (
    <Section id="skills">
      <div className="flex-col center-container gap-3 z-[20] ">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200 lg:text-4xl text-center ">
          Skills:
        </h1>
        <h3 className="`text-zinc-300 lg:text-lg text-center md:text-start pb-[20px]">
          {
            "Below are some of my skills, and I'm always looking to learn more. "
          }
        </h3>
        <Accordion variant="splitted">
          {data.skills.map((skill: SkillType, index: number) => (
            <AccordionItem
              key={index}
              aria-label={skill.title}
              className="!bg-opacity-70 backdrop-blur-sm"
              startContent={
                <Avatar
                  isBordered
                  color="primary"
                  radius="lg"
                  src={skill.logo}
                />
              }
              subtitle={
                <SubTitle skills={skill.items} boldIdx={skill.boldIdx} />
              }
              title={
                <p className="text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-500 text-center md:text-start font-semibold">
                  {
                    <>
                      <span className="md:hidden">
                        {" "}
                        {skill.smallTitle || skill.title}
                      </span>
                      <span className="hidden md:block"> {skill.title}</span>
                    </>
                  }
                </p>
              }
            >
              {skill.description}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default Skills;
