import React from "react";

type Props = {
  skills: string[];
  boldIdx: number;
};

const SubTitle = ({ skills, boldIdx }: Props) => {
  const bolded = skills.slice(0, boldIdx)?.map((skill, index) => (
    <div
      key={index}
      className="px-2 flex items-center rounded-lg border-2 border-purple-300/50 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-200"
    >
      {skill}
    </div>
  ));

  return (
    <div className="text-zinc-300 flex flex-row justify-center flex-wrap gap-2 md:text-lg text-justify mt-[20px]">
      {bolded}
      {skills.slice(boldIdx).map((skill, index) => (
        <div
          key={index}
          className="px-2 flex items-center rounded-lg border-2 border-stone-300/50 bg-clip-text text-transparent bg-gradient-to-r from-stone-300 to-slate-200"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SubTitle;
