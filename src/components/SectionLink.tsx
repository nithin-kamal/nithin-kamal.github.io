"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

const SectionLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(href);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link href={href} className={className} onClick={scrollToSection}>
      {children}
    </Link>
  );
};

export default SectionLink;
