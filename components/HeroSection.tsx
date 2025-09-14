"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1661768065574-c2a463343342?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const tornPaperVariants = {
  initial: {
    opacity: 0,
    y: 50,
    rotate: -10,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -50,
    rotate: 10,
    scale: 0.8,
  },
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row justify-center md:justify-between items-center relative overflow-hidden py-12 px-6 md:p-12"
      id="home"
    >
      <motion.div
        className="flex gap-6 flex-col z-10 w-full text-center md:text-left md:w-auto md:ml-20"
        initial="hidden"
        animate="visible"
        variants={textContainerVariants}
      >
        <motion.h1
          className="text-4xl md:text-[64px] tracking-widest text-[#ff3479] leading-[1.2]"
          variants={textItemVariants}
        >
          Book Professional, <br className="md:hidden" />{" "}
          <strong className="underline md:italic">Makeup</strong> <br /> Artists
          Online
        </motion.h1>
        <motion.p
          className="text-lg md:text-[40px] tracking-tight"
          variants={textItemVariants}
        >
          Bridal, Glam, Casual, Editorial & More
        </motion.p>
        <motion.button
          className="bg-[#303131] px-4 py-2 md:px-6 md:py-4 rounded cursor-pointer md:w-40 font-normal text-xl hover:bg-white hover:text-black ease-in transition mx-auto md:mx-0 inline-flex items-center gap-4"
          variants={textItemVariants}
        >
          Explore <ArrowUpCircleIcon className="rotate-90" />
        </motion.button>
      </motion.div>
      <div className="mt-10 md:mt-0 w-full max-w-sm md:w-[28rem] h-80 md:h-[30rem] relative overflow-hidden shadow-lg rounded-3xl mx-auto md:mr-20">
        <AnimatePresence>
          <motion.div key={currentImage} className="absolute w-full h-full">
            <motion.div
              className="absolute w-full h-full bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: `url(${images[currentImage]})` }}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tornPaperVariants}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                currentImage === index ? "bg-[#ff3479]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
