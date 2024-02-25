import React from "react";
import { data } from "@/app/InfoConfig";

type Props = {};

const IntroText = (props: Props) => {
  return (
    <div className="center-container flex-col md:justify-items-start md:justify-start md:items-start  p-2 max-w-[600px]">
      <h1 className="text-2xl md:text-4xl lg:text-6xl text-start font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 pb-[20px]">
        {data.name}
      </h1>
      <h3 className="text-lg md:text-xl lg:text-2xl text-white text-center md:text-start font-semibold pb-[10px]">
        {data.about.title}
      </h3>
      <p
        className={`text-zinc-300 lg:text-lg text-center md:text-start pb-[20px]`}
      >
        {data.about.description}
      </p>
      <ul className={"list-disc "}>
        {data.education.map((education, index) => (
          <li
            key={index}
            className=" text-stone-300 lg:text-lg text-center font-semibold md:text-start pb-[5px] "
          >
            {education}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroText;
