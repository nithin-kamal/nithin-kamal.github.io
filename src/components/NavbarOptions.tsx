import React from "react";
import { FileText } from "react-feather";
import SectionLink from "./SectionLink";

type NavbarOptionsProps = {
  classnames: string;
};

const NavbarOptions = (props: NavbarOptionsProps) => {
  return (
    <ul tabIndex={0} className={props.classnames}>
      <li>
        <SectionLink href="about">ABOUT</SectionLink>
      </li>
      <li>
        <SectionLink href="skills">SKILLS</SectionLink>
      </li>
      <li>
        <SectionLink href="experience">TIMELINE</SectionLink>
      </li>
      <li>
        <SectionLink href="projects">PROJECTS</SectionLink>
      </li>
      <li>
        <SectionLink href="interests">INTERESTS</SectionLink>
      </li>
      <li>
        <SectionLink href="" className="inline-flex">
          <FileText />
          RESUME
        </SectionLink>
      </li>
    </ul>
  );
};

export default NavbarOptions;
