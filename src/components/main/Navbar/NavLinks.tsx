import React, { ReactNode, useEffect, useRef } from "react";
import { Button } from "@nextui-org/react";
import SectionLink from "../Section/SectionLink";

type NavLinkType = {
  href: string;
  children: ReactNode;
  className?: string;
  activeSection?: string;
};

const NavLinks = ({
  href,
  children,
  className,
  activeSection,
}: NavLinkType) => {
  return (
    <Button
      variant="light"
      className={" p-0  content-center w-fit justify-start h-fit " + className}
    >
      <li
        className={`text-lg flex content-center ${
          activeSection === href ? "border-b-3 font-semibold" : ""
        }`}
      >
        <SectionLink href={href}>{children}</SectionLink>
      </li>
    </Button>
  );
};

export default NavLinks;
