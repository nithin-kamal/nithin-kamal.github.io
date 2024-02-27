import React from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineType } from "@/app/InfoConfig";
import { Avatar } from "@nextui-org/react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

type Props = {
  item: TimelineType;
  index: number;
};

const TimelineElement = ({ item, index }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        className="vertical-timeline-element !my-5"
        visible={inView}
        position={index % 2 === 0 ? "right" : "left"}
        contentStyle={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(32, 32, 32, 0.5) 72%, rgba(51, 51, 51, 0.5) 100%)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 3px 10px 0 rgba(0,0,0,0.5)",
        }}
        contentArrowStyle={{
          borderRight: `7px solid rgba(8, 8, 8, 0.5)`,
        }}
        iconStyle={{
          boxShadow: "0px 0px 0px 2px rgba(122, 168, 184, 0.4)",
        }}
        iconClassName="timelineIcon"
        icon={
          <Avatar
            isBordered={false}
            className="h-full w-full"
            classNames={{ img: "object-contain" }}
            radius="full"
            src={item.logo}
          />
        }
      >
        <h3 className="vertical-timeline-element-title text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500 text-start font-semibold">
          {item.company}
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-slate-400 text-start flex justify-between">
          <span className="flex items-center">
            <CalendarIcon height={15} style={{ marginRight: "5px" }} />
            {item.date}
          </span>
          <span className="pl-[10px] flex items-center">
            <MapPinIcon height={15} style={{ marginRight: "5px" }} />
            {item.location}
          </span>
        </h4>
        <p className="text-justify">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 font-semibold">
            {item.title}
            {": "}
          </span>
          <span>{item.description}</span>
        </p>
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;
