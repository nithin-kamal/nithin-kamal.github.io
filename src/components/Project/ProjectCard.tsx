import { Image } from "@nextui-org/react";
import React from "react";
import { ProjectType } from "@/utils/graphqlApi";
import { TagIcon } from "@heroicons/react/16/solid";

interface Props {
  project: ProjectType;
}

const ProjectCard = ({ project }: Props) => {
  const [title, description] = project.description.split(":");
  return (
    <div className="flex flex-col  rounded-lg m-4 2xl:mx-10 border border-[#141414] bg-slate-900 bg-opacity-75 shadow-[0_3px_10px_0_rgba(0,0,0,0.5)]">
      <div
        className="pt-4 w-full min-h-[220px] flex items-end justify-center bg-cover bg-no-repeat 
        bg-[linear-gradient(to_right_bottom,rgba(10,10,10,0.7),rgba(32,32,32,0.7)),url('/NextWebsite.png')]
        "
      >
        <div className="p-2 flex items-center">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500  font-semibold">
            <a target="_blank" rel="noopener noreferrer" href={project.url}>
              {title}
            </a>
          </h1>
        </div>
      </div>
      <div className="p-2 px-4 bg-gradient-to-r from-slate-900 to-zinc-900 h-full">
        <p className="m-2 text-gray-300 text-justify">{description}</p>
        <div className="flex place-content-center h-auto flex-row flex-wrap gap-3">
          {project.repositoryTopics.edges.map(({ node }, index) => (
            <div
              key={index}
              className="px-2 flex items-center rounded-lg border-2 border-purple-300/50 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-200"
            >
              <TagIcon className="w-3 h-3 mr-1 text-purple-300" />
              {node.topic.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
