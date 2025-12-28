"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import LogoImage from "../../../public/logo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
};

export default function MenuOverlay({ links, closeMenu }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop with blur */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20" />

      {/* Logo at Top */}
      <motion.div
        variants={logoVariants}
        className="relative z-50 mb-12 md:mb-16"
      >
        <Link href="/" onClick={closeMenu}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="relative"
          >
            <Image
              src={LogoImage}
              width={80}
              height={80}
              className="rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-2 shadow-2xl shadow-purple-500/50"
              alt="Logo"
            />
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 opacity-50 blur-2xl animate-pulse" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Menu Content */}
      <motion.ul
        className="relative z-50 flex flex-col items-center justify-center gap-6 md:gap-10"
        variants={containerVariants}
      >
        {links.map((link, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="transform transition-transform duration-300"
            onClick={closeMenu}
          >
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
              <NavLink href={link.path} title={link.title} />
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </motion.div>
  );
}
