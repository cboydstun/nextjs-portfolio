"use client";
import React, { useState, useTransition, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";
import SkillsVisualization from "./SkillsVisualization";
import Image from "next/image";
import {
  HiAcademicCap,
  HiCode,
  HiLightningBolt,
  HiSparkles,
  HiHeart,
} from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: HiCode,
    content: <SkillsVisualization />,
  },
  {
    title: "Education",
    id: "education",
    icon: HiAcademicCap,
    content: (
      <div className="relative">
        {/* Timeline connector */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 hidden md:block" />

        <ul className="list-none space-y-6">
          {[
            { school: "Caltech", program: "Computer Science", highlight: true },
            { school: "W3 Schools", program: "Fullstack Web Development" },
            { school: "Full Stack Academy", program: "Web Development" },
            { school: "Kenzie Academy", program: "MERN Stack Development" },
            { school: "BloomTech", program: "Fullstack Web Development" },
            { school: "Texas Tech University", program: "Lubbock Texas" },
          ].map((edu, index) => (
            <motion.li
              key={edu.school}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-start gap-4 group relative"
            >
              {/* Timeline dot */}
              <div className="relative z-10 hidden md:block">
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-lg">🎓</span>
                </motion.div>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-500/50 blur-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Content card */}
              <motion.div
                className={`flex-1 glass-morphism p-4 rounded-lg border ${
                  edu.highlight
                    ? "border-purple-500 shadow-lg shadow-purple-500/50"
                    : "border-gray-700 group-hover:border-purple-500/50"
                } transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-purple-400 text-xl md:hidden">🎓</span>
                  <strong className="text-white text-lg">{edu.school}</strong>
                  {edu.highlight && (
                    <motion.span
                      className="text-yellow-400 text-sm"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⭐
                    </motion.span>
                  )}
                </div>
                <p className="text-gray-300">{edu.program}</p>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: FaTrophy,
    content: (
      <div className="grid grid-cols-1 gap-4">
        {[
          {
            name: "IT Security: Defense against the digital dark arts",
            url: "https://coursera.org/share/57d43ff4e127d5dff29917eeaf87acf7",
            badge: "🛡️",
          },
          {
            name: "Introduction to Cybersecurity",
            url: "https://certificates.simplicdn.net/share/3295048.pdf",
            badge: "🔐",
          },
          {
            name: "Operating Systems and You: Becoming a Power User",
            url: "https://www.coursera.org/account/accomplishments/verify/A3KK5SWXTMJB",
            badge: "💻",
          },
          {
            name: "System Administration and IT Infrastructure Services",
            url: "https://coursera.org/share/49da0bb6dff4c2b330e511ecb8916c3c",
            badge: "⚙️",
          },
          {
            name: "Technical Support Fundamentals",
            url: "https://coursera.org/share/436693b477d6323010919529ca4aa830",
            badge: "🔧",
          },
          {
            name: "The Bits and Bytes of Computer Networking",
            url: "https://www.coursera.org/account/accomplishments/verify/SCK5D9ANXCFU",
            badge: "🌐",
          },
        ].map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-morphism p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
          >
            <a
              href={cert.url}
              className="flex items-start gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                className="text-3xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {cert.badge}
              </motion.span>
              <div className="flex-1">
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">
                    View Certificate
                  </span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const STATS = [
  {
    label: "Years Experience",
    value: "5+",
    icon: HiLightningBolt,
    color: "text-yellow-400",
  },
  {
    label: "Projects Completed",
    value: "50+",
    icon: HiSparkles,
    color: "text-purple-400",
  },
  {
    label: "Certifications",
    value: "10+",
    icon: FaTrophy,
    color: "text-cyan-400",
  },
  {
    label: "Lines of Code",
    value: "100K+",
    icon: HiCode,
    color: "text-green-400",
  },
];

const QUICK_FACTS = [
  "🚀 Building the future, one line of code at a time",
  "💡 Turning coffee into code since 2019",
  "🎯 Passionate about clean code & user experience",
  "🌟 Forever learning, forever growing",
];

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white py-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16 relative z-10"
      >
        {/* Profile Image with 3D Effect */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Morphing geometric frame */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-3xl" />
          </motion.div>

          {/* Profile card */}
          <motion.div
            className="relative glass-morphism p-8 rounded-2xl border border-purple-500/50"
            whileHover={{ scale: 1.02 }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
            }}
          >
            <div className="relative w-64 h-64 mx-auto mb-6">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900">
                <Image
                  src="/images/pic.png"
                  alt="Chris Boydstun"
                  width={240}
                  height={240}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="glass-morphism p-3 rounded-lg text-center border border-gray-700 hover:border-purple-500/50 transition-all"
                  >
                    <Icon className={`text-3xl ${stat.color} mx-auto mb-2`} />
                    <motion.div
                      className="text-2xl font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Facts */}
            <div className="mt-6 space-y-2">
              {QUICK_FACTS.map((fact, index) => (
                <motion.div
                  key={fact}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-sm text-gray-300 flex items-center gap-2"
                  whileHover={{ x: 10, color: "#a855f7" }}
                >
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {fact.split(" ")[0]}
                  </motion.span>
                  <span>{fact.slice(2)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hey there! 👋 I'm a{" "}
              <strong className="text-white">
                passionate full stack developer
              </strong>{" "}
              who believes that great code is like poetry—elegant, purposeful,
              and impactful. I don't just write code; I craft digital
              experiences that solve real problems and delight users.
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              My journey spans across{" "}
              <strong className="text-purple-400">
                JavaScript, React, Node.js, PostgreSQL, MongoDB
              </strong>
              , and the entire modern web stack. But beyond the tech buzzwords,
              I'm a <HiHeart className="inline text-red-500" /> lifelong
              learner, a <HiSparkles className="inline text-yellow-400" />{" "}
              problem solver, and someone who genuinely gets excited about clean
              architecture and smooth user experiences.
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Whether it's building scalable backends, crafting pixel-perfect
              frontends, or architecting cloud solutions, I bring creativity,
              dedication, and a touch of magic ✨ to every project. Let's build
              something amazing together!
            </p>
          </motion.div>

          {/* Enhanced Tab System */}
          <div className="flex flex-row justify-start mt-8 gap-2 flex-wrap relative">
            {TAB_DATA.map((t) => {
              const Icon = t.icon;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => handleTabChange(t.id)}
                  className={`
                    relative px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${
                      tab === t.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab === t.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="text-xl" />
                    {t.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 15 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="mt-8 relative"
            >
              {/* Content wrapper with 3D perspective */}
              <div className="perspective-1000">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
