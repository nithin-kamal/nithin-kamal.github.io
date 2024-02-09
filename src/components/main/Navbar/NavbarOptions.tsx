import React from "react";
import { FileText } from "react-feather";
import NavLinks from "./NavLinks";

const NavbarOptions = (activeSection?: string) => {
  return [
    <NavLinks activeSection={activeSection} key="about" href="about">
      ABOUT
    </NavLinks>,
    <NavLinks activeSection={activeSection} key="skills" href="skills">
      SKILLS
    </NavLinks>,
    <NavLinks activeSection={activeSection} key="experience" href="experience">
      TIMELINE
    </NavLinks>,
    <NavLinks activeSection={activeSection} key="projects" href="projects">
      PROJECTS
    </NavLinks>,
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
