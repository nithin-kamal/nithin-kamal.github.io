import React, { useRef } from "react";
import NavbarOptions from "./NavbarOptions";
import { useClickOutside } from "@/hooks/domHooks";

const NavbarDropDown = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: wrapperRef,
    onClickOutside: setIsMenuOpen,
  });
  return (
    <div
      className={`h-fit fixed w-full top-[65px] 
      block bg-gradient-to-tr
       from-blue-900/80 to-blue-800/80
         backdrop-blur-sm z-50`}
      ref={wrapperRef}
    >
      {NavbarOptions().map((option, index) => (
        <div key={index} className="px-2 pr-6 w-full">
          {option}
        </div>
      ))}
    </div>
  );
};

export default NavbarDropDown;
