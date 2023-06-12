"use client";

import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex flex-col sm:py-10 sm:px-16 px-10 py-10 w-screen h-screen`}
    >
      <div
        className={`absolute inset-0 transition duration-300 opacity-0 ${
          isOpen && `opacity-100 bg-black w-screen h-screen`
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`flex flex-col`}>
        <motion.img
          variants={fadeIn("left", "spring", 0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          src={"/images/desktop/image-hero.jpg"}
          alt="bg-image"
          className="sm:min-w-[1300px] min-w-[1000px] w-screen sm:min-h-[680px] hidden sm:block absolute inset-0 -z-10"
        />
        <motion.img
          variants={fadeIn("left", "spring", 0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          src={"/images/mobile/image-hero.jpg"}
          alt="bg-image"
          className="w-screen max-h-[850px] block absolute sm:hidden inset-0 -z-10"
        />
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <motion.div
          variants={textVariant(1)}
          initial="hidden"
          whileInView={"show"}
          className="border-[2px] sm:w-[350px] p-6 mt-[100px] sm:mt-[140px] text-[40px] text-white font-light flex justify-center items-center"
        >
          {"Immersive experiences that deliver".toUpperCase()}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
