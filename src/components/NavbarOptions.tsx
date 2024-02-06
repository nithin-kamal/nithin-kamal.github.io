import React from "react";
import { FileText } from "react-feather";
import Link from "next/link";

type NavbarOptionsProps = {
  classnames: string;
};

const NavbarOptions = (props: NavbarOptionsProps) => {
  return (
    <ul tabIndex={0} className={props.classnames}>
      <li>
        <Link href="#about">ABOUT</Link>
      </li>
      <li>
        <Link href="#skills">SKILLS</Link>
      </li>
      <li>
        <Link href="#experience">TIMELINE</Link>
      </li>
      <li>
        <Link href="#projects">PROJECTS</Link>
      </li>
      <li>
        <Link href="#interests">INTERESTS</Link>
      </li>
      <li>
        <Link href="" className="inline-flex">
          <FileText />
          RESUME
        </Link>
      </li>
    </ul>
  );
};

export default NavbarOptions;
