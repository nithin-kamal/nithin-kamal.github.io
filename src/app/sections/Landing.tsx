"use client";
import React from "react";
import Section from "@/components/main/Section/Section";
import Hero from "@/components/Landing/Hero";

const Landing = () => {
  return (
    <Section id="landing" className={""}>
      <div className="flex content-center justify-center">
        <Hero />
      </div>
    </Section>
  );
};

export default Landing;
