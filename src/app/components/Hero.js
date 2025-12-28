"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
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
            window.open("https://drive.google.com/file/d/1uHlHYWheX4TiTCT71MTOdb2OSReBFMlH/view?usp=sharing", "_blank");
        }, 1000);
        setIsDownloading(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
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
                        <h1 className="text-white max-w-2xl mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
                            <span className="gradient-text">
                                Hello!
                            </span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    "I'm Chris.",
                                    1000,
                                    "I'm a Web Dev 💻",
                                    1000,
                                    "I'm an Educator 📚",
                                    1000,
                                    "I'm an Advocate 🎯",
                                    1000,
                                    "I'm a Trainer 🚀",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-white"
                            />
                        </h1>
                    </motion.div>

                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-300 mb-8 text-base sm:text-lg lg:text-xl max-w-2xl"
                    >
                        Passionate and meticulous web developer, dedicated to crafting responsive and user-friendly digital experiences through modern, clean, and maintainable code.
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-full hover-glow"
                        >
                            <Link href="#contact">
                                Contact Me
                            </Link>
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

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <HiArrowDown className="text-purple-400 text-3xl" />
            </motion.div>
        </section>
    );
}
