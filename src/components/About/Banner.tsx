import React from "react";
import { motion } from "framer-motion";
import { data } from "@/app/InfoConfig";
import { Image } from "@nextui-org/react";

type Props = {};

const Banner = (props: Props) => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  const bannerItems = data.banner.map((item: string, index: number) => {
    return (
      <motion.div
        initial="hidden"
        variants={imageVariants}
        whileInView={"visible"}
        key={index}
        custom={index}
        transition={{ delay: index * animationDelay }}
      >
        <Image
          src={`/${item}`}
          alt="item"
          className=" w-auto max-h-[100px] rounded-none "
        />
      </motion.div>
    );
  });

  return (
    <div className="bg-black/50 h-20 p-4 md:p-10 m-0 flex flex-row gap-8 md:gap-16 justify-between center-container">
      {bannerItems}
    </div>
  );
};

export default Banner;
