import React from "react";
import Section from "@/components/main/Section/Section";
import ProjectCard from "@/components/Project/ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="'text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
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
