"use client";
import { motion } from "motion/react";

const Marquee = () => {
  return (
    <div className="mb-20 overflow-hidden" id="about">
      <motion.div
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
        initial={{ translate: 0 }}
        animate={{ translate: "-125%" }}
        className="flex"
      >
        <div className="flex text-nowrap text-6xl md:text-9xl">
          <h2 className="text-[#c099ff] ml-10 mr-10 md:ml-20 md:mr-20">
            Built for ✺
          </h2>
          <h2>
            Beauty & <span className="text-[#ff3479]">Makeup</span>
          </h2>
        </div>
        <div className="flex text-nowrap text-6xl md:text-9xl">
          <h2 className="text-[#c099ff] ml-10 mr-10 md:ml-20 md:mr-20">
            Built for ✺
          </h2>
          <h2 className="text-3xl md:text-9xl">
            Beauty & <span className="text-[#ff3479]">Makeup</span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
