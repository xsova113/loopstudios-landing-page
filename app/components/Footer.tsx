import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div variants={footerVariants} initial='hidden' whileInView={'show'} className="flex flex-col pb-14 sm:pb-4 sm:px-16 px-10 sm:flex-row sm:justify-between items-center bg-black text-white">
      <div className="my-11 flex flex-col sm:flex-row">
        <div className="flex flex-col items-center text-center sm:items-start">
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={100}
            height={80}
            className="w-[180px] h-auto mb-11 sm:mb-6"
          />
          <div className="flex flex-col sm:flex-row gap-4 sm:text-sm md:text-base">
            <span className="cursor-pointer hover:border-b-2 border-white transition-all pb-2">About</span>
            <span className="cursor-pointer hover:border-b-2 border-white transition-all pb-2">Careers</span>
            <span className="cursor-pointer hover:border-b-2 border-white transition-all pb-2">Events</span>
            <span className="cursor-pointer hover:border-b-2 border-white transition-all pb-2">Products</span>
            <span className="cursor-pointer hover:border-b-2 border-white transition-all pb-2">Support</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 justify-center sm:justify-end sm:mb-4">
          <Image
            src={"/images/icon-facebook.svg"}
            alt="social-icon"
            width={25}
            height={25}
            className="hover:border-b-2 border-white pb-2 transition-all cursor-pointer"
          />
          <Image
            src={"/images/icon-instagram.svg"}
            alt="social-icon"
            width={25}
            height={25}
            className="hover:border-b-2 border-white pb-2 transition-all cursor-pointer"
          />
          <Image
            src={"/images/icon-pinterest.svg"}
            alt="social-icon"
            width={25}
            height={25}
            className="hover:border-b-2 border-white pb-2 transition-all cursor-pointer"
          />
          <Image
            src={"/images/icon-twitter.svg"}
            alt="social-icon"
            width={25}
            height={25}
            className="hover:border-b-2 border-white pb-2 transition-all cursor-pointer"
          />
        </div>
        <p className="py-8 sm:py-0 sm:text-xs md:text-base transition text-gray-400/80">
          © {currentYear} Loopstudios. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
