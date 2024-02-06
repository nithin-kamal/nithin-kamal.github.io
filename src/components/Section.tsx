import React, { ReactNode } from "react";

const sectionDivStyle = "box-border min-h-screen w-full p-6 ";

const Section = ({ children, id }: { children: ReactNode; id: string }) => {
  return (
    <div id={id} className={sectionDivStyle}>
      <div className="h-16" />
      {children}
    </div>
  );
};

export default Section;
