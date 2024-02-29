import React, { ReactNode } from "react";

type SectionLinkType = {
  href: string;
  children: ReactNode;
  className?: string;
  download?: string;
};

const SectionLink = ({
  href,
  children,
  className,
  download,
}: SectionLinkType) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!download) {
      const section = document.getElementById(href);
      setTimeout(() => section?.scrollIntoView({ behavior: "smooth" }));
    }
  };

  return (
    <div onClick={handleClick} className={className}>
      <a
        href={download ? href : undefined}
        download={download}
        className="flex content-center  p-2 h-full"
      >
        {children}
      </a>
    </div>
  );
};

export default SectionLink;
