import React from "react";
import Section from "@/components/main/Section/Section";
import ProjectCard from "@/components/Project/ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col place-items-center place-contents-center w-full">
        <h1 className="'text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row flex-wrap gap-6 ">
          <ProjectCard
            src="/NextWebsite.png"
            title="Next Website"
            description="This is a Next.js website"
          />
          <ProjectCard
            src="/NextWebsite.png"
            title="Next Website"
            description="This is a Next.js website"
          />
          <ProjectCard
            src="/NextWebsite.png"
            title="Next Website"
            description="This is a Next.js website"
          />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
