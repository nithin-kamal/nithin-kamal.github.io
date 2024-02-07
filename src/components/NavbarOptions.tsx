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
        <SectionLink className="mt-1" href="about">
          ABOUT
        </SectionLink>
      </li>
      <li>
        <SectionLink className="mt-1" href="skills">
          SKILLS
        </SectionLink>
      </li>
      <li>
        <SectionLink className="mt-1" href="experience">
          TIMELINE
        </SectionLink>
      </li>
      <li>
        <SectionLink className="mt-1" href="projects">
          PROJECTS
        </SectionLink>
      </li>
      <li>
        <SectionLink className="mt-1" href="interests">
          INTERESTS
        </SectionLink>
      </li>
      <li>
        <SectionLink href="" className="inline-flex p-1.5">
          <FileText />
          RESUME
        </SectionLink>
      </li>
    </ul>
  );
};

export default NavbarOptions;
