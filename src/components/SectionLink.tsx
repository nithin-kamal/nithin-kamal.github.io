"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

type SectionLinkType = {
  href: string;
  children: ReactNode;
  className?: string;
};

const SectionLink = ({ href, children, className }: SectionLinkType) => {
  const scrollToSection = (href: string) => {
    const section = document.getElementById(href);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={"btn " + className} onClick={() => scrollToSection(href)}>
      {children}
    </div>
  );
};

export default SectionLink;
