"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Hero3D from "./Hero3D";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = () => {
    setIsDownloading(true);
    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1uHlHYWheX4TiTCT71MTOdb2OSReBFMlH/view?usp=sharing",
        "_blank",
      );
    }, 1000);
    setIsDownloading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 lg:py-24">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="col-span-1 lg:col-span-7 place-self-center lg:place-self-start text-center lg:text-left z-10">
          <motion.div variants={itemVariants}>
            <h1 className="text-white max-w-2xl mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              <span className="gradient-text">Crafting Code.</span>
              <br />
              <span className="text-white">Empowering People.</span>
            </h1>
            <div className="text-gray-400 text-xl sm:text-2xl font-medium mb-6">
              Chris Boydstun • Full Stack Developer • Educator • Advocate
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 mb-6 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
          >
            I bridge the gap between cutting-edge technology and human
            potential. With expertise spanning from{" "}
            <span className="text-purple-400 font-semibold">React</span> to{" "}
            <span className="text-cyan-400 font-semibold">Node.js</span>, I
            don't just build applications—I create digital experiences that
            solve real problems and inspire growth.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
          >
            {["Full Stack", "IT Security", "Training", "Cybersecurity"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 rounded-full text-sm font-medium text-gray-200 backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ),
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-full hover-glow"
            >
              <Link href="#contact">Contact Me</Link>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              disabled={isDownloading}
              className="glass-morphism text-white font-bold px-8 py-4 rounded-full hover-glow border border-purple-500"
            >
              <span className="flex items-center justify-center gap-2">
                {isDownloading ? "Downloading..." : "Download CV"}
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* 3D Visual Element */}
        <motion.div
          className="col-span-1 lg:col-span-5 place-self-center w-full h-[300px] sm:h-[400px] lg:h-[500px] relative"
          variants={itemVariants}
        >
          <div className="absolute inset-0 animate-float">
            <Hero3D />
          </div>

          {/* Fallback Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative backdrop-blur-sm">
              <Image
                src="/images/pic.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={300}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
