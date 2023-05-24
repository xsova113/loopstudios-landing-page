import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <div className="flex flex-col -mt-[150px] sm:pt-[140px] sm:flex-row sm:-mt-[250px] md:-mt-[250px] lg:-mt-[190px] transition-all justify-center items-center sm:overflow-hidden">
      <motion.img
        variants={fadeIn("right", "spring", 0.5, 1)}
        initial="hidden"
        whileInView={"show"}
        src={"/images/desktop/image-interactive.jpg"}
        alt="hero-image"
        className="mt-20 sm:min-w-[600px] min-w-full h-auto"
      />
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 1)}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-col bg-white sm:pt-20 sm:pl-20 sm:pb-3 sm:min-h-[300px] sm:max-w-[860px] sm:min-w-[550px] items-center text-center sm:text-start sm:align- my-12 sm:relative sm:right-[110px] sm:top-[96px]"
      >
        <h1 className="text-black text-[35px] font-light">
          {"The leader in interactive VR".toUpperCase()}
        </h1>
        <p className="text-[#8C8C8C] text-[15px] pt-4">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
