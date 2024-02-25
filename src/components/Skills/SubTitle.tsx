import React from "react";

type Props = {
  skills: string[];
  boldIdx: number;
};

const SubTitle = ({ skills, boldIdx }: Props) => {
  const bolded = skills.slice(0, boldIdx)?.map((skill, index) => (
    <span key={index}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 font-semibold">{skill}</span>
      {", "}
    </span>
  ));

  return (
    <div className="text-zinc-300 md:text-lg text-start">
      {bolded}
      {skills.slice(boldIdx).map((skill, index) => (
        <span key={index}>
          {skill}
          {index === skills.length - boldIdx - 1 ? "" : ", "}
        </span>
      ))}
    </div>
  );
};

export default SubTitle;
