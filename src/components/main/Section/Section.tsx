import React, { CSSProperties, ReactNode } from "react";

const sectionDivStyle =
  " min-h-screen w-full place-items-center place-content-center pt-[65px] flex text-center p-6  snap-start";

type SectionProps = {
  children: ReactNode;
  id: string;
  style?: CSSProperties;
  className?: string;
};

const Section = ({ children, id, style, className }: SectionProps) => {
  return (
    <section id={id} className={className + sectionDivStyle} style={style}>
      {children}
    </section>
  );
};

export default Section;
