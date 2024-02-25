import React from "react";

type Props = {
  skills: string[] | (string | undefined)[];
};

const SubTitle = ({ skills }: Props) => {
  return <div>{skills?.join(", ")}</div>;
};

export default SubTitle;
