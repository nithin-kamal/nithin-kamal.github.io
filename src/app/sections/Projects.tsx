import React from "react";
import Section from "@/components/main/Section/Section";
import ProjectCard from "@/components/Project/ProjectCard";
import { getPinnedProjects } from "@/utils/graphqlApi";

const Projects = async () => {
  const pinnedProjects = await getPinnedProjects();
  return (
    <Section id="projects">
      <div className="flex-col center-container gap-3 z-[20] mt-[30px]">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200 lg:text-4xl text-center ">
          Projects:
        </h1>
        <div className="center-container flex-col md:flex-row flex-wrap gap-6 ">
          {pinnedProjects.map((project: any, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
