"use client";
import React from "react";
import SectionLink from "../main/Section/SectionLink";

interface Props {
  section: string;
  sectionTitle: string;
}
const SectionProvider = ({ section, sectionTitle}: Props) => {
  return (
    
      <SectionLink
        href={section}
        className="flex cursor-pointer bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-cyan-500/30 w-28 rounded-lg place-content-center place-items-center hover:from-purple-600/50  hover:to-purple-400/50"
      >
        {sectionTitle}
      </SectionLink>
  );
};

export default SectionProvider;
