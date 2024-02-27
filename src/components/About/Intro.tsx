"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";
import { Image, Tooltip } from "@nextui-org/react";
import IntroText from "./IntroText";
import { data } from "@/app/InfoConfig";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center justify-center mt-10 w-full "
      >
        <Banner />
        <div className="h-full w-full place-contents-center place-items-center">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div
              className={`flex flex-col md:flex-row place-items-center place-content-center gap-6 h-full
                       mt-4`}
            >
              <div className="center-container flex-col">
                <Image
                  src="/thumbnailPortfolio.png"
                  alt="work icons"
                  className={
                    "max-h-[15vh]  rounded-full md:max-h-[30vh] w-auto h-auto place-items-center place-content-center "
                  }
                />
                <div className="flex flex-row gap-3 mt-4">
                  <Tooltip content="LinkedIn">
                    <SocialIcon
                      network="linkedin"
                      url={data.linkedin}
                      fgColor="#f5f5f5"
                      bgColor="#110f13"
                      target="_blank"
                    />
                  </Tooltip>
                  <Tooltip content="GitHub">
                    <SocialIcon
                      network="github"
                      fgColor="#f5f5f5"
                      bgColor="#110f13"
                      url={data.github}
                      target="_blank"
                    />
                  </Tooltip>
                  <Tooltip content="Email">
                    <SocialIcon
                      network="email"
                      fgColor="#f5f5f5"
                      bgColor="#110f13"
                      url={data.mail}
                      target="_blank"
                    />
                  </Tooltip>
                </div>
              </div>
              <IntroText />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
