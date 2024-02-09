import React, { ReactNode } from "react";

type SectionLinkType = {
  href: string;
  children: ReactNode;
  className?: string;
};

const SectionLink = ({ href, children, className }: SectionLinkType) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const section = document.getElementById(href);
    setTimeout(() => section?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <div onClick={handleClick} className={className}>
      <a className="flex content-center  p-2 h-full">{children}</a>
    </div>
  );
};

export default SectionLink;
