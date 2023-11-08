"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
            <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
                <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                    <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Hello!{" "}
                    </span>{" "}
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "I am Chris.",
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
                    <button className="bg-gradient-to-br from-blue-500 via-green-500 to-purple-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
                        Hire Me
                    </button>
                    <button className="m-4 bg-gradient-to-br from-blue-500 via-green-500 to-purple-500 px-1 py-1  text-white rounded-full">
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