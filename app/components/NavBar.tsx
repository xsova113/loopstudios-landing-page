"use client";

import Image from "next/image";
import { useEffect } from "react";
import { navVariants, slideIn } from "../utils/motion";
import { motion } from "framer-motion";

interface NavBarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = ["About", "Careers", "Events", "Products", "Support"];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      className={`flex flex-col sm:flex-row sticky`}
    >
      <nav className="flex items-top sm:items-center justify-between w-full">
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          width={150}
          height={80}
          className="max-h-[25px] sm:max-w-auto w-[150px]"
        />

        <div className="z-50">
          <Image
            src={
              isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"
            }
            alt="burger-icon"
            height={25}
            width={25}
            className={`sm:hidden block cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          />

          <div
            className={`text-white hidden sm:flex md:gap-8 sm:gap-3 transition-all ${
              isOpen && "sm:hidden"
            }`}
          >
            {navItems.map((i) => (
              <span key={i} className="group flex flex-col items-center">
                {i}
                <span className="hidden group-hover:block absolute mt-2 border-b-[3px] cursor-pointer">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
            ))}
          </div>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          variants={slideIn("left", "spring", 0.3, 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="sm:hidden text-white gap-5 pt-[150px] pr-[50px] flex flex-col sm:right-0 sm:flex-row md:gap-8 sm:gap-3 transition-all"
        >
          {navItems.map((i) => (
            <span
              key={i}
              className="font-extralight text-xl cursor-pointer hover:border-b-2 transition-all"
            >
              {i.toLocaleUpperCase()}
            </span>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
