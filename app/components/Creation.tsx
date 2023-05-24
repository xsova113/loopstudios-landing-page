import Image from "next/image";
import { creations } from "../data/creations";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../utils/motion";

const Creation = () => {
  return (
    <div className="flex flex-col sm:pt-[100px] pt-11 items-center sm:items-stretch">
      <div className="sm:flex-row flex flex-col sm:justify-between text-center sm:items-baseline">
        <motion.h1
          variants={fadeIn("right", "spring", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-[35px] font-light mb-11"
        >
          OUR CREATIONS
        </motion.h1>
        <div>
          <motion.button
            variants={fadeIn("left", "spring", 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            className="hidden sm:block hover:bg-black ring-black ring-2 px-7 py-2 text-black hover:text-white transition"
          >
            SEE ALL
          </motion.button>
        </div>
      </div>
      <motion.div
        variants={fadeIn("bottom", "spring", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="sm:flex sm:flex-wrap sm:gap-[70px] sm:justify-center grid-cols-4 sm:mb-0 mb-8"
      >
        {creations.map((item) => (
          <div key={item.title} className="group cursor-pointer">
            <Image
              src={item.desktop}
              alt="images"
              height={200}
              width={80}
              className="h-auto w-[230px] hidden sm:block group group-hover:opacity-40 transition"
            />
            <Image
              src={item.mobile}
              alt="images"
              height={800}
              width={800}
              className="min-w-full sm:hidden group group-hover:opacity-40 transition"
            />
            <h1
              className={`relative text-white sm:text-lg md:text-xl font-light text-md leading-4 md:leading-2 sm:bottom-[70px] bottom-[40px] left-5 sm:left-3 max-w-[90px] -mb-5 group-hover:text-black transition-all 
              sm:${item.title === "The grid" && "max-w-[80px]"} 
              ${item.title === "The grid" && "max-w-[40px]"}
              sm:${item.title === "From up above VR" && "min-w-[120px]"}`}
            >
              {item.title.toUpperCase()}
            </h1>
          </div>
        ))}
      </motion.div>
      <motion.button
        variants={fadeIn("top", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="sm:hidden w-[130px] inline-block hover:bg-black ring-black ring-2 px-7 py-3 text-black hover:text-white mb-10"
      >
        SEE ALL
      </motion.button>
    </div>
  );
};

export default Creation;
