"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";
import { Image } from "@nextui-org/react";
import IntroText from "./IntroText";

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
                      w-full  mt-4`}
            >
              <div className="center-container">
                <Image
                  src="/thumbnailPortfolio.jpg"
                  alt="work icons"
                  className={
                    "max-h-[15vh]  rounded-full md:max-h-[30vh] w-auto h-auto place-items-center place-content-center "
                  }
                />
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
