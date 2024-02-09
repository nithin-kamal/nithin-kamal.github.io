"use client";
import React, { useRef, useEffect } from "react";
import NavbarOptions from "./NavbarOptions";
import NavbarDropDown from "./NavbarDropdown";
import SectionLink from "../Section/SectionLink";
import { Button, Navbar } from "@nextui-org/react";
import { Menu, X } from "react-feather";
import data from "@/app/InfoConfig.json";
import { act } from "react-dom/test-utils";

// TODO: fix dropdown close on click when open
const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  const getActiveSection = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.clientHeight;
      if (rect.top < sectionHeight / 4) {
        setActiveSection(section.id);
      }
    });
  };
  const setOpacity = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpacity();
      getActiveSection();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-screen z-50 p-2 pt-3 bg-gradient-to-br nav ${
          isScrolled || isMenuOpen ? "from-blue-900/80 to-blue-800/80" : ""
        }  backdrop-blur-sm`}
      >
        <div className="flex justify-between">
          <div className="justify-start m-0 p-0 content-center flex">
            <Button variant="light" className="text-4xl ml-3 px-2 w-fit">
              <SectionLink href="landing">{data.name}</SectionLink>
            </Button>
          </div>
          <div className="hidden lg:flex  ml-auto gap-4 mr-auto">
            {NavbarOptions(activeSection).map((option, index) => (
              <div key={index}>{option}</div>
            ))}
          </div>
          <div className="flex lg:hidden justify-end ml-auto mr-6">
            <Button
              variant="bordered"
              onClick={handleMenu}
              className="content-center"
            >
              MENU
              {isMenuOpen ? <X height={20} /> : <Menu height={20} />}
            </Button>
          </div>
        </div>
        {isMenuOpen && <NavbarDropDown setIsMenuOpen={setIsMenuOpen} />}
      </nav>
    </>
  );
};

export default NavbarComponent;
