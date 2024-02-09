"use client";
import React from "react";
import Section from "@/components/main/Section/Section";
import data from "../InfoConfig.json";
import Hero from "@/components/Landing/Hero";
// import bg from "/public/keyboard.jpg";

const landingClasses = `bg-cover 
  bg-center h-screen
  w-full z-0 
  bg-[linear-gradient(to_right_bottom,rgba(31,42,58,0.9),rgba(12,37,71,0.9)),url('/keyboard.jpg')]
`;

const Landing = () => {
  return (
    <Section id="landing" className={landingClasses}>
      <div className="flex content-center justify-center">
        <Hero />
      </div>
    </Section>
  );
};

export default Landing;
