"use client";
import React from "react";
import { data, SkillType } from "../InfoConfig";
import Section from "@/components/main/Section/Section";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import SubTitle from "@/components/Skills/SubTitle";

const Skills = () => {
  return (
    <Section id="skills">
      <div className="flex-col center-container gap-3 z-[20] mt-[30px]">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200 lg:text-4xl text-center ">
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
              className="!bg-opacity-20 mb-[10px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(32, 32, 32, 0.5) 92%, rgba(51, 51, 51, 0.5) 100%)",
                boxShadow: "0 3px 10px 0 rgba(0,0,0,0.5)",
              }}
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
