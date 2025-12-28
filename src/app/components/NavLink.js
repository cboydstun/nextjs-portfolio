"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavLink({ href, title }) {
  return (
    <Link href={href} className="relative group">
      <motion.span
        className="block py-2 px-4 text-[#ADB7BE] text-lg md:text-xl font-medium transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {title}

        {/* Animated Underline */}
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Glow Effect */}
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-cyan-500/10 transition-all duration-300 blur-xl" />
      </motion.span>
    </Link>
  );
}
