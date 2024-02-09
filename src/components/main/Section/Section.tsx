import React, { CSSProperties, ReactNode } from "react";

const sectionDivStyle =
  " box-border min-h-screen w-full content-center text-center p-6 ";

type SectionProps = {
  children: ReactNode;
  id: string;
  style?: CSSProperties;
  className?: string;
};

const Section = ({ children, id, style, className }: SectionProps) => {
  return (
    <section id={id} className={className + sectionDivStyle} style={style}>
      <div className="h-16" />
      {children}
    </section>
  );
};

export default Section;
