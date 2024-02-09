import React, { ReactNode } from "react";

type SectionLinkType = {
  href: string;
  children: ReactNode;
};

const SectionLink = ({ href, children }: SectionLinkType) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const section = document.getElementById(href);
    setTimeout(() => section?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <div onClick={handleClick}>
      <a className="flex content-center  p-2 h-full">{children}</a>
    </div>
  );
};

export default SectionLink;
