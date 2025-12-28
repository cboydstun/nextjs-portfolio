"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiReact, SiNodedotjs, SiJavascript, SiPostgresql, SiMongodb, SiExpress, SiTailwindcss, SiGit, SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills = [
  { name: "React.js", level: 95, icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", level: 90, icon: SiNodedotjs, color: "#339933" },
  { name: "JavaScript", level: 92, icon: SiJavascript, color: "#F7DF1E" },
  { name: "PostgreSQL", level: 85, icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", level: 88, icon: SiMongodb, color: "#47A248" },
  { name: "Express", level: 90, icon: SiExpress, color: "#FFFFFF" },
  { name: "Tailwind CSS", level: 93, icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", level: 87, icon: SiGit, color: "#F05032" },
  { name: "Docker", level: 80, icon: SiDocker, color: "#2496ED" },
  { name: "AWS", level: 78, icon: FaAws, color: "#FF9900" },
];

export default function SkillsVisualization() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="py-12">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8 text-center gradient-text"
      >
        Technical Skills
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-morphism rounded-lg p-4 hover-glow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Icon className="text-2xl" style={{ color: skill.color }} />
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  className="text-purple-400 font-bold"
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 relative"
                >
                  <div className="absolute inset-0 shimmer" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
