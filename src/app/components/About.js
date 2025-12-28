"use client";
import React, { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillsVisualization from "./SkillsVisualization";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsVisualization />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none space-y-3">
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-start gap-3"
        >
          <span className="text-purple-400 text-xl">🎓</span>
          <div>
            <strong className="text-white">Caltech</strong> - Computer Science
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-start gap-3"
        >
          <span className="text-purple-400 text-xl">🎓</span>
          <div>
            <strong className="text-white">W3 Schools</strong> - Fullstack Web
            Development
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-3"
        >
          <span className="text-purple-400 text-xl">🎓</span>
          <div>
            <strong className="text-white">Full Stack Academy</strong> - Web
            Development
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-3"
        >
          <span className="text-purple-400 text-xl">🎓</span>
          <div>
            <strong className="text-white">Kenzie Academy</strong> - MERN Stack
            Development
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-start gap-3"
        >
          <span className="text-purple-400 text-xl">🎓</span>
          <div>
            <strong className="text-white">BloomTech</strong> - Fullstack Web
            Development
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-start gap-3"
        >
          <span className="text-purple-400 text-xl">🎓</span>
          <div>
            <strong className="text-white">Texas Tech University</strong>,
            Lubbock Texas
          </div>
        </motion.li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none space-y-3">
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-start gap-3"
        >
          <span className="text-cyan-400 text-xl">🏆</span>
          <a
            href="https://coursera.org/share/57d43ff4e127d5dff29917eeaf87acf7"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT Security: Defense against the digital dark arts
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-start gap-3"
        >
          <span className="text-cyan-400 text-xl">🏆</span>
          <a
            href="https://certificates.simplicdn.net/share/3295048.pdf"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Cybersecurity
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-3"
        >
          <span className="text-cyan-400 text-xl">🏆</span>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/A3KK5SWXTMJB"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operating Systems and You: Becoming a Power User
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-3"
        >
          <span className="text-cyan-400 text-xl">🏆</span>
          <a
            href="https://coursera.org/share/49da0bb6dff4c2b330e511ecb8916c3c"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            System Administration and IT Infrastructure Services
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-start gap-3"
        >
          <span className="text-cyan-400 text-xl">🏆</span>
          <a
            href="https://coursera.org/share/436693b477d6323010919529ca4aa830"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Technical Support Fundamentals
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-start gap-3"
        >
          <span className="text-cyan-400 text-xl">🏆</span>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/SCK5D9ANXCFU"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Bits and Bytes of Computer Networking
          </a>
        </motion.li>
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
    <section id="about" className="text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
          <Image
            src="/images/workstation.gif"
            width={500}
            height={500}
            alt="Computer Workstation"
            className="relative rounded-lg"
          />
        </motion.div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I am a{" "}
            <strong className="text-white">full stack web developer</strong>{" "}
            with a passion for creating interactive and responsive web
            applications. I have experience working with{" "}
            <strong className="text-purple-400">
              JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
              HTML, CSS, and Git
            </strong>
            . I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>

          <div className="flex flex-row justify-start mt-8 gap-2 flex-wrap">
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

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
