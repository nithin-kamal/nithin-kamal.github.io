import React from "react";
import { FileText } from "react-feather";
import NavLinks from "./NavLinks";
import { data } from "@/app/InfoConfig";

const NavbarOptions = (activeSection?: string) => {
  const sectionLinks = data.sections.map((section: string, idx: number) => {
    return (
      <NavLinks activeSection={activeSection} key={section} href={section}>
        {data.sectionTitles[idx]}
      </NavLinks>
    );
  });

  return [
    ...sectionLinks,
    <NavLinks
      activeSection={activeSection}
      key="resume"
      href="fdgdf"
      className="flex"
    >
      RESUME
      <FileText className="ml-1" height={28} />
    </NavLinks>,
  ];
};

export default NavbarOptions;
