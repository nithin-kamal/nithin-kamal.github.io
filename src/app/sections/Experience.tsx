"use client";
import TimelineElement from "@/components/Experience/TimelineElement";
import Section from "@/components/main/Section/Section";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { data } from "@/app/InfoConfig";

const Experience = () => {
  return (
    <Section id="timeline">
      <div className="flex-col center-container gap-3 z-[20] mt-[30px]">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200 lg:text-4xl text-center ">
          Experience:
        </h1>
        <VerticalTimeline
          className="gap-6"
          lineColor="rgba(122, 168, 184, 0.4)"
          animate={false}
        >
          {data.timeline.map((item, index) => (
            <TimelineElement key={index} item={item} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
