import React from "react";
import { data } from "../InfoConfig";
import Section from "@/components/main/Section/Section";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import SubTitle from "@/components/Skills/SubTitle";

const Skills = () => {
  type SkillProps = typeof data.skills[0];

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
          {data.skills.map((skill: SkillProps, index: number) => (
            <AccordionItem
              key={index}
              aria-label="Chung Miller"
              startContent={
                <Avatar
                  isBordered
                  color="primary"
                  radius="lg"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              }
              subtitle={<SubTitle skills={skill.items} />}
              title={skill.title}
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
