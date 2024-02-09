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
    <div className="h-fit block bg-base-100" ref={wrapperRef}>
      {NavbarOptions().map((option, index) => (
        <div key={index} className="mx-2 mr-6">
          {option}
        </div>
      ))}
    </div>
  );
};

export default NavbarDropDown;
