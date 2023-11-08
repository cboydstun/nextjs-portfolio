"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Caltech - Computer Science</li>
                <li>W3 Schools - Fullstack Web Development</li>
                <li>Full Stack Academy - Web Development</li>
                <li>Kenzie Academy - MERN Stack Development</li>
                <li>BloomTech - Fullstack Web Development</li>
                <li>Texas Tech University, Lubbock Texas</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li><a href="https://coursera.org/share/57d43ff4e127d5dff29917eeaf87acf7">IT Security: Defense against the digital dark arts</a></li>
                <li><a href="https://certificates.simplicdn.net/share/3295048.pdf">Introduction to Cybersecurity</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/verify/A3KK5SWXTMJB">Operating Systems and You: Becoming a Power User</a></li>
                <li><a href="https://coursera.org/share/49da0bb6dff4c2b330e511ecb8916c3c">System Administration and IT Infrastructure Services</a></li>
                <li><a href="https://coursera.org/share/436693b477d6323010919529ca4aa830">Technical Support Fundamentals</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/verify/SCK5D9ANXCFU">The Bits and Bytes of Computer Networking</a></li>
            </ul>
        ),
    },
];

export default function About() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/workstation.gif" width={500} height={500} alt="Computer Workstation" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 id="about" className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-white texxt-base md:text-lg">
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                        Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};