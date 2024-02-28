import React from "react";
import Section from "@/components/main/Section/Section";
import ProjectCard from "@/components/Project/ProjectCard";
import { getPinnedProjects } from "@/utils/graphqlApi";
import { data } from "../InfoConfig";

const Projects = async () => {
  const pinnedProjects = await getPinnedProjects();
  return (
    <Section id="projects">
      <div className="flex-col center-container gap-3 z-[20] mt-[30px]">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200 lg:text-4xl text-center ">
          Projects:
        </h1>
        <h3 className="`text-zinc-300 lg:text-lg text-center md:text-start pb-[20px]">
          {`Here you can see some of the projects I've done on my own time. Visit my `}{" "}
          <a
            target="_blank"
            href={data.github}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200 font-bold"
          >
            GitHub
          </a>
          {` for more.`}
        </h3>
        <div className="grid auto-rows-auto md:auto-rows-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-12">
          {pinnedProjects.map((project: any, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
