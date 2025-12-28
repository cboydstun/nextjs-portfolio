"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaCode, FaProjectDiagram, FaCoffee, FaAward } from "react-icons/fa";

function Counter({ value, suffix = "", duration = 2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [inView, value, duration, count]);

  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}

const stats = [
  {
    icon: FaCode,
    value: 50000,
    suffix: "+",
    label: "Lines of Code",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FaProjectDiagram,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaCoffee,
    value: 1337,
    suffix: "",
    label: "Cups of Coffee",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: FaAward,
    value: 8,
    suffix: "+",
    label: "Certifications",
    color: "from-green-500 to-emerald-500",
  },
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">By The Numbers</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here's a snapshot of my journey as a developer
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-morphism rounded-xl p-8 text-center hover-glow relative overflow-hidden group"
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4 relative z-10`}
              >
                <Icon className="text-white text-2xl" />
              </motion.div>

              {/* Counter */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-gray-300 font-medium relative z-10">
                {stat.label}
              </p>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
