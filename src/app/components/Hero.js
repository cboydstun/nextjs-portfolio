"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleClick = () => {
        setIsDownloading(true);
        setTimeout(() => {
            // OPEN IN NEW TAB
            window.open("https://drive.google.com/file/d/1uHlHYWheX4TiTCT71MTOdb2OSReBFMlH/view?usp=sharing", "_blank");
        }, 1000);

        setIsDownloading(false);
    };


    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
            <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
                <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                    <span className="text-transparent text-6xl bg-clip-text text-white">
                        Hello!{" "}
                    </span>{" "}
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "I'm Chris.",
                            1000,
                            "Web Dev",
                            1000,
                            "Educator",
                            1000,
                            "Advocate",
                            1000,
                            "Trainer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
                    Passionate and meticulous web developer, dedicated to crafting responsive and user-friendly digital experiences through modern, clean, and maintainable code.
                </p>
                <div>
                    <button className="hover:bg-slate-200 bg-white text-black px-6 py-3 rounded-full mr-4">
                        <Link href="#contact">
                            Contact Me
                        </Link>
                    </button>
                    <button className="m-4 bg-white px-1 py-1  text-white rounded-full" onClick={handleClick} disabled={isDownloading}>
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
                    <Image
                        src="/images/pic.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};